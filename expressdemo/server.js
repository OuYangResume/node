const express = require('express')
const app = express()


//路由中间件
var helloRouter = require('./routers/hello.js')
let indexRouter = require('./routers/index')
let userRouter = require('./routers/user.js')

app.use('/hello', helloRouter)
app.use('/', indexRouter)
app.use('/user', userRouter)


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



//开启监听
app.listen(8082, () => console.log('Example app listening on port 8080!'))