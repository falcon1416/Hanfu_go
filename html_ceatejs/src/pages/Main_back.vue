<template>
	<div>
		<Row>
			<Col span="20" >
				<canvas ref="myCanvas" :width="canvas.width" :height="canvas.height" style="background:black"></canvas>
			</Col>
			<Col span="4">
				<Row>
					<Col>
						<span>参赛证大小</span>
					</Col>
				</Row>
				<Row>
					<Col>
		                <Select @on-change="onChangeCanvasSize" v-model="canvas.select_value" size="small">
		                    <Option value="300X400" key="">300X400</Option>
		                    <Option value="400X600" key="">400X600</Option>
		                </Select>
		            </Col>
				</Row>
				<br/>

				<Row>
					<Col>
						<span>背景图片</span>
					</Col>
				</Row>
				<Row>
					<Col>
		                <Select @on-change="onChangeBG" v-model="bg.url" size="small">
		                    <Option v-for="item,index in bg.photo_list" :value="item.url" :key="item.url">{{item.title}}</Option>
		                </Select>
		            </Col>
				</Row>
				<br/>

				<Row>
					<Col>
						<span>赛事标题</span>
					</Col>
				</Row>
				<Row>
					<Col>
						<span>{{league.x}},{{league.y}}</span>
					</Col>
				</Row>
				<Row>
					<Col span="8">
						<span>标题长度</span>
					</Col>
					<Col span="8">
						<Input-number @on-change="onChangeLeague" :max="league.title.length" :min="4" v-model="league.title_length" size="small"></Input-number>
					</Col>
				</Row>
				<Row>
					<Col span="8">
						<span>行高</span>
					</Col>
					<Col span="8">
						<Input-number @on-change="onChangeLeague" :max="100" :min="4" v-model="league.line_height" size="small"></Input-number>
					</Col>
				</Row>
				<Row>
					<Col span="8">
						<span>每行文字</span>
					</Col>
					<Col span="8">
						<Input-number @on-change="onChangeLeague" :max="40" :min="4" v-model="league.line_number" size="small"></Input-number>
					</Col>
				</Row>
				<Row>
					<Col span="8">
						<span>大小</span>
					</Col>
					<Col span="8">
						<Input-number @on-change="onChangeLeague" :max="72" :min="10" v-model="league.size" size="small"></Input-number>
					</Col>
				</Row>
				<Row>
					<Col span="8">
						<span>字体</span>
					</Col>
					<Col span="8">
		                <Select @on-change="onChangeLeague" v-model="league.font_name" size="small">
		                    <Option v-for="item,index in font_list" :value="item.value" :key="item.value">{{item.title}}</Option>
		                </Select>
		            </Col>
				</Row>
			</Col>
		</Row>
	</div>
	
</template>

<script>
import createjs from 'createjs-cmd';
import {BG_LIST} from '../common/Photo.js'
import {FONT_LIST} from '../common/Font.js'

export default {
	data() {
		return {
			//画布容器
			canvas:{
				stage:null,
				width:300,
				height:400,

				select_value:"300X400",
				update:false,
			},

			//背景图
			bg:{
				bg_bitmap:null,
				url:BG_LIST[0].url,

				//背景图资料
				photo_list:BG_LIST,
			},

			//标题
			league:{
				canvas_text:null,

				title:'这是一个爱球迷测试标题长度的文字内容这是一个爱球迷测试标题长度的文字内容这是一个爱球迷测试标题长度的文字内容这是一个爱球迷测试标题长度的文字内容这是一个爱球迷测试标题长度的文字内容',
				title_length:10,
				size:18,
				line_height:20,
				line_number:10,

				color:'#000',
				font_name:FONT_LIST[0].value,

				x:100,
				y:100,
			},



			//字体数据
			font_list:FONT_LIST
	    }
  	},
	methods: {
		//修改画布大小
		onChangeCanvasSize:function(){
			var value=this.canvas.select_value;
			var a=value.split("X");
			this.canvas.width=a[0];
			this.canvas.height=a[1];
		},
		//修改背景图
		onChangeBG:function(){
			setBGImage(this);
		},
		//修改赛事标题的信息
		onChangeLeague:function(){
			setLeagueInfo(this);
		},
	},
	mounted() {
		initView(this)
	}
}

