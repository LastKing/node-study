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
var email_helper = require('../../common/email_helper');

var UserService = require('../../services/user');

router.get('/register.do', (req, res)=> {

  var modal = {};
  modal['title'] = "TooNew博客注册页面";

  res.render('register', modal);
});

router.post('/register.do', (req, res)=> {
  var user = req.body;

  email_helper.sendMail(user.email, '我是验证码  999999');

  UserService.add(user, function (err, result) {
    if (err) {
      res.send(JSON.stringify({"result": -1, "reason": "注册失败" + err}));
    } else {
      res.send(JSON.stringify({"result": 0, "data": result}));
    }
  });
});


router.post('/verificateEmail.do', (req, res)=> {

  res.send(JSON.stringify({"result": 0, "data": "验证邮箱"}));
});


module.exports = router;