<template>
	<div class="parternWrap">
		<towtop style="margin: 0" :name="titlename"/>
		<div class="header2">变更后负责人基本情况</div>
		<div class="content">
			<div class="headimg">
				<img :src="imgUrl" v-if="imgUrl">
        <img v-else :src="require('../../../../assets/images/imageserorr.jpg')" alt="">
			</div>
			<ul>
				<li>
					<h2>姓名</h2>
					<p :class="{color:nameValue!='系统回显'}">{{  nameValue }}</p>
				</li>
				<li>
					<h2>性别</h2>
					<p :class="{color:sexValue!='系统回显'}">{{  sexValue }}</p>
				</li>
				<li>
					<h2>出生日期</h2>
					<p :class="{color:birthValue!='系统回显'}">{{  birthValue }}</p>
				</li>
				<li>
					<h2>手机号码</h2>
					<p :class="{color:telValue!='系统回显'}">{{  telValue }}</p>
				</li>
				<li>
					<h2>政治面貌</h2>
					<p :class="{color:politicValue!='系统回显'}">{{  politicValue }}</p>
				</li>
				<li>
					<h2>首次执业时间</h2>
					<p :class="{color:firstValue!='系统回显'}">{{  firstValue }}</p>
				</li>
				<li>
					<h2>执业证号</h2>
					<p :class="{color:licenseValue!='系统回显'}">{{  licenseValue }}</p>
				</li>
				<li>
					<h2>资格证类别</h2>
					<p :class="{color:typeValue!='系统回显'}">{{  typeValue }}</p>
				</li>
				<li>
					<h2>资格证号</h2>
					<p :class="{color:signalValue!='系统回显'}">{{  signalValue }}</p>
				</li>
				<li>
					<h2>身份证号</h2>
					<p :class="{color:idValue!='系统回显'}">{{ (idValue == 'null')?'':idValue }}</p>
				</li>
			</ul>
		</div>
		<div class="header2">律师事务所信息</div>
		<div class="content">
			<ul>
				<li>
					<h2>律所名称</h2>
					<p :class="{color:lawyerValue!='系统回显'}">{{lawyerValue}}</p>
				</li>
				<li>
					<h2>组织形式</h2>
					<p :class="{color:groupValue!='系统回显'}">{{groupValue}}</p>
				</li>
			</ul>
		</div>
    <div class="littlestarbig">
      <span class="littlestar">*</span>
		  <div class="header2">申请理由</div>
    </div>
		<Field id="textarea1" type="textarea"  :value="reasonValue"  required  rows="6" v-on:currentval="handleTextareaVal" placeholder="请输入申请理由，500字以内">
    	</Field>
    	<!-- <Btn plain block @click="next_btn">下一步</Btn> -->
		<div class="padTopAdd5">
          <mybutton :btnData="btnData" @click="next_btn" />
        </div>
	</div>
