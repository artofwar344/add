<template>
  <div class="MIPersonalInformation icon_container">
    <myheader :my-header="headerData"></myheader>
    <div class="MIPersonalInformationContent">
      <ul class="from">
        <li>
          <mySelect select-ref="cardTypeSelect" :value="pageData.cardTypeText"
                    label="证件类型" @selectObjRes="selectSetObjVaule" @selectArrRes="selectSetVaule"
                     :dataslots="cardTypeData"></mySelect>
                     <i class="icon">*</i>  
        </li>
        <li>
          <Field   type="text" label="证件号码" placeholder="请输入证件号" v-model="cardNum">
          </Field>
          <i class="icon">*</i>  
        </li>
        <li>
          <Field   type="text" label="姓名" placeholder="请输入姓名" v-model="pageData.name" >
          </Field>
          <i class="icon">*</i>  
        </li>
        <li>
          <mySelect select-ref="genderSelect" :value="pageData.genderText"
                    label="性别" @selectObjRes="selectSetObjVaule" @selectArrRes="selectSetVaule"
                     :dataslots="genderData"></mySelect>
          <i class="icon">*</i>  
        </li>
        <li>
          <Field readonly  type="text" label="出生日期" placeholder="请输入出生日期" v-model="sendData.birthday" >
          </Field>
          <i class="icon">*</i>  
        </li>
        <li>
          <mySelect select-ref="nationSelect" :value="pageData.nationText"
                    label="民族" @selectObjRes="selectSetObjVaule" @selectArrRes="selectSetVaule"
                     :dataslots="nationData"></mySelect>
          <i class="icon">*</i>  
        </li>
        <li>
          <mySelect select-ref="registeredResidenceSelect" :value="pageData.registeredResidenceText"
                    label="户口性质" @selectObjRes="selectSetObjVaule" @selectArrRes="selectSetVaule"
                     :dataslots="registeredResidenceData"></mySelect>
          <i class="icon">*</i>  
        </li>
        <li>
          <Field  type="text" label="户籍地址" placeholder="请输入户籍地址" v-model="pageData.address">
          </Field>
          <i class="icon">*</i>  
        </li>
        <li>
          <Field  type="text" label="参保地（区县）" placeholder="" v-model="pageData.countyText" readonly>
          </Field>
          <i class="icon">*</i>  
        </li>
        <li class="noBorder">
          <LevelFourLinkage ref="citys"
            :level-four-linkage-opt="LevelFourLinkageData"
            @selectObjRes="selectSetObjVaule" @selectArrRes="selectSetVaule" ></LevelFourLinkage>
        </li>
        <li>
          <Field readonly  type="text" label="参保时间" placeholder="请输入参保时间" v-model="sendData.keepTime">
          </Field>
          <i class="icon">*</i>  
        </li>
        <li>
          <!-- <Field  type="text" label="" placeholder="" v-model="sendData.proposerType" :disabled="isdisabled">
          </Field> -->
          <mySelect select-ref="proposertype" :value="pageData.proposerText"
                    label="申请人证件类型" @selectObjRes="selectSetObjVaule" @selectArrRes="selectSetVaule"
                     :dataslots="cardTypeData"></mySelect>
          <i class="icon">*</i>  
        </li>
        <li>
          <Field  type="text" label="申请人证件号码" placeholder="" v-model="sendData.proposerNum" disabled >
          </Field>
          <i class="icon">*</i>  
        </li>
        <li>
          <Field  type="text" label="申请人姓名" placeholder="" v-model="sendData.proposerName" disabled>
          </Field>
          <i class="icon">*</i>  
        </li>
      </ul>
      <myPageprompt ref="myPageprompt" :message="pageProMsg" :icontype="pageProicontype" @ackButton="pagepromptBtn"></myPageprompt>
      <div class="btns">
        <!-- <Btn type="primary" @click="next">提交</Btn> -->
        <mybutton :btnData="btnData"  @click="next"/>
      </div>
    </div>
  </div>
