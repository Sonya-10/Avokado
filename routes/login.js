const { Router } = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const router = Router();

// регистрация
router.post('/', async (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(401).json({ error: 'заполните все поля' });
  }
  // ищем юзера
  let user;
  try {
    user = await User.findOne({
      where: { email: req.body.email },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  if (!user) {
    res.status(500).json({ error: 'Неверно введены данные' });
  }
  // сравниваем пароли
  if (!(await bcrypt.compare(req.body.password, user.password))) {
    res.status(401).json({ error: 'Неверный пароль' });
    return;
  }

  req.session.user = {
    id: user.id,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
  };

  res.json({
    user_id: user.id,
    firstname: user.firstname,
    secondname: user.secondname,
    email: user.email,
  });
});

// logout
router.delete('/logout', (req, res) => {
  req.session.destroy(() => {
    res.sendStatus(200);
  });
});

module.exports = router;
