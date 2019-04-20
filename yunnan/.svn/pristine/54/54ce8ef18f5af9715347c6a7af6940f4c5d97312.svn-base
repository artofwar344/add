<template>
  <div class="supplement">
    <myheader :my-header="headerData"></myheader>
    <div class="middle">
      <div class="example-field">
        <div class="littlestarbig">
          <span class="littlestar">*</span>
        <Field readonly type="text"  label="发证机关" placeholder="机关名称" v-model="params.queryParams.unit_code">
        </Field>
        </div>
      </div>
      <div class="example-upload">
        <div class="example-upload_formItem">

          <label class="example-upload_formLabel">申请材料</label>
          <span class="middlestarking">*</span>
          <p class="middlestarkingone">本人近期2寸正面免冠照片</p>
          <div class="example-upload" v-if="arr.length">
            <div v-for="(item,index) in arr" :key="index">
              <!-- //上传图片循环.. -->
              <div class="example-upload_formItem">
                <label class="example-upload_formLabel">{{ item.file_name }}</label>
                <div class="example-upload_formText">
                  <!--上传-->
                  <div class="example-upload">
                    <!--自定义上传图片-->
                    <ccbUpload
                               :upload-id=item.file_name
                               :is-befor-upload="true" ref="ccbUpload"
                               @beforUpload="beforUpLoad"
                               @uploadRes='handleRes'
                               app-id="GSP_APP_001" bucket-id="GSP_PRIVATE"
                               pic-url-pre-fixed="/image-service/downloadImage?"
                               :upload-index='index'>
                      <span class="example-upload_btn">+</span>
                    </ccbUpload>
                    <div class="example-upload_list">
                      <div class="example-upload_item" v-for="(subitem,subindex) in item.uploadId" :key="subindex">
                        <img :src="subitem"/>
                        <span class="example-upload_item-cover">
                            <em class="example-upload_item-delete"
                                @click="handleRemove(index,subindex,item.uploadId)">X</em>
                          </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="example-field bt">
        <Field readonly label="领取方式"
               disableclear type="text" v-model="sendData.qzfs" :value="sendData.qzfs"
               @click.native="open('QzfsSelect')">
            <span slot="append">
              <Icon type="arrow-right" size="14" color="#757575"></Icon>
            </span>
        </Field>
        <Selectpopup
          ref="QzfsSelect"
          position="bottom"

          :dataslots="selectQzfsData"
          @confirms="selectInQzfsData"
        ></Selectpopup>
      </div>
      <div class="sjrdz" @click="goto('address')" v-if="sendData.qzfs==='物流邮寄'">
        <h4>邮寄地址</h4>
        <p>
          <span>
            <i>{{_self.sendData.sjrdz.postname}}{{_self.sendData.sjrdz.tel}}</i>
            <b>{{_self.sendData.sjrdz.prov_code}}{{_self.sendData.sjrdz.city_code}}{{_self.sendData.sjrdz.cnty_code}}{{_self.sendData.sjrdz.address}}</b>
          </span>
          <span><i class="hui-icon hui-icon_arrow-right" style="font-size: 14px; color: rgb(117, 117, 117);"></i></span>
        </p>
      </div>
      <div class="example-pageprompt">
        <div class="mark" @click.stop.prevent="closeMark" v-if="showMark"></div>
        <!-- <Btn plain block @click.stop.prevent="next">完成</Btn> -->
        <div class="padTopAdd5">
          <mybutton :btnData="btnData" @click.stop.prevent="next" />
        </div>
        <Pageprompt
          :visible="showWithBtn"
          message="您好！您的申请已提交成功，预计6个工作日内办结，办理进度请在“我的办理进度”中查询，办理结果请随时关注消息提醒。"
          show-btn
          icon-type="success"
          :btn-confirm="btnConfirm"
        >
        </Pageprompt>
        <!-- <Pageprompt
          :visible="showWithBtn2"
          :message="sendErrMsg" icon-type="erroe" show-btn
          :btn-confirm="btnConfirm" @click="goto">
        </Pageprompt> -->
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/header/header'
import ccbUpload from '@/components/ccb-upload'
import BasicFormSubmit from '@/utils/BasicFormSubmit'
 import mybutton from "@/components/MyButton";

