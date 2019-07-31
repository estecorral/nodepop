var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images/anuncios/', express.static(path.join(__dirname, 'public/images')));

/**
 * Conexión con la base de datos
 */
require('./lib/connectMongoose');
require('./models/Anuncio');

/**
 * Rutas API
 */
app.use('/apiv1/anuncios', require('./routes/apiv1/anuncios'));

app.locals.title = 'NodePOP';

/**
 * Rutas app Web
 */
app.use('/', require('./routes/index'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
    if (err.array) {
        err.status = 422;
        const errInfo = err.array({ onlyFirstError: true })[0];
        err.message = isAPI(req) ?
        { message: 'Not valid', errors: err.mapped() }:
        `Not valid - ${errInfo.param} ${errInfo.msg}`;
    }

  res.status(err.status || 500);

  if(isAPI(req)) {
      res.json({ success: false, error: err.message });
      return;
  }
  // render the error page
  res.render('error');
});

function isAPI(req) {
    return req.originalUrl.indexOf('/apiv') === 0;
}

module.exports = app;