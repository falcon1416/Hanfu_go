var BG_Property={
	width:750,
	height:948,
	key:"bg",
	url:'http://aqm-photo.img-cn-hangzhou.aliyuncs.com/user/20170825/599f843b6c9d4.png',
};

var IMAGE_Property=function(){
	var data={
		x:150,
		y:150,
		type:'image',
		scale:10,
		url:'',
	}
	return data;
};

var TYPE_Property={
	x:375,
	y:328,
	key:"type",
	font_name:'SimHei',
	font_size:45,
	color:'#fff',
	text:'参赛证',
	type:"1",
	line_height:20,
	line_number:10,
}

var TEXT_Property=function(){
	var data={
		x:100,
		y:100,
		type:'text',
		font_name:'SimHei',
		font_size:20,
		color:'#000',
		text:'',
		line_height:20,
		line_number:10,
	}
	return data;
}


export {BG_Property,TYPE_Property,TEXT_Property,IMAGE_Property}