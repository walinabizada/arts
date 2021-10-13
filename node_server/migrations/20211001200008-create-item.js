'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.STRING
      },
      discount: {
        type: Sequelize.STRING
      },
      sale: {
        type: Sequelize.BOOLEAN
      },
      stock: {
        type: Sequelize.INTEGER
      },
      new: {
        type: Sequelize.BOOLEAN
      },
      metaTitle: {
        type: Sequelize.STRING
      },
      metaDescription: {
        type: Sequelize.STRING
      },
      dx: {
        type: Sequelize.STRING
      },
      dy: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'users',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Items');
  }
};