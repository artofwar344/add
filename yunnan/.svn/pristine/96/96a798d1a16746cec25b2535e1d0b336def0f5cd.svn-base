<template>
  <div class="box">
    <towtop :name="titlename"/>
    <div class="email_tips" v-show="email_tips">
      <div class="confim">
        <h2 style="font-size: 0.36rem; font-weight: 700;">确认邮箱</h2>
        <div class="putin">
          <input type="text" placeholder="18222311215@163.com ">
          <span style="font-size:0.24rem;color:#999999">修改</span>
        </div>
        <p style="font-size: 0.24rem; text-align: center;">
          <Icon type="advisory" color="#FF8C00"></Icon>办理结果将发送至此邮箱，请确认
        </p>
        <p class="btn" style="font-size: 0.32rem; color: #2D7FFC" @click="afterdefine">确认</p>
      </div>
    </div>
    <div class="main">
      <img src="../../../assets/images/2503ad8758aaed783bf7e209e98da16.png" alt>
    </div>
    <!-- <Btn plain block @click="Determinethemailbox">发送至邮箱</Btn> -->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="Determinethemailbox"/>
    </div>
  </div>
</template>
<script>
import towtop from "../../../components/HederTwo";
import mybutton from "@/components/MyButton";
export default {
  data() {
    return {
      btnData: [
        {
          text: "发送至邮箱",
          disabled: false,
          isSure: true
        }
      ],
      titlename: "办理结果",
      email_tips: false
    };
  },
  components: {
    mybutton,
    towtop
  },
  methods: {
    Determinethemailbox() {
      this.email_tips = !this.email_tips;
    },
    afterdefine() {
      this.email_tips = !this.email_tips;
    }
  }
};
</script>
<style  scoped>
.box {
  width: 100%;
  height: 100%;
}
.main {
  width: 90%;
  margin: 0.2rem auto;
}
.main img {
  width: 100%;
  height: 100%;
}
.hui-btn.is-block {
  width: 5.9rem;
  height: 0.9rem;
  margin: 1rem auto;
  background-color: #2d7ffc;
  font-size: 0.32rem;
  color: #fff;
  z-index: 9;
}
.email_tips {
  width: 100%;
  height: 100%;
  position: absolute;
  top: -30px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}
.confim {
  width: 80%;
  padding-top: 0.1rem;
  background-color: #fff;
  margin: 50% auto;
  border-radius: 0.2rem;
}
input {
  border: none;
  font-size: 0.28rem;
}
.confim h2 {
  width: 70%;
  margin: 0 auto;
  height: 1rem;
  font-size: 0.36rem;
  font-weight: 700;
  line-height: 1rem;
}
.confim .putin {
  width: 68%;
  height: 0.6rem;
  margin: 0.2rem auto;
  border-bottom: 0.01rem solid #ccc;
}
.confim p {
  margin-bottom: 0.5rem;
  color: #ccc;
}
.confim .btn {
  width: 100%;
  height: 1rem;
  border-top: 0.01rem solid #ccc;
  line-height: 1rem;
  margin: 0 auto;
  font-size: 0.36rem;
  color: #2d7ffc;
  text-align: center;
}
</style>