<template>
  <div class="notesApplication">
    <myheader :my-header="headerData"></myheader>
    <div class="notesApplicationContent">
      <h2>{{title}}</h2>
      <p v-html="content">
        <!--1. 本人已经认真阅读、理解并自愿遵守本网上报名系统中《报名人员必读事项》及《公告》所有内容和要求。
        <br/><br/>
        2. 本人保证提交的个人信息资料真实并符合相关规定，否则承担由此产生的所有后果，并随时接受考试管理机构在考前、考中、考后全过程做出的各项检查和处理。
        <br/><br/>
        3. 报名参加会计资格考试需首先在本网上报名系统进行注册。注册成功后，自行设定登录本网上报名系统的密码，并记录自动生成的注册号，再次登录时，需要使用注册号和密码，请妥善保管注册号和密码。因保管不善造成无法登陆由报考人员本人负责。需要特别注意的是，注册号和密码仅用于报名期间登录系统使用，考生在打印准考证、查询成绩时不需要提供注册号和密码。
        <br/><br/>
        4. 报考人员应在规定日期内自行登录本网上报名系统，查询本人报名状态。因本人未查询确认而带来的任何后果，由报考人员自行负责。
        <br/><br/>
        5. 考试报名交费方式按所在地省级考试管理机构的相关规定执行。未交费或交费不成功则无法取得参赛考试的资格。
        <br/><br/>
        6. 考试时间和考试批次由省级考试管理机构统一安排，并在准考证上载明。
        <br/><br/>
        7. 本人理解并同意，如出现不可抗力或突发停电、断网等原因无法正常报名或考试的，服从考试管理机构的另行安排。-->
      </p>
      <Checklist
        required
        v-model="isAgree"
        :options="checkList"
      ></Checklist>
      <!-- <Btn type="primary" @click="goto">下一步</Btn> -->
    	<mybutton :btnData="btnData" @click="goto" />
    </div>
  </div>
</template>
<!--// 请输入您的身份证号码-->
<script>
import Header from '@/components/header/header'
  	import mybutton from "../../../../components/MyButton";
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      btnData:[
					{
						text:'下一步',
						disabled: false,
						isSure: true,
					}
				],
      params: this.$route.params,
      headerData: {
        title: '报考须知及考试承诺',
        backUrl: '/JoinFleaMarket'
      },
      isAgree: [],
      checkList: [
        {label: '同意并接受', value: 'true'}
      ],
      title: '',
      content: ''
    }
  },
  created () {
    const _self = this
    _self.queryText()
  },
  computed: {
    ...mapGetters('bureauFinanceStore', [
      'workId',
      'sendDataSave',
      'pageDataSave'
    ])
  },
  components: {
			mybutton,
    myheader: Header
  },
  mounted () {},
  methods: {
    queryText () {
      const _self = this
      _self.params.sendData = _self.sendDataSave
      const bkjb = _self.formatLevel(_self.params.sendData.level)
      let sendData = {
        'txnCommCom': {
          'tenant': '530000000000',
          'txn_itt_chnl_id': '00',
          'txn_itt_chnl_type': '11',
          'C-Business-Id': '111111111'
        },
        'txnBodyCom': {
          'oper_id': '1011',
          'chann_id': '1',
          'bkjb': bkjb,
          'matter_id': sessionStorage.getItem('matterid')
        }
      }
      _self.$ajaxRequest('post', '/gsp/mng90041', sendData).then((res) => {
        _self.title = res.title
        _self.content = res.content.replace(/[。]+/g, `。<br>`)
      })
    },
    goto () {
      const _self = this
      if (_self.isAgree.length !== 0) {
        _self.$router.push({
          path: '/PersonalInformation',
          name: '会计等级考试填写报名信息',
          params: {} // _self.params
        })
      } else {
        _self.$toast('请勾选授权')
      }
    },
    formatLevel (level) {
      const _self = this
      let str = ''
      switch (level) {
        case '初级':
          str = '2'
          break
        case '中级':
          str = '1'
          break
        case '高级':
          str = '3'
          break
        default:
          _self.$toast('等级查询失败')
      }
      return str
    }
  }
}
</script>

<style>
  html,body{min-height:100%;}
  .notesApplication .hui-checklist{padding: 0;background: none;margin-bottom: 0.7rem;}
  .notesApplication .hui-checklist_titleBox{display: none;}
  .notesApplication .hui-checklist_label{font-size: .28rem;}
  .notesApplication .hui-checklist_item{margin: 0;padding: 0 .32rem;}
  .notesApplication .hui-checklist_itemWrapper{padding-top: 0}
  .notesApplication .hui-checklist_core{height: .32rem;width:.32rem;background: none;}
  .notesApplication .hui-btn-normal{margin-bottom: .62rem;width: 5.9rem;font-size: .3rem;}
</style>
<style lang="less" scoped>
  .notesApplication {
    background: #eee;
    height:100%;
    .notesApplicationContent{
      h2{width: 4rem; height:.96rem;font-size: .32rem;margin: .4rem auto .38rem;}
      p{text-align: left;padding: 0 .32rem;margin-bottom: .24rem;}
    }
  }
</style>
