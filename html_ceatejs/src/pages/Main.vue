<template>
	<div>
		<Row>
			<Col span="4">
				<Tree :data="info" v-on:on-select-change="onTreeSelect"></Tree>
			</Col>
			<Col span="16" >
				<Row>
					<Col>
						<TOOL v-on:onSavePic="onSavePic" v-on:onAddImage="onAddImage" v-on:onAddText="onAddText"></TOOL>
					</Col>
				</Row>
				<br />
				<Row>
					<Col style="text-align:center;background: #777">
						<canvas ref="myCanvas" :width="info[0].property.width" :height="info[0].property.height" style="background:black;margin:0 auto;"></canvas>
					</Col>
				</Row>
			</Col>
			<Col span="4">
				<BGITEM v-show="this.tree_select_key=='bg'" :info="info[0].property" v-on:onRefreshBG="onRefreshBG()"></BGITEM>
				<TYPEITEM v-on:onRefreshType="onRefreshType()" v-if="this.tree_select_key=='type'" :info="info[0].children[0].property"></TYPEITEM>

				<IMAGEITEM v-on:onRefreshImage="onRefreshImage()" v-if="isShowItem('image')" :info="getSelectProperty()"></IMAGEITEM>
				<TEXTITEM v-on:onRefresh="onRefreshText()" v-if="isShowItem('text')" :info="getSelectProperty()"></TEXTITEM>
			</Col>
		</Row>
	</div>
	
</template>

<script>
import createjs from 'createjs-cmd';

import {BG_Property,TYPE_Property,TEXT_Property,IMAGE_Property} from '../common/Property.js'

import BGITEM from '../components/BG_Property'
import TYPEITEM from '../components/TYPE_Property'
import IMAGEITEM from '../components/IMAGE_Property'
import TEXTITEM from '../components/TEXT_Property'

import TOOL from '../components/Tool'

export default {
	data() {
		return {
			canvas:{
				Stage:null,
				update:false,
			},
			
			tree_select_key:"bg",

			info:[{
				expand: true,
				title:"背景",
				key:"bg",
				disableCheckbox: true,
				selected:true,
				bitmap:null,
				property:BG_Property,
				children:[{
					title:"证件类型",
					key:"type",
					canvas_text:null,
					property:TYPE_Property,
				}],
			}],
		}
  	},
  	components: {
        BGITEM,
        TYPEITEM,
        IMAGEITEM,
        TEXTITEM,

        TOOL,
    },
	methods: {
		onTreeSelect:function(nodes){
			this.tree_select_key=nodes[0].key;
		},
		onRefreshBG:function(){
			setCanvasBG(this);
		},
		onRefreshType:function(){
			setCertType(this);
		},
		onRefreshImage:function(){
			refreshImage(this,this.tree_select_key);
		},
		onRefreshText:function(){
			refreshText(this,this.tree_select_key);
		},
		isShowItem:function(type){
			var index=querySelectNode(this,this.tree_select_key);
			if(index==-1) return false;

			var property=this.info[0].children[index].property;
			
			if(property.type==type){
				return true;
			}else{
				return false;
			}
		},
		getSelectProperty:function(){
			var index=querySelectNode(this,this.tree_select_key);
			if(index==-1) return null;

			var property=this.info[0].children[index].property;
			return property;
		},
		//添加图片
		onAddImage:function(data){
			var property=IMAGE_Property();
			property.url=data.url;
			var item={
				title:"自定义图片",
				key:data["key"],
				bitmap:null,
				property:property,
			}
			this.info[0].children.push(item);
			refreshImage(this,data["key"]);
		},
		onAddText:function(data){
			var property=TEXT_Property();
			property.text=data.text;
			var item={
				title:"自定义文字",
				key:data["key"],
				canvas_text:null,
				property:property,
			}
			
			item.canvas_text=setText(this,item.canvas_text,property,data["key"]);
			this.info[0].children.push(item);
		},
		onSavePic:function(){
			var data=this.canvas.stage.toDataURL();
			console.log(data)
		}
	},
	mounted() {
		initView(this);

		setCanvasBG(this);

		var self=this;
		setTimeout(function(){
			setCertType(self);
		},1.0);  
		
	}
}



function initView(self){
	var canvas = self.$refs.myCanvas
	self.canvas.stage = new  createjs.Stage(canvas);
	self.canvas.stage.autoClear = false;
	//移动
	createjs.Touch.enable(self.canvas.stage);
	self.canvas.stage.enableMouseOver(10);
	self.canvas.stage.mouseMoveOutside = true;
	//监听移动
	createjs.Ticker.addEventListener("tick", function(event){
		if (self.canvas.update) {
			self.canvas.update = false; // only update once
			self.canvas.stage.update(event);
		}
	});

}

