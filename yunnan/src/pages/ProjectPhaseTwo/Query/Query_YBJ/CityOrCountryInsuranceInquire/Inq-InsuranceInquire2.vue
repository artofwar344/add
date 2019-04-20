<template>
  <div class="user-info-page">
    <towtop name="基本信息"/>
    <div class="container">
      <div class="item" v-for="(item, index) in defaultData" :key="index">
        <p class="label">{{item.label}}</p>
        <p class="value">{{item.value}}</p>
      </div>
    </div>

  </div>
</template>

<script>
import towtop from "@/components/HederTwo";

export default {
  data() {
    return {
      defaultData: [],
      name: '',
      idcard: '',
      num: '',
      gender: '',
      age: '',
      danwei: '',
      yibao: '',
      pType: '',
      status: '',
      manxing: '',
      phone: '',
      address: '',
      cardNum: '',
      sheNum: '',
      startTime: '',
    }
  },
  props: [
    'userInfo'
  ],
  components: {
    towtop
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (from.name === 'cityInsuranceInquire') {

        if (vm.userInfo) {
          vm.name = vm.userInfo.Nm
          vm.idcard = vm.userInfo.IPEM_RgsCtf_Pts_No
          vm.num = vm.userInfo.Idv_ID
          vm.gender = vm.userInfo.gnd == 1 ? "男" : "女"
          vm.age = vm.userInfo.Age
          vm.danwei = vm.userInfo.wrk_unit
          vm.yibao = vm.userInfo.wrk_unit
          vm.pType = vm.userInfo.Stff_Cgy
          vm.status = vm.userInfo.Insrd_St
          vm.manxing = vm.userInfo.Chrnc_Disease_Ind
          vm.phone = vm.userInfo.IPEM_Rgs_MblPh_No
          vm.address = vm.userInfo.IPEM_Rgs_Lnd
        }

        vm.defaultData = vm.cityData
      } else {

        if (vm.userInfo) {
          vm.name = vm.userInfo.Nm
          vm.cardNum = vm.userInfo.CardNo
          vm.gender = vm.userInfo.gnd === '1' ? '男' : '女'
          vm.sheNum = vm.userInfo.IPEM_RgsCtf_Pts_No
          vm.danwei = vm.userInfo.Insrd_City
          vm.startTime = vm.userInfo.Insrd_Tm
          vm.status = vm.userInfo.Insrd_St
        }

        vm.defaultData = vm.countryData
      }
    })
  },
  computed: {
    cityData () {
      return [
        {
          label: '个人编号',
          value: this.num
        },
        {
          label: '身份证号',
          value: this.idcard
        },
        {
          label: '姓名',
          value: this.name
        },
        {
          label: '性别',
          value: this.gender
        },
        {
          label: '年龄',
          value: this.age
        },
        {
          label: '工作单位',
          value: this.danwei
        },
        {
          label: '所属医保中心',
          value: this.yibao
        },
        {
          label: '所属人员类别',
          value: this.pType
        },
        {
          label: '参保状态',
          value: this.status
        },
        {
          label: '特慢性病登记信息',
          value: this.manxing
        },
        {
          label: '电话号码',
          value: this.phone
        },
        {
          label: '家庭住址',
          value: this.address
        },
      ]
    },

    countryData () {

      return [
        {
          label: '姓名',
          value: this.name
        },
        {
          label: '性别',
          value: this.gender
        },
        {
          label: '卡号',
          value: this.cardNum
        },
        {
          label: '社会保障号',
          value: this.sheNum
        },
        {
          label: '参保时间',
          value: this.startTime
        },
        {
          label: '参保单位',
          value: this.danwei
        },
        {
          label: '当前参保状态',
          value: this.status
        },
      ]
    }

  },
  methods: {}
}
</script>

<style lang="less" scoped>
.user-info-page {
  display: flex;
  flex-direction: column;

  .container {
    padding: 0.48rem;
    background: #fff;

    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 0.8rem;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      letter-spacing: 0.17px;

      .label {
        color: #999999;
      }

      .value {
        color: #333333;
      }
    }
  }
}
</style>
