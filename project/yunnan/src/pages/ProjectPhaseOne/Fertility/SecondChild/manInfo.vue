<template>
  <div class="settleForm">
    <towtop :name="titlename"/>
	<div class="header noMarginTop">男方信息</div>
	<div class="input_outside_box">
		<div class="input_box">
      		<label>姓名<span class="required">*</span></label>
     	 	<input type="text" v-model="femaleName"/>
   		</div>
		<div class="input_box">
      		<label>证件类型<span class="required">*</span></label>
     	 	  <input type="text" :value="type" @click="open('pickertype')"/>
          <Huiselect ref="pickertype"  position="bottom" :dataslots="selectType"  class="example-select_item"  @confirms="selectConfirmType"></Huiselect>
   		</div>
		<div class="input_box">
      		<label>证件号码<span class="required">*</span></label>
     	 	<input type="text" v-model="idNumber"/>
   		</div>
    <div class="input_box">
      <label>出生日期<span class="required">*</span></label>
      <input type="text"  :value="confirmValDate" @click="open('pickerselect04')"/>
      <Datetime ref="pickerselect04"  type="date"  v-model="valueDate"  position="bottom" :start-date=startDate :end-date=endDate @confirm="handleChangeConfirmDate"> </Datetime>
    </div>
		<div class="input_box">
      	<label>户口性质<span class="required">*</span></label>
     	 	<input type="text" :value="residence" @click="open('pickerResidence')"/>
        <Huiselect ref="pickerResidence" position="bottom" :dataslots="selectData"  class="example-select_item"  @confirms="selectConfirmResidence"></Huiselect>
   		</div>
    <div class="input_box">
      	<label>民族<span class="required">*</span></label>
     	 	<input type="text" :value="minzu" @click="open('pickerMinzu')"/>
        <Huiselect ref="pickerMinzu" position="bottom" :dataslots="selectMinzu"  class="example-select_item"  @confirms="selectConfirmMinzu"></Huiselect>
   		</div>
    <div class="input_box">
      	<label>婚姻状况<span class="required">*</span></label>
     	 	<input type="text" :value="marrage" @click="open('pickerMarrage')"/>
        <Huiselect ref="pickerMarrage" position="bottom" :dataslots="selectMarrage"  class="example-select_item"  @confirms="selectConfirmMarrage"></Huiselect>
   		</div>
    <div class="input_box">
      <label>婚姻变动年月<span class="required">*</span></label>
      <input type="text"  :value="confirmValDate2" @click="open('pickerDate')"/>
      <Datetime ref="pickerDate"  type="date"  v-model="valueDate2"  position="bottom" :start-date=startDate2 :end-date=endDate2 @confirm="handleChangeConfirmDate2"> </Datetime>
    </div>
		<div class="input_box">
      		<label>联系电话<span class="required">*</span></label>
     	 	<input type="text" placeholder="请输入手机号" v-model="phone"/>
   		</div>   
    <div class="input_box" >
      		<label>户籍地<span class="required">*</span></label>
     	 	<input type="text" :value="resiAddress" @click='onshow(1)'/>
   		</div>
    <div class="input_box">
      		<label>居住地详址<span class="required">*</span></label>
     	 	<input type="text"  v-model="address"/>
   		</div>
     <div class="input_box" @click='onshow(2)'>
      		<label>现居住<span class="required">*</span></label>
     	 	<input type="text"  :value="preAddress"/>
   		</div>         
	</div>

  			<div class="fiveBox" v-show="onshwo">
				<div class="fiveCen">
					<div @click="uplod('-1')"><Field readonly  label="选择省" disablecler type="text" placeholder="请选择省" required :value="confirmValSelectmap"  @click.native="open('pickerselectmap')">
						<span class="example-select_arrowRight"></span>
					</Field></div>
					<Selectpopup ref="pickerselectmap" position="bottom" @touchmove.prevent  :dataslots="selectDatamap" class="example-select_item" @confirms="selectConfirmFunmap"></Selectpopup>

					<div @click="uplod('0')">
					<Field readonly  label="选择市" disablecler type="text" placeholder="请选择市" required :value="confirmValSelectmap1"  @click.native="open('pickerselectmap1')">
						<span class="example-select_arrowRight"></span>
					</Field></div>
					<Selectpopup ref="pickerselectmap1" position="bottom" @touchmove.prevent  :dataslots="selectDatamap1" class="example-select_item" @confirms="selectConfirmFunmap1"></Selectpopup>

					<div @click="uplod('1')">
					<Field readonly  label="选择县" disablecler type="text" placeholder="请选择县" required :value="confirmValSelectmap2"  @click.native="open('pickerselectmap2')">
						<span class="example-select_arrowRight"></span>
					</Field>
					</div>
					<Selectpopup ref="pickerselectmap2" position="bottom" @touchmove.prevent  :dataslots="selectDatamap2" class="example-select_item" @confirms="selectConfirmFunmap2"></Selectpopup>
					<div @click="uplod('2')"><Field readonly label="选择乡镇" disablecler type="text" placeholder="请选择乡镇" required :value="confirmValSelectmap3" @click.native="open('pickerselectmap3')">
						<span class="example-select_arrowRight"></span>
					</Field></div>
					<Selectpopup ref="pickerselectmap3" position="bottom" @touchmove.prevent  :dataslots="selectDatamap3" class="example-select_item" @confirms="selectConfirmFunmap3"></Selectpopup>
					<div @click="uplod('3')"><Field readonly label="选择村、街道" disablecler type="text" placeholder="请选择村、街道" required :value="confirmValSelectmap4" @click.native="open('pickerselectmap4')">
						<span class="example-select_arrowRight"></span>
					</Field></div>
					<Selectpopup ref="pickerselectmap4" position="bottom" @touchmove.prevent  :dataslots="selectDatamap4" class="example-select_item" @confirms="selectConfirmFunmap4"></Selectpopup>
					<div class="scl_btn">

						<button @click='endhwo'>取消</button>
						<button @click="okshwo">确定</button>
					</div>
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
      shwval: '',
			onshwo: false,
      femaleName: "",
      type: ["身份证"],
      idNumber: "",
      valueDate: "",
      confirmValDate: "",
      startDate: new Date(1980, 0, 1),
      endDate: new Date(2018, 0, 10),
      residence: "",
      minzu: "",
      marrage:'',
      valueDate2: "",
      confirmValDate2: "",
      startDate2: new Date(2000, 0, 1),
			endDate2: new Date(2018, 0, 10),
      phone: "",
      resiAddress:'',
      address:'',
      preAddress:'',
      sval: '',
				ssval: '',
				xxval: '',
				zcval: '',
				jval: '',
				sheng: '',
				sheng1: '',
				sheng2: '',
				sheng3: '',
				sheng4: '',
      selectDatamap: [{
					flex: 1,
					values: [],
					className: 'map',
					showText: 'regnNm',
					defaultIndex: 3
				}],
				confirmValSelectmap: [''],
				

				//--------------------------------------------------------------------
				errorSelectmap1: false,
				selectDatamap1: [{
					flex: 1,
					values: [],
					className: 'map',
					showText: 'regnNm',
					defaultIndex: 3
				}],
				confirmValSelectmap1: [''],
				//--------------------------------------------------------------------
				errorSelectmap2: false,
				selectDatamap2: [{
					flex: 1,
					values: [],
					className: 'map',
					showText: 'regNm',
					defaultIndex: 3
				}],
				confirmValSelectmap2: [''],
				//--------------------------------------------------------------------
				errorSelectmap3: false,
				selectDatamap3: [{
					flex: 1,
					values: [],
					className: 'map',
					showText: 'regnNm',
					defaultIndex: 3
				}],
				confirmValSelectmap3: [''],
				//--------------------------------------------------------------------
				errorSelectmap4: false,
				selectDatamap4: [{
					flex: 1,
					values: [],
					className: 'map',
					showText: 'regnNm',
					showText: 'regnCode',
					defaultIndex: 3
				}],
				confirmValSelectmap4: [''],

      selectType: [
        {
          flex: 1,
          values: [
            {
              text: "身份证",
              value: "10"
            },
            {
              text: "护照",
              value: "50"
            },
            {
              text: "港澳同胞回乡证（通行卡）",
              value: "44"
            },
            {
              text: "台湾居民来往大陆通行证",
              value: "43"
            },
            {
              text: "军官证",
              value: "30"
            },
            {
              text: "其他",
              value: "60"
            }
          ],
          className: "slot1",
          showText: "text",
          defaultIndex: 0
        }
      ],
      selectData: [
        {
          flex: 1,
          values: [
            {
              text: "城镇居民",
              value: "1"
            },
            {
              text: "农村居民",
              value: "2"
            },
            {
              text: "其它",
              value: "9"
            }
          ],
          className: "slot1",
          showText: "text",
          defaultIndex: 0
        }
      ],
      selectMinzu: [
        {
          flex: 1,
          values: minzu,
          showText: "text",
          className: "slot1",
          defaultIndex: 0
        }
      ],
      selectMarrage: [{
					flex: 1,
					///////
					values: [{
						text: '未婚',
						value: '10'
					}, {
						text: '已婚',
						value: '20'
					}, {
						text: '初婚',
						value: '21'
					}, {
						text: '再婚',
						value: '22'
					}, {
						text: '复婚',
						value: '23'
					}, {
						text: '丧偶',
						value: '30'
					}, {
						text: '离婚',
						value: '40'
					}, {
						text: '其他 ',
						value: '50'
					}],
					className: 'slot1',
					showText: 'text',
					defaultIndex: 1
				}],
    };
  },
  components: {
			mybutton,
    towtop
  },
  methods: {
    endhwo() {
				this.onshwo = false
				if(this.shwval == 1) {
				return this.oneMapValue = ''
				}else{
				return this.towMapValue = ''
					
				}
			},
			okshwo() {
				this.onshwo = false
				if(this.shwval == 1) {
					return this.oneMapValue = this.confirmValSelectmap + this.confirmValSelectmap1 + this.confirmValSelectmap2 + this.confirmValSelectmap3 + this.confirmValSelectmap4
					
					
				} else {
					return this.towMapValue = this.confirmValSelectmap + this.confirmValSelectmap1 + this.confirmValSelectmap2 + this.confirmValSelectmap3 + this.confirmValSelectmap4
					
				}
			},
    onshow(val) {
      document.activeElement.blur();
       console.log("aa")
				this.shwval = val
				if(val == 1) {
					this.onshwo = true
					this.confirmValSelectmap =''
					this.confirmValSelectmap1 ='' 
					this.confirmValSelectmap2 ='' 
					this.confirmValSelectmap3 ='' 
					this.confirmValSelectmap4 =''
				} else if(val == 2) {
					this.onshwo = true
					this.confirmValSelectmap =''
					this.confirmValSelectmap1 ='' 
					this.confirmValSelectmap2 ='' 
					this.confirmValSelectmap3 ='' 
					this.confirmValSelectmap4 =''
				}
      },
      uplod(val) {
				var parentIds
				val = val.toString()
				if(val === '-1' || val === undefined) {
					parentIds = '-1'
				} else if(val === '0') {
					parentIds = this.sval
				} else if(val === '1') {
					parentIds = this.ssval
				} else if(val === '2') {
					parentIds = this.xxval
				} else if(val === '3') {
					parentIds = this.zcval
        }
        let setdata={
          txnBodyCom: {
            matter_id: window.sessionStorage.getItem("matterid"),
            parentCode: parentIds,
            oType:'WJW'
          }
        }
        this.$ajaxRequest("post",'/gsp/mng19021', setdata).then(res => {
						let cent = res
						if(val == '-1') {
							this.selectDatamap[0].values = cent
						} else if(val == '0') {
							this.selectDatamap1[0].values = cent
						} else if(val == '1') {
							this.selectDatamap2[0].values = cent
						} else if(val == '2') {
							this.selectDatamap3[0].values = cent
						} else if(val == '3') {
							this.selectDatamap4[0].values = cent
						}
					})
					.catch(error => {
						console.log(error)
					})
			},
    open(picker) {
      this.$refs[picker].open();
      document.activeElement.blur();
    },
    selectConfirmResidence(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.residence = selectedVal[0].text;
      } else {
        this.residence = selectedVal;
      }
    },
    selectConfirmType(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.type = selectedVal[0].text;
      } else {
        this.type = selectedVal;
      }
    },
    selectConfirmMinzu(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.minzu = selectedVal[0].text;
      } else {
        this.minzu = selectedVal;
      }
    },
    selectConfirmMarrage(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.marrage = selectedVal[0].text;
      } else {
        this.marrage = selectedVal;
      }
    },
    selectConfirmFunmap(selectedVal) {
				if(typeof selectedVal[0] === 'object') {
					this.confirmValSelectmap = selectedVal[0].regnNm;
					this.sval = selectedVal[0].regnCode;
				} else {
					this.confirmValSelectmap = selectedVal;
				}

			},

			errorChangeFun(val) {
				this.errorSelectmap1 = val;
			},
			selectConfirmFunmap1(selectedVal) {
				if(typeof selectedVal[0] === 'object') {
					this.confirmValSelectmap1 = selectedVal[0].regnNm;
					this.ssval = selectedVal[0].regnCode;
				} else {
					this.confirmValSelectmap1 = selectedVal;
				}

			},
			selectConfirmFunmap2(selectedVal) {
				if(typeof selectedVal[0] === 'object') {
					this.confirmValSelectmap2 = selectedVal[0].regnNm;
					this.xxval = selectedVal[0].regnCode;
				} else {
					this.confirmValSelectmap2 = selectedVal;
				}

			},

			selectConfirmFunmap3(selectedVal) {
				if(typeof selectedVal[0] === 'object') {
					this.confirmValSelectmap3 = selectedVal[0].regnNm;
					this.zcval = selectedVal[0].regnCode;
				} else {
					this.confirmValSelectmap3 = selectedVal;
				}

			},
			selectConfirmFunmap4(selectedVal) {
				if(typeof selectedVal[0] === 'object') {
					this.confirmValSelectmap4 = selectedVal[0].regnNm;
					this.jval = selectedVal[0].regnCode;
				} else {
					this.confirmValSelectmap4 = selectedVal;
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
      this.$router.push('applicationMaterial');
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