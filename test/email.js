/**
 * Created by Rain on 2015/11/23.
 */
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport("SMTP", {
  host: "smtp.qq.com",//主机
  secureConnection: true,//使用SSL
  port: 465,
  auth: {
    user: '120452272@qq.com',
    pass: 'litaixin01'
  }
});


transporter.sendMail({
  to: "litaixin01@163.com",
  subject: 'hello',
  text: 'hello world'
}, function (error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log("Message sent: " + response.message);
  }
  transporter.close(); // 如果没用，关闭连接池
});


