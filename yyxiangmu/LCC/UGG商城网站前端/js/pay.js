$(function(){
				$('.input-list').click(function(){
					if(!$('.input-list input').eq(5).val()==""){
						$('.input-list input').eq(5).focus()
					}else{
						$('.input-list input').eq(0).focus()
					}
					
				})
				var num ;
				$('.input-list input').keyup(function(e){
					if(e.keyCode >= 48 && e.keyCode <= 57||e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode == 8){
						var index = $(this).index()
						switch(e.keyCode ){
							case 48:
								num = 0;
								break;
							case 49:
								num = 1;
								break;
							case 50:
								num = 2
								break;
							case 51:
								num = 3
								break;
							case 52:
								num = 4
								break;
							case 53:
								num = 5
								break;
							case 54:
								num = 6
								break;
							case 55:
								num = 7
								break;
							case 56:
								num = 8
								break;
							case 57:
								num = 9
								break;
							case 96:
								num = 0;
								break;
							case 97:
								num = 1;
								break;
							case 98:
								num = 2
								break;
							case 99:
								num = 3
								break;
							case 100:
								num = 4
								break;
							case 101:
								num = 5
								break;
							case 102:
								num = 6
								break;
							case 103:
								num = 7
								break;
							case 104:
								num = 8
								break;
							case 105:
								num = 9
								break;
						}
						if(!$('.input-list input').eq(index).val()==""){
							$('.input-list input').eq(index).val(num)
							index++;
							$('.input-list input').eq(index).focus()
						}
						
						//按下删除键      keyCode键码数
						if(e.keyCode == 8){
							index = $(this).index()
							if(!$('.input-list input').eq(index-1).val()==""){
								$('.input-list input').eq(index-1).focus()
								if(index==0){
									$('.input-list input').eq(0).val("")
									$('.input-list input').eq(index).focus()
								}
							}
							
						}
					}else{
						$('.input-list input').eq(0).val("")
						return ;	
					}
				})
				$("#sub").click(function(){
	        	var pass1 = $(".input-list #password1").val();
	        	var pass2 = $(".input-list #password2").val();
	        	var pass3 = $(".input-list #password3").val();
	        	var pass4 = $(".input-list #password4").val();
	        	var pass5 = $(".input-list #password5").val();
	        	var pass6 = $(".input-list #password6").val();
	        	
	        		if(pass1!=""||pass2!=""||pass3!=""||pass4!=""||pass5!=""||pass6!=""){
	        			
	        			if(pass1==1&&pass2==1&&pass3==1&&pass4==1&&pass5==1&&pass6==1){
	        				$(".shibai").css("display","none");
	        				$(".quanping").css("display","block");
	        				
	        			}else{
	        				$(".shibai").css("display","block");
	        				$(".quanping").css("display","none");
	        				
	        				
	        				
	        			}
	        			
	        		}else{
	        			
	        			alert("请输入密码")
	        			
	        		}
	        		
	        	})
			})