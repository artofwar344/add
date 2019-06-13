<template>
  <div class="reapply-address">
    <towtop :name="titlename"/>
    <div class="headline">选择领证地址</div>
    <div class="main">
      <Field
        readonly
        label="领证地址"
        placeholder="请选择"
        :value="confirmAddress"
        @click.native="open('pickerselect01')"
      >
        <span slot="append">
          <Icon type="arrow-right" size="14" color="#757575"></Icon>
        </span>
      </Field>
      <Huiselect
        ref="pickerselect01"
        position="bottom"
        :dataslots="selectData01"
        class="example-select_item"
        @confirms="selectConfirmAddress"
      ></Huiselect>
      <div v-if="confirmAddressValue!='50'">
        <Field readonly label="州市" placeholder="请选择" :value="city" @click.native="open('pickerselect02')">
          <span slot="append">
            <Icon type="arrow-right" size="14" color="#757575"></Icon>
          </span>
        </Field>
        <Huiselect
          ref="pickerselect02"
          position="bottom"
          :dataslots="cityParam"
          class="example-select_item"
          @confirms="selectConfirmCity"
        ></Huiselect>
        <Field readonly label="区县" placeholder="请选择" :value="county" @click.native="open('pickerselect03')">
          <span slot="append">
            <Icon type="arrow-right" size="14" color="#757575"></Icon>
          </span>
        </Field>
        <Huiselect
          ref="pickerselect03"
          position="bottom"
          :dataslots="countyParam"
          class="example-select_item"
          @confirms="selectConfirmCounty"
        ></Huiselect>
      </div>
      <div class="headline">选择详细申领地</div>
      <Radios v-model="value2" :options="getSld()" ref="radios">
        <template slot="radioSlotCon" slot-scope="radioSlotCon">
          <div class="example-radios2_list">
            <Cell
              :class="confirmAddressValue == '10'?'':'haveAddress'"
              show-text
              :title="radioSlotCon.item.orgName"
              :text="radioSlotCon.item.adress"
              is-title-cut1
              left-box-class="example-cell_leftBox"
              info-box-class="example-cell_infoBox"
              right-box-class="example-cell_rightBox"
              @click="(val)=>{handleCellClickEvent(val,radioSlotCon.item)}"
            ></Cell>
          </div>
        </template>
      </Radios>
    </div>
    <mybutton :btnData="btnData" @click="next"/>
  </div>
</template>

