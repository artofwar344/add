<template>
  <div class="home">
    <towtop style="margin: 0;" :name="titlename"/>
    <div class="TitleTo">
      <h1>业务信息</h1>
    </div>
    <div class="Top">
      <div class="example-formgroup">
        <FormGroup v-on:accept-submit="submitEvent" title-position="left">
          <Field
            :propserror="errorText"
            :error="errorTextInfo"
            desc-class="richText"
            type="text"
            label="事项名称"
            :value="textValue"
            placeholder="自动返显"
            v-on:errorchange="handleErrorChangesText"
          ></Field>
          <Field
            :propserror="errorText"
            desc-class="richText"
            type="text"
            label="办理编号"
            :value="number"
            placeholder="SY201810234321"
            v-on:errorchange="handleErrorChangesText"
          ></Field>
          <Field
            :propserror="errorText"
            desc-class="richText"
            type="text"
            label="受理窗口"
            :value="carMsg"
            placeholder="南12号"
            v-on:errorchange="handleErrorChangesText"
          ></Field>
          <Field
            :propserror="errorText"
            desc-class="richText"
            type="text"
            label="受理地址"
            :value="comeReason"
            placeholder="北京市西城区马连道南路2-11"
            v-on:errorchange="handleErrorChangesText"
          ></Field>
          <Field
            :propserror="errorText"
            desc-class="richText"
            type="text"
            label="申请人"
            :value="comeReason"
            placeholder="马奇骏"
            v-on:errorchange="handleErrorChangesText"
          ></Field>
          <Field
            :propserror="errorText"
            desc-class="richText"
            type="text"
            label="申请人电话"
            :value="comeReason"
            placeholder="010-87110328"
            v-on:errorchange="handleErrorChangesText"
          ></Field>
          <Field
            :propserror="errorText"
            desc-class="richText"
            type="text"
            label="咨询电话"
            :value="comeReason"
            placeholder="010-87110328"
            v-on:errorchange="handleErrorChangesText"
          >自动返显</Field>
        </FormGroup>
      </div>
    </div>
    <div class="TitleTo">
      <h1>材料清单</h1>
    </div>

    <div class="photo">
      <div class="navTitle">
        <div></div>
        <h1>结婚证</h1>
        <h2>电子版</h2>
      </div>
      <div class="file">
        <p>原件：
          <a>0</a>份
        </p>
        <p>复印件：
          <a>2</a>份
        </p>
      </div>
      <div class="radio">
        <p>已准备</p>
        <input type="radio">
      </div>
    </div>

    <div class="photo">
      <div class="navTitle">
        <div></div>
        <h1>男方省份证证</h1>
        <h2 style="margin-left: 2.4rem;">纸质版</h2>
      </div>
      <div class="file">
        <p>原件：
          <a>0</a>份
        </p>
        <p>复印件：
          <a>2</a>份
        </p>
      </div>
      <div class="radio">
        <p>已准备</p>
        <input type="radio">
      </div>
    </div>

    <div class="photo">
      <div class="navTitle">
        <div></div>
        <h1>男方省份证证</h1>
        <h2 style="margin-left: 2.4rem;">纸质版</h2>
      </div>
      <div class="file">
        <p>原件：
          <a>0</a>份
        </p>
        <p>复印件：
          <a>2</a>份
        </p>
      </div>
      <div class="radio">
        <p>已准备</p>
        <input type="radio">
      </div>
    </div>
    <div class="TitleTo">
      <h1>结果材料收取</h1>
    </div>
    <div class="charge">
      <Field
        :propserror="errorText"
        :error="errorTextInfo"
        desc-class="richText"
        type="text"
        label="收取方式"
        :value="textValue"
        placeholder="现场取件"
        v-on:errorchange="handleErrorChangesText"
      ></Field>
      <Field
        :propserror="errorText"
        desc-class="richText"
        type="text"
        label="收取地址"
        :value="number"
        placeholder="选择地址"
        v-on:errorchange="handleErrorChangesText"
      ></Field>
    </div>
    <div class="TitleTo">
      <h1>邮寄方式</h1>
    </div>
    <div class="charge">
      <Field
        :propserror="errorText"
        :error="errorTextInfo"
        desc-class="richText"
        type="text"
        label="使用平台快递"
        :value="textValue"
        placeholder="是"
        v-on:errorchange="handleErrorChangesText"
      ></Field>
    </div>

    <div class="TitleTo">
      <h1>快递信息填写</h1>
    </div>
    <div class="charge">
      <Field
        :propserror="errorText"
        :error="errorTextInfo"
        desc-class="richText"
        type="text"
        label="事项名称"
        :value="textValue"
        placeholder="自动返回"
        v-on:errorchange="handleErrorChangesText"
      ></Field>
      <Field
        :propserror="errorText"
        :error="errorTextInfo"
        desc-class="richText"
        type="text"
        label="快递公司"
        :value="textValue"
        placeholder="请选择"
        v-on:errorchange="handleErrorChangesText"
      ></Field>
      <Field
        :propserror="errorText"
        :error="errorTextInfo"
        desc-class="richText"
        type="text"
        label="快递单号"
        :value="textValue"
        placeholder
        v-on:errorchange="handleErrorChangesText"
      ></Field>
    </div>

    <!-- <div class="chargeBtn">
			<button><router-link to="/Myaddress">确认</router-link></button>
    </div>-->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="goto"/>
    </div>
  </div>