export default {
  data () {
    return {
      btnData:[
          {
            text:'完成',
            disabled: false,
            isSure: true,
          }
        ],
      params: this.$route.params || {},
      headerData: {
        title: '特种设备安全管理人员补证',
        backUrl: ''
      },
      defaultList: [],
      showMark: false,
      showWithBtn: false,
      showWithBtn2: false, // 失败
      btnConfirm: {
        hasbtn: true,
        text: '确定'
      },
      selectQzfsData: [
        {
          flex: 1,
          values: [
            {text: '物流邮寄', value: '2'},
            {text: '窗口自取', value: '1'}
          ],
          showText: 'text',
          className: 'slot1',
          defaultIndex: 0
        }
      ],
      isSendSuccess: true,
      arr: [
        {file_name: '', uploadId: []}
      ],
      arrs: [],
      uploadIndex: '',
      sendErrMsg: '',
      fileOldName: '',
      sendData: {
        qzfs: '物流邮寄',
        sjrdz: {}
      }
    }
  },
  created () {
    const _self = this
    if (_self.params.queryParams) {
      localStorage.setItem('ZZQueryParams', JSON.stringify(_self.params.queryParams))
      this.$store._modules.root.state.$expressdelivery.supplementImgInf = {}
      this.$store._modules.root.state.$expressdelivery.sendUserInfo = {}
    } else {
      _self.params.queryParams = JSON.parse(localStorage.getItem('ZZQueryParams'))
    }
    _self.headerData.title = _self.params.queryParams.type === '00' ? '特种设备安全管理人员补证' : '特种设备作业人员补证'
  },
  mounted () {
    const _self = this
    console.log(this.$store)
    let supplementImgInf = this.$store._modules.root.state.$expressdelivery.supplementImgInf
    let sendUserInfo = this.$store._modules.root.state.$expressdelivery.sendUserInfo
    if (sendUserInfo) {
      _self.sendData.sjrdz = sendUserInfo
    }
    if (supplementImgInf && supplementImgInf.arr) {
      this.arr = supplementImgInf.arr
      this.arrs = supplementImgInf.arrs
      this.subitem = supplementImgInf.arr[0].uploadId[0]
    }
  },
  components: {
    mybutton,
    ccbUpload,
    myheader: Header
  },
  methods: {
    open: function (picker) {
      this.$refs[picker].open()
      document.activeElement.blur()
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    selectInQzfsData (selectedVal) {
      if (typeof selectedVal[0] === 'object') {
        this.sendData.qzfs = selectedVal[0].text
      } else {
        this.sendData.qzfs = selectedVal
      }
    },
    handleClickWidthBtn () {
      const _slef = this
      _slef.showSuccess = false
      _slef.showFailed = true
      if (_slef.isSendSuccess) {
        _slef.showWithBtn = true
        _slef.setBtnEvent()
      } else {
        _slef.showWithBtn2 = true
      }
      _slef.showMark = !this.showMark
    }, // 弹框
    goto (address) {
      const _self = this
      if (address === 'mypaper') {
        _self.$router.push('mypaper')
      } else if (address === 'address') {
        this.$store._modules.root.state.$expressdelivery.supplementImgInf = {arr: this.arr, arrs: this.arrs}
        _self.$router.push('myaddress')
      }
    },
    setBtnEvent () {
      const _self = this
      const oBtn = document.getElementsByClassName('hui-pagePrompt_operation')[0].getElementsByTagName('button')[0]
      oBtn.onclick = function () {
        _self.$CallModule('close', '关闭')
      }
    },
    closeMark () {
      const _self = this
      _self.showWithBtn = false
      _self.showMark = !_self.showMark
    },
    formatData (data) {
      console.log(data)
      const _self = this
      localStorage.removeItem('ZZQueryParams')
      localStorage.removeItem('ZZWorkId')
      _self.init(data)
    },
    init (data) {
      const _self = this
      if (data.rs_code === '00') {
        _self.isSendSuccess = true
        _self.handleClickWidthBtn()
      } else {
        _self.isSendSuccess = false
        _self.sendErrMsg = data.msg
        // _self.handleClickWidthBtn()
      }
    },
    next () {
      const _self = this
      if (_self.testValue()) return
      _self.submitData()
    },
    testValue () {
      const _self = this
      let stutas = false
      if (_self.arrs.length < 1) {
        stutas = true
        _self.$toast('请选择图片上传')
      } else if (!_self.sendData.sjrdz.postname && _self.sendData.qzfs === '物流邮寄') {
        stutas = true
        _self.$toast('请选择物流地址')
      }
      return stutas
    },
    submitData () {
      const _self = this
      _self.params.queryParams.WorkId = localStorage.getItem('ZZWorkId')
      let qzfs = _self.sendData.qzfs === '物流邮寄' ? '1' : '0'
      let formSendData = {
        sendData: {
          work_id: _self.params.queryParams.WorkId, // 'abbd2786e3064963854599dfe136a4e0',办件编号
          qc_ctfid: _self.params.queryParams.files_code, // 质监证书编号
          rsn: '遗失', // 原因 sessionStorage.getItem('cardid') || '325102922111111245',
          crdt_no: _self.params.queryParams.sfzh, // 证件号码
          // pic: _self.arr[0].uploadId, // 照片
          vld_typ: qzfs, // /验证/取证/调查方式
          rcv_psn_nm: _self.sendData.sjrdz.postname, // 收件/接收人姓名
          rcv_adr: _self.sendData.sjrdz.prov_code + _self.sendData.sjrdz.city_code + _self.sendData.sjrdz.cnty_code + _self.sendData.sjrdz.address, // 收件/接收地址
          rcv_tel: _self.sendData.sjrdz.tel, // 收件/接收电话
          cmtd: '自费' // 收费方式
          // exp_dlv_id: '', // 快递编号
          // type: _self.params.queryParams.type
        },
        callback: ''
      }
      let fileSendData = {
        sendData: _self.arrs,
        receiver: {
          type: `0${qzfs}`,
          name: _self.sendData.sjrdz.postname,
          // company: '',
          // tel: '',
          mobile: _self.sendData.sjrdz.tel,
          // post_code: '',
          province_name: _self.sendData.sjrdz.prov_code,
          city_name: _self.sendData.sjrdz.city_code,
          exp_area_name: _self.sendData.sjrdz.cnty_code,
          // subdistrict: '',
          address: _self.sendData.sjrdz.address
        },
        callback: _self.formatData
      }
      BasicFormSubmit({
        WorkId: _self.params.queryParams.WorkId,
        from: formSendData,
        file: fileSendData
      })
      //裕农通APP功能，勿删！
      if (window.sessionStorage.getItem("CHNL_ID") === "CC03C004") {
        PJF.ynt.A0161G058()
      }
    },
    beforUpLoad (opts) {
      const _self = this
      let timestamp = Date.parse(new Date())
      let imgName = 'crdtpic_' + timestamp + '.' + opts.file.name.replace(/.+\./, '')
      opts.cdnParams.ObjNm = imgName
      _self.fileOldName = imgName
      _self.$refs.ccbUpload[0].nextUoload(opts.file, opts.cdnParams)
    },
    handleRes (data) {
      const _self = this
      _self.flag = true
      _self.arr[data.index].uploadId.push(data.fileUrl)
      _self.flag = true
      let fileParam = {
        // matter_file_id: '',
        file_path: 'GSP_PRIVATE',
        // file_type: '',
        // file_size: '',
        file_oriname: _self.fileOldName,
        file_name: data.ObjNm,
        file_desc: '申请材料'
        // dzzz_file_id: '',
        // dzzz_file_path: ''
      }
      _self.arrs.push(fileParam)
    }, // 添加图片上传
    handleRemove (index, subindex, uploadId) {
      // 删除图片上传
      // this.flag = false;
      this.arr[index].uploadId.splice(subindex, 1)
      this.arrs.pop()
    }
  }
}
</script>
<style>
  .hui-field_core {
    text-align: right;
  }

  .supplement .hui-field_main {
    font-size: 0.32rem;
    height: 1rem;
  }

  .hui-field_star {
    display: none;
  }

  .hui-pagePrompt {
    background-color: #fff;
    z-index: 100;
    top: 45%;
  }

  .hui-pagePrompt_operation .hui-btn:first-child {
    background-color: #fff;
    color: #2D7FFC;
    margin: 0;
    /*border-radius: 0;*/
  }

  .supplement input[type=file] {
    display: none;
  }
</style>
<style lang="less" scoped>
  .supplement {
    .mark {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 10;
    }
    p {
      color: #999;
      margin-top: 0.2rem;
    }
    .middle {
      .example-upload_formItem {
        font-size: 0.28rem;
        width: 90%;
        margin: 0.2rem auto;
        text-align: left;
      }
      .example-upload_list {
        width: 1.6rem;
        .example-upload_item {
          position: relative;
          img {
            width: 1.6rem;
            height: 1.6rem;
          }
          span {
            position: absolute;
            right: 0;
            top: 0;
          }
        }
      }
      .example-upload_btn {
        display: block;
        margin-top: 0.2rem;
        width: 1.6rem;
        height: 1.6rem;
        background-color: #F5F5F5;
        font-size: 1rem;
        text-align: center;
        line-height: 1.6rem;
        color: #ccc;
      }
      .bt {
        .hui-field {
          border-top: 0.01rem solid #e1e2e6;
        }
      }
      .example-pageprompt {
        .hui-btn.is-block {
          width: 5.9rem;
          height: 0.9rem;
          margin: 1rem auto;
          background-color: #2D7FFC;
          font-size: 0.32rem;
          color: #fff;
        }
      }
      .sjrdz {
        &:after {
          content: '';
          display: block;
          clear: both;
        }
        padding: 5px 15px;
        border-bottom: 1px solid #e1e2e6;
        //height: 1rem;
        h4 {
          float: left;
          width: 20%;
          font-size: 0.32rem;
          height: 1rem;
          line-height: 1rem;
        }
        p {
          float: right;
          width: 75%;
          height: 1rem;
          text-align: left;
          margin-top: 0;
          &:after {
            content: '';
            display: block;
            clear: both;
          }
          span {
            &:first-child {
              float: left;
              width: 95%;
              b {
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              i {
                display: block;
                font-size: 0.28rem;
                color: #333;
                margin-bottom: 0.1rem;
                padding-top: 0.1rem;
              }
            }
            &:last-child {
              line-height: 1rem;
              float: right;
              width: 5%;
              text-align: right;
            }
            display: block;
            height: 1rem;
          }
        }
      }
    }
  }
  .supplement .littlestarbig{
    position: relative;
  }
  .supplement .littlestar{
    display: inline-block;
    color: red;
    font-size:0.4rem;
    position: absolute;
    left:0.06rem;
    top: 37%
  }
  .middlestarking{
    display: inline-block;
    font-size: 0.4rem;
    color: red;
    position: absolute;
    top: 35%;
    left: 0.1rem;
  }
  .middlestarkingone{
    margin-left: 0.1rem;
  }
</style>
