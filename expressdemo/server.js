const express = require('express')
const app = express()

//数据库
const mysql = require('mysql')
var connection = mysql.createConnection({
    host: '39.108.100.163',
    user: 'root',
    password: 'qwer',
    database: 'test'
});
connection.connect()
connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    if (err) throw err
    console.log('The solution is: ', rows[0].solution)
})
connection.end()

//路由中间件
var helloRouter =require('./routers/hello.js')
let indexRouter =require('./routers/index')

app.use('/hello',helloRouter)
app.use('/',indexRouter)
//中间件
let myLogger = function (req, res, next) {
    console.log('LOGGEN')
    next()
}


//调用中间件
app.use(myLogger)



//开启监听
app.listen(8081, () => console.log('Example app listening on port 8080!'))