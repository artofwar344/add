<template>
  <div class="queryEmail">
    <!-- 这里是展示数据中的 -->
    <!-- 头部的 -->
    <mt-header title="查快递">
      <router-link to="/QueryEmail" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>deliveryNo_content
    </mt-header>

    <div class="div_line"></div>

    <!-- 中部内容 -->
    <div>
      <div class="delivery_no">
        <span class="deliveryNo_img"></span>
        <div class="deliveryNo_content">
          <mt-field
            class="deliveryNo_text"
            clear
            placeholder="请输入快递单号"
            @blur.native.capture="submit"
            v-model="kddh"
          ></mt-field>
          <img src="../../assets/images/qrcode.png" class="qr_icon" @click="saomiao()">
        </div>
      </div>

      <div class="delivery_company">
        <span class="deliverycompany_img"></span>
        <div class="deliveryNo_content" @click="selectCompany()">
          <mt-field
            class="deliverycompany_text"
            clear
            placeholder="请选择快递公司"
            v-model="kdgs"
            disabled
          ></mt-field>
          <img src="../../assets/images/nextinto.png" class="company_icon">
        </div>
      </div>
      <div class="sfts">
        <span v-if="sftk">顺丰的物流详情暂只支持查询在本平台下单的快递单号!</span>
      </div>
    </div>
    <!-- <div class="login_sure">
			<mt-button class="search_button" @click="search()" type="primary">查询</mt-button>
    </div>-->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="search"/>
    </div>
  </div>
</template>

