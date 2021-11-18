---
title: ArchLinux on Lenovo Air14ILL
date: 2021-11-11
tags:
 - Linux 
 - ArchLinux
 - KDE
categories:
 - 个人配置
---
:::tip
由于近期在我的联想小新Air14上重装了一次系统，并进行了一些基本的配置，简单做一个记录，便于日后不时之需
:::

# 一、重装系统
参考[ArchLinuxTutorial](https://archlinuxstudio.github.io/ArchLinuxTutorial/#/)安装教程即可，对于有安装经验的人来说应该能很快根据这个教程安装好，如有不懂可以看附带的视频教程
# 二、驱动
参考[ArchWiki](https://wiki.archlinux.org/)
## 声卡
alsa-firmware 软件包包含了某些声卡（如创新SB0400 Audigy2）可能需要的固件。
一些较新型号的笔记本电脑（2019年底/2020）需要sof-firmware 和 alsa-ucm-conf，它们使用 Sound Open Firmware 提供的固件实现驱动程序。
[sof-firmware](https://archlinux.org/packages/?name=sof-firmware)
# 三、桌面环境
## 1. KDE
采用国内设计师的Layan主题，配置简单且耐看，稳定性好。
- 全局主题：`Layan`
- 应用程序风格：`Breeze微风`
- Plasma视觉风格：`Layan`
- 窗口装饰元素：`Layan-solid`
- 颜色：`Layan`
- 图标：`Tela`
- 光标：`Sunset Cursors`
- 组件: `nowplaying`,`medaibar`,`panon`,`netspeed widegts`,`simple monitor`
## 2. 软件包
`google-chrome`
`kdeconnect`
`bleachbit`
`unar`
`filelight`
`onlyoffice`
`typora`
`gnome-keyring`
