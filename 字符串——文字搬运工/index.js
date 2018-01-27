window.onload=function(){
     var mid=document.getElementById("mid");
     var aLink=mid.getElementsByTagName("a")[0];
     var span=mid.getElementsByTagName("span")[0];
     var ul=mid.getElementsByTagName("ul")[0];
     var aLi=ul.getElementsByTagName("li");

     var left=document.getElementById("left");
     var lp=left.getElementsByTagName("p")[0];

     var right=document.getElementById("right");
     var rp=right.getElementsByTagName("p")[0];

     var timer=null;
     var onoff=1;//a可点击开关
     var flag=1;//从左到右或从右到左开关

     aLink.onclick=function(){
        if(onoff){//可点击
            onoff=0;
            if(flag){//从左到右
                fn(lp,rp,1);
                flag=!flag;
            }else{//从右到左
                fn(rp,lp,0);
                flag=!flag;
            }                      
        }    
     }

     function fn(obj1,obj2,flag){
            var len=obj1.innerHTML.length;       
            timer=setInterval(function(){
                if(obj1.innerHTML.length<=0){
                    clearInterval(timer);
                    if(flag){
                        aLink.innerHTML="把文字左移";
                    }else{
                        aLink.innerHTML="把文字右移";
                    }                                       
                    onoff=1;
                    if(onoff){
                        ul.style.display="none";
                    }           
                }
                obj2.innerHTML+=obj1.innerHTML.charAt();
                obj1.innerHTML=obj1.innerHTML.substring(1);
                span.innerHTML=obj1.innerHTML.length+"/"+len;
                if(!onoff){
                    ul.style.display="block";
                }                
                var len1=obj2.innerHTML.length;
                for(var i=0;i<aLi.length;i++){
                    aLi[i].className="";
                }
                aLi[len1%8].className="active";
            },30);
     }      
}