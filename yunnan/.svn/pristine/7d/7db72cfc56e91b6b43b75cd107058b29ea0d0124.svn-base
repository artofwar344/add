<template>
	<div class="box dts_container">
		<towtop style="margin-bottom: 0" :name="titlename"/>
		<div class="header">
			<div class="search">
				<Icon type="search" size="22"  color="#999999" class="icn1"></Icon>
				<span><input type="text" value="请输入项目代码"  v-model="txtval" maxlength="24" placeholder="请输入项目代码"></span>
				<span  @click="scanCode"><Icon type="scanning" size="22"  color="#999999" class="icn2"></Icon></span>
			</div>
      <!-- <button class="commonBtn smallBtn" @click="reset">重置</button>
      <button class="commonBtn smallBtn" @click="getData">查询</button> -->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @func1="reset" @func2="getData"/>
    </div>
		</div>
    <!-- 查询列表 -->
    <div class="porject " v-for="(item, index) in listTwo" :key="index" v-show="status == 'true'">
			<Field type="text" label="项目代码" readonly>{{result.f_CENTRAL_PROJ_CODE}}</Field>
			<Field type="text" label="项目名称" readonly>{{result.PROJ_NAME}}</Field>
			<Field type="text" label="审批事项" readonly>{{item.TRAN_PNAME}}</Field>
			<Field type="text" label="审批时间" readonly>{{item.TRAN_ACTUAL_FINISH_TIME}}</Field>
			<Field type="text" label="审批结果" readonly>{{item.TRAN_STATUS}}</Field>
			<p @click="todetails(index)">详情</p>
		</div>
    <div v-if="status == true" class="nodata">
        <img :src="noDataImg1" alt="">
    </div>
	</div>
