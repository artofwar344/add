<style lang="less" scoped>
.domesticTwoWrap{
    .btn_wrap{
        padding: 1rem .55rem 1rem;
        box-sizing: border-box;
        display: flex;
        justify-content:space-between;
        .btn{
            width: 45%;
            font-size: .33rem;
            border-radius: 40px;
            line-height: .9rem;
            text-align: center;
            background: #2D7FFC;
            color: white;
        }
        .grey{
            background: #929292
        }
    }

    // .address {
    //   display: flex;
    //   background: #fff;
    //   padding: 0 0.2rem;
    //   border-bottom: 1px solid #e1e2e6;
    //   align-items: center;
    //   justify-content: space-between;

    //   // .item-content {
    //   //   min-height: 1rem;
    //   //   text-align: right;
    //   //   line-height: 1rem;
    //   //   flex: 1;
    //   //   color: #e1e2e6;
    //   // }

    //   .item-content.active {
    //     color: #000;
    //   }
    // }
}
</style>
<style>
.domesticTwoWrap .hui-field{
    height: 1rem;
    padding: 0rem .2rem;
    box-sizing: border-box;
    border: none;
    line-height: 1rem !important;
}
.domesticTwoWrap .hui-field_main{
    height: 100%;
    border-bottom: 1px solid #e1e2e6;
}
.domesticTwoWrap .hui-field_title{
    width: 2.3rem;
    height: 100%;
    line-height: 1rem !important;
}
.domesticTwoWrap .example-select_btn-wrapper{
    margin-top:15px;
  }
.domesticTwoWrap .example-select_arrowRight{
      display: block;
          margin-left: .1rem;
    width: .16rem;
    height: .26rem;
      background: url(../../../../assets/images/arrow.png) 0px center no-repeat;
      background-size: 100%;
  }
.domesticTwoWrap .textleft input{
    text-align: left;
}

.domesticTwoWrap .popupWrap{
    position: fixed;
    width: 100%;
    height: 95%;
    background: rgba(0, 0, 0, 0.5);
    left: 0;
    top: 0;
    z-index: 1;
}
.domesticTwoWrap .popupWrap .popupContent{
    width: 100%;
    background: white;
    position: fixed;
    bottom: 0;
}
.domesticTwoWrap .popupWrap .pop_btn_wrap{
    width: 100%;
    display: flex;
    bottom: 0;
    justify-content:space-between;
}
.domesticTwoWrap .popupWrap .pop_btn_wrap .pop_btn{
    width: 50%;
    font-size: .33rem;
    line-height: .9rem;
    text-align: center;
    color: #2D7FFC;
    border-bottom: 1px solid #ececec;
}
.domesticTwoWrap .popupWrap .pop_btn_wrap .pop_btn:first-child{
    border-right: 1px solid #ececec;
}
.domesticTwoWrap .middleone{
  position:relative;
}
.domesticTwoWrap .middletwo{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: absolute;
  top:35%;
  left:0;
}
</style>

