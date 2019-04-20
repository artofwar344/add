<template>
	<div class="bgfzrxkOneWrap">
		<towtop :name="titlename"/>
		<div class="content">
			<ul>
				<li>
					<h2>当前负责人</h2>
					<p>{{chargeMan}}</p>
				</li>
			</ul>
		</div>
    <div class="littlestarbig">
      <span class="littlestar">*</span>
		<Field readonly  label="拟变更负责人" desc="" disableclear type="text"
			placeholder="请选择变更负责人"
			:value="confirmValSelect01"
			@click.native="open01('pickerselect01')">
			<span class="example-select_arrowRight"> > </span>
		</Field>
		<Selectpopup ref="pickerselect01" position="bottom"   :dataslots="selectData01" :visible-item-count="5" class="example-select_item" @selectval="selectChangeFun1" @confirms="selectConfirmFun01">
		</Selectpopup>
    </div>

		<!-- <Btn plain block @click="next_btn">下一步</Btn> -->
    <div class="padTopAdd5">
          <mybutton :btnData="btnData" @click="next_btn" />
        </div>
	</div>
</template>
<script>
import towtop from "../../../../components/HederTwo";
import { cenurl } from "@/components/toptow.js";
import mybutton from "../../../../components/MyButton";
const profession = {};
export default {
  components: {
    mybutton,
    towtop
  },
  data() {
    return {
      btnData:[
        {
          text:'下一步',
          disabled: false,
          isSure: true,
        }
      ],
      titlename: "律师事务所（分所）变更负责人许可",
      chargeMan: "",
      textValue: "",
      confirmValSelect01: '',
      selectData01: [
        {
          flex: 1,
          values: [],
          className: "slot1",
          textAlign: "center",
          showText:'text',
          }
      ],
      selectedCharge:[],
      lawPlaceId:'',
      lawPlaceData:{},
      lawyerData:[],
    };
  },
  created(){
    if(window.sessionStorage.getItem('socialNumber')  == 'null' || window.sessionStorage.getItem('socialNumber') == ''){
      this.$toast('办理该事项必须由法人授权的用户或已实名认证的法人用户')
       return false
    }
  },
  methods: {
    next_btn() {
      if(window.sessionStorage.getItem('socialNumber')  == 'null' || window.sessionStorage.getItem('socialNumber') == ''){
        this.$toast('办理该事项必须由法人授权的用户或已实名认证的法人用户')
        return false
      }
      if(!this.confirmValSelect01){
        this.$toast("请选择变更负责人");
        return
      }
      console.log(this.selectedCharge)
      sessionStorage.setItem("SFTlawPlaceData",JSON.stringify(this.lawPlaceData))
      sessionStorage.setItem("SFTchangeCharge",JSON.stringify(this.selectedCharge))
      this.$router.push({
        name:"bgfzrxk_two",
        params:{
          confirmValue:this.confirmValSelect01
        },
      });
    },
    open01(picker) {
      this.$refs[picker].open();
      document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    selectChangeFun1(picker, val) {
      picker.setSlotValues(1, profession[val[0]]);
    },
    selectConfirmFun01(selectedVal) {
		  console.log(selectedVal)
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect01 = selectedVal[0].text;
      }else{
        this.confirmValSelect01 = selectedVal;
      }
      this.lawyerData.forEach(element => {
        if(element.c_xm == this.confirmValSelect01){
          this.selectedCharge = element;
        }
      });
    },
    getCharge(){
      let _self = this;
      // 获取变更负责人列表
      let setdata = {
        txnCommCom: {
          tRecInPage: "10",
          tPageJump: "2",
          tStsTraceId: "110567890"
        },
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          c_zyjg: this.lawPlaceId,
          type: "1" //0:全部1:去除当前负责人
        }
      };
      this.$ajaxRequest("post", "/gsp/mng80092", setdata)
      .then(res => {
          if (res.list.length <= 0) {
            _self.$toast("变更负责人列表为空！");
            return false;
          } else {
            let cent = res.list;
            for(var i=0,len=cent.length;i<len;i++){
              let temOb = {text:cent[i].c_xm,value:cent[i].c_bh};
              _self.selectData01[0].values.push(temOb);
            }
            _self.lawyerData = _self.lawyerData.concat(cent);
          }
      })
      .catch(error => {
        console.log(error);
        _self.$toast("获取变更负责人列表失败！");
      });
    }
  },
  activated() {
    let _self = this;
    let WorkId;
    if(this.$route.query.WorkId){
      WorkId = this.$route.query.WorkId;
      sessionStorage.setItem("WorkId",WorkId)
      console.log(sessionStorage.getItem("WorkId"))
    } else {
      WorkId =  sessionStorage.getItem("WorkId",WorkId)
      sessionStorage.setItem("WorkId",WorkId)
    }
    if(sessionStorage.getItem("SFTlawPlaceData")){
      let lawPlaceData = JSON.parse(sessionStorage.getItem("SFTlawPlaceData"))
      _self.chargeMan = lawPlaceData.c_fzrxm;
      _self.lawPlaceId = lawPlaceData.c_bg;
    }
    if(sessionStorage.getItem("SFTchangeCharge")){
      let changeCharge = JSON.parse(sessionStorage.getItem("SFTchangeCharge"));
      _self.confirmValSelect01 = changeCharge.c_xm;
      _self.selectedCharge = changeCharge;
    }
    // 获取负责人
    let tyshxydm = window.sessionStorage.getItem('socialNumber');
    // let tyshxydm = sessionStorage.getItem("");
    let lawyerdata = {
      "txnCommCom":{
        "tRecInPage":"",
        "tPageJump":"",
        "tStsTraceId":""
        },
      "txnBodyCom": {
        matter_id: window.sessionStorage.getItem("matterid"),
        //律师事务所查询参数,
        "c_zwmc":"",
        //律师事务所查询当前负责人参数,
        "c_tyshxydm":window.sessionStorage.getItem("socialNumber")!='null'?window.sessionStorage.getItem("socialNumber"):'-----------'
      }
        // "txnBodyCom": {
        //      matter_id: window.sessionStorage.getItem("matterid"),
        //  "c_sfzh":"",
        //    "c_xm":"鲁",
        //    "c_zyzh":"",
        //    "c_bh":"",
        //    "c_zyjg":""
        // }
    };
    this.$ajaxRequest("post", "/gsp/mng80090", lawyerdata)
    .then(res => {
      console.log(res)
      if (res.list.length <= 0) {
        _self.$toast("搜索数据为空！");
        return false;
      } else {
        // console.log(res.list);
        _self.lawPlaceData = res.list[0]
        _self.chargeMan = res.list[0].c_fzrxm;
        _self.lawPlaceId = res.list[0].c_bh;
        _self.getCharge();
      }
    })
    .catch(error => {
      console.log(error);
      _self.$toast("查询失败！");
    });

  }
};
</script>
<style>
.bgfzrxkOneWrap .content ul {
  width: 100%;
  background-color: #fff;
}
.bgfzrxkOneWrap .content li {
  width: 90%;
  height: 1rem;
  line-height: 1rem;
  margin: 0 auto;
  border-bottom: 0.01rem solid #ccc;
  font-size: 0.28rem;
}
.bgfzrxkOneWrap .content li h2 {
  float: left;
}
.bgfzrxkOneWrap .content li p {
  float: right;
  color: #999;
}
.bgfzrxkOneWrap .content li .color{
  color:black;
}
.bgfzrxkOneWrap .zhushi {
  margin-top: 0.2rem;
  padding: 0.2rem 0 0.2rem 0;
  box-sizing: border-box;
  background-color: #fff;
}
.bgfzrxkOneWrap .zhushi .header {
  width: 90%;
  margin: 0.1rem auto;
  text-align: left;
}
.bgfzrxkOneWrap .zhushi .blue {
  width: 0.06rem;
  height: 0.24rem;
  background-color: #2d7ffc;
  margin-right: 0.2rem;
  display: inline-block;
}
.bgfzrxkOneWrap .zhushi .tishi {
  font-size: 0.3rem;
  font-weight: 700;
  display: inline-block;
}
.bgfzrxkOneWrap .zhushi p {
  width: 90%;
  margin: 0 auto;
  font-size: 0.24rem;
  text-align: left;
  margin-top: 0.15rem;
  color: #666;
}

.bgfzrxkOneWrap .hui-field_main {
  font-size: 0.28rem;
  line-height: 0.9rem;
  height: 0.9rem;
}
.bgfzrxkOneWrap .hui-field_star {
  display: block;
}
.bgfzrxkOneWrap .hui-btn.is-block {
  font-weight: 700;
  display: inline-block;
  width: 5.9rem;
  height: 0.9rem;
  margin: 0.6rem 0.35rem;
  background-color: #2d7ffc;
  font-size: 0.32rem;
  color: #fff;
}
.bgfzrxkOneWrap .hui-field_title {
  width: 3rem;
}
.bgfzrxkOneWrap .btm .hui-field_title {
  width: 6rem;
}
.bgfzrxkOneWrap .littlestarbig{
  position: relative;
}
.bgfzrxkOneWrap .littlestar{
  display: inline-block;
  color: red;
  font-size:0.4rem;
  position: absolute;
  left:0.06rem;
  top: 38%;
}
</style>
