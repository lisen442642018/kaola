var $ulist = $(".bannerImg li");
	var $olist = $("ol li");
	var timer = null;
	var index = 0;
	timer = setInterval(autoplay,3000);
	function autoplay(){
		index++;
		if( index==$olist.size()){
			index=0;
		}
		
		$olist.eq(index).addClass("current").siblings().removeClass("current");
		$ulist.eq(index).fadeIn(1500).siblings().fadeOut(1500);
	}
	$olist.mouseenter(function(){
		clearInterval(timer);
		index = $(this).index()-1;
		autoplay();
	})
	$olist.mouseleave(function(){
		timer = setInterval(autoplay,3000);
	})