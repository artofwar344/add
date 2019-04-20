<template>
<div>
	<towtop :name="titlename"/>
	 <!-- v-for="itme in datatext.List" -->
	<div class="reserveResult" v-for="itme in datatext.List">
		<div class="undoTop">
			<p>预约地市</p>
			<p class="rigth">{{itme.city_name}}</p>
		</div>
		<div class="undoTop">
			<p>预约县区</p>
			<p class="rigth">{{itme.cnty_name}}</p>
		</div>
		<div class="undoTop">
			<p>预约地址</p>
			<p class="rigth">{{itme.addr}}</p>
		</div>
		<div class="undoTop">
			<p>预约时间</p>
			<p class="rigth">{{itme.rsrvtn_tm}}</p>
		</div>
		<div class="undoTop">
			<p>预约号码</p>
			<p class="rigth">{{itme.rsrvtn_no}}</p>
		</div>
	</div>
	<!-- <button class="commonBtn" @click="service">撤销</button> -->
</div>
	
</template>

<script>
import towtop from '../../../components/HederTwo'
export default {
    components:{
        towtop
	},
	data(){
        return {
			titlename:"我的预约",
			datatext:''
        }
	},
	created(){
		this.query()
	},
	methods:{
		service(){
			this.$router.push('service');
		},
    query() {
      let setdata = {
        txnCommCom: {
          tRecInPage: "10",
          tPageJump: "3",
          tStsTraceId: "110567890"
        },
        txnBodyCom: {
          member_id: window.sessionStorage.getItem("userid"),
          matter_id: window.sessionStorage.getItem("matterid"),
          rsrvtn_type: "1",
          beginTime: "",
          endTime: ""
        }
      };
      this.$ajaxRequest("post", "/gsp/mng60033", setdata)
        .then(res => {
		  console.log(res);
		  this.datatext=res
        })

        .catch(response => {});
    }
	}
}
</script>

<style scoped lang="less">
@import "../../../assets/css/Engagement.less";
</style>