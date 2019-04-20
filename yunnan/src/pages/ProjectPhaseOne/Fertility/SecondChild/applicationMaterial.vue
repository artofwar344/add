<template>
  <div class="settleForm">
    <towtop :name="titlename"/>
	<div class="header noMarginTop">申报材料</div>
	<div class="input_outside_box">
		<div class="input_box">
      		<label>申报区域<span class="required">*</span></label>
     	 	  <input type="text" :value="area" @click="open('picker01')"/>
          <HuiselectNew ref="picker01"  position="bottom" :dataslots="selectArea"  class="example-select_item"  @confirms="selectConfirmArea" @reset="resetArea"></HuiselectNew>
   		</div>
    <div class="input_box">
      		<label>生育孩次<span class="required">*</span></label>
     	 	  <input type="text" :value="childCount" @click="open('picker02')"/>
          <Huiselect ref="picker02"  position="bottom" :dataslots="selectData2"  class="example-select_item"  @confirms="selectConfirm2"></Huiselect>
   		</div>
    <div class="input_box">
      		<label>生育原因<span class="required">*</span></label>
     	 	  <input type="text" :value="reason" @click="open('picker03')"/>
          <Huiselect ref="picker03"  position="bottom" :dataslots="selectData3"  class="example-select_item"  @confirms="selectConfirm3"></Huiselect>
   		</div>
		<div class="input_box">
      		<label>夫妇结婚证号<span class="required">*</span></label>
     	 	<input type="text" v-model="marrageNumber" placeholder="请输入结婚证号"/>
   		</div>
    <div class="input_box">
      		<label>孕育状况</label>
     	 	  <input type="text" :value="situation" @click="open('picker04')"/>
          <Huiselect ref="picker04"  position="bottom" :dataslots="selectData4"  class="example-select_item"  @confirms="selectConfirm4"></Huiselect>
   		</div>
    <div class="input_box">
      		<label>怀孕周数</label>
     	 	<input type="number" v-model="weekNumber"/>
   		</div>
    <div class="input_box">
      <label>预产期</label>
      <input type="text"  :value="confirmValDate" @click="open('picker05')"/>
      <Datetime ref="picker05"  type="date"  v-model="valueDate"  position="bottom" :start-date=startDate :end-date=endDate @confirm="handleChangeConfirmDate"> </Datetime>
    </div>
    <div class="input_box">
      <label>证件用途<span class="required">*</span></label>
      <input type="text"  :value="purpose" @click="open('picker06')"/>
      <Huiselect ref="picker06"  position="bottom" :dataslots="selectData6"  class="example-select_item"  @confirms="selectConfirm6"></Huiselect>
    </div>
    <div class="input_box">
      <label>夫妇结婚日期<span class="required">*</span></label>
      <input type="text"  :value="confirmValDate2" @click="open('pickerDate')"/>
      <Datetime ref="pickerDate"  type="date"  v-model="valueDate2"  position="bottom" :start-date=startDate2 :end-date=endDate2 @confirm="handleChangeConfirmDate2"> </Datetime>
    </div>
    <div class="input_box">
      <label>夫妻属性<span class="required">*</span></label>
      <input type="text"  :value="property" @click="open('picker07')"/>
      <Huiselect ref="picker07"  position="bottom" :dataslots="selectData7"  class="example-select_item"  @confirms="selectConfirm7"></Huiselect>
    </div>
    <div class="input_box">
      		<label>备注</label>
     	 	<input type="text" v-model="comment"/>
   		</div>

	</div>
	<!-- <button class="commonBtn" @click="next">下一步</button> -->
  <mybutton :btnData="btnData" @click="next" />


  
    
		
  </div>
</template>

