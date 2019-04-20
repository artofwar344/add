<template>
  <div>
    <Field
      readonly
      :error="errorSelectInfo"
      :propserror="errorSelect01"
      label="建设性质"
      disableclear
      type="text"
      placeholder="请选择建设性质"
      required
      :value="confirmValSelect01"
      v-on:errorchange="errorChangeFun"
      @click.native="open('pickerselect01')"
    >
      <span slot="append" class="example-select_arrowRight" @click.stop="open('更多')">更多</span>
    </Field>

    <Huiselect
      ref="pickerselect01"
      position="bottom"
      :dataslots="selectData01"
      class="example-select_item"
      @confirms="selectConfirmFun01"
    ></Huiselect>

    <Field
      readonly
      :error="errorSelectInfo"
      :propserror="errorSelect01"
      label="建设区域"
      disableclear
      type="text"
      placeholder="请选择建设区域"
      required
      :value="confirmValSelect01"
      v-on:errorchange="errorChangeFun"
      @click.native="open('pickerselect01')"
    >
      <span slot="append" class="example-select_arrowRight" @click.stop="open('更多')">更多</span>
    </Field>
    <Huiselect
      ref="pickerselect01"
      position="bottom"
      :dataslots="selectData01"
      class="example-select_item"
      @confirms="selectConfirmFun01"
    ></Huiselect>
  </div>
</template>
<script>
export default {
  data() {
    return {
      errorSelect01: false,
      errorSelectInfo: "",
      selectData01: [
        {
          flex: 1,
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
          showText:'text',
          defaultIndex: 3
        }
      ],
      confirmValSelect01: [] //['1987']
    };
  },
  methods: {
    open(picker, val) {
      console.log(picker);
      if (picker === "更多") {
        alert("2");
        return false;
      } else {
        alert("21");
        this.$refs[picker].open();
        document.activeElement.blur();
      }
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

<style soped lang="less">
.example-select_arrowRight {
  padding-left: 0.1rem;
}
</style>
