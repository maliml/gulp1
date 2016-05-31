var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');//日志中间件
var cookieParser = require('cookie-parser');//cookie中间件
var bodyParser = require('body-parser');//解析请求体的中间件
var mongoose = require('mongoose');
mongoose.connect('mongodb://123.57.143.189:27017/todo');
var routes = require('./routes/index');//根路由
var users = require('./routes/users');//用户路由

var app = express();

//设置视图所在的目录
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');//模板引擎
app.engine('.html',require('ejs').__express);
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));//日志中间件
app.use(bodyParser.json());//解析请求体的json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
