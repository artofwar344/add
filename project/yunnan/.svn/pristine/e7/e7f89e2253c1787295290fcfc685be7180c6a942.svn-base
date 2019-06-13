<template>
  <div class="mapAndList">
    <div class="mapAndList-box">
      <towtop class="common-header"
              @headerEmit="this.HeaderEmit"
              :name="title"
              custom-text="列表"/>
      <div :style="{'height':commonHeadHeight + 'px'}"></div>
      <!--地图展示-->
      <div id="bdmapContainer" class="mapBox" :style="{'height':mapContentHeight}"></div>
      <!--定位按钮-->
      <img @click="gpsPosition" class="positionIcon"
           src="../../../../static/image-mapIcon/positionIcon.png" alt="">
      <!--收缩按钮-->
      <transition name="adc">
        <div v-show="marginLeft == '-40%'" @click="HeaderEmit" class="closeListButton"> ＞</div>
      </transition>
      <!--查询块-->
      <div class="serchBox itemListBox" :style="{'marginLeft':marginLeft}">
        <div class="itemListBox-buttonBox">
          <button :style="{'background': cityIsActive}" @click="openProp('selectCity')"
                  class="itemListBox-button button-city"> {{ cityName.length <= 4 ? cityName : (cityName.substring(0,3)
            + '..')}}
          </button>
          <button @click="gpsPosition" :style="{'background': nearByIsActive}"
                  class="itemListBox-button button-type nearBy">附近
          </button>
          <button v-if="showType" @click="openProp('selectType')" class="itemListBox-button button-type">类型</button>
          <button @click="HeaderEmit" class="closeList itemListBox-button"> <</button>
        </div>
        <form>
          <Field :disable-clear="false" desc-class="richText" type="text" placeholder="请输入" v-model="paramObj.keyword">
            <slot>
              <div @click="keyWordSearch" class="field-append_text">
                <Icon type="search" size="16" color="#999999"></Icon>
              </div>
            </slot>
          </Field>
        </form>
      </div>
      <div class="itemListBox" id="itemListBox" :style="{'height':mapContentHeight,'marginLeft':marginLeft}">
        <div style="height: 2.2rem"></div>
        <!--列表展示--><!--上拉加载-->
        <Loadmore bottomPullText="上拉加载" v-if="gpsData" :bottom-method="loadBottom"
                  @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
          <ul class="example-loadmore_list">
            <div @click="handleClick(item,index,$event)" v-for="(item,index) in itemListData" :key="index"
                 class="listContent">
              <Cell
                show-right
                show-left
                show-text
                is-link
                :title="item.VENUE_NAME"
                is-title-cut1
                left-box-class="example-cell_portrait-wrapper">
                <div slot="leftCont" class="listContent-icon">
                  <img :src='"../../../../static/image-mapIcon/mapIcon"+item.VENUE_TYPE+".png"'>
                </div>
              </Cell>
              <p class="listContent-phone noborder"><span class="listContent-subtitle">距离  :  </span>{{
                Number(item.DISTANCE).toFixed(2) }} km</p>
              <p class="listContent-address"><span class="listContent-subtitle">地址  :  </span>查看详情</p>
              <p class="listContent-phone"><span class="listContent-subtitle">电话  :  </span>{{ item.VENUE_TEL }}</p>
            </div>
          </ul>
        </Loadmore>
      </div>
    </div>
    <!--一级选择 类型-->
    <HuiselectNew
      ref="typeSelect"
      position="bottom"
      :dataslots="selectDataType"
      class="example-select_item"
      @confirms="selectConfirmCity"
      @reset="resetCity('type')"
    ></HuiselectNew>
    <!--二级选择 其他州市-->
    <HuiselectNew
      ref="citySelect"
      position="bottom"
      :dataslots="selectCityValu"
      :visible-item-count="5"
      class="example-select_item"
      @confirms="selectConfirmCity"
      @reset="resetCity('city')"
    >
    </HuiselectNew>
  </div>
