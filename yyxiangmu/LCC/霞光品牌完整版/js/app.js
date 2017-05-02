angular.module('myApp',['ionic'])
    .config(function($stateProvider,$httpProvider) {
		$stateProvider
		//引导页
		    .state('guide',{
				 templateUrl:'./guide.html',
				controller:'SlideController'
			})
		//首页
			.state('home',{
				 templateUrl:'./home.html',
				controller:'homeController'
			})
	    //分类
			.state('prostyle',{
				 templateUrl:'./pro_categories.html',
				controller:'prostyleController'
			})
		//购物车
			.state('shop_cart',{
				 templateUrl:'./shop_cart.html',
				controller:'shop_cartController'
			})
		//会员中心
			.state('user',{
				 templateUrl:'./user.html',
				controller:'userController'
			})
		//产品中心详情
			.state('pro_details',{
				 templateUrl:'./pro_details.html',
				controller:'pro_detailsController'
			})
		//注册详情
			.state('register',{
				 templateUrl:'./register.html',
				controller:'regController'
			})
		//登录页面
			.state('login',{
				 templateUrl:'./login.html',
				controller:'logController'
			})
		//订单详情
			.state('order',{
				 templateUrl:'./order.html',
				controller:'orderController'
			})
		//支付页面
			.state('pay',{
				 templateUrl:'./pay.html',
				controller:'payController'
			})
		//支付失败
			.state('pay_failure',{
				 templateUrl:'./pay_failure.html',
				controller:'pay_failureController'
			})
        //支付成功
			.state('pay_success',{
				 templateUrl:'./pay_success.html',
				controller:'pay_successController'
			})
		//确认订单
			.state('sure_order',{
				 templateUrl:'./sure_order.html',
				controller:'sure_orderController'
			})
		//搜索页面
		.state('pro_search',{
				 templateUrl:'./pro_search.html',
				controller:'pro_searchController'
		    })
		.state('pro_list',{
				 templateUrl:'./pro_list.html',
				controller:'pro_listController'
		    })


   })
.controller("startController",function($scope,$state,$ionicHistory,$timeout){
	$state.go('guide');
	$scope.backs = function(){
		$ionicHistory.goBack();
		
		
	}
		

	
})


/*****************************引导页******************************/
.controller('SlideController', function($scope, $ionicSlideBoxDelegate) {
			})


                //这是首页的
.controller('homeController',function($scope, $http,$timeout){
		 $http.get("js/home.json").success(function( res ){
	   		$scope.obj = res;
	   	})
		 
		 $scope.Insrarch = function(){
		 	 $timeout(function(){
		 		document.getElementById("input").focus();
		 	},500)
		 }
		
		 
		 
		 
		   	
})
               //end
	           //这是那个分类的	   	
.controller('prostyleController',function($scope, $http){
	 $http.get("js/home.json").success(function( res ){
   		$scope.obj = res;
   	
   	})
	 
	 
			 /*这里是选项卡的代码*/
   	$(".frame ul li").removeClass("active")
   	$(".frame ul li").on("click",function(){
   		for(var i =0;i<$(".frame ul li").length;i++){
   			$(".frame ul li")[i].index = i;
   		}
   		var indexs = this.index
   		
   		$(".frame ul li").removeClass("active")
   		$(".frame ul li").eq(indexs).addClass("active")
   		/*这里是那个定义值的代码*/
   		
	   	var o =$(".frame ul li").eq(indexs).text()	   	
	   	$scope.pro_sreachVal =o
   	})
		   	/*end*/

	$(".frame").hide();
	 $scope.dianji = function(){
	 	$(".frame").slideDown("slow")
	 }
	 
	 	   	
		   	
		   	
		   	
		   	
	})
//分类页面end