<template>
    <div class="domesticTwoWrap">
        <towtop :name="titlename"/>
        <div class="domesticTwoWrap">
            <div class="content">
              <div class="middleone">
                <span class="middletwo">*</span>
                <Field type="text" disableclear  label="中文姓" :value="surname" placeholder="请输入您的中文姓"
                    v-on:currentval="handleSurname" >
                </Field>
              </div>
              <div class="middleone">
                <span class="middletwo">*</span>
                <Field type="text"  disableclear label="拼音姓"  :value="autoSurName">
                </Field>
              </div>
              <div class="middleone">
                <span class="middletwo">*</span>
                <Field type="text"  disableclear label="中文名" :value="firstname" placeholder="请输入您的中文名" v-on:currentval="handleFirstname" >
                </Field>
              </div>
              <div class="middleone">
                <span class="middletwo">*</span>
                <Field type="text"  disableclear label="拼音名"  :value="autoFirstName"></Field>
              </div>
              <div class="middleone">
                <span class="middletwo">*</span>
                <Field
                  type="text"  label="身份证号码" v-model="idNum" placeholder="请输入您的身份证号码"
                  v-on:currentval="handleIdNum">
                </Field>
              </div>
              <div class="middleone">
                <span class="middletwo">*</span>
                <Field readonly  label="性别" type="text" placeholder="请选择您的性别" :value="selectSex" @click.native="open('sexPicker')"><!---->
                        <span slot="append" class="example-select_arrowRight"></span>
                </Field>
              </div>
                <Selectpopup
                    ref="sexPicker"
                    position="bottom"
                    :dataslots="sexPicker"
                    class="example-select_item"
                    @confirms="selectedSex"
                ></Selectpopup>
              <div class="middleone">
                <span class="middletwo">*</span>
                <Field readonly label="出生日期"  type="text" placeholder="请选择您的出生日期" :value="selectDate" @click.native="open('datePicker')"><!--@click.native="open('datePicker')"-->
                        <span slot="append" class="example-select_arrowRight"></span>
                </Field>
              </div>
                <Datetime
                    ref="datePicker"
                    type="date"
                    v-model="valueDate"
                    position="bottom"
                    :start-date=startDate
                    :end-date=endDate
                    @confirm="selectedDate">
                </Datetime>
              <div class="middleone">
                <span class="middletwo">*</span>
                <Field readonly label="民族"  type="text" placeholder="请选择您的民族" :value="selectNation" @click.native="open('nationPicker')">
                        <span slot="append" class="example-select_arrowRight"></span>
                </Field>
              </div>
                <Selectpopup
                    ref="nationPicker"
                    position="bottom"
                    :dataslots="nationPicker"
                    class="example-select_item"
                    @confirms="selectedNation"
                ></Selectpopup>
              <div class="middleone">
                <span class="middletwo">*</span>
                <Field readonly label="出生地"  type="text" placeholder="请选择您的出生地" :value="selectBirth" @click.native="open('birthPicker')">
                        <span slot="append" class="example-select_arrowRight"></span>
                </Field>
              </div>
                <Selectpopup
                    ref="birthPicker"
                    position="bottom"
                    :dataslots="birthPicker"
                    class="example-select_item"
                    @confirms="selectedBirth"
                ></Selectpopup>

                <div @click.prevent='onshow(1)'>
                  <div class="middleone">
                    <span class="middletwo">*</span>
                    <Field type="text"  readonly label="户口所在地" :value="selectRegister" placeholder="请选择您的户口所在地" v-model='selectRegister'>
                    </Field>
                  </div>
              </div>
              <div class="middleone">
                <span class="middletwo">*</span>
                <Field type="text"  label="本人联系电话" :value="selfTele" placeholder="请输入您的联系电话" v-on:currentval="handleSelfTele" >
                </Field>
              </div>
              <div class="middleone">
                <span class="middletwo">*</span>
                <Field type="text"  label="紧急联系人" :value="emergencyContact" placeholder="请输入您的紧急联系人" v-on:currentval="handleEmergencyContact" >
                </Field>
              </div>
              <div class="middleone">
                <span class="middletwo">*</span>
                <Field type="text"  label="紧急联系人电话" :value="emergencyTele" placeholder="请输入您的紧急联系人电话" v-on:currentval="handleEmergencyTele" >
                </Field>
              </div>
              <div class="middleone">
                <span class="middletwo">*</span>
                <Field type="text"  label="收件人" :value="recipients" placeholder="请输入收件人的姓名" v-on:currentval="handleRecipients" >
                </Field>
              </div>
              <div class="middleone">
                <span class="middletwo">*</span>
                <Field type="number"  label="邮政编码" :value="postalcode" placeholder="请输入快递地址的邮政编码"
                    v-on:currentval="handlePostalcode" >
                </Field>
              </div>
              <div class="middleone">
                <span class="middletwo">*</span>
                <Field type="text"  label="收件人电话" :value="recipientsTele" placeholder="请输入收件人的电话"
                    v-on:currentval="handleRecipientsTele" >
                </Field>
              </div>
                <div @click.prevent='onshow(2)'>
                <!-- <div> -->
                  <div class="middleone">
                    <span class="middletwo">*</span>
                  <Field type="text"  label="速递地址" :value="deliveryLocation" placeholder="请选择快递地址的省、市、区/县" v-model='deliveryLocation'>
                  </Field>
                  </div>
                <!-- <div>
                  <span class="label">速递地址</span>

                  <p class="item-content" :class="deliveryLocation ? 'active' : ''">{{deliveryLocation ? deliveryLocation : '请选择快递地址的省、市、区/县'}}</p>
                </div> -->
        </div>
                <Field type="text"  :value="detailLocation" class="textleft" placeholder="请输入您的详细地址（街道、门牌号等）"  v-on:currentval="handleDetailLocation" >
                </Field>
            </div>
        </div>

        <div class="popupWrap" v-if="popupVisible">
            <div class="popupContent">
                <div class="pop_btn_wrap">
                    <div class="pop_btn" @click="popupVisible = false">取消</div>
                    <div class="pop_btn" @click="getRegister">确定</div>
                </div>
                <div class="popContent">
                    <Field readonly label="省级"  type="text" placeholder="请选择省级" :value="selectProvice" @click.native="open('provicePicker')">
                        <span slot="append" class="example-select_arrowRight"></span>
                    </Field>
                    <Selectpopup
                        ref="provicePicker"
                        position="bottom"
                        :dataslots="provicePicker"
                        @confirms="selectedProvice"
                    ></Selectpopup>
                    <Field readonly :label="textlabel"  type="text" placeholder="请选择市级" :value="selectCity" @click.native="open('cityPicker')" v-if="isDomestic">
                        <span slot="append" class="example-select_arrowRight"></span>
                    </Field>
                    <Selectpopup
                        ref="cityPicker"
                        position="bottom"
                        :dataslots="cityPicker"
                        @confirms="selectedCity"
                    ></Selectpopup>
                    <Field readonly label="区/县" type="text"  placeholder="请选择区/县" :value="selectCounty" @click.native="open('countyPicker')" v-if="isDomestic">
                        <span slot="append" class="example-select_arrowRight"></span>
                    </Field>
                    <Selectpopup
                        ref="countyPicker"
                        position="bottom"
                        :dataslots="countyPicker"
                        @confirms="selectedCounty"
                    ></Selectpopup>
                </div>
            </div>
        </div>

        <!-- <div class="btn_wrap">
            <div class="save btn" :class="{grey:!saveBol}" @click="tempSave">临时保存</div>
            <div class="save btn" @click="goto">下一步</div>
        </div> -->
        <div class="padTopAdd5">
          <mybutton :btnData="btnDataa" @func1='tempSave' @func2='goto' />

        </div>
    </div>
