<template>
	<div v-if="info">
		<Row>
			<Col>
				<span>证件类型</span>
			</Col>
		</Row>
		<Row>
			<Col>
                <Select @on-change="onChangeType" v-model="select_type" size="small">
                    <Option v-for="item,index in cert_list" :value="index" :key="item.value" >{{item.title}}</Option>
                </Select>
            </Col>
		</Row>
		<Row v-show="info.type=='99'">
			<Col>
                <Input @on-change="onChangeText" v-model="info.text" placeholder="请输入..." style="width: 100%"></Input>
            </Col>
		</Row>
		<br />

		<TEXTITEM :info="info" v-on:onRefresh="onRefresh"></TEXTITEM>


	</div>
</template>
<script>
import TEXTITEM from '../components/TEXT_Property'

import {CERT_LIST} from '../common/Cert_Type.js'

export default {
	data() {
		return {
			select_type:0,
			cert_list:CERT_LIST,
		}
  	},
  	props: ['info'],
	methods: {
		onChangeText:function(){
			this.$emit('onRefreshType');
		},
		onRefresh:function(){
			this.$emit('onRefreshType');
		},
		onChangeType:function(){
			var item=this.cert_list[this.select_type];
			this.info.type=item.value;
			this.info.text=item.title;

			if(this.info.type==99){
				this.info.text="";
			}else{
				this.$emit('onRefreshType');
			}
		},

	},
	components: {
        TEXTITEM,
    },
	mounted() {
		
	}
}
</script>
