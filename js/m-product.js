//初始化
(function(){
	$(".photo").parent().height($(".photo>li").height()+10+"px");
})()
//滑动轮播图片
var item=$(".photo"),aLi=$(".photo-list>li");
item.find("li").on("touchstart",function(e){
	e.preventDefault();
	var sx=e.targetTouches[0].pageX,
		i=$(this).index(),
		len=item.find("li").width(),
		dis=0;
	function move(ev){
		ev.preventDefault();
		var mx=ev.targetTouches[0].pageX;
		dis=mx-sx;
		$(this).css("left",dis-i*len+"px");
	}
	function end(){
		item.off("touchmove",move);
		item.off("touchend",end);
		if((i<=0&&dis>0)||(i>=2&&dis<0)){//阻止滑出边缘
			item.animate({"left":-i*len+"px"},100);
			return false;
		}
		if(dis<-50){//低于50px的滑动距离不能滑过去
			item.animate({"left":-(i+1)*len+"px"},500)
			aLi.css("backgroundColor","rgba(0,0,0,.3)").eq(i+1).css("backgroundColor","#fff");
		}else if(dis>50){
			item.animate({"left":-(i-1)*len+"px"},500)
			aLi.css("backgroundColor","rgba(0,0,0,.3)").eq(i-1).css("backgroundColor","#fff");
		}else{
			item.animate({"left":-i*len+"px"},100);
			aLi.css("backgroundColor","rgba(0,0,0,.3)").eq(i).css("backgroundColor","#fff");
		}
	}
	item.on("touchmove",move);
	item.on("touchend",end);
});
