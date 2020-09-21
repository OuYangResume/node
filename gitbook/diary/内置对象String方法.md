## 内置对象String

## String
### 属性
`length`
### 方法methods
#### str.charAt(index)
charAt() 方法从一个字符串中返回指定的字符。
index 一个介于0 和字符串长度减1之间的整数。default：0
如果指定的 index 值超出了该范围，则返回一个空字符串。
``` js
let name = "oouyang"
console.log(name.charAt(2)) // "u"
```
#### str.charCodeAt(index)
返回给定索引处的 UTF-16 代码。
指定 index 处字符的 UTF-16 代码单元值的一个数字；如果 index 超出范围，charCodeAt() 返回 NaN。
``` js
let name = "oouyang"
console.log(name.charCodeAt(4)) // "97"
```
#### str.concat(str2, [, ...strN])
concat 方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。 concat 方法并不影响原字符串。
如果参数不是字符串类型，它们在连接之前将会被转换成字符串。
``` js 
let hello = 'Hello, '
console.log(hello.concat('oou', 'yang')) //Hello, oouyang
let list = ['Hello', ' ', 'oou', 'yang']
console.log("".concat(list)) //Hello, oouyang
```
#### 	str.endsWith(searchString[, length])
endsWith()方法用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 true 或 false。
``` js
let name = "oouyang"
console.log(name.endsWith('yan')) // false
console.log(name.endsWith('yan',6)) // true
```
#### str.startsWith(searchString[, position])
startsWith() 方法用来判断当前字符串是否以另外一个给定的子字符串开头，并根据判断结果返回 true 或 false。
`searchString`要搜索的子字符串。
`position `在 str 中搜索 searchString 的开始位置，默认值为 0。
``` js
let name = "oouyang"
console.log(name.startsWith('ou')) // false
console.log(name.startsWith('ou',1)) // true
```

#### str.includes(searchString[,position])
includes() 方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false。
includes() 方法是区分大小写的。position从当前字符串的哪个索引位置开始搜寻子字符串.
``` js
let name = "oouyang"
console.log(name.includes('Yang')) // "false"
```
#### str.indexOf(searchValue [, fromIndex])
indexOf() 方法返回调用它的 String 对象中第一次出现的指定值的索引，从 fromIndex 处进行搜索。如果未找到该值，则返回 -1。
``` js
let name = "oouyang"
console.log(name.indexOf('ou')) // 1
```
#### str.lastIndexOf(searchValue[, fromIndex])
 lastIndexOf() 方法返回调用String 对象的指定值最后一次出现的索引，在一个字符串中的指定位置 fromIndex处从后向前搜索。如果没找到这个特定值则返回-1 。
 ``` js
let name = "oouyang"
console.log(name.lastIndexOf('ou')) // 1
```
#### str.padEnd(targetLength [, padString])
padEnd()  方法会用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充。

`targetLength `当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身。
`padString `填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断。
 ``` js
let name = "oouyang"
console.log(name.padEnd(10,'ou')) // oouyangouo
```
#### str.padStart(targetLength [, padString])
padStart() 方法用另一个字符串填充当前字符串(如果需要的话，会重复多次)，以便产生的字符串达到给定的长度。从当前字符串的左侧开始填充。

`targetLength `当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身。
`padString ` 填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断.
 ``` js
let name = "oouyang"
console.log(name.padStart(10,'ou')) // ouooouyang
```

#### str.replace(regexp|substr, newSubStr|function)
replace() 方法返回一个由替换值（replacement）替换部分或所有的模式（pattern）匹配项后的新字符串。模式可以是一个字符串或者一个正则表达式，替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。如果pattern是字符串，则仅替换第一个匹配项。
 ``` js
let name = "oouyangou"
let newStr =name.replace('ou','ww')
console.log(newStr) // owwyangou
```
#### str.replaceAll(regexp|substr, newSubstr|function)
replaceAll() 方法返回一个新字符串，新字符串所有满足 pattern 的部分都已被replacement 替换。pattern可以是一个字符串或一个 RegExp， replacement可以是一个字符串或一个在每次匹配被调用的函数。
 ``` js
let name = "oouyangou"
let newStr =name.replaceAll('ou','W')
console.log(newStr) // oWyangW
```

#### str.search(regexp)
如果匹配成功，则 search() 返回正则表达式在字符串中首次匹配项的索引;否则，返回 -1。

#### 	str.slice(beginIndex[, endIndex])
**slice()** 方法提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串。

`beginIndex `从该索引（以 0 为基数）处开始提取原字符串中的字符。如果值为负数，会被当做 strLength + beginIndex 看待，这里的strLength 是字符串的长度（例如， 如果 beginIndex 是 -3 则看作是：strLength - 3）
`endIndex `可选。在该索引（以 0 为基数）处结束提取字符串。如果省略该参数，slice() 会一直提取到字符串末尾。如果该参数为负数，则被看作是 strLength + endIndex，这里的 strLength 就是字符串的长度(例如，如果 endIndex 是 -3，则是, strLength - 3)。

``` js
let name = "hello,oouyang"
console.log(name.slice(1,5)) // ello
console.log(name.slice(-3)) //ang
```
#### str.substring(indexStart[, indexEnd])
**substring()** 方法返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。substring 提取从 indexStart 到 indexEnd（不包括）之间的字符
`indexStart `需要截取的第一个字符的索引，该索引位置的字符作为返回的字符串的首字母。
`indexEnd `一个 0 到字符串长度之间的整数，以该数字为索引的字符不包含在截取的字符串内。
``` js
let name = "hello,oouyang"
console.log(name.substring(1,5)) // ello
console.log(name.substring(name.length-3)) //ang
```

#### str.split([separator[, limit]])
**split()** 方法使用指定的分隔符字符串将一个String对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。
`separator `指定表示每个拆分应发生的点的字符串。separator 可以是一个字符串或正则表达式。 如果纯文本分隔符包含多个字符，则必须找到整个字符串来表示分割点。如果在str中省略或不出现分隔符，则返回的数组包含一个由整个字符串组成的元素。如果分隔符为空字符串，则将str原字符串中每个字符的数组形式返回。
`limit `一个整数，限定返回的分割片段数量。当提供此参数时，split 方法会在指定分隔符的每次出现时分割该字符串，但在限制条目已放入数组时停止。如果在达到指定限制之前达到字符串的末尾，它可能仍然包含少于限制的条目。新数组中不返回剩下的文本。
``` js
let name = "hello,oouyang"
console.log(name.split()) //["hello,oouyang"]
console.log(name.split("")) //["h", "e", "l", "l", "o", ",", "o", "o", "u", "y", "a", "n", "g"]
console.log(name.split("",3)) // ["h", "e", "l"]
console.log(name.split(",",3)) // ["hello", "oouyang"]
```
#### str.trim()
一个代表调用字符串两端去掉空白的新字符串。
``` js
let name = "	oou yang  "
console.log(name.trim()) // "oou yang"	
```

#### str.toLowerCase()
toLowerCase() 会将调用该方法的字符串值转为小写形式，并返回。
``` js
let name = "oOuYang"
console.log(name.toLowerCase()) // "oouyang"
```
#### str.toUpperCase()
toUpperCase() 方法将调用该方法的字符串转为大写形式并返回（如果调用该方法的值不是字符串类型会被强制转换）。
``` js
let name = "oOuYang123"
console.log(name.toUpperCase()) // "OOUYANG123"
```
