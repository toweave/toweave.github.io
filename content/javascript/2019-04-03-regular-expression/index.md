---
title: JavaScript Date 对象
date: "2019-04-03T06:18:56.409Z"
tags: ["HOT", "JavaScript", "精选"]
description: Date 对象用于处理日期和时间。
---

Date 对象用于处理日期和时间。

1. Date 对象创建语法。
```javascript{numberLines: true}
var myDate=new Date()
// 注释：Date 对象会自动把当前日期和时间保存为其初始值。
```

2. Date 对象属性。  

| 属性 | 描述 |
|--|--|
| constructor | 返回对创建此对象的 Date 函数的引用。 |
| prototype | 使您有能力向对象添加属性和方法。 |

3. Date 对象方法。  

| 属性 | 描述 |
|--|--|
| Date() | 返回当日的日期和时间。 |
| getDate() | 从 Date 对象返回一个月中的某一天 (1 ~ 31)。 |
| getDay() | 从 Date 对象返回一周中的某一天 (0 ~ 6)。 |
| getMonth() |	从 Date 对象返回月份 (0 ~ 11)。|
| getFullYear() |	从 Date 对象以四位数字返回年份。|
| getYear() |	请使用 getFullYear() 方法代替。|
| getHours() |	返回 Date 对象的小时 (0 ~ 23)。|
| getMinutes() |	返回 Date 对象的分钟 (0 ~ 59)。|
| getSeconds() |	返回 Date 对象的秒数 (0 ~ 59)。|
| getMilliseconds() |	返回 Date 对象的毫秒(0 ~ 999)。|
| getTime() |	返回 1970 年 1 月 1 日至今的毫秒数。|
| getTimezoneOffset() |	返回本地时间与格林威治标准时间 (GMT) 的分钟差。|
| getUTCDate() |	根据世界时从 Date 对象返回月中的一天 (1 ~ 31)。|
| getUTCDay() |	根据世界时从 Date 对象返回周中的一天 (0 ~ 6)。|
| getUTCMonth() |	根据世界时从 Date 对象返回月份 (0 ~ 11)。|
| getUTCFullYear() |	根据世界时从 Date 对象返回四位数的年份。|
| getUTCHours() |	根据世界时返回 Date 对象的小时 (0 ~ 23)。|
| getUTCMinutes() |	根据世界时返回 Date 对象的分钟 (0 ~ 59)。|
| getUTCSeconds() |	根据世界时返回 Date 对象的秒钟 (0 ~ 59)。|
| getUTCMilliseconds() |	根据世界时返回 Date 对象的毫秒(0 ~ 999)。|
| parse() |	返回1970年1月1日午夜到指定日期（字符串）的毫秒数。|
| setDate() |	设置 Date 对象中月的某一天 (1 ~ 31)。|
| setMonth() |	设置 Date 对象中月份 (0 ~ 11)。|
| setFullYear() |	设置 Date 对象中的年份（四位数字）。|
| setYear() |	请使用 setFullYear() 方法代替。|
| setHours() |	设置 Date 对象中的小时 (0 ~ 23)。|
| setMinutes() |	设置 Date 对象中的分钟 (0 ~ 59)。|
| setSeconds() |	设置 Date 对象中的秒钟 (0 ~ 59)。|
| setMilliseconds() |	设置 Date 对象中的毫秒 (0 ~ 999)。|
| setTime() |	以毫秒设置 Date 对象。|
| setUTCDate() |	根据世界时设置 Date 对象中月份的一天 (1 ~ 31)。|
| setUTCMonth() |	根据世界时设置 Date 对象中的月份 (0 ~ 11)。|
| setUTCFullYear() |	根据世界时设置 Date 对象中的年份（四位数字）。|
| setUTCHours() |	根据世界时设置 Date 对象中的小时 (0 ~ 23)。|
| setUTCMinutes() |	根据世界时设置 Date 对象中的分钟 (0 ~ 59)。|
| setUTCSeconds() |	根据世界时设置 Date 对象中的秒钟 (0 ~ 59)。|
| setUTCMilliseconds() |	根据世界时设置 Date 对象中的毫秒 (0 ~ 999)。|
| toSource() |	返回该对象的源代码。|
| toString() |	把 Date 对象转换为字符串。|
| toTimeString() |	把 Date 对象的时间部分转换为字符串。|
| toDateString() |	把 Date 对象的日期部分转换为字符串。|
| toGMTString() |	请使用 toUTCString() 方法代替。|
| toUTCString() |	根据世界时，把 Date 对象转换为字符串。|
| toISOString() |	根据世界时( ISO 8601 )，把 Date 对象转换为字符串。|
| toLocaleString() |	根据本地时间格式，把 Date 对象转换为字符串。|
| toLocaleTimeString() |	根据本地时间格式，把 Date 对象的时间部分转换为字符串。|
| toLocaleDateString() |	根据本地时间格式，把 Date 对象的日期部分转换为字符串。|
| UTC() |	根据世界时返回 1970 年 1 月 1 日 到指定日期的毫秒数。|
| valueOf() |	返回 Date 对象的原始值。|

