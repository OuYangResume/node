<!--
 * @Author: your name
 * @Date: 2020-02-26 10:54:54
 * @LastEditTime: 2020-02-26 20:49:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/gitbook/diary/class.md
 -->
 ### 类

 JavaScript 语言中，生成实例对象的传统方法是通过构造函数。  
 ``` javascript 
 function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);
 ```
 基本上，ES6 的class可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。
 ``` javascript 
 class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

var p = new Point(1, 2);
//在类的实例上面调用方法，其实就是调用原型上的方法。
console.log(p.constructor === Point.prototype.constructor )//true
//类的所有实例共享一个原型对象。
var p1 = new Point(2,3);
var p2 = new Point(3,2);
console.log(p1.__proto__ === p2.__proto__)//true
 ```

 #### constructor 方法 
 constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。`constructor方法默认返回实例对象（即this）`

 #### 类的实例
 生成类的实例的写法，与 ES5 完全一样，也是使用new命令。前面说过，如果忘记加上new，像函数那样调用Class，将会报错。