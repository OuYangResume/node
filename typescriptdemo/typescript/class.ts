/**
 * 接口与类之
 * 1.接口可以继承接口
 * 2.类可以实现多个接口
 * 3.接口也可以继承类
 */
//报警的接口---公共功能
interface Alarm {
    alert();
}
//门---父类
class Door {
}
//防盗门----继承父类并实现接口
class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('SecurityDoor alert');
    }
}
//开灯的接口
interface Light {
    lightOn(): void;
    lightOff();
    ab(a: number, b: number): number
}
//车----实现多个接口
class Car implements Alarm, Light {
    alert() {
        console.log('Car alert');
    }
    lightOn() {

    }
    lightOff() {

    }
    ab(a: number, b: number) {
        return a * b
    }

}




/**
 * 范型
 * 参数类型与返回值类型是相同的
 */
function identity<T>(arg: T): T {
    return arg;
}

//范型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };