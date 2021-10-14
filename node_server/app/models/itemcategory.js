'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ItemCategory.belongsTo(models.Item, {
        as: 'item',
        foreignKey: 'itemId'
      });
      ItemCategory.belongsTo(models.Category, {
        as: 'category',
        foreignKey: 'categoryId'
      });
    }
  };
  ItemCategory.init({
    itemId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ItemCategory',
  });
  
  return ItemCategory;
};