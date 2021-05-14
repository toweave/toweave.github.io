---
title: 移动端 1px 边框
date: "2019-04-01T07:10:26.932Z"
tags: ["HOT", "HTML"]
description: 布局方面，css有那么几个比较热衷的问题。其中，移动端1px边框问题的讨论不亚于垂直居中。那么移动端1px边框问题是如何产生的呢？由于现在的手机几乎都是retina屏，css设置的1px会被渲染成2px的物理像素（针对像素比等于2的屏幕），因此看起来会比较粗。既然知道了问题的产生原因，那么我们就开始解决。网上有很多种方案，但实际上我们用的时候只能选一种用，所以那么“不靠谱”的就不详细叙述了...（以下方案推荐指数逐渐提高）
---

布局方面，css有那么几个比较热衷的问题。其中，移动端1px边框问题的讨论不亚于垂直居中。
那么移动端1px边框问题是如何产生的呢？由于现在的手机几乎都是retina屏，css设置的1px会被渲染成2px的物理像素（针对像素比等于2的屏幕），因此看起来会比较粗。
既然知道了问题的产生原因，那么我们就开始解决。网上有很多种方案，但实际上我们用的时候只能选一种用，所以那么“不靠谱”的就不详细叙述了...（以下方案推荐指数逐渐提高）

##### 1. 直接设置0.5px  
ios8+可以识别浮点类型的单位，因此可以渲染这个0.5px。然而，绝大部分的android机是不支持浮点类型单位的。所以这种方案pass...

##### 2. 利用背景图  
不管是border-image，还是background-image，图片的弊端还是很明显的：想改变颜色就必须要换图片，而且利用图片也比较麻烦。所以不推荐这种方案...

##### 3. viewport + rem 实现  
同时通过设置对应 viewport 的 rem 基准值，这种方式就可以像以前一样轻松愉快的写 1px 了。
在 devicePixelRatio = 2 时，输出 viewport：  
```html{numberLines: true}
<meta name="viewport" 
    content="initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no" />
```
在devicePixelRatio = 3 时，输出viewport：
```html{numberLines: true}
<meta name="viewport" 
    content="initial-scale=0.3333333333333333, maximum-scale=0.3333333333333333, 
    minimum-scale=0.3333333333333333, user-scalable=no">
```
这种兼容方案相对比较完美，适合新的项目，老的项目修改成本过大。
对于这种方案，可以看看[《使用Flexible实现手淘H5页面的终端适配》](http://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html)。

##### 4. 背景渐变实现
与background-image方案类似，只是将图片替换为css3渐变。设置1px的渐变背景，50%有颜色，50%透明。很多UI都是采用这种方法，比如：weui、mint-ui...
单边：

```css{numberLines: true}
.background-gradient-1px {
    background-image: linear-gradient(180deg, #f8f8f8, #f8f8f8 50%, transparent 50%);
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: bottom left;
    background-origin: content-box;
}
```
四边：（多背景渐变）
```css{numberLines: true}
.background-gradient-1px {
    background:
        linear-gradient(#000, #000 100%, transparent 100%) left / 1px 100% no-repeat,
        linear-gradient(#000, #000 100%, transparent 100%) right / 1px 100% no-repeat,
        linear-gradient(#000,#000 100%, transparent 100%) top / 100% 1px no-repeat,
        linear-gradient(#000,#000 100%, transparent 100%) bottom / 100% 1px no-repeat
}
/* 或者 */
.background-gradient-1px {
    background:
        -webkit-gradient(linear, left top, right bottom, color-stop(0, transparent), color-stop(0, #000), to(#000)) left / 1px 100% no-repeat,
        -webkit-gradient(linear, left top, right bottom, color-stop(0, transparent), color-stop(0, #000), to(#000)) right / 1px 100% no-repeat,
        -webkit-gradient(linear, left top, right bottom, color-stop(0, transparent), color-stop(0, #000), to(#000)) top / 100% 1px no-repeat,
        -webkit-gradient(linear, left top, right bottom, color-stop(0, transparent), color-stop(0, #000), to(#000)) bottom / 100% 1px no-repeat
}
```
这种方案显示是比较牛*的，不仅实现了1px的边框，还能实现多条边框。缺点就是不能实现圆角的1px边框，浏览器的兼容性也要考虑...

##### 5. 伪类 + transform 实现
个人认为伪类 + transform 是比较完美的方法。利用 :before 或者 :after 实现 border，并 transform 的 scale 缩小一半，将 border 绝对定位。
单边：
```css{numberLines: true}
.scale-1px {
    position: relative;
    border: none;
}
.scale-1px:after{
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
　  background: #000;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}

@media (-webkit-min-device-pixel-ratio:3),(min-device-aspect-ratio:3){
    .scale-1px:after {
        -webkit-transform:scaleY(0.333);
        transform:scaleY(0.333);
    }
}

```
四边：
```css{numberLines: true}
.scale-1px {
    position: relative;
    margin-bottom: 20px;
    border: none;
}
.scale-1px:after{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid #000;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 200%;
  height: 200%;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: left top;
  transform-origin: left top;
}
/* 或者： */
.scale-1px:after{
    content: '';
    position: absolute;
    border: 1px solid #000;
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
     -webkit-transform: scale(0.5);
    transform: scale(0.5);
}

```
至此，移动端1px的实现就这么多，如有更牛*的方案，欢迎补充~

[原文地址](https://www.cnblogs.com/chenwenhao/p/9350425.html)
