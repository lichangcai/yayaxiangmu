
					/*用户名的验证方法*/
//				var reg2 = /^[A-Za-z0-9]+$/;
//					var checkName = function(v){
//					var reg2 = /^[A-Za-z0-9]+$/;
//					if(reg2.test(v)){
//						 $('#nameTip').popover('hide');
//					}
//					else{
//						 $('#nameTip').popover('show');
//					}
//				}
//					用户名的验证方法end
//		这是密码验证的方法
//		var reg3 = /^[a-z0-9_-]{6,8}$/;
//		var checkPassword = function(v){
//			var reg3 = /^[a-z0-9_-]{6,8}$/;
//			if(reg3.test(v)){
//				 $('#passwordTip').popover('hide');
//			}else{
//				 $('#passwordTip').popover('show');
//			}
//		}
//		这是密码验证的方法end
//			$("#okpaw").blur(function(){
//					
//					    var paw = $("#paw").val()
//						var okpaw = $("#okpaw").val()
//						
//						if( paw != okpaw ){
//							 
//							 $('#okpawTip').popover('show');
//						}else{
//							 $('#okpawTip').popover('hide');
//						}
//					
//				}) 
	    /**
		 * 进行登录邮箱合法性检查函数 
		 * admin168@163.com
		 */
//		var reg1 = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
//		var checkEmail = function(v){
//			var reg1 = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
//			if(reg1.test(v)){
//				 $('#emailTip').popover('hide');
//			}else{
//				 $('#emailTip').popover('show');
//			}
//		}
		
//		手机号码验证
//			var reg4 = /^1\d{10}$/;
//					var checkphone = function(v){
//						var reg4 = /^1\d{10}$/;
//						if(reg4.test(v)){
//							 $('#phoneTip').popover('hide');
//						}else{
//							 $('#phoneTip').popover('show');
//						}
//					}
//					
//					end

//这里是验证手机登陆的全部代码
//		var checkLogin = function(){
//					var Email = reg1.test($("#Email").val())
//					var name = reg2.test($("#name").val())
//					var paw1 = reg3.test($("#paw").val())
//					var okpaw1 = $("#okpaw").val()
//				   var paw2 = $("#paw").val()
//					var phone1 = reg4.test($("#phone").val())
//					var code = $("#code").val()
//					if( !Email || !name || !paw1 || !phone1 || code==" " || paw2 != okpaw1 ){
//						return false;
//					}else if(!$("#dian").is(':checked')){
//						return false;
//					}
//					return true;
//				}

/*定义一个值给那个立即注册的代码*/


	
var regList =[];
		var regLocal = localStorage.getItem('regList'),
			regLocalJson = JSON.parse(regLocal)  //把获取到的字符串数据转换成数组对象
			if(regLocalJson != null){ //判断本地存储localStorage是否存在proList的值
				for(var i = 0;i<regLocalJson.length ;i++){
					regList.push(regLocalJson[i]) //把数组对象push进数组里面
				}
			}

$(".zhuce").click(function(){
				
	  			var reg1 = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
	      		var reg2 = /^[A-Za-z0-9]+$/;
	      		var reg3 = /^[a-z0-9_-]{6,8}$/;
	      		var reg4 = /^1\d{10}$/;
	      		
	     		
				var okpaw1V = $("#okpaw").val()
				var paw2V = $("#paw").val()
				var phoneV = $("#phone").val();
				var codeV = $("#code").val()
				var username = $("#name").val();
				var pawV = $("#paw").val();
				var EmailV = $("#Email").val();
				
				if( (okpaw1V=="") || (paw2V=="") || (phoneV=="") || (codeV=="") || (EmailV=="") || (username=="") || ($("#dian").prop("checked")==false) ){
					alert("必填项不能为空")
					return false;
				}
				else if(!reg2.test(username)){
					$('#nameTip').css("visibility","visible");
					$('#emailTip').css("visibility","hidden");
					$('#passwordTip').css("visibility","hidden");
					$('#phoneTip').css("visibility","hidden");
					$('#okpawTip').css("visibility","hidden");
					return false;
				}
				else if(!reg3.test(pawV)){
					$('#nameTip').css("visibility","hidden");
					$('#emailTip').css("visibility","hidden");
					$('#passwordTip').css("visibility","visible");
					$('#phoneTip').css("visibility","hidden");
					$('#okpawTip').css("visibility","hidden");
					return false;
				}
				else if(paw2V != okpaw1V){
					$('#nameTip').css("visibility","hidden");
					$('#emailTip').css("visibility","hidden");
					$('#passwordTip').css("visibility","hidden");
					$('#phoneTip').css("visibility","hidden");
					$('#okpawTip').css("visibility","visible");
					return false;
				}
				else if(!reg1.test(EmailV)){
					$('#nameTip').css("visibility","hidden");
					$('#emailTip').css("visibility","visible");
					$('#passwordTip').css("visibility","hidden");
					$('#phoneTip').css("visibility","hidden");
					$('#okpawTip').css("visibility","hidden");
					return false;
				}
				else if(!reg4.test(phoneV)){
					$('#nameTip').css("visibility","hidden");
					$('#emailTip').css("visibility","hidden");
					$('#passwordTip').css("visibility","hidden");
					$('#phoneTip').css("visibility","visible");
					$('#okpawTip').css("visibility","hidden");
					return false;
				}else{
					alert("注册成功")
				}
				
	      regLocaDate(username,paw2V);
})
				function regLocaDate(name,paw){
				var register={
					name:name,
					paw:paw
				}
			
			regList.push(register);
			localStorage.setItem("regList",JSON.stringify(regList));
			}
					console.log(localStorage.getItem('regList'))