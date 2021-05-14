---
title: Centos 更新源，升级程序
date: "2019-04-02T07:16:11.523Z"
tags: ["HOT", "Linux"]
description: Linux 服务器有的初始化软件版本过低，经常面临软件更新、安全问题，我们该如何更新软件呢？
---

Linux 服务器有的初始化软件版本过低，经常面临软件更新、安全问题，我们该如何更新软件呢？

1. 备份 CentOS-Base.repo
```bash{numberLines: true}
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup 
```

2. 下载新的CentOS-Base.repo 到 /etc/yum.repos.d/
```bash{numberLines: true}
# centos 5
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-5.repo  
# centos 6
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-6.repo  
# centos 7
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo  
```

3. 运行命令
```bash{numberLines: true}
# 把服务器的包信息下载到本地电脑缓存起来
yum makecache  
yum install epel-release  
yum install nginx   
```

4. 把Nginx从1.12.2升级到 1.14.2
* 为yum建立nginx安装库
```bash{numberLines: true}
# 在/etc/yum.repos.d目录下创建文件nginx.repo，输入如下内容：
# nginx.repo
[nginx]
name=nginx repo  
baseurl=http://nginx.org/packages/centos/7/$basearch/  
gpgcheck=0  
enabled=1 
```
* 升级Nginx
```bash{numberLines: true}
# 运行
> yum update nginx
# ok 了
# 停止、重启nginx服务：
> service nginx stop
Stopping nginx:                                            [  OK  ]  
> service nginx start
Starting nginx:                                            [  OK  ]  
```
* 清理 nginx repo
```bash{numberLines: true}
# 再次编辑文件/etc/yum.repos.d/nginx.repo：
# nginx.repo
[nginx]
# 其他内容省略
enabled=0
# 最后，清理yum的缓存：
> yum clean all
```
