<template>
  <div>
    <towtop :name="hadertow"/>
    <div class="scheduleBox">
      <Steps>
        <Step
          v-for="(item,index) in datalist2"
          :key="item.id"
          :item="item">
        </Step>
      </Steps>
    </div>
  </div>
</template>


<script>
import towtop from "../../../../components/HederTwo";
import { cenurl } from "../../../../components/toptow.js";
export default {
  data() {
    return {
      params: this.$route.params,
      hadertow: "卡进度",
      datalist2: [],
      queryData: {},
      queryUrl: "/gsp/mng60022"
    };
  },
  components: { towtop },
  created() {
    const _self = this;
     if(window.sessionStorage.getItem("username") == "null" || window.sessionStorage.getItem("cardid") == "null"){
      this.$toast("需要实名注册登陆信息");
    }else{
      _self.getData();
    }
  },
  methods: {
    init(data) {
      let _self = this;
      _self.datalist2 = data;
    },
    getData() {
      let _self = this;
      // console.log(cenurl.url() + this.queryUrl)
      let sendData = _self.params;
      this.$ajaxRequest("post", this.queryUrl, sendData)
        .then(res => {
          // console.log(res)
          _self.setDom(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
    RecordSub(){
      this.$router.go(-1)
    },
    setDom(data) {
      let _self = this;
      console.log(data);
      if (data) {
        let resArr = [];

        for (let i = 0; i < data.rows.length; i++) {
          let obj = {};
          obj.title = data.rows[i].card_status_name;
          obj.desc = data.rows[i].message;
          obj.id = data.rows[i].social_sec_card_status;
          switch (data.rows[i].is_current_node) {
            case "ok":
              obj.status = "";
              break;
            case "y":
              obj.status = "finished";
              break;
            default:
              obj.status = "noPass";
          }
          resArr.push(obj);
        }
        console.log(resArr);
        _self.init(resArr);
      } else {
        console.log(`errorData:${data}`);
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../style.less");
@import url("../../../../assets/css/style.less");
.hui-step {
  color: #999;
}
.scheduleBox {
  text-align: left;
  background: #fff;
  color: #999;
}
</style>
