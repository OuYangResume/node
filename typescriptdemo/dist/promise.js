"use strict";

var promise = new Promise(function (resolve, reject) {
  console.log(1);

  var axios = require('axios'); // axios({
  //     method: 'get',
  //     url: 'http://localhost:8082/hello/userData',
  //   }).then(res =>{
  //       console.log(res.data)
  //       resolve(res.data);
  //   });

}).then(function (res) {
  console.log(res);
});
console.log(4);
/**
 * @description: 状态改变，就不会再变。所以成功的方法不会执行
 * @param {type} 
 * @return: 
 */

var promise1 = new Promise(function (resolve, reject) {
  reject('error');
  resolve('success1');
  resolve('success2');
});
promise1.then(function (res) {
  console.log('then:', res);
}).catch(function (err) {
  console.log('catch:', err);
});
/**
 * @description: axios获取data
 * @param {type} 
 * @return: 
 */

function getUserData() {
  var data;

  var axios = require('axios');

  axios({
    method: 'get',
    url: 'http://localhost:8082/hello/userData'
  }).then(function (res) {
    console.log(res.data);
    data = res.data;
  });
  return data;
}
/**
 * @description: 
 * 1.只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，
 * 此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
 * 2.只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，
 * 此时第一个被reject的实例的返回值，会传递给p的回调函数。
 * @param {type} 
 * @return: 
 */


var p1 = new Promise(function (resolve, reject) {
  resolve('hello');
}).then(function (result) {
  return result;
}).catch(function (e) {
  return e;
});
var p2 = new Promise(function (resolve, reject) {
  throw new Error('报错了');
}).then(function (result) {
  return result;
}).catch(function (e) {
  return e;
});
Promise.all([p1, p2]).then(function (result) {
  return console.log(result);
}).catch(function (e) {
  return console.log(e);
});