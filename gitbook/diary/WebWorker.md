<!--
 * @Author: your name
 * @Date: 2020-03-26 13:41:41
 * @LastEditTime: 2020-03-26 18:09:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/gitbook/diary/WebWorker.md
 -->
### Web Worker
给JS创造多线程运行环境，允许主线程创建worker线程，分配任务给后者，主线程运行的同时worker线程也在运行，相互不干扰，在worker线程运行结束后把结果返回给主线程。

#### 懒加载、预加载
`懒加载`:懒加载也就是延迟加载。很多页面，内容很丰富，页面很长，图片较多。比如说各种商城页面。
原理：先把img的src指向空或者一个小图片，图片真实的地址存储在img一个自定义的属性里,< img src=”” data-src=”http://real.com/real.jpg” />,等到此图片出现在视野范围内了，获取img元素，把data-src里的值赋给src。这样做能防止页面一次性向服务器响应大量请求导致服务器响应慢，页面卡顿或崩溃等问题。懒加载的作用减少不要的请求，缓解了服务器压力。


`预加载`:提前加载图片，当用户需要查看时可直接从本地缓存中渲染
预加载是指在页面加载完成之前，提前将所需资源下载，之后使用的时候从缓存中调用；懒加载是延迟加载，按照一定的条件或者需求等到满足条件的时候再加载对应的资源

预加载增加了服务器压力，换来的是用户体验的提升，典型例子是在一个图片较多的网页中，如果使用了预加载就可以避免网页加载出来是时，图片的位置一片空白（图片可能还没加载出来），造成不好的用户体验；

我们用web worker实现`预加载`.
```  javascript
    //主线程
    let w = new Worker("./workers.js");
    w.onmessage =
        function (event) {
            var img = document.createElement("img");
            img.src = window.URL.createObjectURL(event.data);
            document.querySelector('#result').appendChild(img);
        };
```

```  javascript
//workers.js
let arr = [...图片地址];
for (let i = 0, len = arr.length; i < len; i++) {
    let req = new XMLHttpRequest();
    debugger;
    req.open('GET', arr[i], true);
    req.responseType = "blob";
    req.setRequestHeader("client_type", "DESKTOP_WEB");
    req.onreadystatechange = () => {
        if (req.readyState == 4) {
            postMessage(req.response);
        }
    };
    req.send(null);
}
```

#### API
 **主线程**

浏览器原生提供Worker()构造函数，用来供主线程生成 Worker 线程。

`var myWorker = new Worker(jsUrl, options);`
Worker()构造函数，可以接受两个参数。第一个参数是脚本的网址（必须遵守同源政策），该参数是必需的，且只能加载 JS 脚本，否则会报错。第二个参数是配置对象，该对象可选。它的一个作用就是指定 Worker 的名称，用来区分多个 Worker 线程。


// 主线程
`var myWorker = new Worker('worker.js', { name : 'myWorker' });`

// Worker 线程
`self.name // myWorker`
Worker()构造函数返回一个 Worker 线程对象，用来供主线程操作 Worker。
Worker 线程对象的属性和方法如下。
1. Worker.onerror：指定 error 事件的监听函数。
2. Worker.onmessage：指定 message 事件的监听函数，发送过来的数据在Event.data属性中。
3. Worker.onmessageerror：指定 messageerror 事件的监听函数。发送的数据无法序列化成字符串时，会触发这个事件。
4. Worker.postMessage()：向 Worker 线程发送消息。
5. Worker.terminate()：立即终止 Worker 线程。

**Worker 线程**

Web Worker 有自己的全局对象，不是主线程的window，而是一个专门为 Worker 定制的全局对象。因此定义在window上面的对象和方法不是全部都可以使用。
由于 Web Workers 的多线程特性，它只能使用一部分 JavaScript 功能。以下是可使用的功能列表：

1. navigator 对象
2. location 对象（只读）
3. XMLHttpRequest
4. setTimeout()/clearTimeout() 和 setInterval()/clearInterval()
5. Application Cache
6. 使用 importScripts 来引用外部脚本
7. 创建其它 web workers

Worker 线程有一些自己的全局属性和方法。

1. self.name： Worker 的名字。该属性只读，由构造函数指定。
2. self.onmessage：指定message事件的监听函数。
3. self.onmessageerror：指定 messageerror 事件的监听函数。发送的数据无法序列化成字符串时，会触发这个事件。
4. self.close()：关闭 Worker 线程。
5. self.postMessage()：向产生这个 Worker 线程发送消息。
6. self.importScripts()：加载 JS 脚本。