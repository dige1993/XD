// JavaScript Document
$(document).ready(function(e) {
	var music_exist = false;
	$(document).click(function(){
		if(!music_exist)
		{
			var music = document.createElement("AUDIO");
			music.id = "music";
			music.src = "media/今天你要嫁给我.mp3";
			music.autoplay = "autoplay";
			music.loop = "loop";
			$(".container").get(0).appendChild(music);
			music_exist = true;
		}
	});
});