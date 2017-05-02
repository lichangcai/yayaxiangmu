 window.onresize=function(){
	resize();
 }
 window.onload = function(){
 	
    resize();
 }
   function resize(){  
       document.getElementsByTagName("html")[0].style.fontSize = 
       document.body.clientWidth/7.2+"px";
    };  
		