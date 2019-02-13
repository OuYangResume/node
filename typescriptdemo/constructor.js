function Person() {

}
var person = new Person();
person.name = 'Kevin';
console.log(person.name)
console.log(person.__proto__.__proto__.constructor.prototype)
console.log(Person.prototype)

if(Person.prototype==person.__proto__){
    console.log(Person.prototype.constructor)
}