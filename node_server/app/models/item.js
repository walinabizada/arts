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
      Item.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'userId'
      });
      Item.hasMany(models.ItemCategory, {
        as: 'itemCategory',
        foreignKey: 'itemId'
      });
      Item.hasMany(models.OrderItem, {
        as: 'orderItem',
        foreignKey: 'itemId'
      });
      Item.hasMany(models.ItemTag, {
        as: 'itemtag',
        foreignKey: 'itemId'
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
    }
  };
  Item.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.STRING,
    discount: DataTypes.STRING,
    priority: { 
      type:DataTypes.ENUM('0', '1', '2'),
      defaultValue: '0'
    },
    sale: DataTypes.BOOLEAN,
    stock: DataTypes.INTEGER,
    new: DataTypes.BOOLEAN,
    metaTitle: DataTypes.STRING,
    metaDescription: DataTypes.STRING,
    dx: DataTypes.STRING,
    dy: DataTypes.STRING,
    size: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Item',
  });
  
  return Item;
};