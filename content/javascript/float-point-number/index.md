---
title: 浮点数运算的精度问题
date: "2019-04-01T10:33:53.472Z"
tags: ["HOT", "JavaScript", "精选"]
description: 根据浮点数的定义，非整数的 Number 类型无法用 `==` 来比较（`===` 也不行）
---

根据浮点数的定义，非整数的 Number 类型无法用 `==` 来比较（`===` 也不行）

```javascript{numberLines: true}
console.log( 0.1 + 0.2 != 0.3) // true  
// 0.1 + 0.2 = 0.30000000000000004
```

这里输出的结果是 true，说明两边不相等。 
所以正确的比较方法是使用 JavaScript 提供的最小精度值：

```javascript{numberLines: true}
console.log( Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON); // true  
```

小记 

JavaScript 中有 +0 和 -0，在加法类运算中它们没有区别，但是除法的场合则需要特别留意区分，“忘记检测除以 -0，而得到负无穷大” 的情况经常会导致错误，而区分 +0 和 -0 的方式，正是检测 1/x 是 Infinity 还是 -Infinity。