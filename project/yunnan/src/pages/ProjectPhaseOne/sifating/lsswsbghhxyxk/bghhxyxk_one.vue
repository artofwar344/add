<template>
	<div class="bghhxyxxkOneWrap">
		<towtop style="margin: 0" :name="titlename"/>
		<div class="header2">变更合伙协议</div>
    <div class="item">
      <span class="label">事务所名称</span>
      <p class="item-content">{{nameValue}}</p>
    </div>
    <div class="item">
      <span class="label">律所地址</span>
      <p class="item-content">{{locationValue}}</p>
      <!-- <p class="item-content">可凭电子信息二维码制作道路交通事故认定书。可凭电子信息二维码制作道路交通事故认定书。</p> -->
    </div>
    <div class="item">
      <span class="label">负责人</span>
      <p class="item-content">{{chargeValue}}</p>
    </div>
    <div class="item">
      <span class="label">电话</span>
      <p class="item-content">{{telValue}}</p>
    </div>
    <div class="big-item">
      <span class="bigstarking">*</span>
      <p class="label">变更申请理由</p>
      <textarea class="item-content" v-model="textValue_bgly" :rows="6" placeholder="请输入，100字以内"></textarea>
    </div>
    <div class="big-item">
      <span class="bigstarking">*</span>
      <p class="label">合伙协议拟变更部分变更前内容(摘要)</p>
      <textarea class="item-content" v-model="textValue_bgqnr" :rows="6" placeholder="请输入，500字以内"></textarea>
    </div>
    <div class="big-item">
      <span class="bigstarking">*</span>
      <p class="label">合伙协议拟变更部分变更后内容(摘要)
      </p>
      <textarea class="item-content" v-model="textValue_bghnr" :rows="6" placeholder="请输入，500字以内"></textarea>
    </div>

    	<!-- <Field class="btm"  type="text" label="变更申请理由" :value="textValue_bgly" placeholder="必填项" required v-on:currentval="handleTextVal1">
    	</Field>
    	<Field class="btm" type="text" label="合伙协议拟变更部分变更前内容(摘要)" :value="textValue_bgqnr" placeholder="必填项" required v-on:currentval="handleTextVal2">
    	</Field>
    	<Field  class="btm" type="text" label="合伙协议拟变更部分变更后内容(摘要)" :value="textValue_bghnr" placeholder="必填项" required v-on:currentval="handleTextVal3">
    	</Field> -->
		<!-- <Btn plain block @click="next_btn">下一步</Btn> -->
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
          text:'下一步',
          disabled: false,
          isSure: true,
        }
      ],
				titlename:"律师事务所变更合伙协议许可",
				nameValue:'',
				locationValue:'',
				chargeValue:'',
				lawyerId:'',
				telValue:'',
				textValue_bgly:'',
				textValue_bgqnr:'',
        textValue_bghnr:'',
        isPass: false
			}

		},
		methods: {
			next_btn() {
				if(window.sessionStorage.getItem('socialNumber')  == 'null' || window.sessionStorage.getItem('socialNumber') == ''){
					this.$toast('办理该事项必须由法人授权的用户或已实名认证的法人用户')
					return false
				}
				let _self = this;
				if (!_self.textValue_bgly.length || _self.textValue_bgly.length > 100) {
					this.$toast("请填写变更申请理由, 100字以内");
					return
				}
				if (!_self.textValue_bgqnr.length  || _self.textValue_bgqnr.length > 500) {
					this.$toast("请填写合伙协议拟变更部分变更前内容(摘要), 500字以内");
					return
				}
				if (!_self.textValue_bghnr.length  || _self.textValue_bghnr.length > 500) {
					this.$toast("请填写合伙协议拟变更部分变更后内容(摘要), 500字以内");
					return
        }

        // 校验律所类型
        if (!this.isPass) {
          this.$toast('您现有律所类型不符合该变更事项，请确认')
          return
        }
				let tempdata = {
					nameValue:this.nameValue,
					locationValue:this.locationValue,
					chargeValue:this.chargeValue,
					telValue:this.telValue,
					textValue_bgly:this.textValue_bgly,
					textValue_bgqnr:this.textValue_bgqnr,
					textValue_bghnr:this.textValue_bghnr,
				}
				sessionStorage.setItem("SFTlawyerpartern",JSON.stringify(tempdata))

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
						// "matter_id":'ea44d84cf8bb418080595c201fd9bdf4',
						"member_id":sessionStorage.getItem("userid"),
						"json_content":{
							"work_id":sessionStorage.getItem("WorkId"),
							"lwr_id": this.lawyerId,
							"rsn":this.textValue_bgly,
							"before_pro_abstract":this.textValue_bgqnr,
							"after_pro_abstract":this.textValue_bghnr,

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
						_self.$router.push({
							name:'bghhxyxk_two',
						})
					}else if(res.Status == '01'){
						_self.$toast(res.Error_Info.Message)
					}
				})
				.catch(error => {
					console.log(error);
				});
    		},
    		handleTextVal1(val) {
				if(val.length>100){
					this.$toast("超过100字，无法输入");
					return
				}
				this.textValue_bgly = val.length>100 ? val.slice(0,100):val
            },
            handleTextVal2(val) {
				if(val.length>500){
					this.$toast("超过500字，无法输入");
					return
				}
                this.textValue_bgqnr = val.length>500 ? val.slice(0,500):val
            },
            handleTextVal3(val) {
				if(val.length>500){
					this.$toast("超过500字，无法输入");
					return
				}
               this.textValue_bghnr = val.length>500 ? val.slice(0,500):val
			},
			storeData(){
				sessionStorage.setItem("rsn",this.textValue_bgly);
				sessionStorage.setItem("before_pro_abstract",this.textValue_bgqnr);
				sessionStorage.setItem("after_pro_abstract",this.textValue_bghnr);
			},
			showData(){
				if(sessionStorage.getItem("rsn")){
					this.textValue_bgly = sessionStorage.getItem("rsn")
				}
				if(sessionStorage.getItem("before_pro_abstract")){
					this.textValue_bgqnr = sessionStorage.getItem("before_pro_abstract")
				}
				if(sessionStorage.getItem("after_pro_abstract")){
					this.textValue_bghnr = sessionStorage.getItem("after_pro_abstract")
				}
			},
		},
		activated(){
			if(window.sessionStorage.getItem('socialNumber')  == 'null' || window.sessionStorage.getItem('socialNumber') == ''){
        this.$toast('办理该事项必须由法人授权的用户或已实名认证的法人用户')
        return false
      }
			// sessionStorage.setItem("matterid",'4dee93356eb94a559545e96c840a094b')

				//   获取wordId并保存
			let WorkId;
			if(this.$route.query.WorkId){
				WorkId = this.$route.query.WorkId;
			}
			sessionStorage.setItem("WorkId",WorkId)
			console.log(sessionStorage.getItem("WorkId"))

			this.showData();

			let tyshxydm = window.sessionStorage.getItem('socialNumber');
			// let tyshxydm = sessionStorage.getItem("");
			let _self = this;
			let setdata = {
				"txnCommCom":{
					"tRecInPage":"",
					"tPageJump":"",
					"tStsTraceId":""
					},
				"txnBodyCom": {
					matter_id: window.sessionStorage.getItem("matterid"),
					//律师事务所查询参数,
					"c_zwmc":"",
					//律师事务所查询当前负责人参数,
					"c_tyshxydm":window.sessionStorage.getItem("socialNumber")!='null'?window.sessionStorage.getItem("socialNumber"):'-----------',

					// "c_tyshxydm":"1234567890",
				}
			};
			this.$ajaxRequest("post", "/gsp/mng80090", setdata)
			.then(res => {
				console.log(res)
				if (res.list.length <= 0) {
					_self.$toast("搜索数据为空！");
					return false;
				} else {
					console.log(res.list);
					_self.nameValue = res.list[0].c_zwmc;
					_self.locationValue = res.list[0].c_xxdz;
					_self.chargeValue = res.list[0].c_fzrxm;
					_self.lawyerId = res.list[0].c_bh;
          _self.telValue = res.list[0].c_dh;

          if (res.list[0].c_zzxs === '02') {
            this.isPass = true
          } else (
            this.$toast('您现有律所类型不符合该变更事项，请确认')
          )
				}
			})
			.catch(error => {
				console.log(error);
				_self.$toast("查询失败！");
			});
		}

	};
