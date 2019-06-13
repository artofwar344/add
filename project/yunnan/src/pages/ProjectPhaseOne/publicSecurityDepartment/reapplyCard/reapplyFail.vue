<template>
    <div class="reapply-result">
         <towtop :name="titlename"/>
         <div class="main">
             <div class="infoImg"></div>
             <div class="infoTitle">申办失败</div>
             <div class="infoText">{{messageText}}</div>
         </div>
         <mybutton :btnData="btnData" @func1="handleClick1" @func2="handleClick2"/>
         
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
          text: "重新申请",
          disabled: false,
          isSure: true,
          click: 'func1'
        },
        {
          text: "返回",
          disabled: false,
          isSure: true,
          click: 'func2'
        }
      ]
    };
  },
  props: [
    'msg'
  ],
  components: {
    towtop,
    mybutton
  },
  computed: {
    messageText () {
      if (this.msg) {
        return this.msg
      } else {
        return '您不符合在线补办身份证的要求请到就近派出所办理'
      }
    }
  },
  methods: {
    handleClick1 () {
      this.$CallModule('close', '关闭')
    },
    
    handleClick2 () {
      this.$CallModule('close', '关闭')
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
      background-image: url("../../../../assets/images/reapply-fail@2x.png");
      @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
        background-image: url("../../../../assets/images/reapply-fail@3x.png");
      }
      background-size: 3.82rem auto;
      background-repeat: no-repeat;
      margin: 0 auto 0.86rem;
    }
    .infoTitle {
      font-size: 0.34rem;
      color: #fa6366;
      font-weight: bold;
      line-height: 0.6rem;
    }
    .infoText {
      font-size: 0.24rem;
      color: #999999;
      text-align: center;
      line-height: 0.4rem;
      width: 50%;
      margin: 0 auto;
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