```javascript{numberLines: true}
// 不错的时间格式化函数
function DatePart(interval){   
 var myDate = new Date();
    var partStr='';  
    var Week = ['日','一','二','三','四','五','六'];  
    switch (interval){   
        case 'y' :partStr = myDate.getYear();break;  
  case 'Y' :partStr = myDate.getFullYear();break; 
        case 'm' :partStr = myDate.getMonth()+1;break; 
        case 'M' :
     var myDatem=myDate.getMonth()+1;
     partStr =myDatem>9?myDatem:'0'+myDatem.toString(); 
     break; 
        case 'd' :partStr = myDate.getDate();break;  
  case 'D' :
     partStr =myDate.getDate()>9?myDate.getDate():'0'+myDate.getDate().toString(); 
     break; 
        case 'w' :partStr = Week[myDate.getDay()];break;  
        case 'ww' :partStr = myDate.WeekNumOfYear();break;  
        case 'h' :partStr = myDate.getHours();break;  
        case 'n' :partStr = myDate.getMinutes();break;  
        case 's' :partStr = myDate.getSeconds();break;  
    }  
    return partStr;  
}  
```

4. 日期时间脚本库方法列表

Date.prototype.isLeapYear 判断闰年
Date.prototype.Format 日期格式化
Date.prototype.DateAdd 日期计算
Date.prototype.DateDiff 比较日期差
Date.prototype.toString 日期转字符串
Date.prototype.toArray 日期分割为数组
Date.prototype.DatePart 取日期的部分信息
Date.prototype.MaxDayOfDate 取日期所在月的最大天数
Date.prototype.WeekNumOfYear 判断日期所在年的第几周
StringToDate 字符串转日期型
IsValidDate 验证日期有效性
CheckDateTime 完整日期时间检查
daysBetween 日期天数差

