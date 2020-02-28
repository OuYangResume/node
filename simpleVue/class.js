/*
 * @Author: your name
 * @Date: 2020-02-26 20:36:59
 * @LastEditTime: 2020-02-26 20:53:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/simpleVue/class.js
 */

//类的属性名，可以采用表达式。
let methodName = 'getArea';
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
    //属性表达式
    [methodName]() {
       return 'getArea';
      }
}

let p =new Point(1,2)
console.log(p.toString());
console.log(p.getArea());
console.log(p.constructor === Point.prototype.constructor )