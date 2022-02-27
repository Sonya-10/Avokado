const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsToMany(User, {
        through: 'User_recipe',
        foreignKey: 'user_id',
      });
    }
  }
  Recipe.init({
    title: DataTypes.STRING,
    img: DataTypes.TEXT,
    servings: DataTypes.INTEGER,
    energy: DataTypes.INTEGER,
    ingredients: DataTypes.TEXT,
    fat: DataTypes.STRING,
    prot: DataTypes.STRING,
    carb: DataTypes.STRING,
    description: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};
