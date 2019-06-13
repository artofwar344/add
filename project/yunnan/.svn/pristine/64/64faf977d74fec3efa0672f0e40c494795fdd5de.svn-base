<template>
  <div class="currentPoint">
      <!--上啦加载-->
      <div class="example-loadmore_wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <div class="current-content">
          <img class="currentPoint-pic" :src="imgsrc" alt="">
          <div class="titleBox">
            <div class="titleLeft current-title" >
              {{topicTitle}}
            </div>
            <div @click="routerToLeaveMsg" class="titleRight" >
              我要留言
            </div>
          </div>

          <p class="current-text" :class="{'showAll':showAllContent}">
            {{topicContent}}
          </p>
          <div class="readMore-btn" :class="{'close-btn':showAllContent}" @click="readMore">》</div>
          <div class="content-bottom_border"></div>
        </div>
        <div class="msgBox">
          <div class="msgHead">
            <p class="hsgHead-left">
              精选留言 <span>( {{ hotMescount }} )</span>
            </p>
            <p class="hsgHead-right">
              <span @click="getMsgData('isTime')" :class="{'active':timeactive}">按时间</span>
              <span @click="getMsgData('isHot')" :class="{'active':hotactive}">按热度</span>
            </p>
          </div>
        <Loadmore  :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
          <div v-for="(item,index) in msgListData" :key="index" class="msgContentBox">
            <div @click="handFollow($event,item)" class="msgItem">
              <Cell
                show-left
                show-right
                show-text
                left-box-class="example-cell_portrait-wrapper"
                right-box-class="example-cell_rightBox"
                :title="item.name"
                is-title-cut2
                :text="item.text"
                is-text-cut2
              >
                <div slot="leftCont" class="example-cell_portrait">
                  <img :src="item.portrait">
                </div>

                <template  slot="rightCont">
                  <Icon  type="attention" size="22"  :color=" item.userIslike==1 ? 'red':'#999'"></Icon>
                  <span class="followNum">{{ item.followNum }}</span>
                </template>
              </Cell>
              <p class="msgContent">
                {{ item.content }}
              </p>
            </div>
          </div>
        </Loadmore>
      </div>

      <!--上啦加载-->

    </div>
    <!--未登录跳转到登录页弹窗-->
    <Popupprompt
      v-model="isNologin"
      title="未登录,先请登录"
      :confirm-btn = '{id: false,text: "取消"}'
      :cancel-btn = '{id: true,text: "确定"}'
      @click = "goLogin"
    >
    </Popupprompt>

  </div>
