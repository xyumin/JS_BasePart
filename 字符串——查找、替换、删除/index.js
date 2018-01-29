window.onload=function(){
	var content=document.getElementById("content");
	var panel=document.getElementById("panel");

	var aLi=panel.getElementsByTagName("li");
	var aDiv=panel.getElementsByTagName("div");
	var span=document.getElementById("close");

	var btn_group=document.getElementById("btn-group");
	var btnUl=btn_group.getElementsByTagName("ul")[0];
	var btnLi=btnUl.getElementsByTagName("li");



	btnUl.onclick=function(){
		if(this.className=="none"){
			this.className="block";
		}
	}

	for(var i=1;i<btnLi.length;i++){
		btnLi[i].index=i-1;
		btnLi[i].onclick=function(){
			if(panel.className=="hidden"){
				panel.className="show";
			}
			if(btnUl.className=="block"){
				btnUl.className="none";
				preventBubble();
			}
			for(var j=0;j<aLi.length;j++){
				aLi[j].className="";
				aDiv[j].style.display="none";
			}
			aLi[this.index].className="active";
			aDiv[this.index].style.display="block";
		}
	}
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onclick=function(){
			for(var j=0;j<aLi.length;j++){
				aLi[j].className="";
				aDiv[j].style.display="none";
			}
			aLi[this.index].className="active";
			aDiv[this.index].style.display="block";
		}
	}
	span.onclick=function(){
		panel.className="hidden";
	}

	//查找
	var search_input=document.getElementById("search_input");
	var search_btn=document.getElementById("search");
	var con=content.innerHTML;

	search_btn.onclick=function(){
		content.innerHTML=con;
		var value=search_input.value;
		if(value==""){
			alert("请输入内容");
		}else if(con.indexOf(value)==-1){
			alert("找不到您输入的内容");
		}else{
			content.innerHTML=con.split(value).join('<span>'+value+'</span>');
		}
		search_input.value="";
	}

	//替换
	var repalce_btn=document.getElementById("replace");
	var inputs=aDiv[1].getElementsByTagName("input");
	repalce_btn.onclick=function(){
		var con_now=content.innerHTML.split('<span>').join("").split('</span>').join("");
		var val1=inputs[0].value;
		var val2=inputs[1].value;
		if(val1==""||val2==""){
			alert("请输入内容");
		}else if(con_now.indexOf(val1)==-1){
			alert("找不到要被替换的内容");
		}else{
			content.innerHTML=con_now.split(val1).join('<span>'+val2+'</span>');
		}
		inputs[0].value=inputs[1].value="";
	}



	function preventBubble(event){  
	  var e=arguments.callee.caller.arguments[0]||event; //若省略此句，下面的e改为event，IE运行可以，但是其他浏览器就不兼容  
	  if (e && e.stopPropagation) {  
	    e.stopPropagation();  
	  } else if (window.event) {  
	    window.event.cancelBubble = true;  
	  }  
	}  

}