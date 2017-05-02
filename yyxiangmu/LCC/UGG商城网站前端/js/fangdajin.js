$(document).ready(function(){
			$("#box").html("<img />");
					$("#box").css({"display":"none"})
					$("#box img").attr("src","img/p_r1.jpg").css({"position":"absolute","width":"1674px"})
					$(".change_box_bottom dd").click(function(){
						var src = $(this).find("img").attr("src");
						$("#box img").attr("src",src).css({"position":"absolute","width":"1674px"})
					})
					$("#smll_box").mouseover(function(){
						$("#box").stop(true,true).fadeIn(300)
						$("#box1").stop(true,true).fadeIn(300)
					})
					$("#smll_box").mouseout(function(){
						$("#box").stop(true,true).fadeOut(300)
						$("#box1").stop(true,true).fadeOut(300)
					})
					$("#smll_box").mousemove(function(e){
						var imgX=e.pageX;
						var imgY=e.pageY;
						var smllLeft=$("#smll_box").offset().left;
						var smllTop=$("#smll_box").offset().top;
						var box1Left=imgX-smllLeft-$("#box1").innerWidth()/2
						var box1Top=imgY-smllTop-$("#box1").innerHeight()/2
						if(box1Left<0){
							box1Left=0;
						}else if(box1Left>($("#smll_box").innerWidth()-$("#box1").innerWidth())){
							box1Left=$("#smll_box").innerWidth()-$("#box1").innerWidth();
						}
						if(box1Top<0){
							box1Top=0;
						}else if(box1Top>($("#smll_box").innerHeight()-$("#box1").innerHeight())){
							box1Top=$("#smll_box").innerHeight()-$("#box1").innerHeight()
						}
						$("#box1").css({left:box1Left+"px",top:box1Top+"px"})
						$("#box img").css({left:-box1Left*3+"px",top:-box1Top*3+"px"})
					})
		})