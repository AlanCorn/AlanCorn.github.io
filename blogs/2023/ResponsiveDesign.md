---
title: 前端响应式设计方法清单，以及常见问题记录
date: 2023-7-19
tags:
 - 前端
 - Vue
 - CSS
 - 响应式设计
categories:
 - 学习笔记
 - 问题记录
---

## 一、响应式页面布局
响应式布局即页面能检测用户的屏幕尺寸，响应式地改变页面元素的布局，字体大小等样式。通过响应式页面布局，用户能获得最佳的浏览体验。
1. 媒体查询 
> 参考：https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/media   

媒体查询方式适用于大部分简单地改变页面布局以及样式的情况，在性能上的表现也很优异，因此在做响应式页面布局的时候，应首先考虑使用媒体查询。  
媒体查询通常和```grid(网格式页面布局)```或```flex(弹性盒布局)```组合使用

2. window.matchMedia()
> 参考：https://developer.mozilla.org/zh-CN/docs/Web/API/Window/matchMedia  

在一些情况，有时候单独使用媒体查询这种简单的方式难以满足需求，一些组件或内容在移动端和PC端呈现的差异过大，需要变动原有HTML结构。  
我们可以使用Window对象的matchMedia方法，判断屏幕是否匹配某条媒体查询规则，基于此，再通过```v-if```与```v-else```来实现切换组件的显示。

## 二、响应式图片或视频  
> 参考：
> 1. https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Responsive_Design#%E5%93%8D%E5%BA%94%E5%BC%8F%E5%9B%BE%E5%83%8F 
> 2. https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/
> 3. https://cloudfour.com/thinks/responsive-images-101-part-8-css-images/

### 1. 使用picture标签

```html
<template>
    <picture>
        <source media="(max-width: 750px)" :srcset="mobileImg" />
        <!-- 懒加载 -->
        <!-- <img :data-src="pcImg" class="lazy" alt="" />   -->
        <img src="pcImg" alt="" />  
    </picture>
</template>

<script lang="ts" setup>
    import pcImg from '@assets/imgs/pcImg.png';
    import mobileImg from '@assets/imgs/mobileImg.png';
<script />
```

### 2. 使用v-bind和@media媒体查询设置背景图片
> 参考：
> 1. https://cloudfour.com/thinks/responsive-images-101-part-8-css-images/

在```Responsive Images 101, Part 8: CSS Images```一文中提到，可以使用 ```image-set()``` 来相应式地设置background-image，这与HTML的```srcset```类似，区别是不能够使用官渡描述符。那么在灵活性上有所欠缺。
我们可以利用Vue提供的v-bind方法绑定CSS变量，再通过@media的方式去修改背景图片

```html
<template>
    <div class="container">
    </div>
</template>

<script lang="ts" setup>
    import pcImg from '@assets/imgs/pcImg.png';
    import mobileImg from '@assets/imgs/mobileImg.png';

    // 带上url
    const bgImage = computed(() => `url(${pcImg})`);
    const bgImageMobile = computed(() => `url(${mobileImg})`);
</script>

<style lang="less" scoped>
    .container {
        width:100vw;
        height: 100vh;

        background-size: cover;
        background-repeat: no-repeat;
        background-image: v-bind(bgImage);

        @media (max-width: @screen-mobile-width) {
            background-position: 65% 50%;
            background-image: v-bind(bgImageMobile);
        }
    }
</style>

```

### 3. 视频```<video />```
视频的响应式可以使用图片中的方法2