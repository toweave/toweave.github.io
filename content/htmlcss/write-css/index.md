---
title: CSS书写顺序规范
date: "2019-04-02T07:40:55.339Z"
tags: ["HOT", "CSS"]
description: 为何CSS需要CSS书写顺序、规范？
---

**为何CSS需要CSS书写顺序、规范？**

* 规范不是一种约束，而是一种约定，强调团队的一致性；
* 加强团队的合作性，提高协作效率；
* 形成一种团队文化，积累知识；
* 规范最终是为项目服务的，我们所做的一切都是为了优化项目和流程提高我们的工作效率；
* 如果没有规范，写出来的样式，大家都互相瞧不上眼，刚觉太乱，就觉得需要重构，浪费时间。自己添加代码，又有些冗余代码，最终代码越来越多，页面越来越慢。
* 避免重复渲染页面，加载没必要的样式，提高代码运行效率。

**CSS 命名规范**

* 注释

```css{numberLines: true}
/*
@name:  文件的名称
@description: 简要的描述这个css 文件功能
@require: 依赖文件，没有就不用写
@author: 作者  最好附带联系方式(邮箱)
*/
```

* 文件编码级

 编码必须使用utf-8（无BOM）

* CSS样式表文件命名

 主要的   master.css  
模块   module.css    
基本共用   base.css  
布局、版面   layout.css  
主题   themes.css  
专栏   columns.css  
文字   font.css  
表单   forms.css  
补丁   mend.css  
打印   print.css

* 连字符CSS选择器命名规范

 长名称或词组可以使用中横线来为选择器命名。

 不建议使用`_`下划线来命名CSS选择器，首先输入的时候少按一个shift键。其次，浏览器兼容问题 （比如使用`_tips`的选择器命名，在IE6是无效的）。最后，能良好区分JavaScript变量命名（JS变量命名是用`_`）.

* 不要随意使用id

 id在JS是唯一的，不能多次使用，而使用class类选择器却可以重复使用，另外id的优先级优先与class，所以id应该按需使用，而不能滥用。

* 为选择器添加状态前缀

 有时候可以给选择器添加一个表示状态的前缀，让语义更明了，比如添加了`.is-`前缀。`.is-login`、`.is-footer`.

* 常用的CSS命名规则

头：header  
内容：content/container  
尾：footer  
导航：nav  
侧栏：sidebar  
栏目：column  
页面外围控制整体佈局宽度：wrapper  
左右中：left right center  
登录条：loginbar  
标志：logo  
广告：banner  
页面主体：main  
热点：hot  
新闻：news  
下载：download  
子导航：subnav  
菜单：menu  
子菜单：submenu  
搜索：search  
友情链接：friendlink  
页脚：footer  
版权：copyright  
滚动：scroll  
内容：content  
标签：tags  
文章列表：list  
提示信息：msg  
小技巧：tips  
栏目标题：title  
加入：joinus  
指南：guide  
服务：service  
注册：regsiter  
状态：status  
投票：vote  
合作伙伴：partner  

 注释的写法:  
 ```css{numberLines: true}
/* Header */  
内容区  
/* End Header */  
```

**CSS书写顺序**  

* 1.位置属性(position, top, right, z-index, display, float等)  
* 2.大小(width, height, padding, margin)  
* 3.文字系列(font, line-height, letter-spacing, color- text-align等)  
* 4.背景(background, border等)  
* 5.其他(animation, transition等)  

**CSS书写规范**

* 使用CSS缩写属性

 CSS有些属性是可以缩写的，比如padding,margin,font等等，这样精简代码同时又能提高用户的阅读体验。

```css{numberLines: true}
{
    font: 12px/1.5 Tahoma,Helvetica,Arial,'宋体',sans-serif;
    margin: 上 右 下 左;
    border: 1px solid #ccc;
    box-shadow:  投影方式 X轴偏移量 Y轴偏移量 阴影模糊半径 阴影扩展半径 阴影颜色;
    background: #ff0000 url(/i/eg_bg_03.gif) no-repeat fixed center;
    animation: name duration timing-function delay iteration-count direction;
}
```

* 去掉小数点前的”0″，简写命名，但前提是要让人看懂你的命名才能简写哦！
* 16进制颜色代码缩写，提高用户体验为主。
