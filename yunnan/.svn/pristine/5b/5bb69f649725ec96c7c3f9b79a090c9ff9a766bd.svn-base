<template>
  <div class="settleForm">
    <towtop :name="titlename"/>
	<div class="header noMarginTop">夫妇子女信息</div>
	<div class="input_outside_box">
    <div class="input_box">
      		<label>姓名<span class="required">*</span></label>
     	 	<input type="text" v-model="name" />
   		</div>
    <div class="input_box bigInput">
      		<label>身份证或医学证明或收养证</label>
     	 	<input type="text" v-model="certificate" />
   		</div>
    <div class="input_box">
      <label>出生日期<span class="required">*</span></label>
      <input type="text"  :value="confirmValDate" @click="open('picker05')"/>
      <Datetime ref="picker05"  type="date"  v-model="valueDate"  position="bottom" :end-date=endDate @confirm="handleChangeConfirmDate"> </Datetime>
    </div>
    <div class="input_box">
      		<label>性别<span class="required">*</span></label>
     	 	  <input type="text" :value="sex" @click="open('picker01')"/>
          <Huiselect ref="picker01"  position="bottom" :dataslots="selectData"  class="example-select_item"  @confirms="selectConfirm1"></Huiselect>
   		</div>
    <div class="input_box">
      		<label>生父姓名<span class="required">*</span></label>
     	 	<input type="text" v-model="faherName" />
   		</div>
    <div class="input_box">
      		<label>生母姓名<span class="required">*</span></label>
     	 	<input type="text" v-model="motherName" />
   		</div>
    <div class="input_box">
      		<label>孩次<span class="required">*</span></label>
     	 	  <input type="text" :value="childCount" @click="open('picker02')"/>
          <Huiselect ref="picker02"  position="bottom" :dataslots="selectData2"  class="example-select_item"  @confirms="selectConfirm2"></Huiselect>
   		</div>
		

	</div>
	<!-- <button class="commonBtn" @click="next">下一步</button> -->
    	<mybutton :btnData="btnData" @click="next" />


  
    
		
  </div>
</template>

<script>
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
import mybutton from "../../../../components/MyButton";
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
      name:'',
      certificate:'',
      valueDate: "",
      confirmValDate: "",
      endDate: new Date(),
      sex:'',
      faherName:'',
      motherName:'',
      childCount:['壹孩'],

      selectData: [{
					flex: 1,
					values: [{
						text: '男',
						value: '1'
					}, {
						text: '女',
						value: '2'
					}],
					className: 'slot1',
					showText: 'text',
					defaultIndex: 0
        }],
      selectData2: [{
					flex: 1,
					values: [{
						text: '壹孩',
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
    };
  },
  components: {
			mybutton,
    towtop
  },
  methods: {
    open(picker) {
      this.$refs[picker].open();
      document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    selectConfirm1(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.sex = selectedVal[0].text;
      } else {
        this.sex = selectedVal;
      }
    },

    selectConfirm2(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.childCount = selectedVal[0].text;
      } else {
        this.childCount = selectedVal;
      }
    },

    handleChangeConfirmDate(value) {
      //日期确定值
      this.confirmValDate = dateFormat(value, "yyyy-MM-dd");
    },
    next() {
      this.$router.push('upload');
    },
  }
};

const minzu = [
  {
    text: "汉族",
    value: "01"
  },
  {
    text: "蒙古族",
    value: "02"
  },
  {
    text: "回族",
    value: "03"
  },
  {
    text: "藏族",
    value: "04"
  },
  {
    text: "维吾尔族",
    value: "05"
  },
  {
    text: "苗族",
    value: "06"
  },
  {
    text: "彝族",
    value: "07"
  },
  {
    text: "壮族",
    value: "08"
  },
  {
    text: "布依族",
    value: "09"
  },
  {
    text: "侗族",
    value: "10"
  },
  {
    text: "裕固族",
    value: "11"
  },
  {
    text: "锡伯族",
    value: "12"
  },
  {
    text: "珞巴族",
    value: "13"
  },
  {
    text: "朝鲜族",
    value: "14"
  },
  {
    text: "瑶族",
    value: "15"
  },
  {
    text: "德昴族",
    value: "16"
  },
  {
    text: "独龙族",
    value: "17"
  },
  {
    text: "畲族",
    value: "18"
  },
  {
    text: "东乡族",
    value: "19"
  },
  {
    text: "土族",
    value: "20"
  },
  {
    text: "仫佬族",
    value: "21"
  },
  {
    text: "哈尼族",
    value: "22"
  },
  {
    text: "撒拉族",
    value: "23"
  },
  {
    text: "保安族",
    value: "24"
  },
  {
    text: "高山族",
    value: "25"
  },
  {
    text: "柯尔克孜族",
    value: "26"
  },
  {
    text: "塔塔尔族",
    value: "27"
  },
  {
    text: "乌孜别克族",
    value: "28"
  },
  {
    text: "门巴族",
    value: "29"
  },
  {
    text: "普米族",
    value: "30"
  },
  {
    text: "景颇族",
    value: "31"
  },
  {
    text: "黎族",
    value: "32"
  },
  {
    text: "布朗族",
    value: "33"
  },
  {
    text: "满族",
    value: "34"
  },
  {
    text: "仡佬族",
    value: "35"
  },
  {
    text: "羌族",
    value: "36"
  },
  {
    text: "土家族",
    value: "37"
  },
  {
    text: "白族",
    value: "38"
  },
  {
    text: "阿昌族",
    value: "39"
  },
  {
    text: "傈僳族",
    value: "40"
  },
  {
    text: "傣族",
    value: "41"
  },
  {
    text: "毛南族",
    value: "42"
  },
  {
    text: "哈萨克族",
    value: "43"
  },
  {
    text: "塔吉克族",
    value: "44"
  },
  {
    text: "基诺族",
    value: "45"
  },
  {
    text: "拉祜族",
    value: "46"
  },
  {
    text: "鄂伦春族",
    value: "47"
  },
  {
    text: "京族",
    value: "48"
  },
  {
    text: "赫哲族",
    value: "49"
  },
  {
    text: "佤族",
    value: "50"
  },
  {
    text: "鄂温克族",
    value: "51"
  },
  {
    text: "水族",
    value: "52"
  },
  {
    text: "达斡尔族",
    value: "53"
  },
  {
    text: "纳西族",
    value: "54"
  },
  {
    text: "俄罗斯族",
    value: "55"
  },
  {
    text: "怒族",
    value: "56"
  },
  {
    text: "外籍",
    value: "57"
  }
];
</script>



<style scoped lang="less">
@import "../../../../assets/css/Engagement.less";
.fiveBox {
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		left: 0;
		top: 0;
	}
	
	.fiveCen {
		position: fixed;
		bottom: 0;
		width: 100%;
  }
  
  .scl_btn {
		display: flex;
		background: #fff;
		padding-top: .1rem;
		padding-bottom: .1rem;
	}
	
	.scl_btn button {
		flex: 1;
		height: .9rem;
		color: #fff;
		line-height: .9rem;
		background: #00ace6;
		font-size: .34rem;
		border: 0;
		border-radius: .5rem;
		margin: 0 .05rem;
	}
	
	.hui-field_title {
		width: 3rem;
		font-size: .28rem;
		color: #333;
	}
	
	.hui-field {
		height: .98rem;
		line-height: .98rem;
		padding: 0 15px;
	}
</style>