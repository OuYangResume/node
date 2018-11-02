let user = require('./a.js')
console.log(user.age);
//import('./css/index.css')
import('./css/index.less')
document.getElementById('app').innerHTML=user.name;

if(module.hot){
    module.hot.accept()
}