//刷新背景图
function setCanvasBG(self){
	var image=new Image();
	image.src=self.info[0].property.url;
	image.onload=function(e){
		if(self.info[0].bitmap==null){
			//第一次绘制
			self.info[0].bitmap=new createjs.Bitmap(e.target);
			self.canvas.stage.addChild(self.info[0].bitmap);
		}else{
			self.info[0].bitmap.image=e.target;
		}
		self.canvas.update = true;
	};
}

//刷新背景图
function setImage(self,index){
	var image=new Image();
	image.src=self.info[0].children[index].property.url;
	var key=self.info[0].children[index].key;
	image.onload=function(e){
		if(self.info[0].children[index].bitmap==null){
			//第一次绘制
			self.info[0].children[index].bitmap=new createjs.Bitmap(e.target);
			self.canvas.stage.addChild(self.info[0].children[index].bitmap);

			var bitmap=self.info[0].children[index].bitmap;
			bitmap.tag=key;
			bitmap.on("click", function (evt) {
				self.tree_select_key=this.tag;
			});

			bitmap.on("mousedown", function (evt) {
				this.parent.addChild(this);
				this.offset = {x: this.x - evt.stageX, y: this.y - evt.stageY};
			});

			// the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.
			bitmap.on("pressmove", function (evt) {
				this.x = parseInt(evt.stageX) + parseInt(this.offset.x);
				this.y = parseInt(evt.stageY) + parseInt(this.offset.y);
				// indicate that the stage should be updated on the next tick:
				self.canvas.update = true;

				self.info[0].children[index].property.x=this.x;
				self.info[0].children[index].property.y=this.y;
			});

		}else{
			self.info[0].children[index].bitmap.image=e.target;
		}
		
		//点击区域
		var hitArea = new createjs.Shape;   
		hitArea.graphics.beginFill("#FFF").drawEllipse(0, 0, image.width, image.height);
		hitArea.x = 0;
		hitArea.y = 0;  


		self.info[0].children[index].bitmap.hitArea  = hitArea;

		self.info[0].children[index].bitmap.x=self.info[0].children[index].property.x;
		self.info[0].children[index].bitmap.y=self.info[0].children[index].property.y;

		var scale=self.info[0].children[index].property.scale;
		scale=scale/10.0;
		self.info[0].children[index].bitmap.scaleX=scale;
		self.info[0].children[index].bitmap.scaleY=scale;
		self.canvas.update = true;
	};
}

//设置
function setText(self,canvas_text,property,key){
	var font=property.font_size+"px "+property.font_name;
	if(canvas_text==null){
		canvas_text= new createjs.Text();
		var index=self.canvas.stage.getChildIndex()+1;
		self.canvas.stage.addChildAt(canvas_text,1);

		canvas_text.on("click", function (evt) {
			self.tree_select_key=this.tag;
		});

		canvas_text.on("mousedown", function (evt) {
			this.parent.addChild(this);
			this.offset = {x: this.x - evt.stageX, y: this.y - evt.stageY};
		});

		// the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.
		canvas_text.on("pressmove", function (evt) {
			this.x = parseInt(evt.stageX) + parseInt(this.offset.x);
			this.y = parseInt(evt.stageY) + parseInt(this.offset.y);
			// indicate that the stage should be updated on the next tick:
			self.canvas.update = true;

			property.x=this.x;
			property.y=this.y;
		});
	}

	canvas_text.tag=key;
	canvas_text.text=property.text;
	canvas_text.font=font;
	canvas_text.color=property.color;
	canvas_text.lineWidth=370;

	canvas_text.textAlign = "center";
	canvas_text.textBaseline = "alphabetic";
	canvas_text.lineHeight=property.line_height;
	canvas_text.x = property.x;
	canvas_text.y = property.y;

	self.canvas.update = true;
	
	return canvas_text;
}

//设置证件类型
function setCertType(self){
	var canvas_text=self.info[0].children[0].canvas_text;
	var property=self.info[0].children[0].property;
	var key=self.info[0].children[0].key;
	self.info[0].children[0].canvas_text=setText(self,canvas_text,property,key);
}

//设置image
function refreshImage(self,key){
	var index=querySelectNode(self,key);
	setImage(self,index);
}

//设置image
function refreshText(self,key){
	var index=querySelectNode(self,key);
	var canvas_text=self.info[0].children[index].canvas_text;
	var property=self.info[0].children[index].property;
	var key=self.info[0].children[index].key;
	setText(self,canvas_text,property,key);
}

//查找选择的节点index
function querySelectNode(self,key){
	var select_index=-1;
	if(!self.info) return select_index;

	for(var i=0; i< self.info[0].children.length;i++){
		if(self.info[0].children[i].key==key){
			select_index=i;
			break;
		}
	}

	return select_index;
}

</script>