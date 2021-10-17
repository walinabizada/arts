const db = require("../models");
const User = db.users;
const fs = require('fs');
const bcrypt = require("bcrypt");
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  const body = req.body;
  if (!(body.email && body.password && body.fname && body.lname && body.uname)) {
    res.status(400).send({
      message: "You Carefully fill the Rigistration Form!"
    });
    return;
  }

  const salt = bcrypt.genSalt(10);
  const password =  bcrypt.hash(body.password.toString(), salt);
  // Create a User
  const user = {
    firstName: body.fname,
    lastName: body.lname,
    userName: body.uname,
    password: password,
    email: body.email,
    phone: body.phone,
    dob: body.dob,
    gender: body.gender,
    accountType: 'Normal',
    image: saveImage(body.image),
  };
   

  // Save User in the database
  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });

  
};
  

/*Download the base64 image in the server and returns the filename and path of image.*/
function saveImage(baseImage) {
  /*path of the folder where your project is saved. (In my case i got it from config file, root path of project).*/
  const uploadPath = "assests";
  const imgname = new Date().getTime().toString();
  //path of folder where you want to save the image.
  const localPath = `${uploadPath}/users/`;
  //Find extension of file
  const ext = baseImage.substring(baseImage.indexOf("/")+1, baseImage.indexOf(";base64"));
  const fileType = baseImage.substring("data:".length,baseImage.indexOf("/"));
  //Forming regex to extract base64 data of file.
  const regex = new RegExp(`^data:${fileType}\/${ext};base64,`, 'gi');
  //Extract base64 data.
  const base64Data = baseImage.replace(regex, "");
  const filename = `user-${imgname}.${ext}`;

  //Check that if directory is present or not.
  if(!fs.existsSync(`${uploadPath}/users/`)) {
      fs.mkdirSync(`${uploadPath}/users/`);
  }
  if (!fs.existsSync(localPath)) {
      fs.mkdirSync(localPath);
  }
  fs.writeFileSync(localPath+filename, base64Data, 'base64');
  return filename;
};

// Retrieve all users from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  User.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

// Find a single User with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};

// // Delete all users from the database.
// exports.deleteAll = (req, res) => {
//   User.destroy({
//     where: {},
//     truncate: false
//   })
//     .then(nums => {
//       res.send({ message: `${nums} users were deleted successfully!` });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all users."
//       });
//     });
// };

// find all published User
// exports.findAllPublished = (req, res) => {
//   User.findAll({ where: { published: true } })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving users."
//       });
//     });
// };
