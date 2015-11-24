/**
 * Created by Rain on 2015/11/20.
 */
var express = require('express');
var router = express.Router();

var UserService = require('../services/user');

router.post('/login.do', (req, res)=> {
  var userName = req.body.userName;
  var password = req.body.password;

  UserService.getByName(userName, password, function (err, items) {
    if (err) {
      res.send(JSON.stringify({result: -1, reason: '查询错误！~！' + err}));
    } else {
      req.session.user = {userName: userName, password: password};
      req.session.user.role = 'admin';
      res.send(JSON.stringify({result: 0}));
    }
  });
});

router.post('/logout.do', (req, res)=> {
  delete req.session.user;
  res.send(JSON.stringify({
    result: 0
  }));
});

router.get('/getCurrentUser.do', (req, res)=> {
  if (req.session.user) {
    res.send(JSON.stringify(req.session.user));
  } else {
    res.send(JSON.stringify({
      result: -1,
      reason: '请登录!~!~'
    }));
  }
});

module.exports = router;