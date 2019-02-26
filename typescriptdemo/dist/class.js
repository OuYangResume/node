"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//类的属性与方法
var Animal =
/*#__PURE__*/
function () {
  //定义构造函数，在类被实例化时调用
  function Animal(name) {
    _classCallCheck(this, Animal);

    this.name = name;
  }

  _createClass(Animal, [{
    key: "sayHi",
    value: function sayHi() {
      return "My name is ".concat(this.name);
    }
  }, {
    key: "sayNext",
    value: function sayNext() {
      return "next" + this.name;
    }
  }]);

  return Animal;
}();

var a = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack

var _default = Animal; //类的继承,子类中使用 super 关键字来调用父类的构造函数和方法

exports.default = _default;

var Cat =
/*#__PURE__*/
function (_Animal) {
  _inherits(Cat, _Animal);

  function Cat(name) {
    var _this;

    _classCallCheck(this, Cat);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Cat).call(this, name)); // 调用父类的 constructor(name)

    console.log(_this.name);
    return _this;
  }

  _createClass(Cat, [{
    key: "sayHi",
    value: function sayHi() {
      return 'Meow, ' + _get(_getPrototypeOf(Cat.prototype), "sayHi", this).call(this); // 调用父类的 sayHi()
    }
  }, {
    key: "sayHello",
    value: function sayHello() {
      return "hello";
    }
  }]);

  return Cat;
}(Animal);

var c = new Cat('Tom'); // Tom

console.log(c.sayHi()); // Meow, My name is Tom

console.log(c.sayHello()); //存取器,对某个属性设置存值函数和取值函数，拦截该属性的存取行为。

var Animal1 =
/*#__PURE__*/
function () {
  function Animal1(name) {
    _classCallCheck(this, Animal1);

    this.name = name;
  }

  _createClass(Animal1, [{
    key: "name",
    get: function get() {
      return 'Jack';
    },
    set: function set(value) {
      console.log('setter: ' + value);
    }
  }]);

  return Animal1;
}();

var a1 = new Animal1('Kitty'); // setter: Kitty

a1.name = 'Tom'; // setter: Tom

console.log(a1.name); // Jack
//静态方法,静态方法，它们不需要实例化，而是直接通过类来调用.

var Animal2 =
/*#__PURE__*/
function () {
  function Animal2(name) {
    _classCallCheck(this, Animal2);

    this.name = name;
  }

  _createClass(Animal2, [{
    key: "getAge",
    value: function getAge() {
      return this._age;
    }
  }], [{
    key: "isAnimal",
    value: function isAnimal(a) {
      console.log("静态方法已被执行！");
      return a instanceof Animal;
    }
  }, {
    key: "classMethod",
    value: function classMethod() {
      return 'hello';
    }
  }]);

  return Animal2;
}();

var a2 = new Animal2('Jack');
Animal2.isAnimal(a2); // true
//a2.isAnimal(a2); // TypeError: a.isAnimal is not a function
//父类的静态方法，可以被子类继承.

var Dog =
/*#__PURE__*/
function (_Animal2) {
  _inherits(Dog, _Animal2);

  function Dog() {
    _classCallCheck(this, Dog);

    return _possibleConstructorReturn(this, _getPrototypeOf(Dog).apply(this, arguments));
  }

  _createClass(Dog, null, [{
    key: "classMethod",
    value: function classMethod() {
      console.log(_get(_getPrototypeOf(Dog), "classMethod", this).call(this) + ', too');
      console.log(Animal2.classMethod() + ', too');
    }
  }]);

  return Dog;
}(Animal2);

Dog.isAnimal(a2);
Dog.classMethod();
/**
 * 类里面的方法调用类内部的方法。=====》this指向问题。
 */

var Logger =
/*#__PURE__*/
function () {
  function Logger() {
    var _this2 = this;

    _classCallCheck(this, Logger);

    //this.printName = this.printName.bind(this);
    this.printName = function () {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'there';

      _this2.print("Hello ".concat(name));
    };
  } // printName(name = 'there') {
  //     this.print(`Hello ${name}`);
  // }


  _createClass(Logger, [{
    key: "print",
    value: function print(text) {
      console.log(text);
    }
  }]);

  return Logger;
}();

var logger = new Logger(); //logger.printName()

var printName = logger.printName;
printName();