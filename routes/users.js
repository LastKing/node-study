var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/login.do', (req, res, next)=> {

  var userNaer = req.body.userName;
  var password = req.body.password;

  if (userNaer === 'admin' && password == '123123') {
    res.send(JSON.stringify({result: 0}))
  } else {
    res.send(JSON.stringify({result: -1, reason: '账户或者密码错误！~！'}))
  }

});

module.exports = router;
