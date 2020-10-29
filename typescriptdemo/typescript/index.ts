/**
 * 创建一个公共函数
 * @param person
 */
function sayHello(person: string): string {
  return "Hello, " + person;
}

let user = "Tom";
console.log(sayHello(user));

let myName: string = "Tom";
let myAge: number = 25;
// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;
console.log(sayHello(sentence));

//返回类型为空
function consoleName(): void {
  console.log("My name is Tom");
  let name: string = "oouyang";
  // return name;
}

//any 任意值 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
let myFavoriteNumber;
myFavoriteNumber = "seven";
myFavoriteNumber = 7;

//联合类型
let myFavoriteNumber1: string | number;
myFavoriteNumber1 = "seven";
console.log(myFavoriteNumber1.length);
myFavoriteNumber1 = 7;

function getLength(something: string | number) {
  // return something.length; 只能访问此联合类型的所有类型里共有的属性或方法：
  return something.toString();
}

//接口 赋值的时候，变量的形状必须和接口的形状保持完全一致
interface IPerson {
  //确定属性
  name: string;
  age: number;
  //可选属性
  phone?: number;
  //任意属性 一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性：
  [propName: string]: string | number;
  //只读属性
  readonly id: number;
}

let tom: IPerson = {
  id: 1,
  name: "Tom",
  age: 25,
  //约束tom
  phone: 13135667053,
  address: "china",
};
tom.age = 23;
//只读属性，无法修改
//tom.id =324;
console.log(tom);

//数组&&元组
let fibonacci: (number | string)[] = [1, "1", 2, 3, 5];

let fibonacci1: Array<number | string> = [1, "1", 2, 3, 5];

interface INumberArray {
  [index: number]: number | string;
}
let fibonacci2: INumberArray = [1, "2", 3, 4, 5];

let fibonacci3: any = ["Xcat Liu", 25, { website: "http://xcatliu.com" }];

/**
 * 函数。
 * 函数声明可以先调用，在声明。
 * 函数表达式必须先声明，再调用。
 */

// 函数声明（Function Declaration）
console.log(sum(2, 3, 3));
console.log(sum(2));

function sum(x: number, y?: number, z: number = 2): number {
  if (y) {
    return x + y + z;
  } else {
    return x + z;
  }
}
// 函数表达式（Function Expression）
let mySum = function (x, y) {
  return x + y;
};

//类型断言
function getLength1(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length;
  } else {
    return something.toString().length;
  }
}
//类型别名
type StringOrNumber = string | number;
function getLength2(something: StringOrNumber): number {
  if ((something as string).length) {
    return (something as string).length;
  } else {
    return something.toString().length;
  }
}
//字符串字面量类型  用来约束取值只能是某几个字符串中的一个
type EventNames = "click" | "scroll" | "mousemove";
function handleEvent(ele: Element, event: EventNames) {
  // do something
}
//枚举
enum Days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
let day = [Days.Sun, Days.Mon, Days.Tue];
//常数枚举
const enum Directions {
  Up,
  Down,
  Left,
  Right,
}
let directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right,
];
//外部枚举
declare enum Directions1 {
  Up,
  Down,
  Left,
  Right,
}
let directions1 = [
  Directions1.Up,
  Directions1.Down,
  Directions1.Left,
  Directions1.Right,
];

/**
 * class
 * protected与private都是私有的
 * protected修饰，则允许在子类中访问。
 * static静态方法，它们不需要实例化，而是直接通过类来调用.父类的静态方法，可以被子类继承.
 * abstract 用于定义抽象类和其中的抽象方法。抽象类中的抽象方法必须被子类实现。抽象方法只能在抽象类中。
 */
class Animal5 {
  protected name: string; //私有属性
  constructor(name: string) {
    this.name = name;
  }
  sayHi(name: string) {
    return `hi,my name is ${this.name}`;
  }
}

let a5 = new Animal5("Jack");
//console.log(a5.name); // Jack
//a5.name = 'Tom';

class cat extends Animal5 {
  constructor(name: string) {
    super(name); // 调用父类的 constructor(name)
    console.log(this.name);
  }
}

abstract class Geometry {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract getGeometry();
}

class Point1 extends Geometry {
  public x: number;
  public y: number;
  constructor(name: string, x: number, y: number) {
    super(name);
    this.x = x;
    this.y = y;
  }
  getGeometry() {}
}
