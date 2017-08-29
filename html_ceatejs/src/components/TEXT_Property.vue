<template>
	<div v-if="info">
		<Row style="margin-top:5px; padding:0 10px">
			<Col span="8">
				<span>长度</span>
			</Col>
			<Col span="8">
				<Input-number @on-change="onChange" :max="50" :min="4" v-model="info.text.length" size="small"></Input-number>
			</Col>
		</Row>
		<Row style="margin-top:5px; padding:0 10px">
			<Col span="8">
				<span>行高</span>
			</Col>
			<Col span="8">
				<Input-number @on-change="onChange" :max="100" :min="4" v-model="info.line_height" size="small"></Input-number>
			</Col>
		</Row>
		<Row style="margin-top:5px; padding:0 10px">
			<Col span="8">
				<span>每行文字</span>
			</Col>
			<Col span="8">
				<Input-number @on-change="onChange" :max="40" :min="4" v-model="info.line_number" size="small"></Input-number>
			</Col>
		</Row>
		<Row style="margin-top:5px; padding:0 10px">
			<Col span="8">
				<span>大小</span>
			</Col>
			<Col span="8">
				<Input-number @on-change="onChange" :max="72" :min="10" v-model="info.font_size" size="small"></Input-number>
			</Col>
		</Row>
		<Row style="margin-top:5px; padding:0 10px">
			<Col span="8">
				<span>颜色</span>
			</Col>
			<Col span="8">
				<!-- <Input type="color" @on-change="onChange" v-model="info.color" size="small"></Input> -->
				<a style="width:20px;height:20px; display:block;border:solid 1px #dddee1" href="javascript:0;" id="color"></a>
			</Col>
		</Row>
		<Row style="margin-top:5px; padding:0 10px">
			<Col span="8">
				<span>字体</span>
			</Col>
			<Col span="8">
                <Select @on-change="onChange" v-model="info.font_name" size="small">
                    <Option v-for="item,index in font_list" :value="item.value" :key="item.value">{{item.title}}</Option>
                </Select>
            </Col>
		</Row>

		<Row style="margin-top:5px; padding:0 10px">
			<Col span="8">
				<span>位置</span>
			</Col>
		</Row>
		<Row style="margin-top:5px; padding:0 10px">
			<Col>
				X:<Input-number @on-change="onChange" v-model="info.x" size="small"></Input-number>
			</Col>
			<Col>
				Y:<Input-number @on-change="onChange" v-model="info.y" size="small"></Input-number>
			</Col>
		</Row>
	</div>
</template>

<script>
import 'assets/js/jquery.bigcolorpicker.min.js'
import 'assets/css/jquery.bigcolorpicker.css'

import TEXTITEM from '../components/TEXT_Property'

import {FONT_LIST} from '../common/Font.js'



export default {
	data() {
		return {
			font_list:FONT_LIST,
		}
  	},
  	props: ['info'],
	methods: {
		onChange:function(){
			this.$emit('onRefresh');
		}
	},
	mounted() {
		var self=this;
		$("#color").bigColorpicker(function(el,color){
			self.info.color=color;
			$(el).css("background-color",color);
			self.$emit('onRefresh');
		});
	}
}
</script>


