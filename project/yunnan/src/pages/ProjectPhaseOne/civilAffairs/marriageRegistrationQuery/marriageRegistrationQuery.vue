<template>
  <div class="marriageRegistrationQuery">
    <myheader :my-header="headerData"></myheader>
    <div class="marriageRegistrationQueryContent" id="marriageRegistrationQueryContent">
      <div class="searchFrom">
        <Search
          ref="compsSearch"
          autofocus
          placeholder="请输入州市区县关键词"
          v-model="searchKey"
          @search="queryData">
          <span slot="otherMenu" class="example-search_menu">
          </span>
        </Search>
      </div>
      <div class="marriageRegistrationQueryList">
        <img :src="noDataImg" alt="" v-if="ResultData.length == 0">
        <div ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
          <Loadmore :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom"
                    v-if="!ResultData.length == 0"
                    @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
            <ul>
              <li v-for="item in ResultData" :key="item.id">
                <h4>{{item.Addr}}</h4>
                <p>机构名称：{{item.Org_Name}}<span>{{item.Tel}}</span></p>
              </li>
            </ul>
          </Loadmore>
        </div>
      </div>
    </div>
  </div>
</template>
<!--// 请输入您的身份证号码-->
<script>
import Header from '@/components/header/header'
import icon from '@/assets/iconSound.png'
import noDataImg from '@/assets/noDataImg.png'
import {cenurl} from '@/components/toptow.js'

export default {
  data () {
    return {
      headerData: {
        title: '婚姻登记机关查询',
        backUrl: '/'
      },
      iconUrl: icon,
      noDataImg: noDataImg,
      searchKey: '',
      allData: [
        {
          id: '01',
          address: '云南省昆明市北京西街32号，政府大楼3-11室，民政处云南省昆明市北京西街32号，政府大楼3-11室，民政处',
          number: '0871-87000321',
          name: '市政民政局'
        },
        {
          id: '02',
          address: '昆明市-华宁县-河滨路街道',
          number: '0871-87000321',
          name: '市政民政局'
        },
        {
          id: '03',
          address: '昆明市-华宁县-河滨路街道',
          number: '0871-87000321',
          name: '市政民政局'
        }
      ],
      ResultData: [],
      queryUrl: '/gsp/mng70011',
      allLoaded: false,
      bottomStatus: '',
      wrapperHeight: 0,
      topStatus: '',
      pageSize: '10',
      current: '1'
    }
  },
  created () {
    let _self = this
    _self.getData(_self.formteData)
  },
  computed: {},
  components: {
    myheader: Header
  },
  methods: {
    queryData: function () {
      let _self = this
      let listPage = document.getElementById('marriageRegistrationQueryContent').getElementsByClassName('hui-search_list')[0]
      listPage.style.display = 'none'
      _self.current = '1'
      const queryDataCallback = (data) => {
        if(data.List){
          _self.ResultData = data.List;
        }else{
          _self.ResultData = [];
        }

      }
      _self.getData(queryDataCallback)
    },
    filterData: function () {
      let _self = this
      return this.allData.filter(value => {
        let isTrue = new RegExp(_self.searchKey, 'i').test(value.number) || new RegExp(_self.searchKey, 'i').test(value.address) || new RegExp(_self.searchKey, 'i').test(value.name)
        return isTrue
      })
    },
    getData (callback) {
      let _self = this
      let sendData =
      {
        "txnBodyCom": {
          matter_id: window.sessionStorage.getItem("matterid"),
          "region_code":"",
          "keyword": _self.searchKey
        }
      };
      let page = {
        "tRecInPage":  _self.pageSize,
        "tPageJump": _self.current,
      }
      _self.$ajaxRequest("post",this.queryUrl, sendData,page).then((res) => {
        console.log(res)
        if (res) {
            callback(res)
          } else {
            alert('error')
          }
      }).catch((response) => {});
    },
    formteData (data) {
      let _self = this
      if (data.List) {
        _self.ResultData = _self.ResultData.concat(data.List)
      }
    },
    handleBottomChange (status) {
      this.bottomStatus = status
    },
    loadBottom () {
      const _self = this
      // 模拟加载中
      let dataSum = parseInt(_self.pageSize) * parseInt(_self.current)
      if (_self.ResultData.length < dataSum) {
        _self.allLoaded = true// 若数据已全部获取完毕
      } else {
        _self.current = (parseInt(_self.current) + 1).toString()
        _self.getData(loadBottom)
      }
      function loadBottom (data) {
        _self.formteData(data)
        _self.$nextTick(function () {
          _self.$refs.loadmore.onBottomLoaded()
        })
      }
    },
    handleTopChange (status) {
      this.topStatus = status
    },
    loadTop () {
      const _self = this
      _self.current = '1'
      _self.getData(ladTopCallBack)
      function ladTopCallBack (data) {
        _self.ResultData = data.List
        _self.$refs.loadmore.onTopLoaded()
      }
    }
  }
}
</script>

<style>
  html,body{height:100%;}
  .marriageRegistrationQuery {
    height:100%;
  }
  .marriageRegistrationQueryContent{margin-top:-0.2rem;height:calc(100% - 1.1rem)}
  .searchFrom{padding:0.1rem 1rem 0.34rem;background: #fff;}
  .hui-search_searchbtn {display: none;}
  .example-search_menu{position: absolute;right: 14px;top:12px;}
  .example-search_menu img{height:0.44rem;}
  .hui-search_bar{position: relative;padding: 8px 0;}
  .hui-search_barInner{border-radius: 50px;padding: 0 20px;}
  .hui-search_icon-clear{right:30px;}
  .hui-search_bar:after{border: none;}
  .marriageRegistrationQueryList{overflow: auto;height: calc(100% - 1.5rem)}
  .marriageRegistrationQueryList img{width:5.56rem;margin: 1.08rem auto;}
  .marriageRegistrationQueryList ul{text-align: left;}
  .marriageRegistrationQueryList li{margin-top: 0.16rem;background: #fff;/*height: 1.36rem;*/padding:0.26rem 0 0.22rem 0.36rem;}
  .marriageRegistrationQueryList h4{font-size: 0.28rem;color:#333;margin-bottom: 0.16rem;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;width: 100%;}
  .marriageRegistrationQueryList p{font-size: 0.24rem;color:#999;}
  .marriageRegistrationQueryList p:after{content: '';display: block;clear: both;}
  .marriageRegistrationQueryList span{float: right;padding-right:0.36rem;}
  .hui-loadmore_top span,.hui-loadmore_bottom span{float: none;}
</style>
