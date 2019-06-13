<template>
	<div class="rensheting">
		<towtop :name="titlename" />
		<div class="content">
			<Field readonly required class="mt" type="text" label="身份证号" v-model="personid"  placeholder="请输入身份证号码">
			</Field>
		</div>
		<!-- <Btn block @click="queryProof()">查询</Btn> -->
        <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="queryProof"/>
    </div>
	</div>
</template>
<script>
import towtop from "../../../components/HederTwo";
import { cenurl } from "@/components/toptow.js";
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
      titlename: "云南省基本养老保险参保缴费证明",
      personid: "",
      queryUrl: "/gsp/mng60018"
    };
  },
  components: {
    mybutton,
    towtop
  },
  created() {
    let _self = this;
    // _self.personid = (sessionStorage.getItem('cardid') && sessionStorage.getItem('cardid') !== 'null') || ''
    _self.personid =this.$NoNull(sessionStorage.getItem('cardid')) || ''


    // _self.queryProof()
    // _self.testSend()
  },
  methods: {
    // init (data) {
    //   alert(JSON.stringify(data))
    // },
    queryProof() {
      if (this.personid == "") {
        this.$toast("请输入身份证号码!");
        return;
      }
      
      let a = "530"
      let str = this.personid
      let prefix = str.substring(0,3);
      // if(prefix != a){
      //   this.$toast("请输入云南本省的身份证号!");
      //   return;
      // }
      let _self = this;
      let sendData = {
        txnCommCom: {
          tRecInPage: "10",
          tPageJump: "2",
          tStsTraceId: "110567890"
        },
        txnBodyCom: {
          social_sec_num: this.personid,
          insurance_type: "110",
          chann_id: "1",
          matter_id: window.sessionStorage.getItem("matterid") // window.sessionStorage.getItem("matterid")
        }
      };
      this.$ajaxRequest("post", _self.queryUrl, sendData).then(res => { 
        if(res.errorinfo == undefined){
          if(res.totalrec){
            if(res.totalrec != "0"){
              _self.$toast('证照生成成功，请到我的证照进行查询')
            }else{
              _self.$toast('未查询到相关数据，请核实参保地是否为云南省！')
            }
          }else{
            _self.$toast('证照生成成功，请到我的证照进行查询')
          }
        }
      }).catch(error => {
        console.log(error);
      });
    },
    setDom(data) {
      let _self = this;
      console.log(data);
    }
  }
};
</script>
<style>
 body {
   background-color: #20212317;
  }
.rensheting .header {
  position: relative;
  width: 100%;
  height: 0.8rem;
  background-color: #ccc;
  text-align: center;
}

.rensheting .header .title {
  height: 100%;
  line-height: 0.8rem;
  display: inline-block;
  font-size: 0.4rem;
  margin: 0 auto;
}
.rensheting .header a {
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  font-size: 0.4rem;
  color: #2c3e50;
}
.rensheting .hui-btn.is-block {
  width: 70%;
  height: 0.8rem;
  margin: 0.5rem auto;
  background-color: #2d7ffc;
  font-size: 0.3rem;
}
.rensheting .hui-field_core {
  text-align: right;

}
.rensheting .hui-field {
  width: 100%;
  /*margin: 0 auto;*/
  height: 0.9rem;
  line-height: 0.9rem;
}
.rensheting .content {
  margin-top: 0.2rem;
  background-color: #fff;
}
 .rensheting .hui-field_value {
  width: 70%;
 }
 .rensheting .hui-field_clearIcon {
  display: none;
 }
 .rensheting .hui-field_clear {
  display: none;
  width: 0;
  height: 0;
 }
</style>
