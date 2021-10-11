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
    metaDescription: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Item',
  });
  Item.belongsTo(models.User, {
    as: 'user',
    foreignKey: 'userId'
  });
  Item.hasMany(models.ItemCollection, {
    as: 'itemCollection',
    foreignKey: 'itemId'
  });
  Item.hasMany(models.ItemCategory, {
    as: 'itemCategory',
    foreignKey: 'itemId'
  });
  Item.hasMany(models.OrderItem, {
    as: 'orderItem',
    foreignKey: 'itemId'
  });
  Item.hasMany(models.Tag, {
    as: 'tag',
    foreignKey: 'itemId'
  });
  Item.hasMany(models.Varient, {
    as: 'varient',
    foreignKey: 'varientId'
  });
  Item.hasMany(models.Image, {
    as: 'itemImage',
    foreignKey: 'itemId'
  });
  Item.hasMany(models.ItemMaterial, {
    as: 'itemMaterial',
    foreignKey: 'itemId'
  });
  Item.hasMany(models.Tag, {
    as: 'tag',
    foreignKey: 'itemId'
  });
  return Item;
};