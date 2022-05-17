'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      github_url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_comment: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      email_chk: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      bookmark: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      admin: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
  down: async(queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};