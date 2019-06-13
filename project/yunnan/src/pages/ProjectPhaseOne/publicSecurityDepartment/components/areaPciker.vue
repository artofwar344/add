<template>
  <div class="area-page">
    <div class="input_outside_box">
      <div class="input_box">
        <span class="middleStar">*</span>
      <label>州市</label>
      <input type="text" placeholder="请选择登记地州市" :value="city" @click="open('pickerselect01')"/>
       <Icon type="arrow-right" size="16" color="#999999"></Icon>
    </div>
    <div class="input_box">
      <span class="middleStar">*</span>
      <label>区县</label>
      <input type="text" placeholder="请选择登记地区县" :value="county" @click="open('pickerselect02')"/>
       <Icon type="arrow-right" size="16" color="#999999"></Icon>
    </div>
    <div class="input_box">
      <span class="middleStar">*</span>
      <label>派出所</label>
      <input type="text" placeholder="请选择登记地派出所" :value="policestation" @click="open('pickerselect03')"/>
       <Icon type="arrow-right" size="16" color="#999999"></Icon>
    </div></div>

    <!-- 选择登记地州市 -->
    <HuiselectNew
    ref="pickerselect01"
    position="bottom"
    :dataslots="areaCityParam"
    class="example-select_item"
    @confirms="selectConfirmCity"
    @reset="resetCity"
 ></HuiselectNew>
 <!-- 选择登记地区县 -->
    <HuiselectNew
    ref="pickerselect02"
    position="bottom"
    :dataslots="areaCountyParam"
    class="example-select_item"
    @confirms="selectConfirmCounty"
    @reset="resetCounty"
 ></HuiselectNew>
<!-- 选择登记地派出所 -->
    <HuiselectNew
    ref="pickerselect03"
    position="bottom"
    :dataslots="policeStationParam"
    class="example-select_item"
    @confirms="selectConfirmPoliceStation"
    @reset="resetPoliceStation"
 ></HuiselectNew>

  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  props:['areaData'],
  data() {
    return {
      city: '',
      county: '',
      policestation: '',
      YNcode: '530000'
    }
  },
  created () {
    this.fetchAreaParams({level: '0', code: this.YNcode})
  },
  destroyed () {
    // console.log('-----------------')
    this.setArea({code: '1', data: []})
    this.setArea({code: '2', data: []})
  },
  watch:{
    areaData:function(newVal,oldVal){
      console.log("CLN",newVal,oldVal)
      let arr = [];
      if (newVal.city) {
        arr.push(newVal.city)
        this.selectConfirmCity(arr)
      } else if(!newVal.city) {
        //初始化数据
        this.city = ''
        this.county = ''
        this.policestation = ''
      }
      // arr.splice(0,arr.length); arr.push(newVal.county);
      // this.selectConfirmCounty(arr);
      // arr.splice(0,arr.length); arr.push(newVal.policestation);
      // this.selectConfirmPoliceStation(arr);
    }
  },
  computed: {
    ...mapGetters('publicSecurityStore', [
      'policeStationParam',
      'areaCityParam',
      'areaCountyParam'
    ])
  },
  methods: {
    ...mapActions('publicSecurityStore', [
      'fetchPoliceStation',
      'fetchAreaParams'
    ]),
    ...mapMutations('publicSecurityStore', [
      'setArea'
    ]),
    open(picker) {
      this.$refs[picker].open();
      document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    selectConfirmCity(selectedVal){
      this.city = selectedVal[0].orgName;
      this.$emit('setValue', {city: selectedVal[0]})

      this.fetchAreaParams({level: '1', code: selectedVal[0]['orgCode']})
    },
    selectConfirmCounty(selectedVal){
      this.county = selectedVal[0].orgName;
      this.$emit('setValue', {county: selectedVal[0]})

      this.fetchAreaParams({level: '2', code: selectedVal[0]['orgCode']})
    },
    selectConfirmPoliceStation(selectedVal){
      if (selectedVal[0]) {
        this.policestation = selectedVal[0].orgName;
        this.$emit('setValue', {policestation: selectedVal[0]})
      }
    },
    resetCity(){
      this.$emit("clear","city")
      this.city = "";
    },
    resetCounty(){
      this.county = "";
       this.$emit("clear","county")
    },
    resetPoliceStation(){
      this.policestation = "";
       this.$emit("clear","policestation")
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../../../assets/css/Settle.less";
</style>

<style lang="less" scoped>
.area-page {
  .input_box {
    display: flex;

    >input {flex: 1}
  }
}
.middleStar{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: relative;
  top: 9%;
  margin-right:0.05rem;
}
</style>


