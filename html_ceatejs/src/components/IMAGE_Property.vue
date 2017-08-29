<template>
	<div v-if="info">

		<Row>
			<Col span="8">
				<span>位置</span>
			</Col>
		</Row>
		<Row>
			<Col>
				<Input-number @on-change="onChange" v-model="info.x" size="small"></Input-number>
			</Col>
			<Col>
				<Input-number @on-change="onChange" v-model="info.y" size="small"></Input-number>
			</Col>
		</Row>
		<Row>
			<Col span="8">
				<span>缩放</span>
			</Col>
			<Col span="8">
				<Input-number @on-change="onChange" :max="20" :min="1" v-model="info.scale" size="small"></Input-number>
			</Col>
		</Row>
		<Row>
			<Col span="8">
				<span>图片</span>
			</Col>
		</Row>
		<Row>
			<Col span="8">
				<Upload :on-success="onUploadSuccess" :headers="UploadHeaders()" name="image" accept="image/*" :action="UploadURL()">
			        <Button type="ghost" icon="ios-cloud-upload-outline">更换图片</Button>
			    </Upload>
			</Col>
		</Row>
	</div>
</template>

<script>
import {getHttpURL,getHost} from '../common/Config'

export default {
	data() {
		return {
			
		}
  	},
  	props: ['info'],
	methods: {
		onChange:function(){
			this.$emit('onRefreshImage');
		},
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

            this.info.url=url;
            this.$emit('onRefreshImage');
		}
	},
	mounted() {
		
	}
}
</script>


