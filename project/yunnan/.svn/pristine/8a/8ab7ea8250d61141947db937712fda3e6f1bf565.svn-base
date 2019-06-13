<template>
  <div class="xuke">
    <towtop :name="titlename"/>
    <div class="jiaceng" v-show="popup">
      <div class="content">
        <div class="header">您已提交成功</div>
        <p>请关注
          <span style="color: #FAC306;">“我的办理进度”</span>并及时处理系统消息
        </p>
        <div class="qd_btn" @click="qd_btn">确定</div>
      </div>
    </div>
    <Field
      type="text"
      label="事务所名称"
      :value="nameValue"
      placeholder="自动获取省司法厅系统律师事务所信息"
      readonly
    ></Field>
    <Field
      type="text"
      label="律所地址"
      :value="locationValue"
      placeholder="自动获取省司法厅系统律师事务所信息"
      readonly
    ></Field>
    <Field
      type="text"
      label="负责人"
      :value="chargeValue"
      placeholder="自动获取省司法厅系统律师事务所信息"
      readonly
    ></Field>
    <Field
      type="text"
      label="电话"
      :value="telValue"
      placeholder="自动获取省司法厅系统律师事务所信息"
      readonly
    ></Field>
    <div class="middleone">
      <span class="middletwo">*</span>
    <Field
      class="btm"
      type="text"
      label="申请变更理由"
      :value="textValue_bgly"
      placeholder="必填项"
      readonly
    ></Field>
    </div>
    <div class="middleone">
      <span class="middletwo">*</span>
    <Field
      class="btm"
      type="text"
      label="章程拟变更部分变更前内容(摘要)"
      :value="textValue_bgqnr"
      placeholder="必填项"
      readonly
    ></Field>
    </div>
    <div class="middleone">
      <span class="middletwo">*</span>
    <Field
      class="btm"
      type="text"
      label="章程拟变更部分变更后内容(摘要)"
      :value="textValue_bghnr"
      placeholder="必填项"
      readonly
    ></Field>
    </div>
    <!-- <Btn plain block @click="submit_btn">提交</Btn> -->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="submit_btn"/>
    </div>
  </div>
</template>
<script>
import towtop from "../../../../components/HederTwo";
import { cenurl } from "@/components/toptow.js";
import mybutton from "@/components/MyButton";
export default {
  components: {
    towtop,
    mybutton
  },
  data() {
    return {
      btnData: [
        {
          text: "提交",
          disabled: false,
          isSure: true
        }
      ],
      titlename: "律师事务所变更合伙协议许可",
      nameValue: "",
      locationValue: "",
      chargeValue: "",
      telValue: "",
      textValue_bgly: "",
      textValue_bgqnr: "",
      textValue_bghnr: "",
      popup: false
    };
  },
  methods: {
    submit_btn() {
      this.popup = !this.popup;
    },
    qd_btn() {
      let _self = this;
      let imgLlist = JSON.parse(sessionStorage.getItem("SFTparternimgList"));
      let setdata = {
        workid: "",
        memberId: window.sessionStorage.getItem("userid"),
        matter_id: window.sessionStorage.getItem("matterid"),
        fromCode: "",
        recordId: "",
        formywId: "",
        toapprove: "2",
        formdata: {
          nameValue: this.nameValue,
          locationValue: this.locationValue,
          chargeValue: this.chargeValue,
          telValue: this.telValue,
          textValue_bgly: this.textValue_bgly,
          textValue_bgqnr: this.textValue_bgqnr,
          textValue_bghnr: this.textValue_bghnr,
          imgs1: imgLlist[0].uploadId,
          imgs2: imgLlist[1].uploadId,
          imgs3: imgLlist[2].uploadId
        }
      };
      this.$ajaxRequest("post", "/gsp/form00001", setdata)
        .then(res => {
          if (res.list.length <= 0) {
            console.log(res);
            return false;
          } else {
            this.$router.push({ name: "sfResultPage" });
            console.log(res.list);
          }
        })
        .catch(error => {
          console.log(error);
          _self.$toast("提交失败！");
        });
      this.$router.push("/bghhxyxk_five");
    }
  },
  created() {
    let data = JSON.parse(sessionStorage.getItem("SFTlawyerpartern"));
    this.nameValue = data.nameValue;
    this.locationValue = data.locationValue;
    this.chargeValue = data.chargeValue;
    this.telValue = data.telValue;
    this.textValue_bgly = data.textValue_bgly;
    this.textValue_bgqnr = data.textValue_bgqnr;
    this.textValue_bghnr = data.textValue_bghnr;
  }
};
</script>
<style>
.xuke .hui-field_main {
  font-size: 0.28rem;
  line-height: 0.9rem;
  height: 0.9rem;
}
.hui-field_star {
  display: block;
}
.hui-btn.is-block {
  font-weight: 700;
  display: inline-block;
  width: 5.9rem;
  height: 0.9rem;
  margin: 0.6rem 0.35rem;
  background-color: #2d7ffc;
  font-size: 0.32rem;
  color: #fff;
}
.hui-field_title {
  width: 3rem;
}
.btm .hui-field_title {
  width: 2rem;
  line-height: 0.3rem;
}
</style>
<style scoped>
.jiaceng {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 12;
}
.jiaceng .content {
  width: 75%;
  margin: 50% auto;
  background-color: #fff;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  border-radius: 0.3rem;
}
.content .header {
  font-size: 0.36rem;
  color: #2d7ffc;
  margin: 0.2rem auto;
}
.content p {
  font-size: 0.28rem;
  margin: 0.6rem auto;
  color: #666;
}
.content .qd_btn {
  font-size: 0.32rem;
  color: #999;
  border-top: 0.01rem solid #ccc;
  padding-top: 0.3rem;
}
.xuke .middleone{
  position:relative;
}
.xuke .middletwo{
  font-size: 20px;
  color: red;
  display: inline-block;
  position: absolute;
  top:38%;
  left:2px;
}
</style>