</template>
<script>
import {AppReturnToLoginPage} from '../../../utils/CallModule'
  export default {
    name:'CurrentPoint',
    data(){
      return{
        isHot:true,
        pageNum:'0',
        showNum:'10',
        showAllContent:false,
        showAllMsg:false,
        topicTitle:"",
        topicContent:"",
        hotMescount :0,
        msgIndex:undefined,
        showAllMsgContent:undefined,
        hotactive:false,
        timeactive:true,
        msgListData:[],
        msgIconColor:'#999',
        followNum:666,
        topicId:"",
        imgsrc:"",
        isNologin:false,
        hotspot_comment_id:"",
        id:"",
      //  上拉加载
        allLoaded: false,
        bottomStatus: '加载中',
        wrapperHeight: 0,
        topStatus: '',
        msgOrderBy:'01',
        autoFill:false,
        firstLoad:true,
      }
  },
    created(){

    },
    methods:{
      goLogin(flag){
        if(flag){
          //跳转到APP
          AppReturnToLoginPage()
        }
        this.isNologin = false;
      },
      readMore(){
        this.showAllContent = !this.showAllContent;
      },
      handFollow($event,item){

        if($event.target.classList.value.indexOf('hui-icon_attention') < 0 ){ return }
        //判断用户登录状态
        if(window.sessionStorage.getItem("usertoken") =='null'){
          this.isNologin = true;
          return
        }
        if(!item.userIslike){
          //赞同
            let setdata = {
                txnCommCom: {
                },
                txnBodyCom: {
                  matter_id: window.sessionStorage.getItem("matterid"),
                  "hotspot_comment_id":item.hotspot_comment_id,
                  "user_id":window.sessionStorage.getItem("userid") !='null' ? window.sessionStorage.getItem("userid") : '0b5dba7536514882ac7140c5482b3799',
                  "user_name":window.sessionStorage.getItem("username") !='null' ? window.sessionStorage.getItem("username") : 'hani123',
                  // "user_id":window.sessionStorage.getItem("userid"),
                  // "user_name":window.sessionStorage.getItem("username"),
                }
            };
             this.$ajaxRequest("post", "/gsp/fsx06016", setdata)
                  .then(res => {
                    item.userIslike = 1;
                    item.followNum+=1;
                  })
                  .catch(error => {
                    this.$toast("点赞失败！");
                  });




        }else{
          //取消赞同
            let setdata = {
                txnCommCom: {
                },
                txnBodyCom: {
                  matter_id: window.sessionStorage.getItem("matterid"),
                  "hotspot_comment_id":item.hotspot_comment_id,
                  "user_id":window.sessionStorage.getItem("userid") !='null' ? window.sessionStorage.getItem("userid") : '0b5dba7536514882ac7140c5482b3799',
                  "user_name":window.sessionStorage.getItem("username") !='null' ? window.sessionStorage.getItem("username") : 'hani123',
                  // "user_id":window.sessionStorage.getItem("userid"),
                  // "user_name":window.sessionStorage.getItem("username"),
                }
            };
            this.$ajaxRequest("post", "/gsp/fsx06017", setdata)
                  .then(res => {
                    item.userIslike = 0;
                    item.followNum-=1

                  })
                  .catch(error => {
                    this.$toast("操作失败！");
                  });




        }
      },
      msgReadmore(index){
        if(this.showAllMsgContent == index){
          this.showAllMsgContent = undefined
        }else {
          this.showAllMsgContent = index
        };
      },

      routerToLeaveMsg(){
        //判断用户登录状态
        if(window.sessionStorage.getItem("usertoken") =='null'){
          this.isNologin = true;
          return
        }
        this.$router.push({name:'LeaveMsg',params:{'userId':'12345678', topicId: this.topicId}})
      },
      getMsgData(flag){

        this.allLoaded = false;
        let msgOrderBy;
        if(flag == 'isTime'){
          //按时间
          this.timeactive = true;
          this.hotactive = false;
          this.msgListData = [];
          this.msgOrderBy = '01';
          this.pageNum =  '1';
        }else if(flag == 'isHot'){
          //按热度
          this.timeactive = false;
          this.hotactive = true;
          this.msgListData = [];
          this.msgOrderBy = '00'
          this.pageNum =  '1';
        }
        this.pageNum =Number(this.pageNum) + 1;
        let _self = this;
        let pagejump={
          tRecInPage: this.showNum,
          tPageJump: this.pageNum,
        }
        let setdata = {
          txnCommCom: {
            tStsTraceId: "110567890",
            tenant: "530000000000",
            txn_itt_chnl_id: "0",
            txn_itt_chnl_type: "1",
            tRecInPage: this.showNum,
            tPageJump: this.pageNum,

          },
          txnBodyCom: {
            matter_id: window.sessionStorage.getItem("matterid"),
            "topic_type":"00",
            "filtro":this.msgOrderBy,
            // "user_id":window.sessionStorage.getItem("userid") !='null' ? window.sessionStorage.getItem("userid") : '0b5dba7536514882ac7140c5482b3799',
            // "user_name":window.sessionStorage.getItem("username") !='null' ? window.sessionStorage.getItem("username") : 'hani123',
          }
        };
        this.$ajaxRequest("post", "/gsp/fsx06014", setdata,pagejump)
          .then(res => {

            function timestampToTime(timestamp) {
              var date = new Date(timestamp );//时间戳为10位需*1000，时间戳为13位的话不需乘1000
              var Y = date.getFullYear() + '-';
              var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
              var D = date.getDate() + ' ';
              var H = date.getHours() + ':';
              var m = date.getMinutes() +':';
              var S = date.getSeconds() + ' ';
              return Y+M+D+H+m+S;
            }
            if(res.hotSpotList.length == 0){
              this.$toast('无最新话题');
            }else{

              res.hotSpotList[0].webSite = window.location.href;
              this.imgsrc=res.hotSpotList[0].url;
              this.topicId = res.hotSpotList[0].id;
              this.topicTitle=res.hotSpotList[0].topic_title;
              this.topicContent=res.hotSpotList[0].topic_content;
              this.allPage = res.txnCommCom.totalPage;
              this.hotMescount =res.hotSpotList[0].countComment;
              //是否有评论
              if(this.hotMescount && res.hotSpotList[0].commentList){
                for(var i=0;i<res.hotSpotList[0].commentList.length;i++){
                  let tempOb = {
                    followNum: res.hotSpotList[0].commentList[i].countPraise,
                    name: res.hotSpotList[0].commentList[i].comment_user_name,
                    text: timestampToTime(res.hotSpotList[0].commentList[i].comment_time),
                    isFollow:res.hotSpotList[0].commentList[i].delflag,
                    msgId:res.hotSpotList[0].commentList[i].comment_user_id,
                    portrait: '',
                    content:res.hotSpotList[0].commentList[i].comment_content,
                    hotspot_comment_id:res.hotSpotList[0].commentList[i].id,
                    userIslike:res.hotSpotList[0].commentList[i].userIslike,

                  };
                  this.msgListData.push(tempOb);
              }
              }else{
                this.allLoaded = true
              }
              //把数据发送给父路由用于分享
              this.$emit('getShareData',res.hotSpotList[0])
            }
          })
          .catch(error => {
            this.$toast(error);
          });
      },

      handleBottomChange(status) {
        this.bottomStatus = status;
      },
      loadBottom() {
        const self = this;
        // 模拟加载中
        setTimeout(() => {
          if (self.msgListData.length < self.hotMescount || this.firstLoad  ) {
            self.getMsgData('loadMore')
            this.firstLoad = false;
          } else {
            self.allLoaded = true; // 若数据已全部获取完毕
          }
          self.$nextTick(function () {
            self.$refs.loadmore.onBottomLoaded();
          });
        }, 1500);


      },

    },
    mounted(){
      //上拉加载
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
      // this.getMsgData('isTime')


    }
  }
