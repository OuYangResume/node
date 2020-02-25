/*
 * @Author: your name
 * @Date: 2020-02-25 11:12:51
 * @LastEditTime: 2020-02-25 14:38:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/simpleVue/index.js
 */
// 加载模块中的某个值
import { counter, incCounter } from './CommonJS/es6.mjs';
console.log(counter); // 3
incCounter();
// ES6 模块不同的是，静态加载完毕之后，每执行到模块中的方法，就去模块内调用（外部的变量总是与模块进行绑定的），而且值不会被缓存。
console.log(counter); // 4