//设置背景图片
function setBGImage(self){
	var image=new Image();
	image.src=self.bg.url;
	image.onload=function(e){
		if(self.bg.bg_bitmap==null){
			//第一次绘制
			self.bg.bg_bitmap=new createjs.Bitmap(e.target);
			self.canvas_stage.addChildAt(self.bg.bg_bitmap,0);
		}else{
			self.bg.bg_bitmap.image=e.target;
		}
		self.canvas.update = true;
	};
}

//设置赛事标题
function setLeague(self){
	var title=self.league.title.substr(0,self.league.title_length);

	if(self.league.canvas_text==null){
		var font=self.league.size+"px "+self.league.font_name;
		self.league.canvas_text= new createjs.Text(title, font, self.league.color);
		self.league.canvas_text.textAlign = "center";
		self.league.canvas_text.textBaseline = "alphabetic";
		self.league.canvas_text.lineHeight=self.league.line_height;
		self.league.canvas_text.x = self.league.x;
		self.league.canvas_text.y = self.league.y;
		self.league.canvas_text.scale = self.league.canvas_text.originalScale = Math.random() * 0.4 + 0.6;

		self.canvas_stage.addChildAt(self.league.canvas_text,0);

		//为啥没有效果？？？？
		// var hitArea = new createjs.Shape();
		// hitArea.graphics.beginFill("#FFF").drawEllipse(-11, -14, 24, 18);
		// // position hitArea relative to the internal coordinate system of the target bitmap instances:
		// hitArea.x = self.league.canvas_text.width / 2;
		// hitArea.y = self.league.canvas_text.height / 2;
		// self.league.canvas_text.hitArea = hitArea;
		

		self.league.canvas_text.on("mousedown", function (evt) {
			this.parent.addChild(this);
			this.offset = {x: this.x - evt.stageX, y: this.y - evt.stageY};
		});

		// the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.
		self.league.canvas_text.on("pressmove", function (evt) {
			this.x = evt.stageX + this.offset.x;
			this.y = evt.stageY + this.offset.y;
			// indicate that the stage should be updated on the next tick:
			self.canvas.update = true;

			self.league.x=this.x;
			self.league.y=this.y;
		});

		self.league.canvas_text.on("rollover", function (evt) {
			this.scale = this.originalScale * 1.2;
			self.canvas.update = true;
		});

		self.league.canvas_text.on("rollout", function (evt) {
			this.scale = this.originalScale;
			self.canvas.update = true;
		});

	}
		
	self.canvas.update = true;
}

//设置赛事标题长度
function setLeagueInfo(self){
	var title=self.league.title.substr(0,self.league.title_length);
	var number=self.league.line_number;
	var title_list=[];
	while(title.length>number){
		title_list.push(title.substr(0,number));
		title=title.substr(number)
	}
	title_list.push(title);
	title="";
	for (var i = 0; i < title_list.length; i++) {
		title=title+title_list[i]+"\n"
	}


	self.league.canvas_text.text=title;

	var font=self.league.size+"px "+self.league.font_name;
	self.league.canvas_text.font=font;

	self.league.canvas_text.lineHeight=self.league.line_height;

	self.canvas.update = true;
}


function initView(self){
	var canvas = self.$refs.myCanvas
	self.canvas_stage = new  createjs.Stage(canvas);
	self.canvas_stage.autoClear = false;
	//移动
	createjs.Touch.enable(self.canvas_stage);
	self.canvas_stage.enableMouseOver(10);
	self.canvas_stage.mouseMoveOutside = true;
	//监听移动
	createjs.Ticker.addEventListener("tick", function(event){
		if (self.canvas.update) {
			self.canvas.update = false; // only update once
			self.canvas_stage.update(event);
		}
	});
	
	//绘制默认背景图
	setBGImage(self);
	//绘制默认的标题
	setLeague(self);

}

</script>