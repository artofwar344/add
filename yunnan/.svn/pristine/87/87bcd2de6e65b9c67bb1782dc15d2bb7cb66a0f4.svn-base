<template>
  <div>
    <headtwo :name="headerData"></headtwo>
    <div class="formone">
      <Field type="text" label="联系人姓名" :value="textValue" placeholder="请输入联系人姓名"></Field>
      <Field type="text" label="联系人电话" :value="textValue" placeholder="请输入联系人电话"></Field>
      <Field
        readonly
        :error="errorSelectInfo"
        :propserror="errorSelect01"
        label="证件类型"
        disableclear
        type="text"
        placeholder="请选择证件类型"
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
      <Field type="text" label="身份号码" :value="textValue" placeholder="请输入身份号码"></Field>
    </div>
    <div class="padTopAdd5 padBotAdd5">
      <mybutton :btnData="btnData" @click="tocontacts"/>
    </div>
  </div>
</template>
<script>
import mybutton from "@/components/MyButton";
import headtwo from "@/components/HederTwo";
export default {
  data() {
    return {
      headerData: "企业信息",
      btnData: [
        {
          text: "下一步",
          disabled: false,
          isSure: true
        }
      ],
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
          defaultIndex: 3
        }
      ],
      confirmValSelect01: []
    };
  },
  components: {
    headtwo,
    mybutton
  },
  methods: {
    open(picker) {
      this.$refs[picker].open();
      document.activeElement.blur();
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
    tocontacts() {
      this.$router.push("Contacts");
    }
  }
};
</script>
<style lang="less" scoped>
.formone {
  span {
    text-align: left;
    height: 1rem;
    line-height: 1rem;
    font-size: 14px;
    display: block;
    padding-left: 0.3rem;
  }
  textarea {
    text-align: left;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }
}
.example-formgroup_btn-wrapper {
  margin-top: 20px;
}
.field-append_text,
.field-prepend_text {
  padding: 8px;
  color: #ccc;
}
.field-append_text .hui-icon {
  line-height: normal;
  vertical-align: middle;
}
.example-formgroup .hui-form_title-top .example-formgroup_btn-wrapper {
  padding: 0 15px;
}
.example-select_btn-wrapper {
  margin-top: 15px;
}
.example-select_arrowRight {
  display: block;
  width: 30px;
  height: 30px;
  background-size: 16px 16px;
}
</style>
