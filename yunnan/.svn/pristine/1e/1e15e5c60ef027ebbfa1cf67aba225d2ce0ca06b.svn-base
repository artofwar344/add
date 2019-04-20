<template>
  <div>
    <towtop :name="hadertow"/>
    <div class="example-formgroup">
      <FormGroup title-position="left">
        <Field
          desc-class="richText"
          v-model="textValue"
          type="text"
          label="查询姓名"
          :value="textValue"
          placeholder="请输入要查询的姓名"
        ></Field>
      </FormGroup>
    </div>
    <!-- <button class="commonBtn" @click="query()">查询</button> -->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="query"/>
    </div>
  </div>
</template>
<script>
import towtop from "../../../../components/HederTwo";
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
      hadertow: "重名查询",
      textValue: ""
    };
  },
  components: {
    mybutton,
    towtop
  },
  methods: {
    query() {
      if (this.textValue == "" || this.textValue == null) {
        this.$toast("请输入要查询的姓名");
        return;
      }
      this.$router.push("/Jsearch?textValue=" + this.textValue);
    }
  }
};
</script>
<style scoped>
.hui-field_title {
  font-size: 0.14rem;
  width: 100px;
}

.hui-field_core {
  font-size: 0.14rem;
}
.hui-field {
  margin-top: 0.2rem;
  line-height: 1rem;
}
.statisticalBtn button {
  color: #fff;
}
</style>