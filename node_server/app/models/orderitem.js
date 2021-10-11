'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  OrderItem.init({
    itemId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderItem',
  });
  OrderItem.belongsTo(models.Item, {
    as: 'item',
    foreignKey: 'itemId'
  });
  OrderItem.belongsTo(models.Order, {
    as: 'order',
    foreignKey: 'orderId'
  });
  return OrderItem;
};