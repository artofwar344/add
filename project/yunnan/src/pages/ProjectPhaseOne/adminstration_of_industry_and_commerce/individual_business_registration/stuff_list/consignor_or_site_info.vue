<template>
  <div class="consignor-info-page">
  <towtop :name="titleName" />
  <div class="container">
  	<!--委托代理人证明start-->
    <div class="form-box" v-if="source.appendixNumb =='2'">
      <div class="form-item select">
        <p class="label">
          <span class="star">*</span>
          委托有效期至
        </p>
        <div class="content" @click="open('pickertime1')">
          <p class="text" :class="timeValue ? '': 'default'" type="text">{{timeValue ? timeValue : '请选择时间'}}</p>
          <span class="arrow">></span>
        </div>
      </div>

      <div class="form-item switch" ref="switch1">
        <p class="label">
          <span class="star">*</span>
          <span class="text">核对登记材料中的复印件并签署核对意见</span>
        </p>
        <div class="content">
          <Huiswitch ref="switch1" @on-change="switchHandle1" :value="value1=='1'" size="large">
            <span slot="open">同意</span>
            <span slot="close">不同意</span>
          </Huiswitch>
        </div>
      </div>

      <div class="form-item switch">
        <p class="label">
          <span class="star">*</span>
          <span class="text">修改有关表格的填写错误</span>
        </p>
        <div class="content">
          <Huiswitch @on-change="switchHandle2" :value="value2=='1'" size="large">
            <span slot="open">同意</span>
            <span slot="close">不同意</span>
          </Huiswitch>
        </div>
      </div>

      <div class="form-item switch">
        <p class="label">
          <span class="star">*</span>
          <span class="text">领取各类通知书</span>
        </p>
        <div class="content">
          <Huiswitch @on-change="switchHandle3" :value="value3=='1'" size="large">
            <span slot="open">同意</span>
            <span slot="close">不同意</span>
          </Huiswitch>
        </div>
      </div>

      <div class="form-item switch">
        <p class="label">
          <span class="star">*</span>
          <span class="text">领取个体工商户营业执照</span>
        </p>
        <div class="content">
          <Huiswitch @on-change="switchHandle4" :value="value4=='1'" size="large">
            <span slot="open">同意</span>
            <span slot="close">不同意</span>
          </Huiswitch>
        </div>
      </div>

      <div class="form-item input">
        <p class="label">
          <span class="star">*</span>
          委托代理人住所
        </p>
        <input class="content-input" v-model="home" placeholder="请输入委托代理人住所"/>
      </div>

      <div class="form-item input">
        <p class="label">
          <span class="star">*</span>
          邮编
        </p>
        <input class="content-input" v-model.number="postcode" placeholder="请输入邮编"/>
      </div>
    </div>
    <!--委托代理人证明end-->
    <!--住所申报承诺书start-->

    <div class="form-box site" v-else>
      <div class="form-item switch">
        <p class="label">
          <span class="star">*</span>
          <span class="text">住所是否属于军队、武警房地产</span>
        </p>
        <div class="content">
          <Huiswitch @on-change="switchHandle5" :value="value5=='1'">
            <span slot="open">是</span>
            <span slot="close">否</span>
          </Huiswitch>
        </div>
      </div>

      <div class="form-item samll-select">
        <p class="label">
          <span class="star">*</span>
          住所的房屋性质
        </p>
        <div class="content" @click="open('pickerselect1')">
          <p class="text" :class="homeType ? '': 'default'" type="text">{{homeType ? homeType.text : '请选择住所的房屋性质'}}</p>
          <span class="arrow">></span>
        </div>
      </div>
    <div class="form-item samll-select" v-if='this.homeType.value =="9"'>
        <p class="label">
          <span class="star"></span>
       
        </p>
        <div  style='float: right;text-align: right;overflow: hidden;padding-right: .4rem;' >
         <input type="text"  v-model='otherHomeType' placeholder="请输入房屋性质" style='float:right;text-align: right;'/>
         
        </div>
      </div>

      <div class="form-item select">
        <p class="label">
          <span class="star">*</span>
      住所的房屋使用期限
        </p>
        <div class="content" @click="open('pickertime2')">
          <p class="text" :class="timeStart ? '': 'default'" type="text">{{timeStart ? timeStart : '请选择开始时间'}}</p>
          <span class="arrow">></span>
        </div>
      </div>

      <div class="form-item select">
        <p class="label"></p>
        <div class="content" @click="open('pickertime3')">
          <p class="text" :class="timeEnd ? '': 'default'" type="text">{{timeEnd ? timeEnd : '请选择结束时间'}}</p>
          <span class="arrow">></span>
        </div>
      </div>
    </div>
     <!--住所申报承诺书end-->

  </div>
    <p class="btn-next" @click='saveInfo'>保存</p>

    <!-- 选择住所的房屋性质 -->
    <Huiselect
      ref="pickerselect1"
      position="bottom"
      :dataslots="homeTypeParam"
      class="example-select_item"
      @confirms="selectConfirm1"
  ></Huiselect>

    <Datetime
      ref="pickertime1"
      type="date"
      position="bottom"
      v-model="timeData1"
      :start-date="new Date('1960-01-01')"
      :end-date="new Date('2090-01-01')"
      @confirm="timeHandle1"
    ></Datetime>

    <Datetime
      ref="pickertime2"
      type="date"
      position="bottom"
      v-model="timeData2"
      :start-date="new Date('1960-01-01')"
      :end-date="new Date('2090-01-01')"
      @confirm="timeHandle2"
    ></Datetime>

    <Datetime
      ref="pickertime3"
      type="date"
      position="bottom"
      v-model="timeData3"
      :start-date="startDate1"
      :end-date="new Date('2090-01-01')"
      @confirm="timeHandle3"
    ></Datetime>
  </div>