/*************************产品详情******************************/
.controller('pro_detailsController',function($scope, $http){
			
//		   	/*这是头部的点击事件;用angularjs获取的数据可以不用%符号，就用下划线*/
//		   	/*这句话是封装好的函数把它返回到之这里*/
		   	function $(ele){
				return angular.element(document.querySelectorAll(ele))
		   }
		   	$http.get("js/pro_list.json").success(function( res ){
		   		$scope.obj = res;   	
		   	})
		   	/*点击加入购物车*/
		   	$scope.pro_addCars = function(){
		   		var shop_val = $("#prd_num").val();
		   		console.log(shop_val)
		   		var num =5;
		   		shopCart.addProData($scope.obj[num],shop_val)
		   	}
		 
		  /*判断数量加减*/
		 /*这是定义一个函数等于这个输入框的值*/		 
		var shop_val;
		$scope.pd_focus=function(){
			shop_val = $("#prd_num").val()		
		}
		$scope.pd_blur=function(){
		var shop_val = $("#prd_num").val()
		/*定义一个函数等于正则表达式*/
		var reg =  /^[0-9]*[1-9][0-9]*$/
		if(!reg.test(shop_val)||shop_val<0||shop_val>99){
			shop_val=1
		}
		document.getElementById("prd_num").value = shop_val
		
		}
		 
		 /*这是一个加的数量*/
          $scope.addss= function(){
	          var input= document.getElementById("prd_num").value;
	          var num = parseInt(input)
	          if(num >= 1){
	          	num++
	          }
	          document.getElementById("prd_num").value = num
	          
	         }
          $scope.miunss= function(){
	          var input= document.getElementById("prd_num").value
	          if((input>1) && (input<=99)){
	          	 input--
	          }
	          document.getElementById("prd_num").value = input
	         
	          }
          
          /*选项卡*/
          $(".header_center span").on("click",function(){
		  	for(var i=0;i<$(".header_center span").length;i++){
		  		$(".header_center span")[i].index = i;
		  	}
		  	var indexs =this.index
		  	console.log(indexs)
		  	$(".header_center span").removeClass("active")
		  	$(".header_center span").eq(indexs).addClass("active")
		  	$(".center").css({"display":"none"})
		  	$(".center").eq(indexs).css({"display":"block"})
		  })
          
		  /*这里是分类那里 的切换*/
		 $(".right ol li").removeClass("active")
		  $(".right ol li").on("click",function(){
		  	for( var i=0;i<$(".right ol li").length;i++){
		  		$(".right ol li")[i].index =i;
		  	}
		  	var p =this.index;
		  	console.log(p)
		  	$(".right ol li").removeClass("active")
		  	$(".right ol li").eq(p).addClass("active")
		  })
//		  下面轮播的问题
       $(".c_center ul li").on("click",function(){
       	for(var i =0;i<$(".c_center ul li").length;i++){
       		$(".c_center ul li")[i].index = i;
       	}
        var indexs = this.index
        console.log(indexs)
        $(".c_center ul li").removeClass("active")
        $(".c_center ul li").eq(indexs).addClass("active")
//      这是一个下面内容轮播的切换
        $(".C_center").css({"display":"none"})
        $(".C_center").eq(indexs).css({"display":"block"})
       })      
		})
/*************************产品详情end*****************************/


                        //购物车shop_cartController