</template>
<script>
  import mapIcon00 from '../../../../static/image-mapIcon/mapIcon00.png'
  import mapIcon01 from '../../../../static/image-mapIcon/mapIcon01.png'
  import mapIcon02 from '../../../../static/image-mapIcon/mapIcon02.png'
  import mapIcon03 from '../../../../static/image-mapIcon/mapIcon03.png'
  import mapIcon04 from '../../../../static/image-mapIcon/mapIcon04.png'
  import mapIcon05 from '../../../../static/image-mapIcon/mapIcon05.png'
  import mapIcon06 from '../../../../static/image-mapIcon/mapIcon06.png'
  import mapIcon07 from '../../../../static/image-mapIcon/mapIcon07.png'
  import mapIcon08 from '../../../../static/image-mapIcon/mapIcon08.png'
  import mapIcon09 from '../../../../static/image-mapIcon/mapIcon09.png'
  import bdMap from '../../../../static/js/baiduMap_init'

  let cityData = selectCity('云南省').city
  import Towtop from '../../../components/HederTwo'
  import {selectCity, getareaCode} from '../../../../static/js/selectProvince'
  import {getMapItemList, bd_encrypt} from '../../../utils/fetch/mapSearch'

  var fackData1 = '{"C-Response-Desc":"success","C-API-Status":"00","C-Response-Body":"{\\"list\\":[{\\"VENUE_TYPE\\":\\"03\\",\\"VENUE_TEL\\":\\"0871-64311591\\",\\"DISTANCE\\":1.29,\\"VENUE_NAME\\":\\"昆明海埂体育训练基地\\",\\"VENUE_LATITUDE\\":\\"N24°57′55.02″ \\",\\"LON\\":102.67545833,\\"ID\\":\\"7AB1CFD301D65939E0530ADDC4807357\\",\\"VENUE_LONGITUDE\\":\\"E102°40′31.65″\\",\\"LAT\\":24.96528333,\\"VENUE_ADDRESS\\":\\"中国云南省昆明市西山区湖滨路57号\\",\\"ROWNUM_\\":1},{\\"VENUE_TYPE\\":\\"03\\",\\"VENUE_TEL\\":\\"0871-64328888\\",\\"DISTANCE\\":1.44,\\"VENUE_NAME\\":\\"云南红塔体育中心\\",\\"VENUE_LATITUDE\\":\\"N24°58′31.86″\\",\\"LON\\":102.6515,\\"ID\\":\\"7AB1CFD301DE5939E0530ADDC4807357\\",\\"VENUE_LONGITUDE\\":\\"E102°39′5.40″\\",\\"LAT\\":24.97551667,\\"VENUE_ADDRESS\\":\\"云南省昆明市滇池国家旅游度假区红塔西路15号\\",\\"ROWNUM_\\":2},{\\"VENUE_TYPE\\":\\"00\\",\\"VENUE_TEL\\":\\"87168093837\\",\\"DISTANCE\\":2.19,\\"VENUE_NAME\\":\\"昆明滇池国家旅游度假区政务服务中心\\\\n\\",\\"VENUE_LATITUDE\\":\\"N24°59′12.79″\\",\\"LON\\":102.65808611,\\"ID\\":\\"7AB14356417156DBE0530ADDC48041C6\\",\\"VENUE_LONGITUDE\\":\\"E102°39′29.11″\\",\\"LAT\\":24.98688611,\\"VENUE_ADDRESS\\":\\"滇池路西贡码头庞贝街23号\\",\\"ROWNUM_\\":3},{\\"VENUE_TYPE\\":\\"02\\",\\"VENUE_TEL\\":\\" 0871-68426034\\",\\"DISTANCE\\":3.1,\\"VENUE_NAME\\":\\"昆明聂耳纪念馆\\",\\"VENUE_LATITUDE\\":\\"N24°57′40.34″ \\",\\"LON\\":102.63289722,\\"ID\\":\\"7AB1CFD301DB5939E0530ADDC4807357\\",\\"VENUE_LONGITUDE\\":\\"E102°37′58.43″\\\\n\\",\\"LAT\\":24.96120556,\\"VENUE_ADDRESS\\":\\"云南省昆明市西山区西山森林公园\\",\\"ROWNUM_\\":4},{\\"VENUE_TYPE\\":\\"05\\",\\"VENUE_TEL\\":\\"0871-67324393\\",\\"DISTANCE\\":3.83,\\"VENUE_NAME\\":\\"官渡区六甲街道文化站\\",\\"VENUE_LATITUDE\\":\\"N24°57′17.74″ \\",\\"LON\\":102.69824722,\\"ID\\":\\"7AB1CFD301DD5939E0530ADDC4807357\\",\\"VENUE_LONGITUDE\\":\\"E102°41′53.69″\\",\\"LAT\\":24.95492778,\\"VENUE_ADDRESS\\":\\"昆明市官渡区六甲街道办事处\\",\\"ROWNUM_\\":5},{\\"VENUE_TYPE\\":\\"02\\",\\"VENUE_TEL\\":\\"0871-68413035\\",\\"DISTANCE\\":4.42,\\"VENUE_NAME\\":\\"杨升庵纪念馆\\",\\"VENUE_LATITUDE\\":\\"N24°59′3.05″ \\",\\"LON\\":102.62295,\\"ID\\":\\"7AB1CFD301DC5939E0530ADDC4807357\\",\\"VENUE_LONGITUDE\\":\\"E102°37′22.62″\\\\n\\",\\"LAT\\":24.98418056,\\"VENUE_ADDRESS\\":\\"云南省昆明市西山区碧鸡镇高峣村\\",\\"ROWNUM_\\":6},{\\"VENUE_TYPE\\":\\"05\\",\\"VENUE_TEL\\":\\" 0871—64143291\\",\\"DISTANCE\\":7.11,\\"VENUE_NAME\\":\\"昆明市五华区文化馆\\",\\"VENUE_LATITUDE\\":\\"N25°01′12.19″\\",\\"LON\\":102.70341944,\\"ID\\":\\"7AB1CFD301D85939E0530ADDC4807357\\",\\"VENUE_LONGITUDE\\":\\"E102°42′12.31″\\",\\"LAT\\":25.02005278,\\"VENUE_ADDRESS\\":\\"豆腐营云兴路99号五华区老干部活动中心4楼\\",\\"ROWNUM_\\":7},{\\"VENUE_TYPE\\":\\"05\\",\\"VENUE_TEL\\":\\"0871-67163731\\\\n（活动部）， \\\\n0871-67185769\\\\n（办公室）\\",\\"DISTANCE\\":8.53,\\"VENUE_NAME\\":\\"官渡区文化馆\\",\\"VENUE_LATITUDE\\":\\"N25°0′23.97″ \\",\\"LON\\":102.73580278,\\"ID\\":\\"7AB1CFD301D95939E0530ADDC4807357\\",\\"VENUE_LONGITUDE\\":\\"E102°44′8.89″\\\\n\\",\\"LAT\\":25.00665833,\\"VENUE_ADDRESS\\":\\"昆明关上日新路1229号\\",\\"ROWNUM_\\":8},{\\"VENUE_TYPE\\":\\"00\\",\\"VENUE_TEL\\":\\"0871-67162353\\",\\"DISTANCE\\":8.63,\\"VENUE_NAME\\":\\"官渡区政务服务中心\\\\n\\",\\"VENUE_LATITUDE\\":\\"N24°57′8.59″\\",\\"LON\\":102.74687222,\\"ID\\":\\"7AB14356416356DBE0530ADDC48041C6\\",\\"VENUE_LONGITUDE\\":\\"E102°44′48.74″\\",\\"LAT\\":24.95238611,\\"VENUE_ADDRESS\\":\\" 官渡区云秀路2898号国投大厦4号楼1-3楼\\",\\"ROWNUM_\\":9},{\\"VENUE_TYPE\\":\\"04\\",\\"VENUE_TEL\\":\\"0871-67171975\\",\\"DISTANCE\\":8.7,\\"VENUE_NAME\\":\\"官渡区图书馆\\",\\"VENUE_LATITUDE\\":\\"N24°57′17.34″ \\",\\"LON\\":102.74806111,\\"ID\\":\\"7AB1CFD301D75939E0530ADDC4807357\\",\\"VENUE_LONGITUDE\\":\\"E102°44′53.02″\\",\\"LAT\\":24.95481667,\\"VENUE_ADDRESS\\":\\"昆明市官渡区云秀路云秀书院内（官渡古镇旁）\\",\\"ROWNUM_\\":10},{\\"VENUE_TYPE\\":\\"00\\",\\"VENUE_TEL\\":\\"0871-68226790\\",\\"DISTANCE\\":8.85,\\"VENUE_NAME\\":\\"西山区政务服务中心\\",\\"VENUE_LATITUDE\\":\\"N25°02′40.79″ \\",\\"LON\\":102.64060833,\\"ID\\":\\"7AB14356416456DBE0530ADDC48041C6\\",\\"VENUE_LONGITUDE\\":\\"E102°38′26.19″\\\\n\\",\\"LAT\\":25.04466389,\\"VENUE_ADDRESS\\":\\"春雨路188号城投商务大厦1-3楼\\",\\"ROWNUM_\\":11}],\\"txnCommCom\\":{\\"tCurrTotalPage\\":1,\\"tCurrTotalRec\\":11,\\"totalPage\\":1,\\"totalRec\\":11}}","C-Response-Code":"000000000000"}'
  var fackData2 = '{\n' +
    '\t"C-Response-Desc": "success",\n' +
    '\t"C-API-Status": "00",\n' +
    '\t"C-Response-Code": "000000000000",\n' +
    '\t"C-Response-Body": "{\\"list\\":[{\\"VENUE_TYPE\\":\\"08\\",\\"VENUE_TEL\\":\\"0879-2200998\\",\\"DISTANCE\\":1.99,\\"VENUE_NAME\\":\\"振兴北路社区卫生服务中心\\",\\"LON\\":100.97349,\\"ID\\":\\"7D393D726B3ADDA9E05314ECC4807477\\",\\"LAT\\":22.81304,\\"VENUE_ADDRESS\\":\\"振兴北路\\",\\"ROWNUM_\\":1},{\\"VENUE_TYPE\\":\\"04\\",\\"VENUE_TEL\\":\\"0879-2312761（办公室）,0879-2306961（宣教部）\\",\\"DISTANCE\\":2.37,\\"VENUE_NAME\\":\\"普洱市博物馆\\",\\"VENUE_LATITUDE\\":\\"N22°48′48″\\",\\"LON\\":100.95944444,\\"ID\\":\\"7DE46AE9DA8E8817E05314ECC480255C\\",\\"VENUE_LONGITUDE\\":\\"E100°57′34″\\",\\"LAT\\":22.81333333,\\"VENUE_ADDRESS\\":\\"普洱市思茅区滨河路10号文化中心\\",\\"ROWNUM_\\":2},{\\"VENUE_TYPE\\":\\"08\\",\\"VENUE_TEL\\":\\"0879-2201829\\",\\"DISTANCE\\":4.41,\\"VENUE_NAME\\":\\"思茅镇北郊社区思亭路卫生服务站\\",\\"LON\\":100.97312,\\"ID\\":\\"7D393D726B3EDDA9E05314ECC4807477\\",\\"LAT\\":22.79126,\\"VENUE_ADDRESS\\":\\"思茅亭路99号路桥三公司职工医院\\",\\"ROWNUM_\\":3},{\\"VENUE_TYPE\\":\\"08\\",\\"VENUE_TEL\\":\\"0879-2200998\\",\\"DISTANCE\\":4.55,\\"VENUE_NAME\\":\\"思茅镇卫生院\\",\\"LON\\":100.972155,\\"ID\\":\\"7D393D72655CDDA9E05314ECC4807477\\",\\"LAT\\":22.789976,\\"VENUE_ADDRESS\\":\\"振兴北路5号\\",\\"ROWNUM_\\":4},{\\"VENUE_TYPE\\":\\"08\\",\\"VENUE_TEL\\":\\"0879-2137918\\",\\"DISTANCE\\":4.72,\\"VENUE_NAME\\":\\"滇运社区卫生服务站\\",\\"LON\\":100.97187,\\"ID\\":\\"7D393D726B3DDDA9E05314ECC4807477\\",\\"LAT\\":22.78848,\\"VENUE_ADDRESS\\":\\"思茅镇振兴大道16号\\",\\"ROWNUM_\\":5},{\\"VENUE_TYPE\\":\\"08\\",\\"VENUE_TEL\\":\\"0879-2304832\\",\\"DISTANCE\\":4.78,\\"VENUE_NAME\\":\\"南屏镇凤凰社区卫生服务站\\",\\"LON\\":100.96681,\\"ID\\":\\"7D393D726B44DDA9E05314ECC4807477\\",\\"LAT\\":22.78825,\\"VENUE_ADDRESS\\":\\"环城南路\\",\\"ROWNUM_\\":6}],\\"txnCommCom\\":{\\"tCurrTotalPage\\":1,\\"tCurrTotalRec\\":6,\\"totalPage\\":1,\\"totalRec\\":6}}"\n' +
    '}'
  export default {
    beforeRouteEnter (to, from, next) {
      //  html禁止滚动
      document.getElementsByTagName('html')[0].style.overflow = 'hidden'
      bdMap.init().then((res) => {
        if (res) {
          next()
        }
      }).catch((error) => {
        next()
      })
    },
    activated () {
      document.getElementById('itemListBox').scrollTop = this.itemListBoxTop || 0
    },
    beforeRouteLeave (to, from, next) {
      let itemListBox = document.getElementById('itemListBox')
      this.itemListBoxTop = itemListBox.scrollTop || 0
      //  html取消禁止滚动
      document.getElementsByTagName('html')[0].style.overflow = 'scroll'
      next()
    },
    name: 'MapAndList',
    components: {
      Towtop,
    },
    data () {
      return {
        mapIcon00,
        mapIcon01,
        mapIcon02,
        mapIcon03,
        mapIcon04,
        mapIcon05,
        mapIcon06,
        mapIcon07,
        mapIcon08,
        mapIcon09,
        selectCity: '',
        positionData: {
          'type': 'complete',
          'position': {
            'O': 24.969633246528,
            'P': 102.65541178385502,
            'lng': 102.655412,
            'lat': 24.969633
          },
          'location_type': 'html5',
          'message': 'Get geolocation success.Convert Success.Get address success.',
          'accuracy': 65,
          'isConverted': true,
          'status': 1,
          'addressComponent': {
            'citycode': '0871',
            'adcode': '530112',
            'businessAreas': [{
              'name': '民族村',
              'id': '530112',
              'location': {
                'O': 24.967609439999997,
                'P': 102.66289456000004,
                'lng': 102.662895,
                'lat': 24.967609
              }
            }],
            'neighborhoodType': '',
            'neighborhood': '',
            'building': '',
            'buildingType': '',
            'street': '民族村北路',
            'streetNumber': '7号',
            'province': '云南省',
            'city': '昆明市',
            'district': '西山区',
            'township': '昆明滇池国家旅游度假区'
          },
          'formattedAddress': '云南省昆明市西山区昆明滇池国家旅游度假区民族村北路明珠村',
          'roads': [],
          'crosses': [],
          'pois': [],
          'info': 'SUCCESS'
        }, //保存定位信息
        itemListData: [],  //保存请求返回的数据
        //请求参数对象
        paramObj: {
          'keyword': '',   //关键字查询 Itemlist决定
          'type': '',   //场馆类型  默认空字符串 查询全部
          'lon': '102.655285',  // 经度 查询本地数据为自身坐标，查询外地数据为外地州市市政府坐标
          'lat': '24.969624',  //维度  查询本地数据为自身坐标，查询外地数据为外地州市市政府坐标

          'lon_own': '102.655285',  // 查询外地数据为自身坐标，查询本地数据可为空
          'lat_own': '24.969624',  //  查询外地数据为自身坐标，查询本地数据可为空
          'local_data_flag': '00', //  空值不启用地区代码查询，用坐标和距离查询 01 外地查询  00自身定位，查询本地
          'regn_code': '530100000000',  //默认昆明市编码
          'scope': '',
          'tRecInPage': 10,  //每页显示条数
          'tPageJump': 1,     //当前显示页数
        },
        title: '全部场馆',
        marginLeft: 0,
        isCustom: true,
        errorSelect01: false,
        selectCityValu: [
          {
            flex: 1,
            values: Object.keys(cityData),
            textAlign: 'center',
            defaultIndex: 0,
          }
        ],
        selectDataType: [{
          flex: 1,
          values: [
            {text: '全部', value: ''},
            {text: '便民中心', value: '00'},
            {text: '博物馆', value: '01'},
            {text: '纪念馆', value: '02'},
            {text: '体育场馆', value: '03'},
            {text: '图书馆', value: '04'},
            {text: '文化馆', value: '05'},
            {text: '文化站', value: '06'},
            // {text: '劳动者港湾', value: '07'},
            {text: '基层医疗卫生服务机构', value: '08'},
            {text: '非物质遗产保护中心', value: '09'},
          ],
          showText: 'text',
          defaultIndex: 0,
        }],
        showType: false,
        mapContentHeight: 0,
        commonHeadHeight: 0,
        requesting: false,
        showNameIndex: null,
        mapObj: null,
        bdMap: null,
        keyWord: '',
        infoWindowList: [],
        makerDataList: [],
        positionPoint: {
          lng: 102.655285,
          lat: 24.969624,
        },
        originLatLng: {},
        originName: '',
        cityMaker: null,
        cityPoint: null,
        cityName: '其他州市',
        allLoaded: false,
        gpsData: false,
        totalPage: 0,
        totalNum: 0,
        firstLoad: true,
        clearDataList: false,
        fromThisToRender: 0,
        currentPageNum: 0,//当前页数
        itemListBoxTop: 0,//离开时记录滚动条位置
        nearByIsActive: '#2D7FFC',
        cityIsActive: '',
        positionRegnCode: '',
      }
    },
    created () {
      //判断是不是指定场馆
      let ctgry = this.$route.query.ctgry
      switch (ctgry) {
        case '00' :                                 //博物馆
          this.title = '便民服务中心'
          this.paramObj.type = '00'
          break
        case '01' :                                 //博物馆
          this.title = '博物馆'
          this.paramObj.type = '01'
          break
        case '02' :                                 //非遗保护中心
          this.title = '纪念馆'
          this.paramObj.type = '02'
          break
        case '03' :                                 //营业性上网服务场所
          this.title = '公共体育馆'
          this.paramObj.type = '03'
          break
        case '04' :                                 //纪念馆
          this.title = '图书馆'
          this.paramObj.type = '04'
          break
        case '05' :                                 //图书馆
          this.title = '文化馆'
          this.paramObj.type = '05'
          break
        case '06' :                                 //乡镇文化馆
          this.title = '文化站'
          this.paramObj.type = '06'
          break
        case '07' :                                 //还没有制定场馆
          this.title = '劳动者港湾'
          this.paramObj.type = '07'
          break
        case '08' :                                 //基层医疗卫生机构
          this.title = '基层医疗卫生服务机构'
          this.paramObj.type = '08'
          break
        case '09' :                                 //非遗保护中心
          this.title = '非遗保护中心'
          this.paramObj.type = '09'
          break
        default:                                 //全部场馆
          this.paramObj.type = ''
          this.showType = true
          this.title = '全部'
      }
      //打包注释掉
      // getMapItemList(this, this.paramObj, 'assemItemListData')

      window.getGpsMsg = this.getPosition  //定位成功后的回掉
      this.$CallModule('location', '定位')  //调取原生方法获取定位
    },
    mounted () {
      this.commonHeadHeight = Math.round($('.common-header').outerHeight(true))
      this.mapContentHeight = (window.screen.height - this.commonHeadHeight) + 'px'
      this.$nextTick(() => {
        // 实例化百度地图对象
        let map = new BMap.Map('bdmapContainer')
        //关闭列表
        let self = this
        map.movestart = self.HeaderEmit()
        map.touchstart = self.HeaderEmit()
        let point = new BMap.Point(102.655412, 24.969633)
        map.centerAndZoom(point, 15)
        map.addControl(new BMap.NavigationControl({
            anchor: BMAP_ANCHOR_TOP_RIGHT
          }
        ))
        this.bdMap = map
      })
      //模拟定位成功 上线删除
      // setTimeout(() => {
      //   this.gpsData = true;
      // }, 1000)

    },
    watch: {
      showNameIndex (val) {
        if (val === null) return
        this.bdMap.closeInfoWindow() //关闭
        let self = this
        if (this.bdMap && this.makerDataList.length) {
          let item = self.itemListData[val]
          let infoWindow = this.infoWindowList[val]
          let pt = new BMap.Point(item.LON + 0.008, item.LAT + 0.003)
          this.bdMap.openInfoWindow(infoWindow, pt) //开启信息窗口

          setTimeout(function () {
            $('#' + item.ID).on('touchend', function () {
              self.routerTodetail(item)
            })
          }, 700)
        }
      },
      selectCity: {
        handler: 'getCityPosition',
        deep: true,
      }
    },
    methods: {
      handleBottomChange (status) {
        this.bottomStatus = status
      },
      loadBottom () {
        const self = this
        // 模拟加载中
        setTimeout(() => {
          if (!self.gpsData) return //定位不成功不请求数据
          if (self.paramObj.tPageJump <= self.totalPage || self.firstLoad) {   //判断数据是否全部加载
            //发送请求
            getMapItemList(this, this.paramObj, 'assemItemListData')
            self.paramObj.tPageJump += 1
            self.firstLoad = false  //是不是第一次加载
          } else {
            self.allLoaded = true // 若数据已全部获取完毕
          }
          self.$nextTick(function () {
            self.$refs.loadmore.onBottomLoaded()
          })
        }, 1500)
      },
      //调用原生方法获取定位
      gpsPosition () {
        this.nearByIsActive = '#2D7FFC';
        this.cityIsActive = '';
        this.$CallModule('location', '定位');
        this.cityName = '其他州市';
      },
      //定位成功后的回掉
      getPosition (locationStr) {
        let self = this;
        let locationObj = JSON.parse(locationStr)
        let localData = locationObj.location.split(',')
        // let localData = '(102.655315,24.969594)'.split(',');
        let point = {'lng': localData[0].substring(1), 'lat': localData[1].substring(0, localData[1].length - 1)}
        //高德坐标转换为百度坐标
        let baiduPositionObj = bd_encrypt(point.lng, point.lat)
        point.lng = baiduPositionObj.bd_lng;
        point.lat = baiduPositionObj.bd_lat;
        //定位成功转换坐标后请求数据
        this.positionPoint = point
        this.originLatLng = point
        this.originName = locationObj.AOIName
        this.paramObj.lon = point.lng //自身坐标
        this.paramObj.lat = point.lat //自身坐标
        this.paramObj.regn_code = locationObj.adcode.substring(0, 4) + '00000000' //十二位城市编码
        this.positionRegnCode = locationObj.adcode.substring(0, 4) + '00000000'

        this.gpsData = true  //渲染加载更多组件，请求数据
        if (!this.firstLoad) {  //第一次自动定位不查询数据
          this.clearDataList = true  //每次定位查询清空数据
          this.paramObj.tPageJump = 1;
          getMapItemList(this, this.paramObj, 'assemItemListData')
          this.paramObj.tPageJump = 2;
        }
        //获取定位坐标后在地图上打点，标记自身位置
        var pointBd = new BMap.Point(point.lng, point.lat)
        self.bdMap.centerAndZoom(pointBd, 15)
        var marker = new BMap.Marker(pointBd)  // 创建标注
        self.positionMaker = marker
        self.bdMap.addOverlay(marker)   // 将标注添加到地图中

      },
      //打开地区或者类型选择prop
      openProp (propType) {
        if (false) {
        } else if (propType == 'selectCity') {
          this.$refs['citySelect'].open()
        } else if (propType == 'selectType') {
          this.$refs['typeSelect'].open()
        }
      },
      //关键字查询方法
      keyWordSearch () {
        // this.bdMap.addOverlay(this.positionMaker)//标出所在地
        // this.bdMap.panTo(this.positionPoint)//地图中心移动至定位处
        this.clearDataList = true  //关键字查询需要清空数据
        this.paramObj.tPageJump = 1
        getMapItemList(this, this.paramObj, 'assemItemListData')
        this.paramObj.tPageJump = 2
      },

      //点击列表内容 显示窗口信息  或者跳转到详情页
      handleClick (item, index, $event) {
        if ($event.target.parentNode.classList[0] === 'hui-cell') {
          this.showNameIndex = index
        } else {
          //跳转到详情
          this.$router.push({
            name: 'aroundDetail',
            params: item
          })
        }

      },

      resetCity (key) {
        if (key === 'type') {
          //类型查询条件清空
          this.paramObj.type = ''
          this.title = '全部场馆'
          this.clearDataList = true  //清空数据
          this.paramObj.tPageJump = 1  //从第一页开始
          getMapItemList(this, this.paramObj, 'assemItemListData')
          this.paramObj.tPageJump = 2
        } else {
          //地区州市查询条件清空 即 查询本地
          this.paramObj.tPageJump = 1  //从第一页开始
          this.cityName = '其他州市'
          this.paramObj.lon = this.positionPoint.lng.toString()  //自身坐标
          this.paramObj.lat = this.positionPoint.lat.toString()  //自身坐标
          this.paramObj.regn_code = this.positionRegnCode  //定位城市编码
          this.nearByIsActive = '#2D7FFC'
          this.cityIsActive = ''
          getMapItemList(this, this.paramObj, 'assemItemListData')
          this.paramObj.tPageJump = 2
        }
      },
      //收缩列表方法
      HeaderEmit () {
        if (this.marginLeft == '-40%') {
          this.marginLeft = 0
        } else {
          this.marginLeft = '-40%'
        }
      },
      selectConfirmCity (selectedVal) {
        if (typeof selectedVal[0] === 'object') {
          //类型查询

          this.searchCondition = selectedVal[0]
          this.paramObj.type = this.searchCondition.value
          this.title = this.searchCondition.text
          // this.bdMap.addOverlay(this.positionMaker)//标出所在地
          // this.bdMap.panTo(this.positionPoint)//地图中心移动至定位处
          this.clearDataList = true  //每次切换类型清空数据
          this.paramObj.tPageJump = 1  //分页从第一页开始
          //发送请求
          getMapItemList(this, this.paramObj, 'assemItemListData')
          this.paramObj.tPageJump = 2
        }
        else {
          //请求所选城市的坐标
          this.nearByIsActive = ''
          this.cityIsActive = '#2D7FFC'
          this.searchCondition = selectedVal
          let areaData = getareaCode('云南省', this.searchCondition)
          this.selectCity = selectedVal[0]    //赋值触发百度地图州市坐标查询
          this.cityName = selectedVal[0]  //按钮转换为州市名产
          this.paramObj.regn_code = areaData.code + '000000'   //城市编码
        }
      },
      //处理请求回来的数据，应该根据数据改变标记Icon图的src地址
      assemItemListData (data) {
        if (!data) return
        this.requesting = false
        // if (data && data['C-Response-Body']) {
        //   let data = data
        // } else {
        //   if(Math.random()>=0.5){
        //     data = JSON.parse(fackData1)
        //   }else{
        //     data = JSON.parse(fackData2)
        //   }
        // }
        let resData = JSON.parse(data['C-Response-Body'])
        let dataList = resData.list
        if (dataList.length) {
          this.totalPage = resData.txnCommCom.totalPage //保存总页数
          this.totalNum = resData.txnCommCom.totalRec //保存数据总条数
          this.currentPageNum = resData.txnCommCom.tCurrTotalPage
          if (this.clearDataList) {
            this.itemListData = []     //清空数据列表
            this.infoWindowList = []   //清空窗口列表
            this.makerDataList = []   //清空标记物列表
            this.fromThisToRender = 0 //从0开始渲染
            this.allLoaded = false    //改变全部加载完成的状态
            this.bdMap.clearOverlays() //清空地图上的打点
            this.clearDataList = false
          }
          //如果是州市查询恢复州市的打点
          if (this.cityMaker) {
            this.bdMap.addOverlay(this.cityMaker)
            this.cityMaker = null
          }
          this.showNameIndex = null
          //收缩列表中显示数据
          this.itemListData = this.itemListData.concat(dataList)

          //地图打点
          this.addMaker(this.itemListData)
          this.showNameIndex = null
        } else {
          this.$toast('暂无数据')
        }

      },
      //标记点 点击事件
      handelMkClick (e) {
        this.$router.push({
          name: 'aroundDetail',
          params: {
            'title': e.target.Mg.title,
            'DISTANCE': e.target.Mg.distance,
            'ID': e.target.Mg.id,
          }
        })
      },
      //在地图上添加标注
      addMaker () {
        //添加自身定位标识
        if (this.positionMaker) {
          this.bdMap.addOverlay(this.positionMaker)
        }
        let self = this
        let item
        // this.fromThisToRender 从此处开始添加数据
        for (var i = self.fromThisToRender; i < self.itemListData.length; i++) {
          item = self.itemListData[i]
          let pt = new BMap.Point(item.LON + 0.008, item.LAT + 0.003)
          let imgIcon
          switch (item.VENUE_TYPE) {
            case '00' :                                 //便民服务中心
              imgIcon = mapIcon00
              break
            case '01' :                                 //博物馆
              imgIcon = mapIcon01
              break
            case '02' :                                 //纪念馆
              imgIcon = mapIcon02
              break
            case '03' :                                 //体育场馆
              imgIcon = mapIcon03
              break
            case '04' :                                 //图书馆
              imgIcon = mapIcon04
              break
            case '05' :                                 //文化馆
              imgIcon = mapIcon05
              break
            case '06' :                                 //文化站
              imgIcon = mapIcon06
              break
            case '07' :                                 //劳动者港湾
              imgIcon = mapIcon07
              break
            case '08' :                                 //基层医疗卫生服务机构
              imgIcon = mapIcon08
              break
            case '09' :                                 //非遗保护中心
              imgIcon = mapIcon00
              break
            default:                                 //全部场馆
              imgIcon = mapIcon06
            // this.paramObj.scope = '5';
          }
          let myIcon = new BMap.Icon(imgIcon, new BMap.Size(48, 48))
          let marker = new BMap.Marker(pt, {icon: myIcon})  // 创建标注
          this.bdMap.addOverlay(marker)
          var opts = {
            width: 200,     // 信息窗口宽度
            height: 40,     // 信息窗口高度
            title: item.VENUE_NAME.substring(0, 12) + (item.VENUE_NAME.length > 12 ? '...' : ''), // 信息窗口标题
            enableCloseOnClick: true,
          }
          let infoWindow = new BMap.InfoWindow('<a id=' + item.ID + ' style=\'color:blue;text-align: right;float:right;line-height:30px\'>查看详情 >> </a>', opts)  // 创建信息窗口对象
          self.infoWindowList.push(infoWindow)
          self.makerDataList.push(marker)
          self.itemData = item
          marker.item = item
          marker.addEventListener('click', function ({type, target}) {

            let item = this.item
            self.bdMap.openInfoWindow(infoWindow, pt) //开启信息窗口
            setTimeout(function () {
              $('#' + item.ID).on('touchend', function () {
                self.routerTodetail(item)

              })
            }, 700)
          })
        }
        self.fromThisToRender = self.currentPageNum * self.paramObj.tRecInPage //更新开始渲染的位置
      },
      //跳转到详情
      routerTodetail (item) {
        this.$router.push({
          name: 'aroundDetail',
          params: {
            'VENUE_NAME': item.VENUE_NAME,
            'DISTANCE': item.DISTANCE,
            'ID': item.ID,
            'originName': this.originName,
            'originLatLng': this.originLatLng,
          }
        })
      },
      //州市查询
      getCityPosition () {
        let self = this
        if (this.bdMap) {
          var map = this.bdMap
          var local = new BMap.LocalSearch(map, {
            renderOptions: {map: map},
            onSearchComplete: self.searchcomplete,
            onMarkersSet: self.cityMakerComplete,
          })
          local.search(self.selectCity)
        }
      },
      //州市位置查询成功后调用
      searchcomplete (data) {
        if (data.Ar) {
          //保存 州市查询后的maker 和 point
          this.cityPoint = data.Ar[0].point
          /*
          * 不需要外地坐标
          *
          *
          * this.paramObj.lat = data.Ar[0].point.lat;  //外地坐标
            this.paramObj.lon = data.Ar[0].point.lng;  //外地查询
            this.paramObj.lon_own = this.positionPoint.lng;  //自身坐标
            this.paramObj.lat_own = this.positionPoint.lat;  //自身坐标
          *
          * */
          this.paramObj.lat = this.positionPoint.lat  //自身坐标
          this.paramObj.lon = this.positionPoint.lng  //自身查询
          this.clearDataList = true  //清空数据
          this.paramObj.tPageJump = 1  //分页重新开始
          //发送请求
          getMapItemList(this, this.paramObj, 'assemItemListData')
          this.paramObj.tPageJump = 2
        } else {
          this.$toast('坐标获取失败')
        }

      },
      //州市搜索maker添加成功后调用
      cityMakerComplete (data) {
        this.cityMaker = data[0].marker
        this.cityMaker.disableMassClear()
      }
    }
  }
