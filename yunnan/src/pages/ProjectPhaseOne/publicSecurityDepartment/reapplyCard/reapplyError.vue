<template>
    <div class="reapply-result">
         <towtop :name="titlename"/>
         <div class="main">
             <div class="infoImg"></div>
             <div class="infoText">您好，您在线申请补办身份证审核未通过，已缴费用将按原路径退回，请持相关个人身份证明材料到户籍所在地派出所申请补办证件。</div>
         </div>
         <mybutton :btnData="btnData" @click="gotoApp()"/>
         
    </div>
</template>
<script>
import towtop from "../../../../components/HederTwo";
import mybutton from "../../../../components/MyButton";
export default {
  data() {
    return {
      titlename: "申请补办身份证",
      btnData: [
        {
          text: "返回",
          disabled: false,
          isSure: true
        }
      ]
    };
  },
  components: {
    towtop,
    mybutton
  },
  methods:{
    gotoApp(){
      this.$CallModule("close")
    }
  }
};
</script>
<style lang="less" scoped>
.reapply-result {
  .main {
    background: #fff;
    box-shadow: 0 0.1rem 0.3rem 0 rgba(0, 0, 0, 0.08);
    border-radius: 0.2rem;
    padding: 1.12rem 0.3rem;
    margin-bottom: 1rem;

    .infoImg {
      width: 3.82rem;
      height: 3rem;
      background-image: url("../../../../assets/images/reapply-error@2x.png");
      @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
        background-image: url("../../../../assets/images/reapply-error@3x.png");
      }
      background-size: 3.82rem auto;
      background-repeat: no-repeat;
      margin: 0 auto 0.86rem;
    }
    .infoTitle {
      font-size: 0.34rem;
      color: #ffac25;
      font-weight: bold;
      line-height: 0.6rem;
    }
    .infoText {
      font-size: 0.24rem;
      color: #999999;
      text-align: left;
      line-height: 0.4rem;
      width: 4.32rem;
      margin: auto;
    }
  }
  .btnGroup {
    button {
      width: 2.8rem;
      border-radius: 0.5rem;
    }
    .commonBtn {
      box-shadow: 0 0.1rem 0.3rem 0 rgba(45, 127, 252, 0.5);
      margin-right: 0.6rem;
    }
    .greenButton {
      margin-right: 0;
      background: #08c173;
      box-shadow: 0 0.1rem 0.3rem 0 rgba(8, 193, 115, 0.25);
    }
  }
}
</style>


