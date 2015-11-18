/**
 * Created by Rain on 2015/11/18.
 */

var arp = require('node-arp');
var co = require('co');

function getMAC(ipAddress) {
  return function (callback) {
    arp.getMAC(ipAddress, callback);
  }
}

co(function*() {
  var address = [
    '192.168.126.101',
    '192.168.126.102'
  ];
  var p1 = yield getMAC(address[0]);
  var p2 = yield getMac(address[1]);

  console.log(address[0] + ' ->' + p1);
  console.log(address[1] + ' ->' + p2);

  return 'done';
})(function (err, result) {
  console.log('err' + err + ',\nresult:' + result);
});

//function co(generator) {
//  return function (fn) {
//    var gen = generator();
//
//    function next(err, result) {
//      if (err) {
//        return fn(err);
//      }
//      var step = gen.next(result);
//      if (!step.done) {
//        step.value(next);
//      } else {
//        fn(null, step.value);
//      }
//    }
//
//    next();
//  }
//}