const experss =require('express');
const bodyParser=require('body-parser')

const router =experss.Router()

router.get('/',(req,res,next)=>{
     res.send("hello")

})
//get路由
router.get('/:id', (req, res) => {
    console.dir(req.params); //打印对象
    res.send('Hello World!'+req.params.id)
})

//post请求
router.use(bodyParser.urlencoded({ extended: true })); //注册body
router.post('/post', (req, res) => { 
    console.dir(req.body)
    res.send('Got a POST request' + req.body.name) 
})
module.exports =router;
