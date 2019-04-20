<style scoped>
.content {
  margin-top: 0.2rem;
  background: white;
  padding: 0.5rem 0rem 1.02rem 1.16rem;
  text-align: left;
  font-size: 0.32rem;
  color: #D8D8D8;
}
.undo_img {
    display: inline-block;
    background: #D8D8D8;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  vertical-align: sub;
}

.wait_img {
  width: 0.4rem;
  height: 1.32rem;
}
.steps li{
    height: 1.13rem;
}
.step img {
  width: 0.4rem;
  height: 0.4rem;
  vertical-align: sub;
}
.step .title {
  margin-left: 0.5rem;
}
.title:after{
    content: " ";
    display: block;
    width: .04rem;
    height: .36rem;
    background: #D8D8D8;
    margin-left: .18rem;
}
.step:last-child .title:after{
    display: none;
}
.step:before{
    content: " ";
    display: block;
    width: .04rem;
    height: .4rem;
    background: #D8D8D8;
    margin-left: .18rem;
}
.status+.step{
    height: .76rem;
}
.status+.step:before{
    display: none;
}
.stepActive:before{
  background: #2d7ffc;
}

.active{
  color: #2d7ffc;
}
.active:after,.active:before{
  background: #2d7ffc;
}
</style>

<template>
    <div class="infoCheck">
      <myheader :my-header="headerData"></myheader>
      <div class="content"  v-if="state == true">
        <ul class="steps">
            <li class="status">
                <img :src="url" class="wait_img">
            </li>
            <li class="step" :class="{stepActive:item.status=='done'}" v-for="item in stepsData" :key="item.id">
                <span class="undo_img" v-if="item.status=='undo'"></span>
                <img :src="finishurl" v-else>
                <span class="title" :class="{active:item.status=='done'}">{{item.name}}</span>
            </li>
        </ul>
      </div>
    </div>
</template>
<script>
import Header from "@/components/header/header";
import imgUrl from "@/assets/images/accumulation_Fund/Group5@3x.png";
import finishedImg from "@/assets/images/accumulation_Fund/Group@3x.png";
import Common from "../LoanInfoQuery/components/Common.js";
export default {
  components: {
    myheader: Header
  },
  data() {
    return {
      headerData: {
        title: "贷款进度查询",
        backUrl: "/gongjijin"
      },
      url: imgUrl,
      finishurl: finishedImg,
      stepsData: [],
      state:Boolean   
    };
  },
 created(){
    const _this = this;
    let CmnRouter = sessionStorage.getItem("CmnRouter")
    if(CmnRouter != this.$route.path){
      sessionStorage.setItem("cmnSrc",_this.$route.path)
      _this.$router.push({
          path: "QueryUserCity"
      })
      return false
    }
    sessionStorage.removeItem("CmnRouter");
    _this.init()
  },
  mounted(){},
  methods:{
    init(){
      let _this = this;
      let sendData = {
        "txnBodyCom":{
          matter_id: window.sessionStorage.getItem('matterid'),
          userId: window.sessionStorage.getItem("MpfUserId"),
          buzType:"5445"
        }
      }
      _this.$ajaxRequest("post", "gsp/mng90023",sendData)
      .then(res => {
        if(res.recode == '000000'){
          for(let i in res.result){
            let state;
            if(res.result[i].apprflagID <= res.apprflag){
              state = "done"
            }else{
              state = "undo"
            }
            this.stepsData.push({
                id: res.result[i].apprflagID,
                status: state,
                apprflagDate: res.result[i].apprflagDate,
                name: res.result[i].apprflagMSG
            })
            _this.state = true;
          }
        }else{
          _this.$toast(res.msg)
        }
      })
      .catch(error => {
        // _this.$toast("网络错误,请重试")
      });
    }
  },
  computed:{},
  watch:{}
};
</script>
