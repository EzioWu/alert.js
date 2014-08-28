function alt(txt){
	var $alert=$("<div id='alert'></div>");
	var wall=$("<div id='wall'></div>");
	$alert.html("来自 河南 洛阳的网友：<hr/><div id='alert_content_out'><div id='alert_content'></div></div><hr/><div id='alert_footer'><input id='alert_button' type='button' value='确定' onclick='alert_dispear();'/></div><audio id='alert_sound'  controls='controls'  hidden='true'  ></audio>");
	$("body").append($alert);
	$("body").append(wall);
	//var $alert_sound=$("<audio id='alert_sound'  controls='controls'  hidden='true'  ></audio>");
	//$("#alert").append($alert_sound);
	var $alert_sound=$("#alert_sound");
	$alert_sound.css("display","none");
	var alert_sound=$alert_sound[0];
	alert_sound.src='http://wzc1.qiniudn.com/alert.mp3';
	alert_sound.play();
	$("#alert_content").html(txt);
	var $alert=$("#alert");
	var wall=$("#wall");
	var alert_content=$("#alert_content");
	var alert_content_out=$("#alert_content_out");
	
	$alert.css({
		"display":"block",
		"left":document.body.clientWidth/2-200 +"px",
		"position":"fixed",
        "top":"100px",
        "width":"400px",
        "background-color":"#CCC",
		"z-index":"1001",
		"border":"1px solid #666",
		"border-radius":"10px",
		"box-shadow": "5px 5px 3px #888888",
		"padding": "5px 5px 5px 5px",
		"overflow":"hidden",
	});
	wall.css({
		"display":"block",
		"height":document.body.clientHeight+"px",
		"width":document.body.clientWidth+"px",
		"position":"absolute",
        "top":0,
		"left":0,
        "background-color":"#CCC",
		"z-index":"1000",
		"filter": "alpha(opacity=70)",
		"opacity":"0.7",
	});
	alert_content.css({   		
		"background-color": "#CCC",
		"max-height": "400px",
		"min-height":"180px",
		"overflow": "auto",
		"padding": "5px 15px 5px 5px",
		"width":"410px"
   });
   alert_content_out.css({   		
		"width":"400px",
		"max-height": "400px",
		"overflow": "hidden",		
   }); 
   $("#alert_foot").css({
   		"width":"100%",
		"height":"20px",
		
   }); 
   $("#alert_button").css({
		"position":"relative",
		"left":"180px",
		
		
   });  
}

function alert_dispear(){
	$("#alert").remove();
    $("#wall").remove();
}   
