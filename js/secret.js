// JavaScript Document
$(document).ready(function(e) {
	var i = 1;
	init_time();
	snow();
	lrc_up();
	bg_music_title_scroll();
	
	$(".photo").mouseover(function(e) {
        $(".photo").css("opacity","0.2");
		$(this).css("opacity","1");
    });
	
	$(".photo").mouseleave(function(e) {
		$(".photo").css("opacity","1");
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
	
	function snow()
	{
		var screen_width = parseInt(window.screen.availWidth); //获取屏幕宽度
		var snow_number = Math.round(Math.random()*15 + 1); //每次产生不超过16片雪花
		for(var i = 0; i < snow_number; i++)
		{
			var snow_id = Math.round(Math.random()*3 + 1); //每次从4种不同大小的雪花图片中选一种
			var x_snow = Math.round(Math.random()* (screen_width - 100) + 30); //雪花刚产生时的横坐标，是30到屏幕宽度之间的随机数
			var y_snow = Math.round(Math.random()* 200); //雪花刚产生时的纵坐标绝对值，是0到200之间的随机数
			var img_snow = document.createElement("IMG");
			img_snow.src = "images/snow/" + snow_id + ".png"; 
			img_snow.className = "snow";
			img_snow.style.position = "absolute";
			img_snow.style.left = x_snow + "px";
			img_snow.style.top = "-" + y_snow + "px";
			img_snow.style.zIndex = 10;
			img_snow.draggable = false;
			$("div.container").append(img_snow);
			$("img.snow").animate({
				top:'800px',
				opacity:0
			}, 10000, function(){
				$(this).remove();
			});
		}
		setTimeout(snow, 2000);
	}
	
	function lrc_up()
	{
		if(i < 29)
		{
			$("div.lrc_line").animate({
				top:"-=10px"
			}, "slow");
			$("div.lrc_line").get(i).style.color = "#FFF";
			$("div.lrc_line").get(i-1).style.color = "#0FF";
			i += 1;
			setTimeout(lrc_up, 3000);
		}
		else
		{
			i = 1;
			setTimeout(lrc_reset, 22000);
		}
	}
	
	function lrc_reset()
	{
		$("div.lrc_line").attr("color","#0FF");
		$("div.lrc_line").animate({
			top:"+=280px"
		}, "fast");
		lrc_up();
	}
	
	function bg_music_title_scroll()
	{
		$("#s1").animate({
			left:"+=635px"
		},10000,function(){
			$("#s1").css("left","-295px");
		});
		setTimeout(bg_music_title_scroll,10000);
	}
});