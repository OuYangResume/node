<!--
 * @Author: your name
 * @Date: 2020-02-25 14:29:02
 * @LastEditTime: 2020-02-25 15:02:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/gitbook/diary/anscy.md
 -->

 ### async
async 函数是什么？一句话，它就是 Generator 函数的语法糖。使得异步操作变得更加方便。

``` javascript 
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
  const f1 = yield readFile('/etc/fstab');
  const f2 = yield readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};
``` 
Generator---- async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await，仅此而已。
``` javascript 
const asyncReadFile = async function () {
  const f1 = await readFile('/etc/fstab');
  const f2 = await readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};
```
* 内置执行器。--不需要调用next方法，或者用co模块。
* 语义化
* 更广的适用性：yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时会自动转成立即 resolved 的 Promise 对象）
* async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了。

#### 基本用法
async函数返回一个 Promise 对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。
``` javascript 
async function getStockPriceByName(name) {
  const symbol = await getStockSymbol(name);
  const stockPrice = await getStockPrice(symbol);
  return stockPrice;
}

getStockPriceByName('goog').then(function (result) {
  console.log(result);
});
```

#### 使用注意点
1. await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中。
``` javascript 
async function myFunction() {
  try {
    await somethingThatReturnsAPromise();
  } catch (err) {
    console.log(err);
  }
}
```

2. 多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。
``` javascript 
let foo = await getFoo();
let bar = await getBar();
```
getFoo和getBar是两个独立的异步操作（即互不依赖），被写成继发关系。这样比较耗时，因为只有getFoo完成以后，才会执行getBar，完全可以让它们同时触发。    
``` javascript 
let [foo, bar] = await Promise.all([getFoo(), getBar()]);
```
3. await命令只能用在async函数之中，如果用在普通函数，就会报错。        
``` javascript 
async function dbFuc(db) {
  let docs = [{}, {}, {}];
  let promises = docs.map((doc) => db.post(doc));

  let results = await Promise.all(promises);
  console.log(results);
}
// 或者使用下面的写法
async function dbFuc(db) {
  let docs = [{}, {}, {}];
  let promises = docs.map((doc) => db.post(doc));

  let results = [];
  for (let promise of promises) {
    results.push(await promise);
  }
  console.log(results);
}
```   