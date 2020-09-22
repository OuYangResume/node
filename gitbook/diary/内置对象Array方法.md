## 内置对象Array

### 属性
length
### 方法
#### Array.from(arrayLike[, mapFn[, thisArg]])
Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
`arrayLike`伪数组对象（拥有一个 length 属性和若干索引属性的任意对象）
可迭代对象（可以获取对象中的元素,如 Map和 Set 等）
`mapFn`如果指定了该参数，新数组中的每个元素会执行该回调函数。
`thisArg`可选参数，执行回调函数 mapFn 时 this 对象。
``` js 
Array.from('oouyang');//["o", "o", "u", "y", "a", "n", "g"]
Array.from(new Set(Array.from('oouyang'))); //["o", "u", "y", "a", "n", "g"]
Array.from([1, 2, 3], (x) => x * x)//[1, 4, 9]
```
#### Array.isArray(obj)
Array.isArray() 用于确定传递的值是否是一个 Array。
#### var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组.
concat方法不会改变this或任何作为参数提供的数组，而是返回一个`浅拷贝`，它包含与原始数组相结合的相同元素的副本
``` js
var alpha = ['a', 'b', 'c'];
var numeric = [1, 2, 3];
alpha.concat(numeric);
// result in ['a', 'b', 'c', 1, 2, 3]
```
#### arr.entries()
entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。

#### arr.fill(value[, start[, end]])
fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
fill 方法是个可变方法, 它会改变调用它的 this 对象本身, 然后返回它, 而并不是返回一个副本。
`value`用来填充数组元素的值。
`start`起始索引，默认值为0。
`end`终止索引，默认值为 this.length。
``` js
["o", "o", "u", "y", "a", "n", "g"].fill('oo',3,5)// ["o", "o", "u", "oo", "oo", "n", "g"]
```
#### var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
`filter()` 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
`callback`用来测试数组的每个元素的函数。返回 true 表示该元素通过测试，保留该元素，false 则不保留。它接受以下三个参数：
1. `element`数组中当前正在处理的元素。
2. `index`正在处理的元素在数组中的索引。
3. `array`调用了 filter 的数组本身。
``` js 
var filtered = [12, 5, 8, 130, 44].filter((el,index,arr)=>{
    console.log(el,index,arr) //12 0 (5) [12, 5, 8, 130, 44] ......
    return el>=10
});
console.log(filtered) //[12, 130, 44]
```
#### arr.find(callback[, thisArg])
find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
``` js
var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];
let findres= inventory.find((el,index,arr)=>{
    console.log(el,index,arr)  //找到第一个之后就不执行
    return el.quantity==0
})
console.log(findres) // {name: 'bananas', quantity: 0},
```
#### arr.findIndex(callback[, thisArg])
findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。
``` js
var filtered = [12, 5, 8, 130, 44].findIndex((el,index,arr)=>{
    console.log(el,index,arr) //12 0 (5) [12, 5, 8, 130, 44] ......
    return el>=10
});
console.log(filtered)	// 0
```

#### var newArray = arr.flat([depth])
flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
`depth`指定要提取嵌套数组的结构深度，默认值为 1。
``` js 
var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]
```
#### arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
forEach() 方法对数组的每个元素执行一次给定的函数。返回值 undefined。
`callback`为数组中每个元素执行的函数，该函数接收一至三个参数：
1. `currentValue` 数组中正在处理的当前元素。
2. `index`数组中正在处理的当前元素的索引。
3. `array`forEach() 方法正在操作的数组。
``` JS 
var filtered = [12, 5, 8, 130, 44].forEach((el,index,arr)=>{
    console.log(el,index,arr) //在里面做逻辑判断
});
console.log(filtered) //undefined
```

#### arr.includes(valueToFind[, fromIndex])
includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
`valueToFind`需要查找的元素值。
`fromIndex`从fromIndex 索引处开始查找 valueToFind。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜 （即使从末尾开始往前跳 fromIndex 的绝对值个索引，然后往后搜寻）。默认为 0。
``` js
[1, 2, 3].includes(2); // true
```

#### arr.indexOf(searchElement[, fromIndex])
indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
`searchElement`要查找的元素.
`fromIndex`开始查找的位置。如果该索引值大于或等于数组长度，意味着不会在数组里查找，返回-1。如果参数中提供的索引值是一个负值，则将其作为数组末尾的一个抵消，即-1表示从最后一个元素开始查找，-2表示从倒数第二个元素开始查找 ，以此类推。 注意：如果参数中提供的索引值是一个负值，并不改变其查找顺序，查找顺序仍然是从前向后查询数组。如果抵消后的索引值仍小于0，则整个数组都将会被查询。其默认值为0.
``` js
[1, 2, 3].indexOf(2); // 1
```
#### arr.join([separator])
**join()** 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。
`separator`指定一个字符串来分隔数组的每个元素。如果需要，将分隔符转换为字符串。如果缺省该值，数组元素用逗号（,）分隔。如果separator是空字符串("")，则所有元素之间都没有任何字符。
``` js
['o', 'ou', 'yang'].join(); // "o,ou,yang"
['o', 'ou', 'yang'].join(""); // "oouyang"
```