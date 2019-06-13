<template>
  <div id="hotPointDetail">
    <towtop  name="往期热点详情" customText="分享" @headerEmit="handShare" />
    <div class="currentPoint">
    <div class="current-content">
      <img class="currentPoint-pic" :src="topicImg" alt="">
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
          精选留言 <span>( {{ countComment }} )</span>
        </p>
        <p class="hsgHead-right">
        <p class="hsgHead-right">
          <span @click="getMsgData('isTime')" :class="{'active':timeactive}">按时间</span>
          <span @click="getMsgData('isHot')" :class="{'active':hotactive}">按热度</span>
        </p>
      </div>
      <div class="example-loadmore_wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <Loadmore bottomPullText="上拉加载"  :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
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
                <img :src="item.memheadpic">
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
    </div>
      <!--分享组件-->
      <Share ref="pastHhare" :wxShareData="wxShareData"></Share>
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
  </div>
</template>
<script>
  import Towtop from '../../../components/HederTwo'
  import Share  from './share'
  import {AppReturnToLoginPage} from '../../../utils/CallModule'
  export default {
    name:'hotPointDetail',
    components:{
      Towtop,
      Share,
    },
    data(){
      return{
        topicTitle:'',
        topicContent:"",
        topicImg:'',
        showAllContent:false,
        showAllMsg:false,
        showAllMsgContent:undefined,
        hotactive:true,
        timeactive:true,
        msgListData:[],
        topicId:"",
        list:[],
        countComment:0,
        isFollow:false,
        isHot:true,
        pageNum:'1',
        showNum:'10',
        //  上拉加载
        allLoaded: false,
        bottomStatus: '加载中...',
        wrapperHeight: 0,
        msgOrderBy:'01',
        allpage:'',
        //微信 Jssdk 的分享
        wxShareData:{},
        //soshm 插件分享
        soshmShareData:{},
        allPage:1,
        isNologin:false,


      }
    },

    methods:{
      goLogin(flag){
        if(flag){
          AppReturnToLoginPage()
        }
        this.isNologin = false;
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
        }else{
          this.pageNum =Number(this.pageNum) + 1;
        }
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
            topic_id:this.topicId,
          }
        };
        this.$ajaxRequest("post", "/gsp/fsx06020", setdata,pagejump)
          .then(res => {
            this.countComment = res.hotSpotList.countComment;
            this.allpage = res.txnCommCom.totalPage

            if(!this.imgsrc){
              this.imgsrc=res.hotSpotList.url;
            }
            this.topicId = res.hotSpotList.id;
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
            if(res.hotSpotList.countComment == 0){

              // this.allLoaded = true
            }else{
              console.log('resresresres',res)
              res.hotSpotList.webSite = window.location.href;
              this.topicTitle=res.hotSpotList.topic_title;
              this.allPage = res.txnCommCom.totalPage
              this.topicContent=res.hotSpotList.topic_content;
              //this.imgsrc=res.hotSpotList[0].url;
              // this.hotspot_comment_id=res.hotSpotList.hotspot_comment_id;
              this.hotMescount =res.hotSpotList.length;

              for(var i=0;i<res.hotSpotList.commentList.length;i++){
                let tempOb = {
                  followNum: res.hotSpotList.commentList[i].countPraise,
                  imgsrc:res.hotSpotList.url,
                  name: res.hotSpotList.commentList[i].comment_user_name,
                  text: timestampToTime(res.hotSpotList.commentList[i].comment_time),
                  isFollow:res.hotSpotList.commentList[i].delflag,
                  msgId:res.hotSpotList.commentList[i].comment_user_id,
                  portrait: '',
                  content:res.hotSpotList.commentList[i].comment_content,
                  hotspot_comment_id:res.hotSpotList.commentList[i].id,
                  userIslike:res.hotSpotList.commentList[i].userIslike,

                };
                this.msgListData.push(tempOb);


              }
            }
            //拼接分享参数
            this.wxShareData = {
              title:res.hotSpotList.topic_title,
              desc:res.hotSpotList.topic_content,
              imgUrl:res.hotSpotList.url,
              link: res.hotSpotList.webSite,
            }
            this.soshmShareData={
              // 分享的链接，默认使用location.href
              url: res.hotSpotList.webSite,
              // 分享的标题，默认使用document.title
              title: res.hotSpotList.topic_title,
              // 分享的摘要，默认使用<meta name="description" content="">content的值
              digest: res.hotSpotList.topic_content,
              // 分享的图片，默认获取本页面第一个img元素的src
              pic: res.hotSpotList.url,
              // 默认显示的网站为以下六个个,支持设置的网站有
              sites: ['weixin', 'weixintimeline', 'weibo', 'qq', 'qzone'],
            }
          })
          .catch(error => {
            this.$toast("查询失败！");
          });
      },
      readMore(){
        this.showAllContent = !this.showAllContent;
      },

      handShare(){
        // this.$refs['pastHhare'].initShare(this.soshmShareData)
        this.shareFn();
      },
      shareFn() {
        var href = window.location.href
        console.log(href);
        this.isAndroid_ios(href)
      },
      isAndroid_ios(href) {
        var u = navigator.userAgent, app = navigator.appVersion;
        var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1; //android终端或者uc浏览器器
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        // 如果是ios系统
        if (isiOS) {
          window.webkit.messageHandlers.ShareToThirdAPP.postMessage(href);
        } else {                    //安卓系统
          javascript:android.ShareToThirdAPP(href)
        }
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
              this.$toast("查询失败！");
              console.log(error);
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
              this.$toast("查询失败！");
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
        this.$router.push({name:'LeaveMsg',params:{topicId: JSON.parse(sessionStorage.getItem('hotDetailParams'))['key']['topicId']}})
      },
      handleBottomChange(status) {
        this.bottomStatus = status;
      },
      loadBottom() {
        const self = this;




        // 模拟加载中
        setTimeout(() => {

          if (self.pageNum <= self.allPage) {
            self.getMsgData('loadMore')
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
      //把参数存入session
      let params = this.$route.params
      if(params.key){
        sessionStorage.setItem('hotDetailParams',JSON.stringify(params))
      }else{
        params = JSON.parse(sessionStorage.getItem('hotDetailParams'))
      }
       this.topicTitle = params.key.topicTitle;
       this.topicContent = params.key.topicContent;
       this.topicImg = params.key.topicImg;
       this.list = params.key.menulist;
       this.countComment = params.key.countComment;
       this.topicId=params.key.topicId;

      //上拉加载
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
      this.getMsgData('isTime')
    }

  }
</script>
<style lang="less">
  #hotPointDetail{
    .hui-popupPrompt_text{
      display: none;
    }

    .hui-popupPrompt_btn-cancel{
      color: #00ace6;
    }
    .hui-popupPrompt{
      width: 70%;
    }
    text-align: left;

    background: #fff;
    .current-content{
      padding:0.2rem 0.36rem;
      color: #333;

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
      width: 22px;
      height: 22px;
      margin: 0 auto;
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
    .msgHead{
      font-size: 0.3rem;
      font-weight: bolder;
      color: #333;
      padding:0 0.36rem 0.1rem;
      background: #fff;
      overflow: hidden;
      margin-bottom: 0.1rem;
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
      border-bottom: 1px solid #ccc;
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
      height:100%;
    }
    .example-cell_rightBox{width:60px;}
    .msgHeadIcon{
      border-radius: 50%;
    }
    .hui-cell_inner {
      padding: 0;

    }
    .msgContent{
      letter-spacing: 0.02rem;
      text-indent: .4rem;
      margin: 0.2rem 0.1rem;
      line-height: 0.4rem;
    }
    .msgReadMore{
      text-align: right;
      color: #257BFF;
      padding-bottom: .2rem;
      border-bottom:none;
    }
    .myMsg{
      position: fixed;
      bottom: 1rem;
      right:1rem;
      height: 1.1rem;
      width: 1.1rem;
      background: #257BFF;
      border-radius: 50%;
      font-size: 0.3rem;
      vertical-align: center;
      color: #fff;
      padding-top: 0.1rem;
      box-sizing: border-box;
      text-align: center;
      letter-spacing: 0;
    }
  .active{
    color:blue;
  }

  }

</style>
