/***获取注册页面的数组数据***/
	/***获取注册页面的数组*/
	var loginLocal = localStorage.getItem("regList"),
		/***把数组转化为json格式*/
		loginJson = JSON.parse(loginLocal);
		/***给用户名一个监听事件***/
		$("#email").change(function(){
			var email = $("#email").val();
			for(var i=0;i<loginJson.length;i++){
				/***判断用户名的值是否等于注册页的用户名
				 * 不等则提示并不跳转
				 * 密码一样原理
				 * ***/
				if(email==loginJson[i].name){
					$("#email_tip").css("visibility","hidden")
					$("#password").change(function(){
						var paw = $("#password").val();
						for(var j=0;j<loginJson.length;j++){
							if(paw==loginJson[i].paw){
								$("#password_tip").css("visibility","hidden")
								return false;
							}else{
								$("#password_tip").css("visibility","visible")
							}
						}
					});
					return false;
				}else{
					$("#email_tip").css("visibility","visible")
				}
				
			}
		})
	
	var loginName;
	$("#submit").click(function(){
		var emailV = $("#email").val(),
			passwordV = $("#password").val(),
			code = $("#code").val()
			
		if((emailV=="")||(passwordV=="")||(code=="")){
			alert("必填项不能为空")
			return false;
		}
		for(var i=0;i<loginJson.length;i++){							
							if(emailV==loginJson[i].name){
								$("#email_tip").css("visibility","hidden");
								if(passwordV==loginJson[i].paw){
									/***存储帐号***/
										loginName=emailV;
										localStorage.setItem("loginName",JSON.stringify(loginName))
										window.location="user.html";
								}else{
									return false;
								}
								}else{
									$("#email_tip").css("visibility","visible");
									return false;
								}
								return false;
							}
						$("#email_tip").css("visibility","visible");
						return false;
	})
