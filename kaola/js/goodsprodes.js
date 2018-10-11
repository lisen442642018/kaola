$.ajax({
	type: "get",
	url: "data.json",
	async: true,
	success: function(json) {

		var str = ""
		for(var attr in json) {
			var titleStr = "";
			var conStr = "";
			/*console.log(attr)*/
			titleStr += `<div class="goods">
				<div class="goodsTop" style="color: rgb(255, 255, 255);
      				background-color: rgb(227, 20, 54);" cname = ${attr}>${json[attr].name}
      			</div>
      			
          	
				`;
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
      							<button class="btn" data-name="${pro.name}" data-price="${pro.price}" data-src="${pro.src}"><a href="product.html?name=${pro.src},${pro.name},${pro.price}" target="_blank">立即购买</a></button>
      						</p>
      						</div>
      					</li>
      				</ul>
      				
      			</div>	
					`
			}
			str += titleStr + conStr + "</div>";

		}
		
			
		/*console.log(str)*/
		$(".m-goods").html(str);

	}
	
});
/*$(".goods-li").on("click", "button", function() {
	console.log(lala);
				var arr=[];
				var flag = true;
				var json = {
				
				src : $(this).data("src"),
				name : $(this).data("name"),
				price : $(this).data("price"),
				count : 1
					
			}
				var brr = getCookie("shoplist");
				if(brr.length !=0){
					arr=brr;
					for( var i = 0 ; i < arr.length ; i++ ){
					if( json.id == arr[i].id ){  
						arr[i].count++;
						flag = false;
					}
				}
				}
				if( flag ){
				//将json存入到数组中
				arr.push( json );
			}
			setCookie( "shoplist",JSON.stringify( arr ) );
			if( !confirm("点击确定，继续购物；点击取消，跳转到购物车") ){
				//页面跳转
				location.href = "shopcar.html";
			}

	}
   )
		*/