<template>
	<div>
		<Row>
			<Col>
				<span>参赛证大小</span>
			</Col>
		</Row>
		<Row >
			<Col span="10">
				<Input-number @on-change="onChangeProperty" :max="1000" :min="4" v-model="info.width" size="small"></Input-number>
			</Col>
			<Col span="4">
				<span>X</span>
			</Col>
			<Col span="10">
                <Input-number @on-change="onChangeProperty" :max="1000" :min="4" v-model="info.height" size="small"></Input-number>
            </Col>
		</Row>
		<br />

		<Row>
			<Col>
				<span>背景图</span>
			</Col>
			<Col>
				<Radio-group @on-change="onChangePhotoType" v-model="is_photo_type">
			        <Radio label="1">
			            <span>系统</span>
			        </Radio>
			        <Radio label="2">
			            <span>自定义</span>
			        </Radio>
			    </Radio-group>
			</Col>
		</Row>
		<Row v-show="is_photo_type=='1'">
			<Col>
                <Select @on-change="onChangeBG" v-model="info.url" size="small">
                    <Option v-for="item,index in photo_list" :value="item.url" :key="item.url">{{item.title}}</Option>
                </Select>
            </Col>
		</Row>
		<Row v-show="is_photo_type=='2'">
			<Col>
                <Upload :on-success="onUploadSuccess" :headers="UploadHeaders()" name="image" accept="image/*" :action="UploadURL()">
			        <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
			    </Upload>
            </Col>
		</Row>

	</div>
</template>
<script>
import {BG_LIST} from '../common/Photo.js'
import {getHttpURL,getHost} from '../common/Config'

export default {
	data() {
		return {
			is_photo_type:"1",

			photo_list:BG_LIST,
		}
  	},
  	props: ['info'],
	methods: {
		UploadHeaders:function(){
			return {platform:"web"};
		},
		UploadURL:function(){
			return getHost()+getHttpURL("UPLOAD_URL");
		},
		onChangeProperty:function(){
			this.$emit('onRefreshBG');
		},
		onChangePhotoType:function(){
			this.$emit('onRefreshBG');
		},
		onChangeBG:function(){
			this.$emit('onRefreshBG');
		},
		onUploadSuccess:function(response, file, fileList){
			var d = response.data;
            var obj = eval('(' + d + ')');
            var url=obj.info.url;

            this.info.url=url;
            this.$emit('onRefreshBG');
		}
	},
	mounted() {
		
	}
}
</script>
