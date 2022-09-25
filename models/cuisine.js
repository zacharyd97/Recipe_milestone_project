'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cuisine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Recipe }) {
      // recipe
      Cuisine.hasMany(Recipe, {
        foreignKey: "cuisine_id",
        as: "recipes"
      })
    }
  }
  Cuisine.init({
    cuisine_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cuisine_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image_url: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Cuisine',
    tableName: 'cuisines',
    timestamps: false
  });
  return Cuisine;
};