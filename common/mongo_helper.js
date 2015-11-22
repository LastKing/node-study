/**
 * Created by Rain on 2015/11/22.
 */
var Db = require('mongodb').Db;
var Server = require('mongodb').Server;
var Mongos = require('mongodb').Mongos;

var server = new Server('localhost', 27017);
var db = new Db('toonew', new Mongos[server]);

module.exports = {
  user: new Collection('user')
};

function Collections(collectionName) {
  var collection = db.collection(collectionName);

  /**
   * 插入一个或者多个文档
   * @param document(s) 需要插入的文档
   * @returns {promise(new document form database)} 承诺(数据库新的文档,包含的_id),如果插入的是多个文档,则返回新文档的数组
   */
  this.insert = function (document) {
    //函数多态分析
    var args = document instanceof Array ? document : Array.prototype.slice.call(arguments);
    var many = args.length > 1;

    return new Promise(function (resolve, reject) {
      collection.insert(args, (error, documents)=> {
        if (error)
          reject(error);
        else
          resolve(many ? documents : documents[0]);
      });
    });
  };

  /**
   * 查找文档
   * @param selector  匹配器
   * @param options   选项,如下所示,可以为null
   *  * limit                 {Number, default:0},          sets the limit of documents returned in the query.
   *  * sort                  {Array | Object},             set to sort the documents coming back from the query. Array of indexes, [[‘a’, 1]] etc.
   *  * fields                {Object},                     the fields to return in the query. Object of fields to include or exclude (not both), {‘a’:1}
   *  * skip                  {Number,  default:0},         set to skip N documents ahead in your query (useful for pagination).
   *  * hint                  {Object},                     tell the query to use specific indexes in the query. Object of indexes to use, {‘_id’:1}
   *  * explain               {Boolean, default:false},     explain the query instead of returning the data.
   *  * snapshot              {Boolean, default:false},     snapshot query.
   *  * timeout               {Boolean, default:true},      specify if the cursor can timeout.
   *  * tailable              {Boolean, default:false},     specify if the cursor is tailable.
   *  * tailableRetryInterval {Number, default:100},        specify the miliseconds between getMores on tailable cursor.
   *  * numberOfRetries       {Number, default:5},          specify the number of times to retry the tailable cursor.
   *  * awaitdata             {Boolean, default:false}      allow the cursor to wait for data, only applicable for tailable cursor.
   *  * oplogReplay           {Boolean, default:false}      sets an internal flag, only applicable for tailable cursor.
   *  * exhaust               {Boolean, default:false}      have the server send all the documents at once as getMore packets, not recommended.
   *  * batchSize             {Number, default:0}, set      the batchSize for the getMoreCommand when iterating over the query results.
   *  * returnKey             {Boolean, default:false},     only return the index key.
   *  * maxScan               {Number},                     Limit the number of items to scan.
   *  * min                   {Number},                     Set index bounds.
   *  * max                   {Number},                     Set index bounds.
   *  * showDiskLoc           {Boolean, default:false},     Show disk location of results.
   *  * comment               {String},                     You can put a $comment field on a query to make looking in the profiler logs simpler.
   *  * raw                   {Boolean, default:false},     Return all BSON documents as Raw Buffer documents.
   *  * readPreference        {String},                     the preferred read preference, require(‘mongodb’).ReadPreference ((ReadPreference.PRIMARY, ReadPreference.PRIMARY_PREFERRED, ReadPreference.SECONDARY, ReadPreference.SECONDARY_PREFERRED, ReadPreference.NEAREST).
   *  * numberOfRetries       {Number, default:5},          if using awaidata specifies the number of times to retry on timeout.
   *  * partial               {Boolean, default:false},     specify if the cursor should return partial results when querying against a sharded system
   *  * maxTimeMS             {Number},                     number of miliseconds to wait before aborting the query.
   */
  this.find = function (selector, options) {
    //初始化options变量
    options = options || {};
    return new Promise(function (resolve, reject) {
      collection.find(selector, options).toArray((error, documents)=> {
        if (error)
          reject(error);
        else
          resolve(documents);
      });
    });
  }

}