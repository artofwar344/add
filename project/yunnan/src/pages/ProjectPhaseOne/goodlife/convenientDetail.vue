<template>
  <div class="focus-page">
    <towtop :name="titlename"/>
    <div class="box topic">
      <div class="header">
        <div class="left">
          <div class="imgdiv">
            <img
              :src="pageValue.publish_user_avator +'&C-Dynamic-Password-Foruser='+ token"
              style="width: .8rem"/>
          </div>
          <div class="username" style="float: left">
            <div class="top">{{pageValue.publish_user_name}}</div>
            <div class="bottom">{{pageValue.publishTime}}</div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="word">
          {{pageValue.content}}
        </div>
        <div class="photo clearfix">
          <div class="imgSpandiv" v-for="imgItem in ContentUrlList"
               :style="{width: Math.floor((1/ContentUrlList.length)*100)>33?Math.floor((1/ContentUrlList.length)*100)+'%':'33%'}">
            <span class="imgSpan"
                  :style="{backgroundImage:'url('+imgItem+'&C-Dynamic-Password-Foruser='+token+')'}"
                  @click="showBig(imgItem+'&C-Dynamic-Password-Foruser='+token)"></span>
          </div>
        </div>
        <div class="tips">
          <span class="tip" v-for="item in tipsList">{{item}}</span>
        </div>
      </div>
      <div class="footer">
        <div class="shareBox" @click="shareFn">
          <img src="../../../assets/images/goodlife/share.png" class="shareImg">
          <span class="shareFont">分享</span>
        </div>
        <div class="praiseBox" @click="praise()">
          <div class="imgdiv">
            <img v-show="isPraise" src="../../../assets/images/goodlife/goodC@3x.png"
                 style="width:.4rem" alt="点赞"/>
            <img v-show="!isPraise" src="../../../assets/images/goodlife/good@3x.png"
                 style="width:.4rem" alt="点赞"/>
          </div>
          <div class="good" :class="{isRedPraise:isPraise}">
            {{pageValue.countPraise}}
          </div>
        </div>
      </div>
    </div>
    <div class="box comment">
      <div class="header">
        <div class="imgdiv">
          <img src="../../../assets/images/goodlife/comment@3x.png" alt="用户评论">
        </div>
        <div class="total">
          {{commentList.length}}
        </div>
      </div>
      <div class="repeat" v-for="item in commentList">
        <div class="icon">
          <img :src="item.comment_user_pic+'&C-Dynamic-Password-Foruser='+token" style="width:.8rem;">
        </div>
        <div class="content">
          <div class="top">
            <div class="username">
              {{item.comment_user_name}}
            </div>
            <div class="date">
              {{calDate(item.comment_time)}}
            </div>
          </div>
          <div class="word">
            {{item.comment_content}}
          </div>
        </div>
      </div>
      <div v-show="commentList.length ===0" class="noneComments">还没有评论...</div>
      <div class="myrepeat">
        <div class="left">
          <input maxlength="140" type="text" placeholder="我也来说两句..." v-model="repeatMessage">
        </div>
        <div class="right">
          <img v-if="repeatMessage.trim() === ''" src="../../../assets/images/goodlife/comment@3x.png" alt="发送">
          <button v-else class="sendBtn" @click="sendRepeat()">发送</button>
        </div>
      </div>
    </div>
    <div @click="showBig()" class="bigBox" v-show="showBigImg !=''">
      <img class="bigImg" :src="showBigImg">
    </div>
  </div>
</template>

