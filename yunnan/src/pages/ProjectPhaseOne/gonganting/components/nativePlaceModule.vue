<template>
  <div class="nativePlaceModule">

    <ul>
      <li>
        <div class="middleone">
          <span class="middletwo">*</span>
        <Field disabled :label="firstLabel"
               type="text" v-model="pageData.nationality.cmnCdNm"
               placeholder="请选择国家" :value="pageData.nationality.cmnCdNm" @click.native="open('nationalityPicker')" >
          <Icon type="arrow-right" size="16"  color="#757575"></Icon>
        </Field>
        </div>
        <Selectpopup
          ref="nationalityPicker"
          position="bottom"
          :dataslots="nationnalityParams"
          class="example-select_item"
          @confirms="nationalityConfirms"
        ></Selectpopup>
      </li>
      <li v-if='this.china'>
        <div class="middleone">
          <span class="middletwo" v-if='this.china'>*</span>
        <Field readonly disabled label="变更后省"
               type="text" placeholder="请选择省"
               :value="pageData.province.regnNm" @click.native="open('provicePicker')">
          <Icon type="arrow-right" size="16"  color="#757575"></Icon>
        </Field>
        </div>
        <Selectpopup
          ref="provicePicker"
          position="bottom"
          :dataslots="provinceParam"
          class="example-select_item"
          @confirms="proviceConfirms"
        ></Selectpopup>
      </li>
      <li v-if='this.china'>
        <div class="middleone">
          <span class="middletwo" v-if='this.china'>*</span>
        <Field readonly disabled label="变更后市"   type="text" placeholder="请选择市" :value="pageData.city.regnNm" @click.native="open('cityPicker')">
          <Icon type="arrow-right" size="16"  color="#757575"></Icon>
        </Field>
        </div>
        <Selectpopup
          ref="cityPicker"
          position="bottom"
          :dataslots="cityParam"
          class="example-select_item"
          @confirms="cityConfirms"
        ></Selectpopup>
      </li>
      <li v-if='this.china'>
        <div class="middleone">
          <span class="middletwo" v-if='this.china'>*</span>
        <Field readonly disabled label="变更后区/县"   type="text" placeholder="请选择区/县" :value="pageData.county.regnNm" @click.native="open('countyPicker')">
          <Icon type="arrow-right" size="16"  color="#757575"></Icon>
        </Field>
        </div>
        <Selectpopup
          ref="countyPicker"
          position="bottom"
          :dataslots="countyParam"
          class="example-select_item"
          @confirms="countyConfirms"
        ></Selectpopup>
      </li>
      <li v-if='this.china'>
        <div class="addressf">
          <span class="label"><span class="middlethree">*</span>变更后详细地址</span>
          <input class="input" type="text" placeholder="请输入地址" v-model="pageData.changeAddress" @change="changeHandle" required  />
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'nativePlaceModule',
  props: {
    paramsData: [Object,String]
  },
  data () {
    return {

      china:true,
      nationalityData: [{
        flex: 1,
        values: [],
        className: 'slot1',
        showText: 'text',
        defaultIndex: 0
      }],
      // proviceData: [{
      //   flex: 1,
      //   values: [],
      //   className: 'slot1',
      //   showText: 'text',
      //   defaultIndex: 0
      // }],
      // cityData: [{
      //   flex: 1,
      //   values: [],
      //   className: 'slot1',
      //   showText: 'text',
      //   defaultIndex: 0
      // }],
      // countyData: [{
      //   flex: 1,
      //   values: [],
      //   className: 'slot1',
      //   showText: 'text',
      //   defaultIndex: 0
      // }],
      pageData: {
        //nationality:{"cmnCd":"156","cmnCdNm":"中国","crtTime":1542350949000,"crtUserId":"admin","modfTime":1542350949000,"modfUserId":"admin","suprCmnCd":"1013","tenant":"530000000000","tms":1545978088091,"validStsCd":"1"},
        //province: {"addLvlCd":"1","crtUserId":"admin","modfUserId":"admin","regnCode":"530000","regnDesc":"YNS","regnNm":"云南省","regnShtn":"滇","suprRegnCode":"156","tenant":"530000000000","tms":1545978188080,"type":"GAT"},
        //city: {"addLvlCd":"2","crtUserId":"admin","modfUserId":"admin","regnCode":"530100","regnDesc":"YNSKMS","regnNm":"云南省昆明市","suprRegnCode":"530000","tenant":"530000000000","tms":1545978227183,"type":"GAT"},
        nationality:"",
        province:"",
        city:"",
        county: '',
        changeAddress: ''
      },
    }
  },
  created () {
    const _self = this
    _self.getArea()

  },
  components:{

  },
  mounted () {
    const _self = this
  //  console.log( this.paramsData)
      // this.fetchArea({parentCode: '156', regnLevel: '1'})
      //  this.fetchArea({ parentCode: this.pageData.province.regnCode, regnLevel: '2' })
      //  this.fetchArea({ parentCode: this.pageData.city.regnCode, regnLevel: '3' })
      let one = [{
          cmnCd: "156",
          cmnCdNm: "中国",
          crtTime: 1542350949000,
          crtUserId: "admin",
          modfTime: 1542350949000,
          modfUserId: "admin",
          suprCmnCd: "1013",
          tenant: "530000000000",
          tms: 1546011857440,
          validStsCd: "1",
      }]
      let two =[{
          addLvlCd: "1",
          crtUserId: "admin",
          modfUserId: "admin",
          regnCode: "530000",
          regnDesc: "YNS",
          regnNm: "云南省",
          regnShtn: "滇",
          suprRegnCode: "156",
          tenant: "530000000000",
          tms: "1546011328515",
          type: "GAT",

      }]
       let three =[{
          addLvlCd: "2",
          crtUserId: "admin",
          modfUserId: "admin",
          regnCode: "530100",
          regnDesc: "YNSKMS",
          regnNm: "云南省昆明市",
          suprRegnCode: "530000",
          tenant: "530000000000",
          tms: 1546013012639,
          type: "GAT",
      }]
      this.nationalityConfirms(one)
      this.proviceConfirms(two)
      this.cityConfirms(three)
  },
  computed: {
    ...mapGetters('publicSecurityStore', [
      'nationnalityParams',
      'provinceParam',
      'cityParam',
      'countyParam'
    ]),
    firstLabel () {
      const _self = this
      return `变更后${_self.paramsData}`
    }
  },
  methods: {
    ...mapActions('publicSecurityStore', [
      'fetchArea'
    ]),
    setShow(){
      this.isShow = false;
    },
    open (picker) {
      this.$refs[picker].open();
      document.activeElement.blur();
      window.scrollTo(0,0)
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    nationalityConfirms (selectedVal) {
      let _self = this;
      if (typeof selectedVal[0] === 'object') {
        _self.pageData.nationality = selectedVal[0];
      } else {
        _self.pageData.nationality = selectedVal;
      }
      _self.clearArea('nationality')
      console.log( _self.pageData.nationality
      .cmnCdNm)
      let chana = _self.pageData.nationality.cmnCdNm
      if(chana == '中国'){
        this.china = true
      }else{
        this.china = false
      }
      // if (selectedVal[0].regnNm === '中国') {
        this.fetchArea({parentCode: '156', regnLevel: '1'})
      // }

      this.$emit('setData', {country:  selectedVal[0]})
    },
    proviceConfirms (selectedVal) {

      let _self = this;
      if (typeof selectedVal[0] === 'object') {
        _self.pageData.province = selectedVal[0]
      } else {
        _self.pageData.province = selectedVal;
      }
      _self.clearArea('province')

      this.fetchArea({ parentCode: selectedVal[0].regnCode, regnLevel: '2' })

      this.$emit('setData', {province:  selectedVal[0]})
    },
    cityConfirms (selectedVal) {
      let _self = this;
      if (typeof selectedVal[0] === 'object') {
        _self.pageData.city = selectedVal[0]
      } else {
        _self.pageData.city = selectedVal;
      }
      _self.clearArea('city')

      this.fetchArea({ parentCode: selectedVal[0].regnCode, regnLevel: '3' })

      this.$emit('setData', {city:  selectedVal[0]})
    },
    countyConfirms (selectedVal) {
      // debugger
      let _self = this;
      if (typeof selectedVal[0] === 'object') {
        _self.pageData.county = selectedVal[0]
      } else {
        _self.pageData.county = selectedVal;
      }
      _self.clearArea('county')
      this.$emit('setData', {county:  selectedVal[0]})
    },
    getArea (opts) {
      const _self = this
      let sendData = {
        "txnBodyCom":{
          matter_id: window.sessionStorage.getItem("matterid"),
          "parentCode": opts.parentCode,
          "areaCode": opts.areaCode,
          "regnName": opts.regnName,
          "oType":'GAT',
          "regnLevel": opts.regnLevel
        }
      };
      _self.$ajaxRequest("post", "/gsp/mng19021", sendData).then(res => {
        if (res.length <= 0) {
          _self.$toast("搜索市级数据列表为空！");
          return false;
        } else {
          for (var i = 0, len = res.length; i < len; i++) {
            let temOb = {text: res[i].regnNm, value: res[i].regnCode};
            _self.cityPicker[0].values.push(temOb);
          }
        }
      }).catch(error => {
        console.log(error);
        _self.$toast("获取市级列表失败！");
      });
    },
    clearArea (clearLevel) {
      const _self = this
      switch (clearLevel) {
        case 'nationality' :
          _self.pageData.province = ''
          _self.pageData.city = ''
          _self.pageData.county = ''
          _self.pageData.changeAddress = ''
          break
        case 'province' :
          _self.pageData.city = ''
          _self.pageData.county = ''
          _self.pageData.changeAddress = ''
          break
        case 'city' :
          _self.pageData.county = ''
          _self.pageData.changeAddress = ''
          break
        case 'county' :
          _self. pageData.changeAddress = ''
          break
        default :
          console.log(clearLevel)
      }
    }, // 清除地区数据

    changeHandle (data) {
      this.$emit('setData', {address:  this.pageData.changeAddress})
    }
  }
}
</script>

<style scoped lang="less">
  .nativePlaceModule {
    .addressf {
      display: flex;
      align-items: center;
      height: 1rem !important;
      background: #fff;
      padding: 0 0.2rem 0 0;
      .input {
        display: inline-block;
        flex: 1;
        height: 50px;
        text-align: right;
        border: none;
        margin-left: 0.2rem;
      }

    }
  }
  .middleone{
    position:relative;
  }
  .middletwo{
    font-size: 0.4rem;
    color: red;
    display: inline-block;
    position: absolute;
    top:37%;
    left: 0;
  }
  .middlethree{
    font-size: 0.4rem;
    color: red;
    display: inline-block;
    position: relative;
    top: 5px;
    left:0;
  }
</style>
