'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.users, { foreignKey: 'user_id', targetKey: 'id' });
    }
  }
  posts.init({
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
  }, {
    sequelize,
    modelName: 'posts',
  });
  return posts;
};