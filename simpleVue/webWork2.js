/*
 * @Author: your name
 * @Date: 2020-03-26 15:22:40
 * @LastEditTime: 2020-03-26 15:22:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/simpleVue/webWork2.js
 */
console.log(self.name,'webWork2.js');

// 定时器 计算值 返回给 主线程
let i = 1;
function add () {
 i ++;
 self.postMessage(i);
 setTimeout(add, 1000);
}

add();

// 监听主线程消息
self.onmessage = (e) => {
   if (e.data == 'stop') {
       self.close();
   }
}