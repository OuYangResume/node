const express = require('express')
const app = express()

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
//中间件
let myLogger = function (req, res, next) {
    console.log('LOGGEN')
    next()
}
let requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
}
//get路由
app.get('/getHello', (req, res) => res.send('Hello World!'))
//post请求
app.post('/postHello', (req, res) => { res.send('Got a POST request') })

//托管静态文件
app.use(express.static('public'))
//设置虚拟路径，访问localhost:3000/static/images/code.png
app.use('/static', express.static('public'))

//调用中间件
app.use(myLogger)
app.use(requestTime);
app.get('/engine', function (req, res, next) {
    var responseText = 'Hello World!<br>'
    responseText += '<small>Requested at: ' + req.requestTime + '</small>'
    res.send(responseText);
    next()
}, function (req, res, next) {
    // render a regular page
    // res.render('regular')
    console.log("adsfdsf")
})

//开启监听
app.listen(3000, () => console.log('Example app listening on port 3000!'))