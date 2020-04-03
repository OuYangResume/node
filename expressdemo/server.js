/*
 * @Author: your name
 * @Date: 2019-01-07 09:49:00
 * @LastEditTime: 2020-04-02 17:03:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/expressdemo/server.js
 */
const express = require('express')
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.json());//数据JSON类型
app.use(bodyParser.urlencoded({ extended: false }));//解析post请求数据
/**
 * @description: 路由中间件
 * @param {type} 
 * @return: 
 */
//测试加密功能
var helloRouter = require('./routers/hello.js')
let indexRouter = require('./routers/index')
let userRouter = require('./routers/user.js')
let indexDBRouter = require ('./routers/indexDB.js')
//monogdb使用
//let kittenRouter =require('./routers/kitten')
//文件上传功能
let uploadRouter = require('./routers/upload.js')
//邮件功能
//let mailerRouter =require('./routers/mailer')
//tile38 地理空间数据库和地理围栏服务器
//let tile38 =require('./routers/tile38')

let wechatRouter = require('./routers/wechat.js')

app.use('/hello', helloRouter)
app.use('/', indexRouter)
app.use('/user', userRouter)
app.use('/indexDB',indexDBRouter)
app.use('/upload', uploadRouter);
app.use('/wechat', wechatRouter);

//app.use('/kitten',kittenRouter)
//app.use('/tile38',tile38);


//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

//托管静态文件
app.use(express.static('public'))
//设置虚拟路径，访问localhost:3000/static/images/code.png
app.use('/static', express.static('public'))

//中间件
let myLogger = function (req, res, next) {
    console.log('LOGGEN')
    next()
}
//调用中间件
app.use(myLogger)


const port = 8082;
//开启监听
app.listen(port, () => console.log('Example app listening on port' + port + ' !'))