</script>

<style lang="less">
  .mapAndList {
    position: fixed;left: 0;top: 0;width: 100%;height: 100%;  //禁止列表滑动时页面滚动
    .example-loadmore_wrapper {
      overflow: scroll
    }
    .example-loadmore_listitem {
      height: 50px;
      line-height: 50px;
      text-align: center;
      border-bottom: 1px solid #e1e2e6
    }

    .mapAndList-box {
      position: relative;
    }
    .positionIcon {
      height: 32px;
      margin: 0px;
      box-sizing: border-box;
      border-radius: 3px;
      position: fixed;
      bottom: 100px;
      right: 10px;
    }

    .common-header {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10000;
      width: 100%;
    }

    .itemListBox {
      input {
        height: .5rem !important;
        font-size: 0.3rem;
      }
      -webkit-overflow-scrolling: touch;
      position: absolute;
      top: 1.1rem;
      left: 0;
      height: 10.199rem;
      overflow: auto;
      z-index: 999;
      background: #fff;
      transition: margin-left 0.3s;
      width: 40%;
      .closeList {
        font-size: .4rem;
        float: right;
        color: #ccc;
        padding: 0 0.3rem !important;
      }
      text-align: left;
      color: #000;
      padding: 0 .2rem .1rem;
      box-sizing: border-box;
      .hui-field_core {
        text-align: left;
        font-size: 0.35rem;
      }
      .itemListBox-buttonBox {
        .nearBy {
          padding: 0 0.15rem .2rem;
        }
        width: 100%;
      }
      .button-city {
        min-width: 1.52rem;
      }
      .hui-cell_inner {
        padding: .1rem 0 0 0 !important;
        input {
          height: .8rem;
        }
      }
      .hui-field {
        padding: 0;
      }
      .itemListBox-button {
        border-radius: 10px;
        color: #fff;
        background: #00ace6;
        height: 0.6rem;
        line-height: 0.6rem;
        border: none;
        outline: 0;
        display: inline-block;
        padding: 0 0.2rem 0.2rem;
        font-size: 0.3rem;
        margin-bottom: 5px;
      }
      .hui-cell_img {
        width: 0.5rem;

        img {
          width: 100%;
        }
      }
      .hui-field_core {
        text-align: left;
      }
      .hui-cell_title {
        font-size: 0.3rem;
        margin-left: .1rem;
        color: #333;
        font-weight: bolder;
      }
      .hui-cell:after {
        border-bottom: 0;
      }
      .hui-cell {
        margin-bottom: 0.1rem
      }

      .listContent-phone {
        font-size: 0.25rem;
        line-height: 0.4rem;
        padding-bottom: 0.1rem;
        border-bottom: 1px solid #ccc;
      }
      .noborder {
        border: none;
      }
      .listContent-address {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 0.25rem;
        padding-bottom: 0.1rem;
        max-height: 0.8rem;
      }
      .listContent-subtitle {
        font-weight: bolder;
        font-size: 0.25rem;

      }
      .field-append_text {
        padding: 10px;
        .hui-icon {
          line-height: normal;
          vertical-align: middle;
        }
      }
    }
    .mapBox {
      width: 100%;
      background: #589afd;
    }
    .serchBox {
      background: #fff;
      position: fixed;
      width: 39.8%;
      z-index: 2000;
      height: 2.2rem;
    }
    .closeListButton {
      height: 1rem;
      width: 0.6rem;
      line-height: 1rem;
      z-index: 2000;
      background: #00ace6;
      position: fixed;
      color: #fff;
      font-size: 0.6rem;
      top: 1.1rem;
    }
    .adc-enter-active {
      transition: opacity 1s ease-out;
    }

    .adc-enter, .adc-leave-to {
      opacity: 0;
    }
    .hui-loadmore_bottom {
      transform: translateY(-10px);
    }

  }


</style>
