


function GetQueryString(name)

{
     
var  reg = new  RegExp("(^|&)" +
	name + "=([^&]*)(&|$)");
    
var  r = window.location.search.substr(1).match(reg);

     
if(r != null) return   unescape(r[2]);
return  null;
}

---------------------
/*
本文来自 zoopzz 的CSDN 博客 ，全文地址请点击：https://blog.csdn.net/zoopzz/article/details/78801821?utm_source=copy */