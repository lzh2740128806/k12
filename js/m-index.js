//初始化
(function(){
	var winW=window.innerWidth,bItem=$(".b-item");
	bItem.height(winW*1170/1920+"px");
	$(".b-cont").width(bItem.width()*bItem.length);
	$(".banner").height($(".b-cont").height());
	$(".e-wrap").height($(".e-vedio").height());
	$(".footer").height(winW*315/1920+"px");
	$(".item-box .item:last-child").height($(".item-box .item:first-child").height()+"px");
})();
var oBcont=$(".b-cont"),aList=$(".item-list>li"),aItem=oBcont.find(".b-item");
//滑动轮播图片
function silde(item,c1,ali,c2){
	item.find(c1).on("touchstart",function(e){
		var sx=e.targetTouches[0].pageX,
			i=$(this).index(),
			len=item.find(c1).width(),
			dis=0;
		function move(ev){
			var mx=ev.targetTouches[0].pageX;
			dis=mx-sx;
			$(this).css("left",dis-i*len+"px");
		}
		function end(){
			item.off("touchmove",move);
			item.off("touchend",end);
			if((i<=0&&dis>0)||(i>=4&&dis<0)){//阻止滑出边缘
				item.animate({"left":-i*len+"px"},100);
				return false;
			}

			//低于50px的滑动距离不能滑过去
			if(dis<-50){
				item.animate({"left":-(i+1)*len+"px"},500);
				ali.removeClass(c2).eq(i+1).addClass(c2);
			}else if(dis>50){
				item.animate({"left":-(i-1)*len+"px"},500);
				ali.removeClass(c2).eq(i-1).addClass(c2);
			}else{
				item.animate({"left":-i*len+"px"},100);
				ali.removeClass(c2).eq(i).addClass(c2);
			}
		}
		item.on("touchmove",move);
		item.on("touchend",end);
	});
};
silde(oBcont,".b-item",aList,"active");//banner图轮播
silde($(".e-vedio"),"li",$(".e-list>li"),"current");//底部案例轮播
//点击轮播图片
aList.on("touchstart",function(){
	var i=$(this).index(),
		len=aItem.width();
	oBcont.animate({"left":-i*len+"px"},500);
	aList.removeClass("active").eq(i).addClass("active");
});
//点击播放
$(".start-btn").on("touchstart",function(){
	var oVideo=$(this).hide().prev()[0];
	$(this).next().hide();
	oVideo.play();
	oVideo.controls=true;
});
//what
$(".item-list2>li").on("touchstart",function(){
	var i=$(this).index();
	$(".item-list2>li").removeClass("onthis").eq(i).addClass("onthis");
	$(".item-box .item").hide().eq(i).show();
});