/**
 * Created by Rain on 2015/11/22.
 */
//var mongo = require('../common/mongo_helper');

var url = 'mongodb://localhost:27017/toonew';
var MongoClient = require("mongodb").MongoClient;

var get = function (id) {
  return mongo.user.find({id: id});
};

var getAll = function (callback) {
  MongoClient.connect(url, function (err, db) {
    if (err) {
      callback('数据库连接失败');
    } else {
      var user = db.collection('user');
      user.find().toArray(function (err, items) {
        if (err) {
          callback(err);
        } else {
          if (items.length > 0) {
            callback(null, items);
          } else {
            callback('不存在账户');
          }
        }
      });
    }
  });
};

var getByName = function (userName, password, callback) {
  MongoClient.connect(url, function (err, db) {
    if (err) {
      callback('数据库连接失败');
    } else {
      var user = db.collection('user');
      user.find({userName: userName, password: password}).toArray(function (err, items) {
        if (err) {
          callback(err);
        } else {
          if (items.length > 0) {
            callback(null, items);
          } else {
            callback('账户不存在');
          }
        }
      });
    }
  });
};

module.exports = {
  get: get,
  getByName: getByName,
  getAll: getAll
};