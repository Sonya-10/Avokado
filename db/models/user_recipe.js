const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User_recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_recipe.init({
    user_id: DataTypes.INTEGER,
    recipe_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User_recipe',
  });
  return User_recipe;
};
