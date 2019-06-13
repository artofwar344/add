<template>
  <div class="process-result">
    <towtop style="margin: 0;" :name="titlename"/>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">
        <div class="tabTitle">审核结果</div>
        <div class="tabBlock"></div>
      </mt-tab-item>
      <mt-tab-item id="2">
        <div class="tabTitle">基本信息</div>
        <div class="tabBlock"></div>
      </mt-tab-item>
      <mt-tab-item id="3">
        <div class="tabTitle">申报材料</div>
        <div class="tabBlock"></div>
      </mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="containerBox tabBoxOne">
          <img :src="imgs.group3" class="passImg">
          <h4>{{passDate}}</h4>
          <p class="result-click" v-if="declareurl">
            <a v-if="isAndroidOrIos" :href="declareurl">查看结果</a>
            <span v-else @click="downloadPDF(declareurl)">点击下载结果</span>
          </p>
          <div v-if="elNo">证照编号：{{elNo}}</div>
          <div v-if="remark1">个人医保编号：{{remark1}}</div>
          <div v-if="errorMsg">原因：{{errorMsg}}</div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="containerBox tabBoxTwo">
          <ul class="tierOne">
            <li class="tierOneLi clearfix" v-for="(item,index) in tabTwoList">
              <span class="liLeft">{{index}}</span>
              <span class="liRight">{{item||' '}}</span>
            </li>
          </ul>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div class="containerBox tabBoxThr">
          <ul>
            <li v-for="item in tabThrList">
              <h4>{{item.matter_file_name}}</h4>
              <div v-if="item.file_num!= 0">
                <span class="upNum">已上传 <em>{{item.file_num}}</em>份</span>
                <mt-button @click="seeFiles(item.files)" type="primary" class="seeFiles">查看附件</mt-button>
              </div>
              <div v-else>
                <span class="upNum">未上传</span>
              </div>
            </li>
          </ul>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>

    <div class="mint-msgbox-wrapper" v-show="filesModeShow">
      <div class="mint-msgbox">
        <div class="mint-msgbox-header">
          <div class="mint-msgbox-title"></div>
        </div>
        <div class="mint-msgbox-content">
          <div class="fileBox">
            <mt-swipe :auto="0" :showIndicators="false" :continuous="false">
              <mt-swipe-item v-for="i in files" class="file">
                <img v-if="isAndroidAndPdf(i)"
                     :src="fileUrlIpcode+'/image-service/downloadImage?bucketId=GSP_PRIVATE&C-App-Id=GSP_APP_001&ObjNm='
                  +i.file_name +'&C-Dynamic-Password-Foruser='+token">
                <span v-else class="fileSpanDown" @click="downloadPDF(fileUrlIpcode+'/image-service/downloadImage?bucketId=GSP_PRIVATE&C-App-Id=GSP_APP_001&ObjNm='
                  +i.file_name +'&C-Dynamic-Password-Foruser='+token)">点击查看</span>
              </mt-swipe-item>
            </mt-swipe>
          </div>
        </div>
        <div class="mint-msgbox-btns">
          <button @click="closeModeFn" class="mint-msgbox-btn mint-msgbox-confirm">关闭</button>
        </div>
      </div>
    </div>
    <div class="v-modal" v-show="filesModeShow" style="z-index: 40;"></div>
  </div>
</template>
<script>
  import towtop from '../../../components/HederTwo'

  var success = require('../../../assets/images/cancle_success.png')
  var icoNox = require('../../../assets/images/law/ico_nox.png')
  var group3 = require('../../../assets/images/Group2@3x.png')

  export default {
    data() {
      return {
        titlename: '申报基本信息',
        datatext: '',
        selected: '1',
        passDate: '',
        workId: '',
        declareurl: '',
        elNo: '',
        remark1: '',
        token: '',
        errorMsg: '',
        matterid: window.sessionStorage.getItem("matterid"),
        tabThrList: [],
        imgs: {
          success,
          icoNox,
          group3
        },
        files: [],
        filesModeShow: false,
        tabTwoList: [],
        fileUrlIpcode: ''
      }
    },
    components: {
      towtop
    },
    created() {
      var urls = window.location;
      if (urls.hostname == 'web.yn.gov.cn') {
        this.fileUrlIpcode = "https://download.yn.gov.cn"
      } else {
        this.fileUrlIpcode = 'http://128.196.221.86:8080'
      }
      this.selected = this.$route.query.selected || '1'
      this.passDate = this.$route.query.date || ' '
      this.workId = this.$route.query.WorkId
      this.token = this.$route.query.token
      this.matterid = sessionStorage.getItem("matterid")
      this.declareurl = sessionStorage.getItem("declareurl")
      this.elNo = sessionStorage.getItem("declareElNo")
      this.remark1 = sessionStorage.getItem("declareRemark")
      this.errorMsg = sessionStorage.getItem("declareErrorMsg")
      if (this.remark1 && this.remark1.indexOf('1#') > -1) {
        this.remark1 = this.remark1.substr(2)
      } else {
        this.remark1 = null
      }
      let data = {
        txnCommCom: {
          tenant: '530000000000'
        },
        txnBodyCom: {
          matter_id: this.matterid,
          work_id: this.workId
          // matter_id: 'd653a1f8321d4c35aacffbee5fa104cf',
          // work_id: 'dd2702872af14cb09869d0ddd7433c46'
        }
      }
      this.$ajaxRequest('post', '/gsp/mng60010', data)
        .then(res => {
          if (res) {
            console.log(res);
            this.tabThrList = res
          }
        })
        .catch(error => {
          console.log(error)
        })
      let dataTwo = {
        "txnCommCom": {
          "tenant": "530000000000",
          "txn_itt_chnl_id": "0",
          "txn_itt_chnl_type": "1"
        },
        "txnBodyCom": {
          matter_id: this.matterid,
          work_id: this.workId
          // matter_id: 'd653a1f8321d4c35aacffbee5fa104cf',
          // work_id: 'dd2702872af14cb09869d0ddd7433c46'
        }
      }
      this.$ajaxRequest('post', '/gsp/appForm00002', dataTwo)
        .then(res => {
          res = JSON.parse(res.Json_Content)
          this.tabTwoList = res
        })
        .catch(error => {
          console.log(error)
        })
    },
    computed: {
      isAndroidOrIos() {
        let u = navigator.userAgent
        let app = navigator.appVersion
        // let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1 //android终端或者uc浏览器
        let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        if (isiOS) {
          return true
        } else {
          return false
        }
      }
    },
    methods: {
      seeFiles(files) {
        this.filesModeShow = true
        files.map((v) => {
          this.files.push(v)
        })
      },
      closeModeFn() {
        this.filesModeShow = false
        this.files.splice(0)
      },
      downloadPDF(url) {
        this.$CallModule('androidDownloadPDF', url)
      },
      isAndroidAndPdf(i) {
        let u = navigator.userAgent
        let app = navigator.appVersion
        // let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1 //android终端或者uc浏览器
        let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        if (isiOS) {
          return true
        } else {
          if (i.file_name && i.file_name.indexOf('.pdf') > -1) {
            return false
          } else {
            return true
          }
        }
      }
    }
  }
