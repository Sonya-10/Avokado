const { Router } = require('express');
const bcrypt = require('bcrypt');

const router = Router();

// рендер главной страницы
router.get('/', (req, res) => {
  // if (res.locals.isAuthorized) {
  //   res.redirect(`/${res.locals.id}`);
  //   return;
  // }
  res.render('main');
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.get('/login', (req, res) => {
  res.render('login');
});

// рендер страницы поиска рецептов
router.get('/recipes', (req, res) => {
  // if (res.locals.isAuthorized) {
  //   res.redirect(`/${res.locals.id}`);
  //   return;
  // }
  res.render('recipes');
});

// рендер страницы профиля
router.get('/myProfile', (req, res) => {
  // if (res.locals.isAuthorized) {
  //   res.redirect(`/${res.locals.id}`);
  //   return;
  // }
  res.render('myProfile');
});

// рендер страницы профиля
router.get('/createRecipe', (req, res) => {
  // if (res.locals.isAuthorized) {
  //   res.redirect(`/${res.locals.id}`);
  //   return;
  // }
  res.render('createRecipe');
});

module.exports = router;
