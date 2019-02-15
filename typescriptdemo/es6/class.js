//类的属性与方法
class Animal {
    //定义构造函数，在类被实例化时调用
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `My name is ${this.name}`;
    }
    sayNext() {
        return "next" + this.name;
    }
}

let a = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack




//类的继承,子类中使用 super 关键字来调用父类的构造函数和方法
class Cat extends Animal {
    constructor(name) {
        super(name); // 调用父类的 constructor(name)
        console.log(this.name);
    }
    sayHi() {
        return 'Meow, ' + super.sayHi(); // 调用父类的 sayHi()
    }
    sayHello() {
        return "hello"
    }
}

let c = new Cat('Tom'); // Tom
console.log(c.sayHi()); // Meow, My name is Tom
console.log(c.sayHello());



//存取器,对某个属性设置存值函数和取值函数，拦截该属性的存取行为。
class Animal1 {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return 'Jack';
    }
    set name(value) {
        console.log('setter: ' + value);
    }
}

let a1 = new Animal1('Kitty'); // setter: Kitty
a1.name = 'Tom'; // setter: Tom
console.log(a1.name); // Jack



//静态方法,静态方法，它们不需要实例化，而是直接通过类来调用.
class Animal2 {
    constructor(name) {
        this.name = name;
    }
    static isAnimal(a) {
        console.log("静态方法已被执行！")
        return a instanceof Animal;
    }
    static classMethod() {
        return 'hello'
    }
    getAge() {
        return this._age;
    }
}

let a2 = new Animal2('Jack');
Animal2.isAnimal(a2); // true
//a2.isAnimal(a2); // TypeError: a.isAnimal is not a function



//父类的静态方法，可以被子类继承.
class Dog extends Animal2 {
    static classMethod() {
        console.log(super.classMethod() + ', too');
        console.log(Animal2.classMethod() + ', too');
    }
}
Dog.isAnimal(a2);
Dog.classMethod()


/**
 * 类里面的方法调用类内部的方法。=====》this指向问题。
 */
class Logger {
    constructor() {
        //this.printName = this.printName.bind(this);
        this.printName = (name = 'there') => {
            this.print(`Hello ${name}`);
        };
    }
    // printName(name = 'there') {
    //     this.print(`Hello ${name}`);
    // }

    print(text) {
        console.log(text);
    }
}

const logger = new Logger();
//logger.printName()
const { printName } = logger;
printName();
