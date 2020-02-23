<!--
 * @Author: your name
 * @Date: 2020-02-23 09:26:01
 * @LastEditTime: 2020-02-23 09:58:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/gitbook/diary/map、filter、reduce.md
 -->
### map、filter、reduce ----2020.2.23
说说 map、filter、reduce三者的使用以及区别是什么？
#### map
map 的作用是 map 中传入一个函数，该函数会遍历该数组，对每一个元素做变换之后返回新数组。
* element : 对应数组的每个元素。
* index: 数组元素的下标。
* arr : 原数组。

``` javascript 
    let arr = [2,3,4]
    arr = arr.map((element,index,arr)=>{
        return arr[index]+1;
    }) // [3,4,5]
```

#### filter
filter 的作用是也是生成一个数组，传入的函数返回值是布尔类型，返回值为 true 的元素放入新数组，通常来筛选删除不需要的元素。
* element : 对应数组的每个元素。
* index : 数组元素的下标。
* arr : 原数组。

``` javascript 
let array = [1, 2, 4, 6]
let array1 = array.filter( (element,index,arr)=> {
    return element >= 2 && element != 6;
})// [2,4]
```

#### reduce
reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
`array.reduce(function(total, element, index, arr), initialValue)`
* total :必需。初始值, 或者计算结束后的返回值。
* element:	必需。当前元素
* index:	可选。当前元素的索引
* arr:	可选。当前元素所属的数组对象。
* initialValue:	可选。传递给函数的初始值

``` javascript 
let arr = [1,2,3]
let sum = arr.reduce((acc,element)=>{
    return acc + element;
},0) // 6
```