var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/login.do', (req, res)=> {

  var userName = req.body.userName;
  var password = req.body.password;

  if (userName === 'a' && password == 'a') {
    var admin = {
      userName: userName,
      password: password
    };
    req.session.user = admin;
    req.session.user.role = 'admin';

    res.send(JSON.stringify({result: 0}));
  } else {
    res.send(JSON.stringify({result: -1, reason: '账户或者密码错误！~！'}))
  }

});

module.exports = router;
