<template>
  <div class="socialHotPoint">
    <towtop v-if="isShare" :preRoute="preRoute" name="民生热点大家谈" customText="分享" @headerEmit="handShare" custom-text="..."/>
    <towtop v-else name="民生热点大家谈"/>
    <!--我的留言固定按钮>-->

    <div class="socialHotPoint-btn_box">
      <div class="hotPoint-btn hotPoint-btn_left" @click="noShare(true)" >最新话题</div>
      <div class="hotPoint-btn hotPoint-btn_right" @click="noShare(false)">往期话题</div>
      <div class="fackBorder" :class=" isShare ? 'leftFackBorder' : 'rightFackBorder'"></div>
    </div>
    <CurrentPoint @getShareData="getShareData" v-show='isShare'></CurrentPoint>
    <PastPoint @getShareData="getShareData" v-show='!isShare' ></PastPoint>
    <!--分享组件-->
    <Share ref="share" :wxShareData="wxShareData"></Share>

    <div @click="routerToMymsg" class="myMsg">
      我的<br/>留言
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
  import Towtop from '../../../components/HederTwo'
  import Share from './share'
  import CurrentPoint from './currentPoint'
  import PastPoint from './pastPoint'
  import {AppReturnToLoginPage} from '../../../utils/CallModule'

  export default {
    name: 'socialHotpoint',
    components: {
      Towtop,
      Share,
      CurrentPoint,
      PastPoint,
    },
    data () {
      return {
        isNologin:false,
        hide: false,
        isShare: true,
        //微信 Jssdk 的分享
        wxShareData: {},
        //soshm 插件分享
        soshmShareData: {},
        //前路由
        preRoute:'',
      }
    },
    created () {

    },
    methods: {
      goLogin(flag){
        if(flag){
          //跳转到APP
          AppReturnToLoginPage()
        }
        this.isNologin = false;
      },
      //从当前热点详情页面和往期热点详情页面获取分享页面的参数
      getShareData (data) {
        this.wxShareData = {
          title: data.topic_title,
          desc: data.topic_content,
          imgUrl: data.url,
          link: data.webSite,
        }
        this.soshmShareData = {
          // 分享的链接，默认使用location.href
          url: data.webSite,
          // 分享的标题，默认使用document.title
          title: data.topic_title,
          // 分享的摘要，默认使用<meta name="description" content="">content的值
          digest: data.topic_content,
          // 分享的图片，默认获取本页面第一个img元素的src
          pic: data.url,
          // 默认显示的网站为以下六个个,支持设置的网站有
          sites: ['weixin', 'weixintimeline', 'weibo', 'qq', 'qzone'],
        }
      },
      cancle () {
        this.hide = false
      },
      handShare () {
        // this.$refs['share'].initShare(this.soshmShareData)
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
          javascript:android.ShareToThirdAPP(href);
        }
      },
      noShare (flag) {
        this.isShare = flag
      },
      routerToMymsg () {
        //判断用户登录状态
        if(window.sessionStorage.getItem("usertoken") =='null'){
          this.isNologin = true;
          return
        }
        this.$router.push({name: 'MyMsg'})
      },

    }

  }
</script>
<style  lang="less">
  .socialHotPoint {
    .hui-popupPrompt_btn-cancel{
      color: #00ace6;
    }
    .hui-popupPrompt_text{
      display: none;
    }
    .hui-popupPrompt{
      width: 70%;
    }
    background: #F5F5F5;
    .hotPoint-btn {
      color: #999999;
      font-size: 0.3rem;
      display: block;
      width: 50%;
      text-align: center;
    }
    .share {
      position: absolute;
      top: 18px;
      right: 12px;
    }
    .cover {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      z-index: 2;
      opacity: 0.6;
    }
    .blackover {
      width: 100%;
      height: 8rem;
      background: rgb(128, 128, 128);
    }
    .sharecontent {
      background: #ffffff;
      height: 6rem;
    }
    .socialHotPoint-btn_box {
      margin-bottom: .01rem;
      overflow: hidden;
      height: 1rem;
      line-height: 1rem;
      background: #fff;
      position: relative;
      .leftFackBorder {
        left: 25%;
        transform: translate(-50%, -50%);
      }
      .rightFackBorder {
        right: 25%;
        transform: translate(50%, -50%);
      }
    }
    .hotPoint-btn_left {
      float: left;
    }
    .hotPoint-btn_right {
      float: right;
    }
    .router-link-exact-active {
      color: #2D7FFC;
      font-weight: bolder;
    }
    .fackBorder {
      position: absolute;
      width: 1rem;
      background: #257BFF;
      height: 0.05rem;
      border-radius: 0.04rem;
      bottom: 0.11rem;
      transition: all 0.3s;
    }
    .cancle {
      height: 0.6rem;
      padding: 3.2rem 0;
      line-height: 0.6rem;
    }
    .myMsg {
      position: fixed;
      bottom: 1rem;
      right: 1rem;
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
      z-index: 9998;
    }
  }

</style>
