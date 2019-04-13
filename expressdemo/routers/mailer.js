const express =require('express')
const router =express.Router()
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(){

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
   // host: "smtp.163.com",
    service: 'qq',
    port: 465, // SMTP 端口
    secureConnection: true, // true for 465, false for other ports
    auth: {
      user: '812634676@qq.com', // generated ethereal user
      pass: 'mkgvgcygelxybehh' // generated ethereal password 此处是授权码
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '812634676@qq.com', // 发件人的电子邮件地址
    to: "13135667053@163.com,1904390016@qq.com", // list of receivers 收件人地址--数组
   // cc:"",//抄送人地址--数组
    subject: "Hello ✔", // Subject line 主题
    text: "Hello world?", // plain text body 文本
   // html: "<b>Hello world?</b>", // html body
   // attachments:"",//附件。。  还需要研究
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
main().catch(console.error);
module.exports=router;