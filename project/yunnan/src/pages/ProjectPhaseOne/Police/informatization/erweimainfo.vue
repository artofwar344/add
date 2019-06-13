<template>
  <div class="box">
    <towtop :name="titlename"/>
    <div class="policemain">
      <div class="text">
        <p>1、办理驾驶证和行驶证二维码条件</p>
        <p>(1)机动车驾驶证或行驶证核发机关为云南省州（市）公安局交通警察支队,且状态为“正常”的;</p>
        <p>(2)机动车登记为个人车辆机动车，非单位车辆；</p>
        <p>(3)注册用户必须为“办事通”实名认证用户，只允许申请用户本人驾驶证及本人名下机动车行驶证的电子信息二维码。</p>
        <p>(4)机动车驾驶证状态“正常”是指：无超分、停止使用、逾期未审验、扣押、扣留、转出、暂扣、注销、吊销、撤销、锁定、事故未处理、逾期未换证等情形;</p>
        <p>(5)机动车行驶证状态“正常”是指：无逾期未检验、扣留、转出、停驶、注销、达到报废标准、公告牌证作废、查封、锁定、事故未处理、被盗抢等情形。</p>
        <p>2、驾驶证和行驶证二维码使用场景</p>
        <p>(1)机动车驾驶证和行驶证电子信息二维码是云南省公安交管部门为方便人民群众，提高工作效率推出的便民措施、是应用信息技术对机动车驾驶证和行驶证进行便捷管理的手段，不能代替现行机动车驾驶证和行驶证。</p>
        <p>(2)机动车驾驶证和行驶证电子信息二维码仅限于在云南省行政区域内使用。</p>
        <p>(3)在云南省内注册登记的机动车驾驶人和机动车车主，可凭驾驶证和行驶证电子信息二维码，在云南省境内接受路面执勤检查、信息查验、办理部分现场简易程序交通违法业务、现场轻微交通事故处理等。交通警察经查验证件二维码真实有效的，不再对“未随身携带驾驶证、行驶证”的行为进行违法认定和处罚。对适用简易程序处理的道路交通事故，可凭电子信息二维码制作道路交通事故认定书。</p>
        <p>3、有以下情形之一的，交通警察应当要求当事人提供机动车驾驶证或行驶证：</p>
        <p>(1)有法定情形应当扣留机动车驾驶证、机动车行驶证的；</p>
        <p>(2)现场处罚后，记分累计达十二分的；</p>
        <p>(3)适用一般程序处理的交通违法行为或交通事故的。</p>
        <p>4、交通警察对现场发现的应当采取扣留机动车强制措施或者开具违法行为处理通知书的违法行为，可以通过查验证件电子信息二维码对机动车和驾驶人信息予以确认，当事人接受违法处理时，应当要求当事人提供机动车驾驶证和行驶证。</p>
      </div>
    </div>
    <!-- <Btn block @click="towaiting">阅读并同意</Btn> -->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="towaiting"/>
    </div>
  </div>
</template>
<script>
import towtop from "../../../../components/HederTwo";
import mybutton from "@/components/MyButton";
export default {
  components: {
    mybutton,
    towtop
  },
  data() {
    return {
      btnData: [
        {
          text: "阅读并同意",
          disabled: false,
          isSure: true
        }
      ],
      titlename: "二维码申请须知"
    };
  },
  methods: {
    towaiting() {
      if (this.$route.query.keynumber == "1") {
        this.$router.push("/pagework/1");
      } else if (this.$route.query.keynumber == "2") {
        this.$router.push("/pagework/2");
      }
    }
  }
};
</script>
<style scoped="erweimainfo.vue">
.header {
  position: relative;
  width: 100%;
  height: 0.8rem;
  background-color: #ccc;
  text-align: center;
}

.header .title {
  height: 100%;
  line-height: 0.8rem;
  display: inline-block;
  font-size: 0.4rem;
  margin: 0 auto;
}
.hui-btn.is-block {
  width: 70%;
  height: 0.8rem;
  margin: 0.5rem auto;
  background-color: #2d7ffc;
  font-size: 0.3rem;
}
.header a {
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  font-size: 0.4rem;
  color: #2c3e50;
}
h2 {
  font-size: 0.5rem;
  font-weight: 700;
  margin: 0.3rem auto;
}
.policemain {
  background: #fff;
  padding-top: 0.3rem;
}
.text {
  width: 90%;
  margin: 0 auto;
  font-size: 0.26rem;
}
.text p {
  text-align: left;
  margin-bottom: 0.35rem;
}
</style>