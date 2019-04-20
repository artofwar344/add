<template>
  <div class="operatorInfo">
    <towtop :name='hadertow' />

    <!--<mt-cell title="标题文字"  >
                <img slot="icon" src="../../../assets/logo.png" width="24" height="24">
                <input type="text" placeholder="请输入姓名" />
            </mt-cell>
            <mt-cell title="请选择人员类型" is-link  :value='peopleType' @click='getPeopleType'>
                <img slot="icon" src="../../../assets/logo.png" width="24" height="24">

            </mt-cell>-->
    <!--单元格-->

    <div class="form-box">
      <div class='mint-cell '>
        <div class='mint-cell-wrapper borderBottom'>
          <div class='mint-cell-title'><span class='required'>*</span>姓名</div>
          <div class='mint-cell-value' style='text-align: right;color: #C1C1C1;'>
          	<span>{{userName||userName==''?userName:'读取不到数据'}}</span>
<!--          	<input type="text" class='inputCell' disabled v-model='userName' placeholder="请输入姓名" style='color:#C1C1C1'/>-->
          </div>
        </div>

      </div>
      <!--单元格-->
      <div class='mint-cell'>
        <div class='mint-cell-wrapper borderBottom'>
          <div class='mint-cell-title'><span class='required'>*</span>人员类型</div>
          <div class='mint-cell-value is-link' @click='showPopup("peopleType",peopleValues)'>{{peopleType.text}}</div>
          <i class='mint-cell-allow-right'></i>
        </div>
      </div>
      <div class='mint-cell'>
        <div class='mint-cell-wrapper borderBottom'>
          <div class='mint-cell-title'><span class='required'>*</span>证件类型</div>
          <div class='mint-cell-value' style='color:#C1C1C1'>中华人民共和国居民身份证</div>
        </div>
      </div>
      <div class='mint-cell'>
        <div class='mint-cell-wrapper borderBottom'>
          <div class='mint-cell-title'><span class='required'>*</span>证件号码</div>
          <div class='mint-cell-value' style='text-align: right;color: #C1C1C1;'>
          	<!--<input type="text" @input='cardIdShow' @blur='cardIdTest' v-model='cardNum' 
          		disabled class='inputCell' placeholder="请输入证件号码" style='color:#C1C1C1'/>-->
          		<span>{{cardNum}}</span>
          </div>
        </div>

      </div>
      <div class='mint-cell'>
        <div class='mint-cell-wrapper borderBottom'>
          <div class='mint-cell-title'><span class='required'>*</span>性别</div>
          <div class='mint-cell-value is-link' @click='showPopup("sex",sexValues)'>{{sex.text}}</div>
          <i class='mint-cell-allow-right'></i>
        </div>
      </div>
      <div class='mint-cell'>
        <div class='mint-cell-wrapper borderBottom'>
          <div class='mint-cell-title'><span class='required'>*</span>出生日期</div>
          <div class='mint-cell-value is-link' @click='getBirthDate'>{{birthDay}}</div>
          <i class='mint-cell-allow-right'></i>
        </div>
      </div>
      <div class='mint-cell'>
        <div class='mint-cell-wrapper borderBottom'>
          <div class='mint-cell-title'><span class='required'>*</span>民族</div>
          <div class='mint-cell-value is-link' @click='showPopup("nation",nationValues)'>{{nation.text}}</div>
          <i class='mint-cell-allow-right'></i>
        </div>
      </div>
      <div class='mint-cell'>
        <div class='mint-cell-wrapper borderBottom'>
          <div class='mint-cell-title'><span class='required'>*</span>文化程度</div>
          <div class='mint-cell-value is-link' @click='showPopup("cultrue",cultrueValues)'>{{cultrue.text}}</div>
          <i class='mint-cell-allow-right'></i>
        </div>
      </div>
      <div class='mint-cell'>
        <div class='mint-cell-wrapper borderBottom'>
          <div class='mint-cell-title'><span class='required'>*</span>政治面貌</div>
          <div class='mint-cell-value is-link' @click='showPopup("politics",politicsValues)'>{{politics.text}}</div>
          <i class='mint-cell-allow-right'></i>
        </div>
      </div>
      <div class='mint-cell'>
        <div class='mint-cell-wrapper borderBottom'>
          <div class='mint-cell-title'><span class='required'>*</span>申请前职业状况</div>
          <div class='mint-cell-value is-link' @click='showPopup("profession",professionValues)'>{{profession.text}}</div>
          <i class='mint-cell-allow-right'></i>
        </div>
      </div>
      <div class='mint-cell'>
        <div class='mint-cell-wrapper borderBottom'>
          <div class='mint-cell-title'><span class='required'>*</span>住所</div>
          <div class='mint-cell-value'><input type="text" class='inputCell' v-model='address' placeholder="请输入住所" /></div>
        </div>

      </div>
      <div class='mint-cell'>
        <div class='mint-cell-wrapper borderBottom'>
          <div class='mint-cell-title'><span class='required'>*</span>移动电话</div>
          <div class='mint-cell-value'><input type="text" class='inputCell' v-model='telNum' placeholder="请输入电话号码" /></div>
        </div>

      </div>
      <div class='mint-cell'>
        <div class='mint-cell-wrapper  borderBottom'>
          <div class='mint-cell-title'>固定电话</div>
          <div class='mint-cell-value'><input type="text" class='inputCell' v-model='tel' placeholder="请输入电话号码" /></div>
        </div>

      </div>
      <div class='mint-cell'>
        <div class='mint-cell-wrapper borderBottom'>
          <div class='mint-cell-title'><span class='required'>*</span>邮编</div>
          <div class='mint-cell-value'><input type="text" class='inputCell' v-model='postelNum' placeholder="请输入" /></div>
        </div>

      </div>
      <div class='mint-cell'>
        <div class='mint-cell-wrapper '>
          <div class='mint-cell-title'>电子邮箱</div>
          <div class='mint-cell-value'><input type="text" class='inputCell' v-model='email' placeholder="请输入" /></div>
        </div>

      </div>
    </div>
    <div class='submitBox'>
      <mt-button type="primary" class='submitBtn' @click='submitInfo'>下一步</mt-button>
    </div>
    <mt-popup v-model="peoplePopup" position="bottom" class='mypopup'>
      <div class='pop-btn borderBottom'>
        <p class='order_cancel' @click="orderCancel">取消</p>
        <p class='order_insure' @click="orderInsure">确定</p>
      </div>
      <mt-picker :slots="slots" ref='Picker' valueKey='text'></mt-picker>
    </mt-popup>

    <!--<mt-datetime-picker
    	 v-model="birthPicker"
    	  type="date" 
    	  ref='birthPicker' class='datetime' 
    	  :startDate='startDate'
    	   :endDate='endDate' @confirm="birthConfirm">
    	   </mt-datetime-picker>
    	   -->
    	<Datetime
      ref="birthPicker"
      type="date"
      position="bottom"
      v-model="birthPicker"
      class='datetime' 
      :start-date="startDate"
      :end-date="endDate"
      @confirm="birthConfirm"
    ></Datetime>

    
  </div>
