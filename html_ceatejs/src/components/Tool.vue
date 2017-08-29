<template>
	<div>
		<Row>
			<!-- <Col span="3">
				<Button type="ghost" @click="show_add_data=true">添加数据</Button>
			</Col> -->
			<Col span="6">
				<Upload :on-success="onUploadSuccess" :headers="UploadHeaders()" name="image" accept="image/*" :action="UploadURL()">
			        <Button type="ghost" icon="ios-cloud-upload-outline">添加自定义图片</Button>
			    </Upload>
			</Col>
			<Col span="4">
				<Button type="ghost" @click="show_add_text=true">添加自定义文字</Button>
			</Col>
			<Col span="3">
				<Button type="ghost" @click="expert()">导出图片</Button>
			</Col>
		</Row>
		
		

		<Modal v-model="show_add_data" title="添加数据" @on-ok="show_add_data=false" @on-cancel="show_add_data=false">
	        <p>对话框内容</p>
	        <p>对话框内容</p>
	        <p>对话框内容</p>
	    </Modal>

	    <Modal v-model="show_add_text" title="添加文本" @on-ok="onAddTextDone()" @on-cancel="show_add_text=false">
	        <Input v-model="text_value" placeholder="请输入..." style="width: 100%"></Input>
	    </Modal>
	</div>
</template>

<script>
import moment from 'moment'
import {HTTP_POST} from '../common/Http.js'
import {getHttpURL,getHost} from '../common/Config'


export default {
	data() {
		return {
			show_add_data:false,
			show_add_text:false,

			text_value:'',
		}
	},
	methods: {
		UploadHeaders:function(){
			return {platform:"web"};
		},
		UploadURL:function(){
			return getHost()+getHttpURL("UPLOAD_URL");
		},
		onUploadSuccess:function(response, file, fileList){
			var d = response.data;
            var obj = eval('(' + d + ')');
            var url=obj.info.url;
            console.log(obj);
            var key=moment().format("X");
            var data={key:key,url:url};
            this.$emit('onAddImage',data);
		},
		onAddTextDone:function(){
			this.show_add_text=false;
			if(this.text_value.length==0) return;

			var key=moment().format("X");
            var data={key:key,text:this.text_value};
			this.$emit('onAddText',data);

			this.text_value="";
		},
		expert:function(){
			this.$emit('onSavePic');
		}
	},
	mounted() {
		loadData(this);
	}
}

function loadData(self){
	HTTP_POST("LEAGUE_INFO", {l_id:130},function(code,err,info){

	});
}
</script>