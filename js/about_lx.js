$("#username").on("blur",function(){
	var reg=/^[\u4e00-\u9fa5]{1,10}$/;
	reg.test($("#username").val())?null:alert("请正确输入姓名（3到10个汉字）");
});
$("#telephone").on("blur",function(){
	var reg=/^1\d{10}$/;
	reg.test($("#telephone").val())?null:alert("请正确输入11位手机号码");
});
$("#leavemsg").on("blur",function(){
	if(!$(this).val()){
		alert("请填写留言");
	}
});