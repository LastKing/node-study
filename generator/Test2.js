/**
 * Created by Rain on 2015/11/18.
 */
var app = require('node-arp');

//这个代码：
//getMAC函数干啥用啊，写的有点绕，是为了后面给generator用做铺垫
//这个代码只执行了1个ip地址的ping操作，是的，准备嘛，稍做变形，好理解。

function getMac(ipAddress) {
  return function (callback) {
    app.getMAC(ipAddress, callback);
  }
}


getMac('192.168.126.101')(function (err, result) {
  console.log('err' + err + ',\nresult:' + result);
});


