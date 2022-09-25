'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Cuisine }) {
      // cuisine
      Recipe.belongsTo(Cuisine, {
        foreignKey: "cuisine_id",
        as: "cuisine"
      })
    }
  }
  Recipe.init({
    recipe_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cuisine_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image_url: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    directions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Recipe',
    tableName: 'recipes',
    timestamps: false
  });
  return Recipe;
};