<script>
  import towtop from '../../../components/HederTwo'

  export default {
    data() {
      return {
        titlename: '失物招领',
        dataList: [],
        input: "",
        res_data: [],
        type: 0,
        id: this.$route.query.id,
        pageValue: {},
        repeatMessage: "",
        userId: "",
        username: "",
        showBigImg: "",
        token: "",
        commentList: [],
        ContentUrlList: [],
        tipsList: [],
        isPraise: false
      }
    },
    components: {
      towtop
    },
    computed: {},
    mounted() {
      //9dd2554f7fa94d1fa232d1c2e771acdf id
      //c8682c96dec24c9fa14ba725a66e57aa id
      //5482c81fa62b42fcb8b8e8d39c7d8657 token
      this.id = this.$route.query.id
      this.userId = this.$route.query.userid
      this.username = this.$route.query.username
      this.token = this.$route.query.token
      if (this.username && this.username.indexOf('%') > -1) {
        this.username = decodeURIComponent(this.username)
      }
      // -- 初始化查詢
      let convenientQuery = {
        txnCommCom: {},
        txnBodyCom: {
          id: this.id
        }
      }
      this.$ajaxRequest('post', '/gsp/fsx06008', convenientQuery)
        .then(res => {
          console.log(res,'获取随手拍评论数据');
          if (res.convenientlyDo.url) {
            res.convenientlyDo.url.split(',').map((v)=>{
              this.ContentUrlList.push(v)
            })
          }
          this.pageValue = res.convenientlyDo;         // 内容部分
          this.isPraise = this.pageValue.isLike === '1';// 点赞部分
          this.commentList = res.zmhdConvenientlyCommentList;   // 评论部分
          if(res.convenientlyDo.category_id){
            let category_id = res.convenientlyDo.category_id.split(',')//标签部分
            //猫 狗 人 钥匙 身份证 手机数码 日用百货 交通工具 其他
            category_id.map((v) => {
              if (v === '01') {
                this.tipsList.push('猫')
              } else if (v === '02') {
                this.tipsList.push('狗')
              } else if (v === '03') {
                this.tipsList.push('人')
              } else if (v === '04') {
                this.tipsList.push('钥匙')
              } else if (v === '05') {
                this.tipsList.push('身份证')
              } else if (v === '06') {
                this.tipsList.push('手机数码')
              } else if (v === '07') {
                this.tipsList.push('日用百货')
              } else if (v === '08') {
                this.tipsList.push('交通工具')
              } else if (v === '09') {
                this.tipsList.push('其他')
              }
            })
          }
          res = res.convenientlyDo;
          let date = new Date(parseInt(res.publish_time));     // 转时间格式
          this.pageValue.publishTime = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        })
        .catch(error => {
          console.log(error)
        })
    },
    methods: {
      ajaxWapper(url, query, callback) {
        this.$ajaxRequest("post", url, query, 'null', callback);
      },
      calDate(time) {
        try {
          let date = new Date(JSON.parse(parseInt(time)));
          return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        } catch (e) {
          console.error(e);
        }
      },
      // 点赞
      praise() {
        if (this.isPraise) { // 如果点赞则取消点赞
          let praiseQuery = {
            txnCommCom: {
              tStsTraceId: "110567890",
              txnIttChnlId: 'C0011234567890987654321',
              txnIttChnCgyCode: "99999999"
            },
            txnBodyCom: {
              conveniently_id: this.id,
              user_id: this.userId,
              del_flag: "00"
            }
          };
          this.ajaxWapper("/gsp/fsx06006", praiseQuery,
            (res) => {
              console.log('--', res);
              this.isPraise = false;
              this.pageValue.countPraise--;
            }
          );
        } else {
          let praiseQuery = {
            txnCommCom: {},
            txnBodyCom: {
              user_id: this.userId,
              user_name: this.username,
              del_flag: "01",
              conveniently_id: this.id
            }
          };
          this.ajaxWapper("/gsp/fsx06012", praiseQuery,
            (res) => {
              console.log('++', res);
              this.pageValue.countPraise++;
            }
          );
          this.isPraise = true;
        }
      },
      // 发送回复
      sendRepeat() {
        if (!this.repeatMessage.trim()) {
          return;
        }
        let repeatRequest = {   // 评论报文
          txnCommCom: {},
          txnBodyCom: {
            reply_id: "",
            flag: "00",
            comment_user_id: this.userId,
            comment_user_name: this.username,
            comment_content: this.repeatMessage,
            conveniently_id: this.id
          }
        }
        this.$ajaxRequest('post', '/gsp/fsx06003', repeatRequest)
          .then(res => {
            console.log(res);
            this.commentList.unshift({
              comment_time: new Date().getTime(),
              comment_user_name: this.username,
              comment_content: this.repeatMessage,
              comment_user_pic: res.headpic
            });
            this.repeatMessage = "";
          })
          .catch(error => {
            console.log(error)
          })
      },
      //展示大图
      showBig(imgItem) {
        console.log(imgItem);
        if (imgItem) {
          this.showBigImg = imgItem
        } else {
          this.showBigImg = ''
        }
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
      }
    }
  }
</script>

