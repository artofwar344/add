<template>
  <div>
		<towtop :name="hadertow" />
    <div class="changefrom">
      <div class="item">
        <span class="label">事务所名称</span>
        <p class="item-content">{{c_zwmc}}</p>
      </div>
      <div class="item">
        <span class="label">负责人</span>
        <p class="item-content">{{c_fzrxm}}</p>
      </div>
      <div class="item"> 
          <span class="label">组织形式</span>
          <p class="item-content">{{c_zzxsn}}</p>
      </div>
      <div class="item">
        <span class="label">电话</span>
        <p class="item-content">{{c_dh}}</p>
      </div>
      <div class="item">
        <span class="label">律所地址</span>
        <p class="item-content">{{c_xxdz}}</p>
      </div>
      <div class="big-item">
        <p class="label"><span class="star">*</span>申请变更理由</p>
        <textarea class="item-content" v-model="rsn" :rows="6" placeholder="请输入，100字以内"></textarea>
      </div>
      <div class="big-item">
        <p class="label"><span class="star">*</span>章程拟变更部分变更前内容（摘要）</p>
        <textarea class="item-content" v-model="before_reg_abstract" :rows="6" placeholder="请输入，200字以内"></textarea>
      </div>
      <div class="big-item">
        <p class="label"><span class="star">*</span>章程拟变更部分变更后内容（摘要）</p>
        <textarea class="item-content" v-model="after_reg_abstract" :rows="6" placeholder="请输入，200字以内"></textarea>
      </div>
        </div>
        <input type="hidden" v-model="c_tyshxydm">
        <!-- <button class="button blueButton textWhat" @click.prevent="onapp()">下一步</button> -->
			  <mybutton :btnData="btnData" @click="onapp" />
    </div>
</template>
<script>
import towtop from "../../../components/HederTwo";
import { cenurl } from "../../../components/toptow.js";
import { watchFile } from 'fs';
  	import mybutton from "../../../components/MyButton";
export default {
  data() {
    return {
      btnData:[
					{
						text:'下一步',
						disabled: false,
						isSure: true,
					}
				],
      hadertow: "申报表单填写",
      urls: "",
      ruilei:false,
      member_id: "",
      matter_id: "",
      work_id: "",
      matterId: "",
      datatext: "",
      formCode: "",
      c_zwmc: "",
      c_xxdz: "",
      c_dh: "",
      c_bh: "",
      rsn: "",
      before_reg_abstract: "",
      after_reg_abstract: "",
      c_tyshxydm:'',
      c_fzrxm: '',
      c_zzxsn: ''
    };
  },
  components: {
			mybutton,
    towtop
  },
  created() {
    if(window.sessionStorage.getItem('socialNumber')  == 'null' || window.sessionStorage.getItem('socialNumber') == ''){
      this.ruilei = true
      this.$toast('办理该事项必须由法人授权的用户或已实名认证的法人用户')
    }
    let setdata={
      txnCommCom: {
        tRecInPage: "10",
        tPageJump: "1",
        tStsTraceId: "1"
      },
      txnBodyCom: {
        org_id: "",
        // matter_id: "73eae83fba0548958c84e3c8327d68c2",
        matter_id: window.sessionStorage.getItem("matterid"),
        work_id: this.$route.query.WorkId,
        chann_id: "",
        c_tyshxydm:window.sessionStorage.getItem("socialNumber")!='null'?window.sessionStorage.getItem("socialNumber"):'-----------',
      }
    }
    this.$ajaxRequest("post","/gsp/mng80090", setdata).then((res) => {
      console.log(res)
        this.c_zwmc = res.list[0].c_zwmc;
        this.c_xxdz = res.list[0].c_xxdz;
        this.c_dh = res.list[0].c_dh;
        this.c_bh = res.list[0].c_bh;
        this.c_tyshxydm = res.list[0].c_tyshxydm
        this.c_fzrxm = res.list[0].c_fzrxm
        this.c_zzxsn = res.list[0].c_zzxsn

    }).catch((response) => {});
  },
  methods: {
    onapp() {
      if(this.ruilei){
        this.$toast('办理该事项必须由法人授权的用户或已实名认证的法人用户')
        return false
      }
      let setdata={
          txnBodyCom: {
            work_id: this.$route.query.WorkId,
            // message: {
            // matter_id: "73eae83fba0548958c84e3c8327d68c2",
            matter_id: window.sessionStorage.getItem("matterid"),
            // member_id: "9621837961d5407c853559a39879bbd2",
            member_id: window.sessionStorage.getItem("userid"),
            json_content: {
              c_tyshxydm: this.c_tyshxydm,
              law_firm_id: this.c_bh,
              c_zwmc: this.c_zwmc,
              c_dh: this.c_dh,
              c_xxdz: this.c_xxdz,
              rsn: this.rsn,
              before_reg_abstract: this.before_reg_abstract,
              after_reg_abstract: this.after_reg_abstract,
              work_id: this.$route.query.WorkId ? this.$route.query.WorkId : '111'
            }
          }
      }

      if (this.validData(setdata)) {

        // this.$ajaxRequest("post","/APPS/db/insert", setdata).then((res) => {
        this.$ajaxRequest("post","/gsp/appForm00001", setdata).then((res) => {
          // console.log(res)
          this.$router.push("/changeimg?WorkId=" + this.$route.query.WorkId);
          
        }).catch((response) => {});

      }
      
    },

    validData (obj) {
      let data = obj['txnBodyCom'].json_content
      for (let i in data) {
        if (!data[i]) {
          console.log(i)
          console.log(data)
          this.$toast('请确保信息已填完整，谢谢！')
          return false
        }

        if (i === 'rsn') {
          console.log()
          if (data[i].length < 0 || data[i].length > 100) {
            this.$toast('请输入变更理由，100字内！')
            return false
          }
        }

        if (i === 'before_reg_abstract' || i === 'after_reg_abstract') {
          if (data[i].length < 0 || data[i].length > 200) {
            this.$toast('请输入变更摘要，200字内！')
            return false
          }
        }
      }

      return true
    }
  }

};
</script>
<style lang="less" scoped>
@import url("../../../assets/css/style.less");
.changefrom {
  background: #fff;
  padding-top: 0.3rem;
  div {
    // height: .9rem;
    // line-height: .9rem;
    padding: 0.1rem 0.3rem;
    label {
      float: left;
      padding: 0 0.2rem;
    }
    .fonttwo {
      line-height: 0.4rem;
    }
    select {
      height: 0.8rem;
      line-height: 0.8rem;
      width: 60%;
      float: left;
    }
    input[type="Radio"] {
      height: 0.8rem;
      float: left;
      // margin-left: .2rme;
      margin-right: 0.2rem;
    }
    input[type="text"] {
      height: 0.8rem;
      line-height: 0.8rem;
      border: 1px solid #ccc;
      float: left;
      width: 60%;
      font-size: 0.28rem;
    }
    textarea {
      width: 60%;
      height: 2rem;
      float: left;
    }
    &:after {
      display: block;
      content: "0";
      font-size: 0;

      height: 0;
      clear: both;
    }
  }

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
      padding-top:15px;
    }
  }

  .big-item {
    padding: 0.3rem;
    background: #fff;
    border-bottom: 1px solid #e1e2e6;

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
</style>