js代码：
```javascript{numberLines: true}
//---------------------------------------------------  
// 判断闰年  
//---------------------------------------------------  
Date.prototype.isLeapYear = function()   
{   
    return (0==this.getYear()%4&&((this.getYear()%100!=0)||(this.getYear()%400==0)));  
}   
```
```javascript{numberLines: true} 
//---------------------------------------------------  
// 日期格式化  
// 格式 YYYY/yyyy/YY/yy 表示年份  
// MM/M 月份  
// W/w 星期  
// dd/DD/d/D 日期  
// hh/HH/h/H 时间  
// mm/m 分钟  
// ss/SS/s/S 秒  
//---------------------------------------------------  
Date.prototype.Format = function(formatStr)   
{   
    var str = formatStr;   
    var Week = ['日','一','二','三','四','五','六'];  
  
    str=str.replace(/yyyy|YYYY/,this.getFullYear());   
    str=str.replace(/yy|YY/,(this.getYear() % 100)>9?(this.getYear() % 100).toString():'0' + (this.getYear() % 100));   
  
    str=str.replace(/MM/,this.getMonth()>9?this.getMonth().toString():'0' + this.getMonth());   
    str=str.replace(/M/g,this.getMonth());   
  
    str=str.replace(/w|W/g,Week[this.getDay()]);   
  
    str=str.replace(/dd|DD/,this.getDate()>9?this.getDate().toString():'0' + this.getDate());   
    str=str.replace(/d|D/g,this.getDate());   
  
    str=str.replace(/hh|HH/,this.getHours()>9?this.getHours().toString():'0' + this.getHours());   
    str=str.replace(/h|H/g,this.getHours());   
    str=str.replace(/mm/,this.getMinutes()>9?this.getMinutes().toString():'0' + this.getMinutes());   
    str=str.replace(/m/g,this.getMinutes());   
  
    str=str.replace(/ss|SS/,this.getSeconds()>9?this.getSeconds().toString():'0' + this.getSeconds());   
    str=str.replace(/s|S/g,this.getSeconds());   
  
    return str;   
}   
```
```javascript{numberLines: true}  
//+---------------------------------------------------  
//| 求两个时间的天数差 日期格式为 YYYY-MM-dd   
//+---------------------------------------------------  
function daysBetween(DateOne,DateTwo)  
{   
    var OneMonth = DateOne.substring(5,DateOne.lastIndexOf ('-'));  
    var OneDay = DateOne.substring(DateOne.length,DateOne.lastIndexOf ('-')+1);  
    var OneYear = DateOne.substring(0,DateOne.indexOf ('-'));  
  
    var TwoMonth = DateTwo.substring(5,DateTwo.lastIndexOf ('-'));  
    var TwoDay = DateTwo.substring(DateTwo.length,DateTwo.lastIndexOf ('-')+1);  
    var TwoYear = DateTwo.substring(0,DateTwo.indexOf ('-'));  
  
    var cha=((Date.parse(OneMonth+'/'+OneDay+'/'+OneYear)- Date.parse(TwoMonth+'/'+TwoDay+'/'+TwoYear))/86400000);   
    return Math.abs(cha);  
}  
```  

```javascript{numberLines: true}  
//+---------------------------------------------------  
//| 日期计算  
//+---------------------------------------------------  
Date.prototype.DateAdd = function(strInterval, Number) {   
    var dtTmp = this;  
    switch (strInterval) {   
        case 's' :return new Date(Date.parse(dtTmp) + (1000 * Number));  
        case 'n' :return new Date(Date.parse(dtTmp) + (60000 * Number));  
        case 'h' :return new Date(Date.parse(dtTmp) + (3600000 * Number));  
        case 'd' :return new Date(Date.parse(dtTmp) + (86400000 * Number));  
        case 'w' :return new Date(Date.parse(dtTmp) + ((86400000 * 7) * Number));  
        case 'q' :return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number*3, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());  
        case 'm' :return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());  
        case 'y' :return new Date((dtTmp.getFullYear() + Number), dtTmp.getMonth(), dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());  
    }  
}  
```

```javascript{numberLines: true}  
//+---------------------------------------------------  
//| 比较日期差 dtEnd 格式为日期型或者有效日期格式字符串  
//+---------------------------------------------------  
Date.prototype.DateDiff = function(strInterval, dtEnd) {   
    var dtStart = this;  
    if (typeof dtEnd == 'string' )//如果是字符串转换为日期型  
    {   
        dtEnd = StringToDate(dtEnd);  
    }  
    switch (strInterval) {   
        case 's' :return parseInt((dtEnd - dtStart) / 1000);  
        case 'n' :return parseInt((dtEnd - dtStart) / 60000);  
        case 'h' :return parseInt((dtEnd - dtStart) / 3600000);  
        case 'd' :return parseInt((dtEnd - dtStart) / 86400000);  
        case 'w' :return parseInt((dtEnd - dtStart) / (86400000 * 7));  
        case 'm' :return (dtEnd.getMonth()+1)+((dtEnd.getFullYear()-dtStart.getFullYear())*12) - (dtStart.getMonth()+1);  
        case 'y' :return dtEnd.getFullYear() - dtStart.getFullYear();  
    }  
}  
```

