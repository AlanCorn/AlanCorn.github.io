---
title: TypeScript笔记(不定期更新)
date: 2023-5-20
tags:
 - 前端
 - JavaScript
 - TypeScript
categories:
 - 学习笔记
publish: True
---

## TypeScript中的Type
TypeScript是JavaScript的超集，它再JavaScript上增加了各种类型检查，并拓展了语法，支持ES6的新特性  
### 定义一个Type类型
定义Type类型相当于为JavaScript中的各种类型取别名，根据不同情况，会产生以下几种不同的Type类型

```typescript
type Digital = number;  // 基本类型
type People = {         // 对象类型
    name : string,
    sex : "man" | "female" | "other"  // 联合类型，"或"关系
} 
type getName = (human:People) => string // 函数
type data = [number,string]             // 元组
type T = Clickable & Focusable　　 // 交叉类型 ，"和"关系
```

## 12个常用的TypeScript工具类
> reference:[bilibili](https://www.bilibili.com/video/BV1gL411Y7Mf/?spm_id_from=333.1007.top_right_bar_window_view_later.content.click)  
工具类 | 描述 | 发布版本
----|----|----
Await<Type> | 获取Promise中的结果类型 | 4.5
Partial<Type> | 将Type中的所有属性设置为**可选属性**，返回一个新的类型 | 2.1
Require<Type> | 将Type中的所有属性设置为**必选属性**，返回一个新的类型 | 2.8
ReadOnly<Type> | 将Type中的所有属性设置为**只读属性**，返回一个新的类型 | 2.1
Record<Keys, Type> | 新建一个由Keys指定的属性和Type指定的值组成的对象类型 |2.1
Pick<Type, Keys> | 从Type中**选择**一个或多个属性，并返回一个新的类型 |2.1
Omit<Type, Keys> | 从Type中**删除**一个或多个属性，并返回一个新的类型 |3.5
Exclude<UnionType, ExcludedMembers> | 从UnionType中**排除**ExcludedMembers中的所有类型，并返回一个新的类型 | 2.8
Extract<UnionType, ExtractedMembers> | 从UnionType中**提取**ExcludedMembers中的所有类型，并返回一个新的类型 | 2.8
NonNullable<Type> | 从Type中排除null和underfined类型，并返回一个新的类型 | 2.8
Parameters<Type> | 获取函数类型Type的参数类型，以元组类型返回 | 3.1
ReturnType<Type> | 获取函数类型Type的返回值类型 | 2.8


