---
title: 实现一个链式调用函数
date: "2019-04-28T10:26:46.523Z"
tags: ["HOT", "JavaScript"]
description: 实现一个简单的链式调用方法
---

实现一个简单的链式调用方法

```javascript{numberLines: true}
"use strict";
async function delay (time, callback) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve(callback());
    }, time * 1000)
  });
}
class QueueItem {
  constructor(time, callback) {
    this.time = time;
    this.callback = callback;
  }
}
```

```javascript{numberLines: true}
class Point {
  constructor(name) {
    let funcStart = new QueueItem(0, () => {
      console.log(`start ${name}`)
      return void 0;
    });
    this.name = name;
    this.queue = [funcStart]
  }
  do(action) {
    // this.action = action
    let funcDo = new QueueItem(0, () => {
      console.log(`${this.name} - ${action}`)
      return void 0;
    });
    this.queue.push(funcDo)
    return this
  }
  wait (time) {
    // this.time = time
    let funcWait = new QueueItem(time, () => {
      console.log(`wait - ${time}`)
      return void 0;
    });
    this.queue.push(funcWait)
    return this
  }
  waitFirst (time) {
    // this.timeWaitFirst = time
    let funcWait = new QueueItem(time, () => {
      console.log(`wait first - ${time}`)
      return void 0;
    })
    this.queue.unshift(funcWait)
    return this
  }
  async execute() {
    for (let i = 0; i < this.queue.length; i++) {
      let item = this.queue[i]
      console.log(67, i)
        if (!item.time) {
          item.callback();
        } else {
          await delay(item.time, item.callback);
        }
    }
  }
}

```

```javascript{numberLines: true}

function machine(name) {
  return new Point(name);
}
machine('123').wait(2).do('eat').waitFirst(3).execute()


// 运行结果
// 67 0
// wait first - 3
// 67 1
// start 123
// 67 2
// wait - 2
// 67 3
// 123 - eat

```
