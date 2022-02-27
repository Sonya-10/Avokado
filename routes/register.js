const { Router } = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const router = Router();

// регистрация
router.post('/', async (req, res) => {
  if (!req.body.email || !req.body.firstname || !req.body.lastname || !req.body.password) {
    res.status(401).json({ error: 'заполните все поля' });
  }
  // проверяем email на оригинальность
  let checkedUser;
  try {
    checkedUser = await User.findOne({
      where: { email: req.body.email },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  if (checkedUser) {
    res.status(500).json({ error: 'такой email уже существует' });
    return;
  }

  let user;
  let passwordHash;

  try {
    passwordHash = await bcrypt.hash(req.body.password, Number(process.env.SALT));
  } catch (error) {
    console.error(error.message);
  }
  // создаём юзера
  try {
    user = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: passwordHash,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

  req.session.user = {
    id: user.id,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
  };

  res.json({
    user_id: user.id,
    firstname: user.firstName,
    lastname: user.lastname,
    email: user.email,
  });
});

module.exports = router;
