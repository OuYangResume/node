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

#### arr.some(callback(element[, index[, array]])[, thisArg])
some() 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。
`callback`为数组中每个元素执行的函数，该函数接收一至三个参数：
1. `element ` 数组中正在处理的当前元素。
2. `index`数组中正在处理的当前元素的索引。
3. `array`forEach() 方法正在操作的数组。
``` js 
[12, 5, 8, 1, 4].some(x => x > 10); // true
```

#### arr.indexOf(searchElement[, fromIndex])
indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
`searchElement`要查找的元素.
`fromIndex`开始查找的位置。如果该索引值大于或等于数组长度，意味着不会在数组里查找，返回-1。如果参数中提供的索引值是一个负值，则将其作为数组末尾的一个抵消，即-1表示从最后一个元素开始查找，-2表示从倒数第二个元素开始查找 ，以此类推。 注意：如果参数中提供的索引值是一个负值，并不改变其查找顺序，查找顺序仍然是从前向后查询数组。如果抵消后的索引值仍小于0，则整个数组都将会被查询。其默认值为0.
``` js
[1, 2, 3].indexOf(2); // 1
```
#### arr.toString()
toString() 返回一个字符串，表示指定的数组及其元素。
当一个数组被作为文本值或者进行字符串连接操作时，将会自动调用其 toString 方法。
``` js
['o', 'ou', 'yang'].toString(); // "o,ou,yang"

```
#### arr.join([separator])
**join()** 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。
`separator`指定一个字符串来分隔数组的每个元素。如果需要，将分隔符转换为字符串。如果缺省该值，数组元素用逗号（,）分隔。如果separator是空字符串("")，则所有元素之间都没有任何字符。
``` js
['o', 'ou', 'yang'].join(); // "o,ou,yang"
['o', 'ou', 'yang'].join(""); // "oouyang"
```
#### var new_array = arr.map(function callback(currentValue[, index[,	array]]) {// Return element for new_array }[, thisArg])
map() 方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。

``` JS 
var filtered = [1, 2, 3, 4].map((el,index,arr)=>{
    console.log(el,index,arr) //1 0 [1, 2, 3, 4]
    return el*2;
});
console.log(filtered) //[2, 4, 6, 8]
```
#### arr.shift()
shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
从数组中删除的元素; 如果数组为空则返回undefined 。 
``` js 
let myFish = ["angel", "clown", "mandarin", "surgeon"];
let popped = myFish.shift();
console.log(myFish); 
// ["clown", "mandarin", "surgeon"]
console.log(popped); //"angel"
```
#### arr.unshift(element1, ..., elementN)
unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)。
``` js 
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.unshift('cows');
console.log(count); //4
console.log(animals);//["cows", "pigs", "goats", "sheep"]s
```

#### arr.pop()
pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。
从数组中删除的元素(当数组为空时返回undefined)。
``` js 
let myFish = ["angel", "clown", "mandarin", "surgeon"];
let popped = myFish.pop();
console.log(myFish); 
// ["angel", "clown", "mandarin"]
console.log(popped); //"surgeon"
```
#### arr.push(element1, ..., elementN)
push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
``` js 
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(count); //4
console.log(animals);//["pigs", "goats", "sheep", "cows"]
```
#### arr.reverse()
reverse() 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组。
``` js 
const a = [1, 2, 3];
console.log(a); // [1, 2, 3]
a.reverse(); 
console.log(a); // [3, 2, 1]
```
#### arr.slice([begin[, end]])
slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
`begin `提取起始处的索引（从 0 开始），从该索引开始提取原数组元素。
如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取，slice(-2) 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。
如果省略 begin，则 slice 从索引 0 开始。
如果 begin 大于原数组的长度，则会返回空数组。

`end `提取终止处的索引（从 0 开始），在该索引处结束提取原数组元素。slice 会提取原数组中索引从 begin 到 end 的所有元素（包含 begin，但不包含 end）。
``` js 
let obj = {name:"oou"}
let list =["o", obj, "u", "y", "a", "n", "g"]
let newList = list.slice(1,3)
console.log(JSON.stringify(list)) //["o",{"name":"oou"},"u","y","a","n","g"]
obj.name='ww'
console.log(JSON.stringify(newList)) //[{"name":"ww"},"u"]
```

#### arr.sort([compareFunction])
sort() 方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的.

`compareFunction`
如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；
如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变。
如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前
``` js 
var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic',value:0 },
  { name: 'Zeros', value: 37 }
];

// sort by value
items.sort(function (a, b) {
  return (a.value - b.value)
});
//[{"name":"The","value":-12},{"name":"Magnetic","value":0},{"name":"Edward","value":21},{"name":"Sharpe","value":37},{"name":"Zeros","value":37},{"name":"And","value":45}]
```	
#### array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
`starts`指定修改的开始位置（从0计数）。如果超出了数组的长度，则从数组末尾开始添加内容；如果是负值，则表示从数组末位开始的第几位（从-1计数，这意味着-n是倒数第n个元素并且等价于array.length-n）；如果负数的绝对值大于数组的长度，则表示开始位置为第0位。

`deleteCount `整数，表示要移除的数组元素的个数。
如果 deleteCount 大于 start 之后的元素的总数，则从 start 后面的元素都将被删除（含第 start 位）。
如果 deleteCount 被省略了，或者它的值大于等于array.length - start(也就是说，如果它大于或者等于start之后的所有元素的数量)，那么start之后数组的所有元素都会被删除。
如果 deleteCount 是 0 或者负数，则不移除元素。这种情况下，至少应添加一个新元素。
`item1,itme2`要添加进数组的元素,从start 位置开始。如果不指定，则 splice() 将只删除数组元素。
``` js 
let list =["o", "o", "u", "y", "a", "n", "g"]
console.log(list.splice(1,2,'ww')) //["o", "u"] 被修改的内容
console.log(list) //["o", "ww", "y", "a", "n", "g"]
```