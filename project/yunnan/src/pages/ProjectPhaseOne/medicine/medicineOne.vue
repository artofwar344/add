<template>
  <div class="medicineOne">
    <towtop :name="titlename"/>
    <div class="example-formgroup">
      <FormGroup v-on:accept-submit="submitEvent" title-position="left">
        <Field
          desc-class="richText"
          type="text"
          label="生产者名称"
          :value="textValue"
          placeholder="请输入生产者名称"
          v-model="textValue"
        ></Field>
        <Field
          esc-class="richText"
          type="text"
          label="发证机关"
          placeholder="请输入发证机关"
          :value="confirmValSelect01"
          @click.native="open('pickerselect01')"
        ></Field>
        <Huiselect
          ref="pickerselect01"
          position="bottom"
          :dataslots="selectData01"
          class="example-select_item"
          @confirms="selectConfirmFun01"
        ></Huiselect>

        <Field
          desc-class="richText"
          type="text"
          label="许可证编号"
          :value="comeReason"
          placeholder="请输入许可证编号"
          v-model="comeReason"
        ></Field>
      </FormGroup>
    </div>

    <!-- <div class="statisticalBtn">
			<button @click="submitEvent()">查询</button>
    </div>-->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="submitEvent"/>
    </div>
  </div>
</template>

<script>
var authority = [
  "云南省市场监督管理局",
  "云南省食品药品监督管理局",
  "昆明市食品药品监督管理局",
  "曲靖市食品药品监督管理局",
  "玉溪市食品药品监督管理局",
  "保山市食品药品监督管理局",
  "昭通市食品药品监督管理局",
  "丽江市食品药品监督管理局",
  "普洱市食品药品监督管理局",
  "临沧市食品药品监督管理局",
  "楚雄彝族自治州食品药品监督管理局",
  "红河哈尼族彝族自治州食品药品监督管理局",
  "文山壮族苗族自治州食品药品监督管理局",
  "西双版纳傣族自治州食品药品监督管理局",
  "大理白族自治州食品药品监督管理局",
  "德宏傣族景颇族自治州食品药品监督管理局",
  "怒江傈僳族自治州食品药品监督管理局",
  "迪庆藏族自治州食品药品监督管理局"
];
import towtop from "../../../components/HederTwo";
import mybutton from "../../../components/MyButton";
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
      titlename: "食品生产许可获证企业查询",
      comeReason: "",
      carMsg: "",
      textValue: "",
      selectData01: [
        {
          flex: 1,
          values: authority,
          className: "slot1"
        }
      ],
      confirmValSelect01: [] //['1987']
    };
  },
  components: {
    mybutton,
    towtop
  },
  methods: {
    open(picker) {
      this.$refs[picker].open();
      document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    selectConfirmFun01(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect01 = selectedVal[0].text;
      } else {
        this.confirmValSelect01 = selectedVal;
      }
    },
    submitEvent() {
      /*if(this.comeReason == "" && this.confirmValSelect01 == "" && this.textValue == ""){
        this.$toast("至少输入一个条件进行查询");
        return;
      }*/
      this.$router.push(
        "/medicineTwo?comeReason=" +
          this.comeReason +
          "&carMsg=" +
          this.confirmValSelect01 +
          "&textValue=" +
          this.textValue
      );
    }
  }
};
</script>
<style scoped>
.statisticalBtn button {
  color: #fff;
}
</style>
