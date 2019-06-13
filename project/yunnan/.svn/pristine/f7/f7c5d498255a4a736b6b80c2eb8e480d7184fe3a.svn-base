<template>
  <div class="essentialPublicHealthDetalis">
    <myheader :my-header="headerData"></myheader>
    <!--轮播图-->
    <mt-swipe v-if="itemData.Venue_Image.length" style="height: 3rem;border-radius: 0.2rem">
      <mt-swipe-item v-for="(item,index) in (itemData.Venue_Image.split(','))">
        <img :src="item">
      </mt-swipe-item>
    </mt-swipe>
    <img style="height: 3rem;border-radius: 0.2rem" v-else src="../../../../static/image-mapIcon/searchDefault.png">
    <div class="essentialPublicHealthDetalisContent" id="essentialPublicHealthDetalisContent">
      <div class="EPHMainTop">
        <div class="EPHMainTopContent">
          <div class="EPHMainTopContentLeft">
            <h4>{{itemData.Venue_Name}}</h4>
            <p>{{ Number(this.$route.params.DISTANCE).toFixed(2)}}km &nbsp; | &nbsp; {{itemData.Venue_Address}}</p>
          </div>
        </div>
      </div>
      <div class="EPHMainContent">
        <h3><b class="mainContent-title">详细信息</b></h3>
        <ul>
          <li v-show="itemData.Work_Time" class="mainContent-label">
            <b>开放时间</b> <span>{{itemData.Work_Time}}</span>
          </li>
          <li  v-show="itemData.Venue_Tel">
            <b class="mainContent-label">联系方式</b> <span>{{itemData.Venue_Tel}}</span>
          </li>
          <li v-show="itemData.Free_Time">
            <b  class="mainContent-label">免费开放场馆及时间</b> <span>{{ itemData.Free_Time  }}</span>
          </li>
          <li v-show="itemData.Venue_Line">
            <b class="mainContent-label">乘车路线</b> <span>{{itemData.Venue_Line}}</span>
          </li>
          <li>
            <b class="mainContent-label">停车场</b> <span>{{itemData.Parklot_Flag == '00' ? '是':'否'}}</span>
          </li>
          <li v-show="itemData.Provide_Service">
            <b class="mainContent-label">场馆服务</b> <span style="width: 5.2rem;">{{itemData.Provide_Service}}</span>
          </li>
          <li v-show="itemData.Venue_Introduce">
            <b class="mainContent-label">简介</b> <span>{{itemData.Venue_Introduce}} </span>
          </li>
        </ul>
      </div>
    </div>
    <!--底部固定按钮-->
    <div class="buttonBox">
      <p @click="oppenMap" class="bottom-btn btn-map"><a>导航</a></p>
      <p @click="dailPhone" class="bottom-btn btn-budge">咨询</p>
      <p></p>
    </div>
    <Popupprompt
      v-model="dlAppProp"
      title="是否已安装百度地图APP ?"
      content=""
      :confirm-btn='{id: true,text: "已安装"}'
      :cancel-btn='{id: false,text: "去下载"}'
      @click="clickBtn"
    >
    </Popupprompt>
    <div class="phonePropBox">
      <Popupprompt
        v-model="telProp"
        title="点击拨打电话"
        :confirm-btn='{id: true,text: ""}'
        :cancel-btn='{id: false,text: ""}'
      >
        <div slot="othercontent">
          <p v-for="(item,index) in phoneList">
            <a @click="ModuleDailPhone(item.num)">
              <span class="phoneNumber">{{ item.title }}</span>:
              <span class="phoneNumber">{{ item.num }}</span>
            </a>
          </p>
        </div>
      </Popupprompt>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/header/header'
  import logoImg from '../../../../static/image-mapIcon/searchDefault.png'
  import {itemDetailSearch} from '../../../utils/fetch/mapSearch'

  let u = navigator.userAgent
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
  export default {
    components: {
      myheader: Header
    },
    data () {
      return {
        popOpenSetTimeOut: '',
        telProp: false,
        phoneList: [],
        headerData: {
          title: this.$route.params['VENUE_NAME'],
        },

        baiduMapAd:'baidumap://map/direction?origin=name:对外经贸大学|latlng:39.98871,116.43234&destination=西直门&mode=transit&sy=3&index=0&target=1&src=andr.baidu.openAPIdemo',
        baiduMapIos:'baidumap://map/direction?origin=34.264642646862,108.95108518068&destination=40.007623,116.360582&mode=driving&src=ios.baidu.openAPIdemo',
        dlAppProp: false, //下载高德地图app弹窗
        itemData: {
          name: '滇池社区卫生服务中心',
          juli: '2.3km',
          address: '五华区东寺街114号',
          logoImg: logoImg,
          time: 'xxx-xxx',
          phoneNum: 'xxxxxxx',
          jianjie: '前身是五华区文化馆的图报刊阅览室，1979年1月独立建管。（注：介绍较长时可以下滑看完）',
          Venue_Image: '',
        }
      }
    },
    created () {
      itemDetailSearch(this.$route.params.ID, this.reciveDetailData, this)
    },
    computed: {},
    methods: {
      ModuleDailPhone (num) {
        this.telProp = false
        this.$CallModule('phone', num)
      },
      reciveDetailData (data) {
        this.itemData = JSON.parse(data['C-Response-Body'])
        //联系方式
        let phoneArr = this.itemData.Venue_Tel.split('，')
        if (phoneArr.length == 2) {
          this.phoneList.push({title: phoneArr[0].slice(-5), num: phoneArr[0].slice(0, -5)})
          this.phoneList.push({title: phoneArr[1].slice(-5), num: phoneArr[1].slice(0, -5)})
          this.phoneNum = phoneArr[0].slice(0, -5)
        } else {
          this.phoneList.push({title: '电话', num: phoneArr[0]})
          this.phoneNum = phoneArr[0]
        }
      },
      oppenMap () {
        this.dlAppProp = true
      },
      clickBtn (flag) {
        const isYNT = window.sessionStorage.getItem("CHNL_ID") === 'CC03C004'
        // this.$route.params['VENUE_NAME'] = '海埂大坝';
        if (flag) {   //已安装打开APP
          if (isAndroid) { //安卓打开APP
            if (isYNT) {
              PJF.client.openBrowser('baidumap://map/direction?origin=' + encodeURIComponent('我的位置') + '&destination=' + encodeURIComponent(this.$route.params['VENUE_NAME']) + '&mode=driving&src=ios.baidu.openAPIdemo')
            } else {
              window.location.href = 'baidumap://map/direction?origin=我的位置&destination='+ this.$route.params['VENUE_NAME']+'&mode=driving&sy=3&index=0&target=1&src=andr.baidu.openAPIdemo';
            }
            // window.location.href = 'baidumap://map/direction?origin=name:对外经贸大学&destination=西直门&mode=transit&sy=3&index=0&target=1&src=andr.baidu.openAPIdemo';

          } else {  //ios APP
            if (isYNT) {
              PJF.client.openBrowser('baidumap://map/direction?origin=' + encodeURIComponent('我的位置') + '&destination=' + encodeURIComponent(this.$route.params['VENUE_NAME']) + '&mode=driving&src=ios.baidu.openAPIdemo')
            } else {
              window.location.href =  'baidumap://map/direction?origin=我的位置&destination=' + this.$route.params['VENUE_NAME'] + '&mode=driving&src=ios.baidu.openAPIdemo'
            }
            // window.location.href = 'baidumap://map/direction?origin=name:我的位置&destination=西直门&mode=driving&src=ios.baidu.openAPIdemo';

          }
        } else { //未安装跳转到下载页面
          if (isAndroid) {
            if (isYNT) {
              PJF.client.openBrowser('http://map-mobile-lbsapp.cdn.bcebos.com/map/BaiduMaps_Android_10-12-0-1_1009176a.apk')
            } else {
              window.location.href = 'http://map-mobile-lbsapp.cdn.bcebos.com/map/BaiduMaps_Android_10-12-0-1_1009176a.apk'
            }
          } else {
            window.location.href = 'https://itunes.apple.com/cn/app/%E7%99%BE%E5%BA%A6%E5%9C%B0%E5%9B%BE-%E7%A7%91%E6%8A%80%E8%AE%A9%E5%87%BA%E8%A1%8C%E6%9B%B4%E7%AE%80%E5%8D%95/id452186370?mt=8'
          }
        }
        this.dlAppProp = false

      },
      dailPhone () {
        this.telProp = true
      },
      closeProp () {
        this.telProp = false
      }

    }
  }