<script>
import mybutton from "../../components/MyButton";
import { Toast } from "mint-ui";
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
      kddh: "",
      kdgs: "",
      kdph: "",
      kdbm: "",
      sftk: false
    };
  },

  components: {
    mybutton
  },

  methods: {
    selectCompany() {
      //选择快递公司
      this.$router.push({
        path: "/ChoseCompany",
        query: { kddh: this.kddh }
      });
    },
    saomiao() {
      this.$CallModule("scan", "二维码扫描");
    },
    ResideCode(str) {
      let a = str.replace(/\s/g, "");
      this.kddh = a;
      this.submit();
    },
    //查询
    search() {
      //点击查询按钮

      var reg = /^[0-9a-zA-Z]*$/g;

      if (this.kddh == "") {
        Toast({
          message: "快递单号不能为空",
          duration: 1000
        });

        return;
      } else if (this.kdgs == "" || this.kdgs == null) {
        Toast({
          message: "快递公司不能为空",
          duration: 1000
        });

        return;
      } else if (!reg.test(this.kddh)) {
        Toast({
          message: "请输入正确的快递单号",
          duration: 1000
        });

        return;
      } else {
        if (this.kdgs.indexOf("顺丰") !== -1) {
          this.kdph = "95338";
          this.kdbm = "SF";
        } else if (this.kdgs.indexOf("中通") !== -1) {
          this.kdph = "95311";
          this.kdbm = "ZTO";
        } else if (this.kdgs.indexOf("圆通") !== -1) {
          this.kdph = "95354";
          this.kdbm = "YTO";
        } else if (this.kdgs.indexOf("韵达") !== -1) {
          this.kdph = "95346";
          this.kdbm = "YD";
        } else if (this.kdgs.indexOf("EMS") !== -1) {
          this.kdph = "11183";
          this.kdbm = "EMS";
        }
        this.$router.push({
          path: "/QueryResult",
          query: {
            deliveryCrop: this.kdgs,
            phone: this.kdph,
            deliveryCropCode: this.kdbm,
            kddh: this.kddh,
            back: 1
          }
        });
      }
    },

    submit: function() {
      let obj = {
        txnCommCom: {
          tStsTraceId: "110567890",
          txnIttChnlId: 'C0011234567890987654321',
          txnIttChnlCgyCode: 'AC02C001'
        },
        txnBodyCom: {
          logistic_code: this.kddh,
        }
      };
//    console.log(this.kddh);
      if (this.kddh == "" ||this.kddh == null) {
        Toast({
          message: "快递单号不能为空",
          duration: 1000
        });}else{

             this.$ajaxRequest("post", "/gwlp/logistic/recognition", obj)
        .then(response => {
          console.log(obj);
        console.log(response);
          // let data = JSON.stringify(response.data)
					// let cent =JSON.parse(data)
          //let a = JSON.parse(cent["C-Response-Body"]);
          console.log(response.shipper_list[0]["shipper_name"]);
          this.kdgs = response.shipper_list[0]["shipper_name"];
          if (this.kdgs.indexOf("顺丰") !== -1) {
            this.sftk = true;
          } else {
            this.sftk = false;
          }
        })
        .catch(error => {
          console.log(error,88888);
          if (this.kddh !== "") {
            Toast({
              message: "请输入正确快递单号",
              duration: 1000
            });
          }
        });
        }

     
    }
  },
  mounted: function() {
    window.ResideCode = this.ResideCode;
    let a = this.$router.currentRoute.query;
    this.kdgs = a.deliveryCrop;
    this.kdbm = a.deliveryCropCode;
    this.kddh = a.kddh;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.mint-cell-wrapper {
  background-image: none !important;
}
.mint-cell:last-child {
  background-image: none !important;
}
.queryEmail {
  background-color: #ffffff;
  height: 100%;
  position: fixed;
  width: 100%;
}
.sfts {
  width: 100%;
  height: 1.5rem;
  padding: 0.3rem 2rem 0 2rem;
}
.sfts span {
  float: left;
  color: #fa6366;
  font-size: 14px;
}
.mint-header {
  height: 1.28rem;
  background-color: #ffffff;
  padding-top: 0.29rem;
}

.mint-header >>> .mint-header-title {
  font-size: 0.4rem;
  color: #333333;
}

.hello {
  background-color: #ffffff;
}

.top {
  position: relative;
  width: 100%;
  height: 0.9rem;
}

.back_icon {
  display: inline-block;
  width: 0.16rem;
  height: 0.24rem;
  position: absolute;
  top: 50%;
  margin-left: 0.36rem;
  transform: translate(0, -50%);
}

.top_title {
  display: inline-block;
  font-size: 0.34rem;
  font-family: "PingFangSC-Medium";
  color: #333333;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.div_line {
  width: 100%;
  height: 0.2rem;
  background-color: #f1f3f6;
}

.delivery_no {
  position: relative;
  margin-top: 2.2rem;
  text-align: center;
}

.deliveryNo_img {
  float: left;
  display: inline-block;
  width: 0.4rem;
  height: 0.32rem;
  margin-left: 0.96rem;
  margin-top: 0.25rem;
  background-image: url(../../assets/images/delivey_no.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
}

.deliveryNo_content {
  position: relative;
  text-align: center;
}

.deliveryNo_content >>> .mint-cell-value {
  border-bottom: 0.01rem solid #eeeeee;
  height: 0.8rem;
  line-height: 0.8rem;
  color: #807272;
  font-size: 0.3rem;
}

.deliveryNo_content
  >>> .mint-cell-value
  .mint-field-core::-webkit-input-placeholder {
  color: #bebebe;
  font-size: 0.28rem;
}

.deliveryNo_content >>> .mint-cell-value .mint-field-clear {
  margin-right: 0.6rem;
}

.deliveryNo_text {
  display: inline-block;
  width: 4.6rem;
}

.deliveryNo_text >>> .mint-field-core {
  background-color: #ffffff;
  font-size: 0.28rem;
}

.deliverycompany_text {
  display: inline-block;
  width: 4.6rem;
}

.deliverycompany_text >>> .mint-field-core {
  background-color: #ffffff;
  font-size: 0.28rem;
}

.qr_icon {
  float: right;
  display: inline-block;
  width: 0.28rem;
  height: 0.28rem;
  position: relative;
  left: -0.5rem;
  margin-top: 0.25rem;
}

.delivery_company {
  position: relative;
  margin-top: 0.8rem;
  text-align: center;
  vertical-align: middle;
}

.deliverycompany_img {
  float: left;
  display: inline-block;
  width: 0.4rem;
  height: 0.32rem;
  margin-left: 0.96rem;
  margin-top: 0.25rem;
  background-image: url(../../assets/images/compnay.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
}

.company_icon {
  display: inline-block;
  float: right;
  width: 0.14rem;
  height: 0.24rem;
  position: relative;
  left: -0.6rem;
  margin-top: 0.25rem;
}

.login_sure {
  height: 2.5rem;
  position: relative;
  text-align: center;
}

.login_sure .search_button {
  height: 0.8rem;
  width: 80%;
  border-radius: 0.45rem;
  margin-top: 0.3rem;
}
</style>