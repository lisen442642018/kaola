$("#cutLeft").click(function(){
	$("#login-center").show();
		$("#cutLeft").css({"color":"#e31436"});
	$(".login-center-none").hide();
	$("#cutRight").css({"color":"#000"});
}
	
);
$("#cutRight").click(function(){
	$("#login-center").hide();
	$("#cutLeft").css({"color":"#000"});
	
	$(".login-center-none").show();
	$("#cutRight").css({"color":"#e31436"});
}
	
);
$("#phoneLogin").click(function(){
	$(".loginCenter-right").hide();
	$(".regWrap").show();
})
$("#zhuche").click(function(){
	$(".loginCenter-right").show();
	$(".regWrap").hide();
})

