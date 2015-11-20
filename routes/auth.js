/**
 * Created by Rain on 2015/11/20.
 */
var express = require('express');
var router = express.Router();

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