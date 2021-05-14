---
title: 对前端工程师的误解 
date: "2019-04-02T09:51:16.799Z"
tags: ["HOT", "精选"]
description: 隔行如隔山，经常会有一些不太了解前端工作者对前端开发的误解。
---

隔行如隔山，经常会有一些不太了解前端工作者对前端开发的误解。
已经过时的模式描述这个误解：‍  

* 大多数人心中的前端工程师是：   
1、把Photoshop文件、图片或者线框做成一个页面;  
2、偶尔设计Photoshop文件、图片或者线框;  
3、用JS实现动画、过渡效果;  
4、用HTML和CSS编程，实现网页的内容和形式。 

* 事实上，前端工程师在做的是：  
1、在设计师和工程师之间创建可视化的语言;   
2、根据设计稿定义一组代表内容、品牌和功能的组件;  
3、为Web应用程序的框架、需求、可视化的语言和规格设定基准;  
4、根据设备、浏览器、屏幕、动画来划分web应用的工作划分;  
5、用QA基准来保证指南来确保品牌忠诚度、代码质量、产品标准;  
6、调节Web应用程序的样式，包括间距、字体、标题、图标、布局等等;  
7、根据不同分辨率、横屏竖屏等，调节Web应用程序的样式;  
8、标记 Web 应用程序，使之语义化，SEO 友好;  
9、通过API获取内容要考虑友好性、电池消耗性、设备和客户端的特性;  
10、开发客户端要考虑动画的流畅、延迟加载、交互、应用工作流程，大多数时间用来考虑渐进增强和向后兼容的标准;  
11、保证后台连接安全，采取跨地资源共享( CORS )的程序考虑，防止跨站点脚本( XSS)和跨站点请求伪造( CSRF ) ;  
12、最重要的是，尽管要符合以上标准，但是无论现在还是将来永远是「用户第一」。  

为了实现上述目标，前端工程师采用了多种工具，从可视化工具(Photoshop/Adobe/Macaw/Sketch)，到编程工具(IDE’s，命令行，源代码版本控制， Bash脚本，建设任务)。有时，我们甚至要照顾市场(Newsletters，Campaigns，分析，SEO，社会媒体) 、 UX(动画、过渡、反馈、接口、可视化语言)，到内容改进(断点、避免孤立词汇、可读性、颜色) 。

* 糟糕的前端工程师是这样做事：  
1、滥用JS库，因为他们实际上并不了JS的内部(e.g. 一切都用jQuery);  
2、滥用JS插件，抄别人的代码哪怕自己根本读不懂(e.g.jQuery.doParallaxPls.js);  
3、给Web应用程序添加CSS框架，却只用到CSS/JS的5%，没有看到任何的需求、设计或者比较和评价;  
4、认为只要添加了CSS框架，网站就可以「有求必应」;  
5、一边在说着「响应式web设计」，却对服务器端技术一无所知;  
6、用CSS编程时不管预处理器、命名规范等，却用不合适的selector/ids/magic numbers等;  
7、忽视表现、内存泄露(并不理解内存泄露的真正含义)，不会检测代码;  
8、不会用指标衡量一个产品，或者这种指标旨在自己的电脑、浏览器、设备有效;  
9、忽视软件技术。  
 
虽然CS背景并不是成为一个优秀前端工程师的必备条件，但是计算机和软件的基础对你用JS或浏览器编程都非常重要。优秀的前端工程师知道，web可能是最有影响力的平台和环境之一，所以在那里执行的程序必须被小心对待，甚至比在任何一台可视化机器上的任何一种语言更小心。一位优秀的前端工程师不仅要考虑web技术和语言，并且还要了解所有不同的组件、系统和概念。

* 以下是优秀的前端工程师在即时面对普通的任务也会做的事情：(这才是市场急需的前端)  
1、DNS解析、使用CDN和关于multiple Hostnames as part of resources request.  
2、HTTP Headers (Expires, Cache-Control, If-Modified-Since)  
3、Steve Souders的所有规则(High Performance Websites)  
4、如何解决PageSpeed, YSlow, Chrome Dev Tools Audit, Chrome Dev Tools Timeline显示的所有问题;  
5、何时把任务传到服务器和客户端;  
6、缓存，预取和负荷技术的使用;  
7、Native JS，知道何时从头开始做，何时查找别人的代码，同时可以评估这样做的优缺点;  
8、modern MVC Javascript libraries (e.g.AngularJS, EmberJS, ReactJS),graphic libraries (e.g. D3, SnapSVG),
DOM manipulation libraries (e.g. jQuery,Zepto), lazy loading or package management libraries (e.g. RequireJS, CommonJS),task managers (e.g. Grunt, Gulp), package managers (e.g. Bower, Componentjs) and testing (e.g. Protractor, Selenium)的相关知识和用法;  
9、CSS标准、modern conventions、 strategies (e.g. BEM, SMACSS, OOCSS)的知识和用法;  
10、JS的电脑知识(内存管理，单线程的性质，垃圾收集算法，超时，范围，提升，模式)  