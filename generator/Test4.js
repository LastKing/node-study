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


co(function*(){
  var address=[
    '192.168.1.100',
    '192.168.1.101'
  ];
  var p1=yield getMAC(address[0]);
  var p2=yield getMAC(address[1]);

  console.log(address[0]+' ->'+p1);
  console.log(address[1]+' ->'+p2);
  return 'done';
})(function(err,result){
  console.log('err: '+err+', result: '+result);
});


