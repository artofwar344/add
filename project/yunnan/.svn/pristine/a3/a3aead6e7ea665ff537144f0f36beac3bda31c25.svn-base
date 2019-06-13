
<template>
    <div class="infoContainer">
        <myheader :my-header="headerData"></myheader>
        <div class="content">
        
      </div>
    </div>
</template>
<script>
import Header from "@/components/header/header";
import MsgList from "../LoanInfoQuery/components/MsgList";
import Common from "../LoanInfoQuery/components/Common.js";
export default {
  components: {
    myheader: Header,
    MsgList
  },
  data() {
    return {
      headerData: {
        title: this.$route.query.header,
        backUrl: this.$route.query.src
      },
      msglist:{},

    }
  },
 created(){
    const _this = this;
    this.init()
  },
  mounted(){},
  methods:{

  },
  computed:{
    total(){
      return this.$route.query
    }
  },
  watch:{}
}
</script>
