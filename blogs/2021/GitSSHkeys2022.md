---
title: Git SSH Keys配置指南(更新)
date: 2022-7-8
tags:
 - Git
 - SSH
 - Linux
categories:
 - 个人配置
---
## 前言

最近Github似乎更新了ssh key的相关服务，我突然无法正常地```clone``` 与 ```push```了，似乎和我使用了代理有关，我重新配置了ssh_key,顺便更新一下教程。
 
## 简易配置过程  
> 本文适用的环境为Linux,Windows与MacOS移步官方文档
> 官方教程见[Github SSH key](https://docs.github.com/cn/authentication/connecting-to-github-with-ssh/about-ssh)
### 配置步骤

1. email与username配置

   ```shell
   git config --global user.name "yourname"
   git config --global user.email "youremail@163.com"
   ```

2. 生成SSH密钥

   ```shell
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

   输入保存位置与密码(可选)

3. 添加密钥到ssh代理
  
  ```shell
  # 在后台启动ssh代理
  eval "$(ssh-agent -s)"
  # 添加私钥到ssh代理
  ssh-add ~/.ssh/id_ed25519
  ```
  记得切换成bash或者zsh环境，比如我在fish环境下执行这条命令就得到了一条报错

4. 在Github网站上配置公钥

   进入Settings/SSH and GPG keys，点击New SSH Key，cat查看公钥(id_ed25519.pub)并复制上去

5. 验证是否能够连接到Github

   ```shell
   ssh -T git@github.com
   ```


### 注意

在代理环境下，可能会得到下面这样的报错，我就是因为这个问题导致的不能正常clone与push
![](./image/GitSSHkeys.md/2022-07-07-15-37-52.png)
> 官方文档：[在 HTTPS 端口使用 SSH](https://docs.github.com/cn/authentication/troubleshooting-ssh/using-ssh-over-the-https-port)
