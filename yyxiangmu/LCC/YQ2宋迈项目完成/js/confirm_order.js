$(function(){
	
	var num_total = function(){
				var input_leng=$(".shopcar tr:gt(1)").find("td:first input[type='checkbox']:checked").length;
				//alert(input_leng);
				$("#numder").text(input_leng);
			}
	num_total();
	//单选
	$(".shopcar tr:gt(1)").find("td:first input[type='checkbox']").click(function(){

		var check_leng=$(".shopcar tr:gt(1)").find("td:first input[type='checkbox']").length;
		//alert(check_leng);
		var checked_leng=$(".shopcar tr:gt(1)").find("td:first input[type='checkbox']:checked").length;
		//alert(checked_leng);
		if(check_leng==checked_leng){
			//alert("true");
			$("#checkAll").prop("checked","checked").attr("checked","checked");
		}else{
			$("#checkAll").removeAttr("checked");
		}
		total();
		num_total();
	})
	
	//全选
	$("#checkAll").click(function(){
		if($(this).attr("checked")){
			$(this).removeAttr("checked");
			$(".shopcar tr:gt(1)").find("td:first input[type='checkbox']").removeAttr("checked");
			total();
		}else{
			$(this).prop("checked","checked").attr("checked","checked");
			$(".shopcar tr:gt(1)").find("td:first input[type='checkbox']").prop("checked","checked").attr("checked","checked");
			total();
		}
		num_total();
	})
	
	//减
	$(".prd_subNum").click(function(){
		var num_text=$(".count_num").val();
		//alert(num_text);
		num_text--;
		if(num_text<1){
			num_text=1;
		}
//		$(this).next().text(num_text);
		$(".count_num").val(num_text);
		subtotal();
		total();
	})
	
	//加
	$(".prd_addNum").click(function(){
		var num_text=$(".count_num").val();
		num_text++;
		if(num_text>99){
			num_text=99;
		}
		$(".count_num").val(num_text);
		subtotal();
		total();
	})
	
	/**改变输入框的值***/
					var focusVal,
					reg = /.*\..*/

					$('.count_num').focus(function() {
						focusVal = $(this).val()
					})
				   $(".count_num").change(function(){
						numA = $(this).val()
						if(!Number(numA) || reg.test(numA)) {
							$(this).val(focusVal)
							numA = focusVal

						} else if(numA >= 100) {
							numA = 99
							$(this).val(numA)
						}															
						$(this).val(numA);
						subtotal();
						total();
					})
	
	//小计
	var subtotal = function(){
		var subNum=$(".count_num").val();
		var subtotal=subNum*parseInt($(".count_num").parent().prev().find("p:eq(1) span").text());
		$(".count_num").parent().next().next().find("span").text(subtotal.toFixed(2));
	}
	
	//总计
	var total = function(){
		var check = $(".shopcar tr:gt(1)").find("td:first input[type='checkbox']:checked");
		var a = 0;
		for(var i=0;i<check.length;i++){
			a+=parseInt(check.eq(i).parent().siblings("td:last").find("span").text());
			//alert(a);
		}
		a-=parseInt(check.parent().siblings("td:eq(3)").find("span").text());
		//alert(a);
		if(isNaN(a)){
			a=0;
		}
		$("#total").text("￥"+a.toFixed(2));
	}
	total();
	
})
