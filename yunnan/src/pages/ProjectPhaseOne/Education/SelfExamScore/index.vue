<template>
  <div>
    <towtop :name="titlename"/>
    <div>
      <div class="middleone">
        <span class="middletwo">*</span>
        <Field
          readonly
          label="考试时间"
          desc
          disableclear
          type="text"
          placeholder="请选择"
          :required="false"
          :value="examYear"
          @click.native="yearOpen('pickerselect01')"
        ></Field>
      </div>
      <Selectpopup
        ref="pickerselect01"
        position="bottom"
        
        :dataslots="selectData01"
        :visible-item-count="5"
        class="example-select_item"
        @confirms="select01"
      ></Selectpopup>
      <div class="littlestarbig">
        <span class="littlestar" v-if="showtype">*</span>
        <div class="input_box" v-if="showtype">
          <label>准考证号</label>
          <input type="text" placeholder="请输入准考证号" v-model="number">
        </div>
      </div>
      <div class="littlestarbig">
        <span class="littlestar" v-if="showtype">*</span>
        <div class="input_box" v-if="showtype">
          <label>六位查询密码</label>
          <input type="password" placeholder="请输入查询密码" v-model="password">
        </div>
      </div>
    </div>
    <!-- <button v-if="showtype" class="commonBtn" @click="query()">查询</button>
    <button v-if="showtypes" class="commonBtn" @click="querys()">查询</button>-->
    <div class="padTopAdd5" v-if="showtype">
      <mybutton :btnData="btnData" @click="query"/>
    </div>
    <div class="padTopAdd5" v-if="showtypes">
      <mybutton :btnData="btnData" @click="querys"/>
    </div>
  </div>
</template>

<script>
import towtop from "../../../../components/HederTwo";
import mybutton from "../../../../components/MyButton";
export default {
  data: function() {
    return {
      btnData: [
        {
          text: "查询",
          disabled: false,
          isSure: true
        }
      ],
      titlename: "自学考试成绩查询",
      number: "",
      password: "",
      cardid: "",
      examType: "",
      examName: "",
      examYear: "",
      showtypes: false,
      showtype: false,
      selectFlag: false, //false:year, true:type
      selectData01: [
        {
          flex: 1,
          values: [],
          showText: "text",
          className: "slot1",
          textAlign: "center"
        }
      ]
    };
  },
  components: {
    mybutton,
    towtop
  },
  created() {
    if (window.sessionStorage.getItem("cardid") != "null") {
      this.showtypes = true;
    } else {
      this.showtype = true;
    }
  },
  methods: {
    query: function() {
      var regex = /^\d{12}$/g;
      if (this.examYear.length == 0) {
        this.$toast("请选择考试时间");
        return;
      } else if (this.number == "") {
        this.$toast("请输入准考证号");
        return;
      } else if (!regex.test(this.number)) {
        this.$toast("请输入12位准考证号");
        return;
      } else if (this.password == "") {
        this.$toast("请输入查询密码");
        return;
      } else {
        this.$router.push(
          "selfExamScoreResult?number=" +
            this.number +
            "&password=" +
            this.password +
            "&testtime=" +
            this.examYear
        );
      }
    },
    querys() {
      if (this.examYear.length == 0) {
        this.$toast("请选择考试时间");
        return;
      }
      this.$router.push(
        "selfExamScoreResult?cardid=" +
          window.sessionStorage.getItem("cardid") +
          "&testtime=" +
          this.examYear
      );
    },
    typeOpen(picker) {
      this.selectData01[0].values = types;
      this.selectFlag = true;
      this.$refs[picker].open();
      document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    yearOpen(picker) {
      this.selectFlag = false;
      var today = new Date();
      var year = today.getFullYear();
      var Month = today.getMonth() + 1;
      console.log(Month);
      var years = [];
      if (Month < 3) {
        years.push((year - 2).toString() + "04");
        years.push((year - 2).toString() + "10");
        years.push((year - 1).toString() + "04");
        years.push((year - 1).toString() + "10");
      } else if (Month < 10) {
        years.push((year - 2).toString() + "04");
        years.push((year - 2).toString() + "10");
        years.push((year - 1).toString() + "04");
        years.push((year - 1).toString() + "10");
        years.push(year.toString() + "04");
      } else if (Month >= 10) {
        years.push((year - 2).toString() + "04");
        years.push((year - 2).toString() + "10");
        years.push((year - 1).toString() + "04");
        years.push((year - 1).toString() + "10");
        years.push(year.toString() + "04");
        years.push(year.toString() + "10");
      }
      this.selectData01[0].values = years;
      this.$refs[picker].open();
      document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    select01(selectedVal) {
      if (this.selectFlag) {
        this.examName = selectedVal[0].text;
        this.examType = selectedVal[0].value;
      } else {
        this.examYear = selectedVal[0];
      }
    }
  }
};
</script>
<style  scoped>
.hui-field {
  border-bottom: 1px solid #f1f3f6 !important;
  height: 1rem;
  line-height: 1rem;
}
.littlestarbig{
  position: relative;
}
.littlestar{
  display: inline-block;
  color: red;
  font-size:0.4rem;
  position: absolute;
  left:0.1rem;
  top: 0.36rem;
}
.middleone{
  position:relative;
}
.middletwo{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: absolute;
  top:50%;
  left:0.12rem;
}
</style>
