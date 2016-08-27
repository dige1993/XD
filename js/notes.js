// JavaScript Document
$(document).ready(function(e) {
	var i = 1;
	init_time();
	snow();
		
	$("textarea#text_area").keyup(function(e) {
        var num = $(this).val().length;
		$("#words_num").html("字数：" + num +" &nbsp;");
    });
	
	$("#submit").click(function(e) {
        new_notes();
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
			img_snow.style.zIndex = 2;
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
	
	function new_notes()
	{
		var words = $("#text_area").val();
		if(words == "")
		{
			alert("请输入内容！");
			return;
		}
		var div_notes = document.createElement("DIV");
		div_notes.className = "note";
		div_notes.name="testname";
		
		
		var flo = $(".note").length + 1;
		var flo_node = document.createTextNode("第" + flo + "楼：");
		div_notes.appendChild(flo_node);
		
		var br1 = document.createElement("BR");
		div_notes.appendChild(br1);
		var br2 = document.createElement("BR");
		div_notes.appendChild(br2);
		
		var words_node = document.createTextNode(words);
		div_notes.appendChild(words_node);
		
		var br3 = document.createElement("BR");
		div_notes.appendChild(br3);
		var br4 = document.createElement("BR");
		div_notes.appendChild(br4);
		
		var now_time = new Date();
		var year = now_time.getFullYear();
		var month = now_time.getMonth();
		var date = now_time.getDate();
		var hour = now_time.getHours();
		var minute = now_time.getMinutes();
		var second = now_time.getSeconds();
		
		var time_text = year + "年" + (month + 1) + "月" + date + "日  " + hour + ":" + minute + ":" + second;
		var time_node =  document.createTextNode(time_text);
		div_notes.appendChild(time_node);
		
		var hr = document.createElement("HR");
		div_notes.appendChild(hr);
		
		$("#notes").prepend(div_notes);
	}
});