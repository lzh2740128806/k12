//初始化
(function(){
	var aLi=$(".photo>li");
	$("section").removeClass("page-on").eq(0).addClass("page-on");
	$(".photo").append(aLi.clone()).width(aLi.width()*$(".photo>li").length+"px");
})()
//翻页
function ani(s){
	var oH=$("section").innerHeight();
	$("section").removeClass("page-on").eq(s).addClass("page-on");
	$("body").stop().animate({"scrollTop":s*oH+"px"},800);
	$(".page-list>li").css("backgroundColor","rgba(0,0,0,.3)").eq(s).css("backgroundColor","#379fff");
}
function scr(){
	var t_start;//前一步时间
	return function(ev){
		ev=ev||window.event;
		ev.preventDefault();
		var t_end=new Date();//现在时间
		if(t_end-t_start>=2000||!t_start){//节流判断
			var oH=$("section").innerHeight(),
				n=Math.floor($("body").scrollTop()/oH),
				max=$("section").length-1;
			ev.wheelDelta>0?n--:n++;
			n<0?n=0:null;
			n>max?n=max:null;
			ani(n);
			t_start=t_end;
		}
	}
}
window.onmousewheel=scr();
$(".page-list>li").click(function(){
	var i=$(this).index();
	ani(i);
})
//轮播图
var i=0,timer=null,oPhoto=$(".photo"),aList=$(".photo-list>li");
function move(){
	oPhoto.stop().animate({"left":"-"+i*$(".photo>li").width()+"px"},500);
	aList.css("backgroundColor","#ccc").eq(i%3).css("backgroundColor","#fff");
	i++;
	if(i>=4){
		i=1;
		oPhoto.animate({"left":0},0);
	}
};
move();
timer=setInterval(move,2000);
oPhoto.add(aList).hover(function(){
	clearInterval(timer);
},function(){
	timer=setInterval(move,2000);
});
aList.click(function(){
	i=$(this).index();
	move();
});