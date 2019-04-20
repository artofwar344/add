<template>
  <div class="BasicPublicServicesAroundDetalis">
    <myheader :my-header="headerData"></myheader>
    <div class="BasicPublicServicesAroundDetalisContent" id="BasicPublicServicesAroundDetalisContent">
      <div class="EPHMainTop">
        <img :src="datatext.logoImg" alt="">
        <div class="EPHMainTopContent">
          <div class="EPHMainTopContentLeft">
            <h4>{{datatext.name}}</h4>
            <p>{{datatext.distance}} &nbsp; | &nbsp; {{datatext.address}}</p>
          </div>
          <div class="EPHMainTopContentRight" @click="goMap(datatext)">
            <div>
              <img :src="mapUrl" alt="">地图
            </div>
          </div>
        </div>
      </div>
      <div class="EPHMainContent">
        <h3><b>医疗机构信息</b></h3>
        <ul>
          <li>
            开放时间 <span>{{datatext.time}}</span>
          </li>
          <li>
            联系方式 <span>{{datatext.phone}}</span>
          </li>
          <li>
            简介 <span>{{datatext.jianjie}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/header'
import mapUrl from '@/assets/map.png'
import logoImg from '@/assets/EPHDetailsImg.jpg'
import { cenurl } from "../../../../components/toptow.js";

export default {
  data () {
    return {
      headerData: {
        title: '身边的基本公共卫生服务中心详情',
        backUrl: '/BasicPublicServicesAroundQuery'
      },
      mapUrl: mapUrl,
      datatext: {
        name: '滇池社区卫生服务中心',
        juli: '2.3km',
        address: '五华区东寺街114号',
        logoImg: logoImg,
        time: 'xxx-xxx',
        phoneNum: 'xxxxxxx',
        jianjie: '前身是五华区文化馆的图报刊阅览室，1979年1月独立建管。（注：介绍较长时可以下滑看完）'
      },
      // datatext:[],
      params:this.$route.params.datatext,
    }
  },
  created () {
    let _self = this
    // _self.datatext = this.params.data;
    // console.log(_self.datatext)
  },
  mounted () {},
  computed: {},
  components: {
    myheader: Header
  },
  methods: {
    goMap: function (data) {
      let _self = this
      _self.$router.push({
        path: '/BasicPublicServicesAroundMap',
        name: 'BasicPublicServicesAroundMap',
        params: data
      })
    }
  }
}
</script>

<style  scoped>
  html,body{height:100%;}
  .BasicPublicServicesAroundDetalis {
    background: #ccc;
    height:100%;
  }
  .BasicPublicServicesAroundDetalisContent{}
  .EPHMainTop{padding: 0.12rem 0.3rem 0.36rem;margin: 0.16rem 0;background: #fff;}
  .EPHMainTop>img{width:6.78rem;margin-bottom: 0.4rem;}
  .EPHMainTopContent{}
  .EPHMainTopContent:after{content: '';display: block;clear: both;}
  .EPHMainTopContentLeft{float: left;text-align: left;}
  .EPHMainTopContentLeft h4{font-size: 0.32rem;margin-bottom: 0.14rem;}
  .EPHMainTopContentLeft p{color:#9B9B9B;font-size:0.24rem;}
  .EPHMainTopContentRight{float: right;padding:0.2rem 0;right: 0.32rem;cursor: pointer;}
  .EPHMainTopContentRight div{border-left: 1px solid #EAEAEA;padding-left:0.4rem;}
  .EPHMainTopContentRight div img{margin-right: 0.1rem;vertical-align: middle;}
  .EPHMainContent{background: #fff;padding: 0.22rem 0 0.36rem 0;}
  .EPHMainContent h3{text-align: left;border-bottom: 1px solid #ccc;padding: 0 0.32rem  0.16rem 0.4rem;}
  .EPHMainContent h3 b{border-left: 0.06rem solid #257BFF;padding-left: 0.2rem;}
  .EPHMainContent ul{padding: 0 0.32rem 0 0.4rem;}
  .EPHMainContent li{text-align: left;padding: 0.24rem 0;font-size: 0.28rem;color: #999;}
  .EPHMainContent li:after{content: '';display: block;clear: both;}
  .EPHMainContent span{float: right;color: #333;}
  .EPHMainContent li:last-child span{width: 5.88rem}
</style>
