/**
 * Created by Rain on 2015/11/24.
 */
var log4js = require('log4js');
var config = require('config');

//增加新的输出文件夹
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file(config.get('logPath') + "/login.log", "login"));

//log4js 的 appenders 设定
log4js.configure({
  "appenders": [
    {type: 'console'}, //控制台输出
    {//正常日志输出
      type: 'file',
      filename: require('config').get('logPath') + '/login.log',
      maxLogSize: 204800,
      backups: 4
    }
  ]
});

var logger = log4js.getLogger("login");

logger.debug("a" + ":" + "a");