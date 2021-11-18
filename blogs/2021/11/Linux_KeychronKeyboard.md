---
title: Linux/Keychron键盘 功能键F1-F12映射修复
date: 2021-7-04
tags:
 - Linux 
 - Translate
categories:
 - 个人配置
---
:::tip
本文翻译自：[KEYCHRON LINUX FUNCTION KEYS](https://mikeshade.com/posts/keychron-linux-function-keys/)
:::
# Keychron K2功能键修复

**在Linux上，Keychon K2不会将任何F1-F12功能键映射为实际的F键，而是默认将它们视为多媒体键。 Fn+F1-12的组合也不会起作用**

 1. 将侧边模式转换键拨至Windows,（如果你习惯使用Mac模式那么应该不会遇到这个问题）
 2. 长按Fn + X + L将F1-F12优先映射到功能键而不是媒体键
 3. 在终端输入
 

```bash
echo 0 | sudo tee /sys/module/hid_apple/parameters/fnmode
```

**此时Keychron键盘应该已经可以正常使用了**
接下来可以将这项设置写入配置文件，否则每次重启你都要重新执行一遍

 

```bash
echo "options hid_apple fnmode=0" | sudo tee -a /etc/modprobe.d/hid_apple.conf
```

重启或者执行下面这条命令

```bash
sudo update-initramfs -u  	//Ubuntu
mkinitcpio -P   			//ArchLinux
```


