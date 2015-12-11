/**
 * Created by Rain on 2015/12/9.
 */
var app = require('../app');
var mm = require('mm');
var request = require('supertest')(app);
var should = require('should');

describe('sgin测试', function () {
  var user = {
    userName: "user" + new Date().getTime(),
    password: 123,
    repassword: 123,
    email: 'toonew@danwi.me'
  };

  afterEach(function () {
    mm.restore();
  });

  describe('sign up', function () {

    it('should visit sign in page', function (done) {
      request.get('/font_auth/register.do')
        .expect(200)
        .end((err, res)=> {
          res.text.should.containEql('请输入你的完整信息');
          done();
        })
    });

    it('should sign in', function (done) {
      request.post('/font_auth/register.do')
        .send(user)
        .expect(200)
        .end((err, res)=> {
          res.text.should.containEql('注册成功');
          done();
        })
    });

    it('should visit sign up page', function (done) {
      request.get('/font_auth/login.do')
        .expect(200)
        .end((err, res)=> {
          //contailEql 是否包含 'xx' 关键字
          res.text.should.containEql('请输入用户名');
          done(err);
        })
    });

    it("should sign up a user", function (done) {
      request.post('/font_auth/login.do')
        .send({
          "userName": user.userName,
          "password": user.password
        })
        .expect(200, function (err, res) {
          res.text.should.containEql("登陆成功");
          done(err);
        })
    })
  });


});