</script>
<style  lang="less">
  .currentPoint{
    .hui-popupPrompt_btn-cancel{
      color: #00ace6;
    }
    .hui-popupPrompt_text{
      display: none;
    }
    .hui-popupPrompt{
      width: 70%;
    }
    text-align: left;
    background: #fff;
    .current-content{
      padding:0.2rem 0.36rem;
      color: #333;
      position: relative;
      z-index: 999;
      background: #fff;

      letter-spacing: 0.02rem;
      .showAll{
        height: auto;
        display: block;
      }
      .close-btn{
        transform: rotate(-90deg);
      }
    }
    .content-bottom_border{
      border-bottom: .01rem solid #F5F5F5;
    }
    .currentPoint-pic{
      display: block;
      height: 1.7rem;
      width: 100%;

    }

    .titleBox{
      overflow: hidden;
      .titleLeft{
        font-size: 0.32rem;
        padding: 0.15rem 0;
        float: left;
      }
      .titleRight{
        font-size: 0.26rem;
        padding: 0.08rem 0.15rem;
        margin: 0.1rem;
        background: #257BFF;
        color: #fff;
        float: right;
        border-radius: .08rem;
      }
    }
    .followNum{
      display: inline-block;
      transform: translate(0,-0.06rem);
      position: relative;
      color:#808080 ;
    }
    .current-text{
      color: #999;
      font-size: 0.24rem;
      line-height: 0.34rem;
      height: 1.3rem;
      overflow: hidden;
      margin-bottom: .3rem;
      overflow:hidden; text-overflow:ellipsis; display: -webkit-box;-webkit-line-clamp: 4;-webkit-box-orient: vertical
    }
    .readMore-btn{
      text-align: center;
      color: #999;
      font-size: 0.3rem;
      transform-origin: center center;
      transition: transform 0.3s;
      transform: rotate(90deg);

    }
    .msgBox{
      background: #F5F5F5;
      .showAll{
        height: auto;
        display: block;
      }
      .hui-field_core{
        text-align: left;
        line-height: 0.5rem;
        font-size: 0.3rem;
        resize:none;
      }

    }
    .hui-loadmore_bottom{
      background: #fff;
    }
    .msgHead{
      font-size: 0.3rem;
      font-weight: bolder;
      color: #333;
      padding:0 0.36rem 0.1rem;
      background: #fff;
      overflow: hidden;
      margin-bottom: 0.1rem;
      position: relative;
      z-index: 200;
    }
    .hsgHead-left{
      float: left;
    }
    .hsgHead-right{
      float: right;
      color: #999;
      .acorrdThis{
        color: #257BFF;
      }
    }
    .msgContentBox{
      padding: 0.2rem 0.36rem;
      background: #fff;
      .hui-cell:after {
         border-bottom:0;
      }
    }

    .example-cell_portrait-wrapper{
      width:0.8rem;
    }
    .hui-cell_text{
      font-size: 0.24rem;
    }
    .hui-cell_title{
      font-size: 0.26rem;
    }
    .example-cell_portrait{
      height: 0.6rem;
      width: 0.6rem;
      border-radius: 50%;
      overflow: hidden;
    }
    .example-cell_portrait img{
      width:100%;
    }
    .hui-cell_inner .example-cell_rightBox{width:60px;}
    .msgHeadIcon{
      border-radius: 50%;
    }
    .hui-cell_inner {
      padding: 0;

    }
    .msgContent{
      letter-spacing: 0.02rem;
      text-indent: .4rem;
      padding: 0.2rem 0.1rem;
      line-height: .4rem;
    }
    .msgReadMore{
      text-align: right;
      color: #257BFF;
      padding-bottom: .2rem;
      border-bottom: .01rem solid #999999;
    }

  .active{
    color:blue;
  }

    .example-loadmore_wrapper {
      overflow: scroll
    }
















  }

</style>
