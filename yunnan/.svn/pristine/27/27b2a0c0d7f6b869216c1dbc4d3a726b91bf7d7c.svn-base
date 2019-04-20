<template>
  <div class="shareBox">
    <div @click="wxShare('appMessage')" class="coverWx" ref="weixinCover"></div>
    <div @click="wxShare('timeLine')" class="coverWxHotLine" ref="weixinHotLineCover"></div>

  </div>
</template>
<script>
  import soshm from 'soshm'
  import {shareWx} from '../../../utils/js/share'

  export default {
    name: 'Share',
    data () {
      return {}
    },
    props: {
      //用于微信 jsSdk的分享
      wxShareData:{},
    },
    created () {


    },
    mounted () {


    },

    methods: {
      //soshm插件分享
      initShare(shareConfig){
        soshm.popIn({
          // 分享的链接，默认使用location.href
          url: 'http://baidu.com',
          // 分享的标题，默认使用document.title
          title: '"2018年12月1日是第31个世界艾滋病日"',
          // 分享的摘要，默认使用<meta name="description" content="">content的值
          digest: '"今年，我国的宣传主题是：“主动检测，知艾防艾，共享健康。”"',
          // 分享的图片，默认获取本页面第一个img元素的src
          pic: 'https://www.baidu.com/img/baidu_jgylogo3.gif',
          // 默认显示的网站为以下六个个,支持设置的网站有
          sites: ['weixin', 'weixintimeline', 'weibo', 'qq', 'qzone'],
          ...shareConfig
        })
        //覆盖微信、朋友圈图标
        let self = this
        this.$nextTick(function () {
          let element = document.getElementsByClassName('weixin')[0]
          self.$refs['weixinCover'].style.display = 'block'
          self.$refs['weixinHotLineCover'].style.display = 'block'
          element.parentNode.parentNode.appendChild(self.$refs['weixinCover'])
          element.parentNode.parentNode.appendChild(self.$refs['weixinHotLineCover'])

        })
      },
      wxShare (type) {
        //微信分享调用
        shareWx(this.wxShareData,type)
      }
    },

  }
</script>
<style lang="less">
  .soshm-pop-sites {
    position: relative;
  }

  .soshm-pop-show, .soshm-pop-hide {
    transition: .6s;
  }

  .coverWx, .coverWxHotLine {
    position: absolute;
    z-index: 1000;
    height: 62px;
    width: 62px;
    top: 15px;

    display: none;
  }

  .coverWx {
    left: 20px;
  }

  .coverWxHotLine {
    left: 50%;
    transform: translateX(-50%);
  }

  .soshm-group {
    animation: none !important;
  }


</style>

