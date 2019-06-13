<template>
  <div class="home">
    <div class="Top">
      <div class="example-formgroup">
        <FormGroup v-on:accept-submit="submitEvent" title-position="left">
          <Field
            :propserror="errorText"
            :error="errorTextInfo"
            desc-class="richText"
            type="text"
            label="申请人"
            :value="textValue"
            placeholder="自动获取用户认证信息"
            v-on:errorchange="handleErrorChangesText"
          ></Field>
          <Field
            :propserror="errorText"
            desc-class="richText"
            type="text"
            label="性别"
            :value="number"
            placeholder="系统自动生成"
            v-on:errorchange="handleErrorChangesText"
          ></Field>
          <Field
            :propserror="errorText"
            desc-class="richText"
            type="text"
            label="执业证号"
            :value="carMsg"
            placeholder="系统自动生成"
            v-on:errorchange="handleErrorChangesText"
          ></Field>
          <Field
            :propserror="errorText"
            desc-class="richText"
            type="text"
            label="职业类型"
            :value="comeReason"
            placeholder="系统自动生成"
            v-on:errorchange="handleErrorChangesText"
          ></Field>
          <Field
            :propserror="errorText"
            desc-class="richText"
            type="text"
            label="资格证类型"
            :value="comeReason"
            placeholder="系统自动生成"
            v-on:errorchange="handleErrorChangesText"
          ></Field>
          <Field
            :propserror="errorText"
            desc-class="richText"
            type="text"
            label="资格证号"
            :value="comeReason"
            placeholder="系统自动生成"
            v-on:errorchange="handleErrorChangesText"
          ></Field>
          <Field
            :propserror="errorText"
            desc-class="richText"
            type="text"
            label="原执业机构名称"
            :value="comeReason"
            placeholder="系统自动生成"
            v-on:errorchange="handleErrorChangesText"
          ></Field>
          <Field
            :propserror="errorText"
            desc-class="richText"
            type="text"
            label="原执业机构所在地"
            :value="comeReason"
            placeholder="系统自动生成"
            v-on:errorchange="handleErrorChangesText"
          ></Field>
          <Field
            :propserror="errorText"
            desc-class="richText"
            type="text"
            label="拟转入执业机构名称 "
            :value="comeReason"
            placeholder="系统自动生成"
            v-on:errorchange="handleErrorChangesText"
          ></Field>
          <Field
            :propserror="errorText"
            desc-class="richText"
            type="text"
            label="执业经历"
            :value="comeReason"
            placeholder="系统自动生成"
            v-on:errorchange="handleErrorChangesText"
          ></Field>
          <Field
            :propserror="errorText"
            desc-class="richText"
            type="text"
            label="申请人联系方式"
            :value="comeReason"
            placeholder="系统自动生成"
            v-on:errorchange="handleErrorChangesText"
          ></Field>
        </FormGroup>
      </div>
    </div>

    <div class="Top">
      <div class="example-formgroup">
        <FormGroup v-on:accept-submit="submitEvent" title-position="left">
          <!-- <div class='examplebtn'>
						<button><router-link to="/SubmitTwo">提交</router-link></button>
          </div>-->
          <div class="padTopAdd5">
            <mybutton :btnData="btnData" @click="this.$router.push('/SubmitTwo')"/>
          </div>
        </FormGroup>
      </div>
    </div>
  </div>
</template>
<script>
import mybutton from "@/components/MyButton";
export default {
  components: {
    mybutton
  },

  data() {
    return {
      btnData: [
        {
          text: "提交",
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

<style scoped>
.Top {
  width: 100%;
}

.TitleTo {
  width: 100%;
  height: 0.72rem;
  background: #f1f3f6;
}

.TitleTo h1 {
  font-family: PingFangSC-Regular;
  font-size: 0.26rem;
  color: #999999;
  letter-spacing: 0.17px;
  text-align: justify;
  line-height: 0.72rem;
  margin-left: 0.18rem;
}

.example-formgroup_btn-wrapper {
  margin-top: 20px;
}

.field-append_text,
.field-prepend_text {
  background: #f0f0f0;
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

.hui-field {
  height: 0.98rem;
  line-height: 0.98rem;
}

.hui-field_core {
  text-align: right;
}

.hui-field_title {
  font-family: PingFangSC-Regular;
  font-size: 0.3rem;
  color: #333333;
  letter-spacing: 0.17px;
}

.examplebtn button {
  width: 5.9rem;
  height: 0.9rem;
  background: #2d7ffc;
  box-shadow: 0 5px 15px 0 rgba(45, 127, 252, 0.5);
  border-radius: 25px;
  border: none;
  margin-top: 1rem;
}
.examplebtn button a {
  font-family: PingFangSC-Semibold;
  font-size: 0.3rem;
  color: #ffffff;
  letter-spacing: 0.19px;
}
.hui-field_core {
  text-align: right;
  font-family: PingFangSC-Regular;
  font-size: 0.25rem;
  color: #999999;
  letter-spacing: 0.17px;
  text-align: right;
}

.hui-field_title {
  width: 160px;
}
</style>