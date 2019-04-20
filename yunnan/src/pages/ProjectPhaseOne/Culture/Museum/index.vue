<template>
  <div class="cultrue">
    <towtop :name="hadertow"/>
    <div class="cultureCen">
      <div>
        <div class="culture_box">
          <label class="label">区域</label>
          <div class="input">
            <input
              type="text"
              readonly="readonly"
              placeholder="请选择"
              :value="confirmValSelect"
              @click="open('pickerselect')"
            >
            <Icon type="arrow-right" size="16" color="#999999"></Icon>
          </div>
          <Selectpopup
            ref="pickerselect"
            
            position="bottom"
            :dataslots="selectData01"
            class="example-select_item"
            @confirms="selectConfirmFun01"
          ></Selectpopup>
        </div>

        <div class="culture_box">
          <label class="label">博物馆名称</label>
          <div class="input">
            <input
              type="text"
              readonly="readonly"
              placeholder="请选择"
              :value="confirmValSelect02"
              @click="open('pickerselect01')"
            >
            <Icon type="arrow-right" size="16" color="#999999"></Icon>
          </div>
          <Selectpopup
            ref="pickerselect01"
            
            position="bottom"
            :dataslots="selectData02"
            :visible-item-count="5"
            class="example-select_item"
            @confirms="selectConfirmFun02"
          ></Selectpopup>
        </div>
      </div>
      <!-- <div class="example-select_btn-wrapper">
				<Btn plain block @click.stop="submitBtn">查询</Btn>
      </div>-->
      <div class="padTopAdd5">
        <mybutton :btnData="btnData" @click="submitEvent"/>
      </div>
    </div>
  </div>
</template>

<script>
import towtop from "../../../../components/HederTwo";
import mybutton from "../../../../components/MyButton";
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
      hadertow: "云南省博物馆查询",
      errorSelect01: false,
      errorSelectInfo: "",
      selectData01: [
        {
          flex: 1,

          values: [
            {
              text: "云南",
              value: "144"
            },
            {
              text: "昆明",
              value: "1"
            },
            {
              text: "曲靖",
              value: "2"
            },
            {
              text: "玉溪",
              value: "3"
            },
            {
              text: "保山",
              value: "4"
            },
            {
              text: "昭通",
              value: "5"
            },
            {
              text: "丽江",
              value: "6"
            },
            {
              text: "普洱",
              value: "7"
            },
            {
              text: "临沧",
              value: "8"
            },
            {
              text: "德宏",
              value: "9"
            },
            {
              text: "怒江",
              value: "10"
            },
            {
              text: "迪庆",
              value: "11"
            },
            {
              text: "大理",
              value: "12"
            },
            {
              text: "楚雄",
              value: "13"
            },
            {
              text: "红河",
              value: "14"
            },
            {
              text: "文山",
              value: "15"
            },
            {
              text: "西双版纳",
              value: "16"
            }
          ],

          className: "slot1",
          showText: "text",
          defaultIndex: 3
        }
      ],
      selectData02: [
        {
          flex: 1,

          values: [
            {
              text: "博物馆",
              value: "1"
            },
            {
              text: "纪念馆",
              value: "2"
            },
            {
              text: "图书馆",
              value: "3"
            },
            {
              text: "文化馆",
              value: "4"
            },
            {
              text: "乡镇文化站",
              value: "5"
            },
            {
              text: "非遗保护中心查询",
              value: "6"
            },
            {
              text: "营业性上网场所",
              value: "7"
            },
            {
              text: "演出经纪机构",
              value: "8"
            },
            {
              text: "艺术品经营单位",
              value: "9"
            },
            {
              text: "艺术表演团体",
              value: "10"
            }
          ],

          className: "slot1",
          showText: "text",
          defaultIndex: 3
        }
      ],
      confirmValSelect: [],
      confirmValSelect02: []
    };
  },
  components: {
    mybutton,
    towtop
  },
  methods: {
    open(picker) {
      let _self = this;
      _self.$refs[picker].open();
      document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    errorChangeFun(val) {
      this.errorSelect01 = val;
    },
    selectConfirmFun01(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect = selectedVal[0].text;
      } else {
        this.confirmValSelect = selectedVal;
      }
    },
    selectConfirmFun02(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect02 = selectedVal[0].text;
      } else {
        this.confirmValSelect02 = selectedVal;
      }
    },

    submitBtn() {
      this.$router.push(
        "/culturecen?confirmValSelect" +
          this.confirmValSelect +
          "&confirmValSelect02" +
          this.confirmValSelect02 +
          "&matter_id=wh-yn-cx-001"
      );
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.cultrue .culture_box {
  height: 1rem;
  line-height: 1rem;
  font-size: 0.28rem;
  width: 100%;
  padding: 0 0.2rem 0 0.2rem;
  text-align: left;
  background-color: white;
  border-bottom: 0.01rem solid #ccc;
}
.cultrue .label {
  width: 30%;
  display: inline-block;
  text-align: left;
}
.cultrue .input {
  width: 68%;
  display: inline-block;
  text-align: right;
}
.cultrue input {
  text-align: center;
}
.cultrue .hui-btn.is-block {
  font-weight: 700;
  display: inline-block;
  width: 5.9rem;
  height: 0.9rem;
  margin: 0.6rem 0.35rem;
  background-color: #2d7ffc;
  font-size: 0.32rem;
  color: #fff;
  text-align: center;
}
</style>