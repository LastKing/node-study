/**
 * 该写法 只适合 nodemailer以及 0.7.1 及以下的版本
 * 并且需要开启  SMTP 服务
 *
 * Created by Rain on 2015/11/24.
 */
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport("SMTP", {
  host: "smtp.163.com",//主机
  secureConnection: true,//使用SSL
  port: 465,
  auth: {
    user: 'litaixin01@163.com',
    pass: 'l520shan'
  }
});

var sendMail = function (targetMail, verificationCode) {
  transporter.sendMail({
    from: 'litaixin01@163.com',
    to: targetMail,
    subject: '欢迎注册 toonew 博客',
    text: verificationCode
  }, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("Message sent: " + response.message);
    }
    transporter.close(); // 如果没用，关闭连接池
  });
};

module.exports = {
  transport: transporter
};