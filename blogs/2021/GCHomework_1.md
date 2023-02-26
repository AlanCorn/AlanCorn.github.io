---
title: 计算机导论大作业(物联网)指南
date: 2021-11-20
categories:
 - 其他
keys: 
 - 'dbd6d04a498427695f9502ff63021fc9' 
---
## **一、登陆**
自行登录TinkerCad平台
## **二、连线**
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020121221232076.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FsYW5Db3JuXzAy,size_16,color_FFFFFF,t_70#pic_center)

 1. 横向连通
 2. 纵向连通
 3. 芯片引脚，用于输出高低电平，高为亮，低为灭
 4. 这里有个GND，代表接地即电势视为0（低），连到上面那块
## **三、代码**
只写了一种样例，自认为比较能让人开窍
实际上就是C语言；看不懂的那几句什么digitalwrite和delay模仿一下就行了
```c
void setup()
{
  
  for (int i=13;i>=3;i--){
  	pinMode(i, OUTPUT);
  }
}

void loop()			
{
  for (int i=13;i>=8;i--){		//从两边亮，从中间灭
  	digitalWrite(i,HIGH);		//意思是往第i引脚写入高电平
    digitalWrite(16-i,HIGH);	
  	delay(300);					//延迟三秒，会经常用到，一点都不延迟效果就是全部同时亮
  }
  for (int i=8;i<=13;i++){		
  	digitalWrite(i,LOW);		
    digitalWrite(16-i,LOW);
  	delay(300);
  }
  delay(1000)；					//这个是为了区别开每一种，之后再直接接着往后写就行了，框架可以复制。
}
```
最终效果（本人拙劣的完成品）
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201212214508368.gif#pic_center)
## **四、作业上传**