</template>
<!--// 请输入您的身份证号码-->
<script>
import Header from '@/components/header/header'
import mySelect from './components/select'
import LevelFourLinkage from './components/LevelFourLinkage'
import myPageprompt from './components/myPageprompt'
import { mapMutations, mapGetters, mapActions } from 'vuex'
import mybutton from "@/components/MyButton";
// 530127
export default {
  data () {
    return {
       btnData: [
        {
          text: "提交",
          disabled: false,
          isSure: true,
          click:'func1'
        }
      ],
      params: this.$route.params,
      headerData: {
        title: '填写个人信息',
        backUrl: ''
      },
      cardTypeData: [{
        flex: 1,
        values: [
          // {text: '身份证', value: '1010'},
          {text: '居民身份证(户口簿)', value: '1010'},
          // {text: '户口簿', value: '1040'},
        ],
        showText: 'text',
        className: 'slot1',
        defaultIndex: 0
      }],
      nationData: [{
        flex: 1,
        values: [],
        showText: 'cmnCdNm',
        className: 'slot1',
        defaultIndex: 0
      }],
      genderData: [{
        flex: 1,
        values: [
          {text: '男性', value: '1'},
          {text: '女性', value: '2'},
          {text: '未说明性别', value: '9'},
        ],
        showText: 'text',
        className: 'slot1',
        defaultIndex: 0
      }],
      registeredResidenceData: [{
        flex: 1,
        values: [
          {text: '非农业户口(城镇)', value: '10'},
          {text: '本地非农业户口(本地城镇)', value: '11'},
          {text: '外地非农业户口(外地城镇)', value: '12'},
          {text: '农业户口(农村)', value: '20'},
          {text: '本地农业户口(本地农村)', value: '21'},
          {text: '外地农业户口(外地农村)', value: '22'},
          {text: '港澳台侨人员', value: '30'},
          {text: '香港特别行政区居民', value: '31'},
          {text: '澳门特别行政区居民', value: '32'},
          {text: '台湾地区居民', value: '33'},
          {text: '华侨', value: '34'},
          {text: '外国人', value: '40'},
          {text: '未取得永久居留权的外国人', value: '41'},
          {text: '取得永久居留权的外国人', value: '42'},
          {text: '居民户口', value: '50'},
          {text: '本地居民户口', value: '51'},
          {text: '外地居民户口', value: '52'},
        ],
        showText: 'text',
        className: 'slot1',
        defaultIndex: 0
      }],
      pageProMsg: '',
      pageProicontype: 'success',
      pageData: {
        cardTypeText: "居民身份证(户口簿)",  //证件类型
        cardNum:"",//证件号码
        name:"",//姓名
        nationText: '',   //汉族
        genderText: '',  //性别
        registeredResidenceText: '',//户口性质
        address:"",//居住地址
        countyText: '',//区县
        villagesText: '',//乡镇
        hamletText: '',//村
        companyText: '',//参保单位 
        proposerText:"居民身份证(户口簿)"
      },
      sendData: {
        cardType: '1010',
        // cardNum: '',
        // name: '',
        nation: '',
        gender: '',
        birthday: '',
        registeredResidence: '',
        // address: '',
        county: '',
        villages: '',
        hamlet: '',
        company: '',
        keepTime: '',
        proposerType:"1010",
        proposerNum:"",
        proposerNamw:"",  
      },
      isdisabled:true,
      cardNum:"",
      // cardNum:"53040220020307345",
      cityListOne:"",
      cityListTwo:"",
      cityListThree:"",
      cityListFour:"",
      cityMsg:"0",
      fileType:Object
    }
  },
  created () {
    const _this = this;
    // 赋值
    _this.initPage();
  },
  watch: {
    "cardNum"(data){
      let _this = this;
      _this.pageData.cardNum = data;
      if(data.length == 18){     
        if(_this.verifyValue('cardNum', data)){
          _this.cityMsg = "0";
          _this.pageData.countyText;
          data = data.slice(0,6)
          _this.citysOne(data)
          _this.sex()
        }
      }
    }//当身份证条件成立自动获取性别,出生日期,区县,乡镇
  },
  mounted () {
    const _this = this;
  },
  computed: {
    ...mapGetters('medicalInsuranceRegisterStore', [
      'sendDataSave',
      'pageDataSave'
    ]),
    LevelFourLinkageData () {
      const _self = this
      let arr = [
        {value: _self.pageData.countyText},
        {value: _self.pageData.villagesText},
        {value: _self.pageData.hamletText},
        {value: _self.pageData.companyText}
      ]
      return arr
    }
  },
  components: {
    myheader: Header,
    mySelect,
    LevelFourLinkage,
    myPageprompt,
    mybutton
  },
  methods: {
    ...mapMutations('medicalInsuranceRegisterStore', [
      'setSendData',
      'setPageData'
    ]),
    ...mapActions('medicalInsuranceRegisterStore', [
      'fetchTempSaveData'
    ]),
    initPage () {
      const _this = this;
      _this.sendData.keepTime = `${new Date().getFullYear()}年${new Date().getMonth() + 1}月${new Date().getDate()}日`
      //获取民族
      _this.getNation();
      // 用户信息
      _this.valuation();
   },
    selectSetObjVaule (opts) {
      // debugger
      const _self = this
      const picker = opts.picker
      const selectedVal = opts.selectedVal
      switch (picker) {
        case 'cardTypeSelect':
          _self.pageData.cardTypeText = selectedVal.text
          _self.sendData.cardType = selectedVal.value
          break
        case 'proposertype':
          _self.pageData.proposerText = selectedVal.text
          _self.sendData.proposerType = selectedVal.value
          break
        case 'nationSelect':
          _self.pageData.nationText = selectedVal.cmnCdNm
          _self.sendData.nation = selectedVal.cmnCd
          break
        case 'genderSelect':
          _self.pageData.genderText = selectedVal.text
          _self.gender = selectedVal.text
          _self.sendData.gender = selectedVal.value
          break
        case 'registeredResidenceSelect':
          _self.pageData.registeredResidenceText = selectedVal.text
          _self.sendData.registeredResidence = selectedVal.value        
          break
        case 'countySelect':
          _self.pageData.countyText = selectedVal.regnNm
          _self.sendData.county = selectedVal.regnCode
          _self.citystwo(selectedVal.regnCode)
          // _self.citystwo(selectedVal.suprRegnCode)
          break 
        case 'villagesSelect':
          _self.pageData.villagesText = selectedVal.sab102
          _self.sendData.villages = selectedVal.sab002
          _self.pageData.hamletText = "";
          _self.pageData.companyText = "";
          _self.sendData.hamlet = "";
          _self.sendData.company = "";
          _self.cityListThree = "";
          _self.cityListFour = "";
          if(selectedVal.isleaf != "1"){
            _self.citysThree(selectedVal.sab002)
          }
          break
        case 'hamletSelect':
          _self.pageData.hamletText = selectedVal.sab101
          _self.sendData.hamlet = selectedVal.sab001
          _self.pageData.companyText = "";
          _self.sendData.company = "";
          _self.cityListFour = "";
          if(selectedVal.isleaf != "1"){
            _self.citysfour(selectedVal.sab001)
          }
          break
        case 'companySelect':
          _self.pageData.companyText = selectedVal.aab004
          _self.sendData.company = selectedVal.aab001
          if(selectedVal.isleaf != "1"){
           _self.$toast('您选择参保单位无法办理此事项')
          }
          break
        default:
          _self.$toast('无此下拉值')
      }
    }, // 下拉回调
    citysOne(data){
      let _this = this;
      let sendData = {"txnBodyCom":{
        matter_id:sessionStorage.getItem("matterid"),
        areaCode:data,
        regnLevel:"3",
        oType:"GAT"
      }}
      _this.$ajaxRequest("post", "/gsp/mng19021", sendData).then(res => {
          if(res.length >= 0){
            _this.pageData.countyText = res[0].regnNm
            _this.sendData.county = res[0].regnCode
            _this.citystwo(res[0].regnCode);
          }else{
            this.cityMsg = "1";
             this.$toast("未查询到您的参保地区县，无法办理此事项！")
          }
      });
    },//公安厅获取区县
    citystwo(val){
      let _this = this; 
      let sendData = {"txnBodyCom":{
        "matter_id":sessionStorage.getItem("matterid"),
        "chann_id":"1",
        "aaf016":val
      }}
      let page = {"tRecInPage":"100","tPageJump":"1",}          
      _this.$ajaxRequest('post', '/gsp/mng80107', sendData,page).then((res) => {
        
        if(res.rowdatas){
            this.$refs.citys.villagesData[0].values = res.rowdatas;
            this.cityListTwo = res.rowdatas.length;
        }else{
          this.cityMsg = "2";
          this.$toast("未查询到您的参保地乡镇，无法办理此事项！")
        }
      })
    },//获取县镇
    citysThree(val){
      let _this = this;
      let sendData = {"txnBodyCom":{
        "matter_id":sessionStorage.getItem("matterid"),
        "chann_id":"1",
        "aaf016":this.sendData.county,
        "sab002":val
      }}
      let page = {"tRecInPage":"100","tPageJump":"1",} 
      _this.$ajaxRequest('post', '/gsp/mng80108', sendData,page).then((res) => {       
       
       if(res.rowdatas){
            this.$refs.citys.hamletData[0].values = res.rowdatas;
            this.cityListThree = res.rowdatas.length;
        }else{
          this.cityMsg = "3";
          this.$toast("未查询到您的参保地村，无法办理此事项！")
        }
      })
    },//获取村
    citysfour(val){
      let _this = this;
      let sendData = {"txnBodyCom":{
        "matter_id":sessionStorage.getItem("matterid"),
        "chann_id":"1",
        "aaf016":this.sendData.county,
        "sab001":val
      }}
      let page = {"tRecInPage":"100","tPageJump":"1",} 
      _this.$ajaxRequest('post', '/gsp/mng80109', sendData,page).then((res) => { 
      if(res.rowdatas){
             this.$refs.citys.companyData[0].values = res.rowdatas;
             this.cityListFour = res.rowdatas.length;
        }else{
          this.cityMsg = "4";
          this.$toast("未查询到您的参保单位，无法办理此事项！")
        }
      })
    },//获取参保单位
    selectSetVaule () {
      // this.$toast('还没空写数组类型的，改成对象的去。一定要用的话就自己写')
    },
    goto () {
      const _this = this;
      var reg =/[\u4e00-\u9fa5]/g;
      if(_this.cardNum.length != 18){
        this.$toast("请输入有效的18位证件号码")
        return
      }
      // 判断区县
      if(_this.cityMsg == "1"){
        this.$toast("未查询到您的参保地区(县)，无法办理此事项！")
        return
      }else if(_this.cityMsg == "2"){
        this.$toast("未查询到您的参保地街道(乡镇)，无法办理此事项！")
        return
      }
      // 验空
      for(let i in _this.pageData){    
          if(!this.validate(i)) return
      }
      //参保有回调必须选择
      if(_this.sendData.villages == "" && _this.cityListTwo != 0){
          this.$toast("请选择参保地乡镇")
          return
      }
      if(_this.sendData.hamlet == "" && _this.cityListThree != 0){
          this.$toast("请选择参保地村")
          return
      }
      if(_this.sendData.company == "" && _this.cityListFour != 0 ){
          this.$toast("请选择参保地单位")
          return
      }
      //是否满18岁
      if(_this.getAge(_this.sendData.birthday) == true){
        this.$toast("参保人已成年，无法由父/母代办！")
        return
      }
      // 判断户籍
      let hj = this.cardNum;
          hj = hj.slice(0,2);
      if(hj != "53"){
         this.$toast("参保人的户籍地不在云南省范围内！")
        return 
      }
      // 校验参保人是否可参保
      this.pepleNum()
    },
    pepleNum(){
      let _this = this;
      let county = this.sendData.county.slice(0,4);
        let data = {"txnBodyCom":{
            "matter_id":sessionStorage.getItem("matterid"),
            "chann_id":"1",
            "aac058":this.sendData.cardType,
            "aac002": this.pageData.cardNum,
            "aaf017":county,
            "aac005":sessionStorage.getItem("userphone"),
            "aac003":this.pageData.name,
            }
        }
        _this.$ajaxRequest("post","/gsp/mng80110",data).then((res) => {
          if(res.existflag == "1"){
            _this.callPageprompt('error', '参保人已办理过城乡居民基本医疗保险参保登记，请勿重复办理！')  
          }else{
            _this.callPageprompt('success', '您已具备办理城乡居民基本医疗保险参保登记的条件！')  
          }
      }).catch((response) => {});
    },//校验参保人是否参过保
    testFrom () {
      let _this = this
      var reg =/[\u4e00-\u9fa5]/g;
      let time = this.getNowFormatDate()
      let sendData = {
        Crdt_Tp:_this.sendData.cardType,
        Insrd_Psn_Crdt_No: _this.cardNum,
        MblPh_No: sessionStorage.getItem("userphone"),
        Insrd_Psn_Nm: _this.pageData.name,
        Insrd_Psn_Brth_Dt: _this.sendData.birthday,
        Ethnct: _this.sendData.nation,
        Gnd: _this.sendData.gender,
        Insrd_Tm: time,
        HshldRgst_Rsdnc_Lnd: _this.pageData.address,
        SlfSvcInsrdLndSelMode: _this.params.SlfSvcInsrdLndSelMode,//自助参保参保地选择模式  1户籍地 2 居住
        SlfSvcInsrd_DealW_Mod: _this.params.SlfSvcInsrd_DealW_Mod,//自助参保办理方式   11   12 
        Rsdnc_Char: _this.sendData.registeredResidence,  //户籍地类型
        Insrd_City: _this.sendData.county.slice(0,4),  //获取区县前四位
        Insrd_CntyDstc_ADivCd: _this.sendData.county,//区县  530101
        Insrd_Str_ECD: _this.sendData.villages ,//乡镇
        Insrd__Zon_ECD: _this.sendData.hamlet ,//村
        Insrd_Hdl_ECD: _this.sendData.company,// 参保经办点（村小组）编码
        Aply_Psn_Crdt_Tp: _this.sendData.proposerType,
        Aply_Psn_Crdt_No: sessionStorage.getItem("cardid"),
        APLY_PSN_NM: sessionStorage.getItem("username"),
        work_id: window.sessionStorage.getItem("WorkId"),
        Insrd_CntyDstc_Nm: _this.pageData.countyText,
        Insrd_Str_Nm: _this.pageData.villagesText,
        Insrd__Zon_Nm: _this.pageData.hamletText,
        Insrd_Hdl_Nm: _this.pageData.companyText,
      }
      let data = {
        'txnBodyCom':{
          'work_id': window.sessionStorage.getItem("WorkId"),
          'member_id': window.sessionStorage.getItem("userid"),
          'matter_id': window.sessionStorage.getItem("matterid"),
          // 'tenant': "530000000000",
					// 'txn_itt_chnl_id': "00",
					// 'txn_itt_chnl_type': "11",
          'json_content':sendData
        }
      }
      // debugger
      this.$ajaxRequest("post","/gsp/appForm00001",data).then((res) => {
        if(res.Status == "00"){
          this.close()
          _this.$router.push({
            path: '/MIRrsultPage',
            name: '参保个人信息登记结果',
            params: {
              zt:true,
              stateNum:res.MedInsr_Idv_ID,
              stateMsg:res.Rel_Prmpt	
            }
          })
        }else{
          this.close()
          _this.callPageprompt('error', '提交失败')  
        }
      }).catch((response) => {
        this.close()
        _this.$refs.myPageprompt.zt = Boolean;
        _this.$refs.myPageprompt.showMark = false;
        _this.$refs.myPageprompt.showWithBtn = false;
      });
    },
   validate(data){
      const _this = this;
      if(data == 'villagesText' || data == 'hamletText' || data == 'companyText'){
         return true
      }
      let msg = {
        cardTypeText: '请选择证件类型',
        nationText: '请选择民族',
        genderText: '请选择性别',
        registeredResidenceText: '请选择户口性质',
        countyText: '请选择区县',
        villagesText: '请选择乡镇',
        hamletText: '请选择村',
        companyText: '请选择参保单位',
        cardNum:"请填写证件号码",
        name:"请填写姓名",
        address:"请填写户籍地址",
      }
      if(_this.pageData[data] == "" || _this.pageData[data] == null || _this.pageData[data] == "null"){
        this.$toast(msg[data])
        return false
      }
      return true
    }, // 判空
    verifyValue (type, value) {
      let status = false
      const verifyEmail = value => {
        const reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/ig
        return reg.test(value)
      }
      switch (type) {
        case 'email':
          status = verifyEmail(value)
          break
        default:
          this.$toast('暂无法验证此类型数据')
      }
      return status
    },//
    callPageprompt (type, mag) {
      const _self = this
      _self.pageProMsg = mag
      _self.pageProicontype = type
      if(type == "success"){
        _self.$refs.myPageprompt.zt = true;
        _self.$refs['myPageprompt'].handleClickWidthBtn()
      }else{
        _self.$refs.myPageprompt.zt = false;
        _self.$refs['myPageprompt'].handleClickWidthBtn()
      }
    },//表单提交判断
    pagepromptBtn (data) {
      const _this = this;
      if(data == true){
        _this.$refs.myPageprompt.zt = Boolean;
        _this.$refs.myPageprompt.showMark = false;
        _this.$refs.myPageprompt.showWithBtn = false;
        _this.fileType =  this.$toast({
          message: '提交中...',
          iconType: 'loading',
          manualClose: true
        });
        _this.testFrom()
      }else{
        _this.$refs.myPageprompt.zt = Boolean;
        _this.$refs.myPageprompt.showMark = false;
        _this.$refs.myPageprompt.showWithBtn = false;
      }
    },//弹窗回调
    valuation(){
      var name = sessionStorage.getItem("username");
      var cardid = sessionStorage.getItem("cardid");
      if(name != "null"){
          this.sendData.proposerName = name;      
      }
      if(cardid != "null"){
          this.sendData.proposerNum = cardid;    
      }
    },//赋值
    getNation(){
      let _this = this;
      const sendata={
      "txnCommCom":{"tRecInPage":"10","tPageJump":"2","tStsTraceId":"110567890"},
      "txnBodyCom":{
        matter_id: window.sessionStorage.getItem("matterid"),"parentId":"1012"}
      }
      _this.$ajaxRequest('post','/gsp/mng19019',sendata).then(res=>{
          _this.nationData[0].values = res;     
      }).catch(error => { 
      });
    },//获取民族
    verifyValue(type,value) {
      const _self = this
      let status = false
      const cardNum = (value) => {
        let reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
        return reg.test(value)
      } // 校验身份证
      switch (type) {
        case 'cardNum':
          status = cardNum(value)
          break
        default:
          _self.$toast('暂无此校验类型')
          return
      }
      return status
    }, // 校验工具
    getBirthday (cardNum) {
      if (cardNum.length === 18) {
        // return `${parseInt(cardNum.slice(6, 10))}-${parseInt(cardNum.slice(10, 12))}-${parseInt(cardNum.slice(12, 14))}`
        let year = parseInt(cardNum.slice(6, 10))
        let month = parseInt(cardNum.slice(10, 12))
        let strDate = parseInt(cardNum.slice(12, 14))
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        let endNum = year + "-" +month+"-"+strDate
        return endNum
      }
    }, // 获取生日
    getSex (cardNum) {
      const _self = this
      if (cardNum.length === 18) {
        const sexNum = parseInt(cardNum.slice(-2, -1))
        if (sexNum % 2 === 0) {
          return '2'
        } else {
          return '1'
        }
      }
    },//判断年龄
    getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age > 18;
    },
    sex(){
      const _self = this;
      var cardid = _self.pageData.cardNum;
      let reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
      if(reg.test(cardid)){
        this.pageData.genderText= _self.getSex(cardid) === '1' ? '男' : '女'
        switch(this.pageData.genderText){
          case "男" :
            this.sendData.gender = "1"
            break
          case "女":
            this.sendData.gender = "2"
            break
          default:
            this.sendData.gender = "2"
        }
        this.sendData.birthday= _self.getBirthday(cardid)
      }
    },//性别
    next () {
      const _self = this
      _self.goto()
    },//弹窗
    getNowFormatDate () {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    },//获取当前时间
    close(){
      this.fileType.close();
    }
  }
}
</script>

