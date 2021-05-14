---
title: git 常用命令
date: "2019-04-04T02:51:06.653Z"
tags: ["HOT", "Git"]
description: 一些常用的 git 命令
---

* ssh生成秘钥
```bash{numberLines: true}
ssh-keygen -t rsa -C "toweave@163.com"
```

* 删除远程分支   
```bash{numberLines: true}
git branch -r -d origin/branch-name  
git push origin :branch-name
```

* 删除本地分支   
```bash{numberLines: true}
git branch -D origin/branch-name
```

* git添加tag  
```bash{numberLines: true}
git tag v1.0.0-xxx-tag-name
git push origin v1.0.0-xxx-tag-name
git tag -a v1.4 -m 'my version 1.4'
```

* git本地分支添加到远程  
```bash{numberLines: true}
 git push --set-upstream origin branch-name`
 ```

* 初始化git项目

…or create a new repository on the command line
```bash{numberLines: true}
echo "# exercise" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:toweave/exercise.git
git push -u origin master
```

…or push an existing repository from the command line

```bash{numberLines: true}
git remote add origin git@github.com:toweave/exercise.git
git push -u origin master
```

* git stash: 备份当前的工作区的内容，从最近的一次提交中读取相关内容，让工作区保证和上次提交的内容一致。同时，将当前的工作区内容保存到Git栈中。
* git stash pop: 从Git栈中读取最近一次保存的内容，恢复工作区的相关内容。由于可能存在多个Stash的内容，所以用栈来管理，pop会从最近的一个stash中读取内容并恢复。
* git stash list: 显示Git栈内的所有备份，可以利用这个列表来决定从那个地方恢复。
* git stash clear: 清空Git栈。此时使用gitg等图形化工具会发现，原来stash的哪些节点都消失了。


CR回车 LF 换行 Windows/Dos CRLF \r\n
Linux/Unix LF \n
MacOS CR \r
解决方法是：打开命令行，进行设置，如果你是在 Windows 下开发，建议设置 autocrlf 为true。
2014/08/20 补充：如果你文件编码是 UTF8 并且包含中文文字，那还是把 autocrlf 设置为 false，并且把所有文件转换为 Linux 编码（即 LF\n），开启 safecrlf 检查。

* 一、AutoCRLF   

####  提交时转换为LF，检出时转换为CRLF  
```bash{numberLines: true}
git config --global core.autocrlf true
```

####  提交时转换为LF，检出时不转换
```bash{numberLines: true}
git config --global core.autocrlf input
```

####  提交检出均不转换
```bash{numberLines: true}
git config --global core.autocrlf false
```

* 二、SafeCRLF

#### 拒绝提交包含混合换行符的文件
```bash{numberLines: true}
git config --global core.safecrlf true
```

####  允许提交包含混合换行符的文件
```bash{numberLines: true}
git config --global core.safecrlf false
```

####  提交包含混合换行符的文件时给出警告
```bash{numberLines: true}
git config --global core.safecrlf warn
```

####  设置中文乱码问题   
```bash{numberLines: true}
git config --global core.quotepath false
```

####  git config保存密码
```bash{numberLines: true}
[credential]
     helper = store
```

####  git 删除本地暂存库缓存
```bash{numberLines: true}
git rm --cached --force build/*
```