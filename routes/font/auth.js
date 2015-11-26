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

router.get('/register.do', (req, res)=> {

  var modal = {};
  modal['title'] = "TooNew博客注册页面";

  res.render('register', modal);
});

router.post('/register.do', (req, res)=> {
  var user = req.body;

  res.send("test", JSON.stringify({"result": 0}));
});


module.exports = router;