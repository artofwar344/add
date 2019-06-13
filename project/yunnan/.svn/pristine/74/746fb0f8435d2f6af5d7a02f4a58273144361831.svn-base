<template>
  <div class="reapply-info">
    <towtop :name="titlename"/>
    <div class="main">
      <Field type="text" label="姓名" :value="hiddenName(name)" readonly></Field>
      <Field type="text" label="公民身份证号" :value="hiddenIdCard(idcard)" readonly></Field>
      <Field type="text" label="申请人手机号" :value="hiddenPhone(phone)" readonly></Field>
      <div class="headline">户籍所在地派出所</div>
      <div class="friendlyReminder">
          <p>请选择正确的户籍所在地派出所，否则不予办理。</p>
        </div>
      <Field
          readonly
          label="州市"
          type="text"
          placeholder="请选择"
          :value="cityName"
          @click.native="open('pickerselect02')"
        >
          <span slot="append" class="example-select_arrowRight"></span>
        </Field>
      <HuiselectNew
        ref="pickerselect02"
        position="bottom"
        :dataslots="cityParam"
        class="example-select_item"
        @confirms="selectConfirmCity"
        @reset="resetCity"
      ></HuiselectNew>
      <Field
          readonly
          label="区县"
          type="text"
          placeholder="请选择"
          :value="countyName"
          @click.native="open('pickerselect03')"
        >
          <span slot="append" class="example-select_arrowRight"></span>
        </Field>
      <HuiselectNew
        ref="pickerselect03"
        position="bottom"
        :dataslots="countyParam"
        class="example-select_item"
        @confirms="selectConfirmCounty"
        @reset="resetCounty"
      ></HuiselectNew>
      <Field
          readonly
          label="派出所"
          type="text"
          placeholder="请选择"
          :value="registerName"
          @click.native="open('pickerselect04')"
        >
          <span slot="append" class="example-select_arrowRight"></span>
        </Field>
      <HuiselectNew
        ref="pickerselect04"
        position="bottom"
        :dataslots="policeStationParam"
        class="example-select_item"
        @confirms="selectConfirmPolice"
        @reset="resetPolice"
      ></HuiselectNew>
      <Field type="text" label="申请类型" readonly>
        <Radios
          v-model="type"
          :options="[{label: '损坏换领', value: '24'},{label: '遗失补领', value: '41'}]"
        ></Radios>
      </Field>
    </div>
    <div class="announce">
      <div class="header">
        <div class="blueline"></div>提示
      </div>
      <p>申请原因为损坏换领，领证时需回收原身份证件。</p>
      <p>申请原因为遗失补领，请申请补办身份证后到就近派出所办理挂失，如为挂失，造成的后果，由本人承担。</p>
    </div>
    <mybutton :btnData="btnData" @click="next"/>
  </div>
</template>

