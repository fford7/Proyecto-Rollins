require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const hbs = require('express-handlebars');

const indexRouter = require('./routes/index');
const productoRouter = require('./routes/productos');
const usersRouter = require('./routes/users');

const app = express();

require('./utils/connection')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
//seteamos las carpetas y los archivos del motor de vistas
app.engine('hbs', hbs.engine({
  extname:'.hbs', 
  defaultLayout: 'layout',
  layoutsDir: 'views/layout',
  partialsDir: 'views/partials'
}) );

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', productoRouter);
app.use('/', usersRouter);
app.use('/login', usersRouter);
app.use('/new-product', productoRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
