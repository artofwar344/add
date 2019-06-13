<template>
	<div class="bureau_sports_search">
		<towtop :name="title" />
		<div class="input_box">
        	<label>举办地点</label>
        	<Icon type="arrow-right" size="16" color="#999999"></Icon>
        	<input type="text"  :value='district' @click="open('pickerselect01')" placeholder="请选择"/>
      	</div>
		<HuiselectNew
    		ref="pickerselect01"
    		position="bottom"
    		:dataslots="slots"
    		class="example-select_item"
    		@confirms="onValuesChange"
        @reset = "resetSelect"
 		></HuiselectNew>

		 <div class="input_box">
        	<label>举办时间</label>
        	<Icon type="arrow-right" size="16" color="#999999"></Icon>
        	<input type="text"  :value="confirmValDate" @click="open('picker2')" placeholder="请选择"/>
      	</div>

		  <Datetime
    		ref="picker2"
    		type="date"
    		v-model="valueDate"
    		position="bottom"
    		:start-date=startDate
    		:end-date=endDate
    		@confirm="handleChangeConfirmDate">
  		</Datetime>

		<!-- <button class="commonBtn" @click='btnClick'>查询</button> -->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="btnClick"/>
    </div>
	</div>
</template>
<script>
import towtop from "../../../components/HederTwo";
import Button from "./../common/button.vue";
import mybutton from "../../../components/MyButton";
export default {
  data() {
    return {
      btnData: [
        {
          text: "查询",
          disabled: false,
          isSure: true
        }
      ],
      title: "云南省公益性体育赛事",
      valueDate: "",
      confirmValDate: "",
      startDate: new Date(new Date().getFullYear() - 1, 0),
      endDate: new Date(new Date().getFullYear() + 1, 11),
      district: "",
      popupVisible: false,
      slots: [
        {
          flex: 1,
          values: [
            "请选择",
            "昆明",
            "曲靖",
            "玉溪",
            "保山",
            "昭通",
            "丽江",
            "普洱",
            "临沧",
            "德宏",
            "怒江",
            "迪庆",
            "大理",
            "楚雄",
            "红河",
            "文山",
            "西双版纳"
          ],

          className: "slot1",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        }
      ],
    };
  },
  components: {
    mybutton,
    towtop,
    Button
  },
  mounted() {
    this.confirmValDate = this.valueDate; //日期
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
    handleChangeConfirmDate(value) {
      //日期确定值
      this.confirmValDate = this.dateFormat(value, "yyyy-MM");
    },
    //选择市区
    onValuesChange(values) {
      this.district = values[0];
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },
    resetSelect(){
        this.district = "";
    },
    btnClick() {
      this.$router.push("welfareResult?spg_start_time=" +this.confirmValDate +"&city=" +this.district );
    },
    //格式化时间
    dateFormat(time, format) {
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
    },
    
  }
};
</script>
<style>
.bureau_sports_search .hui-popupPrompt_text {
  margin-top: 2.02rem;
  font-size: 0.28rem;
  color: #a3a3a3;
}
.bureau_sports_search .picker-slot:nth-of-type(3) {
  flex: 0 0 0% !important;
}
</style>
<style  scoped>
.datapicker {
  height: 0.82rem;
  width: 100%;
}

.bureau_sports_search {
  height: 5rem;
  width: 100%;
}

.mint-cell-title {
  text-align: left !important;
}

.example-select_btn-wrapper {
  margin-top: 15px;
}

.example-select_arrowRight {
  display: block;
  width: 30px;
  height: 30px;
  /*background: url(../../../src/common/images/common-arrowRight.png) 5px center no-repeat;*/
  background-size: 16px 16px;
}

.hui-field_core {
  text-align: right;
}

.hui-field_main {
  font-size: 0.28rem;
}

.hui-field_star {
  display: none;
}

.hui-btn.is-block {
  width: 5.9rem;
  height: 0.9rem;
  margin: 1rem auto;
  background-color: #2d7ffc;
  font-size: 0.32rem;
  color: #fff;
}

.hui-popupPrompt {
  width: 5.86rem;
}
.hui-popupPrompt_text {
  text-align: center;
  color: #a3a3a3;
  margin-top: 2.02rem;
}
.hintImg {
  background-image: url("../../../assets/images/ico_hint@3x.png");
  background-size: 1.12rem 1.12rem;
  width: 1.12rem;
  height: 1.12rem;
  position: absolute;
  top: 0;
  left: 50%;
  margin: 0.56rem 0 0 -0.56rem;
}

</style>