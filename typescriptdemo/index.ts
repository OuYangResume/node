/**
 * 创建一个公共函数
 * @param person 
 */
function sayHello(person: string): string {
    return 'Hello, ' + person;
}

let user = 'Tom';
console.log(sayHello(user));


let myName: string = 'Tom';
let myAge: number = 25;
// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;
console.log(sayHello(sentence));

//返回类型为空
function consoleName(): void {
    console.log('My name is Tom');
    let name: string = "oouyang";
    // return name;
}

//any 任意值 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;



//联合类型
let myFavoriteNumber1: string | number;
myFavoriteNumber1 = 'seven';
console.log(myFavoriteNumber1.length)
myFavoriteNumber1 = 7;

function getLength(something: string | number) {
    // return something.length; 只能访问此联合类型的所有类型里共有的属性或方法：
    return something.toString()
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
    name: 'Tom',
    age: 25,
    //约束tom
    phone: 13135667053,
    address: "china"
};
tom.age = 23;
//只读属性，无法修改
//tom.id =324;
console.log(tom)


//数组
let fibonacci: (number|string)[] = [1, '1', 2, 3, 5];

let fibonacci1: Array<number|string> = [1, '1', 2, 3, 5];

interface INumberArray {
    [index: number]: number|string;
}
let fibonacci2 :INumberArray =[1,'2',3,4,5];

let fibonacci3 :any =['Xcat Liu', 25, { website: 'http://xcatliu.com' }];

/**
 * 函数。
 * 函数声明可以先调用，在声明。
 * 函数表达式必须先声明，再调用。
 */

// 函数声明（Function Declaration）
console.log(sum(2,3,3));
console.log(sum(2))

function sum(x: number, y?: number,z:number = 2): number {
    if(y){
        return x+y+z;
    }else{
        return x+z;
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
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}