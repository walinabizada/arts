const { authJwt } = require("../middleware");
const users = require("../controllers/user.controller.js");

module.exports = function(app) {
  
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers", 
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get('/api/users/all', users.findAll);

  // app.get('/api/users/:id', users.findOne);
  app.get('/api/users/:id', [authJwt.verifyToken], users.findOne);
  app.put('/api/users/:id', [authJwt.verifyToken], users.update);
  

  // var router = require("express").Router();
  
    // Create a new Tutorial
    // router.post("/", users.create);
  
    // Retrieve all Tutorials
    // router.get("/", users.findAll);
   
    // Retrieve a single Tutorial with id
    // router.get("/:id", users.findOne);
  
    // Update a Tutorial with id
    // router.put("/:id", users.update);
  
    // Delete a Tutorial with id
    // router.delete("/:id", users.delete);
   
    // app.use('/api/users', router);
};
  