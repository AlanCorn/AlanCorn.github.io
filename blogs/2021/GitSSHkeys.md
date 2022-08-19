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

  ```

4. 在Github网站上配置公钥

   进入Settings/SSH and GPG keys，点击New SSH Key，cat查看公钥(id_rsa.pub)并复制上去

5. 验证是否能够连接到Github

   ```shell
   ssh -T git@github.com
   ```


### 注意

1. 在代理环境下，可能会得到下面这样的报错
> 官方文档：[在 HTTPS 端口使用 SSH](https://docs.github.com/cn/authentication/troubleshooting-ssh/using-ssh-over-the-https-port)
![](./image/GitSSHkeys.md/2022-07-07-15-37-52.png)