.controller('shop_cartController',function($scope, $http,$timeout,$ionicPopup){
		
		function getData(){
			$scope.proData = JSON.parse(localStorage.getItem("cart"));
				if(!$scope.proData){
					$scope.obj = [];
				}else{
					$scope.obj= $scope.proData.product;
				}
		}
		 getData()
		   	/*初始化总额*/
		   	$scope.inToal = {
		   		total:0,
		   		checkAll:false
		   	}
		  
		   	/*计算金额*/
			
		   	function setTotal() {
			   	$scope.inToal.total = 0;	
			   	//定义一个for循坏
			   	if($scope.obj!=undefined){
		   			for( var i=0;i<$scope.obj.length;i++){
			   		    $scope.obj[i].totals=parseInt($scope.obj[i].unmber*parseInt($scope.obj[i].prices))
				   	if($scope.obj[i].checked){
				   		$scope.inToal.total= (parseInt($scope.obj[i].totals)+parseInt($scope.inToal.total)).toFixed(2);
					   	}
				   	}
			   	}
			   
		    }

		   	
			 /*这是购物车那里的加减*/
			/*index是个索引值*/
			$scope.inToal = {
				checkAll : false
			}
		   	/************设置是否全选**************/
		   	function setCheck(){
		   		for( var x=0;x<$scope.obj.length;x++){
		   			if(!$scope.obj[x].checked){
		   				$scope.inToal.checkAll = false;
		   				break
		   			}else{
		   				$scope.inToal.checkAll = true
		   			}		   			
		   		}
		   		setTotal()
		   	}
		   	setCheck()	
		   	/*********设置单选**********/
		   	$scope.check = function(){
		   		for( var x=0;x<$scope.obj.length;x++){
		   			if(!$scope.obj[x].checked){
		   				$scope.inToal.checkAll = false;
		   				break
		   			}else{
		   				$scope.inToal.checkAll = true
		   			}
		   			
		   		}
		   		setTotal()
//		   		这里等等计算价格             
		   	}
		   	/************设置全选*************/
		   	$scope.checkedAll =function(bool){
		   		if($scope.obj!=undefined){
			   		for( var x=0;x<$scope.obj.length;x++){
			   			$scope.obj[x].checked =bool
			   		}	
		   		}		   		
		   		console.log(12345)
		   		setTotal()
		   	}
		   	/*设置加减*/
		   	/*减*/
		   	$scope.miuns = function($index){
		   		var input = $(".prd_num").eq($index).val()
		   		console.log(input)
		   		if(input>1 && input<=99){
		   			input--;
		   			$(".prd_num").eq($index).val(input)
		   		}
		   	$scope.obj[$index].unmber=input
		   	localStorage.setItem("cart",JSON.stringify($scope.proData))
		   	 	setTotal()
		   	
		   	}
		   	/*加*/
		   	$scope.adds = function($index){
		   		var input = $(".prd_num").eq($index).val()
		   		console.log(input)
		   		if(input>=1 && input<99){
		   			input++;
		   			$(".prd_num").eq($index).val(input)
		   		}
		   		$scope.obj[$index].unmber=input
		   		localStorage.setItem("cart",JSON.stringify($scope.proData))
		   		 	setTotal()
		   		
		   	}
		   	 /*判断输入*/
			 var shop_val;
		   	 $scope.pd_focus=function($index){
		   	 	shop_val = $(".prd_num").eq($index).val()
		   	 }
		   	$scope.pd_blur=function($index){
		   		var shop_val = $(".prd_num").eq($index).val()
		   		var reg = /^[0-9]*[1-9][0-9]*$/
		   		if(!reg.test(shop_val)||shop_val<0||shop_val>99){
                shop_val = 1
		   		}
		   			$scope.obj[$index].unmber=shop_val
		   			$(".prd_num").eq($index).val(shop_val);
		   		localStorage.setItem("cart",JSON.stringify($scope.proData))
		   		setTotal()
		   	}
		   	/*结算那里的长度*/
		var vals = document.getElementsByClassName("Settlement")[0];
		if($scope.obj!=undefined){
			 vals.innerHTML = $scope.obj.length
		}
		
		   /*清空购物车*/
		$scope.clean=function(){
		var conf =  confirm("你是否全部清空购物车？");
			if(conf){
			$scope.obj = []
			}	
			/*这里是移除掉本地存储的数据*/
			localStorage.removeItem("cart")
			vals.innerHTML = 0
			setTotal()
		}
		/*结算那里的长度*/
		var vals = document.getElementsByClassName("Settlement")[0];
	if($scope.obj!=undefined){
			 vals.innerHTML = $scope.obj.length
		}
		/*点击结算end*/
		
		/*点击删除*/
		
			$scope.detale=function(index){
				var confirmPopup = $ionicPopup.confirm({
               title: 'Consume Ice Cream',
               template: '请问你确定删除吗？'
             });
             confirmPopup.then(function(res) {
               if(res) {
	                $scope.obj.splice(index,1)
					$scope.proData.product=$scope.obj
					localStorage.setItem("cart",JSON.stringify($scope.proData));
					
					if($scope.obj.length==0){
						localStorage.removeItem("cart")			
					}
				vals.innerHTML = $scope.obj.length
				setTotal()
               } else {
              		return false
               }
             });
			}
             

			/***************自动刷新****************/
			$scope.loads = function(){
				$timeout(function(){		
					getData()
 					setCheck()				
					setTotal()
					 vals.innerHTML = $scope.obj.length
					
				},1000)
				$scope.$broadcast('scroll.refreshComplete');
			}
			
			

		})
