---
title: Git Status中文显示错误
date: 2021-7-22
tags:
 - Git
 - Solutions
categories:
 - 个人配置
---
## 问题描述

在默认设置下，使用`git status`对中文文件名或文件夹输出，中文名不能正确显示，而是显示为八进制的字符编码。

## 解决方法

在终端输入

```shell
git config --global core.quotepath false 
```

