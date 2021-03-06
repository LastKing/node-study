/**
 * 所有认证相关的类型请求
 *
 * get  请求为  需要访问的页面
 * post 请求为  为请求访问页面的对应的操作。
 *
 * 必须 register 为注册，get指向页面，post为真是注册的方法
 *
 * Created by Rain on 2015/11/25.
 */
var express = require('express');
var router = express.Router();

var validator = require('validator');

var email_helper = require('../../common/email_helper');

var UserService = require('../../services/user');

router.get('/login.do', (req, res)=> {
  res.render('auth/login', {title: '登陆'});
});

router.post('/login.do', (req, res)=> {
  var userName = validator.trim(req.body.userName);
  var password = validator.trim(req.body.password);

  UserService.getByName(userName, password, function (err, data) {
    if (err) {
      res.send(JSON.stringify({"result": -1, "reason": "登陆失败" + err}));
    } else {
      res.send(JSON.stringify({"result": 0, "reason": "登陆成功", "data": data}));
    }
  });
});

router.get('/register.do', (req, res)=> {

  var modal = {};
  modal['title'] = "TooNew博客注册页面";

  res.render('auth/register', modal);
});

router.post('/register.do', (req, res)=> {
  var userName = validator.trim(req.body.userName);
  var password = validator.trim(req.body.password);
  var repassword = validator.trim(req.body.repassword);
  var email = validator.trim(req.body.email);

  //email_helper.sendMail(user.email, '我是验证码  999999');

  var user = {
    userName: userName,
    password: password,
    repassword: repassword,
    email: email
  };

  UserService.add(user, function (err, result) {
    if (err) {
      res.send(JSON.stringify({"result": -1, "reason": "注册失败" + err}));
    } else {
      res.send(JSON.stringify({"result": 0, "reason": "注册成功", "data": result}));
    }
  });
});

router.post('/verificateEmail.do', (req, res)=> {

  res.send(JSON.stringify({"result": 0, "data": "验证邮箱"}));
});

module.exports = router;