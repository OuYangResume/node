/*
 * @Author: your name
 * @Date: 2020-02-25 14:37:55
 * @LastEditTime: 2020-02-25 14:37:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/simpleVue/index.js
 */
const fs = require('fs');

const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

const gen = function* () {
  const f1 = yield readFile('/etc/man.conf');
  const f2 = yield readFile('/etc/asl.conf');
  console.log(f1.toString());
  console.log(f2.toString());
};

gen();