/********************会员中心***********************/
.controller('userController',function($scope, $http,$state){
				$http.get("js/home.json").success(function( res ){
			   	$scope.obj = res;
		   	
		   	})
//		   	/*这是头部的点击事件;用angularjs获取的数据可以不用%符号，就用下划线*/
//		   	/*这句话是封装好的函数把它返回到之这里*/
		   	function $(ele){
				return angular.element(document.querySelectorAll(ele))
		    }
		   		//页面数据有更新是，调用执行的函数：getloin;
	        $scope.$on('$stateChangeSuccess', usernames);
		   	$scope.dianji= function(){
		   		$("#haoma").html("游客");
		   		$state.go('login')	
		   	}
		   	
		   	
		   	function usernames(){
		   		var getname = localStorage.getItem("loname");
		   		if(getname){
		   			$("#haoma").html(getname)
		   		}else{
		   			$("#haoma").html("游客")
		   		}
		   	}
		   	usernames()
		   	
		  $(".header_center span").on("click",function(){
			  	for(var i=0;i<$(".header_center span").length;i++){
			  		$(".header_center span")[i].index = i;
			  	}
			  	var indexs =this.index
			  	$(".header_center span").removeClass("active")
			  	$(".header_center span").eq(indexs).addClass("active")
			  	$(".center").css({"display":"none"})
			  	$(".center").eq(indexs).css({"display":"block"})
		  })	 
        $scope.num=1
        $scope.add = function(){
        	//$scope.num++ 这句话是点击那个加号就进行了加1
        if($scope.num>=99){
        		$scope.num=99
        }else
        $scope.num++
        }
        $scope.sub =function(){
        	if($scope.num<=1){
        		$scope.num = 1
        	}else
        	$scope.num--
        }
        
        
		 
		  /*这里是分类那里 的切换*/
		 $(".right ol li").removeClass("active")
		  $(".right ol li").on("click",function(){
			  	for( var i=0;i<$(".right ol li").length;i++){
			  		$(".right ol li")[i].index =i;
			  	}
		  	var p =this.index;
		  	$(".right ol li").removeClass("active")
		  	$(".right ol li").eq(p).addClass("active")
		  })
//		  下面轮播的问题
       $(".c_center ul li").on("click",function(){
	       	for(var i =0;i<$(".c_center ul li").length;i++){
	       		$(".c_center ul li")[i].index = i;
	       	}
	        var indexs = this.index
	        $(".c_center ul li").removeClass("active")
	        $(".c_center ul li").eq(indexs).addClass("active")
	        $(".C_center").css({"display":"none"})
	        $(".C_center").eq(indexs).css({"display":"block"})
       })
       
		})
	   	
/*************************订单end*****************************/
.controller('orderController',function($scope, $http){
			 $http.get("js/home.json").success(function( res ){	   		
		   		$scope.obj = res;
			 })
		   	function $(ele){
				return angular.element(document.querySelectorAll(ele))
		}
		   	$(".box-top ul li a").on("click",function(){
		   		for( var i= 0;i<$(".box-top ul li a").length;i++){
		   			$(".box-top ul li a")[i].index = i;
		   		}
		   		var indexs = this.index
		   		
		   			$(".box-top ul li a").removeClass("active")
		   			$(".box-top ul li a").eq(indexs).addClass("active")
		   			$(".center").css({"display":"none"})
		   			$(".center").eq(indexs).css({"display":"block"})
		   	})
		})

