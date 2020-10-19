<!--
 * @Author: your name
 * @Date: 2020-10-19 20:38:30
 * @LastEditTime: 2020-10-19 22:37:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/gitbook/diary/Vue的异步渲染.md
-->
## 深入解读VUE中的异步渲染的实现

### 什么是异步渲染？
这个问题应该先要做一个前提补充，当数据在同步变化的时候，页面订阅的响应操作为什么不会与数据变化完全对应，而是在所有的数据变化操作做完之后，页面才会得到响应，完成页面渲染。

``` js 
import Vue from 'Vue'
new Vue({
 el: '#app',
 template: '<div>{{val}}</div>', 
 data () {  return {   val: 'init'  } },
 mounted () { 
  this.val = '我是第一次页面渲染' 
  this.val = '我是第二次页面渲染' 
  const st = Date.now()  
  while(Date.now() - st < 3000) {} }})
```

在mounted里给val属性进行了两次赋值，如果页面渲染与数据的变化完全同步的话，页面应该是在mounted里有两次渲染。
而由于Vue内部的渲染机制，实际上页面只会渲染一次，把第一次的赋值所带来的的响应与第二次的赋值所带来的的响应进行一次合并，将最终的val只做一次页面渲染。
而且页面是在执行所有的同步代码执行完后才能得到渲染，在上述例子里的while阻塞代码之后，页面才会得到渲染，就像在熟悉的setTimeout里的回调函数的执行一样，这就是的异步渲染。

### Vue为什么要异步渲染？
我们可以从用户和性能两个角度来探讨这个问题。

从用户体验角度，从上面例子里便也可以看出，实际上我们的页面只需要展示第二次的值变化，第一次只是一个中间值，如果渲染后给用户展示，页面会有闪烁效果，反而会造成不好的用户体验。

从性能角度，例子里最终的需要展示的数据其实就是第二次给val赋的值，如果第一次赋值也需要页面渲染则意味着在第二次最终的结果渲染之前页面还需要渲染一次无用的渲染，无疑增加了性能的消耗。

对于浏览器来说，在数据变化下，无论是引起的重绘渲染还是重排渲染，都有可能会在性能消耗之下造成低效的页面性能，甚至造成加载卡顿问题。

异步渲染和熟悉的节流函数最终目的是一致的，将多次数据变化所引起的响应变化收集后合并成一次页面渲染，从而更合理的利用机器资源，提升性能与用户体验。

### Vue中如何实现异步渲染？
先总结一下原理，在Vue中异步渲染实际在数据每次变化时，将其所要引起页面变化的部分都放到一个异步API的回调函数里，直到同步代码执行完之后，异步回调开始执行，最终将同步代码里所有的需要渲染变化的部分合并起来，最终执行一次渲染操作。

拿上面例子来说，当val第一次赋值时，页面会渲染出对应的文字，但是实际这个渲染变化会暂存，val第二次赋值时，再次暂存将要引起的变化，这些变化操作会被丢到异步API，Promise.then的回调函数中，等到所有同步代码执行完后，then函数的回调函数得到执行，然后将遍历存储着数据变化的全局数组，将所有数组里数据确定先后优先级，最终合并成一套需要展示到页面上的数据，执行页面渲染操作操作。

异步队列执行后，存储页面变化的全局数组得到遍历执行，执行的时候会进行一些筛查操作，将重复操作过的数据进行处理，实际就是先赋值的丢弃不渲染，最终按照优先级最终组合成一套数据渲染。

这里触发渲染的异步API优先考虑Promise，其次MutationObserver，如果没有MutationObserver的话，会考虑setImmediate，没有setImmediate的话最后考虑是setTimeout。

``` js
1. MutationObserver接口提供了监视对DOM树所做更改的能力。
创建并返回一个新的 MutationObserver 它会在指定的DOM发生变化时被调用。
2. setImmediate该方法用来把一些需要长时间运行的操作放在一个回调函数里,
在浏览器完成后面的其他语句后,就立刻执行这个回调函数。
```

### 源码层面梳理一下的Vue的异步渲染过程。
1. 当我们使用this.val='343'赋值的时候，val属性所绑定的Object.defineProperty的setter函数触发，setter函数将所订阅的notify函数触发执行。
``` js 
    defineReactive() { 
  set: function reactiveSetter (newVal) { 
    dep.notify(); 
 } 
}
```

2. notify函数中，将所有的订阅组件watcher中的update方法执行一遍。
``` js 
Dep.prototype.notify = function notify () { 
 // 拷贝所有组件的watcher var subs = this.subs.slice(); 
 ... for (var i = 0, l = subs.length; i < l; i++) {
  subs[i].update(); }};
```
3. update函数得到执行后，默认情况下lazy是false，sync也是false，直接进入把所有响应变化存储进全局数组queueWatcher函数下。
``` js 
    Watcher.prototype.update = function update () {
 if (this.lazy) {
  this.dirty = true;
 } else if (this.sync) {
  this.run(); }
 else { 
  queueWatcher(this); }};
```

