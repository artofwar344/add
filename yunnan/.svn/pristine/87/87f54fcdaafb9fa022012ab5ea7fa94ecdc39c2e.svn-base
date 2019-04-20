<template>
  <div class="swsbg_three">
    <towtop :name="titlename"/>
    <div class="littlestarbig">
      <span class="littlestar">*</span>
    <Field
      type="text"
      label="事务所全称"
      :value="textValue_qc"
      placeholder="请输入事务所全称"
      v-on:currentval="handleTextVal1"
    ></Field>
    </div>
    <div class="littlestarbig">
      <span class="littlestar">*</span>
    <Field
      type="text"
      label="事务所简称"
      :value="textValue_jc"
      placeholder="请输入事务所简称"
      v-on:currentval="handleTextVal2"
    ></Field>
    </div>
    <div class="littlestarbig">
      <span class="littlestar">*</span>
    <Field
      type="text"
      label="简称拼音"
      :value="textValue_jcpy"
      placeholder="请输入简称拼音"
      v-on:currentval="handleTextVal3"
    ></Field>
    </div>
    <Field
      type="text"
      label="英文名称(非必填)"
      :value="textValue_ywmc"
      placeholder="请输入英文名称"
      v-on:currentval="handleTextVal4"
    ></Field>
    <!-- <Btn plain block @click="preservation_btn">保存</Btn> -->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="preservation_btn"/>
    </div>
  </div>
</template>
<script>
import towtop from "../../../../components/HederTwo";
import { spellFun } from "@/components/spell";
import mybutton from "@/components/MyButton";

export default {
  data() {
    return {
      btnData: [
        {
          text: "保存",
          disabled: false,
          isSure: true
        }
      ],
      titlename: "律师事务所（分所）名称变更预申请",
      textValue_qc: "",
      textValue_jc: "",
      textValue_jcpy: "",
      textValue_ywmc: "",
      arr: []
    };
  },
  components: {
    mybutton,
    towtop
  },
  created() {
      this.textValue_qc =  "",
      this.textValue_jc  = "",
      this.textValue_jcpy= "",
      this.textValue_ywmc ="",
    this.arr = this.$route.params.arr;
  },
  methods: {
    preservation_btn() {
      this.take_word();
    },
    handleTextVal1(val) {
      this.textValue_qc = val;
      this.textValue_jcpy = val ? spellFun.ConvertPinyin(val) : "系统自动生成";
    },
    handleTextVal2(val) {
      this.textValue_jc = val;
    },
    handleTextVal3(val) {
      this.textValue_jcpy = val;
    },
    handleTextVal4(val) {
      this.textValue_ywmc = val;
    },
    take_word() {
      let _self = this;
      if (!_self.textValue_qc.match(/^[\u4e00-\u9fa5]+$/g)) {
        this.$toast("请输入正确的事务所全称！");
        return false;
      }
      if (!_self.textValue_jc.match(/^[\u4e00-\u9fa5]+$/g)) {
        this.$toast("请输入正确的事务所简称！");
        return false;
      }
      /* if (!(_self.textValue_ywmc.match(/^[a-zA-Z]+$/g))) {
                  this.$toast('请输入正确的事务所英文名称！')
                  return false
                } */
      this.arr.push({
        offc_fullnm: this.textValue_qc,
        offc_shrtnm: this.textValue_jc,
        shrtnm_cpa: this.textValue_jcpy,
        eng_nm: this.textValue_ywmc
      });
      this.$router.push({ name: "swsbg_two", params: { arr: this.arr } });
    }
  }
};
</script>
<style scoped="swsbg_three.vue">
.swsbg_three .hui-btn.is-block {
  font-weight: 700;
  display: inline-block;
  width: 5.9rem;
  height: 0.9rem;
  margin: 1rem 0.35rem;
  background-color: #2d7ffc;
  font-size: 0.32rem;
  color: #fff;
}
.swsbg_three.hui-field {
  height: 0.9rem;
  line-height: 0.8rem;
}
.swsbg_three .hui-field_star {
  display: block;
}
.swsbg_three .littlestarbig{
  position: relative;
}
.swsbg_three .littlestar{
  display: inline-block;
  color: red;
  font-size:0.4rem;
  position: absolute;
  left:0.1rem;
  top: 0.43rem;
}
</style>
<style>
.swsbg_three .hui-field_main {
  font-size: 0.28rem;
}
.swsbg_three .hui-field_star {
  display: block;
}
</style>





