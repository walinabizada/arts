'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemMaterial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ItemMaterial.belongsTo(models.Item, {
        as: 'item',
        foreignKey: 'itemId'
      });
      ItemMaterial.belongsTo(models.Material, {
        as: 'material',
        foreignKey: 'materialId'
      });
    }
  };
  ItemMaterial.init({
    itemId: DataTypes.INTEGER,
    materialId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ItemMaterial',
  });
  
  return ItemMaterial;
};