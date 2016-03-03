var express = require('express');
var router = express.Router();

var logger = require('../../common/logger');

/* GET home page. */
router.get('/', function (req, res, next) {
  logger.info('访问');
  res.render('index', {title: 'TooNew博客'});
});

// 开启jsonp  跨域请求
router.get('/jsonp.do', (req, res)=> {
  var data = {'name': 'jifeng', 'company': 'taobao'};

  res.jsonp(data);
});

module.exports = router;
