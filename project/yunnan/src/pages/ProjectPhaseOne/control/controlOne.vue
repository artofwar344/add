<template>
  <div class="medicineOne">
    <div class="example-formgroup">
      <FormGroup v-on:accept-submit="submitEvent" title-position="left">
        <Field
          :propserror="errorText"
          desc-class="richText"
          type="text"
          label="身份证号"
          :value="number"
          placeholder="请输入身份证号"
          v-on:errorchange="handleErrorChangesText"
        ></Field>
      </FormGroup>
    </div>

    <!-- <div class="statisticalBtn">
      <button>
        <router-link to>查询</router-link>
      </button>
    </div> -->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData"/>
    </div>
  </div>
</template>


<script>
import mybutton from "../../../../components/MyButton";

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
      comeReason: "",
      carMsg: "",
      number: "",
      textValue: "",
      errorText: false,
      errorTextInfo: "",
      carMsg: "",
      loading: false,
      valueDatetime: "", //2017-02-23 12:10
      confirmValDatetime: "",
      errorDatetime: false,
      errorSelectInfo: "",
      selectInfo: "",
      options: ["中国", "日本", "澳大利亚", "新加坡"]
    };
  },

  components: {
    mybutton
  },
  methods: {
    selectedItem(index, item) {
      //获取被选择的选项
      console.log(index, item);
    },
    handleErrorChangesText(val) {
      //用户名错误状态接收
      this.errorText = val;
    },
    handleTextVal(val) {
      this.textValue = val;
    },
    submitEvent() {
      /*用户名必填校验(如果是非必填不用写)start*/
      if (this.textValue === "") {
        this.errorText = true;
        //改变错误提示文字
        this.errorTextInfo = "请输入用户名";
      }
      this.flagCanSubmit = this.errorText === true;
      if (this.flagCanSubmit) {
        console.log("提交失败");
        return false;
      } else {
        console.log("提交成功");
        return true;
      }
    },
    open(picker) {
      document.activeElement.blur();
      this.$refs[picker].open();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    handleChangeConfirmDatetime(value) {
      //日期时间确定值
      this.confirmValDatetime = dateFormat(value, "yyyy-MM-dd HH:mm");
    },
    handleErrorChangesDatetime(val) {
      this.errorDatetime = val;
    }
  }
};
</script>
<style  scoped>
.hui-field_title {
  width: 100px;
}
</style>