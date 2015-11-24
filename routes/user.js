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
      res.send(JSON.stringify({result: -1, reason: '数据库错误' + err}))
    } else {
      res.send(JSON.stringify({result: 0, users: users}));
    }
  });
});

router.post('/add.do', (req, res)=> {
  var user = req.body;

  UserService.add(user, (err)=> {
    if (err) {
      res.send(JSON.stringify({result: -1, reason: '数据库错误' + err}));
    } else {
      res.send(JSON.stringify({result: 0}));
    }
  })
});

router.post('/remove.do', (req, res)=> {
  var userId = req.body.userId;

  UserService.remove(userId, function (err, mark) {
    if (err) {
      res.send(JSON.stringify({result: -1, reason: '数据库错误' + err}));
    } else {
      res.send(JSON.stringify({result: 0, mark: mark}));
    }
  });
});

module.exports = router;