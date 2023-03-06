require('@babel/register');
require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
// const ReactDOMServer = require("react-dom/server");
// const React = require("react");
const createError = require('http-errors');
const cors = require('cors');

const cookieParser = require('cookie-parser');

const app = express();

const PORT = process.env.PORT || 3000;

const MainRoutes = require('./src/routes/Main.Routes');
const RestPage = require('./src/routes/RestaurantPage.Routes');
const GamePage = require('./src/routes/RestaurantPage.Routes');
const AuthRoutes = require('./src/routes/auth.Routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public/')));
app.use(
  cors({
    origin: 'http://localhost:4000',
    credentials: true,
  })
);

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public/')));
app.use(cookieParser());

const sessionConfig = {
  name: 'app',
  store: new FileStore({}),
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'development',
    maxAge: 1000 * 60 * 60 * 24 * 10,
  },
};

app.use(session(sessionConfig));

app.use((req, res, next) => {
  console.log('\n\x1b[33m', 'req.session.user :', req.session?.user);
  res.locals.username = req.session?.user?.name;
  next();
});

app.use('/', MainRoutes);
app.use('/auth', AuthRoutes);
app.use('/rest', RestPage);
app.use('/game', GamePage);

app.use((req, res, next) => {
  const error = createError(
    404,
    'Запрашиваемой страницы не существует на сервере.'
  );
  next(error);
});

// app.use((err, req, res) => {
//   const appMode = req.app.get("env");
//
//   let error;
//
//   if (appMode === "development") {
//     error = err;
//   } else {
//     error = {};
//   }
//
//   res.locals.message = err.message;
//   res.locals.error = error;
//
//   res.status(err.status || 500);
//   const errorPage = React.createElement(Error, res.locals);
//   const html = ReactDOMServer.renderToStaticMarkup(errorPage);
//   res.write("<!DOCTYPE html>");
//   res.end(html);
// });

app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