<style>
  html, body {
    min-height: 100%;
  }

  .MIPersonalInformation .hui-field {
    height: 100%;
    border-bottom: none;
  }

  .MIPersonalInformation .hui-field_title {
    width: 2.4rem;
    text-align: left;
    font-size: 0.28rem;
    line-height: calc(1rem - 10px);
  }

  .MIPersonalInformation .hui-field_value {
    border: none !important;
  }

  .MIPersonalInformation .hui-field {
    padding-left: 0;
    padding-right: 0
  }

  .MIPersonalInformation .hui-field .hui-field_border .hui-field_borderLeft {
    border: none
  }

  .MIPersonalInformation .field-append_text img {
    height: 0.66rem;
  }

  .MIPersonalInformation .hui-field_core {
    text-align: right;
    font-size: .28rem;
  }

  .MIPersonalInformation .hui-checklist {
    padding-right: 0;
    padding-left: 0;
  }

  .MIPersonalInformation .hui-checklist_titleBox {
    text-align: left;
  }

  .MIPersonalInformation .hui-checklist_text {
    font-size: .28rem;
  }

  .MIPersonalInformation .hui-checklist_itemWrapper {
    background: #f7f7f7;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 1.82rem;
  }

  .MIPersonalInformation .hui-checklist_itemWrapper:after {
    content: '';
    display: block;
    clear: both;
  }

  .MIPersonalInformation .hui-checklist_itemWrapper .hui-checklist_item {
    font-size: .28rem;
    padding: 0;
  }

  .MIPersonalInformation .longerFrom .hui-field_title {
    width: 3.4rem;
  }

  .MIPersonalInformation input[type=file] {
    display: none;
  }
