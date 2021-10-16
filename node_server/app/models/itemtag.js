'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ItemTag.belongsTo(models.Item, {
        as: 'item',
        foreignKey: 'itemId'
      });
      ItemTag.belongsTo(models.Tag, {
        as: 'tag',
        foreignKey: 'tagId'
      });
    }
  };
  ItemTag.init({
    itemId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ItemTag',
  });
  
  return ItemTag;
};