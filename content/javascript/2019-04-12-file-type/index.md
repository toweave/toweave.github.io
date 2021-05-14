---
title: 文件类型判断
date: "2019-04-12T01:51:30.187Z"
tags: ["HOT", "JavaScript", "精选"]
description: 常用的文件类型判断
---

#### 常用的文件类型判断

```javascript{numberLines: true}
var isJS = function (file) { return /\.js(\?[^.]+)?$/.test(file); };

var isCSS = function (file) { return /\.css(\?[^.]+)?$/.test(file); };
```













