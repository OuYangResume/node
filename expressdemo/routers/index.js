const express =require('express')
const router =express.Router()



//托管静态文件
router.use(express.static('public'))
//设置虚拟路径，访问localhost:3000/static/images/code.png
router.use('/static', express.static('public'))
router.get('/',(req,res)=>{
    res.send("index")
})

let requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
}
router.use(requestTime);
router.get('/engine', function (req, res, next) {
    var responseText = 'Hello World!<br>'
    responseText += '<small>Requested at: ' + req.requestTime + '</small>'
    res.send(responseText);
    next()
}, function (req, res, next) {
    // render a regular page
    // res.render('regular')
    console.log("adsfdsf")
})
module.exports=router;