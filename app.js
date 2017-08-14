var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
let busboy = require('connect-busboy');//处理文件上传的中间件
var log4js = require('log4js');

log4js.configure({
  appenders: { cheese: { type: 'file', filename: 'logs/access.log' } ,cheese1: { type: 'console'} },
  categories: { default: { appenders: ['cheese','cheese1'], level: 'info' } }
});

var index = require('./routes/index');
var users = require('./routes/users');
var getData = require('./routes/getData');
var postData = require('./routes/postData');
var formUpload = require('./routes/formUpload');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(busboy());

app.use('/', index);
app.use('/users', users);
app.get('/getData', getData);
app.post('/postData', postData);
app.post('/formUpload', formUpload);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
