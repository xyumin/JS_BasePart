window.onload=function(){
	var oTab=document.getElementById("tab-panel");
	var aTab_li=oTab.getElementsByTagName("li");
	var oCon=document.getElementById("content");
	var aDiv=oCon.getElementsByTagName("div");

	// for(var i=0;i<aTab_li.length;i++){
	// 	aTab_li[i].index=i;
	// 	aTab_li[i].onclick=function(){
	// 		if(this.className==''){
	// 			for(var j=0;j<aTab_li.length;j++){
	// 				aTab_li[j].className='';
	// 				aDiv[j].className='none';
	// 			}
	// 			aTab_li[this.index].className='active';
	// 			aDiv[this.index].className='block';
	// 		}
	// 	}
	// }	
	li_active(oTab,'li','click',aDiv);
	for(var i=0;i<aDiv.length;i++){
		li_active(aDiv[i],'li','mouseover');
	}
	function li_active(obj,ele,evt_type,tab){
		var aLink=obj.getElementsByTagName(ele);
		for(var j=0;j<aLink.length;j++){
			aLink[j].index=j;
			aLink[j]['on'+evt_type]=function(){
				if(this.className==''){
					for(var j=0;j<aLink.length;j++){
						aLink[j].className='';
						if(tab){
							tab[j].className='none'
						}
					}
					aLink[this.index].className='active';
					if(tab){
						tab[this.index].className='block';
					}
				}
			}
		}
	}
}