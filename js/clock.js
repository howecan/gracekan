
clock();
function clock(){

	setInterval(function(){
		var cwidth = $(".clock").width();
		var step = cwidth / 36;
		var myDate = new Date();
		var h = myDate.getHours();       //获取当前小时数(0-23)
		var m = myDate.getMinutes();     //获取当前分钟数(0-59)
		var margin = step * h + (step / 60) * m + cwidth / 6;
		var bgpos = -h * 100 ;
		$(".indicator").css("margin-left", margin + "px");
		$(".indicator").css("background-position", bgpos + "px 0");
	},1000)
	
	
	
}