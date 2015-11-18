/**
 * Created by Rain on 2015/11/18.
 */

var co = require('co');
var fs = require('fs');

function readFile(fileName) {
  return function (callback) {
    fs.readFile(fileName, 'utf8', callback);
  }
}

co(function  *() {
  var file1 = yield readFile('./file/a.txt');
  var file2 = yield readFile('./file/b.txt');

  console.log(file1);
  console.log(file2);
  return 'done';
})(function(err, result) {
  console.log(result)
});









