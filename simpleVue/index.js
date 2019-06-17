let Book = {};
let name = '';

/**
 * vue确实是通过这种方法来进行数据劫持
 * @description: Object.defineProperty(obj, prop, descriptor)
 * obj
要在其上定义属性的对象。
prop
要定义或修改的属性的名称。
descriptor
将被定义或修改的属性描述符。

configurable
当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false。
enumerable
当且仅当该属性的enumerable为true时，该属性才能够出现在对象的枚举属性中。默认为 false。
value
该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。
writable
当且仅当该属性的writable为true时，value才能被赋值运算符改变。默认为 false。
 * @param {type} 
 * @return: 
 */
Object.defineProperty(Book, 'name', {
    set(val) {
        name = val;
        console.log('你取了一个书名叫做' + val);
    },
    get() {
        return '《' + name + '》'
    }
})

Book.name="oouyang";
console.log(Book.name);