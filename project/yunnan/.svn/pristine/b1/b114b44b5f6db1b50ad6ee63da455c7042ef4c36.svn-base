<template>
  <div class="box">
    <towtop :name="titlename"/>

    <h2>物流地址</h2>
    <ul>
      <li class="clearfix">
        <div class="l">
          <a href="#" class="name">小易</a>
          <a href="#" class="phonenum">1388888888</a>
          <p class="address">云南省昆明市新亚洲体育城星都总部30栋201</p>
        </div>
        <div class="r">
          <Icon type="release" size="22" color="#2D7FFC"></Icon>
        </div>
      </li>
      <li class="clearfix">
        <div class="l">
          <a href="#" class="name">小易</a>
          <a href="#" class="phonenum">1388888888</a>
          <p class="address">云南省昆明市西山区民族村北路7号中国建设银行海埂培训中心</p>
        </div>
        <div class="r">
          <Icon type="release" size="22" color="#2D7FFC"></Icon>
        </div>
      </li>
      <li class="clearfix">
        <div class="l">
          <a href="#" class="name">小易</a>
          <a href="#" class="phonenum">1388888888</a>
          <p class="address">云南省昆明市新亚洲体育城星都总部30栋201</p>
        </div>
        <div class="r">
          <Icon type="release" size="22" color="#2D7FFC"></Icon>
        </div>
      </li>
    </ul>
    <!-- <Btn plain block>完成</Btn> -->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData"/>
    </div>
  </div>
</template>
<script>
import towtop from "../../../components/HederTwo";
import mybutton from "@/components/MyButton";

export default {
  data() {
    return {
      titlename: "物流邮寄",
      btnData: [
        {
          text: "完成",
          disabled: false,
          isSure: true
        }
      ]
    };
  },
  components: {
    mybutton,
    towtop
  },
  methods: {}
};
</script>
<style  scoped>
.box {
  background-color: #edeef2;
}
h2 {
  width: 90%;
  height: 0.6rem;
  font-size: 0.28rem;
  line-height: 0.6rem;
  margin: 0 auto;
  text-align: left;
  color: #999;
}
ul {
  width: 100%;
  background-color: #fff;
}
li {
  width: 90%;
  margin: 0 auto;
  font-size: 0.28rem;
  border-bottom: 0.01rem solid #ccc;
}
.clearfix {
  overflow: auto;
}
.l {
  width: 70%;
  margin-top: 0.25rem;
  margin-bottom: 0.15rem;
  float: left;
  text-align: left;
}
.l a {
  display: inline-block;
  margin-right: 0.2rem;
  margin-bottom: 0.1rem;
  color: #333;
}
.r {
  float: right;
  margin-left: 1rem;
  margin-top: 0.5rem;
}
.hui-btn.is-block {
  width: 5.9rem;
  height: 0.9rem;
  margin: 1rem auto;
  background-color: #2d7ffc;
  font-size: 0.32rem;
  color: #fff;
}
</style>