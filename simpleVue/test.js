/*
 * @Author: your name
 * @Date: 2020-02-23 09:32:37
 * @LastEditTime: 2020-02-23 19:15:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/simpleVue/test.js
 */
let arr = [2, 3, 4]
let arr1 = arr.map((element, index, arr) => {
    let obj = {
        arr: arr[index] + 1,
        element: element,
        index: index
    }
    return obj;
}) // [3,4,5]
console.dir(arr1)


let array = [1, 2, 4, 6]
let array1 = array.filter((element, index, arr) => {
    return element >= 2 && element != 6;
})// [2,4]

console.dir(array1)

let reduceaArr = [1, 2, 3]
let sum = reduceaArr.reduce(function (acc, element, index, reduceaArr) {
    let obj = {

        element: element,
        index: index,
        reduceaArr: reduceaArr
    }
    return acc + element;
}, 0) // 6
console.log(sum)


// 加载外部模块
var mod = require('./CommonJS/lib.js');

console.log(mod.counter);  // 3
mod.incCounter();
// 原始类型的值被缓存，所以就没有被改变（commonJS 不会随着执行而去模块随时调用）
console.log(mod.counter); // 3

//import counter from './CommonJS/es6.js';
//import { counter,incCounter } from './CommonJS/es6.js';
// console.log(counter); // 3
// incCounter();
// ES6 模块不同的是，静态加载完毕之后，每执行到模块中的方法，就去模块内调用（外部的变量总是与模块进行绑定的），而且值不会被缓存。
//console.log(counter); // 4