/*************************订单end*****************************/
/*************************支付*****************************/
.controller('payController',function($scope, $http,$state){
			 $http.get("js/home.json").success(function( res ){		
		   		$scope.obj = res;
		  })
         function $(ele){
				return angular.element(document.querySelectorAll(ele))
		}   
		$scope.jiaodian= function(){
			/**********定义一个输入值*****************/
			var passinput =document.querySelectorAll(".input_pass");
			/*****************来一个for循环***********************/
			    for(var i = 0;i<6;i++){
			    	/*******如果passinput的首个空格是空的************/
			    	if(passinput[0].value==""){
			    		passinput[0].focus();
			    	}
			    }
		}
   $scope.ceshi=function(){
   	var passinput =document.querySelectorAll(".input_pass");
	    for(var i=0;i<6;i++){
	 		if(passinput[i].value.length==1){
	 			if(i!=5){
	 				passinput[i+1].focus();
	 			}
	 		}
	 	}
	    var passinput_val0=passinput[0].value
	    console.log(passinput_val0)
	 	var passinput_val1=passinput[1].value
	 	var passinput_val2=passinput[2].value
	 	var passinput_val3=passinput[3].value
	 	var passinput_val4=passinput[4].value
	 	var passinput_val5=passinput[5].value
    
    
	
		$scope.showPopup=function(){
			   /*判断焦点的位置的*/
			  console.log(78)
			if(passinput[5].value!=""){
				if((passinput_val0==1)&&(passinput_val1==1)&&(passinput_val2==1)&&(passinput_val3==1)&&(passinput_val4==1)&&(passinput_val5==1)){
					$state.go('pay_success')
				}else{
					$state.go('pay_failure')
					
				}
			}
		}
	  }
   $(".way label p").removeClass("active")       
        $(".way label p").on("click",function(){
        	for(var i =0;i<$(".way label p").length;i++){
        		$(".way label p")[i].index =i;
        	}
        	var indexs =this.index
        	$(".way label p").removeClass("active")
        	$(".way label p").eq(indexs).addClass("active")
        })
        
		})
/*************************支付end*****************************/
/*************************支付成功*****************************/

.controller('pay_successController',function($scope, $http){
			 $http.get("js/home.json").success(function( res ){
		   		
		   		$scope.obj = res;
		   		
		   		
		   	
		   })
			
         function $(ele){
				return angular.element(document.querySelectorAll(ele))
		}
         $(".way label p").removeClass("active")       
        $(".way label p").on("click",function(){
        	for(var i =0;i<$(".way label p").length;i++){
        		$(".way label p")[i].index =i;
        	}
        	var indexs =this.index
        	$(".way label p").removeClass("active")
        	$(".way label p").eq(indexs).addClass("active")
        })
		})
/*************************支付成功end*****************************/
/*************************支付失败*****************************/
.controller('pay_failureController',function($scope, $http){
			 $http.get("js/home.json").success(function( res ){
		   		
		   		$scope.obj = res;
		   		
		   		
		   	
		   })
			
         function $(ele){
				return angular.element(document.querySelectorAll(ele))
		}
         $(".way label p").removeClass("active")       
        $(".way label p").on("click",function(){
        	for(var i =0;i<$(".way label p").length;i++){
        		$(".way label p")[i].index =i;
        	}
        	var indexs =this.index
        	$(".way label p").removeClass("active")
        	$(".way label p").eq(indexs).addClass("active")
        })
		})
/*************************支付失败end*****************************/


.controller('sure_orderController',function($scope, $http){
			 $http.get("js/home.json").success(function( res ){
		   		$scope.obj = res;
		   	
		   	})
		   	
		})

