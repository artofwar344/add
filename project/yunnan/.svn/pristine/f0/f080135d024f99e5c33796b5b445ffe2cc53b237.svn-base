<style lang="less" scoped>
.domesticSevenWrap {
  .content {
    p {
      font-size: 0.28rem;
      padding: 0rem 0.4rem 0.2rem;
      box-sizing: border-box;
      color: #999;
      text-align: left;
    }
  }
  .btnWrap {
    margin-top: 1rem;
    padding: 0 0.8rem;
    font-size: 0.33rem;
    span {
      display: block;
      width: 100%;
      height: 0.9rem;
      border-radius: 40px;
      line-height: 0.9rem;
      text-align: center;
      background: #2d7ffc;
      color: white;
    }
  }
}
.domesticSevenWrap .hui-field {
  height: 1rem;
  padding: 0rem 0.2rem;
  box-sizing: border-box;
  border: none;
  line-height: 1rem;
}
</style>
<style>
.domesticSevenWrap .hui-field {
  height: 1rem;
  padding: 0rem 0.2rem;
  box-sizing: border-box;
  border: none;
  line-height: 1rem;
}
.domesticSevenWrap .hui-field_main {
  height: 100%;
  border-bottom: 1px solid #e1e2e6;
}
.domesticSevenWrap .hui-field_title {
  width: 2.3rem;
  height: 100%;
}
</style>

<template>
  <div class="domesticSevenWrap">
    <towtop :name="titlename"/>
    <div class="content">
      <p>核对提交</p>
      <Field
        type="text"
        readonly
        v-for="item in infoData"
        :key="item.title"
        :label="item.title"
        :value="item.value"
      ></Field>
    </div>
    <!-- <div class="btnWrap" style="cursor: pointer;" @click="goto()">
      <span>确认无误，提交申请</span>    </div> -->
        <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="goto()"/>
    </div>
  </div>
</template>

<script>
import towtop from "@/components/HederTwo";
import mybutton from "@/components/MyButton";
import { cenurl } from "../../../../components/toptow.js";
export default {
  data() {
    return {
      titlename: "出国境证件预约",
            btnData: [
        {
          text: "确认无误，提交申请",
          disabled: false,
          isSure: true
        }
      ],
      infoData: [],
      message: {},
      worktypecode: '',
      qzzlClass: [{团队旅游: "12"}, {个人旅游: "1B"}],
      taicjsyClass: [{团队旅游: "9"}, {个人旅游: "8"}],
      taiqzzlClass: [{团队旅游: "25"}, {个人旅游: "2B"}]
    };
  },
  components: {
    mybutton,
    towtop
  }, 
  mounted() {
    let phone = this.$route.query.passportphone;
    let worktype = this.$route.query.worktype;
    let cardid = this.$route.query.passportcardid;
    // passportname
    let location = JSON.parse(sessionStorage.getItem("GATpoint")).branch_parent_name;

    let time = sessionStorage.GATDate + " " + sessionStorage.GATTime;
    this.message = JSON.parse(sessionStorage.getItem("GATEEPinpuList"));
    this.infoData = [
      {title: "预约业务类型", value: worktype},
      {title: "手机号码", value: phone},
      {title: "身份证号码", value: cardid},
      {title: "预约单位", value: location},
      {title: "预约时间", value: time}
    ];
  },
  methods: {
    ajax(transferData) {
      let _self = this;
      //  表单提交
      this.$ajaxRequest("post", "/gsp/mng30071", transferData).then(res => {
        console.log(res);
        //裕农通APP功能，勿删！
        if (window.sessionStorage.getItem("CHNL_ID") === "CC03C004") {
          PJF.ynt.A0161G058()
        }
        if(res.rtnCode == "0"){
          _self.$router.push({
            name: "passportExitSuccess"
          });
        }else{
           _self.$toast(res.rtnStr);
        }
      }).catch(error => {
        console.log(error);
        _self.$toast("预约失败");
      });
    },
    goto () {
      if (this.$route.query.worktype == '普通护照') {
        this.worktypecode = '1'
      } else if (this.$route.query.worktype == '港澳台通行证') {
        this.worktypecode = '2'
      }
      let GATpoint = window.sessionStorage.getItem('GATpoint')
      // console.log(JSON.parse(GATpoint))
      GATpoint = JSON.parse(GATpoint)
      let transferData = {
        txnCommCom: {
          tStsTraceId: "2018120716",
          txnIttChnlId: 'C0011234567890987654321',
          txnIttChnlCgyCode: 'AC02C001'
        },
        txnBodyCom: {
          member_id: window.sessionStorage.getItem("userid"), // !== 'null' || '4aaaf63d0a7b4bed889ca87b31ea04e9',
          matter_id: window.sessionStorage.getItem("matterid"), // !== 'null' || '1',
          offices_id: GATpoint.branch_code,
          business_type: this.worktypecode,
          phone_no: this.$route.query.passportphone,
          web_date: window.sessionStorage.getItem('GATDate'),
          web_time: window.sessionStorage.getItem('GATTime').substring(0, 5) + ':00~' + window.sessionStorage.getItem('GATTime').substring(6, 11) + ':00',
          id_card: this.$route.query.passportcardid
        }
      }
      this.ajax(transferData);
    }
  }
};
</script>
