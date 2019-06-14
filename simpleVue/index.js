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