/******************************产品搜索*********************************/
.controller('pro_searchController', function($scope, $http,$state,$timeout,$interval) {
				$http.get("js/home.json").success(function(res) {
					$scope.obj = res;
				})
				
				$timeout(function(){
				
						document.getElementById("input").focus()
					
				},500)
				function $(ele) {
					return angular.element(document.querySelectorAll(ele))
				}
				$(".p_search ul li").removeClass("active")
				$(".p_search ul li").on("click", function() {
					for(var i = 0; i < $(".p_search ul li").length; i++) {
						$(".p_search ul li")[i].index = i;
					}
					var indexs = this.index
						/*	console.log(this.innerHTML)是打印本文本的意思*/
					console.log(this.innerHTML)
					$(".p_search ul li").removeClass("active")
					$(".p_search ul li").eq(indexs).addClass("active")

					var z = $(".p_search ul li").eq(indexs).text()
					$('.head-top input').val(z)

				})
				$scope.pusearch=function(){
					if($("#input").val()!=""){
						$state.go("pro_list")
					}else{
						alert("请你输入需要搜索的产品")
					}
				}
                 $scope.clean=function(){
                 	$(".all li").css("display","none")
                 }
//               function getFocus(){
                 
//               }
//				getFocus();
//				$scope.$on("$scopeChangeSuccess", getFocus)
				
				
			})
/********************************产品搜索end**********************************/

/************************************产品列表*************************************/
		.controller('pro_listController',function($scope, $http,$timeout){
			$scope.pro_list = [];
			 $http.get("js/home.json").success(function( res ){
		   		$scope.ab = res.pro_list1;
		   		for(var y=0; y<4; y++){
		   			$scope.pro_list.push($scope.ab.shift());
		   		}
		  })
			$http.get("js/home.json").success(function(res) {
					$scope.obj = res;
				})
 
		/*这是一个固定的样式*/ 
		function _(ele){
				return angular.element(document.querySelectorAll(ele))
		}
		_(".box-top ul li a").on("click",function(){
			for(var i =0;i<_(".box-top ul li a").length;i++){
				_(".box-top ul li a")[i].index =i;
			}
			var indexs =this.index;
			console.log(indexs)
			qiue(indexs)
		})
		 $scope.Ansrarch = function(){
		 	 $timeout(function(){
		 		document.getElementById("input").focus();
		 	},500)
		 }
		
		function qiue(indexs){
			_(".box-top ul li a").removeClass("active")
			_(".box-top ul li a").eq(indexs).addClass("active")
			_(".box-bottow ul").css({"display":"none"})
			_(".box-bottow ul").eq(indexs).css({"display":"block"})
		}
		qiue(2);
		/*********************获取的的数据***********************************/
		$scope.pro_addCars = function(index){
		   		var num  =$scope.pro_list[index]
		   		shopCart.addProData(num,1)
		   	}
		/***上拉刷新**/
		
		$scope.moreBool = true;
		$scope.loadMore = function(){
			$timeout(function(){
				for(x = 0;x<4;x++){
					if($scope.ab == 0){
						$scope.moreBool = false;
						break;
					}else{
						$scope.pro_list.push($scope.ab.shift())
					}
					$scope.$broadcast('scroll.infiniteScrollComplete')
				}
			},2000)
		}
		
		})
