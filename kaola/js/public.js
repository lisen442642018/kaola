//定义一个函数  功能实现通过id查找页面元素  返回值就是一个页面元素
function $id(id){
	return document.getElementById(id);
}
//定义一个函数 功能返回创建的元素
function create( ele ){
	return document.createElement( ele );
}

//获取任意区间整数值
function rand( min,max ){
	return Math.round( Math.random()*(max-min) + min )
}

//获取随机的颜色值
function getColor(){
	var str = "0123456789abcdef";
	//从字符串中随机取出六个字符 进行拼接
	//下标范围 ： 0--15
	var color = "#";
	for( var i = 1 ; i <= 6 ; i++ ){
		color += str.charAt( rand(0,15) );//根据随机下标得到对应的字符
	}
	return color;
}

//自定义日期时间格式  
function dateToString(now){
	var year = now.getFullYear();
	var month =toTwo(  now.getMonth()+1 );
	var d =toTwo(  now.getDate() );
	var h = toTwo( now.getHours() ) ;
	var m = toTwo( now.getMinutes() );
	var s = toTwo( now.getSeconds() );
	return year+"-"+month+"-"+d + " " + h + ":" + m + ":" +s;
}
function toTwo( str ){
	return str<10 ? "0"+str : str;
}

//将字符串转成日期时间格式
function stringToDate( str ){
	return new Date( str );
}

//封装时间差函数 ： 
function diff(start,end){
	return (end.getTime()-start.getTime())/1000;
}

