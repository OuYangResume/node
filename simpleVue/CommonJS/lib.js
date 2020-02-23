/*
 * @Author: your name
 * @Date: 2020-02-23 17:30:30
 * @LastEditTime: 2020-02-23 17:30:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/simpleVue/CommonJS/lib.js
 */
// lib.js
var counter = 3;
function incCounter() {
    counter++;
}
// 对外暴露接口
module.exports = {
    counter: counter,
    incCounter: incCounter,
};
