"use strict";

function Person() {}
Person.prototype.age=24;
Person.prototype.getAge = function(){
  return this.age;
}

var person = new Person();
person.name = 'Kevin';

console.log(person.getAge());
console.log(person.__proto__.__proto__.constructor.prototype);
console.log(Person.prototype);

if (Person.prototype == person.__proto__) {
  console.log(Person.prototype.constructor);
}