</template>
<script>
import towtop from "../../../components/HederTwo";
import mybutton from "@/components/MyButton";

export default {
  data() {
    return {
      btnData: [
        {
          text: "确认",
          disabled: false,
          isSure: true
        }
      ],
      titlename: "材料递送",
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
    mybutton,
    towtop
  },
  methods: {
    goto() {
      this.$router.push("/Myaddress");
    },
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

.example {
  margin-top: 1rem;
}

.example button {
  width: 5.9rem;
  height: 0.9rem;
  background: #2d7ffc;
  box-shadow: 0 5px 15px 0 rgba(45, 127, 252, 0.5);
  border-radius: 25px;
  border: none;
  font-family: PingFangSC-Semibold;
  font-size: 0.31rem;
  color: white;
  letter-spacing: 0.19px;
  text-align: center;
}

.example button a {
  color: #ffffff;
}
.navTitle {
  width: 100%;
  height: 0.47rem;
  /*background: #FFFFFF;*/
  position: relative;
}
.navTitle div {
  width: 0.09rem;
  height: 0.24rem;
  background: #2d7ffc;
  display: flex;
  position: absolute;
  left: 0.18rem;
  top: 0.1rem;
}
.navTitle h1 {
  text-align: left;
  margin-left: 0.4rem;
  font-size: 0.3rem;
}
.navTitle h2 {
  text-align: left;
  width: 0.88rem;
  height: 0.32rem;
  background: #fa6366;
  border-radius: 100px;
  font-family: PingFangSC-Semibold;
  font-size: 10px;
  color: #ffffff;
  letter-spacing: 0.17px;
  text-align: center;
  line-height: 0.32rem;
  margin-left: 1.8rem;
  margin-top: -0.34rem;
}

.photo {
  width: 100%;
  height: 2.24rem;
  /*background: palegoldenrod;*/
  position: relative;
  border-bottom: 1px solid #f1f3f6;
}
.file p {
  text-align: left;
  margin-left: 0.58rem;
  margin-top: 0.2rem;
  ont-family: PingFangSC-Regular;
  font-size: 14px;
  color: #666666;
  letter-spacing: 0.17px;
  /*line-height: 26px;*/
}
.file p a {
  font-family: PingFangSC-Medium;
  font-size: 0.25rem;
  color: #2d7ffc;
  letter-spacing: 0.19px;
  line-height: 26px;
  margin-right: 0.1rem;
}
.radio {
  display: flex;
  text-align: left;
  position: absolute;
  top: 0.88rem;
  right: 0.56rem;
}
.radio p {
  font-family: PingFangSC-Regular;
  font-size: 0.21rem;
  color: #333333;
  letter-spacing: 0.14px;
  margin-right: 0.14rem;
}
.radio input {
  width: 0.32rem;
  height: 0.32rem;
}
.chargeBtn button {
  width: 5.9rem;
  height: 0.9rem;
  background: #2d7ffc;
  box-shadow: 0 5px 15px 0 rgba(45, 127, 252, 0.5);
  border-radius: 25px;
  border: none;
  font-family: PingFangSC-Semibold;
  font-size: 16px;
  letter-spacing: 0.19px;
  text-align: center;
  margin-top: 1.02rem;
}
.chargeBtn button a {
  color: #ffffff;
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