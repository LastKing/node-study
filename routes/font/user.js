/**
 * Created by Rain on 2015/11/24.
 */
var express = require('express');
var router = express.Router();

var UserService = require('../../services/user');

router.get('/registered.do', function (req, res) {
  res.render('font/registered', {test: 'test'});
});


module.exports = router;