</template>

<script>
  function dateFormat(time, format) {

    const t = new Date(time);
    const tf = function(i) {
      return(i < 10 ? '0' : '') + i;
    };
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, (a) => {
      switch(a) {
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
  import towtop from '@/components/HederTwo.vue'
  import {
    Popup,
    Picker,
    MessageBox
  } from 'mint-ui';
  export default {
    name: 'operatorInfo',
    data() {
      return {
        hadertow: "经营者信息",
        userName: window.sessionStorage.username,
        peopleType: {
          text: '请选择',
          value: null
        },
        peoplePopup: false,
        slots: [{
          flex: 1,
          values: [],
          className: 'slot1',
        }],
        peopleValues: [{
          text: '农村村民',
          value: '01'
        }, {
          text: '城镇居民',
          value: '02'
        }, {
          text: '军转干部',
          value: '04'
        }, {
          text: '退役士兵',
          value: '05'
        }, {
          text: '残疾人员',
          value: '06'
        }, {
          text: '高校毕业生',
          value: '07'
        }, {
          text: '其他',
          value: '08'
        }],
        sex: {
          text: '男',
          value: '1'
        },
        sexValues: [{
          text: '男',
          value: '1'
        }, {
          text: '女',
          value: '2'
        }],
        nation: {
          text: '请选择',
          value: null
        },
        nationValues: [],
        cultrue: {
          text: '请选择',
          value: null
        },
        cultrueValues: [],
        profession: {
          text: '请选择',
          value: null
        },
        professionValues: [],
        politics: {
          text: '请选择',
          value: null
        },
        politicsValues: [],
        birthDay: '请选择',
        birthPicker: dateFormat(new Date, 'yyyy-MM-dd'),
        selected: null,
        cardNum: 	window.sessionStorage.cardid,
        telNum: sessionStorage.userphone == 'null' ? '' : sessionStorage.userphone,
        address: '',
        postelNum: '',
        email: '',
        tel: '',
        startDate: this.getStartDate(),
        endDate: new Date
      }
    },
    components: {
      towtop,
      Popup,
      Picker,

    },
    methods: {
      getStartDate() {
        let day = new Date

        return new Date(day.setTime(day.getTime() - 24 * 60 * 60 * 1000 * 365 * 120))

      },
      showPopup(e, value) { //点击出现弹出框

        this.selected = e
        this.slots[0].values = value
        this.peoplePopup = true
      },
      orderInsure() { //弹出框确认
        this[this.selected] = this.$refs.Picker.getSlotValue(0)
        this.peoplePopup = false
      },
      orderCancel() { //弹出框取消
        this.peoplePopup = false
      },
      getBirthDate() { //出生日期弹出框

        this.$refs.birthPicker.open();
      },
      birthConfirm(e) { //确定出生日期

        this.birthDay = dateFormat(e, 'yyyy-MM-dd')
        this.$refs.birthPicker.close();
      },
      cardIdShow() {
        let reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
        
        console.log(1123)
        if(reg.test(this.cardNum)) {
          let cardNum = String(this.cardNum)
          if(cardNum.length == 15) {
            this.birthDay = '19' + cardNum.substring(6, 8) + '-' + cardNum.substring(8, 10) + '-' + cardNum.substring(10, 12)
            if(cardNum.substring(14) % 2 == 1) {
              this.sex.text = '男'
              this.sex.value ='1'
            } else {
              this.sex.text = '女'
              this.sex.value = '2'
            }
          } else {
            this.birthDay = cardNum.substring(6, 10) + '-' + cardNum.substring(10, 12) + '-' + cardNum.substring(12, 14)
            if(cardNum.substring(16, 17) % 2 == 1) {
              this.sex.text = '男'
              this.sex.value ='1'
            } else {
              this.sex.text = '女'
              this.sex.value = '2'
            }
          }
        }
        //				else {
        //					MessageBox.alert('请正确输入身份证号码', '提示');
        //				}
      },
      cardIdTest() {
        let reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
        if(!reg.test(this.cardNum)) {
          MessageBox.alert('请正确输入身份证号码', '提示');
        }
      },
      submitCheck() {
        let reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
        let telReg = /^1[3-8][0-9]{9}$/
        let nameReg = /^[a-zA-Z\u4e00-\u9fa5]+$/
        let postelReg = /^[0-9]{6}$/
				let regExp=  /^[0-9]{3,4}\-[0-9]{6,7}$/
				let emailExp  =/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
        if(!nameReg.test(this.userName)) {
          MessageBox.alert('请正确输入中文或英文姓名', '提示');
          return false;
        }
        if(this.peopleType.text == '请选择' || this.peopleType.text == '') {
          MessageBox.alert('请选择人员类型', '提示');
          return false
        }
        if(!reg.test(this.cardNum)) { //验证身份证是否合法
          MessageBox.alert('请正确输入身份证号码', '提示');
          return false
        }

        if(this.birthDay == '请选择' || this.birthDay == '') {
          MessageBox.alert('请选择出生日期', '提示');
          return false
        }
        if(this.nation.text == '请选择' || this.nation.text == '') {
          MessageBox.alert('请选择民族', '提示');
          return false
        }
        if(this.cultrue.text == '请选择' || this.cultrue.text == '') {
          MessageBox.alert('请选择文化程度', '提示');
          return false
        }
        if(this.politics.text == '请选择' || this.politics.text == '') {
          MessageBox.alert('请选择政治面貌', '提示');
          return false
        }
        if(this.profession.text == '请选择' || this.profession.text == '') {
          MessageBox.alert('请选择职业状况', '提示');
          return false
        }
        if(this.address == '') {
          MessageBox.alert('请输入住所', '提示');
          return false
        }
        if(!telReg.test(this.telNum)) {
          MessageBox.alert('请输入正确的手机号码', '提示');
          return false
        }

if(this.tel !=''&&!regExp.test(this.tel)) {
          MessageBox.alert('请输入正确的固定电话', '提示');
          return false
        }
        if(!postelReg.test(this.postelNum)) {
          MessageBox.alert('请输入正确的邮编', '提示');
          return false
        }
    
if(this.email !=''&&!emailExp.test(this.email)) {
          MessageBox.alert('请输入正确的邮箱', '提示');
          return false
        }
        return true

      },
      getSendObj(t, v, c) { //格式化暂存数据
        if(c) {
          return {
            title: t,
            value: v,
            code: c
          }
        } else {
          return {
            title: t,
            value: v
          }
        }

      },
      submitInfo() { //下一步按钮 提交暂存到apps
        if(!this.submitCheck()) {
          return false
        }
        let sendInfo = {
          'work_id': sessionStorage.WorkId ,
          title: '经营者信息',
          userName: this.getSendObj('姓名', this.userName),
          peopleType: this.getSendObj('人员类型', this.peopleType.text, this.peopleType.value),
          type: this.getSendObj('证件类型', '中华人民共和国居民身份证'),
          cardNum: this.getSendObj('证件号码', this.cardNum),
          sex: this.getSendObj('性别', this.sex.text, this.sex.value),
          birthDay: this.getSendObj('出生日期', this.birthDay),
          nation: this.getSendObj('民族', this.nation.text, this.nation.value),
          cultrue: this.getSendObj('文化程度', this.cultrue.text, this.cultrue.value),
          politics: this.getSendObj('政治面貌', this.politics.text, this.politics.value),
          profession: this.getSendObj('申请前职业状况', this.profession.text, this.profession.value),
          address: this.getSendObj('住所', this.address),
          telNum: this.getSendObj('移动电话', this.telNum),
          tel: this.getSendObj('固定电话', this.tel),
          postelNum: this.getSendObj('邮编', this.postelNum),
          email: this.getSendObj('电子邮箱', this.email),
        }
        console.log(sendInfo)
        this.$ajaxRequest('post', '/APPS/db/insert', {
          'txnBodyCom': {
            'page': 7,

            'work_id': sessionStorage.WorkId ,

            'message': {
              'matter_id': sessionStorage.matterid ,
              'member_id': sessionStorage.userid  ,
              json_content: sendInfo
            }

          }
        })
          .then((res) => {
            if(res.success == "添加成功" || res.success == '修改成功') {
              sessionStorage.setItem('operatorUserName', this.userName)
              this.$router.push('/partyBuider')
            }

          })

      },
      getNation(e, arr) { //获取民族信息
        this.$ajaxRequest('post', '/gsp/mng19019', {
          "txnBodyCom": {
            "id": "",
            "parentId": e,
            "matter_id":  sessionStorage.matterid
          },
          "txnCommCom": {

          }

        }).then((res) => {
          console.log(res)
          res.forEach((item, index) => {
            let obj = {
              text: item.cmnCdNm,
              value: item.cmnCd
            }
            arr.push(obj)

          })
        })
      }

    },

    created() {
      console.log(sessionStorage)
      this.getNation("1034", this.nationValues)
      this.getNation("1033", this.cultrueValues)
			this.cardIdShow() 
      this.getNation("1031", this.professionValues)
      this.getNation("1032", this.politicsValues)

    }
  }
</script>
<style lang="less" scoped>
  .operatorInfo {
    text-align: left;
  }

  .borderBottom {
    border-bottom: 1px solid #D6D8DC;
    padding: 0;
  }

  .mypopup {
    width: 100%;
  }

  .mint-cell {
    padding: 0 15px;
  }

  .pop-btn {
    line-height: .8rem;
    height: .8rem;
    color: #26a2ff;
    font-size: .32rem;
    .order_insure {
      text-align: center;
      display: inline-block;
      width: 49%;
    }
    .order_cancel {
      display: inline-block;
      text-align: center;
      width: 49%;
    }
  }

  .required {
    color: #EE6723;
    transform: translateY(.08rem);
    font-size: .28rem;
    margin-right: .1rem;
  }

  .inputCell {
    text-align: right;
  }

  .submitBox {
    margin: .5rem 0;
    text-align: center;
    .submitBtn {
      width: 60%;
      max-width: 4rem;
      border-radius: .4rem;
    }
  }
   .operatorInfo .datetime{
  	color: #999;
  	width: 100%;
  	overflow: hidden;
  }
</style>
