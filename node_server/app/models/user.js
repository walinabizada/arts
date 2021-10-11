'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    dob: DataTypes.DATE,
    gender: DataTypes.ENUM,
    bio: DataTypes.TEXT,
    image: DataTypes.STRING,
    accountType: DataTypes.ENUM,
  }, {
    sequelize,
    modelName: 'User',
  });
  User.hasMany(models.Address, {
    as: 'address',
    foreignKey: 'userId'
  });
  User.hasMany(models.Order, {
    as: 'order',
    foreignKey: 'userId'
  });
  User.hasMany(models.Item, {
    as: 'item',
    foreignKey: 'userId'
  });
  return User;
};