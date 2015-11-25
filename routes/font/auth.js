/**
 * Created by Rain on 2015/11/25.
 */
var express = require('express');
var router = express.Router();


router.get('/register.do', (req, res)=> {

  res.render('register', {title: '注册'});
});


module.exports = router;