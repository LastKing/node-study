/**
 * Created by Rain on 2015/11/22.
 */
var uuid = require('uuid');
var config = require('config');

var url = config.get('mongodb');
var MongoClient = require("mongodb").MongoClient;

var add = function (user, callback) {
  user.id = uuid.v1();
  user.createTime = new Date();
  
  MongoClient.connect(url, function (err, db) {
    if (err) {
      callback('数据库连接失败');
    } else {
      var userCol = db.collection('user');
      userCol.insert(user, function (err, result) {
        if (err) {
          callback(err);
        } else {
          if (result) {
            callback(null, result);
          } else {
            callback('添加失败');
          }
        }
      })
    }
  });
};

var remove = function (id, callback) {
  MongoClient.connect(url, function (err, db) {
    if (err) {
      callback('数据库连接错误');
    } else {
      var user = db.collection('user');
      user.removeOne({id: id}, function (err, result) {
        if (err) {
          callback(err);
        } else {
          if (result) {
            callback(null, result);
          } else {
            callback('账户不存在');
          }
        }
      })
    }
  });
};

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
  add: add,
  remove: remove,
  get: get,
  getByName: getByName,
  getAll: getAll
};