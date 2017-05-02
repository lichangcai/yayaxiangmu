$(function(){
	var Name = JSON.parse(localStorage.getItem("loginName"))
	if(Name!=null){
		$(".header_top .top ul>li:nth-child(2)").text(Name);
		$(".header_top .top ul>li:nth-child(4)").text("安全退出");
		
		if($(".header_top .top ul>li:nth-child(2)").text()==Name){
			
			$(".header_top .top ul>li:nth-child(2)").click(function(){
				window.setTimeout("window.location='user.html'")
			})
		}
	}
	if($(".header_top .top ul>li:nth-child(4)").text()=="安全退出"){
		$(".header_top .top ul>li:nth-child(4)").click(function(){
			localStorage.setItem("loginName",null)
			window.setTimeout("window.location='login.html'")
		})
	}
	if($(".header_top .top ul>li:nth-child(2)").text()=="登录"){
		$(".header_top .top ul>li:nth-child(2)").click(function(){
			window.setTimeout("window.location='login.html'")
		})
	}
	if($(".header_top .top ul>li:nth-child(4)").text()=="注册"){
		$(".header_top .top ul>li:nth-child(4)").click(function(){
			window.setTimeout("window.location='register.html'")
		})
	}
})
