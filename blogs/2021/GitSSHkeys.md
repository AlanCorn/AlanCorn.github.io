---
title: Git SSH Keys简易配置
date: 2021-7-22
tags:
 - Git
 - SSH
categories:
 - 个人配置
---
## 简易配置过程

### 配置步骤

1. email与username配置

   ```shell
   git config --global user.name "yourname"
   git config --global user.email "youremail@163.com"
   ```

2. 生成SSH密钥

   ```shell
   ssh-keygen -C '1561206831@qq.com' -t rsa
   ```

   输入保存位置与密码

3. 在Github网站上配置公钥

   进入Settings/SSH and GPG keys，点击New SSH Key，cat查看公钥(id_rsa.pub)并复制上去

4. 验证是否能够连接到Github

   ```shell
   ssh -T git@github.com
   ```


### 注意

1. 若要使用SSH鉴权，使用SSH链接远程仓库