</script>

<style lang="less">
  .essentialPublicHealthDetalis {
    background: #ccc;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
    .EPHMainTop {
      padding: 0.12rem 0.3rem 0.36rem;
      margin: 0.16rem 0;
      background: #fff;
    }
    .EPHMainTop > img {
      width: 100%;
      margin-bottom: 0.4rem;
      border-radius: 0.2rem;
    }
    .EPHMainTopContent:after {
      content: '';
      display: block;
      clear: both;
    }
    .EPHMainTopContentLeft {
      float: left;
      text-align: left;
    }
    .EPHMainTopContentLeft h4 {
      font-size: 0.4rem;
      margin-bottom: 0.14rem;
    }
    .EPHMainTopContentLeft p {
      color: #9B9B9B;
      font-size: 0.24rem;
    }
    .EPHMainTopContentRight div {
      border-left: 1px solid #EAEAEA;
      padding-left: 0.4rem;
    }
    .EPHMainTopContentRight div img {
      margin-right: 0.1rem;
      vertical-align: middle;
    }
    .EPHMainContent {
      background: #fff;
      padding: 0.22rem 0 1.26rem 0;
    }
    .EPHMainContent h3 {
      text-align: left;
      border-bottom: 1px solid #ccc;
      padding: 0 0.32rem 0.16rem 0.4rem;
    }
    .EPHMainContent h3 b {
      border-left: 0.06rem solid #257BFF;
      padding-left: 0.2rem;
    }
    .EPHMainContent ul {
      padding: 0 0.32rem 0 0.4rem;
    }
    .EPHMainContent li {
      text-align: left;
      padding: 0.24rem 0;
      font-size: 0.3rem;
      color: #999;
    }
    .EPHMainContent li:after {
      content: '';
      display: block;
      clear: both;
    }
    .EPHMainContent span {
      float: right;
      color: #333;
    }
    .EPHMainContent li:last-child span {
      width: 5.2rem
    }
    .mainContent-title {
      font-size: 0.32rem;
    }
    .bottom-btn {
      height: 0.9rem;
      line-height: 0.9rem;
      background: #2D7FFC;
      color: #fff;
      font-size: 0.32rem;
      border-radius: 0.5rem;
      width: 50%;

    }
    .btn-map {
      float: left;
      background: #1CA405;

    }
    .buttonBox {
      position: fixed;
      width: 100%;
      left: 0;
      bottom: 0;
      background: #ccc;
      a {
        color: #fff;
        font-size: 0.32rem;
      }
    }
    .btn-budge {
      float: right;
      background: #257BFF;

    }
    .phonePropBox {
      .hui-popupPrompt_btnHorizon {
        display: none;
      }
    }
    .phoneNumber {
      line-height: 0.5rem;
      font-size: 0.3rem;
      margin: 0 0.1rem;

    }

  }


</style>
