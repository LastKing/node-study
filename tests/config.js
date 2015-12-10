/**
 * Created by Rain on 2015/11/24.
 */
var config = require('config');

var logPath = config.get('logPath');

//config  默认文件夹 必须存放在跟路径上 config   这样不管在哪里都能正确的访问。。。