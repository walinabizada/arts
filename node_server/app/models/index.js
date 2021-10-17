const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

db.users = require("./user.js")(sequelize, Sequelize);
db.items = require("./item.js")(sequelize, Sequelize);
db.images = require("./image.js")(sequelize, Sequelize);
db.tags = require("./tag.js")(sequelize, Sequelize);
db.itemtags = require("./itemtag.js")(sequelize, Sequelize);
db.orders = require("./order.js")(sequelize, Sequelize);
db.orderitems = require("./orderitem.js")(sequelize, Sequelize);
db.transactions = require("./transaction.js")(sequelize, Sequelize);
db.taxes = require("./tax.js")(sequelize, Sequelize);
db.materials = require("./material.js")(sequelize, Sequelize);
db.itemmaterials = require("./itemmaterial.js")(sequelize, Sequelize);
db.categories = require("./category.js")(sequelize, Sequelize);
db.itemcategories = require("./itemcategory.js")(sequelize, Sequelize);
db.faqs = require("./faq.js")(sequelize, Sequelize);
db.addresses = require("./address.js")(sequelize, Sequelize);

module.exports = db;