<script>
import towtop from "../../../../components/HederTwo";
import mybutton from "../../../../components/MyButton";
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data: function() {
    return {
      titlename: "申请补办身份证",
      btnData: [
        {
          text: "下一步",
          disabled: false,
          isSure: true
        }
      ],
      name: sessionStorage.getItem("username"),
      idcard: sessionStorage.getItem("cardid"),
      phone: sessionStorage.getItem("userphone"),
      type: "",
      cityName: "",
      cityCode: "",
      countyName: "",
      countyCode: "",
      registerName: "",
      registerCode: "",
      sendData: {},
      /* name: "詹绪满", // sessionStorage.getItem("username"),
      idcard: "530112197602229010", // sessionStorage.getItem("cardid"),
      phone: "15201123004" // sessionStorage.getItem("userphone"), */
    };
  },
  components: {
    towtop,
    mybutton
  },
  computed: {
    ...mapGetters("publicSecurityStore", [
      "policeStationParam",
      "cityParam",
      "countyParam"
    ])
  },
  mounted() {
    this.fetchArea({ parentCode: "530000", regnLevel: "2" });
  },
  methods: {
    ...mapMutations("reapplyStore", ["setSendData", "setWorkId"]),
    ...mapActions("publicSecurityStore", ["fetchAreaParams", "fetchArea"]),
    open(picker) {
      if (picker == "pickerselect03" && this.cityName == "") {
        this.$toast("请先选择州市");
        return;
      } else if (
        picker == "pickerselect04" &&
        (this.cityName == "" || this.countyName == "")
      ) {
        this.$toast("请先选择州市和区县");
        return;
      }
      this.$refs[picker].open();
      document.activeElement.blur();
      $(".hui-popup").on("touchmove", function(event) {
        event.preventDefault();
        event.stopPropagation();
      });
    },
    selectConfirmCity(selectedVal) {
      let _self = this;
      _self.cityName = selectedVal[0].regnNm;
      _self.cityCode = selectedVal[0].regnCode;
      _self.countyName = "";
      _self.countyCode = "";
      _self.registerName = "";
      _self.registerCode = "";
      this.fetchArea({
        parentCode: selectedVal[0].regnCode,
        regnLevel: "3"
      });
    },
    resetCity() {
      let _self = this;
      _self.cityName = "";
      _self.cityCode = "";
      _self.countyName = "";
      _self.countyCode = "";
      _self.registerName = "";
      _self.registerCode = "";
    },
    selectConfirmCounty(selectedVal) {
      let _self = this;
      _self.registerName = "";
      _self.registerCode = "";
      _self.countyName = selectedVal[0].regnNm;
      _self.countyCode = selectedVal[0].regnCode;
      _self.fetchAreaParams({ code: selectedVal[0].regnCode, level: "2" });
    },
    resetCounty() {
      let _self = this;
      _self.countyName = "";
      _self.countyCode = "";
      _self.registerName = "";
      _self.registerCode = "";
    },
    selectConfirmPolice(selectedVal) {
      let _self = this;
      _self.registerCode = selectedVal[0].orgCode;
      _self.registerName = selectedVal[0].orgName;
    },
    resetPolice() {
      let _self = this;
      _self.registerName = "";
      _self.registerCode = "";
    },
    hiddenName(name) {
      var res = [];
      var arr = name.split("");
      for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
          res.push(arr[i]);
        } else {
          res.push("*");
        }
      }
      return res.join("");
    },
    hiddenIdCard(idcard) {
      return (
        idcard.substring(0, 3) +
        "***********" +
        idcard.substring(idcard.length - 4, idcard.length)
      );
    },
    hiddenPhone(phone) {
      return (
        phone.substring(0, 3) +
        "****" +
        phone.substring(phone.length - 4, phone.length)
      );
    },
    next() {
      if (this.type == "") {
        this.$toast("请选择申请类型！");
        return;
      } else if (this.registerCode == "") {
        this.$toast("请选择户籍所在地派出所!");
        return;
      }
      var sendData = {
        name: this.name,
        idcard: this.idcard,
        phone: this.phone,
        type: this.type,
        cityName: this.cityName,
        cityCode: this.cityCode,
        countyName: this.countyName,
        countyCode: this.countyCode,
        registerCode: this.registerCode,
        registerName: this.registerName
      };
      this.setSendData(sendData);
      this.$router.push({
        name: "reapplyAddress"
      });
    }
  }
};
</script>
<style lang="less">
.reapply-info {
  .hui-field {
    height: 1rem;
    display: flex;
    padding: 0 0.36rem;
    font-size: 0.28rem;

    .hui-field_title {
      color: #999999;
    }

    .hui-radios {
      padding: 0;

      .hui-radios_itemWrapper {
        padding-top: 0;
        display: flex;

        .hui-radios_item:first-child {
          margin-right: 0.9rem;
        }
      }
    }
  }
}
</style>
<style lang='less' scoped>
.reapply-info {
  .main {
    background: #fff;
    .headline {
      height: 0.76rem;
      display: flex;
      align-items: center;
      padding: 0 0.32rem;
      color: #999999;
      background: #f1f3f6;
    }
  }
  .announce {
    margin-bottom: 1rem;
    .header {
      font-weight: normal;
    }
    p {
      color: #999;
    }
  }
   .friendlyReminder {
          height:auto !important;
          padding: 0 0.36rem;
          background-color:#F1F3F6;

          p {
            color: red;
            font-size: 0.2rem;
            text-align: left;
            line-height: 0.4rem;
          }
        }
}
</style>
