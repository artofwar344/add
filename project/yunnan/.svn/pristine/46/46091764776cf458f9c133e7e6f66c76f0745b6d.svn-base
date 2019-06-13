<template>
  <div class="essentialPublicHealthMap">
    <myheader :my-header="headerData"></myheader>
    <div class="essentialPublicHealthMapContent" id="essentialPublicHealthMapContent">
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
        title: '国家基本公共卫生服务项目地图',
        backUrl: '/essentialPublicHealthDetalis'
      },
      params: this.$route.params
    }
  },
  created () {
    // let _self = this
    // console.log(this)
  },
  mounted () {
    let _self = this
    // _self.getMap()
  },
  computed: {},
  components: {
    myheader: Header
  },
  methods: {
    // getMap: function () {
    //   // let _self = this
    //   let map = new BMap.Map('map')
    //   // let keyword = `云南省昆明市${_self.params.address}`
    //   let keyword = '云南省昆明市呈贡区雨花街道春融西路1168号'
    //   console.log(keyword)
    //   let local = new BMap.LocalSearch(map, {
    //     renderOptions: {map: map},
    //     pageCapacity: 1
    //   })
    //   local.setSearchCompleteCallback(function (searchResult) {
    //     map.clearOverlays()
    //     var poi = searchResult.getPoi(0)
    //     map.centerAndZoom(poi.point, 13)
    //     var marker = new BMap.Marker(new BMap.Point(poi.point.lng, poi.point.lat))
    //     map.addOverlay(marker)
    //     // marker.setAnimation(BMAP_ANIMATION_BOUNCE)
    //   })
    //   local.search(keyword)
    // }
  }
}
</script>

<style scoped>
  html,body,#app{height:100%;}
  .essentialPublicHealthMap {
    background: #ccc;
    height:100%;
  }
  .essentialPublicHealthMapContent{height:calc(100% - 0.9rem); }
  #map{width: 100%;height: 100%;}
</style>
