'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Material.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Material',
  });
  Material.hasMany(models.ItemMaterial, {
    as: 'materialitem',
    foreignKey: 'materialId'
  });
  return Material;
};