/********************************产品列表****************************************/
/********************************注册****************************************/
.controller('regController', function($scope, $http,$state,$timeout) {
				$http.get("js/home.json").success(function(res) {

					$scope.obj = res;

				})
            
            function _(ele){
				return angular.element(document.querySelectorAll(ele))
		}  
		  $scope.regbool = {
	   	  	unmber:false,
	   	  	pass:false,
	   	  	code:false
	   	  	
	   	  }
		
		/*手机号*/
		var loginlist = JSON.parse(localStorage.getItem("leglist")) 
		//触发焦点引发的焦点事件
		$scope.text_focus=function(){
		$(".top_pic p:nth-child(1)").html("请输入手机号").css("visibility","visible").css("color","#fff")
		$(".top_pic label:nth-child(2) input" ).placeholder="";
		}
		//离开焦点触发的焦点
		$scope.text_blur = function(){
			//这是定义一个数为触发焦点离开第一个input:的事件
			var text_val = $(".top_pic label:nth-child(2) input").val()
			var reg_phone = JSON.parse(localStorage.getItem("regList"))
			//打印这个事件的
			
			//做个点击事件，判断reg_phone是否为空值
			if(!/^1[3-9]\d{9}$/.test(text_val)){
					$(".top_pic p:nth-child(1)").html("请输入正确的手机号码").css("color","#ff6666")
					 $scope.regbool.unmber = false;
			}else{
				if(reg_phone!=null){
					for(var key in reg_phone){
						if(text_val==reg_phone[key].phone){
							$(".top_pic p:nth-child(1)").html("该用户已存在").css("color","#ff6666")
							 $scope.regbool.unmber = false;
							return false
						}else{
							$(".top_pic p:nth-child(1)").css("visibility","hidden")
							 $scope.regbool.unmber = true;
						}
					}
//					for(var i = 0;i<reg_phone.lenght;i++){
//						if(text_val==reg_phone[i].phone){
//							
//							$(".top_pic p:nth-child(1)").html("该用户已存在").css("color","#ff6666")
//							return false
//						}
//					}
				}else{
					 $scope.regbool.unmber = true;
					$(".top_pic p:nth-child(1)").css("visibility","hidden")
				}
					
			}
//			
			
		}
		//密码那块
		$scope.pass_focus = function(){

			$(".top_pic p:nth-child(3)").html("请输入密码").css("visibility","visible").css("color","#fff")
		    $(".top_pic label:nth-child(4) input").placeholder="";
		}
		$scope.pass_blur=function(){
			var pass_val =$(".top_pic label:nth-child(4) input").val()
			if(!/^\w{6,12}$/.test(pass_val)){
			     $(".top_pic p:nth-child(3)").html("请输入正确的密码").css("color","#ff6666")
			     $scope.regbool.pass = false
			}else{
				$scope.regbool.pass = true;
				$(".top_pic p:nth-child(3)").css("visibility","hidden")
			}
		}
		//验证码
		$scope.cde_focus = function(){
			$(".top_pic p:nth-child(5)").css("visibility","hidden")
			//这里是定义那个input
			$(".top_pic .code input").placeholder = "";
		}
		$scope.code_blur=function(){
		var code_val=$(".top_pic .code input").val()
		if(code_val==""){
			$scope.regbool.code = false
			$(".top_pic p:nth-child(5)").html("请输入正确的验证码").css("color","#ff6666")
		}else{
			$scope.regbool.code = true
			$(".top_pic p:nth-child(5)").css("visibility","hidden")
		}
	}
//		//选择
        //这里是点击
		
		
		//注册那里
		regList =[];
		var regLocal = localStorage.getItem('regList'),
		regLocalJson = JSON.parse(regLocal)  //把获取到的字符串数据转换成数组对象
		if(regLocalJson != null){ //判断本地存储localStorage是否存在proList的值
			for(var i = 0;i<regLocalJson.length ;i++){
				regList.push(regLocalJson[i]) //把数组对象push进数组里面
			}
		}
		$scope.register = function(){
			var text_val = $(".top_pic label:nth-child(2) input").val()
			var pass_val = $(".top_pic label:nth-child(4) input").val()
			var xuan =$(".xieyi .addto input").eq(0).prop("checked")
			var xuan1 =$(".xieyi .addto input").eq(1).prop("checked")
			$timeout(function(){
				if(xuan&&xuan1&&$scope.regbool.unmber&&$scope.regbool.pass&&$scope.regbool.code){
				
				regLocaDate(text_val,pass_val);
				$state.go('login')
				}else{
					alert("请你注意填写你的注册信息")
					return false
					
				}
			},500)
	}
		function regLocaDate(phone,pass){
		registers={
			phone:phone,
			pass:pass
		}
		regList.push(registers);
		localStorage.setItem("regList",JSON.stringify(regList));
		console.log(11111)
	}
})
/********************************注册end****************************************/


