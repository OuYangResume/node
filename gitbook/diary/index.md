<!--
 * @Author: your name
 * @Date: 2020-02-05 11:34:12
 * @LastEditTime: 2020-03-08 12:58:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/gitbook/diary/index.md
 -->
### 每天看到的一些觉得有用的东西
#### 2020.2.5
```  javascript
解构
const { zhi } = Gao;
//等价于 
const zhi = Gao.zhi

let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
console.log(source)
// expected output: Object { b: 4, c: 5 }
``` 

#### 2020.3.6
注册微信小程序帐号。
AppID(小程序ID):`wxd795f4920a0fb54d`.
AppSecret(小程序密钥):`279ff1201dea393e956b7db286e56a17`.
腾讯地图位置服务的key:`BCGBZ-AYTEF-4ONJJ-JY3PU-ZY3HF-HYF3T`