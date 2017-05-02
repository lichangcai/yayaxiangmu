	var proLocal = localStorage.getItem('proList'),  //定义变量proLocal，获取本地存储数据
						proList = [],//定义数组变量,
						proLocalJson = JSON.parse(proLocal)  //把获取到的字符串数据转换成数组对象
						if(proLocalJson != null){ //判断本地存储localStorage是否存在proList的值
							for(var i = 0;i<proLocalJson.length ;i++){
								proList.push(proLocalJson[i]) //把数组对象push进数组里面
							}
						}
						
		var html = '';
		for(var i=0;i<proList.length;i++){
			
			var td1= "<td><label class='label'><input type='checkbox' class='chenxbox'/></label><a href='###'><img src="+proList[i].color+"/></a><p><a href='pro_details.html'>馨绵 高领打底衫女2016秋<br/>冬新品加绒加厚纯色装</a></p></td>";
			
			var td2="<td><p class='dj'>"+proList[i].price+"</p></td>";
			var td3="<td><div class='shuliang'><label><input class='prd_subNum' type='button' value='-'/><input type='text' class='prd_num' value='1' /><input class='prd_addNum' type='button' value='+'/></label></div></td>";
			var td4="<td><p class='totas'>￥"+proList[i].totals+"</p></td>";
			var td5="<td><p><a href='###'>收藏</a><br/><a href='###' class='deltr'>删除</a></p></td>";
			var tr = "<tr>"+td1+td2+td3+td4+td5+"</tr>";
			html +=tr; 
		}
		$("#cartable").append(html);
		var inputval = document.getElementsByClassName("prd_num");
		
		for(var i=0;i<proList.length;i++){
			inputval[i].setAttribute("value",proList[i].num)
		}



/*这是全选那里的代码*/
		/*找到class“inp”下面的input,点击*/
			$(".inp input").click(function(){
				/*如果class“inp”
				 * 下面的input,是已经点击状态那么就"inp"给增加class“on”而且class“lable”也是增加"on"的状态*/
				if(this.checked){
					$(".inp").addClass("on")
					$(".label").addClass("on")
					$(".label input").prop("checked","checked")
					
				}
				/*如果class“inp”下面的input,是已经呈现离开状态那么就"inp"给移除class“on”而且class“lable”也是移除"on"的状态*/
				else{
					$(".inp").removeClass("on")
					$(".label").removeClass("on")
					$(".label input").prop("checked","")
					
				}	
				total()
			})
		
		/*这是单选那里的*/
		/*给.lable下面的点击给呈现出来的话，那么定义一个“tr”给tbody下面的tr;而且也定义一个“a”给class"lable"下面的on*/
			$(".label").click(function(){
				var tr = $("tbody tr")
				var a = $(".label.on")
				/*如果这个class没有"on"那么就移除这个“on”*/
				if($(this).hasClass("on")){
					$(this).removeClass("on")
					/*如果这个找到当下的input,不是全部选择状态，那么这个.inp就移除这个当前状态on*/
					$(this).find("input").prop("checked","")
					
					$(".inp").removeClass("on")
					total()
					return false
				}else{
					$(this).addClass("on")
					$(this).find("input").prop("checked","checked")
					/*这是打印出console的定义a的值的长度和tr的长度*/
//					console.log(a.length)
//					console.log(tr.length)
                    /*因为a的长度是从0开始的，那么就是a的长度等于tr的长度减一,而且两个的长度相同的话，那么就class"inp"就增加当前状态on*/
					if(a.length==tr.length-1){
						$(".inp").addClass("on")
					}
					/*return false是返回初始值的意思*/
					total()
					return false
				}
				
			})
			
			
	/*开始设置数量的 加减*/
	/*这是加的js*/
       $(".prd_addNum").click(function(){
       		var num = parseInt($(this).siblings(".prd_num").val());
            	++num;
            	console.log(num)
				if(num>99){
					num=99;
				}
				/*赋值回来给当前的状态num*/
				$(this).siblings(".prd_num").val(num);
//				这是一个总计
				total()
       })
       /*减的js*/
      $(".prd_subNum").click(function(){
      	var num = parseInt($(this).siblings(".prd_num").val());
      	--num;
      	if(num<1){
      		num=1;
      	}
      	/*这是打印当前的代码*/
      	console.log(num)
      	/*赋值回来给当前的状态num*/
      	$(this).siblings(".prd_num").val(num);
      	total()
      })
      
      /*改变输入框的值*/
     /**改变输入框的值***/
					var focusVal,
					reg = /.*\..*/
                   /*当元素获得焦点时，发生 focus 事件*/
					$('.prd_num').focus(function() {
						focusVal = $(this).val()
					})
				$(".prd_num").change(function(){
						numA = $(this).val()
						if(!Number(numA) || reg.test(numA)) {
							$(this).val(focusVal)
							numA = focusVal

						} else if(numA >= 100) {
							numA = 99
							$(this).val(numA)
						}															
						$(this).val(numA);
	   				total()
				})
				 /**改变输入框的值end***/
		var tbody = document.getElementById('tbody');
        var tr = tbody.getElementsByTagName('tr');
        console.log(document.getElementById("nums"));
        function total(){
        	var prices = document.getElementsByClassName("dj");
        	var prUnm = document.getElementsByClassName("prd_num")
        	var totas = document.getElementsByClassName("totas")
        	var chenxbox = document.getElementsByClassName("chenxbox")
        	var nums=0;
        	
        	
        	for(var i=0;i<tr.length;i++){
        		var jds =( prices[i].innerHTML).substring(1);
        		pricesun=(parseFloat(jds)*parseInt(prUnm[i].value)).toFixed(2);
        		totas[i].innerHTML = "￥"+pricesun;
//      	
				proList[i].num = prUnm[i].value;
        		proList[i].totals = pricesun;
        		localStorage.setItem('proList',JSON.stringify(proList))
        		if(chenxbox[i].checked){
        			
        			nums = parseFloat((totas[i].innerHTML).substring(1))+parseInt(nums);
//      		
        		}
//      		
        	}
        	$(".total").html("￥"+nums.toFixed(2))
//      	
      
 
       }
	total()
		$(".delall").click(function(){
        		$(".chenxbox:checked").parents("tr").remove()
        		
        		 var tr = tbody.getElementsByTagName('tr');
        		proList.length = tr.length;
        		localStorage.setItem('proList',JSON.stringify(proList))
        		total();
        	})
	
		$(".deltr").click(function(){
//				var listarry = [];
        		var bool = confirm("你确认删除吗？")
        		if(bool){
        			var indexs = $(".deltr").index(this)
        			$(this).parents("tr").remove();
//      			for(var i=0;i<tr.length;i++){
//      				if(proList[i]!=indexs){
//      					listarry.push(proList[i]);
//      				}
//      				console.log(listarry[i])
//      			}
        			var tr = tbody.getElementsByTagName('tr');
        			proList.length = tr.length;
//					console.log(listarry)
        			localStorage.setItem('proList',JSON.stringify(proList))
        			total();
        		}
        	})
	