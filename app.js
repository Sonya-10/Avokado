const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const hbs = require('hbs');

// роуты по страницам
const indexRouter = require('./routes/index');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const myProfileRouter = require('./routes/myProfile');
const createRecipeRouter = require('./routes/createRecipe');
// const createPartyRouter = require('./routes/createParty');
// const personal = require('./routes/personal');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const sessionConfig = {
  name: 'sid',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 1000 * 60 * 60 * 24,
    httpOnly: true,
  },
};

// view setup engine
app.set('view engine', 'hbs');
app.set('views', path.join(process.cwd(), 'views'));
hbs.registerPartials(path.resolve(process.cwd(), 'views', 'partials'));

app.use(express.static(path.join(process.cwd(), 'public')));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session(sessionConfig));

const sessionMiddle = (req, res, next) => {
  res.locals.user = req.session?.user;
  res.locals.firstname = req.session?.user?.firstname;
  res.locals.lastname = req.session?.user?.lastname;
  res.locals.id = req.session?.user?.id;
  res.locals.email = req.session?.user?.email;
  res.locals.isAuthorized = Boolean(req.session.user);

  next();
};

// sessionMiddle нужно использовать перед роутами
app.use(sessionMiddle);

// middlewares для навигации
app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/myProfile', myProfileRouter);
app.use('/createRecipe', createRecipeRouter);
// app.use('/', createPartyRouter);
// app.use('/users', personal);

app.listen(PORT, () => {
  console.log(`It's all good in da hood: ${PORT}`);
});
