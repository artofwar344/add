<template>
  <div class="manage_wrap">
    <mt-header title="地址管理">
      <router-link to="/delivery" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="hearder_bottom"></div>
    <div class="userInfo">
      <mt-field class="receiveInfo" label="姓名" clear placeholder="请输入姓名" v-model="postname"></mt-field>
      <mt-field class="receiveInfo" label="联系方式" clear placeholder="请输入联系方式" v-model="tel"></mt-field>
      <div class="selectAre" @click="selectArea()">
        <mt-field class="receiveInfo" disabled label="选择地区">{{address_tag}}</mt-field>
        <img src="../../assets/images/nextinto.png" class="qr_icon">
      </div>
      <mt-field
        class="receiveInfo textArea"
        type="textarea"
        label="详细地址"
        clear
        placeholder="请输入详细地址"
        v-model="address"
      ></mt-field>
    </div>
    <mt-popup v-model="popupVisible" position="bottom" class="prop-tk">
      <div class="pop-btn">
        <p class="cancle" @click="cancle()">取消</p>
        <p class="insure" @click="sureMap()">确定</p>
      </div>
      <mt-picker ref="pickCom" :slots="slots" @change="onValuesChange" value-key="areaName"></mt-picker>
    </mt-popup>
    <div class="del_address">
      <!-- <mt-checklist
                class="save_address"
                v-model="value"
                :options="['保存到地址薄']"
                @change="checkbox(value)">
      </mt-checklist>-->
      <!-- <mt-button class="order_button" type="primary" @click="save()">保存</mt-button> -->
      <div class="padTopAdd5">
        <mybutton :btnData="btnData" @click="save"/>
      </div>
    </div>
  </div>
</template>

