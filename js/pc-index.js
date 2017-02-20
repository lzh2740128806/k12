//初始化
(function(){
	function init(){
		var winW=window.innerWidth,bItem=$(".b-item");
		bItem.height(winW*1170/1920+"px");
		$(".b-cont").width(bItem.width()*bItem.length);
		$(".banner").height($(".b-cont").height());
		$(".item-box .item:last-child").height($(".item-box .item:first-child").height()+"px");
	}
	init();
	window.addEventListener("resize",init,false);
})();
//banner部分
function addtemp(){
	$(this).removeClass("header-temp2");
};
function removetemp(){
	$(this).addClass("header-temp2");
};
$(".item-list>li").mouseover(function(){
	var i=$(this).index();
	$(".b-text:gt("+i+")").css("left","-40%");
	$(".b-text:lt("+i+")").css("left","40%");
	$(".b-text").eq(i).css("left","10%");
	$(".item-list>li").removeClass("active").eq(i).addClass("active");
	$(".b-cont").stop().animate({"left":-i*window.innerWidth+"px"},500);
	if(i==2){
		$(".header").addClass("header-temp2").on({"mouseover":addtemp,"mouseout":removetemp});
	}else{
		$(".header").removeClass("header-temp2").off({"mouseover":addtemp,"mouseout":removetemp});
	};
});
//what
$(".item-list2>li").click(function(){
	var i=$(this).index();
	$(".item-list2>li").removeClass("onthis").eq(i).addClass("onthis");
	$(".item-box .item").hide().eq(i).show();
});
//播放视频
$(".start-btn").click(function(){
	var oVideo=$(this).hide().prev()[0];
	$(this).next().hide();
	oVideo.play();
	oVideo.controls=true;
});
//轮播
var i=0;
function startMove(n){
	var aLi=$(".e-vedio>li");
	aLi.removeClass();
	aLi.eq((n+4)%5).addClass("e-left");
	aLi.eq(n).addClass("e-center");
	aLi.eq((n+1)%5).addClass("e-right");
	$(".e-list>li").removeClass("current").eq(n).addClass("current");
}
$(".e-list>li").on("click",function(){
	i=$(this).index();
	startMove(i);
});
$(".e-btn-left").on("click",function(){
	i++;
	i=i%5;
	startMove(i);
})
$(".e-btn-right").on("click",function(){
	i--;
	i=(i+5)%5;
	startMove(i);
})
