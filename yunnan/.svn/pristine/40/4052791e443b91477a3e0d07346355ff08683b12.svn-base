<template>
    <div>
      <towtop :name="titlename"/>
        <div class="education">
            <!--卡信息 -->
          <div class="card">
              <div class="card_body">
                <p class="logo"></p>
                <p class="bureau_name">云南省人力资源和社会保障厅</p>
                <p class="name_id">姓名:{{resultData.cardInformation.name}}</p>
                <p class="name_id">个人编号:{{grcode}}</p>
                <p class="name_id card_id">{{resultData.cardInformation.bank_card_num}}</p>
              </div>
          </div>
          <!--卡状态-->
          <div id="state" @click="goto('卡状态')">
            <span class="img"></span>
            卡状态
            <span class="symbol" :class="kztstyle">{{kzt[resultData.cardInformation.social_sec_card_status-1]}}</span>
            <div>
              <span>说明</span>
              <span class="arrow"></span>
            </div>
          </div>
          <!--卡功能操作-->
          <div>
            <div class="header">
              <div class="blueline"></div>卡功能操作
            </div>
            <div id="test" class="operation" plain @click="province" size="large">
              <div class="img"></div>
              <div>出省检测</div>
            </div>
          </div>
          <!--卡查询操作-->
          <div>
            <div class="header">
              <div class="blueline"></div>卡查询操作
            </div>
            <div id="intro" class="operation" @click="goto('卡介绍')">
              <div class="img"></div>
              <div>卡介绍</div>
            </div>
            <div id="progress" class="operation" @click="goto('制卡进度')">
              <div class="img"></div>
              <div>制卡进度</div>
            </div>
            <div id="record" class="operation" @click="goto('卡记录')">
              <div class="img"></div>
              <div>卡记录</div>
            </div>
          </div>
        </div>

        <div class="example-popup">
            <!--<div class="example-popup_wrapper">
                <Btn plain @click.native="popupVisible6 = true" size="large">弹出 popupPrompt纵向按钮的</Btn>
            </div>-->
            <Popupprompt
            v-model="popupVisible6"
            :title="content2.title"
            :text="resultData.provinceDetection.feedback_message"
            :confirm-btn = {}
            :cancel-btn = {}
            :btn-list= "content2.btnList"
            @click="clickbtn2"
            >
        </Popupprompt>
    </div>
    </div>
</template>
<script>
import towtop from "../../../../components/HederTwo";
import { cenurl } from "@/components/toptow.js";

