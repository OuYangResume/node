<!--
 * @Author: your name
 * @Date: 2020-09-23 21:36:48
 * @LastEditTime: 2020-09-23 22:02:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/gitbook/diary/内置对象Set和Map.md
-->
## Set 和 Map 数据结构
### Set
Set对象是值的集合，你可以按照插入的顺序迭代它的元素。 Set中的元素只会出现一次，即 Set 中的元素是唯一的.
``` js 
const s = new Set();
[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
for (let i of s) {
  console.log(i);
}
// 2 3 5 4
```
#### 属性
`Size`属性将会返回Set对象中元素的个数。
#### 方法
`Set.prototype.add(value)`
在Set对象尾部添加一个元素。返回该Set对象。
`Set.prototype.clear()`
移除Set对象内的所有元素。
`Set.prototype.delete(value)`
移除Set的中与这个值相等的元素，返回Set.prototype.has(value)在这个操作前会返回的值（即如果该元素存在，返回true，否则返回false）。Set.prototype.has(value)在此后会返回false。
`Set.prototype.entries()`
返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值的[value, value]数组。为了使这个方法和Map对象保持相似， 每个值的键和值相等。
`Set.prototype.forEach(callbackFn[, thisArg])`
按照插入顺序，为Set对象中的每一个值调用一次callBackFn。如果提供了thisArg参数，回调中的this会是这个参数。
`Set.prototype.has(value)`
返回一个布尔值，表示该值在Set中存在与否。
`Set.prototype.keys()`
与values()方法相同，返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值。
`Set.prototype.values()`
返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值。
