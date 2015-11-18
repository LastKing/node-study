/**
 * Created by Rain on 2015/11/18.
 */
var arp = require('node-arp');

arp.getMAC('192.168.126.101', function(err, mac) {
  console.log('mac address: '+mac);
  arp.getMAC('192.168.126.114', function(err, mac) {
    console.log('mac address: '+mac);
  });
});


