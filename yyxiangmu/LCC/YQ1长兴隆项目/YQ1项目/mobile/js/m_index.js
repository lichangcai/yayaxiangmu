

	
	$(document).ready(function(){
		
		//innerHeight():该jQuery函数用于获取元素的高度,单位是像素(px)
			var imgHeight = $(".index_banner #bd ul li img").innerHeight();
			//alert("图片宽度是:"+imgHeight);
			$(".index_banner #bd ul").css({"height":imgHeight+"px"});
			$("a").attr("data-ajax","false");
    		$(".ui-loader").remove();
		   
		   
		   
		/*length:返回元素的数量值*/
		var len = $(".index_banner  #bd li").length;
		/*innerWidth():能够获取当前窗口的宽度，当浏览器宽度调整时，这个值也会发生变化*/
		var winWidth = $(window).innerWidth();
		var num = 0;
		var bool = true;
		/*设置ul宽度：各li元素中图片宽度总和*/
		$(".index_banner  #bd ul").css({"width":len*winWidth+"px"});
		/*设置li宽度:把当前窗口宽度设置为li元素*/
		$(".index_banner #bd li").css({"width":winWidth+"px"});
		
		$(".index_banner #hd li").eq(0).addClass("on");
		
		/*写一个for循环，通过该循环让图片进行排序*/
		for(var i=0;i<len;i++){
			
			$(".index_banner  #bd li").eq(i).css({left:winWidth*i+"px"});
			
		}
		
		/*swipeleft事件:是指当手指在向左进行拖拽的时候会触发*/
		var a=0;
		$(".index_banner  #bd li").on("swipeleft",function(){
			
			if(bool){
				
		     	bool =false;
		     	
				a=a+1;
				if(a>len-1){
					a = 0;
				}
				
				/*当用户向左拖拽时，当前banner图向左移动一个屏宽的位置*/
				$(".index_banner  #bd li").eq(num).animate({"left":-winWidth+"px"})
				$(".index_banner #hd li").removeClass("on").eq(a).addClass("on");
				
				
				/*图片向左移动一个屏宽后，后一
				 * 张图片要补上原来的位置*/
				$(".index_banner #bd li").eq(num+1).animate({"left":"0px"},function(){
					bool = true;
				})
				
				
				
				
				/*重新计算图片的位置*/
				for(var i=1;i<len;i++){
					$(".index_banner  #bd li").eq(i).css({"left":winWidth*(i-1)+"px"})
					
				}
				
				
				/*把li元素拼接到ul列表中*/
				$(".index_banner  #bd li").eq(num).appendTo(".index_banner  #bd ul");
			}
		})
		
		/*swiperight:是指当手指在向右进行拖拽的时候会触发*/
		$(".index_banner  #bd li").on("swiperight",function(){
			if(bool){
				bool=false;
				a=a-1;
				if(a<0){
					a = len-1;
				}
				
				/*向右进行拖拽时，left:屏宽*1*/
				$(".index_banner  #bd li").eq(num).animate({"left":winWidth*(num+1)+"px"});
				$(".index_banner #hd li").removeClass("on").eq(a).addClass("on");
				/*把最后一张图片移动到第一张的位置*/
				$(".index_banner  #bd li").eq(len-1).css({"left":-winWidth+"px"}).animate({"left":"0px"},function(){
					bool=true;
				})
				/*重新计算图片的位置*/
				for(var i=1;i<len-1;i++){
					$(".index_banner #bd li").eq(i).css({"left":winWidth*(i+1)+"px"});
				}
				$(".index_banner  #bd li").eq(len-1).prependTo(".index_banner  #bd ul");
			}
		})

 

	})

