const { Router } = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const { Recipe } = require('../db/models');
const { User_recipe } = require('../db/models');
const auth = require('../middlewares/auth');

const router = Router();

router.get('/:id', auth, async (req, res) => {
  let userCheck;
  try {
    userCheck = await User.findOne({ where: { id: req.params.id }, raw: true });
  } catch (error) {
    console.error(error.message);
    return;
  }

  if (!userCheck) {
    res.render('error', { message: 'No such user exists :(' });
  }
  // находим все рецепты пользователя
  let userRecipe;
  try {
    userRecipe = await Recipe.findAll({
      // where: { id: req.params.id },
      // include: {
      //   model: Recipe,
      //   through: {
      //     model: User_recipe,
      //   },
      // where: { id: req.params.id },
      // },
      // raw: true,
    });
  } catch (error) {
    console.error(error.message);
  }
  // console.log(userRecipe);
  res.render('myProfile', { userCheck, userRecipe });
});

module.exports = router;