<style lang="less" scoped>
  .box {
    background: #fff;
    padding: 0.28rem 00.28rem 0.28rem 0.28rem;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .comment {
    padding: 0;
    .myrepeat {
      background: #FFFFFF;
      box-shadow: 0 -4px 8px 0 rgba(0, 0, 0, 0.06);
      padding: .3rem 0;
      width: 100%;
      /*height: .7rem;*/
      .left {
        float: left;
        width: 85%;
        border-right: 1px solid #E0E0E0;
        input {
          border: 0;
          width: 100%;
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #9B9B9B;
          letter-spacing: 0.17px;
          margin-left: .4rem;
        }
      }
      .right {
        float: left;
        width: 14%;
        img {
          width: .36rem;
        }
      }
    }
    .repeat {
      width: 100%;
      margin-top: .3rem;
      .icon {
        float: left;
        /*margin: .3rem .2rem .2rem .1rem;*/
        width: 16%;
      }
      .content {
        float: left;
        border-bottom: 1px solid #F1F3F6;
        width: 83%;
        text-align: left;
        .top {
          .username {
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #333333;
            letter-spacing: 0.17px;
          }
          .date {
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #999999;
            letter-spacing: 0.14px;
          }
        }
        .word {
          margin-top: .2rem;
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #333333;
          letter-spacing: 0.17px;
          padding-bottom: .3rem;
        }
      }
    }
    .header {
      width: 100%;
      border-bottom: 1px solid #F1F3F6;
      padding: .3rem;
      .imgdiv {
        float: left;
        margin: .06rem;
        img {
          width: .32rem;
        }
      }
      .total {
        float: left;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #6F6F6F;
      }
    }
  }

  .topic {
    .header {
      height: .8rem;
      width: 100%;
      .left {
        float: left;
        .imgdiv {
          float: left;
        }
        .username {
          float: left;
          margin-left: .2rem;
          .top {
            line-height: .4rem;
            text-align: left;
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #333333;
            letter-spacing: 0.17px;
          }
          .bottom {
            line-height: .4rem;
            text-align: left;
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #999999;
            letter-spacing: 0.14px;
          }
        }
      }
      .right {
        float: right;
        .good {
          float: right;
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #9B9B9B;
          letter-spacing: 0.17px;
        }
        .imgdiv {
          float: right;
          margin-right: .15rem;
        }
      }
    }
    .content {
      .word {
        text-align: left;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #333333;
        letter-spacing: 0.17px;
        margin: .2rem auto;
      }
      .photo {
        /*background-color: red;*/
        .imgdiv {
          float: left;
          img {
            width: 2rem;
          }
        }
      }
    }
    .footer {
      border-top: 1px solid #F1F3F6;
      height: 1rem;
      width: 100%;
      text-align: right;
      padding-top: .4rem;
      .word {
        margin-left: .8rem;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #9B9B9B;
        letter-spacing: 0.12px;
        text-align: center;
        height: .6rem;
        line-height: .6rem;
      }
      .imgdiv {
        img {
          width: .6rem;
        }
      }
    }
  }

  .sendBtn {
    border: none;
    background: #fff;
    font-size: 14px;
    padding: 0 6px;
  }

  .noneComments {
    line-height: 4;
    font-size: 16px;
    color: #888;
    text-align: center;
    width: 100%;
  }

  .bigBox {
    width: 100vw;
    height: 100vh;
    line-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .3);
    z-index: 66;
    overflow: auto;
  }

  .bigBox .bigImg {
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
    -webkit-transform: scale(1) translate(0,0);
    -moz-transform: scale(1) translate(0,0);
    transform: scale(1) translate(0,0);
    visibility: visible;
    -webkit-transition: .2s;
    -moz-transition: .2s;
    transition: .2s;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  .focus-page input {
    height: auto;
  }

  .isRedPraise {
    color: #F03 !important;
  }

  .shareBtn {
    font-size: 14px;
    height: 0.6rem;
    margin-right: 16px;
  }

  .topic .footer .praiseBox, .topic .footer .shareBox {
    margin: 0;
    width: 49%;
    display: inline-block;
    text-align: center;
  }

  .shareBox {
    border-right: 1px solid #ccc;
  }

  .shareImg {
    width: 20px;
    height: 20px;
  }

  .shareFont, .good {
    color: #777;
  }

  .shareImg, .shareFont, .praiseBox .good, .praiseBox .imgdiv {
    vertical-align: middle;
    display: inline-block;
  }

  .tip {
    display: inline-block;
    padding: 2px 10px;
    border: 1px solid deepskyblue;
    border-radius: 4px;
    margin-right: 14px;
    color: #666;
    margin-bottom: 10px;
  }

  .tips {
    display: block;
    padding: 10px 0;
    text-align: left;
  }
  .clearfix:after, .clearfix:before{
    display: table;
    content: " ";
    clear: both;
  }
  .imgSpandiv{
    position: relative;
    float: left;
    width: 33.3333%;
    padding: 0;
    margin: 0;
    border-width: 0 0 1px 1px;
    border-style: solid;
    border-color: transparent;
    box-sizing: border-box
  }
  .imgSpan{
    width: 100%;
    padding-top: 100%;
    position: relative;
    display: block;
    background-position: 50% 50%;
    background-size: cover;
  }
  .content{
    width: 100%;
  }
</style>

