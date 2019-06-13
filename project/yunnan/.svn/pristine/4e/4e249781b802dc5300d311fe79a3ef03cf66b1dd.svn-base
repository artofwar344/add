<template>
  <div>
    <Field
      readonly
      :error="errorSelectInfo"
      :propserror="errorSelect01"
      label="投资主体"
      disableclear
      type="text"
      placeholder="请选择投资主体"
      required
      :value="confirmValSelect01"
      v-model="confirmValSelect01"
      v-on:errorchange="errorChangeFun"
      @click.native="open('pickerselect01')"
    >
      <!-- <span slot="append" class="example-select_arrowRight" @click.stop="open('更多')">更多</span> -->
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
      label="国标行业"
      disableclear
      type="text"
      placeholder="请选择国标行业"
      required
      :value="confirmValSelect02"
      v-on:errorchange="errorChangeFun"
      @click.native="open('pickerselect02')"
    >
     
      <span slot="append" class="example-select_arrowRight" @click.stop="open('更多')">更多</span>
    </Field>
    <Huiselect
      ref="pickerselect02"
      position="bottom"
      :dataslots="selectData02"
      class="example-select_item"
      @confirms="selectConfirmFun02"
    ></Huiselect>

    <Field
      readonly
      :error="errorSelectInfo"
      :propserror="errorSelect01"
      label="所属行业"
      disableclear
      type="text"
      placeholder="请选择所属行业"
      required
      :value="confirmValSelect03"
      v-on:errorchange="errorChangeFun"
      @click.native="open('pickerselect03')"
    >
      <span slot="append" class="example-select_arrowRight" @click.stop="open('更多')">更多</span>
    </Field>
    <Huiselect
      ref="pickerselect03"
      position="bottom"
      :dataslots="selectData03"
      class="example-select_item"
      @confirms="selectConfirmFun03"
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
            { text: "企业投资", value: "a" },
           
          ],
          className: "slot1",
          showText:'text',
          defaultIndex: 3
        }
      ],
      confirmValSelect01: ['企业投资'], //['1987']

      selectData02: [
        {
          flex: 1,
          values: [
            { text: "2", value: "a" },
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
      confirmValSelect02: ['企业投资'], //['1987']

      selectData03: [
        {
          flex: 1,
          values: [
            { text: "3", value: "a" },
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
      confirmValSelect03: ['企业投资'] //['1987']
    };
  },
  methods: {
    open(picker) {
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
    selectConfirmFun02(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect02 = selectedVal[0].text;
      } else {
        this.confirmValSelect02 = selectedVal;
      }
    },
    selectConfirmFun03(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect03 = selectedVal[0].text;
      } else {
        this.confirmValSelect03 = selectedVal;
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

<style>
</style>
