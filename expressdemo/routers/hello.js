const experss =require('express');
const bodyParser=require('body-parser')

//检测是否支持加密
let crypto;
try {
  crypto = require('crypto');
} catch (err) {
  console.log('不支持 crypto!');
}

const router =experss.Router()

router.get('/',(req,res,next)=>{
    let secret ="hello";
    const hash = crypto.createHmac('sha256', secret)
                   .update('I love cupcakes')
                   .digest('hex');
    console.dir(hash);
     res.send(secret+"对应的加密:"+hash)
})

router.get('/userData',(req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*') //解决跨域问题
    let userData=[
        {name:"oouyang",age:23},
        {name:"zhangsan",age:22}
    ]
    res.send(userData);
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
