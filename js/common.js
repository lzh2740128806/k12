//初始化
(function(){
	function init(){
		var winW=window.innerWidth;
		if(winW>767){
			$('li.dropdown').hover(function(){
				$(this).addClass('open');
			},function(){
				$(this).removeClass('open');
			});
		};
	}
	init();
	window.addEventListener("resize",init,false);
})();
//顶部导航栏定位
$(window).scroll(function(){
	var t=$(this).scrollTop();
	t?$(".header").addClass("header-temp"):$(".header").removeClass("header-temp");
});