<script>
import mybutton from "../../../../components/MyButton";
function dateFormat(time, format) {
  const t = new Date(time);
  const tf = function(i) {
    return (i < 10 ? "0" : "") + i;
  };
  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, a => {
    switch (a) {
      case "yyyy":
        return tf(t.getFullYear());
      case "MM":
        return tf(t.getMonth() + 1);
      case "mm":
        return tf(t.getMinutes());
      case "dd":
        return tf(t.getDate());
      case "HH":
        return tf(t.getHours());
      case "ss":
        return tf(t.getSeconds());
      default:
        break;
    }
  });
}
import towtop from "../../../../components/HederTwo";
import { cenurl } from "../../../../components/toptow.js";
export default {
  data: function() {
    return {
      btnData:[
					{
						text:'下一步',
						disabled: false,
						isSure: true,
					}
				],
      titlename: "贰孩生育服务登记",
      area:'',
      childCount:'',
      reason:'',
      marrageNumber:'',
      situation:'',
      weekNumber:'',
      valueDate: "",
      confirmValDate: "",
      startDate: new Date(),
      endDate: new Date(2020, 0, 10),
      purpose:'',
      valueDate2: "",
      confirmValDate2: "",
      startDate2: new Date(),
      endDate2: new Date(2020, 0, 10),
      property:'',
      comment:'',

      selectArea: [{
					flex: 1,
					values: [{
						text: '男方户籍地',
						value: '1'
					}, {
						text: '女方户籍地',
						value: '2'
					}, {
						text: '男方居住地',
						value: '3'
					}, {
						text: '女方居住地',
						value: '4'
					}],
					className: 'slot1',
					showText: 'text',
					defaultIndex: 0
        }],
      selectData2: [{
					flex: 1,
					values: [{
						text: '数据1',
						value: '1'
					}, {
						text: '数据2',
						value: '2'
					}, {
						text: '数据3',
						value: '3'
					}, ],
					className: 'slot1',
					showText: 'text',
					defaultIndex: 0
        }],
      selectData3: [{
					flex: 1,
					values: [{
						text: '壹孩',
						value: '10'
					}, {
						text: '贰孩',
						value: '20'
					}],
					className: 'slot1',
					showText: 'text',
					defaultIndex: 1
        }],
      selectData4: [{
					flex: 1,

					values: [{
						text: '未孕',
						value: '1'
					}, {
						text: '已孕',
						value: '2'
					}, {
						text: '已分娩',
						value: '3'
					}],
					className: 'slot1',
					showText: 'text',
					defaultIndex: 3
        }],
      selectData6: [{
					flex: 1,
					values: [{
						text: '上户及生育报销',
						value: '1'
					}, {
						text: '辅助生',
						value: '2'
					}, {
						text: '仅用于报销生育保险',
						value: '3'
					}],
					className: 'slot1',
					showText: 'text',
					defaultIndex: 0
        }],
      selectData7: [{
					flex: 1,
					values: [{
						text: '男方独生子女',
						value: '11'
					}, {
						text: '女方独生子女',
						value: '12'
					}, {
						text: '双方独生子女',
						value: '22'
					}, {
						text: '其他',
						value: '20'
					}],
					className: 'slot1',
					showText: 'text',
					defaultIndex: 0
				}],
        

    };
  },
  components: {
    mybutton,
    towtop
  },
  methods: {
    resetArea(){
      this.area = "";
    },
    open(picker) {
      this.$refs[picker].open();
      document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    selectConfirmArea(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.area = selectedVal[0].text;
      } else {
        this.area = selectedVal;
      }
    },
    selectConfirm2(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.childCount = selectedVal[0].text;
      } else {
        this.childCount = selectedVal;
      }
    },
    selectConfirm3(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.reason = selectedVal[0].text;
      } else {
        this.reason = selectedVal;
      }
    },
    selectConfirm4(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.situation = selectedVal[0].text;
      } else {
        this.situation = selectedVal;
      }
    },
    selectConfirm6(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.purpose = selectedVal[0].text;
      } else {
        this.purpose = selectedVal;
      }
    },
    selectConfirm7(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.property = selectedVal[0].text;
      } else {
        this.property = selectedVal;
      }
    },


      handleChangeConfirmDate(value) {
      //日期确定值
      this.confirmValDate = dateFormat(value, "yyyy-MM-dd");
    },
    handleChangeConfirmDate2(value) {
      //日期确定值
      this.confirmValDate2 = dateFormat(value, "yyyy-MM-dd");
    },
    next() {
      this.$router.push('childInfo');
    },
  }
};

</script>



<style scoped lang="less">
@import "../../../../assets/css/Engagement.less";
</style>