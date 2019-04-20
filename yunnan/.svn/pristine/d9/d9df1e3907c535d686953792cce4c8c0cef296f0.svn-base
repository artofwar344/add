<template>
  <div class="BasicPublicServicesAroundMap">
    <myheader :my-header="headerData"></myheader>
    <div class="BasicPublicServicesAroundMapContent" id="BasicPublicServicesAroundMapContent">
      <div id="map"></div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/header'
// import BMap from 'BMap'

export default {
  data () {
    return {
      headerData: {
        title: '身边的基本公共卫生服务中心地图',
        backUrl: '/BasicPublicServicesAroundQuery'
      },
      params: this.$route.params,
      datatext:{
        longitude:'102.346140',
        latitude : '25.084460',
        unitName : 'fawevasdfawe',
        distance : '25.084460',
        address : "vargawe"
      },
    }
  },
  created () {
    // let _self = this
    // console.log(this)
  },
  mounted () {
    let _self = this
    // this.datatext = this.params.datatext;
    console.log(this.datatext)
    // this.datatext.longitude = '102.346140';
    // this.datatext.latitude = '25.084460';
    // this.datatext.unitName = 'fawevasdfawe';
    // this.datatext.distance = '25.084460';
    // this.datatext.address = "vargawe";
    _self.getMap()
  },
  computed: {},
  components: {
    myheader: Header
  },
  methods: {
    getMap: function () {
      // let _self = this
      try {
        console.log(222)
        let map = new BMap.Map('map')
        var sContent ="<h3 style='font-size:16px;font-weight:bolder'>"+this.datatext.unitName+"</h3>"+"<div><span>"+this.datatext.distance+"m</span><span style='margin-left:10px'>"+ this.datatext.address +"</span><div/>";
        var point = new BMap.Point(this.datatext.longitude,this.datatext.latitude);
        map.centerAndZoom(point, 12);
        var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
        map.openInfoWindow(infoWindow,point); //开启信息窗口
        var marker = new BMap.Marker(new BMap.Point(this.datatext.longitude,this.datatext.latitude))
        map.addOverlay(marker)
 
        
        let anchorBL = document.getElementsByClassName('anchorBL')
        console.log(anchorBL)
        for (let index = 0; index < anchorBL.length; index++) {
            anchorBL[index].style.display = 'none';
        }
      } catch (error) {
        
      }
    }
  }
}
</script>

<style scoped>
  html,body,#app{width:100%;height:100%;}
  .BasicPublicServicesAroundMap {
    background: #ccc;
    height:100%;
  }
  .BasicPublicServicesAroundMapContent{height:calc(100% - 0.9rem); }
  #map{width: 100%;height: 100%;}
</style>
