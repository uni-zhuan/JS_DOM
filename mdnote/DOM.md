## 节点 
- 元素节点
- 文本节点
- 属性节点
  - 包含在元素节点中

## CSS
- 样式声明
```css
p{
    color:red;
    font-size:1em;
}
```
- 继承
- class属性进行应用
- id属性加标识符
- 获取元素节点
  - `document.getElementByld(id)` 方法：返回给定id属性的元素节点的对象
  - `document.getElementsByTagName(tag)` 方法：返回一个对象数组，每个对象对应一个列表项元素
  - `document.getElementsByClassName(class)` 方法：返回一个对象数组，每个对象对应相应类名的所有元素
- 获取和设置属性
  - `object.getAttribute(attribute)` 获取元素属性
  - `object.setAttribute(attribute)` 修改元素属性节点的值
- 事件处理函数
  - `onclick()`点击链接,使用`return false`进行阻止默认行为的调用 
  - `window.onload`在页面加载时执行
  - `window.open(url,name,features)`创建新的浏览器窗口,地址-名字-属性

- 关键字this: 含义为"这个对象"
- childNodes属性
  - 获取任何一个元素的所有子元素的数组
  - nodeType属性
    - 1: 元素节点
    - 2: 属性节点
    - 3: 文本节点
    - 让函数对特定类型额度节点进行处理
  - `childNodes[0]`可写作`firstChild`
  - `childNodes[childNodes.length-1]`可写作`lastChild`
- 对象检测
  - if语句的条件表达式求值结果，true即方法存在
  - 对象检测要删掉括号，不然则测试方法结果
  ```JavaScript
  if(document.getElementById){
    statements.using getElementById
  }
  or
  if(!document.getElementById){
    return false;
  }
  ```
- 压缩脚本
  - 工作副本+精简副本(min)
  - 