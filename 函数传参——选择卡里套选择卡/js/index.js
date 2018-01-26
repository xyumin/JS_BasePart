window.onload=function(){
	var oTab=document.getElementById("tab_ul");
	var oCon=document.getElementById("content");
	var aDiv=oCon.getElementsByTagName("div");

	tab_active(oTab,'li','click',aDiv);

	var aP=oCon.getElementsByTagName("p");
	var aUl=oCon.getElementsByTagName("ul");
	for(var i=0;i<aP.length;i++){
		tab_active(aP[i],'span','click','li',aUl[i]);
	}
	
	function tab_active(obj,ele,evt_type,tab,tab_parent){//obj:要点击的一组元素的父级;ele:要点击的一组元素的标签名;evt_type:点击或鼠标移入移出等时间(不加on);tab:点击后显示的一组元素;tab_parent:点击后显示的一组元素的父级
		var aLink=obj.getElementsByTagName(ele);
		for(var i=0;i<aLink.length;i++){
			aLink[i].index=i;
			aLink[i]['on'+evt_type]=function(){
				if(this.className==""){
				for(var j=0;j<aLink.length;j++){
					aLink[j].className='';
					if(!tab_parent&&tab){
						tab[j].className='none';
					}else if(tab_parent&&tab){
						var tab_child=tab_parent.getElementsByTagName(tab);
						for(var q=0;q<tab_child.length;q++){
							tab_child[q].className='none';
						}
					}
				}
				aLink[this.index].className='active';
				if(!tab_parent&&tab){
					tab[this.index].className='block';
				}else if(tab_parent&&tab){
					tab_child[this.index].className='block';
				}				
			}
			}
		}
	}
}