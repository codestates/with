'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.items, { foreignKey: 'user_id', sourceKey: 'id' });
    }
  }
  users.init({
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
      type: Sequelize.INTEGER
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
    modelName: 'users',
  });
  return users;
};