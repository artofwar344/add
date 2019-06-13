<template>
  <div class="box">
    <myheader :my-header="headerData"></myheader>
    <h2>物流地址</h2>
    <ul>
      <li class="clearfix" v-for="item in testData" :key="item.id" @click="goto(item)">
        <div class="l">
          <a href="#" class="name">{{item.name}}</a>
          <a href="#" class="phonenum">{{item.phone}}</a>
          <p class="address">{{item.address}}</p>
        </div>
        <div class="r">
          <Icon type="release" size="22" color="#2D7FFC"></Icon>
        </div>
      </li>
      <!--<li class="clearfix">
        <div class="l">
          <a href="#" class="name">小易</a>
          <a href="#" class="phonenum">1388888888</a>
          <p class="address">云南省昆明市西山区民族村北路7号中国建设银行海埂培训中心 </p>
        </div>
        <div class="r">
          <Icon type="release" size="22" color="#2D7FFC"></Icon>
        </div>
      </li>
      <li class="clearfix">
        <div class="l">
          <a href="#" class="name">小易</a>
          <a href="#" class="phonenum">1388888888</a>
          <p class="address">云南省昆明市新亚洲体育城星都总部30栋201 </p>
        </div>
        <div class="r">
          <Icon type="release" size="22" color="#2D7FFC"></Icon>
        </div>
      </li>-->
    </ul>
    <!-- <Btn plain block>完成</Btn> -->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData"/>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header/header";
import { cenurl } from "@/components/toptow.js";
import mybutton from "@/components/MyButton";
export default {
  data() {
    return {
      btnData: [
        {
          text: "完成",
          disabled: false,
          isSure: true
        }
      ],
      params: this.$route.params,
      headerData: {
        title: "地址选择",
        backUrl: "/specialEquipment"
      },
      testData: [
        {
          id: "01",
          name: "小易",
          phone: "1388888888",
          address: "XX省XX市XX区XXX路X号"
        },
        {
          id: "02",
          name: "小易",
          phone: "1388888888",
          address: "云南省昆明市西山区民族村北路7号中国建设银行海埂培训中心"
        },
        {
          id: "03",
          name: "小易",
          phone: "1388888888",
          address: "云南省昆明市新亚洲体育城星都总部30栋201"
        }
      ],
      queryData: {}
    };
  },
  components: {
    mybutton,
    myheader: Header
  },
  methods: {
    goto(data) {
      console.log(data);
      const _self = this;
      _self.$router.push({
        path: "/supplement",
        name: "特种设备安全管理人员补证申请",
        params: {
          addressData: data
        }
      });
    }
  }
};
</script>
<style scoped>
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
