let user = require('./a.js')
document.getElementById("app").innerHTML=user.name

if(module.hot){
    module.hot.accpet("./a.js",function(){  
    });
}