</style>
<style lang="less" scoped>
  .MIPersonalInformation {
    background: #ccc;
    height: 100%;
    .MIPersonalInformationContent {
      .from {
        background: #fff;
        margin-bottom: 1rem;
        margin-top: 0.2rem;
        padding: 0 0.36rem;
        .TestTitleBox {
          height: auto;
          p{
            text-align: left;
          }
        }
        li {
          border-bottom: 1px solid #e1e2e6;
          &:last-child{border-bottom: none;}
          form {
            height: 100%;
          }
          input {
            text-align: right;
            font-size: 0.28rem;
          }
          .noBorder {border-bottom: none;}
        }
        .imgUpload {
          height: 1.86rem;
          .example-upload {
            .getCamera {
              margin-right: 0.1rem;
            }
            div {
              .example-upload_formItem {
                &:after {
                  content: '';
                  display: none;
                  clear: both;
                }
                .example-upload_formLabel {
                  float: left;
                  width: 2.4rem;
                  text-align: left;
                  font-size: 0.28rem;
                  line-height: 1.86rem;
                }
                .example-upload_formText {
                  &:after {
                    content: '';
                    display: block;
                    clear: both;
                  }
                  div {
                    float: right
                  }
                  .example-upload_btn {
                    font-size: .22rem;
                    color: #2D7FFC;
                  }
                  float: right;
                  width: 2.4rem;
                  text-align: right;
                  font-size: 0.28rem;
                  line-height: 1.86rem;
                }
              }
            }
            .example-upload_list {
              margin-right: .2rem;
              .example-upload_item {
                position: relative;
                img {
                  width: 1rem;
                  height: 1.4rem;
                  vertical-align: middle;
                }
                span {
                  position: absolute;
                  top: -.6rem;
                  right: 0;
                }
              }
            }
          }
        }
        .fromDate {
          span {
            margin-left: 0.2rem;
          }
        }
      }
      .btns {
        text-align: center;
        button {
          width: 5.9rem;
          height: 0.9rem;
        }
        label {
          font-size: 0.32rem;
        }
      }
    }
  }
</style>
<style>
.icon_container .from li{
  position: relative;
}
.icon_container .from li .icon{
    display: inline-block;
    width: .42rem;
    position: absolute;
    border: 0;
    left: -.1rem;
    z-index: 1;
    font-size: .4rem;
    top: 50%;
    margin-top: -.14rem;
    color: #f00;
}
.icon_container .from>li{
  padding-left: .2rem;
}
.icon_container .btns{
  margin-bottom:.5rem;
}
.noBorder{
  padding-left:0 !important;
}
</style>
