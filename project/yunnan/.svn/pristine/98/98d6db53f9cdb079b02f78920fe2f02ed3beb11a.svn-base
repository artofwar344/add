<template>
  <div>
    <towtop :name="titlename"/>
    <div class="middle_top" v-show="middle_top">
      <div class="info">
        <h2>
          <Icon type="failure" color="#FF6347" style="font-size: 1rem;"></Icon>
        </h2>
        <p>未查询到律师信息，请确认姓名、执业证号或身份证号是否正确！</p>
        <div class="queding" @click="submit_badtwo">返回</div>
      </div>
    </div>
    <div class="title1">
      <p style="margin-right: 0.3rem;">查询条件</p>
      <p style="color:#FFA500;">(输入任一条件都可查询)</p>
    </div>
    <Field type="text" label="姓名" placeholder="请输入姓名" v-model="c_xm"></Field>
    <Field type="text" label="身份证号" placeholder="请输入身份证号" v-model="c_sfzh"></Field>
    <Field type="text" label="执业证号" placeholder="请输入执业证号" v-model="c_zyzh"></Field>
    <!-- <Btn block @click="scl_btn">查询</Btn> -->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="scl_btn"/>
    </div>
  </div>
</template>	
<script>
import towtop from "../../../components/HederTwo";

import mybutton from "../../../components/MyButton";
import { cenurl } from "../../../components/toptow.js";
export default {
  data() {
    return {
      btnData: [
        {
          text: "查询",
          disabled: false,
          isSure: true
        }
      ],
      titlename: "律师查询",
      middle_top: false,
      c_xm: "",
      c_sfzh: "",
      c_zyzh: ""
    };
  },
  components: {
    mybutton,
    towtop
  },
  methods: {
    scl_btn() {
      if (this.c_sfzh == "" && this.c_xm == "" && this.c_zyzh == "") {
        this.$toast("至少输入一个查询条件");
        return;
      }
      let setdata = {
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          c_sfzh: this.c_sfzh,
          c_xm: this.c_xm,
          c_zyzh: this.c_zyzh
        }
      };
      let page = { tRecInPage: "10", tPageJump: "1" };
      this.$ajaxRequest("post", "/gsp/mng90039", setdata, page)
        .then(res => {
          console.log(res)
          if (res.list == null || res.list == undefined) {
            this.middle_top = !this.middle_top;
            return;
          } else {
            this.$router.push({
              name: "lawyerList",
              params: { datalist:res,querydata:{c_sfzh:this.c_sfzh, c_xm: this.c_xm,c_zyzh: this.c_zyzh} }
            });
          }
          window.sessionStorage.removeItem('lawyerarr')
        })
        .catch(error => {
          console.log(error);
        });
    },
    submit_badtwo() {
      this.middle_top = !this.middle_top;
    }
  }
};
</script>	
<style scoped="lawyerQuery.vue">
.hui-field_core {
  text-align: right;
}
.hui-field_star {
  display: none;
}
.hui-field {
  height: 0.8rem;
  font-size: 0.28rem;
}
.hui-btn.is-block {
  width: 5.9rem;
  height: 0.9rem;
  margin: 1rem auto;
  background-color: #2d7ffc;
  font-size: 0.32rem;
  color: #fff;
}
.title1 {
  text-align: left;
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.28rem;
  background-color: #edeef2;
  padding-left: 0.25rem;
}
.title1 p {
  display: inline-block;
}
.middle_top {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
}
.middle_top .info {
  background-color: #fff;
  width: 75%;
  margin: 50% auto;
  padding-top: 0.4rem;
  border-radius: 0.3rem;
}
.info h2 {
  width: 70%;
  margin: 0.2rem auto;
  height: 1rem;
  font-size: 1.12rem;
  font-weight: 700;
  line-height: 1rem;
}
.info p {
  font-size: 0.28rem;
  color: #a3a3a3;
  width: 80%;
  margin: 0.5rem auto;
}
.info .queding {
  width: 100%;
  height: 1rem;
  border-top: 0.01rem solid #ccc;
  line-height: 1rem;
  margin: 0 auto;
  font-size: 0.36rem;
  color: #2d7ffc;
}
</style>