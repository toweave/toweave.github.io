(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{100:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(118),r=a.n(n),l=a(119),o=a.n(l);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var i=new r.a(o.a);var c=i.rhythm;i.scale},104:function(e,t,a){"use strict";t.a=[{name:"blog",nameUrl:"疯狂的 Toweave",url:"/",key:"0"},{name:"javascript",nameUrl:"JavaScript",url:"/javascript",key:"1"},{name:"vue",nameUrl:"Vue",url:"/vue",key:"2"},{name:"react",nameUrl:"React",url:"/react",key:"3"},{name:"angular",nameUrl:"Angular",url:"/angular",key:"4"},{name:"htmlcss",nameUrl:"HTML/CSS",url:"/htmlcss",key:"5"},{name:"charts",nameUrl:"Charts",url:"/charts",key:"6"},{name:"linux",nameUrl:"Linux",url:"/linux",key:"7"},{name:"3d",nameUrl:"3D 世界",url:"/3d",key:"8"},{name:"animation",nameUrl:"动画",url:"/animation",key:"9"},{name:"photo",nameUrl:"Toweave's 摄影",url:"/photo",key:"10"},{name:"inspiration",nameUrl:"感悟",url:"/inspiration",key:"11"},{name:"other",nameUrl:"其他",url:"/other",key:"12"}]},106:function(e,t,a){"use strict";var n=a(6),r=a(7),l=a(9),o=a(8),i=a(10),c=a(0),s=a.n(c),A=a(25),u=a(104),m=a(415),d=a(417),p=a(416),g=a(414),f=a(72),h=a.n(f),E=m.a.Header,v=m.a.Content,y=m.a.Footer,k=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).handleClick=function(e){a.setStatePromise(function(t){t.current;return{current:e.key}}).then(function(){a.loadList(e.key),a.forceUpdate()})},a.state={current:""},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"setStatePromise",value:function(e){return new Promise(function(t,a){this.setState(e,t)}.bind(this))}},{key:"loadList",value:function(e){this.setState({current:e})}},{key:"componentDidMount",value:function(){if("/"===this.props.location.pathname)this.loadList("0");else for(var e=0;e<u.a.length;e++)if(-1!==this.props.location.pathname.indexOf("/".concat(u.a[e].name))){this.loadList("".concat(e));break}}},{key:"render",value:function(){var e=this,t=this.props,a=t.location,n=t.title,r=t.children,l=("".concat("","/"),null);return l=(a.pathname,s.a.createElement(A.Link,{className:h.a.link,to:"/"},n)),s.a.createElement(m.a,null,s.a.createElement(E,{style:{position:"fixed",zIndex:1,width:"100%"}},s.a.createElement(d.a,{gutter:24},s.a.createElement(p.a,{xs:{span:10},sm:{span:8},md:{span:6},lg:{span:4}},s.a.createElement(A.Link,{to:"/"},s.a.createElement("div",{className:h.a.logo}))),s.a.createElement(p.a,{xs:{span:14},sm:{span:16},md:{span:18},lg:{span:20}},s.a.createElement(g.a,{theme:"dark",mode:"horizontal",selectedKeys:[this.state.current],className:h.a.menu,style:{lineHeight:"64px",marginBottom:0}},u.a.map(function(t){var a=t.nameUrl;return s.a.createElement(g.a.Item,{style:{padding:0},onClick:e.handleClick,key:t.key},s.a.createElement(A.Link,{className:h.a.link,to:t.url},a))}))))),s.a.createElement(v,{style:{marginTop:64}},s.a.createElement("div",{style:{background:"#fff",marginTop:26,padding:24,minHeight:850}},s.a.createElement("main",null,r))),s.a.createElement(y,{style:{textAlign:"center"}},s.a.createElement("span",null,l),"Ant Design ©2019"))}}]),t}(s.a.Component);t.a=k},107:function(e,t,a){"use strict";var n=a(108),r=a(0),l=a.n(r),o=a(117),i=a.n(o);function c(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title,s=n.data.site,A=t||s.siteMetadata.description;return l.a.createElement(i.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | ".concat(s.siteMetadata.title),meta:[{name:"description",content:A},{property:"og:title",content:c},{property:"og:description",content:A},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:A}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}c.defaultProps={lang:"en",meta:[],keywords:[]},t.a=c},108:function(e){e.exports={data:{site:{siteMetadata:{title:"Toweave's blog. Power by Gatsby & React.",description:"A starter blog demonstrating what Gatsby can do.",author:"Toweave"}}}}},109:function(e,t,a){"use strict";var n=a(110),r=a(0),l=a.n(r),o=a(25),i=a(120),c=a.n(i),s=a(417),A=a(416),u=a(100);var m="2030445957";t.a=function(){return l.a.createElement(o.StaticQuery,{query:m,render:function(e){var t=e.site.siteMetadata.author;return l.a.createElement(s.a,null,l.a.createElement(A.a,{sm:{span:0},md:{span:8},lg:{span:6}},l.a.createElement(c.a,{fixed:e.avatar.childImageSharp.fixed,alt:t,style:{marginRight:Object(u.a)(.5),marginBottom:0,minWidth:64,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}})),l.a.createElement(A.a,{sm:{span:24},md:{span:16},lg:{span:18}},l.a.createElement("p",null,l.a.createElement("strong",null,"关于作者"),l.a.createElement("br",null),"本人是前端工程师 ",l.a.createElement("strong",null,t),". 一个努力成为优秀工程师的男人.",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://toweave.github.io/intro/"},"了解更多..."))))},data:n})}},110:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAXAQADAQAAAAAAAAAAAAAAAAAAAwQB/9oADAMBAAIQAxAAAAHHW7rm8KGKzTSAP//EABsQAAICAwEAAAAAAAAAAAAAAAECAAMQERIi/9oACAEBAAEFAgFVHSuuOvD0nzWpWNvqbJx//8QAFREBAQAAAAAAAAAAAAAAAAAAASD/2gAIAQMBAT8BCP/EABURAQEAAAAAAAAAAAAAAAAAAAEg/9oACAECAQE/AVj/xAAeEAABAwUBAQAAAAAAAAAAAAABAAIRECIxQVEDIf/aAAgBAQAGPwIFwLi7SEgmdzhFvFdEA2k9Uemz8B6jOaZp/8QAHxAAAgEDBQEAAAAAAAAAAAAAAREAIUFhEDFRcdHh/9oACAEBAAE/IWzQQFQwAb4UrE23gg6sAeIwW8k5dQiJfrLKFBkVQaf/2gAMAwEAAgADAAAAEEMwQP/EABoRAAICAwAAAAAAAAAAAAAAAAERABAh4fD/2gAIAQMBAT8QAQEO3CniOv/EABoRAQABBQAAAAAAAAAAAAAAAAERABAh4fD/2gAIAQIBAT8QQWXtUTGb/wD/xAAeEAEAAgMAAgMAAAAAAAAAAAABABEhMUFRYYGx4f/aAAgBAQABPxBgwYTAau+q8lmP7Atm6BSnuKpoDyORi+BRyn4X4lZc23X9mr7iX/2Tfd9luxrdcjiYAi3QaCKqq2u1n//Z",width:64,height:64,src:"/static/01cddd8494dc5cddf1e8b0548cbf4e7c/26a58/toweave_64_64.jpg",srcSet:"/static/01cddd8494dc5cddf1e8b0548cbf4e7c/26a58/toweave_64_64.jpg 1x"}}},site:{siteMetadata:{author:"Toweave",social:{twitter:"kylemathews"}}}}}},111:function(e,t,a){"use strict";var n=a(112),r=a(0),l=a.n(r),o=a(25),i=a(418),c=a(74),s=a.n(c);var A="231687029";t.a=function(){return l.a.createElement(o.StaticQuery,{query:A,render:function(e){var t=e.allMarkdownRemark.group;return l.a.createElement("div",null,l.a.createElement("p",null,"我的标签"),t.map(function(e){var t=e.fieldValue||"--",a=e.totalCount||"0";return l.a.createElement("div",{key:t,className:s.a.tagItem},l.a.createElement(i.a,{color:"#2db7f5"},l.a.createElement(o.Link,{style:{boxShadow:"none"},to:"/tags/".concat(t,"/")},t,l.a.createElement("span",{className:s.a.tagCount},a))))}))},data:n})}},112:function(e){e.exports={data:{allMarkdownRemark:{group:[{fieldValue:"CSS",totalCount:3},{fieldValue:"Chicago",totalCount:1},{fieldValue:"Git",totalCount:1},{fieldValue:"HOT",totalCount:34},{fieldValue:"HTML",totalCount:4},{fieldValue:"JavaScript",totalCount:12},{fieldValue:"Linux",totalCount:1},{fieldValue:"Selector",totalCount:1},{fieldValue:"Tag",totalCount:1},{fieldValue:"Vue",totalCount:1},{fieldValue:"choice",totalCount:1},{fieldValue:"console",totalCount:1},{fieldValue:"文档",totalCount:1},{fieldValue:"正则表达式",totalCount:1},{fieldValue:"精选",totalCount:18}]}}}},114:function(e,t,a){"use strict";var n=a(6),r=a(7),l=a(9),o=a(8),i=a(10),c=a(0),s=a.n(c),A=a(25),u=a(418),m=a(75),d=a.n(m),p=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.tags;return s.a.createElement("div",null,e&&s.a.createElement("span",null,"标签："),e&&e.map(function(e){return s.a.createElement("div",{key:e,className:d.a.tagItem},s.a.createElement(u.a,{color:"#2db7f5"},s.a.createElement(A.Link,{style:{boxShadow:"none"},to:"/tags/".concat(e,"/")},e)))}))}}]),t}(s.a.Component);t.a=p},115:function(e,t,a){"use strict";var n=a(6),r=a(7),l=a(9),o=a(8),i=a(10),c=a(0),s=a.n(c),A=a(25),u=a(114),m=a(412),d=a(100);var p=a(76),g=a.n(p),f=function(e){function t(e,a){var r;return Object(n.a)(this,t),(r=Object(l.a)(this,Object(o.a)(t).call(this,e,a))).onChange=function(e){r.setState({current:e})},r.state={current:0},r}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.location,a=e.allPosts,n=a?a.length:0,r=t.pathname,l=(t.search.match(/([^?=&]+)(=([^&]*))/g)||[]).reduce(function(e,t){return e[t.slice(0,t.indexOf("="))]=t.slice(t.indexOf("=")+1),e},{}),o=Number(l.page)||1,i=1===o,c=o===Math.ceil(n/12),p=o-1==1?"":(o-1).toString(),f=(o+1).toString(),h=n&&a.slice(12*(o-1),12*o);return s.a.createElement("div",null,h.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return s.a.createElement("div",{key:t.fields.slug,className:g.a.blogItem},s.a.createElement("h3",{style:{marginBottom:Object(d.a)(.25)}},s.a.createElement(A.Link,{style:{boxShadow:"none"},to:t.fields.slug},a)),s.a.createElement("small",null,t.frontmatter.date," ( ISO 8601 )"),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}),s.a.createElement(u.a,{tags:t.frontmatter.tags}))}),s.a.createElement(m.a,{current:this.state.current,onChange:this.onChange,itemRender:function(e,t,a){if("prev"===t)return!i&&s.a.createElement(A.Link,{to:"/".concat(r,"?page=").concat(p),style:{color:"#555",cursor:"pointer"},rel:"prev"},"Prev");if("next"===t)return!c&&s.a.createElement(A.Link,{to:"/".concat(r,"?page=").concat(f),style:{color:"#555",cursor:"pointer"},rel:"next"},"Next");if("page"===t){var n="";return 1!==e&&(n=e),s.a.createElement(A.Link,{to:"/".concat(r,"?page=").concat(n),className:e===o?"current":"",rel:"next"},e)}return a},pageSize:12,total:n}))}}]),t}(s.a.Component);t.a=f},308:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{fields:{slug:"/htmlcss/2019-04-28-dom-verb/"},frontmatter:{date:"Sunday, April 28th 2019, 10:26:46 am",tags:["HOT","HTML"],title:"DOM 优化操作",description:"DOM 优化操作"}}},{node:{fields:{slug:"/htmlcss/2019-04-11-html-tag/"},frontmatter:{date:"Thursday, April 11th 2019, 9:50:31 am",tags:["HOT","HTML","Tag"],title:"HTML 标签",description:"HTML 标签待整理"}}},{node:{fields:{slug:"/htmlcss/2019-04-04-css-design-model/"},frontmatter:{date:"Thursday, April 4th 2019, 9:10:26 am",tags:["HOT","CSS"],title:"CSS 设计模式",description:"要对CSS进行设计，那么肯定是它本身存在一些问题或者缺陷，其中，一个最明显的就是，它的任何一个规则，都是全局性的声明，会对引入它的页面当中所有相关元素起作用，不管那是不是你想要的。而独立及可组合的模块是一个可维护系统的关键所在。"}}},{node:{fields:{slug:"/htmlcss/2019-04-03-no-cache-html-meta/"},frontmatter:{date:"Wednesday, April 3rd 2019, 7:10:26 am",tags:["HOT","HTML"],title:"页面缓存",description:"页面缓存一直是前端开发中我们关注比较少的，研究了一些资料，总结了一些心得，记录下来共同探讨。"}}},{node:{fields:{slug:"/htmlcss/css-selector/"},frontmatter:{date:"Tuesday, April 2nd 2019, 10:15:53 am",tags:["HOT","CSS","Selector","精选"],title:"CSS Selector 选择器",description:"了解并且熟用 CSS3 为我们提供的强大并且优雅的选择器，就可以简化我们的代码。"}}},{node:{fields:{slug:"/htmlcss/write-css/"},frontmatter:{date:"Tuesday, April 2nd 2019, 7:40:55 am",tags:["HOT","CSS"],title:"CSS书写顺序规范",description:"为何CSS需要CSS书写顺序、规范？"}}},{node:{fields:{slug:"/htmlcss/2019-04-01-1px-summary/"},frontmatter:{date:"Monday, April 1st 2019, 7:10:26 am",tags:["HOT","HTML"],title:"移动端 1px 边框",description:"布局方面，css有那么几个比较热衷的问题。其中，移动端1px边框问题的讨论不亚于垂直居中。那么移动端1px边框问题是如何产生的呢？由于现在的手机几乎都是retina屏，css设置的1px会被渲染成2px的物理像素（针对像素比等于2的屏幕），因此看起来会比较粗。既然知道了问题的产生原因，那么我们就开始解决。网上有很多种方案，但实际上我们用的时候只能选一种用，所以那么“不靠谱”的就不详细叙述了...（以下方案推荐指数逐渐提高）"}}}]}}}},95:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(7),l=a(9),o=a(8),i=a(10),c=a(0),s=a.n(c),A=a(109),u=a(308),m=a(25),d=a(73),p=a.n(d);var g="2076353025",f=function(){return s.a.createElement(m.StaticQuery,{query:g,render:function(e){var t=e.allMarkdownRemark.edges;return s.a.createElement("div",null,s.a.createElement("p",null,"HTML/CSS 热门文章"),t.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return s.a.createElement("div",{className:p.a.hotItem,key:t.fields.slug},s.a.createElement("div",null,s.a.createElement(m.Link,{style:{boxShadow:"none"},to:t.fields.slug},a),s.a.createElement("br",null),s.a.createElement("small",null,t.frontmatter.date," ( ISO 8601 )")),s.a.createElement("div",{className:p.a.oneLine},t.frontmatter.description))}))},data:u})},h=a(111),E=a(115),v=a(106),y=a(107),k=a(417),S=a(416),b=a(77),C=a.n(b);a.d(t,"pageQuery",function(){return x});var w=function(e){function t(e,a){var r;return Object(n.a)(this,t),(r=Object(l.a)(this,Object(o.a)(t).call(this,e,a))).state={current:0},r}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.location,n=t.site.siteMetadata.title,r=t.allMarkdownRemark.edges;return s.a.createElement(v.a,{location:this.props.location,title:n},s.a.createElement(y.a,{title:"Toweave's HTML CSS.",keywords:["Toweave","blog","gatsby","javascript","react","html","css"]}),s.a.createElement(k.a,null,s.a.createElement(S.a,{xs:{span:24},sm:{span:21},md:{span:19},lg:{span:17},className:C.a.blogList},s.a.createElement(E.a,{allPosts:r,location:a})),s.a.createElement(S.a,{xs:{span:0},sm:{span:3},md:{span:5},lg:{span:7},className:C.a.sideBox},s.a.createElement(A.a,null),s.a.createElement(f,null),s.a.createElement(h.a,null))))}}]),t}(s.a.Component),x=(t.default=w,"3119377662")}}]);
//# sourceMappingURL=component---src-pages-htmlcss-js-54a1cbbf58c93398f1f5.js.map