'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Varient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Varient.init({
    itemId: DataTypes.INTEGER,
    dx: DataTypes.STRING,
    dy: DataTypes.STRING,
    size: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Varient',
  });
  Varient.belongsTo(models.Item, {
    as: 'item',
    foreignKey: 'itemId'
  });
  Varient.hasMany(models.Image, {
    as: 'varient',
    foreignKey: 'varientId'
  });
  Varient.hasMany(models.ItemMaterial, {
    as: 'varient',
    foreignKey: 'varientId'
  });
  
  return Varient;
};