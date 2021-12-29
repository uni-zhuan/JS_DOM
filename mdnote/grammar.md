## 一些规范
- 语句结束带 ;
- 允许未经声明直接赋值
- 属性和方法都用 . 访问
- 字符串拼接可用 +
- 定义函数
```JavaScript
function name(arguments)
{
    statements;
}
```
- 匿名函数 `function(){...}`
## 数据类型
- 数组
  - 其中可有不同数据类型
  - 关联数组,下标可以是字符串
```JavaScript
var beatles=Array("john","paul","george",'ringo"');
var beatles=["john","paul","george",'ringo'];
```
- 对象
  - 使用 . 获取属性
  - `new`关键字创建新对象
  - 用户定义对象
  - 内建对象
  - 宿主对象

```JavaScript
var lennon={name:'John,year:1940};
var beatles={};
beatles.vocalist=lennon;
```

## 常用函数
- alert() 




