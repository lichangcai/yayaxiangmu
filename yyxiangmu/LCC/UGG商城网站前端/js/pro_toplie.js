/***颜色的默认值***/
$(".shop_top>ul>li>p").find("a").click(function(){
	$(this).addClass("on")
	$(this).siblings("a").removeClass("on")
})

/*价格那里的输入框判断*/
var text = document.getElementsByClassName("text");
	var c =0;
	text[0].onfocus=function(){
		c=this.value;
	}
	text[0].onchange=function(){
		if(parseInt(this.value)==this.value){
			if(parseInt(this.value)<=0){
				this.value=c;
			}else{
				this.value=parseInt(this.value);
			}
		}else{
			this.value=c;
		}
	}
	
	var d = 0;
	text[1].onfocus=function(){
				d=this.value;
	}
	text[1].onchange=function(){
		var e = text[0].value;
		if(parseInt(this.value)==this.value){
			if(this.value>e){
				this.value = parseInt(this.value);
			}else{
				this.value="";
			}
			
		}else{
			this.value="";
		}
	}
/*****/