```javascript{numberLines: true}  
//+---------------------------------------------------  
//| 日期输出字符串，重载了系统的toString方法  
//+---------------------------------------------------  
Date.prototype.toString = function(showWeek)  
{   
    var myDate= this;  
    var str = myDate.toLocaleDateString();  
    if (showWeek)  
    {   
        var Week = ['日','一','二','三','四','五','六'];  
        str += ' 星期' + Week[myDate.getDay()];  
    }  
    return str;  
}  
```

```javascript{numberLines: true}  
//+---------------------------------------------------  
//| 日期合法性验证  
//| 格式为：YYYY-MM-DD或YYYY/MM/DD  
//+---------------------------------------------------  
function IsValidDate(DateStr)   
{   
    var sDate=DateStr.replace(/(^\s+|\s+$)/g,''); //去两边空格;   
    if(sDate=='') return true;   
    //如果格式满足YYYY-(/)MM-(/)DD或YYYY-(/)M-(/)DD或YYYY-(/)M-(/)D或YYYY-(/)MM-(/)D就替换为''   
    //数据库中，合法日期可以是:YYYY-MM/DD(2003-3/21),数据库会自动转换为YYYY-MM-DD格式   
    var s = sDate.replace(/[\d]{ 4,4 }[\-/]{ 1 }[\d]{ 1,2 }[\-/]{ 1 }[\d]{ 1,2 }/g,'');   
    if (s=='') //说明格式满足YYYY-MM-DD或YYYY-M-DD或YYYY-M-D或YYYY-MM-D   
    {   
        var t=new Date(sDate.replace(/\-/g,'/'));   
        var ar = sDate.split(/[-/:]/);   
        if(ar[0] != t.getYear() || ar[1] != t.getMonth()+1 || ar[2] != t.getDate())   
        {   
            //alert('错误的日期格式！格式为：YYYY-MM-DD或YYYY/MM/DD。注意闰年。');   
            return false;   
        }   
    }   
    else   
    {   
        //alert('错误的日期格式！格式为：YYYY-MM-DD或YYYY/MM/DD。注意闰年。');   
        return false;   
    }   
    return true;   
}   
```

```javascript{numberLines: true}  
//+---------------------------------------------------  
//| 日期时间检查  
//| 格式为：YYYY-MM-DD HH:MM:SS  
//+---------------------------------------------------  
function CheckDateTime(str)  
{   
    var reg = /^(\d+)-(\d{ 1,2 })-(\d{ 1,2 }) (\d{ 1,2 }):(\d{ 1,2 }):(\d{ 1,2 })$/;   
    var r = str.match(reg);   
    if(r==null)return false;   
    r[2]=r[2]-1;   
    var d= new Date(r[1],r[2],r[3],r[4],r[5],r[6]);   
    if(d.getFullYear()!=r[1])return false;   
    if(d.getMonth()!=r[2])return false;   
    if(d.getDate()!=r[3])return false;   
    if(d.getHours()!=r[4])return false;   
    if(d.getMinutes()!=r[5])return false;   
    if(d.getSeconds()!=r[6])return false;   
    return true;   
}   
```

```javascript{numberLines: true}  
//+---------------------------------------------------  
//| 把日期分割成数组  
//+---------------------------------------------------  
Date.prototype.toArray = function()  
{   
    var myDate = this;  
    var myArray = Array();  
    myArray[0] = myDate.getFullYear();  
    myArray[1] = myDate.getMonth();  
    myArray[2] = myDate.getDate();  
    myArray[3] = myDate.getHours();  
    myArray[4] = myDate.getMinutes();  
    myArray[5] = myDate.getSeconds();  
    return myArray;  
}  
```

