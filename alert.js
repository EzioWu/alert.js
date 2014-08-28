/*在网页引入改文件，需要jQuery支持
 *颜色 等样式可以自行按照喜好更改
 *
 *
 *
 *
 *
 */
function alt(txt){
	var $alert=$("<div id='alert'></div>");
	var wall=$("<div id='wall'></div>");
	$alert.html("此处以自定义内容替换：<hr/><div id='alert_content_out'><div id='alert_content'></div></div><hr/><div id='alert_footer'><input id='alert_button' type='button' value='确定' onclick='alert_dispear();'/></div><audio id='alert_sound'  controls='controls'  hidden='true'  ></audio>");
	$("body").append($alert);
	$("body").append(wall);
	var $alert_sound=$("#alert_sound");
	$alert_sound.css("display","none");
	var alert_sound=$alert_sound[0];
	alert_sound.src='http://wzc1.qiniudn.com/alert.mp3';//此处替换为自定义提示音
	alert_sound.play();
	$("#alert_content").html(txt);
	var $alert=$("#alert");
	var wall=$("#wall");
	var alert_content=$("#alert_content");
	var alert_content_out=$("#alert_content_out");
	
	$alert.css({//主弹出框样式
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
	wall.css({//背景样式，此层将浮于网页最上层（仅次于alert主框体）
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
	alert_content.css({//内容层样式，即函数alt()里内容样式   		
		"background-color": "#CCC",
		"max-height": "400px",
		"min-height":"180px",
		"overflow": "auto",
		"padding": "5px 15px 5px 5px",
		"width":"410px"
   	});
   	alert_content_out.css({//内容层外框体，用来隐藏滚动条   		
		"width":"400px",
		"max-height": "400px",
		"overflow": "hidden",		
   	}); 
   	$("#alert_foot").css({//用于放置确定按钮的div
   		"width":"100%",
		"height":"20px",
		
   	}); 
   	$("#alert_button").css({//确定按钮样式，默认为input的button，此处只为定位用，可自行在创建标签时定义为其他，比如一个图片按钮
		"position":"relative",
		"left":"180px",
		
		
   	});  
}

function alert_dispear(){//用于确定按钮点击后执行 销毁创建的标签，此处也可制定其他函数，但建议要销毁销毁掉，否则会在每次alt（）执行后再次创建标签
	$("#alert").remove();
	$("#wall").remove();
}   