export default {
  components: {
    towtop
  },
  data() {
    return {
      titlename: "社会保障卡",
      popupVisible6: false,
      certification:true, //是否实名认证
      kzt: ["正常", "临时挂失", "正式挂失", "制卡中", "待启用", "已注销"],
      kztstyle: "",
      grcode:'',
      content2: {
        btnList: [
          {
            id: "btn1",
            text: "确定",
            primary: true
          }
        ]
      },
      queryCardInformationUrl: "/gsp/mng60019",
      queryProvinceDetectionUrl: "/gsp/mng60020",
      resultData: {
        cardInformation: {},
        provinceDetection: {}
      }
    };
  },
  created() {
    const _self = this;
    if(window.sessionStorage.getItem("username") == "null" || window.sessionStorage.getItem("cardid") == "null"){
      this.certification = false;
      this.$toast("需要实名注册登陆信息");
    }else{
      _self.queryCardInformation(_self.queryProvinceDetection);
    }
  },
  mounted() {
    // this.datetext();
  },
  methods: {
    province(){
      if(this.certification){
        this.popupVisible6 = true
      }else{
        this.$toast("需要实名注册登陆信息");
      }
    },
    openPopup(val) {
      console.log("打开" + val);
    },
    clickbtn2(id) {
      this.popupVisible6 = false;
      console.log(id);
    },
    queryCardInformation(callback) {
      const _self = this;
      let sendData = {
        txnBodyCom: {
          name: window.sessionStorage.getItem("username"),
          cert_type: "01",
          id_number: window.sessionStorage.getItem("cardid"),
          chann_id: "1",
          matter_id: window.sessionStorage.getItem("matterid")
        }
      };
      this.$ajaxRequest("post", _self.queryCardInformationUrl, sendData)
        .then(res => {
          let cent = res;
          if (cent) {
            // callback(cent)
            _self.resultData.cardInformation = cent;
            if (
              _self.resultData.cardInformation.social_sec_card_status == "1"
            ) {
              this.kztstyle = "symbolz";
            } else if (
              _self.resultData.cardInformation.social_sec_card_status == "2" ||
              _self.resultData.cardInformation.social_sec_card_status == "3"
            ) {
              this.kztstyle = "symbolls";
            } else if (
              _self.resultData.cardInformation.social_sec_card_status == "4" ||
              _self.resultData.cardInformation.social_sec_card_status == "5"
            ) {
              this.kztstyle = "symbolzk";
            } else if (
              _self.resultData.cardInformation.social_sec_card_status == "6"
            ) {
              this.kztstyle = "symboly";
            }
            callback && callback();
          }
        })
        .catch(error => {
          console.log(error);
        });
    }, // 持卡情况查询
    queryProvinceDetection(callback) {
      const _self = this;
      let sendData = {
        txnBodyCom: {
          card_addr: _self.resultData.cardInformation.card_addr,
          social_sec_num: _self.resultData.cardInformation.social_sec_num,
          social_sec_card_num:_self.resultData.cardInformation.social_sec_card_num,
          card_id_code: _self.resultData.cardInformation.card_id_code,
          name: _self.resultData.cardInformation.name,
          chann_id: "1",
          matter_id: window.sessionStorage.getItem("matterid")
        }
      };
      let setdata = {};
      this.$ajaxRequest("post", _self.queryProvinceDetectionUrl, sendData)
        .then(res => {
          console.log(res);
          if (res) {
            _self.resultData.provinceDetection = res;
            _self.grcode=this.$CallSUBSTR(_self.resultData.cardInformation.personal_code)
            callback && callback();
          }
        })
        .catch(error => {
          console.log(error);
        });
    }, // 出省检测查询
    goto(type) {
      const _self = this;
      let path = "";
      let name = "";
      let params = {};
      if (type === "卡记录") {
        path = "/record";
        name = "record";
        params = {
          txnBodyCom: {
            name: _self.resultData.cardInformation.name,
            cert_type: _self.resultData.cardInformation.cert_type,
            id_number: _self.resultData.cardInformation.id_number,
            chann_id: "1",
            matter_id: window.sessionStorage.getItem("matterid")
          }
        };
      } else if (type === "制卡进度") {
        // schedule
        path = "/schedule";
        name = "schedule";
        params = {
          txnBodyCom: {
            name: _self.resultData.cardInformation.name,
            cert_type: _self.resultData.cardInformation.cert_type,
            id_number: _self.resultData.cardInformation.id_number,
            chann_id: "1",
            matter_id: window.sessionStorage.getItem("matterid")
          }
        };
      } else if (type === "卡介绍") {
        path = "/schedulecent";
        name = "schedulecent";
        params = {
          txnBodyCom: {
            name: _self.resultData.cardInformation.name,
            cert_type: _self.resultData.cardInformation.cert_type,
            id_number: _self.resultData.cardInformation.id_number,
            chann_id: "1",
            matter_id: window.sessionStorage.getItem("matterid")
          }
        };
      } else if (type === "卡状态") {
        path = "/explain";
        name = "renexplain";
      }
      _self.$router.push({
        path,
        name,
        params
      });
    },
    datetext() {
      let setdata = {
        txnBodyCom: {
          name: window.sessionStorage.getItem('username'),
          cert_type: "01",
          id_number: window.sessionStorage.getItem('cardid'),
          chann_id: "1",
          matter_id: window.sessionStorage.getItem("matterid"),
        }
      };
      this.$ajaxRequest("post", "/gsp/mng60019", setdata)
        .then(res => {
          //this.$router.push({name:'queryresult',params:{titlename:this.titlename}})
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../../../assets/css/Affairs.less";
</style>