```javascript{numberLines: true}  
//+---------------------------------------------------  
//| 取得日期数据信息  
//| 参数 interval 表示数据类型  
//| y 年 m月 d日 w星期 ww周 h时 n分 s秒  
//+---------------------------------------------------  
Date.prototype.DatePart = function(interval)  
{   
    var myDate = this;  
    var partStr='';  
    var Week = ['日','一','二','三','四','五','六'];  
    switch (interval)  
    {   
        case 'y' :partStr = myDate.getFullYear();break;  
        case 'm' :partStr = myDate.getMonth()+1;break;  
        case 'd' :partStr = myDate.getDate();break;  
        case 'w' :partStr = Week[myDate.getDay()];break;  
        case 'ww' :partStr = myDate.WeekNumOfYear();break;  
        case 'h' :partStr = myDate.getHours();break;  
        case 'n' :partStr = myDate.getMinutes();break;  
        case 's' :partStr = myDate.getSeconds();break;  
    }  
    return partStr;  
}  
```

```javascript{numberLines: true}  
//+---------------------------------------------------  
//| 取得当前日期所在月的最大天数  
//+---------------------------------------------------  
Date.prototype.MaxDayOfDate = function()  
{   
    var myDate = this;  
    var ary = myDate.toArray();  
    var date1 = (new Date(ary[0],ary[1]+1,1));  
    var date2 = date1.dateAdd(1,'m',1);  
    var result = dateDiff(date1.Format('yyyy-MM-dd'),date2.Format('yyyy-MM-dd'));  
    return result;  
}  
```

```javascript{numberLines: true}  
//+---------------------------------------------------  
//| 取得当前日期所在周是一年中的第几周  
//+---------------------------------------------------  
Date.prototype.WeekNumOfYear = function()  
{   
    var myDate = this;  
    var ary = myDate.toArray();  
    var year = ary[0];  
    var month = ary[1]+1;  
    var day = ary[2];  
    document.write('< script language=VBScript\> \n');  
    document.write('myDate = Datue(''+month+'-'+day+'-'+year+'') \n');  
    document.write('result = DatePart('ww', myDate) \n');  
    document.write(' \n');  
    return result;  
}  
```

```javascript{numberLines: true}  
//+---------------------------------------------------  
//| 字符串转成日期类型   
//| 格式 MM/dd/YYYY MM-dd-YYYY YYYY/MM/dd YYYY-MM-dd  
//+---------------------------------------------------  
function StringToDate(DateStr)  
{   
  
    var converted = Date.parse(DateStr);  
    var myDate = new Date(converted);  
    if (isNaN(myDate))  
    {   
        //var delimCahar = DateStr.indexOf('/')!=-1?'/':'-';  
        var arys= DateStr.split('-');  
        myDate = new Date(arys[0],--arys[1],arys[2]);  
    }  
    return myDate;  
} 
```
 

若要显示:当前日期加时间(如:2012-06-12 12:00)
```javascript{numberLines: true}
function CurentTime()
    { 
        var now = new Date();
       
        var year = now.getFullYear();       //年
        var month = now.getMonth() + 1;     //月
        var day = now.getDate();            //日
       
        var hh = now.getHours();            //时
        var mm = now.getMinutes();          //分
       
        var clock = year + "-";
       
        if(month < 10)
            clock += "0";
       
        clock += month + "-";
       
        if(day < 10)
            clock += "0";
           
        clock += day + " ";
       
        if(hh < 10)
            clock += "0";
           
        clock += hh + ":";
        if (mm < 10) clock += '0'; 
        clock += mm; 
        return(clock); 
    }
 
// 日期加上天数得到新的日期
function addday(days) {
    var dt = "2016-02-28";
    dt = dt.replace('-', '/');//js不认2011-11-10,只认2011/11/10
    var t1 = new Date(new Date(dt).valueOf() + days * 24 * 60 * 60 * 1000);// 日期加上指定的天数
    var month;
    var day;
    if ((t1.getMonth() + 1) < 10) {
//                alert("0"+(t1.getMonth() + 1));
        month = "0" + (t1.getMonth() + 1);
    }
    else {
        month = t1.getMonth() + 1;
    }
    if (t1.getDate() < 10) {
        day = "0" + t1.getDate();
    }
    else {
        day = t1.getDate();
    }
//            var ttt=  t1.getFullYear() + "-" + (t1.getMonth() + 1) + "-" + t1.getDate();
    var ttt = t1.getFullYear() + "-" + month + "-" + day;
    alert(ttt);
}
addday(2);
```

