4. queueWatcher函数里，会先将组件的watcher存进全局数组变量queue里。默认情况下config.async是true，直接进入nextTick的函数执行，nextTick是一个浏览器异步API实现的方法，它的回调函数是flushSchedulerQueue函数。
``` js 
function queueWatcher (watcher) { 
... // 在全局队列里存储将要响应的变化update函数 queue.push(watcher); 
 ... // 当async配置是false的时候，页面更新是同步的 
 if (!config.async) { 
  flushSchedulerQueue(); 
   return } 
// 将页面更新函数放进异步API里执行，同步代码执行完开始执行更新页面函数
 nextTick(flushSchedulerQueue);}
```

5. nextTick函数的执行后，传入的flushSchedulerQueue函数又一次push进callbacks全局数组里，pending在初始情况下是false，这时候将触发timerFunc。
``` js 
    function nextTick (cb, ctx) { 
    var _resolve; 
 callbacks.push(function () { 
  if (cb) { 
   try { 
   cb.call(ctx); 
  } 
catch (e) { 
   handleError(e, ctx, 'nextTick'); 
   } 
 } else if (_resolve) { 
  _resolve(ctx);  } }); 
 if (!pending) { 
 pending = true; 
  timerFunc(); } // $flow-disable-line 
 if (!cb && typeof Promise !== 'undefined') { 
 return new Promise(function (resolve) {   _resolve = resolve;  }) }}
```
6. timerFunc函数是由浏览器的Promise、MutationObserver、setImmediate、setTimeout这些异步API实现的，异步API的回调函数是flushCallbacks函数。   

``` js 
    var timerFunc;
    // 这里Vue内部对于异步API的选用，
//由Promise、MutationObserver、setImmediate、setTimeout里取一个
 //取用的规则是 Promise存在取由Promise，不存在取MutationObserver，
//MutationObserver不存在setImmediate，// setImmediate不存在setTimeout。
if (typeof Promise !== 'undefined' && isNative(Promise)) {
 var p = Promise.resolve(); timerFunc = function () { 
  p.then(flushCallbacks);  
 if (isIOS) { 
   setTimeout(noop);  } }; 
 isUsingMicroTask = true;
} 
  else if (!isIE && typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) ||MutationObserver.toString() === '[object MutationObserverConstructor]')) 
       { 
        var counter = 1; 
        var observer = new MutationObserver(flushCallbacks);      
        var textNode = document.createTextNode(String(counter)); 
        observer.observe(textNode, {characterData: true}); 
        timerFunc = function () {  
            counter = (counter + 1) % 2;  
            textNode.data = String(counter); 
        }; 
  isUsingMicroTask = true;
 } 
  else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) { 
         timerFunc = function () {  
                      setImmediate(flushCallbacks); 
                     };
         
         } 
         else { timerFunc = function () 
            {  
            setTimeout(flushCallbacks, 0); 
 
};
}
 ```
7. flushCallbacks函数中将遍历执行nextTick里push的callback全局数组，全局callback数组中实际是第5步的push的flushSchedulerQueue的执行函数。
``` js 
// 将nextTick里push进去的flushSchedulerQueue函数进行for循环依次调用
function flushCallbacks () { 
 pending = false; 
 var copies = callbacks.slice(0); 
 callbacks.length = 0; 
 for (var i = 0; i < copies.length; i++) {  copies[i](); }}
```

8. callback遍历执行的flushSchedulerQueue函数中，flushSchedulerQueue里先按照id进行了优先级排序，接下来将第4步中的存储watcher对象全局queue遍历执行，触发渲染函数watcher.run。
``` js 
function flushSchedulerQueue () {
var watcher, id;// 安装id从小到大开始排序，
//越小的越前触发的
updatequeue.sort(function (a, b) { 
return a.id - b.id; });// queue是全局数组，它在queueWatcher函数里，
//每次update触发的时候将当时的watcher,push进去
 for (index = 0; index < queue.length; index++) { 
  ...  watcher.run(); // 渲染  ... }}
```

9. watcher.run的实现在构造函数Watcher原型链上，初始状态下active属性为true，直接执行Watcher原型链的set方法。
``` js 
Watcher.prototype.run = function run () {
 if (this.active) {  var value = this.get();  ... }};
```

10. get函数中，将实例watcher对象push到全局数组中，开始调用实例的getter方法，执行完毕后，将watcher对象从全局数组弹出，并且清除已经渲染过的依赖实例。
``` js 
Watcher.prototype.get = function get () { 
 pushTarget(this); 
 // 将实例push到全局数组targetStack 
 var vm = this.vm; 
 value = this.getter.call(vm, vm); 
}
```

11. 实例的getter方法实际是在实例化的时候传入的函数，也就是下面vm的真正更新函数_update。
``` js 
function () { vm._update(vm._render(), hydrating);};
```
12. 实例的_update函数执行后，将会把两次的虚拟节点传入传入vm的 patch 方法执行渲染操作。
``` js 
Vue.prototype._update = function (vnode, hydrating) { 
 var vm = this; 
 ... var prevVnode = vm._vnode;
 vm._vnode = vnode;
 if (!prevVnode) { 
  // initial render  
vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */); 
 } else {  
  // updates  
  vm.$el = vm.__patch__(prevVnode, vnode); 
  } 
};
```