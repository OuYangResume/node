<!--
 * @Author: your name
 * @Date: 2020-02-05 11:34:12
 * @LastEditTime: 2020-03-31 18:20:35
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

#### 2020.3.30
[前端开发者必会的34道Vue面试题解析](https://juejin.im/post/5e8064c551882573a13777e2?utm_source=gold_browser_extension)


#### 2020.3.31
1. sessionStorage刷新页面不会清除。新建table页会消失。
2. vuex刷新页面会被清除。
3. href是Hypertext Reference的简写，表示超文本引用，指向网络资源所在位置。
4. src是source的简写，目的是要把文件下载到html页面中去。
href 用于在当前文档和引用资源之间确立联系
src 用于替换当前内容

``` 
1. 当浏览器遇到href会并行下载资源并且不会停止对当前文档的处理。
(同时也是为什么建议使用 link 方式加载 CSS，而不是使用 @import 方式)
2. 当浏览器解析到src ，会暂停其他资源的下载和处理，直到将该资源加载或执行完毕。
(这也是script标签为什么放在底部而不是头部的原因)
```