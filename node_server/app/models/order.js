'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'userId'
      });
      Order.belongsTo(models.Address, {
        as: 'address',
        foreignKey: 'addressId'
      });
      Order.hasMany(models.OrderItem, {
        as: 'orderItem',
        foreignKey: 'orderId'
      });
      Order.hasMany(models.Transaction, {
        as: 'transaction',
        foreignKey: 'orderId'
      });
    }
  };
  Order.init({
    paymentStatus: DataTypes.STRING,
    paymentMethod: DataTypes.STRING,
    orderStatus: DataTypes.STRING,
    total: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    addressId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  
  return Order;
};