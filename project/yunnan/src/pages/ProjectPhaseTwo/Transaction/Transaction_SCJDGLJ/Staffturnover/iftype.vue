<template>
  <div class="iftype">
    <headtwo :name="headerData"></headtwo>
    <Field
      readonly
      :error="errorSelectInfo"
      :propserror="errorSelect01"
      disableclear
      type="text"
      placeholder="请选择授权企业"
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

    <div class="padTopAdd5 padBotAdd5">
      <mybutton :btnData="btnData" @click="goto"/>
    </div>
  </div>
</template>

<script>
import headtwo from "@/components/HederTwo";
import mybutton from "@/components/MyButton";
export default {
  data() {
    return {
      headerData: "企业联络员变更",
      regNo: "",
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
          values: [],
          className: "slot1",
          showText: "enterpriseName",
          defaultIndex: 3
        }
      ],
      confirmValSelect01: [] //['1987']
    };
  },
  created() {
    // window.sessionStorage.setItem("matterid","dd3aa63c32274732b2faf2ad832908d7");
    this.onin();
  },
  mounted() {
    
  },
  methods: {
    onin() {
      let pages = {
          tRecInPage: "10000",
          tPageJump: "1",
          tStsTraceId: "110567890",
          txnIttChnlId: "9999000100000000000000000",
          txnIttChnlCgyCode: "99999999"
      };
      let datas = {
        txnBodyCom: {
          userType: "0",
          queryType: "3",
          matter_id: window.sessionStorage.getItem("matterid"),
          userId: window.sessionStorage.getItem("userid"),
          idCard: window.sessionStorage.getItem("cardid")
        }
      }
      // let datas = {
      //   txnBodyCom: {
      //     userType: "0",
      //     queryType: "3",
      //     matter_id: window.sessionStorage.getItem("matterid"),
      //     userId: "test0004",
      //     idCard: "110101199501010001"
      //   }
      // }
      this.$ajaxRequest("post", "/gsp/fsx01020", datas, pages)
        .then(res => {
          console.log(res.list3)
          if(res.list3 == ""||res.list3 == []){
           
            this.$toast('未查询到已授权企业！')
          }
          this.selectData01[0].values = res.list3
        })
        .catch(error => {
        });
    },
    out() {
      const data = {
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          regNo: this.regNo,
          certNo: window.sessionStorage.getItem("cardid"),
          name: window.sessionStorage.getItem("username"),
          mobilePhone: window.sessionStorage.getItem("userphone")
        }
      };
      // const data = {
      //   txnBodyCom: {
      //     matter_id: window.sessionStorage.getItem("matterid"),
      //     regNo: '91530427316334082X',
      //     certNo:'532624199207101715',
      //     name: '吴新勇',
      //     mobilePhone: '15887616882'
      //   }
      // };
      let pages = {
          tRecInPage: "10",
          tPageJump: "1",
          tStsTraceId: "110567890"
        
      }
      this.$ajaxRequest("post", "/gsp/mng60046", data, pages)
        .then(res => {
          console.log(res)
          if(res.is_registered == "1"){
            this.loginid=res.loginId;
            window.sessionStorage.setItem('loginid',this.loginid)
            this.$router.push('/stafftunover')
          }else{
            this.$toast('非企业联络员和企业授权人员无法办理该事项')
          }
         
        })
        .catch(error => {

        });
    },
    goto() {
      
      if (!this.confirmValSelect01[0]) {
        //必填校验，如果不是必填项不用写
        this.errorSelect01 = true;
        this.errorSelectInfo = "请选择用户名!";
      } else {
        this.errorSelect01 = false;
        this.out();
        
      }
    },
    open(picker) {
      this.$refs[picker].open();
      document.activeElement.blur();
    },
    errorChangeFun(val) {
      this.errorSelect01 = val.text;
    },
    selectConfirmFun01(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect01 = selectedVal[0].enterpriseName;
        this.regNo = selectedVal[0].usco;
        
      } else {
        this.confirmValSelect01 = selectedVal[0].enterpriseName;
        this.regNo = selectedVal[0].usco;
      }
    }
  },
  components: {
    headtwo,
    mybutton
  }
};
</script>
<style lang="less" scoped>
.iftype {
  .hui-field_core {
    text-align: left !important;
  }
}
.example-select_btn-wrapper {
  margin-top: 15px;
}
.example-select_arrowRight {
  display: block;
  width: 30px;
  height: 30px;
  //   background: url(../../../src/common/images/common-arrowRight.png) 5px center no-repeat;
  background-size: 16px 16px;
}
</style>