<script>
import towtop from "../../../../components/HederTwo";
import mybutton from "../../../../components/MyButton";
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data: function() {
    return {
      btnData: [
        {
          text: "下一步",
          disabled: false,
          isSure: true
        }
      ],
      titlename: "申请补办身份证",
      selectData01: [
        {
          flex: 1,
          values: [
            { text: "户籍所在地派出所", value: "10" },
            { text: "云南省公安厅居民身份证办证接待大厅", value: "50" },
            { text: "自助取证机", value: "22" }
          ],
          className: "slot1",
          showText: "text"
        }
      ],
      confirmAddress: "",
      confirmAddressValue: "",
      city: "",
      county: "",
      value2: "",
      selfParam: [],
      sendData: {}
    };
  },
  components: {
    towtop,
    mybutton
  },
  mounted() {
    console.log(this.sendDataSave);
    console.log(this.workId);
    this.sendData = this.sendDataSave;
    this.fetchArea({ parentCode: "530000", regnLevel: "2" });
  },
  computed: {
    ...mapGetters("publicSecurityStore", ["cityParam", "countyParam"]),
    ...mapGetters("reapplyStore", ["workId", "sendDataSave"])
  },
  methods: {
    ...mapActions("publicSecurityStore", ["fetchArea"]),
    ...mapMutations("reapplyStore", ["setSendData", "setWorkId"]),
    getSld() {
      if (this.confirmAddressValue == "10") {
        return [
          {
            orgName: this.sendData.registerName,
            value: this.sendData.registerCode
          }
        ];
      } else if (this.confirmAddressValue == "50") {
        return [
          {
            orgName: "云南省公安厅居民身份证办证接待大厅",
            adress: "云南省昆明市西山区安康路201号",
            value: "云南省公安厅居民身份证办证接待大厅"
          }
        ];
      } else {
        if (Array.isArray(this.selfParam)) {
          for (var item of this.selfParam) {
            item.value = item.orgCode;
          }
        }
        return this.selfParam;
      }
      return [];
    },
    open(picker) {
      if(this.confirmAddressValue == "10" && picker != "pickerselect01"){
        return;
      }
      if (picker == "pickerselect03" && this.city == "") {
        this.$toast("请先选择州市。");
        return;
      }
      this.$refs[picker].open();
      document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    selectConfirmAddress(selectedVal) {
      this.confirmAddress = selectedVal[0].text;
      this.confirmAddressValue = selectedVal[0].value;
      if (this.confirmAddressValue == "10") {
        this.city = this.sendData.cityName;
        this.county = this.sendData.countyName;
        this.sendData.addressName = "";
        this.sendData.address = "";
      } else {
        this.city = "";
        this.county = "";
        this.sendData.addressName = "";
        this.sendData.address = "";
        if (this.confirmAddressValue == "22") {
          this.getSelf("530000");
        }
      }

      this.sendData.lzfs = this.confirmAddressValue;
    },
    selectConfirmCity(selectedVal) {
      let _self = this;
      _self.city = selectedVal[0].regnNm;
      _self.county = "";
      this.fetchArea({
        parentCode: selectedVal[0].regnCode,
        regnLevel: "3",
        type: _self.confirmAddressValue == "22" ? "GAT_CARD" : ""
      });
      if (_self.confirmAddressValue == "22") {
        _self.getSelf( selectedVal[0].regnCode);
      }
    },
    selectConfirmCounty(selectedVal) {
      let _self = this;
      _self.county = selectedVal[0].regnNm;
        _self.getSelf( selectedVal[0].regnCode);
    },
    handleCellClickEvent(e, option) {
      console.log(option.orgCode);
      this.value2 = option.value;
      if (this.confirmAddressValue == "10") {
        this.sendData.selfCode = "";
        this.sendData.selfName = "";
        this.sendData.addressName = option.orgName;
        this.sendData.address = "";
      } else if (this.confirmAddressValue == "22") {
        this.sendData.selfCode = option.orgCode;
        this.sendData.selfName = option.orgName;
        this.sendData.addressName = option.orgName;
        this.sendData.address = option.adress;
      } else {
        this.sendData.selfCode = "";
        this.sendData.selfName = "";
        this.sendData.addressName = option.orgName;
        this.sendData.address = option.adress;
      }
    },
    getSelf(code) {
      let _self = this;
      let data = {
        txnBodyCom: {
          regnCode: code,
          /* provCode: "530000",
          cityCode: _self.sendData.city,
          cntyCode: _self.sendData.county, */
          orgCode: "",
          type: "2",
          matter_id: sessionStorage.getItem("matterid")
        }
      };
      _self.$ajaxRequest("post", "/gsp/mng19046", data).then(res => {
        console.log(res);
        _self.selfParam = res;
      });
    },
    next() {
      if (this.sendData.addressName == "") {
        this.$toast("请选择申领地。");
        return;
      }

      this.setSendData(this.sendData);
      this.$router.push({
        name: "reapplyConfirm"
      });
    }
  }
};
</script>
<style lang="less">
.reapply-address {
  .hui-field {
    height: 1rem;
    display: flex;
    padding: 0 0.36rem;
    font-size: 0.28rem;
  }

  .example-cell_avatarWrapper {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    overflow: hidden;
    float: left;
  }
  .example-radios2_list {
    text-align: left;

    .hui-cell_title {
      font-size: 0.28rem;
      margin-bottom: 0.12rem;
    }
  }
  .haveAddress {
    .hui-cell_text {
      font-size: 0.24rem;
      position: relative;
      padding-left: 0.28rem;

      &::before {
        content: "";
        display: inline-block;
        width: 0.22rem;
        height: 0.28rem;
        background-image: url("../../../../assets/images/Address@2x.png");
        @media (-webkit-min-device-pixel-ratio: 3),
          (min-device-pixel-ratio: 3) {
          background-image: url("../../../../assets/images/Address@3x.png");
        }
        background-size: 0.22rem auto;
        background-repeat: no-repeat;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
  .example-cell_avatarWrapper img {
    width: 100%;
    height: 100%;
  }
  .example-cell_rightBox {
    width: 60px;
  }
  .hui-radios_label {
    display: none;
  }
  .hui-radios {
    padding: 0 0.3rem;

    .hui-radios_itemWrapper {
      padding-top: 0;
    }
  }
  .example-radios2_list .hui-cell:after {
    border-bottom: 0px;
  }
  .hui-radios_item {
    border-bottom: 1px solid #e1e2e6;
    height: 1.44rem;
    margin-bottom: 0.02rem;
    &:last-child {
      border-bottom: none;
    }
  }
}
</style>
<style lang='less' scoped>
.reapply-address {
  .main {
    margin-bottom: 1rem;
  }
  .ht_box {
    margin-bottom: 0;
  }
  .headline {
    height: 0.76rem;
    display: flex;
    align-items: center;
    padding: 0 0.32rem;
    color: #999999;
  }
}
</style>
