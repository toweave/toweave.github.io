---
title: 小算法练习
date: "2019-04-28T12:36:46.523Z"
tags: ["HOT", "JavaScript"]
description: 小算法练习
---

1. 因式分解  

```javascript{numberLines: true}
let a = ''  
function testA(n, i=2) {  
    if (n % i === 0 && i <= n) {
        console.log('ii:', i)
        a += '*' + i
        testA(n / i, i)
    } else if (n % i !== 0 && i <= n) {
        i++;
        testA(n, i)
    }
}
testA(24)  
console.log(a)  
// ii: 2
// ii: 2
// ii: 2
// ii: 3
// *2*2*2*3
```

2. 查找素数  


```javascript{numberLines: true}
function isPrime(element, index, array) {  
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found  
console.log([4, 5, 8, 12].find(isPrime)); // 5  

```
