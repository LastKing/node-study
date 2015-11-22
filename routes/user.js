var express = require('express');
var router = express.Router();

var UserService = require('../services/user');

/* GET users listing. */
router.get('/', function (req, res) {
  res.send('respond with a resource');
});

router.get('/getAll.do', function (req, res) {
  UserService.getAll((err, users)=> {
    if (err) {
      res.send(JSON.stringify({result: -1, reason: '数据库错误' + error}))
    } else {
      res.send(JSON.stringify({result: 0, users: users}));
    }
  });
});

module.exports = router;