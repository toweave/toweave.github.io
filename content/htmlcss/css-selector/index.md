---
title: CSS Selector 选择器
date: "2019-04-02T10:15:53.224Z"
tags: ["HOT", "CSS", "Selector", "精选"]
description: 了解并且熟用 CSS3 为我们提供的强大并且优雅的选择器，就可以简化我们的代码。
---

了解并且熟用 CSS3 为我们提供的强大并且优雅的选择器，就可以简化我们的代码。

#### ** 一、基本选择器 **  
* A. 通配选择器 `「*」`  
1、* { margin: 0; padding: 0 } // 选择页面中的所有元素并设置 margin 和 padding 值为 0;  
2、.demo * { background: #000 } // 选择类名为 demo 的元素下面的所有元素并设置背景为黑色;  

* B.元素选择器 `「Element」`  
1、body { background: #ccc } // 选择 body 元素   
2、ul { background: #fff } // 选择列表 ul 元素  

* C. ID 选择器 `「#id」`  
html:
```html{numberLines: true}
<div id="demo"></div>
```
css:
```css{numberLines: true}
#demo { do something }
```

* D. 类选择器 `「.class」`  
html:
```html{numberLines: true}
<ul class="demo"></ul>
```
css:
```css{numberLines: true}
.demo { do something }
ul.demo { do something }
//这样只会选择有demo类名的ul元素  
```
需要注意的是：多个页面元素可以有相同的类名，但是元素的id在页面中必须是唯一的。

* E. 群组选择器 `「selector1，…，selectorN」`  
html:
```html{numberLines: true}
<div class="section-1"></div>
<div class="section-2"></div>
<div class="section-3"></div>
```
css:
```css{numberLines: true}
.section-1,
.section-2,
.section-3 { do something }
// 给三个页面元素定义公用的样式
```

#### ** 二、层次选择器 **  
* F. 后代选择器 `「E F」`  
选择匹配E的元素内的所有匹配F的元素。  
html:
```html{numberLines: true}
    <div class="parent">  
        <div class="child"></div>  
        <div class="child">  
            <div class="c-child">  
                <div class="c-c-child"></div>  
            </div>  
        </div>  
    </div>
```
css:
```css{numberLines: true}
.parent div { do something }
// 会选择 parent 里面的所有 div，不管是子元素 .child 还是孙元素 .c-child 和 .c-c-child 
```

* G. 子选择器 `「E > F」`  
选择配配E的元素的匹配F的直系子元素。  
```html{numberLines: true}
    <div class="parent">  
        <div class="child"></div>  
        <div class="child">  
            <div class="c-child">  
                <div class="c-c-child"></div>  
            </div>  
        </div>  
    </div>
```
css:
```css{numberLines: true}
.parent > div{ do something }`
// 只会选择.parent元素的直系子元素，也就是只会选择到 .child 元素
```

* H. 相邻兄弟元素选择器 `「E + F」`  
E 和 F 是同辈元素，具有相同的父元素，并且F元素紧邻在E元素的后面，此时可以使用相邻兄弟选择器。
```html{numberLines: true}
    <div>
        <div class="demo">1</div>
        <div>2</div>
        <div>3</div>
     </div>
```
css:
```css{numberLines: true}
.demo + div { do something }
// 会选中内容为 2 的 div
```

* I. 通用兄弟选择器 `「E ~ F」`  
E 和 F 是同辈元素，具有相同的父元素，并且F元素在E元素之后，E ~ F将选中E元素后面的所有F元素。
html:
```html{numberLines: true}
    <div>
        <div class="demo">1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
     </div>
```
css:
```css{numberLines: true}
.demo ~ div { do something }
// 会选中内容为 2, 3, 4 的 div
```
  
#### ** 三、伪类选择器 **

* J. 动态伪类选择器 `「E:link,E:visited,E:active,E:hover,E:focus」`   
```css{numberLines: true}
E:link { do something } // 选择定义了超链接但链接还未被访问过的元素  
E:visited { do something } // 选择定义了超链接并且链接已经被访问过的元素  
E:active { do something } // 选择匹配的E元素，且元素被激活，常用在锚点和按钮上  
E:hover { do something } // 选择鼠标停留的匹配的E元素
E:focus { do something } // 选择匹配的E元素，且元素获得焦点
``` 

* K. 目标伪类选择器 `「E:target」`   
选择匹配E的所有元素，且匹配元素被相关URL指向。  
通俗点说，页面的 url 如果带有 #something 这样的字样 (http://toweave.github.io/#section-1) 那么 :target 就是用来匹配页面中 id 为 #something(section-1) 的元素的。  
* L. 语言伪类选择器 `「E:lang(language)」`  
用来选择指定了lang属性的元素，其值为language。  
html:
```html{numberLines: true}
<html lang="en-US"></html>
```
css:
```css{numberLines: true}
:lang(en-US) { do something }
```
有时候网页切换不同的语言版本的时候，可以通过这个选择器做一些特殊的处理。

* M. 状态伪类选择器 `「E:checked,E:enabled,E:disabled」`  
```css {numberLines: true}
E:checked { do something } // 匹配表单中被选中的单选按钮或复选按钮  
E:enabled {do something } // 匹配所有起用的表单元素
E:disabled {do something } // 匹配所有禁用的表单元素
```

* N. 结构伪类选择器  
```css {numberLines: true}
E:first-child,
E:last-child,
E:root,
E:nth-child(n),
E:nth-last-child(n),
E:nth-of-type(n),
E:nth-last-of-type(n),
E:first-of-type,
E:last-of-type,
E:only-child,
E:only-of-type,
E:empty { do something }
```

1、 `[E:first-child]`  
用来选取特定元素的第一个子元素。  
html:
```html{numberLines: true}
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>
```
css:
```css{numberLines: true}
ul > li:first-child { do something } // 用来选取 ul 中的第一个 li 元素
```

2、`[E:last-child]`  
用来选取特定元素的最后一个子元素。
html:
```html{numberLines: true}
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>
```
css:
```css{numberLines: true}
ul > li:last-child { do something } // 用来选取 ul 中的最后一个 li 元素
```

3、`[E:nth-child()],[E:nth-last-child()]`  
用来选取某个父元素的一个或多个特定的子元素，其中的 n 可以是数值 ( 从 1 开始 )，也可以是包含 n 的表达式，也可以是 odd ( 奇数 )，even ( 偶数 )。  
`E:nth-last-child()` 选择器的使用方法于 `E:nth-child()` 是相同的，不同的是 `E:nth-last-child()` 选择的元素是从父元素的最后一个子元素开始算起。  
html:
```html{numberLines: true}
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>
```
css:
```css{numberLines: true}
ul > li:nth-child(2n + 1) { do something }
// 用来选取 ul 中的第 2n + 1 ( 奇数 ) 个 li 元素 
```

4、`[E:root]`  
用来匹配元素E所在的文档中的根元素，在html文档中根元素就始终是html。  

5、`[E:nth-of-type(),E:nth-last-of-type()]`，`E:nth-of-type()` 只计算父元素中指定的某种类型的子元素，当某个元素的子元素类型不只是一种时，使用 nth-of-type 来选择会比较有用。
`E:nth-last-of-type()` 的用法同 `E:nth-of-type()` 相同，不同的是 `:nth-last-of-type()` 也是从父元素的最后一个子元素开始算起。
`li:nth-of-type(3)` 的话就会标识它只会选择第三个li元素，别的元素会忽略掉，如：  
html:
```html{numberLines: true}
<ul>
    <li>1</li>
    <li>2</li>
    <div>3</div>
    <div>4</div>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
</ul>
```
css:
```css{numberLines: true}
ul > li:nth-of-type(3) { do something }
// 会选中内容为 5 的 li 元素 
```

但是使用 nth-child 就会是这样：  
html:
```html{numberLines: true}
<ul>
    <li>1</li>
    <li>2</li>
    <div>3</div>
    <div>4</div>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
</ul>
```
css:
```css{numberLines: true}
ul > li:nth-child(3) { do something }
// 会选中内容为 3 的 div 元素
```

6、`[E:first-of-type,E:last-of-type]`, `:first-of-type` 和 `:last-of-type` 这两个选择器类似于 `:first-child` 和 `:last-child`，
不同的就是指定了元素的类型。  
html:
```html{numberLines: true}
<ul>
    <div>1</div>
    <div>2</div>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
</ul>
```
css:
```css{numberLines: true}
ul > li:first-of-type { do something }  
// 会选中内容为3的li元素
```

 7、`[E:only-child]`  
匹配的元素 E 是其父元素的唯一子元素，也就是说匹配元素的父元素只有一个子元素。
html:
```html{numberLines: true}
<div class="demo">
    <p>1-1</p>
    <p>1-2</p>
</div>
<div class="demo">
    <p>2-1</p>
</div>
```
css:
```css{numberLines: true}
.demo > p:only-child { do something }
// 会选取到内容为 2-1 的 p 元素   
```  

8、`[E:only-of-type]`，`:only-of-type` 用来选择一个元素，他的类型在他父元素的所有子元素中是唯一的。
也就是说，一个父元素有很多子元素，而其中只有一个子元素的类型是唯一的，那么就可以使用 `:only-of-type` 来选取这个元素。


9、`[E:empty]`，`:empty` 用来选择没有任何内容的元素，哪怕是一个空格都没有的元素。

10、否定伪类选择器 `「E:not(F)」` 可以用来选取所有除了 F 外的所有元素。
`input:not([type=submit]){do something}` // 可以用来给表单的所有input元素定义样式，除了 submit 按钮之外

#### ** 四、伪元素 **
以前我们使用的伪元素是 `:first-letter,:first-line,:before,:after`, 这样的。
但 css3 定义的伪元素变成了双冒号，主要用来区分伪类和伪元素。对于 IE6-8, 仅支持单冒号表示方法，
但是其他现代浏览器两种表示方法是都可以的，也就是说在现代浏览器中伪元素使用双冒号和单冒号都是会识别的。

* 11、`「::first-letter」` 用来选择文本块的第一个字母,常用于文本排版方面。  
html:
```html{numberLines: true}
    <div>
        <p>this is test line.....</p>
    </div>
```
css:
```css{numberLines: true}
div p::first-letter { do something }` 
// 将会选中 <p> 中的第一个字母t
```  

* 12、`「::first-line」`，`::first-line`用于匹配元素的第一行文本，也是常用于文本排版。
html:
```html{numberLines: true}
    <div>
        <p>
           this is first line..........省略.......
           this is the second line ...省略....
        </p>
    </div>
```
css:
```css{numberLines: true}
div p::first-line { do something } 
// 将会选中 <p> 中的第一行文字
```  

* 13、`「::before,::after」`，`::before,::after` 同我们之前熟用的 `:before` 和 `:after` 使用方法相同，
它们不是指存于标记中的内容，是配合使用 content 属性可以插入额外内容的位置，尽管生成的内容不会成为 DOM 的一部分，但它同样可以设置样式。

* 14、`「::selection」`，`css3` 新定义的伪元素 `::selection` 用来匹配突出显示的文本。但是使用前需要确认浏览器对它的支持程度。
浏览器默认的情况下，我们选中的文本背景是蓝色，字体是白色。通过使用 `::selection` ，我们可以改变它的效果。
```css{numberLines: true}
::selection { background: #ccc; color:red }
// 这样改写后我们选中的文本背景颜色和文字颜色就可以自定义了。
```  
但是需要注意的是，`::selection` 仅接受两个属性，一个是 background ，一个是 color 。

#### ** 五、属性选择器 **
在 html 中，通过给元素添加属性，给以给元素添加一些附加的信息，属性选择器就可以通过定位属性来选取特定的元素。

* 15、`「 E[attr] 」`，用来选择有某个属性的元素，不论这个属性的值是什么。  
html:
```html{numberLines: true}
    <div id="demo">
        <a href="" id="test"></a>
        <a href="www.toweave.com" class="toweave"></a>
        <a href="#"  id="show">
     </div>
```
css:
```css{numberLines: true}
a[id] { do something }
// //将会选择具有 id 属性的 a 标签
```  

* 16、`「E[attr=val]」`，用来选取具有属性attr并且属性值为val的元素。  
html:
```html{numberLines: true}
    <div id="demo">
        <a href="" id="test"></a>
        <a href="https://toweave.github.io/" class="toweave"></a>
        <a href="#" id="show">
     </div>
```
css:
```css{numberLines: true}
a[id=test][title] { do something }
// 将会选择具有 id 属性值为 test 且具有 title 属性的 a 标签
```  

* 17、`「 E[attr|=val] 」`，`E[attr|=val]`用来选择具有属性 attr 且属性的值为 val 或以 val- 开头的元素 ( 其中 - 是不可或缺的 )。  
html:
```html{numberLines: true}
    <div id="demo">
        <a href="" id="test" title="test" lang="zh"></a>
        <a href="www.taobao.com" class="taobao" lang="zh-cn"></a>
        <a href="#"  id="show" title="test">
    </div>
```
css:
```css{numberLines: true}
a[lang|=zh] { do something }
// 将会选择具有 lang 属性值为 zh 或属性值以 zh 开头的a标签
```  

* 18、`「 E[attr~=val] 」`，当某个元素的某个属性具有多个用空格隔开的属性值，此时使用 `E[attr~=val] `只要 attr 属性多个属性值中有一个于 val 匹配元素就会被选中。  
html:
```html{numberLines: true}
    <div id="demo">
        <a href="" id="test" title="test first"></a>
        <a href="www.taobao.com" class="taobao web" title="second test"></a>
        <a href="#"  id="show" title="test">
    </div>
```
css:
```css{numberLines: true}
a[title~=test] { do something }
// 将会选择具有 title 属性且其中一个属性值为 test 的 a 标签
```

* 19、`「 E[attr^=val] 」`，用来选择属性attr的属性值是以val开头的所有元素，注意它与 `E[attr|=val]` 的区别，
`attr|=val` 中 - 是必不可少的，也就是说以 val- 开头。  
html:
```html{numberLines: true}
    <div id="demo">
        <a href="http://zhangmengxue.com" id="test" title="test first"></a>
        <a href="www.taobao.com" class="taobao web" title="secondtest"></a>
        <a href="#"  id="show" title="testlink">
    </div>
```
css:
```css{numberLines: true}
a[href^=http] { do something }
// 将会选择 hre f属性以 http 开头的 a 标签
```

* 20、`「 E[attr$=val] 」`，这个选择器刚好跟 `E[attr^=val]` 相反，用来选择具有 attr 属性且属性值以 val 结尾的元素。 
html:
```html{numberLines: true}
    <div id="demo">
        <a href="http://zhangmengxue.com/header.png" id="test" title="test first"></a>
        <a href="www.taobao.com/title.jpg" class="taobao web" title="secondtest"></a>
        <a href="#"  id="show" title="testlink">
    </div>
```
css:
```css{numberLines: true}
a[href$=png] { do something }
// 将会选择 href 属性以 png 结尾的 a 标签
``` 
