'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Transaction.init({
    orderId: DataTypes.INTEGER,
    paymentMethod: DataTypes.STRING,
    delivaryStatus: DataTypes.STRING,
    amount: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  Transaction.belongsTo(models.Order, {
    as: 'order',
    foreignKey: 'orderId'
  });
  return Transaction;
};