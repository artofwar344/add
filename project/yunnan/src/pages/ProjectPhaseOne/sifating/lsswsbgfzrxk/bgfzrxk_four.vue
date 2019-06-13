<template>
	<div>
		<towtop style="margin: 0" :name="titlename"/>
		<div class="header2">变更后负责人基本情况</div>
		<div class="content">
			<div class="headimg">
				<img :src="imgUrl" alt="">
			</div>
			<ul>
				<li>
					<h2>姓名</h2>
					<p>{{  nameValue }}</p>
				</li>
				<li>
					<h2>性别</h2>
					<p>{{  sexValue }}</p>
				</li>
				<li>
					<h2>出生日期</h2>
					<p>{{  birthValue }}</p>
				</li>
				<li>
					<h2>手机号码</h2>
					<p>{{  telValue }}</p>
				</li>
				<li>
					<h2>政治面貌</h2>
					<p>{{  politicValue }}</p>
				</li>
				<li>
					<h2>首次执业时间</h2>
					<p>{{  firstValue }}</p>
				</li>
				<li>
					<h2>执业证号</h2>
					<p>{{  licenseValue }}</p>
				</li>
				<li>
					<h2>资格证类型</h2>
					<p>{{  typeValue }}</p>
				</li>
				<li>
					<h2>资格证号</h2>
					<p>{{  signalValue }}</p>
				</li>
				<li>
					<h2>身份证号</h2>
					<p>{{  idValue }}</p>
				</li>
			</ul>
		</div>
		<div class="header2">律师事务所信息</div>
		<div class="content">
			<ul>
				<li>
					<h2>律所名称</h2>
					<p>{{lawyerValue}}</p>
				</li>
				<li>
					<h2>组织形式</h2>
					<p>{{groupValue}}</p>
				</li>
			</ul>
		</div>
		<div class="header2">其他信息</div>
    <div class="middleone">
      <span class="middletwo">*</span>
		  <Field type="textarea" label="申请理由" placeholder="系统反显" :value="reasonValue"    rows="6" v-on:currentval="handleTextareaVal" readonly>
    	</Field>
    </div>
    	<!-- <Btn plain block @click="next_btn">提交</Btn> -->
		<div class="padTopAdd5">
          <mybutton :btnData="btnData" @click="next_btn" />
        </div>
	</div>
</template>
<script>
	import towtop from '../../../../components/HederTwo'
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
					text:'提交',
					disabled: false,
					isSure: true,
					}
				],
				titlename:"律师事务所（分所）变更负责人许可",
				nameValue:'系统回显',
				sexValue:'系统回显',
				birthValue:'系统回显',
				telValue:'系统回显',
				politicValue:'系统回显',
				firstValue:'系统回显',
				licenseValue:'系统回显',
				typeValue:'系统回显',
				signalValue:'系统回显',
				idValue:'系统回显',
				lawyerValue:'系统回显',
				groupValue:'系统回显',
				reasonValue:'',
				imgUrl:'',
			}

		},
		methods: {
			next_btn() {
				let imgLlist = JSON.parse(sessionStorage.getItem('SFTimgList'))
				let setdata = {
					'workid':'',
					'memberId':"",
					matter_id: window.sessionStorage.getItem("matterid"),
					'fromCode':"",
					'recordId':"",
					'formywId':"",
					'toapprove':"2",
					'formdata':{
						nameValue:this.nameValue,
						sexValue:this.sexValue,
						birthValue:this.birthValue,
						telValue:this.telValue,
						politicValue:this.politicValue,
						firstValue:this.firstValue,
						licenseValue:this.licenseValue,
						typeValue:this.typeValue,
						signalValue:this.signalValue,
						idValue:this.idValue,
						lawyerValue:this.lawyerValue,
						groupValue:this.groupValue,
						reasonValue:this.reasonValue,
						imgUrl:this.imgUrl,
						imgs1:imgLlist[0].uploadId,
						imgs2:imgLlist[1].uploadId,
						imgs3:imgLlist[2].uploadId,
					}

				}
				this.$ajaxRequest("post", "/gsp/form00001", setdata)
				.then(res => {
					if (res.list.length <= 0) {
						console.log(res)
					return false;
					} else {
            this.$router.push({name: 'sfResultPage'})
						console.log(res.list);
					}
				})
				.catch(error => {
					console.log(error);
					_self.$toast("提交失败！");
				});
    			// this.$router.push('/bgfzrxk_five')
    		},
    		handleTextareaVal(val) {
    			this.textareaValue = val
    		}

		},
		activated(){
			let infodata = JSON.parse(sessionStorage.getItem("SFTparternInfo"));
			this.nameValue = infodata.nameValue,
			this.sexValue = infodata.sexValue,
			this.birthValue = infodata.birthValue,
			this.telValue = infodata.telValue,
			this.politicValue = infodata.politicValue,
			this.firstValue = infodata.firstValue,
			this.licenseValue = infodata.licenseValue,
			this.typeValue = infodata.typeValue,
			this.signalValue = infodata.signalValue,
			this.idValue = infodata.idValue,
			this.lawyerValue = infodata.lawyerValue,
			this.groupValue = infodata.groupValue,
			this.imgUrl = infodata.imgUrl;
		}

	};
</script>
<style scoped>
	.header2 {
		width: 90%;
		margin: 0 auto;
		height: 0.6rem;
		font-size: 0.28rem;
		line-height: 0.6rem;
		text-align: left;
		color: #999;
	}
	.content {
		background-color: #fff;
		padding-top: 0.2rem;
	}
	.content .headimg {
		width: 1.48rem;
		height: 2.08rem;
		margin: 0 auto;
	}
	.headimg img {
		display: block;
		width: 100%;
		height: 100%;
	}
	.content ul {
		width: 100%;
		background-color: #fff;
	}
	.content li {
		width: 90%;
		height: 1rem;
		line-height: 1rem;
		margin: 0 auto;
		border-bottom: 0.01rem solid #ccc;
		font-size: 0.28rem;
	}
	.content li h2 {
		float: left;
	}
	.content li p {
		float: right;
		color: #999;
	}
	 .hui-field_main .hui-field_star {
    	display: none;
    }
    .hui-field_textarea .hui-field_title {
    	padding-top: 0.2rem;
    	padding-left: 0.1rem;
    }
     .hui-btn.is-block {
        font-weight: 700;
        display: inline-block;
        width: 5.9rem;
        height: 0.9rem;
        margin: 0.6rem 0.35rem;
        background-color: #2D7FFC;
        font-size: 0.32rem;
        color: #fff;
    }
  .middleone{
    position:relative;
  }
  .middletwo{
    font-size: 0.4rem;
    color: red;
    display: inline-block;
    position: absolute;
    top:0.1rem;
    left:0.04rem;
  }
</style>