</script>
<style>
.bghhxyxxkOneWrap .header2 {
		width: 90%;
		margin: 0 auto;
		height: 0.6rem;
		font-size: 0.24rem;
		line-height: 0.6rem;
		text-align: left;
		color: #999;
		text-align: left;
	}
.bghhxyxxkOneWrap .hui-field_main {
        font-size: 0.28rem;
        line-height: 0.9rem;
        min-height: 0.9rem;
    }
.bghhxyxxkOneWrap .hui-field_star {
        display: inline-block;
    }
.bghhxyxxkOneWrap .hui-btn.is-block {
        font-weight: 700;
        display: inline-block;
        width: 5.9rem;
        height: 0.9rem;
        margin: 0.6rem 0.35rem;
        background-color: #2D7FFC;
        font-size: 0.32rem;
        color: #fff;
    }
.bghhxyxxkOneWrap .hui-field_title {
        width:3rem;
    }
.bghhxyxxkOneWrap .btm .hui-field_title {
    	width: 2rem;
		line-height: .3rem;
    }
</style>

<style lang="less" scoped>
.bghhxyxxkOneWrap {
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.3rem;
    background: #fff;
    border-bottom: 1px solid #e1e2e6;

    .item-content {
      flex: 1;
      height: 55px;
      text-align: right;
      padding-top: 10px;
    }
  }

  .big-item {
    padding: 0.3rem;
    background: #fff;
    border-bottom: 1px solid #e1e2e6;
    position: relative;

    .label {
      margin-bottom: 0.3rem;
      text-align: left;

      .star {
        font-size: 20px;
        color: red;
        display: inline-block;
        position: relative;
        top: 5px
      }
    }

    .item-content {
      width: 100%;
      border: none;
      background-color: rgb(241, 243, 244);
      border-radius: 5px;
      padding: 8px;
    }
  }
}
.bghhxyxxkOneWrap .bigstarking{
  display: inline-block;
  font-size: 0.4rem;
  color: red;
  position: absolute;
  left: 0.05rem;
  top: 9%;
  }
</style>