</template>

<script>
function dateFormat(time, format) {
    const t = new Date(time);
    const tf = function (i) {
      return (i < 10 ? '0' : '') + i;
    };
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, (a) => {
      switch (a) {
        case 'yyyy':
          return tf(t.getFullYear());
        case 'MM':
          return tf(t.getMonth() + 1);
        case 'mm':
          return tf(t.getMinutes());
        case 'dd':
          return tf(t.getDate());
        case 'HH':
          return tf(t.getHours());
        case 'ss':
          return tf(t.getSeconds());
        default:
          break;
      }
    });
  }
// 判断是否为手机号
function isPoneAvailable(pone) {
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(pone)) {
        return false;
    } else {
        return true;
    }
}
  // 判断是否为电话号码
function isTelAvailable(tel) {
    var myreg = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
    if (!myreg.test(tel)) {
        return false;
    } else {
        return true;
    }
}
// 判中文
function isChinese(val){
    var re=/[^\u4e00-\u9fa5]/;
    if(re.test(val)) return false;
    return true;
}
// 判中英文
function isChiEng(val){
    var pattern = /^.+?[^\u4e00-\u9fa5A-Za-z]+.+?$/;
    if(pattern.test(val)) return false;
    return true;
}
//  功能：根据身份证号获得出生日期
//  参数：身份证号 psidno
//  返回值： 出生日期
 function GetBirthday(psidno){
    var birthdayno,birthdaytemp
    if(psidno.length==18){
        birthdayno=psidno.substring(6,14)
    }else if(psidno.length==15){
        birthdaytemp=psidno.substring(6,12)
        birthdayno="19"+birthdaytemp
    }else{
        // alert("错误的身份证号码，请核对！")
        return false
    }
    var birthday=birthdayno.substring(0,4)+"-"+birthdayno.substring(4,6)+"-"+birthdayno.substring(6,8)
    return birthday
}
//  功能：根据身份证号获得性别
//  参数：身份证号 psidno
//  返回值：性别
function Getsex(psidno){
    var sexno,sex
    if(psidno.length==18){
        sexno=psidno.substring(16,17)
    }else if(psidno.length==15){
        sexno=psidno.substring(14,15)
    }else{
        // alert("错误的身份证号码，请核对！")
        return false
    }
    var tempid=sexno%2;
    if(tempid==0){
        sex='女'
    }else{
        sex='男'
    }
    return sex
}
import towtop from '@/components/HederTwo'
import {spellFun} from '@/components/spell'
import { cenurl } from "../../../../components/toptow.js"
import mybutton from "@/components/MyButton";

