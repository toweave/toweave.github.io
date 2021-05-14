---
title: 扩展 Array 方法
date: "2019-04-28T11:26:46.523Z"
tags: ["HOT", "JavaScript"]
description: 实现一个简单的数组个元素相等的判断
---

实现一个简单的数组个元素相等的判断

```javascript{numberLines: true}
Array.prototype.equals = function (arr) {  
  const len = this.length
  if (len !== arr.length) {
    return false
  }
  for (let i = 0; i < len; i++) {
    if (this[i] !== arr[i]) {
      return false
    }
  }
  return true
}

;[1, 2].equals([1, 2]) // true
;[1, 2].equals([0]) // false
```
