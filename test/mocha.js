/**
 * Created by Rain on 2015/12/9.
 */

var assert = require("assert");
var should = require('should');

var User = function (name) {
  this.name = name;
  this.save = function (err) {
    if (name == 'Luna') {
      return true;
    } else {
      throw new Error('我错了');
    }
  };
};


//同步代码
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1, 2, 3].indexOf(5));
      assert.equal(-1, [1, 2, 3].indexOf(0));
    });
  });
});

//使用断言
//当测试 异步同步代码，省略回调并且mocha 将会自动进行下一个测试
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      [1, 2, 3].indexOf(5).should.equal(-1);
      [1, 2, 3].indexOf(0).should.equal(-1);
    });
  });
});


/**  这里不能理解 ***/
//异步代码
//用mocha不能简单的测试异步代码！简单地测试完成时调用的回调。
//通过一个回调，让it() mocha知道将会什么将会完成

describe('User', function () {
  describe('#save()', function () {
    it('should save without error', function (done) {
      var user = new User('Luna');
      user.save(function (err, data) {
        if (err) throw err;
        console.log(data);
        done();
      });
    })
  })
});

////为了使事件更加简单，the done（）能接受错误err，所以我们用直接用这个
//describe('User', function () {
//  describe('#save()', function (done) {
//    var user = new User('Luna');
//    user.save(done);
//  })
//});


//与Promise 并用
//或许，并不是使用回调，你也许使用承诺。


//beforeEach(function () {
//  return db.clear()
//    .then(function () {
//      return db.save([tobi, loki, jane]);
//    });
//});
//
//describe('#find()', function () {
//  it('respond with matching records', function () {
//    return db.find({type: 'User'}).should.eventually.have.length(3);
//  })
//})
//




