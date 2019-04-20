<template>
  <div class="hello">
    <Field
      readonly
      :error="errorSelectInfo"
      :propserror="errorSelect01"
      label="一级下拉"
      desc="说明文字说明文字说明文字说明文字说明文字"
      disableclear
      type="text"
      placeholder="请选择"
      required
      :value="confirmValSelect01"
      v-on:errorchange="errorChangeFun"
      @click.native="open('pickerselect01')"
    >
      <span slot="append" class="example-select_arrowRight"></span>
    </Field>
    <Huiselect
      ref="pickerselect01"
      position="bottom"
      :dataslots="selectData01"
      class="example-select_item"
      @confirms="selectConfirmFun01"
    ></Huiselect>

    <!-- <div class="example-select_btn-wrapper">
  <Btn plain block @click.stop="submitBtn">提交</Btn>
    </div>-->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click.stop.once="submitBtn"/>
    </div>
  </div>
</template>

<script>
import mybutton from "@/components/MyButton";
export default {
  data() {
    return {
      btnData: [
        {
          text: "提交",
          disabled: false,
          isSure: true
        }
      ],
      errorSelect01: false,
      errorSelectInfo: "",
      selectData01: [
        {
          flex: 1,
          //         values: ['1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995'],
          values: [
            { text: "1984", value: "a" },
            { text: "1985", value: "b" },
            { text: "1986", value: "c" },
            { text: "1987", value: "d" },
            { text: "1988", value: "f" },
            { text: "1989", value: "g" },
            { text: "1990", value: "h" }
          ],
          className: "slot1",
          //         showText:'text',
          defaultIndex: 3
        }
      ],
      confirmValSelect01: [] //['1987']
    };
  },
  component: {
    mybutton
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
    errorChangeFun(val) {
      this.errorSelect01 = val;
    },
    selectConfirmFun01(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect01 = selectedVal[0].text;
      } else {
        this.confirmValSelect01 = selectedVal;
      }
    },
    submitBtn() {
      if (!this.confirmValSelect01[0]) {
        //必填校验，如果不是必填项不用写
        this.errorSelect01 = true;
        this.errorSelectInfo = "请选择用户名!";
      } else {
        this.errorSelect01 = false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="text/less" lang="less">
.example-select_btn-wrapper {
  margin-top: 15px;
}
.example-select_arrowRight {
  display: block;
  width: 30px;
  height: 30px;
  //   background: url(../../../src/common/images/common-arrowRight.png) 5px center no-repeat;
  background-size: 16px 16px;
}
</style>