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
      type: DataTypes.INTEGER
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    team_name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    introduction: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    qualification: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    period: {
      allowNull: false,
      type: DataTypes.STRING
    },
    contact: {
      allowNull: false,
      type: DataTypes.STRING
    },
    post_count: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    applicant_count: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    user_applicant: {
      allowNull: false,
      type: DataTypes.STRING
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
    modelName: 'posts',
  });
  return posts;
};