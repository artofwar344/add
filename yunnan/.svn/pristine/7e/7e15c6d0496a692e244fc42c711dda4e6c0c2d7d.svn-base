<style lang="less" scoped>
</style>

<template>
    <div class="infoCheck">
<myheader :my-header="headerData"></myheader>
    </div>
</template>

<script>
import Header from "@/components/header/header";
import { cenurl } from "@/components/toptow.js";
export default {
  components: {
    myheader: Header
  },
  data() {
    return {
      headerData: {
        title: "公积金信息查询",
        backUrl: "/gongjijin"
      }
    };
  },
  created() {
    let setdata = {
      txnCommCom: {
        tRecInPage: "",
        tPageJump: "",
        tStsTraceId: "110567890"
      },
      txnBodyCom: {
        org_id: "1",
        chann_id: "1",
        matter_id: window.sessionStorage.getItem("matterid"),
        work_id: "1",
        member_id:window.sessionStorage.getItem("userid"),
        OrganizationCode: "1"
      }
    };
    this.$ajaxRequest("post", "/gsp/mng19005", setdata)
      .then(res => {
        if (res.status == 200) {
          console.log(res);
        } else {
          console.log(res);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
