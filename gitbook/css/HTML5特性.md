<!--
 * @Author: your name
 * @Date: 2020-10-29 10:04:42
 * @LastEditTime: 2020-10-29 11:54:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node/gitbook/css/HTML5特性.md
-->

### detais 标签

`<details>`标签向用户提供按需查看详细信息的效果。 如果需要按需向用户显示内容，简单的做法就是使用此`<details>`标签。 默认情况下，它是收起来的，打开后，它将展开并显示被隐藏的内容。
`<summary>`标签与`<details>`一起使用，来为它指定一个可见的标题。

<details>
  <summary>summary可见标题</summary>
  隐藏的内容
</details>

### contenteditable 内容可编辑

contenteditable 是可以在元素上设置以使内容可编辑的属性
可以与 DIV，P，UL 等元素一起使用。您必须像这样指定它：`<element contenteditable="true|false">`。
注意，如果 contenteditable 未在元素上设置属性，则会从其父级继承该属性。

### map 标签

`<map>`标签可以帮助定义 image map，image map 是其中具有一个或多个可单击区域的任何图像。map 标签与`<area>`标签一起确定可点击区域。可点击区域可以是矩形，圆形或多边形区域中的任意一种。如果您未指定任何形状，它将默认整个图像。

```js
<div>
    <img src="circus.jpg" width="500" height="500" alt="Circus" usemap="#circusmap">

    <map name="circusmap">
        <area shape="rect" coords="67,114,207,254" href="elephant.htm">
        <area shape="rect" coords="222,141,318, 256" href="lion.htm">
        <area shape="rect" coords="343,111,455, 267" href="horse.htm">
        <area shape="rect" coords="35,328,143,500" href="clown.htm">
        <area shape="circle" coords="426,409,100" href="clown.htm">
    </map>
 </div>
```

### Mark 标签

使用`<mark>`标记<mark>突出</mark>显示任何文本内容。

### data-\* attribute

data-*属性用于存储页面或应用程序专用的自定义数据。可以在 JavaScript 代码中使用存储的数据来创建更多的用户体验。
data- *属性由两部分组成：

- 属性名称不得包含任何大写字母，并且前缀“ data-”后必须至少长一个字符
- 属性值可以是任何字符串

```js
<h2> Know data attribute </h2>
 <div
       class="data-attribute"
       id="data-attr"
       data-custom-attr="You are just Awesome!">
   I have a hidden secret!
  </div>

 <button onclick="reveal()">Reveal</button>
<div id ="msg"></div>

  function reveal() {
   let dataDiv = document.getElementById('data-attr');
    let value = dataDiv.dataset['customAttr'];
   document.getElementById('msg').innerHTML = `<mark>${value}</mark>`;
}
```

要在 JS 中读取这些属性的值，可以通过 getAttribute('data-custom-attr')来获取，但是标准方式是用 dataset 来获取。

### datalist 标签

`<datalist>`元素包含了一组`<option>`元素，这些元素表示其它表单控件可选值.

```js
<input list="fruits" name="fruit">
      <datalist id="fruits">
           <option value="Apple">
           <option value="Orange">
           <option value="Banana">
           <option value="Mango">
           <option value="Avacado">
      </datalist>
     <input type="submit">
```

dataList 的表现很像是一个 select 下拉列表，但它只是提示作用，并不限制用户在 input 输入框里输入什么
select 标签创建了一个菜单。菜单里的选项通 option 标签指定。一个 select 元素内部，必须包含一个 option 元素。
总的来说就是，它们都可以显示出一个下拉表单框，但是 select 标签只能在它提供的选项中选择，而 datalist 不仅可以让你选择，还可以让你自己输入其它的选项。

### meter 标签

`<progress>`元素和`<meter>`元素经常会被混淆。它们之间的区别主要有以下两点：

`<progress>`元素用于显示某个特定任务的时间进度。这个任务的时间上限是可以确定的值，如播放一段音乐的时间；或者是不可确定的值，如上传一个文件到服务器上。`<progress>`元素的最大值在元素显示时可能是不确定的。例如，完成一个表单提交所需要的进度条。

`<meter>`元素的不同之处在于，它的最小值和最大值必须是确定的。

另外一个区别是，`<progress>`元素的最小值可以是 0。而`<meter>`元素的最小值必须是一个浮点数，包括负数，可以想象一下温度计的刻度。
