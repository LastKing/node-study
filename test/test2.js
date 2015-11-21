/**
 * Created by toonew on 2015/11/22.
 */
var MongoClient = require('mongodb').MongoClient;

//1.连接 mongoDB
// Connection URL
var url = 'mongodb://localhost:27017/toonew';
// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  console.log("Connected correctly to server");

  db.close();
});

//2. 插入数据  方法
var insertDocument = function (db, callback) {
  //获取文档
  var collection = db.collection('user');
  collection.insertMany([
    {a: 1}, {a: 2}, {a: 3}
  ], function (err, result) {
    console.log("Inserted 3 documents into the document collection");
    callback(result);
  })
};

MongoClient.connect(url, function (err, db) {
  insertDocuments(db, function () {
    db.close();
  });
});











