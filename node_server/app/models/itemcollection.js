'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemCollection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ItemCollection.belongsTo(models.Item, {
        as: 'item',
        foreignKey: 'itemId'
      });
      ItemCollection.belongsTo(models.Collection, {
        as: 'collection',
        foreignKey: 'collectionId'
      });
    }
  };
  ItemCollection.init({
    itemId: DataTypes.INTEGER,
    collectionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ItemCollection',
  });
  
  return ItemCollection;
};