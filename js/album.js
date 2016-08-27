// JavaScript Document
$(document).ready(function(e) {
	var i = 1;
	init_time();
	
	$("#album_left").click(function(e) {
        if(i > 1)
		{
			i = i - 1;
			$("#al_ph").attr("src", "images/album/" + i + ".jpg");
			$("#photo_number").text(i + "/5");
		}
		else
			alert("已经是第一张");
    });
	
	$("#album_right").click(function(e) {
        if(i < 5)
		{
			i = i + 1;
			$("#al_ph").attr("src", "images/album/" + i + ".jpg");
			$("#photo_number").text(i + "/5");
		}
		else
			alert("已经是最后一张");
    });
	
	function init_time()
	{
		var now_time = new Date();
		var year = now_time.getFullYear();
		var month = now_time.getMonth();
		var date = now_time.getDate();
		var hour = now_time.getHours();
		var minute = now_time.getMinutes();
		var second = now_time.getSeconds();
		var day = now_time.getDay();
		var day_text = "";
		switch(day)
		{
			case 0: day_text = "日";break;
			case 1: day_text = "一";break;
			case 2: day_text = "二";break;
			case 3: day_text = "三";break;
			case 4: day_text = "四";break;
			case 5: day_text = "五";break;
			case 6: day_text = "六";
		}
		var time_text = year + "年" + (month + 1) + "月" + date + "日  " + hour + ":" + minute + ":" + second + "  星期" + day_text;
		$("#time_area").text(time_text);
		setTimeout(init_time, 1000);
	}
});