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


//3. 添加文档
MongoClient.connect(url, function (err, db) {
  //创建 文档
  var col = db.collection('user');
  // Insert a bunch of documents
  col.insertMany([
    {id: '1111-2222-3333', userName: 'a', password: 'a'},
    {id: '2222-3333-4444', userName: 'b', password: 'b'},
    {id: '3333-4444-5555', userName: 'c', password: 'c'}
  ], {w: 1}, function (err, result) {
    test.equal(null, err);
  });
});


// 4. 显示文档
MongoClient.connect(url, function (err, db) {
  //创建 文档  我们想去删除它
  var col = db.collection('user');

  col.find({}).toArray(function (err, items) {
    test.equal(null, err);
    console.log(items);
    db.close();
  });
});