</script>
<style scoped>
  .hui-tabs_nav {
    width: 100%;
  }

  .mint-navbar {
    margin: 10px 0;
  }

  .tabBlock {
    width: 30%;
    margin: 0 auto;
    height: 4px;
    background-color: #fff;
  }

  .tabTitle {
    color: #333;
    font-size: 16px;
    line-height: 2;
  }

  .mint-navbar .mint-tab-item.is-selected {
    border-bottom: none;
    color: #333;
  }

  .mint-navbar .mint-tab-item {
    padding: 10px 0;
  }

  .mint-navbar .mint-tab-item.is-selected .tabBlock {
    background-color: #4d91ff;
  }

  .itemBox {
    margin-bottom: 10px;
    background-color: #fff;
    padding: 8px 10px;
  }

  .containerBox {
    width: 90%;
    background-color: #fff;
    border-radius: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px;
    margin: 0 auto;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.07);
    margin-bottom: 26px;
  }

  .tabBoxOne.containerBox {
    padding: 10%;
  }

  .passImg {
    width: 35%;
  }

  .tabBoxOne h4 {
    text-align: center;
    font-size: 18px;
    color: #222;
    line-height: 4;
    font-weight: 900;
    color: #379aff;
  }

  .tabBoxOne p {
    color: #999;
    font-size: 12px;
    text-align: left;
    line-height: 1.5;
  }

  .tabBoxThr {
    text-align: left;
    padding: 20px;
  }

  .tabBoxThr li {
    padding-bottom: 16px;
    border-bottom: 1px solid #ccc;
  }

  .tabBoxThr li:last-child {
    border-bottom: none;
  }

  .tabBoxThr h4 {
    font-size: 16px;
    padding: 20px 0;
  }

  .upNum {
    color: #999;
  }

  .upNum em {
    color: #26a2ff;
  }

  .seeFiles {
    height: 20px;
    font-size: 12px;
    float: right;
    background-color: #5173ff;
    border-radius: 10px;
  }

  .mint-msgbox-wrapper .file:last-child {
    border-bottom: none;
  }

  .fileBox {
    border-bottom: 1px solid #ccc;
  }

  .fileBox:last-child {
    border-bottom: none;
  }

  .tabBoxTwo {
    text-align: left;
    padding: 20px;
  }

  .tabBoxTwo .liLeft, .tabBoxTwo .liRight {
    color: #444;
    font-size: 16px;
    vertical-align: top;
    display: inline-block;
    padding: 6px 0;
  }

  .tabBoxTwo .liLeft {
    width: 29%;

  }

  .tabBoxTwo .liRight {
    float: right;
    width: 70%;
    text-align: right;
    word-wrap: break-word;
  }

  .tabBoxTwo .tierTwo .liLeft, .tabBoxTwo .tierTwo .liRight {
    color: #888;
    font-size: 14px;
    width: 29%;
  }

  .clearfix:after, .clearfix:before {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both;
  }

  .mint-msgbox {
    width: 85%;
    margin: 0 auto;
    background: #fff;
    height: 80vh;
    padding-bottom: 40px;
  }

  .mint-msgbox-header {
    padding: 0;
  }

  .mint-msgbox-content {
    height: 100%;
    padding: 0;
  }

  .fileBox {
    height: 100%;
  }

  .mint-msgbox-wrapper {
    position: absolute;
    z-index: 41;
    top: 0;
    width: 100%;
  }

  .mint-msgbox-wrapper .file {
    height: 100%;
  }

  .mint-msgbox-wrapper .file img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    max-height: 100%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .process-result .result-click {
    text-align: center;
    margin-top: 0.36rem;
    color: #26a2ff;
  }

  .fileSpanDown {
    position: absolute;
    top: 50%;
    width: 100%;
    text-align: center;
    left: 0;
  }
</style>
