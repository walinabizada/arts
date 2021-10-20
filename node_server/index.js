const express = require("express");
const cors = require("cors");
var bodyParser = require('body-parser');

const app = express();

var corsOptions = {
  // origin: "http://localhost:1112"
  origin: "http://localhost:4200"
};

app.use( bodyParser.json({limit: '50mb'}) );
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit:50000
}));

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

// In development, you may need to drop existing tables and re-sync database. Just use force: true as following code:
/*db.sequelize.sync({force: true}).then(()=>{
    console.log("Drop and re-sync db.");
});*/

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
require("./app/routes/tutorial.routes")(app);
require("./app/routes/item.routes")(app);
require("./app/routes/user.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 1111;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
