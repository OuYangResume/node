/*
 * @Author: your name
 * @Date: 2020-10-23 20:49:06
 * @LastEditTime: 2020-10-23 21:55:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/typescriptdemo/typescript/class.ts
 */

/**
 * //类
 * 类的访问属性 public private protected
 * public 允许到类的内外被调用--默认值
 * private 只允许类的内部被调用
 * protected 允许在类的内部和继承的子类调用
 */
class Point {
  name = "point";
  getName() {
    return this.name;
  }
}

//类的继承
class Geomentry extends Point {
  constructor() {
    super();
  }
  //对父类的属性重写
  name = "geomentry";
  getGeoName() {
    return this.name;
  }
  //对父类的方法重写
  //super是调用父类的方法
  getName() {
    return super.getName() + this.name; //geomentrygeomentry
  }
}

let point = new Point();
let geo = new Geomentry();
console.log(point.getName());
console.log(geo.getGeoName());
console.log(geo.getName());

//constructor构造函数
class Bbox {
  //传统写法
  // public name: string;
  // constructor(name: string) {
  //   this.name = name;
  // }
  //简化写法
  constructor(public name: string) {}
}

class RoundBbox extends Bbox {
  //子类的构造函数必须调用super()
  constructor(public age: string, name: string) {
    super(name);
  }
}

let bbox = new Bbox("bbox");
