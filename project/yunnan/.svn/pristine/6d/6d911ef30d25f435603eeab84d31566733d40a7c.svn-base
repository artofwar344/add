<template>
  <div>
    <towtop :name="titlename"/>
    <div class="example-formgroup">
      <FormGroup v-on:accept-submit="submitEvent" title-position="left">
        <Field
          desc-class="richText"
          type="text"
          label="身份证号"
          :value="textValue"
          placeholder="请输入身份证号"
          v-model="textValue"
        ></Field>
      </FormGroup>
    </div>
    <!-- <Btn block @click="submitEvent">查询</Btn> -->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="submitEvent"/>
    </div>
  </div>
</template>
<script>
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
      titlename: "特种设备安全管理人员证查询",
      textValue: "",
      list: []
    };
  },
  components: {
    mybutton,
    towtop
  },
  methods: {
    submitEvent() {
      // this.$router.push('/managementsecond?matter_id=sy-yn-cx-001&textValue='+this.textValue)

      let setdata = {
        txnCommCom: {
          tRecInPage: "10",
          tPageJump: "2",
          tStsTraceId: "110567890"
        },
        txnBodyCom: {
          sfzh: "123",
          chann_id: "1",
          matter_id: window.sessionStorage.getItem("matterid")
        }
      };
      this.$ajaxRequest("post", "/gsp/mng60016", setdata)
        .then(res => {
          console.log(res);
          this.list = res.certs;
          this.$router.push({
            name: "managementsecond",
            params: { list: this.list }
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style  scoped>
.hui-btn.is-block {
  width: 5.9rem;
  height: 0.9rem;
  margin: 1rem auto;
  background-color: #2d7ffc;
  font-size: 0.32rem;
  color: #fff;
}
</style>