</template>
<script>
//  返回值： 出生日期
 function GetBirthday(psidno){
    let temp = new Date(psidno)
    var birthday = temp.getFullYear()+"-"+(temp.getMonth()+1)+"-"+temp.getDate()
    return birthday
}
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
					text:'下一步',
					disabled: false,
					isSure: true,
					}
				],
				titlename:"律师事务所（分所）变更负责人许可",
				nameValue:'',
				sexValue:'',
				birthValue:'',
				telValue:'',
				politicValue:'',
				firstValue:'',
				licenseValue:'',
				typeValue:'',
				signalValue:'',
				idValue:'',
				lawyerValue:'',
				groupValue:'',
				reasonValue:'',
				imgUrl:'',
				new_userid:'',
				old_userid:'',
			}

		},
		methods: {
			next_btn() {
				console.log(this.reasonValue.length)
				if(this.reasonValue.length == 0 || this.reasonValue.length > 500){
					this.$toast('请输入申请理由，500字以内')
					return false
				}
				let _self = this;
				let tempOb = {
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
				};
				// sessionStorage.setItem("SFTparternInfo",this.tempOb)
				let setdata = {
					"txnCommCom": {
						"tenant": "530000000000",
						"txn_itt_chnl_id": "00",
						"txn_itt_chnl_type": "11",
						"C-Business-Id": "111111111"
					},
					"txnBodyCom": {
						// "work_id":sessionStorage.getItem("GATWorkId"),
						"work_id":sessionStorage.getItem("WorkId"),
						"matter_id":sessionStorage.getItem("matterid"),
						// "matter_id":'095bb6aa18274e5790e608f445a8fc01',
						"member_id":sessionStorage.getItem("userid"),
						"json_content":{
							"work_id":sessionStorage.getItem("WorkId"),
							"lwr_id": this.old_userid,
							"rsn":this.reasonValue,
							"afmd_pnp_id": this.new_userid,
							"afmd_pnp_nm": this.nameValue,
							"afmd_wrk_unit_nm": this.groupValue,
						}
					}
				};
				console.log(setdata)
				this.$ajaxRequest("post", "/gsp/appForm00001", setdata)
				.then(res => {
					console.log(res);
					console.log(res.Status);
					if(res.Status == '00'){
						_self.storeData();
						this.$router.push('/bgfzrxk_three')
					}else if(res.Status == '01'){
						this.$toast(res.Error_Info.Message)
					}
				})
				.catch(error => {
					console.log(error);
				});

    		},
    		handleTextareaVal(val) {
    			this.reasonValue = val
    		},
    		storeData(){
				sessionStorage.setItem("rsn",this.reasonValue)
			},
			showData(){
				if(sessionStorage.getItem("rsn")){
					this.reasonValue = sessionStorage.getItem("rsn");
				}
			}
		},
		activated(){
			let personName = this.$route.params.confirmValue
			let _self = this;
			// 反显数据
			_self.showData();
			// 律所信息和原负责人编号
			let SFTlawPlaceData = JSON.parse(sessionStorage.getItem("SFTlawPlaceData"))
			// console.log(SFTlawPlaceData)
			_self.lawyerValue = SFTlawPlaceData.c_zwmc;
			_self.groupValue = SFTlawPlaceData.c_zzxsn;
			_self.old_userid = SFTlawPlaceData.c_bh;
			// 获取新负责人信息
			let name = JSON.parse(sessionStorage.getItem("SFTchangeCharge")).c_xm;
			let id = JSON.parse(sessionStorage.getItem("SFTchangeCharge")).c_sfzh;


			let setdata = {
				txnCommCom: {
					tenant: "530000000000",
					txn_itt_chnl_id: "00",
					txn_itt_chnl_type: "11"
				},
				txnBodyCom: {
					matter_id: window.sessionStorage.getItem("matterid"),
					// c_sfzh: _self.idValue,
					c_xm: personName,
					c_zyzh: '',
					c_sfzh:'',
				}
			};
			let addData = {
				tRecInPage: "10",
				tPageJump: "1"
			};
			this.$ajaxRequest("post", "/gsp/mng90039", setdata,addData)
			.then(res => {
				if (res.list.length <= 0) {
					_self.$toast("搜索数据为空！");
					return false;
				} else {
					console.log(res.list);
					let cent = res.list[0];
					_self.nameValue = cent.c_xm;
					if(res.list[0].c_xb=="01"){
						_self.sexValue = "男"
					}else if(res.list[0].c_xb=="02"){
						_self.sexValue = "女"
					}
					_self.birthValue = cent.d_csrq;
					_self.telValue = cent.c_sjhm;
					_self.politicValue = cent.c_zzmm;
					_self.firstValue = cent.d_sczyrq;
					_self.licenseValue = cent.c_zyzh;
					_self.typeValue = cent.c_zgzlb;
					_self.signalValue = cent.c_zgzh;
					_self.imgUrl = cent.c_zjzp;
					_self.new_userid = cent.c_bh;
				}
			})
			.catch(error => {
				console.log(error);
				_self.$toast("查询失败！");
			});
		}

	};
</script>
<style scoped>
.parternWrap .header2 {
		width: 90%;
		margin: 0 auto;
		height: 0.6rem;
		font-size: 0.28rem;
		line-height: 0.6rem;
		text-align: left;
		color: #999;
	}
.parternWrap .content {
		background-color: #fff;
		padding-top: 0.2rem;
	}
.parternWrap .content .headimg {
		width: 1.48rem;
		height: 2.08rem;
		margin: 0 auto;
	}
.parternWrap .headimg img {
		display: block;
		width: 100%;
		height: 100%;
	}
.parternWrap .content ul {
		width: 100%;
		background-color: #fff;
	}
.parternWrap .content li {
		width: 90%;
		height: 1rem;
		line-height: 1rem;
		margin: 0 auto;
		border-bottom: 0.01rem solid #ccc;
		font-size: 0.28rem;
	}
.parternWrap .content li h2 {
		float: left;
	}
.parternWrap .content li p {
		float: right;
		color: #999;
	}
.parternWrap .content li .color {
		color: black;
	}
.parternWrap .hui-field_main .hui-field_star {
    	display: none;
    }
.parternWrap .hui-field_textarea .hui-field_title {
    	padding-top: 0.2rem;
    	padding-left: 0.1rem;
    }
.parternWrap .hui-btn.is-block {
        font-weight: 700;
        display: inline-block;
        width: 5.9rem;
        height: 0.9rem;
        margin: 0.6rem 0.35rem;
        background-color: #2D7FFC;
        font-size: 0.32rem;
        color: #fff;
    }
.parternWrap .parternWrap .hui-field_main{
		height: initial;
	}
.parternWrap .hui-field_textarea,.parternWrap .hui-field_main{
		overflow: auto;
		min-height: 3rem;
	}
.parternWrap .littlestarbig{
  position: relative;
}
.parternWrap .littlestar{
  display: inline-block;
  color: red;
  font-size:0.4rem;
  position: absolute;
  left:0.1rem;
  top: 0.15rem;
}

</style>
<style>
.parternWrap #textarea1 .hui-field_core{
	text-align: left!important;
}
</style>
