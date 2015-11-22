/**
 * Created by Rain on 2015/11/22.
 */
var MongoClient = require('mongodb').MongoClient,
  test = require('assert');

// 1. 连接地址
var url = 'mongodb://localhost:27017/toonew';

//// 2. 显示所有的数据库
//MongoClient.connect(url, function (err, db) {
//  // Use the admin database for the operation
//  var toonewDB = db.admin();
//  // List all the available databases
//  toonewDB.listDatabases(function (err, dbs) {
//    test.equal(null, err);
//    console.log(dbs.databases);
//    db.close();
//  });
//});

// 3. 添加文档
//MongoClient.connect(url, function (err, db) {
//  //创建 文档
//  var col = db.collection('listCollectionsExample1');
//  // Insert a bunch of documents
//  col.insertMany([{a: 1, b: 1}
//    , {a: 2, b: 2}, {a: 3, b: 3}
//    , {a: 4, b: 4}], {w: 1}, function (err, result) {
//    test.equal(null, err);
//  });
//});

// 4. 显示文档
MongoClient.connect(url, function (err, db) {
  //创建 文档  我们想去删除它
  var col = db.collection('listCollectionsExample1');

  col.find({}).toArray(function (err, items) {
    test.equal(null, err);
    console.log(items);
    db.close();
  });
});
