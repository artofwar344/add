<template>
  <div class="specialEquipment">
    <myheader :my-header="headerData"></myheader>
    <div class="example-field">
      <form>
        <div class="littlestarbig">
          <span class="littlestar">*</span>
        <Field disabled="disabled" :propserror="errorNum" :error="errorNumInfo"
               type="text" label="身份证号" :value="queryData.sfzh" placeholder="请输入身份证号"
               v-model="queryData.sfzh"
               v-on:currentval="handleNumVal" v-on:errorchange="handleErrorChangesNum">
        </Field>
        </div>
        <div class="example-field_btn-wrapper">
          <Btn block @click.stop.prevent="getData">核验</Btn>
          <Popupprompt
            v-model="popupVisible6"
            :title="popData.title"
            :text="popData.text"
            :confirm-btn={}
            :cancel-btn={}
            :btn-list="popData.btnList"
            @click="close"
          >
            <div slot="othercontent">
            </div>
          </Popupprompt>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/header'

export default {
  data () {
    return {
      params: this.$route.params || {},
      headerData: {
        title: '特种设备安全管理人员补证',
        backUrl: '/'
      },
      errorNum: false,
      errorNumInfo: '',
      popupVisible6: false,
      errMsg1: `您好！未查询到特种设备安全管理人员证件信息，无法办理此事项，请核实！如有疑问，请咨询相关部门。`,
      errMsg2: [`您好！经查询您的特种设备安全管理人员证件有效期至`, `，已过期失效，无法办理此事项，请核实！如有疑问，请咨询相关部门。`],
      errMsg3: `您好！经查询您有多个特种设备安全管理人员证，暂不支持线上办理，请前往发证机关办理。`,
      popData: {
        title: '无法办理此事项',
        text: '',
        btnList: [
          {
            id: 'btn1',
            text: '确认',
            primary: true
          }
        ]
      },
      queryData: {
        sfzh: '', // 532326197403073018
        unit_code: '',
        type: '00'
      }
    }
  },
  created () {
    const _self = this
    let cid = sessionStorage.getItem('cardid')
    if (cid && cid != 'null') {
      this.queryData.sfzh = cid
    }
    if (this.$route.query.WorkId) {
      localStorage.setItem('ZZWorkId', this.$route.query.WorkId)
      _self.queryData.WorkId = this.$route.query.WorkId
    } else {
      _self.queryData.WorkId = localStorage.getItem('ZZWorkId')
    }
  },
  components: {
    myheader: Header
  },
  methods: {
    handleErrorChangesNum (val) { // 数字错误状态接收
      this.errorNum = val
    },
    handleNumVal (val) {
      this.numValue = val
    },
    getData () {
      let _self = this
      if (!_self.queryData.sfzh) {
        _self.$toast('请输入身份证号')
        return
      }
      let sendData = {
        'txnCommCom': {
          'tRecInPage': '10',
          'tPageJump': '2',
          'tStsTraceId': '110567890'
        },
        'txnBodyCom': {
          'sfzh': _self.queryData.sfzh,
          'type': '00',
          'chann_id': '1',
          'matter_id': sessionStorage.getItem('matterid')
        }
      }
      _self.$ajaxRequest('post', '/gsp/mng60016', sendData).then(res => {
        _self.formetData(res)
        _self.queryData.unit_code = res.basic.unit_name
        _self.queryData.files_code = res.basic.files_code
      }).catch(error => {
        console.log(error)
      })
    },
    formetData (data) {
      let _self = this
      console.log(data)
      _self.init(data)
    },
    init (data) {
      let _self = this
      if (data.code === 0 && data.msg === '没有对应数据') {
        _self.popupVisible6 = true
        _self.popData.text = _self.errMsg1
      } else {
        let testTime = _self.testTime(data)
        let testInstitution = _self.testInstitution(data)
        if (testTime) {
          _self.popupVisible6 = true
          _self.popData.text = `${_self.errMsg2[0]}${data.quals[0].eff_time}${_self.errMsg2[1]}`
          return
        }
        if (testInstitution) {
          _self.popupVisible6 = true
          _self.popData.text = `${_self.errMsg3}`
          return
        }
        _self.goto()
      }
    },
    testTime (data) {
      // const _self = this
      let o = true
      for (let i = 0; i < data.quals.length; i++) {
        let date = parseInt(data.quals[i].eff_time.split('-').join(''))
        let nowData = `${new Date().getFullYear()}${new Date().getMonth()}${new Date().getDay()}`
        if (date > nowData) {
          o = false
          break
        }
      }
      return o
    },
    testInstitution (data) {
      // const _self = this
      let o = false
      if (data.basic.length) {
        for (let i = 0; i < data.basic.length; i++) {
          let name = data.basic[0].unit_code
          if (name !== data.basic[i].unit_code) {
            o = true
            break
          }
        }
      } else {
        return o
      }
      return o
    },
    close () {
      const _self = this
      _self.popupVisible6 = false
    },
    goto () {
      const _self = this
      console.log(_self.queryData)
      _self.popupVisible6 = false
      _self.$router.push({
        path: '/supplement',
        name: '特种设备安全管理人员补证申请',
        params: {
          queryParams: _self.queryData
        }
      })
    }
  }
}
</script>

<style>
  html,body{height:100%;}
  .hui-field_core {
    text-align: right
  }
</style>
<style scoped="specialEquipment">
  .specialEquipment{height:100%;background: #eee;}
  .hui-field_main {
    font-size: 0.28rem;
  }

  .hui-field_star {
    display: none;
  }

  .hui-btn.is-block {
    width: 5.9rem;
    height: 0.9rem;
    margin: 1rem auto;
    background-color: #2D7FFC;
    font-size: 0.32rem;
    color: #fff;
  }

  .hui-popupPrompt_text {
    text-align: left;
    color: #A3A3A3;
  }
  .specialEquipment .littlestarbig{
    position: relative;
  }
  .specialEquipment .littlestar{
    display: inline-block;
    color: red;
    font-size:0.4rem;
    position: absolute;
    left:0.06rem;
    top: 37%
  }
</style>
