const express = require('express')
const router = express.Router()
const connection = require('../uilts/mysqlEngine') //数据库配置
let bodyParser = require('body-parser') //表单请求 

var fs = require('fs');
var multer  = require('multer') //文件上传
var upload = multer({ dest: 'uploads/' }) //设置文件上传目录

var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//创建一个connection
connection.connect(function (err) {
    if (err) {
        console.log('连接失败' + err);
        return;
    }
    console.log('[connection connect]  succeed!');
});

router.get('/getAllUser', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*') //解决跨域问题
    let sql= 'SELECT * from user'
    connection.query(sql, function (err, rows, fields) {
        if (err) throw err
        //console.log('The solution is: ', rows[0]);
        res.send(rows);
    })
   // connection.end()
})

router.post('/insterUser',urlencodedParser,(req,res)=>{
    console.dir(req.body);//取参数里面的值
    res.send(req.body.name)
})

router.post('/insterJsonUser',jsonParser,(req,res)=>{
    console.dir(req.body);
    res.send(req.body.name)
})
//文件上传
router.post('/upload',upload.single('avatar'),(req,res)=>{
    //avatar 是文件的上传的name
    res.send("上传成功")
})

module.exports= router