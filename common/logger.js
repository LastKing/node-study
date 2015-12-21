/**
 * Created by Rain on 2015/12/21.
 */
var log4js = require('log4js');

var logBasePath = require('config').get('logPath');

//log4js 的 appenders 设定
//*  配置日志
//*  注意： 创建日志文件的目录， 并赋予对应的权限
log4js.configure({
  "appenders": [
    {type: 'console'}, //控制台输出
    {//正常日志输出
      type: 'file',
      filename: logBasePath + '/debug.log',
      maxLogSize: 204800,
      backups: 4
    },
    {//错误级别日志输出
      type: 'logLevelFilter',
      level: 'ERROR',
      appender: {
        type: 'file',
        filename: logBasePath + '/error.log',
        maxLogSize: 204800,
        backups: 4
      }
    }
  ]
});

var logger = log4js.getLogger('toonew');
module.exports = logger;