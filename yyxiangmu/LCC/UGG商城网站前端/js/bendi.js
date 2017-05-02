/*这第二步*/
$(function(){
var proLocal = localStorage.getItem('proList'),//定义变量proLocal，获取本地存储数据
    proList = [],//定义数组变量,
    len,
    prolocalJson = JSON.parse(proLocal)//把获取到的字符串数据转换成数组对象
    if(prolocalJson !=null){ //判断本地存储localStorage是否存在proList的值,如果存在，则赋予len的值
    	len = prolocalJson.length //获取本地存储转换的数组长度
    }
    for(var i = 0;i<len;i++){
    	proList.push(prolocalJson[i])//把数组对象push进数组里面
    }
/*这是第一步*/
/*点击事件获取产品中心系详情数据*/
$(".add-cart").click(function(){
	var pro_title = $('.right>h2').html();
	    sale_price = $('.jia>span').html();
	    pro_color = $('.right>ul>li.on img').attr("src");
	    pro_size = $('.right>dl>dd.on').html();
	    pro_num = $('.shuliang>input#prd_num').val();
	    totals = parseFloat(sale_price.substring(1))*parseInt(pro_num)
	    /**
						 * 为了判断是否为同一个产品颜色，
						 * 必须遍历出proList的每个对象的产品颜色，
						 * 让数组的产品颜色与获取到的产品颜色进行对比判断,
						 * 相似则给数组的产品数量加上input的val值，
						 * 进行本地存储，
						 * 接着return false跳出循环 
						 * */
						for(var x = 0;x<proList.length;x++){
							
							if(pro_color==proList[x].color&&pro_size==proList[x].size){
								proList[x].num = parseInt(proList[x].num)+parseInt(pro_num)
//								proList[x].number++
								proList[x].totals = proList[x].totals+parseInt(totals)
								localStorage.setItem("proList",JSON.stringify(proList))
								return false;
							}
						}
	                    localData(pro_title,sale_price,pro_color,pro_size,pro_num,totals)//调用函数localData(),进行本地存储操作
})
   function localData(title,price,color,size,num){
	    	var product = {
	    		title:title,
	    		price:price,
	    		color:color,
	    		size:size,
	    		num:num,
	    		totals:totals
	    	}
	    	proList.push(product)
	    	localStorage.setItem("proList",JSON.stringify(proList))
	    }
	    console.log(localStorage.getItem('proList')) 
})