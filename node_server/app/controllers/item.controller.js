const db = require("../models");
const Item = db.items;
const Image = db.images;
const ItemMaterial = db.itemmaterials;
const ItemCategory = db.itemcategories;
const ItemTag = db.itemtags;
const fs = require('fs');
const Op = db.Sequelize.Op;

// Create and Save a new Item
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Item
  const item = {
    title: req.body.title,
    price: req.body.price,
    discount: req.body.discount,
    totalItem: req.body.totalItem,
    metaTitle: req.body.metaTitle,
    metaDescription: req.body.metaDesc,
    description: req.body.description,
    new: true,
    sale: false,
    stock: req.body.totalItem,
    dx: req.body.dx,
    dy: req.body.dy,
    // userId: req.body.userId,
  };
   

  // Save Item in the database
  Item.create(item)
    .then(data => {
      // to create some random id or name for your image name
      req.body.images.forEach(elem => {
        const imagename = saveImage(elem);
        const image ={
          itemId: data.id,
          alt: req.body.title,
          src: imagename
        };
        saveImageToDb(image);
      });
      req.body.material.forEach(i =>{
        const itemmaterial = {
          itemId: data.id,
          materialId: i.item_id
        };
        saveItemMaterial(itemmaterial);
      });
      req.body.selectedCat.forEach(i =>{
        ItemCategory.create({itemId: data.id, categoryId: i.cat_id})
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Item."
          });
        });
      });
      ItemTag.create({itemId: data.id, tagId: req.body.selectedTag})
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Item."
          });
        });
      res.send("");
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Item."
      });
    });

  
};
 // Save Images in the database
 function saveItemMaterial(itemmaterial){
  // Save Images in the database
  ItemMaterial.create(itemmaterial)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Item."
    });
  });
 };

 // Save Images in the database
 function saveImageToDb(image){
  // Save Images in the database
  Image.create(image)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Item."
    });
  });
 };

/*Download the base64 image in the server and returns the filename and path of image.*/
function saveImage(baseImage) {
  /*path of the folder where your project is saved. (In my case i got it from config file, root path of project).*/
  const uploadPath = "assests";
  const imgname = new Date().getTime().toString();
  //path of folder where you want to save the image.
  const localPath = `${uploadPath}/items/`;
  //Find extension of file
  const ext = baseImage.substring(baseImage.indexOf("/")+1, baseImage.indexOf(";base64"));
  const fileType = baseImage.substring("data:".length,baseImage.indexOf("/"));
  //Forming regex to extract base64 data of file.
  const regex = new RegExp(`^data:${fileType}\/${ext};base64,`, 'gi');
  //Extract base64 data.
  const base64Data = baseImage.replace(regex, "");
  const filename = `item-${imgname}.${ext}`;

  //Check that if directory is present or not.
  if(!fs.existsSync(`${uploadPath}/items/`)) {
      fs.mkdirSync(`${uploadPath}/items/`);
  }
  if (!fs.existsSync(localPath)) {
      fs.mkdirSync(localPath);
  }
  fs.writeFileSync(localPath+filename, base64Data, 'base64');
  return filename;
};

// Retrieve all items from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Item.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving items."
      });
    });
};

// Find a single Item with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Item.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Item with id=" + id
      });
    });
};

// Update a Item by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Item.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Item was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Item with id=${id}. Maybe Item was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Item with id=" + id
      });
    });
};

// Delete a Item with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Item.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Item was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Item with id=${id}. Maybe Item was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Item with id=" + id
      });
    });
};

// // Delete all items from the database.
// exports.deleteAll = (req, res) => {
//   Item.destroy({
//     where: {},
//     truncate: false
//   })
//     .then(nums => {
//       res.send({ message: `${nums} items were deleted successfully!` });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all items."
//       });
//     });
// };

// find all published Item
// exports.findAllPublished = (req, res) => {
//   Item.findAll({ where: { published: true } })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving items."
//       });
//     });
// };
