'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comment.init({
    comment_id: {
      types: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    recipe_id: {
      types: DataTypes.INTEGER,
      allowNull: false
    },
    author: {
      types: DataTypes.STRING,
      allowNull: false
    },
    comment_text: {
      types: DataTypes.TEXT,
      allowNull: false
    },
    likes: {
      types: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};