<script>
import mybutton from "@/components/MyButton";
import { mapGetters, mapMutations } from "vuex";
import { Toast } from "mint-ui";
export default {
  components: {
    mybutton
  },

  computed: {
    ...mapGetters(["expressdelivery"])
  },
  data() {
    return {
      btnData: [
        {
          text: "保存",
          disabled: false,
          isSure: true
        }
      ],
      receiveInfo: "",
      remark: "", //寄收件标识
      value: ["保存到地址薄"],
      popupVisible: false,
      slots: [
        {
          flex: 1,
          defaultIndex: 0,
          values: [],
          className: "slot1",
          textAlign: "center"
        },
        {
          pider: true,
          content: "-"
          // className: 'slot2'
        },
        {
          flex: 1,
          values: [],
          className: "slot3",
          textAlign: "center"
        },
        {
          pider: true,
          content: "-"
          // className: 'slot4'
        },
        {
          flex: 1,
          values: [],
          className: "slot5",
          textAlign: "center"
        }
      ],
      shengList: [],
      getShengList: [],
      shiList: [],
      getShiList: [],
      xianList: [],
      getXianList: [],
      postname: "",
      address: "",
      tel: "",
      isdefault: "1",
      address_tag: ""
    };
  },
  methods: {
    ...mapMutations(["SendUserInfo", "ReceiveUserInfo"]),
    // 是否保存地址簿
    // checkbox(val){
    //     if(val == '保存到地址薄'){
    //         this.isdefault = '0'
    //     }else{
    //         this.isdefault = '1'
    //     }
    // },
    // 调用保存地址薄接口
    useSave() {
      this.$axios({
        method: "post",
        url: "/gsp/fsx04001",
        data: {
          member_id: "31cea592cd5d4f65bbfbefcef462d994",
          postname: this.postname,
          address: this.address,
          tel: this.tel,
          postcode: "",
          isdefault: this.isdefault,
          address_tag: this.address_tag,
          tenant: "530000000000",
          txn_itt_chnl_id: "",
          txn_itt_chnl_type: ""
        },
        headers: {
          "C-App-Id": "GSP_APP_001",
          "C-Dynamic-Password-Foruser":
            window.sessionStorage.getItem("usertoken") != "null"
              ? window.sessionStorage.getItem("usertoken")
              : "1234567890"
        }
      })
        .then(res => {
          this.$router.push({ path: "/myaddress" });
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 点击保存，校验方法
    pageCheck() {
      let isContinue = true;
      // 检验姓名是否填写
      if (this.postname == "") {
        Toast({
          message: "请输入姓名",
          duration: 1000
        });
        isContinue = false;
        return false;
      }

      //var nameReg = /^[\u4E00-\u9FA5]{1,20}$/;
      var nameReg = /^[\u0391-\uFFE5A-Za-z]+$/;
      if (!nameReg.test(this.postname)) {
        Toast({
          message: "请输入中文名字",
          duration: 1000
        });

        isContinue = false;
        return false;
      }

      if (!isContinue) return false;

      if (this.tel == "") {
        Toast({
          message: "请输入联系方式",
          duration: 1000
        });
        isContinue = false;
        return false;
      }

      if (this.tel.length != 11 && !isNaN(this.tel)) {
        Toast({
          message: "请输入正确的11位号码",
          duration: 1000
        });
        isContinue = false;
        return false;
      }

      if (!isContinue) return false;
      // if(this.address_tag == ''){
      //     Toast({
      //         message: '请选择地区',
      //         duration: 1000
      //     });
      //     isContinue = false;
      //     return false;
      // }
      // if (!isContinue) return false;
      if (this.address == "") {
        Toast({
          message: "请填写详细地址",
          duration: 1000
        });
        isContinue = false;
        return false;
      }

      if (this.address.length > 50) {
        Toast({
          message: "字数限制为50字",
          duration: 1000
        });
        isContinue = false;
        return false;
      }
      return true;
    },
    save() {
      if (this.pageCheck()) {
        this.useSave();
      }
    },
    selectArea() {
      this.popupVisible = true;
      this.getSheng();
    },
    onValuesChange(picker, values) {
      this.address_tag = values[0] + " " + values[2] + " " + values[4];
      if (values[2] != "丽江市") {
        this.shiList.forEach(item => {
          if (item.REGNNM == values[2]) {
            this.getXian(item.REGNCODE);
          }
        });
      }
    },
    sureMap() {
      this.popupVisible = false;
    },
    cancle() {
      this.popupVisible = false;
    },
    getSheng() {
      this.$axios({
        method: "post",
        url: "/gsp/fsx03001",
        data: {
          txnCommCom: {
            tStsTraceId: "110567890",
            txnIttChnlId: 'C0011234567890987654321',
            txnIttChnlCgyCode: 'AC02C001'
          },
          txnBodyCom: {
            // regn_code:'530000000000'
          }
        },
        headers: {
          "Content-Type": "application/json",
          "C-Business-Id": "20181115124830231010100100010010",
          "C-App-Id": "GSP_APP_001",
          "C-Tenancy-Id": "530000000000"
        }
      }).then(res => {
        if (res.status == 200) {
          let cent = JSON.stringify(res.data);
          cent = cent.replace("C-Response-Body", "body");
          cent = JSON.parse(cent);
          cent = JSON.parse(cent.body);
          console.log("cent", cent);
          this.shengList = cent.list;
          console.log("this.shengList", this.shengList);
          this.shengList.forEach(item => {
            this.getShengList.push(item.REGNNM);
          });
          this.slots[0].values = this.getShengList;
          this.getshi(this.shengList[0].REGNCODE);
        }
      });
    },
    getshi(sheng) {
      this.$axios({
        method: "post",
        url: "/gsp/fsx03001",
        data: {
          txnCommCom: {
            tStsTraceId: "110567890",
            txnIttChnlId: 'C0011234567890987654321',
            txnIttChnlCgyCode: 'AC02C001'
          },
          txnBodyCom: {
            regn_code: sheng
          }
        },
        headers: {
          "Content-Type": "application/json",
          "C-Business-Id": "20181115124830231010100100010010",
          "C-App-Id": "GSP_APP_001",
          "C-Tenancy-Id": "530000000000"
        }
      }).then(res => {
        if (res.status == 200) {
          let cent = JSON.stringify(res.data);
          cent = cent.replace("C-Response-Body", "body");
          cent = JSON.parse(cent);
          cent = JSON.parse(cent.body);
          this.shiList = cent.list;
          this.shiList.forEach(item => {
            this.getShiList.push(item.REGNNM);
          });
          this.slots[2].values = this.getShiList;
          this.getXian(this.shiList[0].REGNCODE);
        }
      });
    },
    getXian(shi) {
      this.$axios({
        method: "post",
        url: "/gsp/fsx03001",
        data: {
          txnCommCom: {
            tStsTraceId: "110567890",
            txnIttChnlId: 'C0011234567890987654321',
            txnIttChnlCgyCode: 'AC02C001'
          },
          txnBodyCom: {
            regn_code: shi
          }
        },
        headers: {
          "Content-Type": "application/json",
          "C-Business-Id": "20181115124830231010100100010010",
          "C-App-Id": "GSP_APP_001",
          "C-Tenancy-Id": "530000000000"
        }
      })
        .then(res => {
          console.log("res", res);
          if (res.status == 200) {
            let cent = JSON.stringify(res.data);
            cent = cent.replace("C-Response-Body", "body");
            cent = JSON.parse(cent);
            cent = JSON.parse(cent.body);
            this.xianList = cent.list;
            this.getXianList = [];
            this.xianList.forEach(item => {
              this.getXianList.push(item.REGNNM);
            });
            this.cityDataReady = true;
            this.slots[4].values = this.getXianList;
          } else {
            console.log(res);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.address_tag = "";
  }
};
</script>

<style scoped>
.manage_wrap {
  position: relative;
}
.mint-header {
  height: 1.28rem;
  background-color: #ffffff;
  padding-top: 0.29rem;
}
.mint-header >>> .mint-header-title {
  font-size: 0.34rem;
  color: #333333;
}
.hearder_bottom {
  height: 0.2rem;
  background-color: #f1f3f6;
}
.userInfo {
  height: 5rem;
  background-color: #ffffff;
  padding: 0 0.36rem;
}
.receiveInfo {
  min-height: 1.2rem;
  white-space: wrap;
}

.userInfo >>> .mint-cell-text {
  color: #333333;
  font-size: 0.28rem;
}
.userInfo >>> .mint-cell-value {
  border-bottom: 0.01rem solid #eeeeee;
  padding-right: 0.01rem;
  height: 0.8rem;
  line-height: 0.8rem;
  color: #333333;
  font-size: 0.28rem;
}

.textArea >>> .mint-cell-value {
  border-bottom: transparent;
}

.receiveInfo >>> .mint-cell-value .mint-field-core::-webkit-input-placeholder {
  color: #bebebe;
  font-size: 0.28rem;
}
.textArea >>> .mint-cell-value {
  padding-top: 0.5rem;
}

.del_address {
  height: 4.8rem;
  position: relative;
  width: 100%;
  bottom: 0;
  left: 0;
}
.del_address .order_button {
  height: 0.8rem;
  width: 6rem;
  border-radius: 0.45rem;
  position: absolute;
  left: 50%;
  top: 55%;
  margin-left: -3rem;
}
.save_address {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
.save_address >>> .mint-cell {
  background: #f1f3f6;
}
.save_address >>> .mint-checkbox-core {
  border-radius: 0;
}
.is_link {
  position: relative;
  display: inline-block;
  left: 0.25rem;
}
.receiveInfo >>> .mint-field-core {
  background-color: #ffffff;
}
.prop-tk {
  width: 100%;
  height: 5rem;
  padding: 0.2rem 0.36rem 0 0.36rem;
  border-radius: 0.24rem 0.24rem 0 0;
}
.pop-btn {
  height: 0.4rem;
  line-height: 0.4rem;
  clear: both;
}
.pop-btn .cancle {
  float: left;
  font-size: 0.32rem;
}
.pop-btn .insure {
  float: right;
  font-size: 0.32rem;
}
.selectAre {
  position: relative;
}

.selectAre >>> .mint-field-other {
  font-size: 0.28rem;
  width: 200px;
}
.qr_icon {
  width: 0.14rem;
  height: 0.24rem;
  position: absolute;
  right: 0.23rem;
  top: 0.45rem;
}
</style>