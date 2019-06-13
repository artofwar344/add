<template>
  <div class="ReiinfoCheck">
    <myheader :my-header="headerData"></myheader>
    <div class="content">
      <ul class="list">
        <li>
          <Field
            readonly
            :error="errorselectTypeInfo"
            :propserror="errorselectTypeData" label="贷款类型"
            disableclear type="text" :value="selectTypeDefaultData" class="selectTypeData"
            v-model="selectTypeDefaultData"
            v-on:errorchange="errorChangeFun" @click.native="open('typeSelect')">
            <span slot="append">
              <Icon type="arrow-right" size="14"  color="#757575"></Icon>
            </span>
          </Field>
          <Selectpopup
            ref="typeSelect"
            position="bottom"  
            :dataslots="selectTypeData"
            @confirms="selectInTypeData"
          ></Selectpopup>
        </li>
        <li>
          <Field v-model="gongjijinSum" type="number" label="公积金贷款金额" :value="gongjijinSum" placeholder="">
            <span slot="append">
              万元
            </span>
          </Field>
        </li>
        <li>
          <Field v-model="shangyedaiSum" type="number" label="商业贷款金额" :value="shangyedaiSum" placeholder="">
            <span slot="append">
              万元
            </span>
          </Field>
        </li>
        <li>
          <Field readonly :error="errorselectTypeInfo" :propserror="errorselectTypeData"  label="贷款期限"
                 disableclear type="text" v-model="selectDeadlineDefaultData"  :value="selectDeadlineDefaultData" class="selectTypeData"
                 v-on:errorchange="errorChangeFun" @click.native="open('DeadlineSelect')">
            <span slot="append">
              <Icon type="arrow-right" size="14"  color="#757575"></Icon>
            </span>
          </Field>
          <Selectpopup
            ref="DeadlineSelect"
            position="bottom"  
            :dataslots="selectDeadlineData"
            :visible-item-count="5"
            @selectval="selectChangeFun2"
            @confirms="selectInDeadlineData"
          ></Selectpopup>
        </li>
        <li>
          <Field v-model="gongjijinInterest" type="number" label="公积金贷款利率" :value="gongjijinInterest">
            <span slot="append">
              %
            </span>
          </Field>
        </li>
        <li>
          <Field v-model="shanyedaiInterest" type="number" label="商业贷款利率" :value="shanyedaiInterest">
            <span slot="append">
              %
            </span>
          </Field>
        </li>
        <li>
          <Field readonly :error="errorselectTypeInfo" :propserror="errorselectTypeData"  label="还款方式"
                 disableclear type="text"  v-model="selectHuankuanDefaultData" :value="selectHuankuanDefaultData"
                 v-on:errorchange="errorChangeFun" @click.native="open('HuankuanSelect')">
            <span slot="append">
              <Icon type="arrow-right" size="14"  color="#757575"></Icon>
            </span>
          </Field>
          <Selectpopup
            ref="HuankuanSelect"
            position="bottom"  
            :dataslots="selectHuankuanData"
            @confirms="selectInHuankuanData"
          ></Selectpopup>
        </li>
      </ul>
       <div class="btn_wrap">
          <div @click="goto">
              <Btn size="large">计算</Btn>
          </div>
          <div>
              <Btn type="danger" size="large" @click="reset">重置</Btn>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/header/header'

const deadlineData = {
  '10年': ['120期', '100期', '90期'],
  '15年': ['180期', '150期', '120期']
}

export default {
  components: {
    myheader: Header
  },
  data () {
    return {
      headerData: {
        title: '还款试算',
        backUrl: '/'
      },
      deadlineData: {
        '10年': ['120期', '100期', '90期'],
        '15年': ['180期', '150期', '120期']
      },
      errorselectTypeData: false,
      errorselectTypeInfo: '',
      selectTypeData: [
        {
          flex: 1,
          values: ['公积金贷款', '商业贷款'],
          className: 'slot1',
          defaultIndex: 0
        }
      ],
      selectHuankuanData: [
        {
          flex: 1,
          values: ['等额本息', '等额本息2'],
          className: 'slot1',
          defaultIndex: 0
        }
      ],
      selectDeadlineData: [
        {
          flex: 1,
          values: Object.keys(deadlineData),
          className: 'slot1',
          textAlign: 'center'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['120期', '100期', '90期'],
          showText: 'text',
          className: 'slot3',
          textAlign: 'center'
        }
      ],
      selectTypeDefaultData: ['公积金贷款'],
      selectHuankuanDefaultData: ['等额本息'],
      selectDeadlineDefaultData: ['15年', '180期'],
      gongjijinSum: '',
      shangyedaiSum: '',
      gongjijinInterest: '',
      shanyedaiInterest: ''
    }
  },
  conputed: {},
  methods: {
    setVaule: function () {
      let _self = this
      _self.selectDeadlineData[0].values = Object.keys(_self.deadlineData)
    },
    open: function (picker) {
      this.$refs[picker].open()
      document.activeElement.blur()
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    selectChangeFun2: function (picker, val) { // 只有是二级的时候才有这个方法
      let _self = this
      let data = _self.deadlineData[val[0]]
      picker.setSlotValues(1, data)
    },
    errorChangeFun (val) {
      this.errorselectTypeData = val
    },
    selectInTypeData (selectedVal) {
      if (typeof selectedVal[0] === 'object') {
        this.selectTypeDefaultData = selectedVal[0].text
      } else {
        this.selectTypeDefaultData = selectedVal
      }
    },
    selectInDeadlineData (selectedVal) {
      if (typeof selectedVal[0] === 'object') {
        this.selectDeadlineDefaultData = selectedVal[0].text
      } else {
        this.selectDeadlineDefaultData = selectedVal
      }
    },
    selectInHuankuanData (selectedVal) {
      if (typeof selectedVal[0] === 'object') {
        this.selectHuankuanDefaultData = selectedVal[0].text
      } else {
        this.selectHuankuanDefaultData = selectedVal
      }
    },
    goto(){
      this.$router.push({
        name: 'ReimbursementTrialResult'
      });
    },//提交
    reset(){
      this.selectTypeDefaultData[0] = "公积金贷款";
      this.selectDeadlineDefaultData = ['15年', '180期'];
      this.endDate.loanDuration = "10";
    }
  }
}
</script>

<style scoped>
.ReiinfoCheck .hui-field_title{
  font-size: .28rem;
  width: 2rem;
}
.ReiinfoCheck .hui-field_core{text-align: right;font-size: 0.28rem;}
.ReiinfoCheck .hui-field_append span{font-size: 0.28rem;}
.ReiinfoCheck .infoCheck {background: #f1f3f6;height: 100%;}
.ReiinfoCheck .list {background: rgb(255, 255, 255);margin-top: .16rem;}
.ReiinfoCheck .list > li {line-height: 0.7rem;border-bottom: 1px solid #ececec}
.ReiinfoCheck .list p {text-align: left;zoom: 1;font-size: 0.28rem;color: #333;}
.ReiinfoCheck .list p:after {content: '';display: block;clear: both;}
.ReiinfoCheck .list span {float: right;color: #999;}
.ReiinfoCheck .list img {height: 2.12rem;float: right;}
.ReiinfoCheck .btn_wrap{
    padding: 1rem 0rem;
    display: flex;
    justify-content:space-evenly;
}
.ReiinfoCheck .hui-btn-large{
    height: .9rem;
    width: 2.8rem;
    font-size: .32rem;
    color: white;
}
</style>