/*************************登录*****************************/

.controller('logController',function($scope,$state,$rootScope,$timeout){
	   	  

	   	  $rootScope.footershow = false;
	   	  $scope.bool = {
	   	  	unmber:false,
	   	  	pass:false,
	   	  	code:false,
	   	  	index:-1
	   	  	
	   	  }
	   	  
	   	  /*手机号*/
	   	 var loginlist = JSON.parse(localStorage.getItem("regList"))
	   	  	if(!loginlist){
	   	  		loginlist = [];
	   	  	}
	   	 $scope.text_focus = function(){
	   	 	$(".content .top_pic p:nth-child(1)").html("请输入你的手机号码").css("visibility","visible").css("color","red")
	   	    $(".top_pic label:nth-child(2) input").placeholder=""
	   	    $scope.bool.unmber = false;
	   	 }
	   	 $scope.text_blur=function(){
	   	    
	   	 	var text_val= $("#aaaa").val();
	   	 		console.log($("#aaaa").val())
	   	 			
			   	 	for(var i=0;i<loginlist.length;i++){ 		
						if(text_val==loginlist[i].phone){
							console.log(loginlist[i].phone)
							$scope.bool.unmber = true;
							$scope.bool.index = i;
							$(".content .top_pic p:nth-child(1)").css("visibility","hidden");
							return false;
						}
					}
	   	 	$(".content .top_pic p:nth-child(1)").html("该用户不存在").css("color","#007AFF");
	   	 	$scope.bool.unmber = false;
	   	 }
	   	 /*密码*/
	   	$scope.pass_focus=function(){
	   		$(".content .top_pic p:nth-child(3)").html("请输入你的 密码").css("visibility","visible").css("color","red")
	   	   $(".top_pic label:nth-child(4) input").placeholder="";
	   	   $scope.bool.pass = false;
	   	   console.log(123)
	   	}
	   	$scope.pass_blur=function(){
			var pass_val=$("#passs").val()
			console.log($scope.bool.pass)
			if($scope.bool.index!=-1){
				if(loginlist[$scope.bool.index].pass==pass_val){
					$scope.bool.pass = true;
					$(".content .top_pic p:nth-child(3)").css("visibility","hidden");
					return false
				}
			}else{
				$scope.bool.pass = false;
				$(".content .top_pic p:nth-child(3)").html("错误").css("color","red")
			}		
	    }
	   	
	   	
	   	//验证码
	   	$scope.code_focus = function(){
			$(".content .top_pic p:nth-child(5)").css("visibility","hidden")
			console.log(123)
			//这里是定义那个input
			$(".top_pic .code input").placeholder = "";
			} 	
		$scope.code_blur=function(){
       	
		var code_val=$("#codes").val()	

		if(code_val==""){
			$scope.bool.code = false;
			$(".content .top_pic p:nth-child(5)").html("请输入正确的验证码").css("color","red	").css("visibility","visible")
		}
		else{
			$scope.bool.code = true;
			$(".content .top_pic p:nth-child(5)").css("visibility","hidden")
		}
	   }
		//end
		//选择
        //这里是点击
		$scope.login=function(){
				var username=  $("#aaaa").val()
				var xuan =$("#servise").prop("checked")
				var xuan1 =$("#agress").prop("checked")
				console.log(xuan+"--"+xuan1)
				console.log($scope.bool.unmber+"--"+$scope.bool.pass+"--"+$scope.bool.code)
				$timeout(function(){
					if(xuan && xuan1&&$scope.bool.pass&&$scope.bool.code&&$scope.bool.unmber){
					console.log("成功")
					localStorage.setItem("loname",username);
					$state.go("home")
					$("#aaaa").val("")
					$("#passs").val("")
					$("#codes").val("")
					$("#servise").prop("checked",false)
					$("#agress").prop("checked",false)
					
				}else{
					alert("请，请注意填写你的登录必备信息哦！")
					console.log("登录失败")
				}
				},500)
			
		}
		})
/*************************登录end*****************************/