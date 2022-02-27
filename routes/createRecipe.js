const { Router } = require('express');
const { Recipe } = require('../db/models');
const { User_recipe } = require('../db/models');

const router = Router();

// Post на создание рецепта
router.post('/', async (req, res) => {
  console.log(req.body);
  if (req.session.user) {
    try {
      const newRecipe = await Recipe.create({
        title: req.body.title,
        img: req.body.img,
        servings: req.body.servings,
        energy: req.body.energy,
        ingredients: req.body.ingredients,
        fat: req.body.fat,
        prot: req.body.prot,
        carb: req.body.carb,
        description: req.body.description,
      }, {
        returning: true,
        plain: true,
      });

      // присвоим этот рецепт пользователю
      const newUserRecipe = await User_recipe.create({
        user_id: res.locals.id,
        recipe_id: newRecipe.id,
      }, {
        returning: true,
        plain: true,
      });
      res.json(newRecipe);
    } catch (error) {
      res.render('error', {
        message: error,
        error: {},
      });
    }
  }
  return res.render('error', {
    message: 'Только зарегистрированные пользователи могут создавать',
    error: {},
  });
});

module.exports = router;
