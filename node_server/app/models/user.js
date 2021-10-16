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
      User.hasMany(models.Address, {
        onUpdate: 'CASCADE',
        as: 'address',
        foreignKey: 'userId'
      });
      User.hasMany(models.Order, {
        onUpdate: 'CASCADE',
        as: 'order',
        foreignKey: 'userId'
      });
      User.hasMany(models.Item, {
        onUpdate: 'CASCADE',
        as: 'item',
        foreignKey: 'userId'
      });
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING, 
    phone: DataTypes.STRING,
    dob: DataTypes.DATE,
    gender: { 
      type:DataTypes.ENUM('male', 'female'),
      defaultValue: 'male'
    },
    bio: DataTypes.TEXT,
    image: DataTypes.STRING,
    accountType: { 
      type:DataTypes.ENUM('Normal', 'Artist', 'Seller', 'Admin'),
      defaultValue: 'Normal'
    },
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};