</template>

<script>
import towtop from '@/components/HederTwo.vue'
	import {
		Popup,
		Picker,
		MessageBox
	} from 'mint-ui';
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

export default {
  data() {
    return {
    	userId:'',
      soureType: '',
      timeValue: '',
      otherHomeType:'',
      timeStart: '',
      startDate1:new Date(),
      timeEnd: '',
      value1: '0',
      value2: '0',
      value3: '0',
      value4: '0',
      value5: '0',
      home: '',
      postcode: '',
      homeType: '',
      timeData1: new Date(),
      timeData2: new Date(),
      timeData3: new Date(),
      homeTypeParam: [{
        flex: 1,
        values: [
          {
            text: '工业或商用',
            value: '1'
          },
          {
            text: '住宅',
            value: '2'
          },
          {
          	text:'其他',
          	value:'9'
          }
        ],
        showText: 'text',
        className: 'slot1',
      }],
    }
  },
  props: [
    'source',
    'appNo',
    'cacheId'
  ],
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {

  //   })
  // },
  components: {
    towtop,
    MessageBox
  },
  computed: {
    titleName () {
      if (this.source.appendixNumb =='2') {
        return '委托代理人证明'
      }

      if (this.source.appendixNumb =='5') {
        return '住所（经营场所）申报承诺书'
      }

      return '材料清单'
    }
  },
  methods: {
  	getData(){                                                //获取额外信息
  			this.$ajaxRequest('post', '/gsp/mng80207', {
							"txnBodyCom": {
							'chann_id':'1',
								id:this.source.id,

								'appNo':this.appNo,
								userId:this.userId,
							},
							"txnCommCom": {

							}

						},null,(res)=>{
							if(res.data['C-API-Status'] =='00'){
								let cBody = JSON.parse(res.data['C-Response-Body'])
								let cData =JSON.parse(cBody.extraData)		
								 if (this.source.appendixNumb =='2') {
      
  					    }else{
  					    	this.timeStart=  cData.startDate
  					    	this.timeEnd=  cData.endDate
  					    	
  					    }
								console.log('callback',cBody,cData)
							}
							
						})
  	},

    switchHandle1 (value) {
      if(value == true){
    		 this.value1 = '1'
    	}else{
    		 this.value1 = '0'
    	}
    },
    switchHandle2 (value) {
      if(value == true){
    		 this.value2 = '1'
    	}else{
    		 this.value2 = '0'
    	}
    },
    switchHandle3 (value) {
     if(value == true){
    		 this.value3 = '1'
    	}else{
    		 this.value3 = '0'
    	}
    },
    switchHandle4 (value) {
     if(value == true){
    		 this.value4 = '1'
    	}else{
    		 this.value4 = '0'
    	}
    },
    switchHandle5 (value) {
    	console.log(value)
    	if(value == true){
    		 this.value5 = '1'
    	}else{
    		 this.value5 = '0'
    	}

    },
    timeHandle1 (value) {
      this.timeValue = dateFormat(value, 'yyyy-MM-dd')
    },
    timeHandle2 (value) {
      this.timeStart = dateFormat(value, 'yyyy-MM-dd')
      this.startDate1 =value
      this.timeEnd = ''
    },
    timeHandle3 (value) {
      this.timeEnd = dateFormat(value, 'yyyy-MM-dd')
      
    },
    selectConfirm1 (value) {
      this.homeType = value[0]
    },
    open(picker) {
      this.$refs[picker].open();
      document.activeElement.blur();
      $('.hui-popup').on('touchmove', function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    saveInfo(){                                       //验证并发送额外信息
    	let obj ={}
    	if(this.source.appendixNumb =='2'){   //委托代理人证明

    		if(this.timeValue==''){
    			MessageBox.alert('委托有效期不可为空', '提示');
    			return false
    		}
    		if(this.home==''){
    			MessageBox.alert('请填写委托代理人住所', '提示');
    			return false
    		}
    		if(!/^[0-9]{6}$/.test(this.postcode)){
    			MessageBox.alert('请填写正确的邮编', '提示');
    			return false
    		}
    		 obj={
    		 	extra_save_flag_key:'1',
    			authDateTo:this.timeValue,
    			isAdmitCheck:this.value1,
    			isModfyTable:this.value2,
    			isDocument:this.value3,
    			isLicen:this.value4,
    			address:this.home,
    			postCode:this.postcode+''
    		}
    		console.log(obj)
    	}else{
    		if(this.homeType ==''){
    			MessageBox.alert('请选择房屋性质', '提示');
    			return false
    		}
    		if(this.timeStart==''||this.timeEnd ==''){
    			MessageBox.alert('使用期限不可为空', '提示');
    			return false
    		}
    		
    		obj = {
    			extra_save_flag_key:'1',
    			isJd:this.value5,
    			roomProp:this.homeType.value,
    			roomPropDesc:'',
    			startDate:this.timeStart,
    			endDate:this.timeEnd
    		}
    		if(this.homeType.value =='9'){
    			obj.roomPropDesc = this.otherHomeType
    		}
    	}
    	console.log(obj)

    	this.$ajaxRequest('post', '/gsp/mng80208', {
							"txnBodyCom": {
							'chann_id':'1',
								id:this.source.id,
								cacheId:this.cacheId,
								'appNo':this.appNo,
								userId:this.userId,
								extraData:JSON.stringify(obj),
								appendixId:this.source.appendixUuid

								//'22febf7960834d889110520002478dc4'
							},
							"txnCommCom": {

							}

						}).then((res) => {
							if(res.result){
								let result =JSON.parse(res.result)
								if(this.source.appendixNumb =='2'){
										sessionStorage.wtProxy = '1'
								}else{
									sessionStorage.operatorArea = '1'
								}
								this.$router.push('/stuffIndex')
								console.log( result)
							}

						})
						.catch((error) => {
							console.log(error)
						})


    }
  },
  created(){
  
  		this.userId = sessionStorage.gsUserId

  	console.log(this.source)
  //	this.getData()
  }
}
</script>

<style lang="less" scoped>
@import "../../../../../assets/css/aic_common.less";
.consignor-info-page {
  height: 100%;
  .container {
    margin-bottom: 1rem;
  }
}
</style>

