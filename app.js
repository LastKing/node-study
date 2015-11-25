var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var log4js = require('log4js');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var admin_index = require('./routes/admin/index');
var admin_user = require('./routes/admin/user');
var admin_auth = require('./routes/admin/auth');

/******前端页面*******/
var font_index = require('./routes/font/index');
var font_auth = require('./routes/font/auth');
var font_user = require('./routes/font/user');

var app = express();

// 模版设定
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));

//log4js 的 appenders 设定
//*  配置日志
//*  注意： 创建日志文件的目录， 并赋予对应的权限
log4js.configure({
  "appenders": [
    {type: 'console'}, //控制台输出
    {//正常日志输出
      type: 'file',
      filename: require('config').get('logPath') + '/debug.log',
      maxLogSize: 204800,
      backups: 4
    },
    {//错误级别日志输出
      type: 'logLevelFilter',
      level: 'ERROR',
      appender: {
        type: 'file',
        filename: require('config').get('logPath') + '/error.log',
        maxLogSize: 204800,
        backups: 4
      }
    }
  ]
});

//更换 log4js 的 命令行 输出
app.use(log4js.connectLogger(log4js.getLogger('express'), {level: log4js.levels.INFO}));

//开启 body 解析。。。
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
//开启session
app.use(session({
  name: 'toonew_session_id',
  secret: 'toonew',
  resave: false,
  saveUninitialized: true
}));

//开启 静态 静态文件路径
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', express.static(path.join(__dirname, 'admin')));

//基本根路径
app.use('/', font_index);

/** 配置 后台管理页面 路由 **/
app.use('/admin_index', admin_index);
app.use('/admin_user', admin_user);
app.use('/admin_auth', admin_auth);

/** 配置前端路由 **/
app.use('/font_user', font_user);
app.use('/font_auth', font_auth);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;