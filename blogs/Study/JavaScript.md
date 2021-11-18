---
title: JavaScript学习笔记
date: 2021-7-23
tags:
 - Web
 - 前端
 - JavaScript
categories:
 - 学习笔记
---

## 脚本调用策略小结：

* 如果脚本无需等待页面解析，且无依赖独立运行，那么应使用 async。
* 如果脚本需要等待页面解析，且依赖于其它脚本，调用这些脚本时应使用 defer，将关联的脚本按所需顺序置于 HTML 中。

## 运算符

大体同Java/C++一致
![js算数运算符](./JavaScript.assets/2021-07-16-09-23-58.png)
![js比较运算符](./JavaScript.assets/2021-07-16-09-30-23.png)

Note: 您可能会看到有些人在他们的代码中使用\==和!=来判断相等和不相等，这些都是JavaScript中的有效运算符，但它们与===/!==不同，前者测试值是否相同， 但是数据类型可能不同，而后者的严格版本测试值和数据类型是否相同。 严格的版本往往导致更少的错误，所以我们建议您使用这些严格的版本。

## 数字与字符串直接互相转换

```javascript
let num = Number(str);
let str = num.toString();
```

### 常用的字符串方法

1. indexOf()
   查找子串的位置，若不存在则返回-1
2. slice()
   提取某一段字符串
   str.slice(1,3);
   str. slice(2);  //2到结尾
3. toUpperCase() toLowerCase()
   转换大小写
4. replace(str1,str2);
   用str2,替换str1;

## 声明一个对象

```js
var person = {
   name: ['Bob', 'Smith'],
   age: 32,
   gender: 'male',
   interests: ['music', 'skiing'],
   bio: function() {
      alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
   },
   greeting: function() {
      alert('Hi! I\'m ' + this.name[0] + '.');
   }
};
```

## 构造函数实例化出对象

```js
   // JavaScript没有创建Class的声明
   // 使用构建函数去定义一个"类"
   // 1.return写法
   function createNewPerson(name) {
      var obj = {};
      obj.name = name;
      obj.greeting = function() {
         alert('Hi! I\'m ' + this.name + '.');
      }
      return obj;
   }
   // 实例化
   var salva = createNewPerson('salva');
   salva.name;
   salva.greeting();
   // 2.this写法
   function Person(name) {
      this.name = name;
      this.greeting = function() {
         alert('Hi! I\'m ' + this.name + '.');
      };
   }
   // 实例化
   var person1 = new Person('Bob');
   var person2 = new Person('Sarah');
```

### Object()构造函数

创建一个空对象，之后可任意对其添加属性和方法

```js
var person1 = new Object();
```

```js
person1.name = 'Chris';
person1['age'] = 38;
person1.greeting = function() {
  alert('Hi! I\'m ' + this.name + '.');
}
var person1 = new Object({
  name : 'Chris',
  age : 38,
  greeting : function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
});
```

### Object.create()方法

JavaScript有个内嵌的方法create(), 它允许您基于现有对象创建新的对象。

```js
var person2 = Object.create(person1);
```

您可以看到，person2是基于person1创建的， 它们具有相同的属性和方法。这非常有用， 因为它允许您创建新的对象而无需定义构造函数。缺点是比起构造函数，浏览器在更晚的时候才支持create()方法（IE9,  IE8 或甚至以前相比）， 加上一些人认为构造函数让您的代码看上去更整洁 —— 您可以在一个地方创建您的构造函数， 然后根据需要创建实例， 这让您能很清楚地知道它们来自哪里。

但是, 如果您不太担心对旧浏览器的支持， 并且您只需要一个对象的一些副本， 那么创建一个构造函数可能会让您的代码显得过度繁杂。这取决于您的个人爱好。有些人发现create() 更容易理解和使用。

稍后我们将更详细地探讨create() 的效果。

## 原型prototype  

相当于一块公共的区域，所有实例共用一个原型（可以节省空间、也不会污染全局命名空间），每个函数都有原型

