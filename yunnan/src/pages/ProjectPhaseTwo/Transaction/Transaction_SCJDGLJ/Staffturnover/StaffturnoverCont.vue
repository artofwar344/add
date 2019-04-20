<template>
  <div class="ContBox">
    <Field
      desc-class="richText"
      type="text"
      readonly
      label="企业名称"
      :value="enterprisename"
      placeholder
    ></Field>
    <Field
      desc-class="richText"
      type="text"
      readonly
      label="统一社会信用代码/注册码"
      :value="unicode"
      placeholder
    ></Field>
    <div v-if="table == 0">
      <Field
        desc-class="richText"
        type="text"
        readonly
        label="信息公示联络员姓名"
        :value="publishNameadd"
        placeholder
      ></Field>
      <Field desc-class="richText" type="text" readonly label="手机号码" :value="cell" placeholder></Field>
    </div>
    <div v-else>
      <Field
        desc-class="richText"
        type="text"
        label="信息公示联络员姓名"
        :value="publishName"
        v-model="publishName"
        :placeholder="publishNameadd"
        
      ></Field>
      <Field
        desc-class="richText"
        type="text"
        label="手机号码"
        :value="iphone"
        v-model="iphone"
        :placeholder="cell"
      ></Field>
      <Field
        desc-class="richText"
        type="text"
        label="确认手机号码"
        :value="iphoneadd"
        v-model="iphoneadd"
        :placeholder="cell"
      ></Field>
      <Field
        desc-class="richText"
        type="text"
        label="身份证号"
        :value="idcard"
        v-model="idcard"
        :placeholder="idcardadd"
      ></Field>
    </div>
    <Field
      desc-class="richText"
      type="text"
      readonly
      label="法人（负责人）姓名"
      :value="legalpublishName"
      placeholder
    ></Field>
    <Field desc-class="richText" type="text" readonly label="授权事项" :value="accredit" placeholder></Field>
    <Field desc-class="richText" type="text" readonly label="备案状态" :value="status" placeholder></Field>
  </div>
</template>

<style>
.hui-field_title {
  width: auto;
}
.hui-field_value {
  text-align: right;
}
</style>

<style lang="less" scoped>
.ContBox {
  margin-bottom: 0.35rem;
  .example-field .hui-field_desc {
    font-size: 12px;
  }
  .field-prepend_text,
  .field-append_text {
    padding: 8px;
    color: #ccc;
  }
  .field-select_noBorder .hui-extendSelect_itemBox {
    border: none;
  }
  .field-select_noBorder .hui-extendSelect_listBox {
    margin-top: 14px;
  }
  .field-append_text .hui-icon {
    line-height: normal;
    vertical-align: middle;
  }
  .example-field_btn-wrapper {
    margin-top: 20px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      idcard: '',
      idcardadd: window.sessionStorage.getItem('cardid'),
      iphone: "",
      iphoneadd: "",
      enterprisename: "",
      unicode: "",
      publishName: "",
      publishNameadd: "",
      cell: "",
      legalpublishName: "",
      accredit: "",
      status: ""
    };
  },
  props: ["table"],
  created() {
    let data = {
      txnBodyCom: {
        loginId:window.sessionStorage.getItem('loginid'),
        matter_id: window.sessionStorage.getItem('matterid')
        // loginId:"bGXfj5InPwGX6t4ayaYnsxmqWEfV25LJ3PVJS6PO4u0/qXBAdreOP/rU5u5nwmPO",
        // matter_id: "1"
      }
    };
    let pages = {
      tRecInPage: "0",
      tPageJump: "0",
      txnIttChnlId: "1"
    };
    this.$ajaxRequest("post", "/gsp/mng30073", data, pages)
      .then(res => {
        this.enterprisename = res.result[0].entName,
        this.unicode = res.result[0].uniScid,
        this.publishNameadd = res.result[0].liaisonPersnName,
        this.cell = res.result[0].liaisonTelephone,
        this.legalpublishName = res.result[0].lerepName,
        this.accredit = res.result[0].grantItem,
        this.status = res.result[0].status;
        const data = res.result[0];
        this.$emit("showName", data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

