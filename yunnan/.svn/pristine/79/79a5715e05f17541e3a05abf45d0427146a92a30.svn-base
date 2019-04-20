<template>
	<div class="birthProvez">
		<towtop name="出生医学证明" />
		<div class="icbcBox">
			<h3>身份证号：</h3>
			<input type="text" placeholder="自动获取用户身份证信息" v-model="text_zuchehao" disabled="disabled">
			<span><span class="blue"></span>注：目前只支持查询2017年1月1日后在云南省医疗机构内正常分娩的小孩的出生医学证明信息</span>
		</div>
		<div class="padTopAdd5">
			<mybutton :btnData="btnData" @click="face_btn"/>
		</div>
	</div>
</template>
<script>
	import towtop from '@/components/HederTwo.vue';
	import mybutton from "@/components/MyButton";
	export default {
		data() {
			return {
				btnData:[
				{
					text:'人脸识别',
					disabled: false,
					isSure: true,
				}
				],
				text_zuchehao:window.sessionStorage.getItem('cardid'),
				// text_zuchehao:'21012219940706211x',
			}
		},
		components: {
			towtop,
			mybutton,
		},
		mounted() {
			window.LiveFaceResult = this.LiveFaceResult
		},
		methods:{
			face_btn(){
				console.log('人脸识别')
				this.isAndroidios()
			},
			isAndroidios() {
				let sendata = {
					isIdcard: "0"
				};
				this.$CallModule("liveFace", sendata);
			},
			LiveFaceResult(senobject) {
				// console.log(senobject)
				// alert(senobject)
				this.query_person()

			},
			query_person() {
				let data = {
					"txnCommCom":{
						"txnIttChnlId":"1",
						"txnIttChnlCgyCode":"1",
						"tRecInPage":"10",
						"tPageJump":"1"
					},"txnBodyCom":{
						"matter_id":"1",
						"chann_id":"1",
						"rybh":window.sessionStorage.getItem('cardid'),
						"name":window.sessionStorage.getItem('username'),
					}
				}
				this.$ajaxRequest("post","/gsp/mng50004", data)
				.then(res=>{
					console.log(res)
					if (res.result_code == 'success') {
						this.$toast('出生医学证照生成成功，请到我的证照进行查询')
					}else {
						this.$router.push('birthProvez_file')
						return
					}
				})
				.catch(err=>{
					console.log(err)
					this.$router.push('birthProvez_file')
					return
				})
			}

		}
	}
</script>
<style>
.birthProvez .icbcBox {
	padding: 0.8rem 0.36rem 1rem;
	background: #fff;
	text-align: left;
}
.birthProvez h3 {
	display: inline-block;
	font-size: 0.3rem;
	color: #333;
	margin: 0.2rem 0;
}
.birthProvez  input {
	display: inline-block;
	width: 67%;
	height: 0.8rem;
	border: 0;
	border-bottom: 1px solid #ececec;
	line-height: 0.8rem;
	margin: 0 auto;
	font-size: 0.3rem;
	border-bottom: 1px solid #ececec;
	/*padding-left: 0.2rem;*/
}
.birthProvez .icbcBox>span {
	display: block;
	width: 85%;
	margin: 0.3rem auto 0.3rem auto;
	line-height: 0.4rem;
	color: #FA6366;
}
.birthProvez .blue {
	display: inline-block;
	width: 0.09rem;
	height: 0.2rem;
	background-color: rgb(45, 127, 252);
	margin-right: 0.1rem;
}
</style>