export default {
  data(){
    return {
      btnDataa:[
        {
          text:'临时保存',
          disabled: false,
          isSure: true,
          click:'func1'
        },
        {
          text:'下一步',
          disabled: false,
          isSure: true,
          click:'func2'
        },

      ],
      titlename: '出入境证件预受理',
      surname: '',
      firstname: '',
      autoSurName: '系统自动生成',
      autoFirstName: '系统自动生成',
      idNum: '',
      sexPicker: [{
        flex: 1,
        values: [],
        className: 'slot1',
        showText: 'text',
        defaultIndex: 0
      }],
      selectSex: '',
      confirmSex: [],
      valueDate: '',
      selectDate: '',
      startDate: new Date(1950, 1, 1),
      endDate: new Date(),
      nationPicker: [{
        flex: 1,
        values: [],
        className: 'slot1',
        showText: 'text',
        defaultIndex: 0
      }],
      selectNation: '',
      confirmNation: [],
      provinceList: [],
      birthPicker: [{
        flex: 1,
        values: [],
        className: 'slot1',
        showText: 'text',
        defaultIndex: 0
      }],
      selectBirth: '',
      confirmBirth: [],
      registerPicker: [
        {
          flex: 1,
          values: [],
          className: 'slot1',
          showText: 'text',
          defaultIndex: 0
        },
        {
          flex: 1,
          values: [],
          className: 'slot1',
          showText: 'text',
          defaultIndex: 0
        },
        {
          flex: 1,
          values: [],
          className: 'slot1',
          showText: 'text',
          defaultIndex: 0
        }
      ],
      selectRegister: '',
      confirmRegister: [],
      selfTele: '',
      emergencyContact: '',
      emergencyTele: '',
      recipients: '',
      postalcode: '',
      recipientsTele: '',
      deliveryLocation: '',
      detailLocation: '',
      popupVisible: false,
      provicePicker: [{
        flex: 1,
        values: [],
        className: 'slot1',
        showText: 'text',
        defaultIndex: 0
      }],
      selectProvice: '',
      confirmProvice: [],
      cityPicker: [{
        flex: 1,
        values: [],
        className: 'slot1',
        showText: 'text',
        defaultIndex: 0
      }],
      selectCity: '',
      confirmCity: [],
      countyPicker: [{
        flex: 1,
        values: [],
        className: 'slot1',
        showText: 'text',
        defaultIndex: 0
      }],
      selectCounty: '',
      confirmCounty: [],
      threeLocationVal: '',
      isDomestic: true,//判国内外,初始值为国外，选择国内为true
      saveBol: true,
      countryList: [],
      firstLevelList: [],
      textlabel: '市级',
      testValue: {
        sex: '',
        birthday: ''
      },
       selectProvice:["云南省"],
       csd:""
    }
  },
  components: {
    mybutton,
    towtop,
  },
  watch: {
    idNum (newValue, oldValue) {
      const _self = this
      if (newValue.length === 18) {
        if (!_self.verifyValue('cardNum', newValue)) {
          _self.$toast('请输入正确的身份证号码')
          _self.idNum = ''
        } else {
          _self.testValue.birthday = _self.selectDate = _self.getBirthday(_self.idNum)
          _self.testValue.sex = _self.selectSex = _self.getSex(_self.idNum) === '1' ? '男' : '女'
          _self.confirmSex = _self.sexPicker[0].values[parseInt(_self.getSex(_self.idNum)) - 1];
        }
      } else if (newValue.length > 18) {
        _self.$toast('请输入身份证长度不能大于18位')
        _self.idNum = _self.idNum.slice(0,18)
      }
    },
    selectDate (newValue,oldValue) {
      const _self = this
      if (newValue !== _self.testValue.birthday && _self.testValue.birthday) {
        _self.$toast('选择的日期与身份证不符')
        _self.selectDate = _self.testValue.birthday
      }
    },
    selectSex (newValue,oldValue) {
      const _self = this
      if (newValue !== _self.testValue.sex && _self.testValue.sex) {
        _self.$toast('选择的性别与身份证不符')
        _self.selectSex = _self.testValue.sex
      }
    }
  },

  mounted(){
    // window.sessionStorage.setItem('username','孙洁')
    // window.sessionStorage.setItem('cardid','210282188802263811')
    // window.sessionStorage.setItem('userphone','13111328671')
    if (window.sessionStorage.getItem("cardid")) {
        this.idNum=window.sessionStorage.getItem('cardid')
        this.birth =this.idNum.substring(6, 10) +"-" +this.idNum.substring(10, 12) +"-" +this.idNum.substring(12, 14);
        this.selfTele=window.sessionStorage.getItem("userphone") != "null"? window.sessionStorage.getItem("userphone"): "";
        if (parseInt(this.idNum.substring(16, 1)) % 2 == 1) {
          //男
          this.selectSex='男'
        }else{
          //女
          this.selectSex='女'
        }
      }
    $('.picker').on('touchmove',function(event){
      event.stopPropagation()
      event.preventDefault()
    })

    let _self = this;
    let form_id
    if (sessionStorage.getItem("GATform_id")) {
      form_id = sessionStorage.getItem("GATform_id");
      // /APPS/matter/temporaryData/echo获取临时保存的数据
      let getSavedProp = {
        "txnBodyCom": {
          matter_id: window.sessionStorage.getItem("matterid"),
          "form_id": form_id,
        }
      };
      this.$ajaxRequest("post", "/APPS/matter/temporaryData/echo", getSavedProp,false,false,false,'1')
        .then(res => {
          let cent = JSON.parse(res.result);
          console.log(cent)
          this.message = cent;
          getShowData(this.message);
        })
        .catch(error => {
          console.log(error);
          _self.$toast("读取暂存信息失败！");
        });
    }
    function getShowData(data) {
      _self.surname = data.surname;
      _self.firstname = data.firstname;
      _self.autoSurName = data.autoSurName;
      _self.autoFirstName = data.autoFirstName;
      _self.idNum = data.idNum;
      _self.confirmSex = data.Sexcode;
      _self.selectDate = data.selectDate;
      _self.confirmNation = data.selectNation;
      _self.confirmBirth = data.selectBirth;
      _self.confirmRegister = data.selectRegister;
      _self.selfTele = data.selfTele;
      _self.emergencyContact = data.emergencyContact;
      _self.emergencyTele = data.emergencyTele;
      _self.recipients = data.recipients;
      _self.postalcode = data.postalcode;
      _self.recipientsTele = data.recipientsTele;
      _self.deliveryLocation = data.deliveryLocation;
      _self.detailLocation = data.detailLocation;

      _self.selectSex = _self.confirmSex.text;
      _self.selectNation = _self.confirmNation.text;
      _self.selectBirth = _self.confirmBirth.text;
      _self.selectRegister = _self.confirmRegister.text;
    }


    //   获取性别
    let sexProp = {
      "txnBodyCom": {
        matter_id: window.sessionStorage.getItem("matterid"),
        "parentId": "1011"
      }
    };
    this.$ajaxRequest("post", "/gsp/mng19019", sexProp).then(res => {
      if (res.length <= 0) {
        _self.$toast("搜索性别数据列表为空！");
        return false;
      } else {
        let cent = res;
        for (var i = 0, len = cent.length; i < len; i++) {
          let temOb = {text: cent[i].cmnCdNm, value: cent[i].cmnCd};
          _self.sexPicker[0].values.push(temOb);
        }
        setSexDate();
      }
    }).catch(error => {
      console.log(error);
      _self.$toast("获取性别列表失败！");
    });

    //   获取地域
    let locationProp = {
      "txnBodyCom": {
        matter_id: window.sessionStorage.getItem("matterid"),
        "oType": "GAT",
        "areaCode": "",
        "parentCode": "156",
        "regnName": "",
        "regnLevel": "1"
      }
    };
    this.$ajaxRequest("post", "/gsp/mng19021", locationProp)
      .then(res => {
        if (res.length <= 0) {
          _self.$toast("搜索地域数据列表为空！");
          return false;
        } else {
          let cent = res;
          for (var i = 0, len = cent.length; i < len; i++) {
            let temOb = {text: cent[i].regnNm, value: cent[i].regnCode};
            _self.firstLevelList.push(temOb);
          }
          // _self.birthPicker[0].values = _self.birthPicker[0].values.concat(_self.firstLevelList);
          _self.provinceList = _self.provinceList.concat(_self.firstLevelList);
        }
      })
      .catch(error => {
        console.log(error);
        _self.$toast("获取地域列表失败！");
      });

    //   获取民族
    let nationProp = {
      "txnBodyCom": {
        matter_id: window.sessionStorage.getItem("matterid"),
        "parentId": "1012"
      }
    };
    this.$ajaxRequest("post", "/gsp/mng19019", nationProp)
      .then(res => {
        if (res.length <= 0) {
          _self.$toast("搜索民族数据列表为空！");
          return false;
        } else {
          let cent = res;
          for (var i = 0, len = cent.length; i < len; i++) {
            let temOb = {text: cent[i].cmnCdNm, value: cent[i].cmnCd};
            _self.nationPicker[0].values.push(temOb);
          }
        }
      })
      .catch(error => {
        console.log(error);
        _self.$toast("获取民族列表失败！");
      });


    //   获取国籍
    let countryProp = {
      "txnBodyCom": {
        matter_id: window.sessionStorage.getItem("matterid"),
        "parentId": "1038",
        "oType": 'GAT'
      } 
    };
    this.$ajaxRequest("post", "/gsp/mng19019", countryProp)
      .then(res => {
        if (res.length <= 0) {
          _self.$toast("搜索国籍数据列表为空！");
          return false;
        } else {
          let cent = res
          for (var i = 0, len = cent.length; i < len; i++) {
            let temOb = {text: cent[i].cmnCdNm, value: cent[i].cmnCd};
            _self.countryList.push(temOb);          
            _self.birthPicker[0].values.push(temOb);
          }
          // _self.birthPicker[0].values = _self.birthPicker[0].values.concat(_self.countryList);
          _self.registerPicker[0].values = _self.birthPicker[0].values;
        }
      })
      .catch(error => {
        console.log(error);
        _self.$toast("获取国籍列表失败！");
      });

    _self.selectDate = _self.valueDate;//日期
    function setSexDate() {
      let idCard = sessionStorage.getItem('cardid') ? '' : sessionStorage.getItem('cardid');
      let sexList = _self.sexPicker[0].values;
      if (idCard && idCard != 'null') {
        _self.idNum = idCard;
        _self.selectDate = GetBirthday(idCard);
        let IdCardSex = Getsex(idCard);
        for (let index = 0; index < sexList.length; index++) {
          if (sexList[index].text == IdCardSex) {
            _self.selectSex = sexList[index].text;
            _self.confirmSex = sexList[index];
          }
        }
      }
    }

  },
  methods: {
    handleSurname(val){
      this.surname = val;
      // console.log(spellFun.ConvertPinyin(val))
      this.autoSurName = val ? spellFun.ConvertPinyin(val).toUpperCase() : '系统自动生成';
    },
    handleFirstname(val){
      this.firstname = val;
      console.log(this.firstname)
      this.autoFirstName = val ? spellFun.ConvertPinyin(val).toUpperCase() : '系统自动生成';
    },
    handleIdNum(val){
      this.idNum = val;
    },
    open(picker) {
      this.$refs[picker].open();
      document.activeElement.blur();
      if(picker=='provicePicker'||picker=='cityPicker'||picker=='countyPicker'){
        window.scrollTo(0, 99999);
      }
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    selectedSex(selectedVal){
      if (typeof selectedVal[0] === 'object') {
        this.selectSex = selectedVal[0].text;
        this.confirmSex = selectedVal[0];
      } else {
        this.selectSex = selectedVal;
      }
    },
    selectedDate(value) {//日期确定值
      this.selectDate = dateFormat(value, 'yyyy-MM-dd');
    },
    selectedNation(selectedVal){
      if (typeof selectedVal[0] === 'object') {
        this.selectNation = selectedVal[0].text;
        this.confirmNation = selectedVal[0];
      } else {
        this.selectNation = selectedVal;
      }
    },
    selectedBirth(selectedVal){
      if (typeof selectedVal[0] === 'object') {
        this.selectBirth = selectedVal[0].text;
        this.confirmBirth = selectedVal[0];
      } else {
        this.selectBirth = selectedVal;
      }
    },
    onshow(val){
      document.activeElement.blur();
      this.threeLocationVal = val;
      this.popupVisible = true;
      this.selectProvice = '';
      this.selectCity = '';
      this.selectCounty = '';
      this.cityPicker[0].values = [];
      this.countyPicker[0].values = [];
      // 速递地址一级下拉没有国家列表
      if (val == 1) {
        let city = [{
          text: "云南省",
          value: "530000"
        }]
        this.selectedProvice(city)
        this.provicePicker[0].values.splice(0, this.provicePicker[0].values.length);
        this.provicePicker[0].values = this.provicePicker[0].values.concat(this.firstLevelList).concat(this.countryList);
      } else if (val == 2) {
        this.provicePicker[0].values.splice(0, this.provicePicker[0].values.length);
        this.provicePicker[0].values = this.provicePicker[0].values.concat(this.firstLevelList);
      }
      window.scrollTo(0, 99999);
      $('.popupContent').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    selectedProvice(selectedVal){
      let _self = this;
      // 选择省级后清空市级数据列表
      _self.cityPicker[0].values.splice(0, _self.cityPicker[0].values.length);
      this.confirmProvice = selectedVal[0];
      this.cityPicker[0].values = [];
      this.countyPicker[0].values = [];
      if (typeof selectedVal[0] === 'object') {
        this.selectProvice = selectedVal[0].text;
      } else {
        this.selectProvice = selectedVal;
      }
      // 清空可能已填市区县的数据
      this.selectCity = '';
      this.selectCounty = '';
      // 判断国内外
      let tempBol = false;
      for (let index = 0; index < this.provinceList.length; index++) {
        if (this.confirmProvice.text == this.provinceList[index].text) {
          tempBol = true;
        }
      }
      if (!tempBol) {
        this.isDomestic = false;
        this.textlabel = '国籍';
        return
      } else {
        this.isDomestic = true;
        this.textlabel = '市级';
      }
      //   获取市级
      console.log(this.confirmProvice.value)

      let cityProp = {
        "txnBodyCom": {
          matter_id: window.sessionStorage.getItem("matterid"),
          "parentCode": this.confirmProvice.value,
          "oType": 'GAT'
        }
      };
      this.$ajaxRequest("post", "/gsp/mng19021", cityProp)
        .then(res => {
          if (res.length <= 0) {
            _self.$toast("搜索市级数据列表为空！");
            return false;
          } else {
            let cent = res
            for (var i = 0, len = cent.length; i < len; i++) {
              let temOb = {text: cent[i].regnNm, value: cent[i].regnCode};
              _self.cityPicker[0].values.push(temOb);
            }
          }
        })
        .catch(error => {
          console.log(error);
          _self.$toast("获取市级列表失败！");
        });
    },
    selectedCity(selectedVal){
      let _self = this;
      _self.countyPicker[0].values.splice(0, _self.countyPicker[0].values.length);
      this.confirmCity = selectedVal[0];
      if (typeof selectedVal[0] === 'object') {
        this.selectCity = selectedVal[0].text;
      } else {
        this.selectCity = selectedVal;
      }
      this.selectCounty = '';
      //   获取区县
      let countyProp = {
        "txnBodyCom": {
          matter_id: window.sessionStorage.getItem("matterid"),
          "parentCode": this.confirmCity.value,
          "oType": 'GAT'
        }
      };
      this.$ajaxRequest("post", "/gsp/mng19021", countyProp)
        .then(res => {
          if (res.length <= 0) {
            _self.$toast("搜索区县数据列表为空！");
            return false;
          } else {
            let cent = res
            for (var i = 0, len = cent.length; i < len; i++) {
              let temOb = {text: cent[i].regnNm, value: cent[i].regnCode};
              _self.countyPicker[0].values.push(temOb);
            }
          }
        })
        .catch(error => {
          console.log(error);
          _self.$toast("获取区县列表失败！");
        });
    },
    selectedCounty(selectedVal){
      console.log(3)
      console.log(selectedVal[0])
      this.confirmCounty = selectedVal;
      if (typeof selectedVal[0] === 'object' && selectedVal[0] != undefined ) {
        this.selectCounty = selectedVal[0].text;
      } else {
        this.selectCounty = selectedVal;
        console.log(this.selectCounty)
      }
    },
    getRegister(){
      console.log(this.selectCounty)
      let _self = this;
      console.log("isDomestic", this.isDomestic)
      if (this.threeLocationVal == 1) {                         //户口所在地
        if (this.isDomestic && !this.selectCounty ) {
          this.$toast("请选择省、市、区/县三级地址")
          return
        }

        if (this.isDomestic) {
          this.selectRegister = this.selectCounty;
          this.confirmRegister = this.confirmCounty[0];
        } else {
          this.selectRegister = this.selectProvice;
          this.confirmRegister = this.confirmProvice;
        }
        console.log(this.confirmRegister)
      } else {                                                //速递地址
        if (this.isDomestic) {
          this.deliveryLocation = this.selectCounty;
        } else {
          this.deliveryLocation = this.selectProvice;
        }
        console.log(this.deliveryLocation)
      }
      this.popupVisible = false;
    },
    handleSelfTele(val){
      this.selfTele = val;
    },
    handleEmergencyContact(val){
      this.emergencyContact = val;
    },
    handleEmergencyTele(val){
      this.emergencyTele = val;
    },
    handleRecipients(val){
      this.recipients = val;
    },
    handlePostalcode(val){
      this.postalcode = val;
    },
    handleRecipientsTele(val){
      this.recipientsTele = val;
    },
    handleDetailLocation(val){
      this.detailLocation = val;
    },
    isEmpty(){
      if (!this.surname || !isChinese(this.surname)) {
        this.$toast({message:'请输入您的中文姓',duration:5000});
        return false
      }
      if (!this.firstname || !isChinese(this.firstname)) {
        this.$toast('请输入您的中文名');
        return false
      }
      let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      if (!reg.test(this.idNum)) {
        this.$toast('请输入18或15位的身份证号码');
        return false
      }
      if (!this.selectDate) {
        this.$toast('请选择您的出生日期');
        return false
      }
      if (!this.selectNation) {
        this.$toast('请选择您的民族');
        return false
      }
      if (!this.selectBirth) {
        this.$toast('请选择您的出生地');
        return false
      }
      if (!this.selectRegister) {
        this.$toast('请选择您的户口所在地');
        return false
      }
      if (!this.selfTele || !(isPoneAvailable(this.selfTele) || isTelAvailable(this.selfTele))) {
        this.$toast('请输入您的区号+电话号码或11位手机号码');
        return false
      }
      if (!this.emergencyContact || !isChiEng(this.emergencyContact)) {
        this.$toast('请输入您的紧急联系人汉字或英文名');
        return false
      }
      if(this.emergencyTele == this.selfTele){
        this.$toast('本人电话与紧急联系人电话不能相同');
        return false
      }
      if (!this.emergencyTele || !(isPoneAvailable(this.emergencyTele) || isTelAvailable(this.emergencyTele))) {
        this.$toast('请输入紧急联系人的区号+电话号码或11位手机号码');
        return false
      }
      if (!this.recipients || !isChiEng(this.recipients)) {
        this.$toast('请输入收件人的汉字或英文名');
        return false
      }
      var re = /^[0-9]{6}$/;
      if (!re.test(this.postalcode)) {
        this.$toast('请输入6位邮政编码');
        return false
      }
      if (!this.recipientsTele || !(isPoneAvailable(this.recipientsTele) || isTelAvailable(this.recipientsTele))) {
        this.$toast('请输入收件人的区号+电话号码或11位手机号码');
        return false
      }
      if (!this.deliveryLocation) {
        this.$toast('请选择快递地址的省、市、区/县');
        return false
      }
      if (!this.detailLocation) {
        this.$toast('请输入您的详细地址（街道、门牌号等）');
        return false
      }
      return true;
    },
    tempSave(){
      // alert(2)
      let _self = this;
      if (!this.isEmpty()) {
        return false;
      }
      if (!this.saveBol) {
        this.$toast({
          message: '保存中，请稍后',
          iconType: 'loading'
        });
        return
      }
      this.saveBol = false;
      let form_id = "GAT" + new Date().getTime();
      sessionStorage.setItem("GATform_id", form_id);
      // /APPS/matter/temporaryData/insert保存手机数据的方法
      let saveProp = {
        "txnBodyCom": {
          matter_id: window.sessionStorage.getItem("matterid"),
          "form_id": form_id,
          "message": {
            'surname': this.surname,
            'firstname': this.firstname,
            'autoSurName': this.autoSurName,
            'autoFirstName': this.autoFirstName,
            'idNum': this.idNum,
            'Sexcode': this.confirmSex,
            'selectDate': this.selectDate,
            'selectNation': this.confirmNation,
            'selectBirth': this.confirmBirth,
            'selectRegister': this.confirmRegister,
            'selfTele': this.selfTele,
            'emergencyContact': this.emergencyContact,
            'emergencyTele': this.emergencyTele,
            'recipients': this.recipients,
            'postalcode': this.postalcode,
            'recipientsTele': this.recipientsTele,
            'deliveryLocation': this.deliveryLocation,
            'detailLocation': this.detailLocation
          }
        }
      };
      this.$ajaxRequest("post", "/APPS/matter/temporaryData/insert", saveProp,false,false,false,'1')
        .then(res => {
          this.saveBol = true;
          _self.$toast("临时保存成功！");
        })
        .catch(error => {
          this.saveBol = true;
          console.log(error);
          _self.$toast("临时保存失败！");
        });
    },
    goto(){
      console.log(this.selectCounty[0])
       if( this.selectCounty[0] == undefined){
          this.$toast("请选择省、市、区/县三级地址")
          return
        }
      if (!this.isEmpty()) {
        return false;
      }
      this.confirmSex = this.sexPicker[0].values[parseInt(this.getSex(this.idNum)) - 1];
      let tempOb = {
        'surname': this.surname,
        'firstname': this.firstname,
        'autoSurName': this.autoSurName,
        'autoFirstName': this.autoFirstName,
        'idNum': this.idNum,
        'Sexcode': this.confirmSex.value,
        'selectDate': this.selectDate,
        'selectNation': this.confirmNation.value,
        'selectBirth': this.confirmBirth.value,
        'selectRegister': this.confirmRegister.value,
        'selfTele': this.selfTele,
        'emergencyContact': this.emergencyContact,
        'emergencyTele': this.emergencyTele,
        'recipients': this.recipients,
        'postalcode': this.postalcode,
        'recipientsTele': this.recipientsTele,
        'deliveryLocation': this.deliveryLocation,
        'detailLocation': this.detailLocation,
      }
      console.log("参数列表：", tempOb);
      sessionStorage.setItem("GATEEPinpuList", JSON.stringify(tempOb));
      sessionStorage.setItem("GATname", this.surname + this.firstname);
      this.$router.push({
        name: 'domesticThree'
      })
    },
    getBirthday (cardNum) {
      if (cardNum.length === 18) {
        return `${parseInt(cardNum.slice(6, 10))}-${parseInt(cardNum.slice(10, 12))}-${parseInt(cardNum.slice(12, 14))}`
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
    }, // 获取性别
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
    } // 校验工具
  }
}
</script>
