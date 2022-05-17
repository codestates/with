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
      this.hasMany(models.posts, { foreignKey: 'user_id', sourceKey: 'id' });
    }
  }
  users.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    github_url: {
      allowNull: false,
      type: DataTypes.STRING
    },
    user_comment: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    email_chk: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    bookmark: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    admin: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};