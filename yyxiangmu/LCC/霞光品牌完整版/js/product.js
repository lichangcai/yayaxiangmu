var shopCart = {
	
	addCar:function(proData){
		this.cart="cart";	
		localStorage.setItem(this.cart,JSON.stringify(proData));
	},
	
	addProData:function(proData,val){
		var carts = JSON.parse(localStorage.getItem("cart"));
		
		var bool = true;
		if(!carts){
			console.log("true")
			proData.unmber=parseInt(val) 
			console.log(proData.unmber)
			var creatlist = {
				product:[proData],
				proUnm:proData.unmber,
				prototal:(proData.unmber*proData.price).toFixed(2)
			}
			this.addCar(creatlist);
		}else{
			console.log("false")
			var getProData = JSON.parse(localStorage.getItem("cart"));
			proData.unmber=parseInt(val) ;
			var prolist = getProData.product;
			for(var i in prolist){
				if(prolist[i].id==proData.id){
					prolist[i].unmber+=proData.unmber;					
					prolist[i].totals=parseInt(prolist[i].unmber*prolist[i].price).toFixed(2);
					bool = false;
				}
			}
			if(bool){
					prolist.push(proData)
			}
			this.addCar(getProData)
		}
	}
	
	
}
