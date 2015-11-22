/**
 * Created by toonew on 2015/11/22.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

//1.连接 mongoDB
// Connection URL
var url = 'mongodb://localhost:27017/toonew';
//// Use connect method to connect to the Server
//MongoClient.connect(url, function (err, db) {
//  assert.equal(null, err);
//  console.log("Connected correctly to server");
//
//  db.close();
//});

//2. 插入数据  方法
var insertDocument = function (db, callback) {
  //获取文档
  var collection = db.collection('user');
  collection.insertMany([
    {userName: 'a', password: 'a'},
    {userName: 'b', password: 'b'},
    {userName: 'c', password: 'c'}
  ], function (err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the document collection");
    callback(result);
  })
};

MongoClient.connect(url, function (err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  insertDocuments(db, function () {
    db.close();
  });
});











