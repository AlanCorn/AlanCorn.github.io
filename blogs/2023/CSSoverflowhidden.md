---
title: 使用overflow-y隐藏PC端滚动条时的注意事项
date: 2023-7-13
tags:
 - 前端
 - CSS
 - 响应式设计
categories:
 - 问题记录
---

## 问题描述
一些情况下，我们可能想隐藏浏览器丑丑的滚动条，更何况它还会使得100vw的宽度超出，我们简单地可以通过下面的CSS代码来隐藏滚动条。
```css
body {
    // 禁用滚动条
    overflow-y: hidden;
    overflow-x: hidden;
}
```  
这时候，问题出现了，我们打开浏览器的调试工具，使用「设备工具栏」进行移动端的调试，很容易就能发现我们不能通过触屏的方式来滚动页面了

## 解决方法
使用媒体查询的方式添加规则：
```css
body {
    // 禁用滚动条
    overflow-y: hidden;
    overflow-x: hidden;
    @media (max-width: 750px) {
    overflow-y: auto;
  }
}
```  