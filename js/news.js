var n=0;
function loadArticle(){
	var oUl=$(".article");
	$.ajax({
		url:"../news.json",
		success:function(data){
			for(var i=n;i<n+4;i++){
				if(i<data.length){
					var oLi=$("<li></li>");
					oLi.html("<a href='javascript:;'><img src='../imgs/news/"+data[i].img+".jpg'><h4>"+data[i].title+"</h4></a><p>"+data[i].content+"</p><span>"+data[i].time+"</span>");
					oUl.append(oLi);
				}
			}
		},
		error:function(){
			var oP=$("<p></p>");
			oP.text("加载失败");
			oUl.append(oP);
		}
	})
}
loadArticle();
$(".more").click(function(){
	n+=4;
	loadArticle();
})