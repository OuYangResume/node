/*
 * @Author: your name
 * @Date: 2020-10-23 20:49:06
 * @LastEditTime: 2020-10-24 22:03:28
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

//抽象类
abstract class Point {
  name = "point";
  getName() {
    return this.name;
  }
  //抽象方法必须再子类中实现
  abstract getArea(): number;
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
  //抽象方法的实现
  getArea() {
    return 123;
  }
}

let geo = new Geomentry();
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

//getter setter
class Circle {
  //只读
  readonly dir: number;
  constructor(private _name: string, dir: number) {}
  //通过get，set在外部获取私有属性----可以处理加密保护类的私有属性
  get name() {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }
}
let circle = new Circle("circle", 23);
console.log(circle.name);
console.log(circle.dir);
//circle.dir =34

//单例模式
class Style {
  private static instance: Style;
  //私有属性
  private constructor() {}
  //静态
  static getInstance() {
    if (!this.instance) {
      this.instance = new Style();
    }
    return this.instance;
  }
}

let style1 = Style.getInstance();
let style2 = Style.getInstance();
