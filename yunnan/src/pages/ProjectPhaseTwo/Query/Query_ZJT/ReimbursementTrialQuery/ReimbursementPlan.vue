<template>
  <div class="planContainer">
    <myheader :my-header="headerData"></myheader>
    <div class="content">
        <div v-for="item in arr"> 
          <ul> 
            <li>第{{item.qs.info}}期</li>
            <li>
              <span>月还款额: <em>{{item.yhke.info}}</em></span>
              <span>应还本金: <em>{{item.yhbj.info}}</em></span>
              <span>应还利息: <em>{{item.yhlx.info}}</em></span>
              </li>
            <li>
              <span>贷款余额</span>
              <span>{{item.dkye.info}}元</span>
            </li>
          </ul>
          <i></i>
        </div>      
    </div>
  </div>
</template>
<script>
import Header from "@/components/header/header";
export default {
  components: {
    myheader: Header
  },
  data() {
    return {
      headerData: {
        title: "还款计划",
        backUrl: "/ReimbursementTrialResult"
      },
      arr:[]
    }
  },
  created(){
  },
  mounted(){
    let _this = this;
    _this.init()
  },
  methods:{
    init(){
     let _this = this;
     for(let i in this.endData){
        let qs,yhbj,yhlx,yhke,dkye
        for(let j in this.endData[i].resultInfo){
          switch(_this.endData[i].resultInfo[j].title){
              case "期数":
               qs = _this.endData[i].resultInfo[j]
              break;
              case "应还本金":
              yhbj = _this.endData[i].resultInfo[j]
              break;
              case "应还利息":
                yhlx = _this.endData[i].resultInfo[j]
              break;
              case "月还款额":
               yhke = _this.endData[i].resultInfo[j]
              break;
              case "贷款余额":
              dkye = _this.endData[i].resultInfo[j]
              break;

            }
          
        }
        this.arr.push({
            qs:qs,
            yhbj:yhbj,
            yhlx:yhlx,
            yhke:yhke,
            dkye:dkye
        })
      }
    }, //数组重组
  },
  computed:{
    endData(){
      return  this.$route.query.res
    }
  }
    
}
</script>
<style scoped>
html,body{height:100%;}
.planContainer{
  width: 100%;
}
.planContainer .content>div{
  background: #fff;
  width: 100%;
  /* border-bottom:1px solid #F1F3F6; */
}
.planContainer .content>div i{
  display: block;
  width: 90%;
  border: 1px solid rgb(245, 248, 252);
  margin: 0 auto;
}
.planContainer .content>div ul{
  padding: .32rem 0;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items:center;
}
.planContainer .content>div ul li{
  width: 33.3333%;
  float: left;
  font-size: .32rem;
}
.planContainer .content>div ul li:nth-child(2){
  color: #999;
}
.planContainer .content>div ul li:nth-child(2) span{
  padding-left: .1rem;
  /* width: calc(100% - .3rem) */
  width: 100%;
  font-size: .28rem;
  display: block;
  padding: .06rem;
}
.planContainer .content>div ul li:nth-child(2) span em{
 color: #2AAAFB;
}
.planContainer .content>div ul li:nth-child(3) span {
    display: block;
    width: 100%;
    margin-top: .15rem;
}
    
</style>
