$(".showImage").on({
	mouseenter:function(){
		$(".shadow").show();
		$(".showimgbig").show();
	},
	mouseleave:function(){
		$(".shadow").hide();
		$(".showimgbig").hide();
	},
	mousemove:function(e){
		var e = e || event;
		var x = e.pageX - $(".shadow").width()/2-$(this).offset().left;
 		var y = e.pageY - $(".shadow").height()/2-$(this).offset().top;
		var maxL = $(this).width()-$(".shadow").width();
 		var maxT = $(this).height()-$(".shadow").height();
		x = Math.min( Math.max(0,x),maxL );
 		y = Math.min( Math.max(0,y),maxT );
		$(".shadow").css({
		 				left : x,
		 				top : y
		 			})
		var bigImgLeft = x*$(".showimgbig img").width()/$(this).width();
 		var bigImgTop = y*$(".showimgbig img").height()/$(this).height();
		$(".showimgbig img").css({
 				left : -bigImgLeft,
 				top : -bigImgTop
 			})


	}
})