</template>
<script> 
// 2018-530102-83-01-014198
import towtop from "../../../components/HederTwo";
import { cenurl } from "../../../components/toptow.js";
import noDataImg from '@/assets/noDataImg.png'
import mybutton from "../../../components/MyButton";
export default {
  data() {
    return {
      btnData: [
        {
          text: "重置",
          disabled: false,
          isSure: true,
          click:'func1'
        },
        {
          text: "查询",
          disabled: false,
          isSure: true,
          click:'func2'
        }
      ],
      titlename: "投资项目办件进度查询",
      list:[],
      listTwo:[],
      txtval:'',
      result:{},
      status:"false",
      tsStatus:false,
      txt:"false",
      noDataImg1:noDataImg
    };
  },
  components: {
    mybutton,
    towtop
  },
  created() {
    // 记录赋值
    let _this = this;
    _this.listTwo = []; 
    let keywords = window.sessionStorage.getItem("keywords");
    let inestList = window.sessionStorage.getItem("inestList");
    inestList = JSON.parse(inestList)
    if(keywords){
       // this.ajax(_this.txtval)
       _this.tsStatus = false;
        _this.status = "true"; 
        _this.txtval = keywords; 
        _this.listTwo =  inestList.listTwo;
        _this.result =  inestList.result;

    }
    window.ResideCode = this.ResideCode;
    // this.ResideCode("2018-530422-82-01-014315")
    let page = {
					tRecInPage: "1",
					tPageJump: "3",
				};
    let setdata = {
      "txnBodyCom": {
        "matter_id": window.sessionStorage.getItem("matterid"),
        "chann_id": "1"
      }
    };
  },
  mounted(){
  },
  watch:{
    listTwo(){    
      // console.log(this.listTwo)
    }
  },
  methods: {
    // 重置信息
    reset(){
      this.txtval = "";
      this.listTwo = [];
      this.tsStatus = false;
      sessionStorage.removeItem("keywords");
      sessionStorage.removeItem("inestList");
    },
    // 查询列表
    getData(){  
        this.ajax(this.txtval)
    },
    // 详情跳转
    todetails(index) {
      let inestList = {
        listTwo:this.listTwo,
        result:this.result
      }
      window.sessionStorage.setItem("keywords",this.txtval);
      window.sessionStorage.setItem("inestList",JSON.stringify(inestList));
      var datalist = {
          CODE: this.txtval,
          PROJ_NAME:this.result.PROJ_NAME,
          TRAN_INFO:this.listTwo[index],
          result:this.result
      }
      this.$router.push({
        name:'details',
        params:{datalist:datalist}
      });
    },
    ResideCode(str) {
      let _self = this;
      window.location.href=str
      _self.txtval = str;
      _self.getData()
    },
    // 二维码扫描
    scanCode(){
      console.log("here");
      this.$CallModule("scan", "二维码扫描");
    },
    // 列表获取
    ajax(txtval){
        let _self = this;
         var yz= /^[\d-]*$/;
        // 验证项目代码格式
        let gl = this.txtval;
            gl = gl.split("");
        let sy = [];
        for(let i in gl){
          if(gl[i] == "-"){
            sy.push(i)
          }
        }
        sy = sy.join('')
        if(txtval == "" || yz.test(txtval) != true || this.txtval.length != 24 || sy != "4111417"){
           this.$toast("请输入24位项目代码(0-9和'-')");
          return
        }
        // if(txtval == ""){
        //   this.$toast("请输入相关代码");
        //   return
        // }
        // var yz= /^[\d-]*$/;
        // if(yz.test(txtval) != true){
        //   this.$toast("请输入24位项目代码(0-9和'-'");
        //   return
        // }
        // if(this.txtval.length != 24){
        //   this.$toast("代码长度不正确");
        //   return
        // }
				let page = {
					tRecInPage: "1",
					tPageJump: "3",
        };
				let setdata = {
          txnBodyCom: {
            matter_id: window.sessionStorage.getItem("matterid"),
            chann_id: "123",
            Pro_code: txtval
          }
				};
				this.$ajaxRequest("post", "/gsp/mng90037", setdata,page)
				.then(res => {
          this.status = "true";
          this.result = res;
          console.log(res)
          if(res.TRAN_INFO){
            this.tsStatus = false;
            for(let i in res.TRAN_INFO){
              let time =  res.TRAN_INFO[i].TRAN_ACTUAL_FINISH_TIME.split(" ");
              res.TRAN_INFO[i].TRAN_ACTUAL_FINISH_TIME = time[0];
            }
            this.listTwo = res.TRAN_INFO;
          }else{
            this.listTwo = {};
            // this.$toast("暂无审批事项信息");
            this.tsStatus = true;
          }
				})
				.catch(error => {
					console.log(error);
        });

    }
  }
};
</script>
<style  scoped>
.smallBtn{
    width: 1.5rem;
    height: 0.6rem;
    margin: 0.2rem;
    font-size: 0.28rem;
}
.box {
  background-color: #edeef2;
}
.header {
  width: 100%;
  background-color: #fff;
  padding-bottom: 0.1rem;
}
.search {
  position: relative;
  width: 70%;
  height: 0.64rem;
  line-height: 0.64rem;
  margin: 0 auto;
  background-color: #f5f5f5;
  border-radius: 0.3rem;
  font-size: 0.24rem;
}
.search input {
  line-height: .6rem;
  height: .6rem;
  border: none;
  background-color: #f5f5f5;
  color: #999;
}
.icn1 {
  position: absolute;
  top: 0.15rem;
  left: 0.2rem;
}
.icn2 {
  position: absolute;
  top: 0.15rem;
  right: 0.2rem;
}
.porject {
  background-color: #fff;
  margin-top: 0.2rem;
}
.hui-field_core {
  text-align: right;
}
.hui-field_star {
  display: none;
}
.hui-field:not(last-child) {
  /* height: 0.8rem; */
  font-size: 0.28rem;
  border: none !important;
}
p {
  width: 90%;
  margin: 0 auto;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.28rem;
  color: #2d7ffc;
}
.f5 .hui-field_value .hui-field_core {
  color: green;
}
</style>
<style>
.hui-field{
  height:auto !important;
  border:0 !important;
  /* background:; */
}
.nodata{
  width:100%;
}
.dts_container{
  height:100%;
}
.nodata img{
    width: 5.56rem;
    margin: 1.08rem auto;
}
</style>
