'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Image.init({
    itemId: DataTypes.INTEGER,
    varientId: DataTypes.INTEGER,
    alt: DataTypes.STRING,
    src: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Image',
  });
  Image.belongsTo(models.Item, {
    as: 'itemImage',
    foreignKey: 'itemId'
  });
  Image.belongsTo(models.Varient, {
    as: 'varientImage',
    foreignKey: 'varientId'
  });
  return Image;
};