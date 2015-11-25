/**
 * Created by Rain on 2015/11/25.
 */
var express = require('express');
var router = express.Router();

router.get('/register.do', (req, res)=> {

  var modal = {};
  modal['title'] = "TooNew博客注册页面";

  res.render('register', modal);
});

router.post('/register.do', (req, res)=> {
  var user = req.body;

});


module.exports = router;