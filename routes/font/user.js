/**
 * Created by Rain on 2015/11/24.
 */
var express = require('express');
var router = express.Router();

var UserService = require('../../services/user');


router.get('/', function (req, res) {
  res.send('respond with a resource');
});


module.exports = router;