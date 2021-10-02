'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Item.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.STRING,
    discount: DataTypes.STRING,
    sale: DataTypes.BOOLEAN,
    stock: DataTypes.INTEGER,
    new: DataTypes.BOOLEAN,
    metaTitle: DataTypes.STRING,
    metaDescription: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};