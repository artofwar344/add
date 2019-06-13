<template>
  <div class="specialEquipmentQuery">
    <myheader :my-header="headerData"></myheader>
    <div class="example-field">
      <form>
        <div class="littlestarbig">
          <span class="littlestar">*</span>
        <Field
          :propserror="errorNum"
          :error="errorNumInfo"
          type="text"
          label="身份证号"
          placeholder="请输入身份证号"
          v-model="sfzh"
          v-on:currentval="handleNumVal"
          v-on:errorchange="handleErrorChangesNum"
        ></Field>
        </div>
        <div class="example-field_btn-wrapper">
          <!-- <Btn block @click.stop.prevent="getData">查询</Btn> -->
          <div class="padTopAdd5">
            <mybutton :btnData="btnData" @click.stop.prevent="getData"/>
          </div>
          <Popupprompt
            v-model="popupVisible6"
            :title="popData.title"
            :text="popData.text"
            :confirm-btn="{}"
            :cancel-btn="{}"
            :btn-list="popData.btnList"
            @click="close"
          >
            <div slot="othercontent"></div>
          </Popupprompt>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/header";
import mybutton from "@/components/MyButton";

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
      headerData: {
        title: "特种设备安全管理人员查询",
        backUrl: "/"
      },
      queryUrl: "/gsp/mng60016",
      sfzh: window.sessionStorage.getItem('cardid')!='null'?window.sessionStorage.getItem('cardid'):'',
      errorNum: false,
      errorNumInfo: "",
      popupVisible6: false,
      errMsg1: `您好！未查询到特种设备安全管理人员证件信息，无法办理此事项，请核实！如有疑问，请咨询相关部门。`,
      errMsg2: `您好！经查询您的特种设备安全管理人员证件有效期至2018-12-31，已过期失效，无法办理此事项，请核实！如有疑问，请咨询相关部门。`,
      errMsg3: `您好！经查询您的特种设备安全管理人员证的发证机关不属于云南省辖区范围，无法办理此事项，请前往发证机关所在地办理。`,
      popData: {
        title: "无法办理此事项",
        text: "",
        btnList: [
          {
            id: "btn1",
            text: "确认",
            primary: true
          }
        ]
      },
      queryData: {}
    };
  },
  components: {
    mybutton,
    myheader: Header
  },
  mounted() {
    if (this.$route.query.typenumber === "1") {
      this.headerData.title = "特种设备安全管理人员证查询";
    } else if (this.$route.query.typenumber === "2") {
      this.headerData.title = "特种设备作业人员证查询";
    }
  },
  methods: {
    handleErrorChangesNum(val) {
      // 数字错误状态接收
      this.errorNum = val;
    },
    handleNumVal(val) {
      this.numValue = val;
    },
    getData() {
      if (!this.$VerifyCardId.test(this.sfzh)) {
        this.$toast("请输入正确的身份证号");
        return false;
      }
      let _self = this;
      let sendData = {
        txnCommCom: {
          tRecInPage: "10",
          tPageJump: "2",
          tStsTraceId: "110567890"
        },
        txnBodyCom: {
          sfzh: _self.sfzh,
          type: "01",
          chann_id: "1",
          matter_id: window.sessionStorage.getItem("matterid")
        }
      };
      this.$ajaxRequest("post", this.queryUrl, sendData)
        .then(res => {
          console.log(res);
          if (res.exams.length === 0) {
            this.$toast("未查询到数据！");
          } else {
            _self.formetData(res);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    formetData(data) {
      let _self = this;
      console.log(data);
      _self.init(data);
    },
    init(data) {
      let _self = this;
      if (data.code === 0 && data.msg === "没有对应数据") {
        _self.popupVisible6 = true;
        _self.popData.text = _self.errMsg1;
      } else {
        _self.queryData = data;
        _self.goto();
      }
    },
    close() {
      const _self = this;
      _self.popupVisible6 = false;
    },
    goto() {
      const _self = this;
      _self.popupVisible6 = false;
      _self.$router.push({
        path: "/specialEquipmentDetails",
        query: {
          queryParams: _self.queryData,
          typenumber: "1"
        }
      });
    }
  }
};
</script>

<style>
.specialEquipmentQuery .hui-field_core {
  text-align: right;
}
</style>
<style scoped="specialEquipment">
html,
body {
  height: 100%;
}

.example-field {
  margin-top: 0.1rem;
}
.specialEquipmentQuery {
  height: 100%;
  background: #eee;
}
.hui-field_main {
  font-size: 0.28rem;
}

.hui-field_star {
  display: none;
}

.hui-btn.is-block {
  width: 5.9rem;
  height: 0.9rem;
  margin: 1rem auto;
  background-color: #2d7ffc;
  font-size: 0.32rem;
  color: #fff;
}

.hui-popupPrompt_text {
  text-align: left;
  color: #a3a3a3;
}
.littlestarbig{
  position: relative;
}
.littlestar{
  display: inline-block;
  color: red;
  font-size:0.4rem;
  position: absolute;
  left:0.06rem;
  top: 37%
}
</style>
