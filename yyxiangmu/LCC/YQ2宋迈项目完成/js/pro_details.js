
  
  
   /* $(document).ready(function(){
	
		var small = $(".change_box_bottom li img");
		var big = $(".box_top_img li");
		small.click(function(){
			var img_num = $(this).attr("img_num");
			big.each(function(index,element){
					if(img_num == index){
						//alert(index);
					}else{
						big.eq(index).fadeOut();
					}
				big.eq(img_num).fadeIn();
		   });
		
       });
	   
	});*/
	
	$(document).ready(function(){
		var small = $(".change_box_bottom li img");
		var big = $(".box_top_img li");	 
		small.click(function(){
		
			var img_num = $(this).attr("img_num");
			big.each(function(index,element){
			  
				if(img_num == index){
					 $(".change_box_bottom li").removeClass().eq(index).addClass("imgon");
				}else{
					big.eq(index).fadeOut();
				}
				big.eq(img_num).fadeIn();
			
			});
		});
    });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  