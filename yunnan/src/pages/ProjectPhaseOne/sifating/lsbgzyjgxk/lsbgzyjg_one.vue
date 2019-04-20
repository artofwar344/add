<template>
	<div class="lsbgzyjg_one">
		<towtop :name="titlename"/>
		<div class="content">
			<ul>
        <div class="littlestarbig">
          <span class="littlestar">*</span>
          <li>
            <h2>变更事项</h2>
            <p>变更执业机构(省内变更)</p>
          </li>
        </div>
			</ul>
		</div>
		<!-- <Btn plain block @click="next_btn">下一步</Btn> -->
		<div class="padTopAdd5">
			<mybutton :btnData="btnData" @click="next_btn" />
		</div>
	</div>
</template>
<script>
	import towtop from '../../../../components/HederTwo'
	import ajaxRequest from '../../../../utils/ajaxRequest'
	import mybutton from "../../../../components/MyButton";
	export default {
		components:{
			mybutton,
			towtop
		},
		data() {
			return {
				btnData:[
				{
					text:'下一步',
					disabled: false,
					isSure: true,
				}
				],
				titlename:"律师变更执业机构许可(省内变更)",
				c_zylbc:'',
				workid:'',
			}
		},
		methods: {
			next_btn() {

				this.$router.push({

					name:'lsbgzyjg_two',
					params:{
						c_zylbc:this.c_zylbc,
					}
				})
				// alert('这是律师类别'+this.c_zylbc)
			},

		},
		created() {

			var WorkId = this.$route.query.WorkId;
			// alert(WorkId)
			console.log(111222,WorkId)
			sessionStorage.setItem("WorkId",WorkId)
			console.log(sessionStorage.getItem("WorkId"))
			let numberid = sessionStorage.getItem("userid");
			console.log('这是numid',numberid)

			let personid = sessionStorage.getItem("cardid");
			console.log('这是perid',personid)
			let data = {
				"txnCommCom": {
					"tenant":"530000000000",
					"txn_itt_chnl_id":"00",
					"txn_itt_chnl_type":"11"
				},
				// "txnBodyCom": {
				// 	"c_sfzh":"532231199309040927",
  		// 			"c_xm":"",
  		// 			"c_zyzh":"",
  		// 			"c_bh":"",
  		// 			"c_zyjg":""
				// }
				"txnBodyCom": {
					matter_id: window.sessionStorage.getItem("matterid"),
					"c_sfzh":personid,
					"c_xm":"",
					"c_zyzh":"",
					"c_bh":"",
					"c_zyjg":""
				}

			}
			let pagejump = {
				"tRecInPage":"10",
				"tPageJump":"1",
			}
			this.$ajaxRequest('post','/gsp/mng90039',data,pagejump)
			.then(res=>{
				console.log(res)
				this.c_zylbc = res.list[0].c_zylbc
				console.log('这是id',this.c_zylbc)
			})
			.catch(error=>{
				console.log(error)
			})
		}

	};
</script>
<style>
.lsbgzyjg_one .hui-btn.is-block {
	font-weight: 700;
	width: 5.9rem;
	height: 0.9rem;
	margin: 1rem auto;
	background-color: #2D7FFC;
	font-size: 0.32rem;
	color: #fff;
}
.lsbgzyjg_one .content {
	background-color: #fff;
}
.lsbgzyjg_one ul {
	width: 100%;
}
.lsbgzyjg_one li {
	height: 1rem;
	line-height: 1rem;
	width: 96%;
	margin: 0 auto;
	font-size: 0.28rem
}
.lsbgzyjg_one h2 {
	display: inline-block;
	width: 49%;
	text-align: left;
}
.lsbgzyjg_one p {
	display: inline-block;
	width: 49%;
	text-align: right;
}
.lsbgzyjg_one .littlestarbig{
  position: relative;
}
.lsbgzyjg_one .littlestar{
  display: inline-block;
  color: red;
  font-size:0.4rem;
  position: absolute;
  left:0;
  top: 0.36rem;
}

</style>
