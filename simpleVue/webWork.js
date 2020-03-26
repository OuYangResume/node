/*
 * @Author: your name
 * @Date: 2020-03-26 15:18:51
 * @LastEditTime: 2020-03-26 16:58:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/simpleVue/webWork.js
 */
console.log(self.name, 'webWork.js');

// self代表子线程自身，即子线程的全局对象。

// // 可以自己写监听
 self.addEventListener('message', function (e) {
     let data =e.data;
    switch (data.cmd) {
        case 'start':
          self.postMessage('WORKER STARTED: ' + data.msg);
          break;
        case 'info':
            self.postMessage('WORKER STARTED: ' + data.msg);
            break;
        case 'stop':
          self.postMessage('WORKER STOPPED: ' + data.msg);
          self.close(); // Terminates the worker.
          break;
        default:
          self.postMessage('Unknown command: ' + data.msg);
      };
 }, false);

// 也可以使用 onmessage 来进行监听
self.onmessage = (e) => {
    self.postMessage('You said: ' + e.data);
    if (e.data == 'Work done!') {
        self.close();
    }
}