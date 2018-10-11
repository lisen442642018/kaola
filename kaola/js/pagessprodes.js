$.ajax({
	type: "get",
	url: "pages.json",
	async: true,
	success: function(json) {

		var str = ""
		for(var attr in json) {
			var titleStr = "";
			var conStr = "";
			/*console.log(attr)*/
			titleStr += `<div class="goods">
				<div class="goodsTop" style="color: rgb(255, 255, 255);
      				background-color: rgb(19, 24, 44);" cname = ${attr}>${json[attr].name}
      			</div>`;
			for(var i = 0; i < json[attr].list.length; i++) {
				var pro = json[attr].list[i];
				conStr += `
					
					<div class="goods-product">
      				<ul class="goods-ul">
					<li class="goods-li">
      						<div class="goods-li-border">
      						<img src="img/${pro.src}" />
      						<p class="goods-title">${pro.name}</p>
      						<p class="goods-title1">${pro.guide}</p>
      						<p class="goods-title2"><span>${pro.price}</span><s>${pro.oldPrice}</s>
      							<button class="btn"><a href="product.html?name=${pro.src},${pro.name},${pro.price}" target="_blank">立即购买</a></button>
      						</p>
      						</div>
      					</li>
      				</ul>
      				
      			</div>	
					`
			}
			str += titleStr + conStr + "</div>";
		}
		/*setTimeout(function() {
			$(".goods-li").on("click", $(".btn"), function() {
				console.log(1);
				location.href="product.html";
			})
		}, 500);*/
		/*console.log(str)*/
		$(".m-goods").html(str);

	}
});

