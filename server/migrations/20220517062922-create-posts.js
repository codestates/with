'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      team_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      introduction: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      qualification: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      period: {
        allowNull: false,
        type: Sequelize.STRING
      },
      contact: {
        allowNull: false,
        type: Sequelize.STRING
      },
      post_count: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      applicant_count: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      user_applicant: {
        allowNull: false,
        type: Sequelize.STRING
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('posts');
  }
};