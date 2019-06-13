<template>
  <div class="partyBuider">
    <towtop :name='hadertow' />
    <div class="form-box">
      <div class='mint-cell '>
        <div class='mint-cell-wrapper borderBottom'>
          <div class='mint-cell-title'><span class='required'>*</span>是否建立党建组织</div>
          <div class='mint-cell-value'>
            <mt-radio class='myRadio' v-model="isBuilderInfo" :options="['是', '否']">
            </mt-radio>
          </div>
        </div>

      </div>
      <div v-if='this.isBuilderInfo =="是"'>
        <div class='mint-cell '>
          <div class='mint-cell-wrapper borderBottom'>
            <div class='mint-cell-title'><span class='required'>*</span>党员(预备党员)人数</div>
            <div class='mint-cell-value'><input type="number" class='inputCell' v-model='peopleNum' placeholder="请输入人数" style="ime-mode:Disabled" onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))" /></div>
          </div>
        </div>
        <div class='mint-cell'>
          <div class='mint-cell-wrapper borderBottom'>
            <div class='mint-cell-title'><span class='required'>*</span>党组织建制</div>
            <div class='mint-cell-value is-link' @click='showPopup("organic",organicValues)'>{{organic.text}}</div>
            <i class='mint-cell-allow-right'></i>
          </div>
        </div>
        <div class='mint-cell'>
          <div class='mint-cell-wrapper borderBottom'>
            <div class='mint-cell-title'><span class='required'>*</span>党组织组建方式</div>
            <div class='mint-cell-value is-link' @click='showPopup("wayTo",wayToValues)'>{{wayTo.text}}</div>
            <i class='mint-cell-allow-right'></i>
          </div>
        </div>
        <div class='mint-cell'>
          <div class='mint-cell-wrapper borderBottom'>
            <div class='mint-cell-title'><span class='required'>*</span>党组织组建时间</div>
            <div class='mint-cell-value is-link' @click='getBirthDate'>{{birthDay}}</div>
            <i class='mint-cell-allow-right'></i>
          </div>
        </div>
        <div class='mint-cell '>
          <div class='mint-cell-wrapper borderBottom'>
            <div class='mint-cell-title'><span class='required'>*</span>本年报年度组建党组织标志</div>
            <div class='mint-cell-value'>
              <mt-radio class='myRadio' v-model="yearBuilderInfo" :options="['是', '否']">
              </mt-radio>
            </div>
          </div>

        </div>
        <div class='mint-cell '>
          <div class='mint-cell-wrapper borderBottom'>
            <div class='mint-cell-title'><span class='required'>*</span>经营者党员标志</div>
            <div class='mint-cell-value'>
              <mt-radio class='myRadio' v-model="partyMemberInfo" :options="['是', '否']">
              </mt-radio>
            </div>
          </div>

        </div>
        <div class='mint-cell '>
          <div class='mint-cell-wrapper '>
            <div class='mint-cell-title'><span class='required'>*</span>经营者党组织书记标志</div>
            <div class='mint-cell-value'>
              <mt-radio class='myRadio' v-model="secretaryInfo" :options="['是', '否']">
              </mt-radio>
            </div>
          </div>

        </div>

      </div>
      <div class='submitBox'>
        <mt-button type="primary" class='submitBtn' @click='nextStep'>下一步</mt-button>
      </div>

    </div>
    <mt-popup v-model="peoplePopup" position="bottom" class='mypopup'>
      <div class='pop-btn borderBottom'>
        <p class='order_cancel' @click="orderCancel">取消</p>
        <p class='order_insure' @click="orderInsure">确定</p>
      </div>
      <mt-picker :slots="slots" ref='Picker' valueKey='text'></mt-picker>
    </mt-popup>

    <!--<mt-datetime-picker class='datetime'
    	 v-model="birthPicker"
    	  type="date" 
    	  ref='birthPicker' year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" @confirm="birthConfirm">
    </mt-datetime-picker>-->
        <Datetime
      class='datetime'
      ref="birthPicker"
      type="date"
      position="bottom"
      v-model="birthPicker"
  
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
    name: 'partyBuider',
    data() {
      return {
        hadertow: "党建信息",
        peoplePopup: false,
        peopleNum:'',
        slots: [{
          flex: 1,
          values: [],
          className: 'slot1',
        }],
        isBuilderInfo: '是',
        yearBuilderInfo: '是',
        partyMemberInfo: '是',
        secretaryInfo: '是',
        organic: {text:'请选择',value:null},
        organicValues: [],
        wayTo: {text:'请选择',value:null},
        wayToValues: [],
        birthDay: '请选择',
        birthPicker: dateFormat(new Date,'yyyy-MM-dd'),

      }
    },
    components: {
      towtop,
      Popup,
      Picker,
      MessageBox
    },
    methods: {
      showPopup(e, value) { //点击出现弹出框
        this.selected = e
        this.slots[0].values = value
        this.peoplePopup = true
      },
      orderInsure() { //弹出框确认
        this[this.selected] = this.$refs.Picker.getSlotValue(0)
        this.peoplePopup = false
      },
      orderCancel(){  //弹出框取消
        this.peoplePopup = false
      },
      getBirthDate() { //出生日期弹出框

        this.$refs.birthPicker.open();
      },
      birthConfirm(e) { //确定出生日期

        this.birthDay = dateFormat(e, 'yyyy-MM-dd')
        this.$refs.birthPicker.close();
      },
      getSendObj(t,v,c){          //格式化暂存数据
        if(c){
          return {
            title:t,
            value:v,
            code:c
          }
        }else{
          return {
            title:t,
            value:v
          }
        }

      },
      nextStep(){
        if(!this.checkInfo()){
          return false
        }
        let sendInfo={}
        if(this.isBuilderInfo == '否'){
          sendInfo={
            'work_id': sessionStorage.WorkId,
            title:'党建信息信息',
            isBuilderInfo : this.getSendObj('是否建立党建组织','否','2'),
          }
        }else{
          let strToNum= function (e){
            if(e=='是'){
              return '1'
            }else{
              return '2'
            }
          }
          sendInfo = {
            'work_id': sessionStorage.WorkId ,
            title:'党建信息信息',
            isBuilderInfo : this.getSendObj('是否建立党建组织','是','1'),
            peopleNum:this.getSendObj('党员（预备党员）人数',this.peopleNum),
            organic:this.getSendObj('党组织建制',this.organic.text,this.organic.value),
            wayTo:this.getSendObj('党组织组建方式',this.wayTo.text,this.wayTo.value),
            birthDay:this.getSendObj('党组织组建时间',this.birthDay),
            yearBuilderInfo:this.getSendObj('本年报年度组建党组织标志',this.yearBuilderInfo,strToNum(this.yearBuilderInfo)),
            partyMemberInfo:this.getSendObj('经营者党员标志',this.partyMemberInfo,strToNum(this.partyMemberInfo)),
            secretaryInfo:this.getSendObj('经营者党组织书记标志',this.secretaryInfo,strToNum(this.secretaryInfo)),
          }
        }
        console.log(sendInfo)
        this.$ajaxRequest('post','/APPS/db/insert',{
          'txnBodyCom':{
            'page':8,

            'work_id': sessionStorage.WorkId ,

            'message':{
              'matter_id':sessionStorage.matterid  ,
              'member_id':sessionStorage.userid ,
              json_content:sendInfo
            }

          }
        })
          .then((res)=>{
            if(res.success=="添加成功" ||res.success=='修改成功'){
              this.$router.push('/licenseFile')
            }

          })

      },
      checkInfo(){
        if(this.isBuilderInfo == '否'){
          return true
        }
        if(this.peopleNum ==''){
          MessageBox.alert('请输入人数', '提示');
          return false
        }
        if(this.organic.text=='请选择'){
          MessageBox.alert('请输入党组织建制', '提示');
          return false
        }
        if(this.wayTo.text =='请选择'){
          MessageBox.alert('请选择党组织组建方式', '提示');
          return false
        }
        if(this.birthDay =='请选择'){
          MessageBox.alert('请输入党组织组建时间', '提示');
          return false
        }
        return true
      },
      getPublicInfo(e,arr) { //获取民族信息
        this.$ajaxRequest('post', '/gsp/mng19019', {
          "txnBodyCom": {
            "id": "",
            "parentId":e ,
            "matter_id": sessionStorage.matterid 
          },
          "txnCommCom": {

          }

        }).then((res) => {
          console.log(res)
          res.forEach((item, index) => {
            let obj={
              text:item.cmnCdNm,
              value:item.cmnCd
            }
            arr.push(obj)

          })
        })
      }
    },
    created(){
      this.getPublicInfo('1029',this.wayToValues)
      this.getPublicInfo('1030',this.organicValues)
    }
  }
</script>

<style lang="less" scoped>
  .partyBuider {
    text-align: left;
    font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
  }

  .myRadio {
    display: flex;
  }

  .borderBottom {
    border-bottom: 1px solid #D6D8DC;
    padding: 0;
  }

  .mint-cell {
    padding: 0 15px;
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

  .mypopup {
    width: 100%;
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
    .order_cancel{
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
  .partyBuider .datetime{
  	color: #999;
  	width: 100%;
  	overflow: hidden;
  }
</style>
<style type="text/css">
  .partyBuider .mint-cell-wrapper {
    padding: 0;
  }
  
</style>
