<template>
  <div class="LevelFourLinkage">
    <ul>
      <!-- <li>
        <mySelect select-ref="countySelect" :value="LevelFourLinkageOpt[0].value"
                  label="参保地（区县）" @selectObjRes="selectSetObjVaule" @selectArrRes="selectSetVaule"
                  has-required="true" :dataslots="countyData"></mySelect>
      </li> -->
      <li>
        <mySelect select-ref="villagesSelect" :value="LevelFourLinkageOpt[1].value"
                  label="参保地街道（乡镇）" @selectObjRes="selectSetObjVaule" @selectArrRes="selectSetVaule"
                  :has-required="''" :dataslots="villagesData"></mySelect>
      </li>
      <li>
        <mySelect select-ref="hamletSelect" :value="LevelFourLinkageOpt[2].value"
                  label="参保地社区（村）" @selectObjRes="selectSetObjVaule" @selectArrRes="selectSetVaule"
                  :has-required="''" :dataslots="hamletData"></mySelect>
      </li>
      <li style="border:0 !important;">
        <mySelect select-ref="companySelect" :value="LevelFourLinkageOpt[3].value"
                  label="参保单位" @selectObjRes="selectSetObjVaule" @selectArrRes="selectSetVaule"
                  :has-required="''" :dataslots="companyData"></mySelect>
      </li>
    </ul>
  </div>
</template>

<script>
import mySelect from './select'
export default {
  name: 'LevelFourLinkage',
  props: {
    LevelFourLinkageOpt: [Array],
  },
  data () {
    return {
      countyData:  [{
        flex: 1,
        values:[],
        showText: 'regnNm',
        className: 'slot1',
        defaultIndex: 0
      }],
      villagesData: [{
        flex: 1,
        values: [],
        showText: 'sab102',
        className: 'slot1',
        defaultIndex: 0
      }],
      hamletData: [{
        flex: 1,
        values: [],
        showText: 'sab101',
        className: 'slot1',
        defaultIndex: 0
      }],
      companyData: [{
        flex: 1,
        values: [],
        showText: 'aab004',
        className: 'slot1',
        defaultIndex: 0
      }]
    }
  },
  created () {
    
  },
  mounted () {
  },
  components: {
    mySelect
  },
  computed: {
    // countyData (){
    //    return  [{
    //     flex: 1,
    //     values: this.arrOne,
    //     showText: 'sab102',
    //     className: 'slot1',
    //     defaultIndex: 0
    //   }]
    // }
  },
  methods: {
    selectSetObjVaule (opts) {
      this.$emit('selectObjRes', {
        picker: opts.picker,
        selectedVal: opts.selectedVal
      })
    },
    selectSetVaule (opts) {
      this.$emit('selectRes', {
        picker: opts.picker,
        selectedVal: opts.selectedVal
      })
    }
  }
}
</script>
<style>
  .LevelFourLinkage .hui-field_title{width: 2.6rem;}
  .LevelFourLinkage li{
    padding: 0;
  }
</style>
<style scoped lang="less">
  .LevelFourLinkage {
    ul {
      li{
        border-bottom: 1px solid #e1e2e6;
      }
    }
  }
</style>
