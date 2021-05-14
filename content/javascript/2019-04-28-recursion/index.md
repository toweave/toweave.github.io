---
title: 代码笔记-递归
date: "2019-04-28T13:26:46.523Z"
tags: ["HOT", "JavaScript"]
description: 实代码笔记-递归
---

代码笔记-递归

```javascript{numberLines: true}
var data = [  
        {
            "parentId":0,
            "nodeId":20,
            "nodeLevel":1,
            "nodeName":"老板"
        },{
            "parentId":20,
            "nodeId":30,
            "nodeLevel":2,
            "nodeName":"黄经理"
        },{
            "parentId":20,
            "nodeId":32,
            "nodeLevel":2,
            "nodeName":"张经理"
        },{
            "parentId":30,
            "nodeId":37,
            "nodeLevel":3,
            "nodeName":"黄经理下属主管"
        },{
            "parentId":32,
            "nodeId":56,
            "nodeLevel":3,
            "nodeName":"张经理下属主管"
        }
    ];
```

```javascript{numberLines: true}
    function search(data,p_id){
        var temp = [];
        for(var index in data){
            if (data[index].parentId == p_id) {
                temp.push(data[index]);
            }
        }
        return temp;
    }

    function test(p_id = 0){
        var arr = [];
        var searchResult = search(data,p_id);
        for(var i in searchResult){
            arr.push({"value":searchResult[i].nodeName,"children":test(searchResult[i].nodeId)})
        }
        return arr;
    }

    console.log(test());
```

```javascript{numberLines: true}
var count = 0  
var data = [  
    {id: 1},
    {
        id: 2,
        children: [
            {id: 4},
            {
                id: 5,
                children: [
                    {id: 7},
                    {id: 8},
                    {id: 9}
                ]
            },
            {id: 6},
        ]
    },
    {id: 3},
]

var tempData = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var arr = []  
function search (data) {  
    count++
    for (var i in data) {
        arr.push(data[i].id)
        if (data[i].children) {
            search(data[i].children)
        }
    }
}
search(data)  
console.log(arr.sort())  
console.log(count)  

```
