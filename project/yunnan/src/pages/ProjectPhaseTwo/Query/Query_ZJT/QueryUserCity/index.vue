<template>
  <div class="userCityContanier">
    <myheader :my-header="headerData"></myheader> 
    <Field readonly :error="errorSelectInfo" :propserror="errorSelect01"  label="地区选择" desc=""
         disableclear type="text" placeholder="请选择地区" required :value="pagedata.cityVal"
         v-on:errorchange="errorChangeFun" @click.native="open('pickerselect01')">
         <span slot="append" class="example-select_arrowRight"></span>
    </Field>
    <Huiselect
        ref="pickerselect01"
        position="bottom"
        :dataslots="selectData01"
        class="example-select_item"
        @confirms="selectConfirmFun01"
    ></Huiselect>
    <div class="subBtn"> 
      <mybutton :btnData="btnData"  @click="goto_src"/>
    </div>
  </div>
</template>
<script>
import Header from '@/components/header/header'
import mybutton from "@/components/MyButton";
import Common from "../LoanInfoQuery/components/Common";
export default {
  components: {
    myheader: Header,
    mybutton
  },
  data () {
    return {
      headerData: {
        title: '公积金地区选择',
        backUrl: 'gongjijin'
      },
      cityvalue:"",
      errorSelect01: false,
      errorSelectInfo: '',
      selectData01: [{
      flex: 1,
      values: [
          {text:'昆明市',value:'530100000000'} //为提供接口暂时支持昆明
          ],
          className: 'slot1',
          showText:'text',
          defaultIndex:3
      }],
      confirmValSelect01:[],
      btnData: [
      {
        text: "下一步",
        disabled: false,
        isSure: true,
        // click:'func1'
      }],
      pagedata:{
        cityVal:["昆明市"]
      },
      enddata:{
        cityVal:"530100000000"
      }
    }
  },
  conputed: {},
  created(){
    let _this = this;
  },
  methods: {
    next(){
      let _this = this;
      if(_this.enddata.cityVal == ""){
        _this.$toast("请选择地区")
        return false
      }
      // _this.$router.push({
      //   path: "/QueryUserLogin",
      //   query:{
      //     data: _this.$route.query.data
      //   }
      // })
      // _this.examineLogin()
    },//下一步
    examineLogin(){
      let _this = this;
        let sendData = {
          "txnBodyCom": {
            matter_id:window.sessionStorage.getItem('matterid'),
            // 'matter_id':'1',
            // 'memberId': 'f25042e8f8344c8fa1050cda80d8ab8c',
            'memberId': window.sessionStorage.getItem("userid"),
          }
        }
        _this.$ajaxRequest("post", "gsp/mng19052",sendData)
        .then(res => {

          if(res == true || res == "true"){
            let src = sessionStorage.getItem("cmnSrc")
            sessionStorage.setItem("CmnRouter",src)
            _this.goto()
            // _this.$router.push({
            //   path: src,
            //   query:{
            //     data: _this.$route.query.data
            //   }
            // })
          }else{
            // _this.$router.push({
            //     path: "QueryUserLogin"
            // })
            _this.$toast('登录失败')
          }
        })
        .catch(error => {
          _this.$toast("网络错误,请重试")
        });
    }, //校验公积金是否需要登录  
    open(picker) {
       this.$refs[picker].open();
       document.activeElement.blur();
    },
    errorChangeFun(val) {
      this.errorSelect01 = val;
    },
    selectConfirmFun01(selectedVal){
      if(typeof selectedVal[0] === 'object'){
        this.enddata.cityVal = selectedVal[0].value;
        this.pagedata.cityVal = selectedVal[0].text;
      }else{
        this.enddata.cityVal = selectedVal;
      }
    },
    goto_src(){
      let _this = this;
       let sendData = {
        "txnBodyCom":{
          "matter_id": window.sessionStorage.getItem('matterid'),
          // "matter_id": '1',
          "memberId": window.sessionStorage.getItem("userId"),
          // "memberId":'d3bbe7e49c4a4ae6b33a7e138b74418e',
          "bodyCardNumber": sessionStorage.getItem("cardid"),
          // "bodyCardNumber": '53230119870601131',
          "buzType":"5432",
        }
      }
      let sendDatatwo = {
          "tRecInPage": "11",
          "txnIttChnlId": "1",
      }
      _this.$ajaxRequest("post","gsp/mng80103" ,sendData,sendDatatwo)
      .then(res => {
        if(res.userid){
          let src = sessionStorage.getItem("cmnSrc");
          sessionStorage.setItem("CmnRouter",src)
          sessionStorage.setItem("MpfUserId",res.userid)
          _this.$router.push({
            path: src,
            query:{
              data: _this.$route.query.data
            }
          })
        }
      })
      .catch(error => {
        // _this.$toast("网络错误,请重试")
      });
    }
  }
}
</script>
<style>
.userCityContanier .subBtn{
  margin-top:.5rem; 
}
</style>

