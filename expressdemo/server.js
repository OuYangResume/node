const express = require('express')
const app = express()


//路由中间件
var helloRouter = require('./routers/hello.js')
let indexRouter = require('./routers/index')
let userRouter = require('./routers/user.js')
let kittenRouter =require('./routers/kitten')
let uploadRouter =require('./routers/upload.js')

app.use('/hello', helloRouter)
app.use('/', indexRouter)
app.use('/user', userRouter)
app.use('/upload',uploadRouter);
//app.use('/kitten',kittenRouter)


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


const port =8082;
//开启监听
app.listen(port, () => console.log('Example app listening on port'+port+' !'))