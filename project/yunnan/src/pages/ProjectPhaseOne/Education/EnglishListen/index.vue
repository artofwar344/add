<template>
  <div>
    <towtop :name="titlename"/>
    <div>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
        <div class="input_box">
          <label>考试时间</label>
          <Icon type="arrow-right" size="16" color="#999999"></Icon>
          <input
            type="text"
            placeholder="请选择考试时间"
            :value="confirmValSelect01"
            @click="open('pickerselect01')"
          >
        </div>
      </div>
      <div class="littlestarbig">
        <span class="littlestar" v-if="showtype">*</span>
        <div v-if="showtype" class="input_box">
          <label>准考证号</label>
          <input type="text" placeholder="请输入准考证号" v-model="number">
        </div>
      </div>
      <div class="littlestarbig">
        <span class="littlestar" v-if="showtype">*</span>
        <div v-if="showtype" class="input_box">
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
    <Huiselect
      ref="pickerselect01"
      position="bottom"
      :dataslots="selectData01"
      class="example-select_item"
      @confirms="selectConfirmFun01"
    ></Huiselect>
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

      titlename: "高考英语听力成绩查询",
      number: "",
      password: "",
      cardid: "",
      showtypes: false,
      showtype: false,
      selectData01: [
        {
          flex: 1,
          values: [],
          className: "slot1",
          defaultIndex: 1
        }
      ],
      confirmValSelect01: [] //['1987']
    };
  },
  components: {
    mybutton,

    towtop
  },
  created() {
    var today = new Date();
    var year = today.getFullYear();
    var Month = today.getMonth() + 1;
    console.log(Month);
    if (Month < 3) {
      this.selectData01[0].values.push("未到查询时间");
    } else if (Month < 9) {
      this.selectData01[0].values.push(year.toString() + "03");
    } else if (Month >= 9) {
      this.selectData01[0].values.push(year.toString() + "03");
      this.selectData01[0].values.push(year.toString() + "09");
    }
    if (window.sessionStorage.getItem("cardid") != "null") {
      this.showtypes = true;
    } else {
      this.showtype = true;
    }
  },
  methods: {
    query: function() {
      var regex = /^\d{9}$/g;
      if (this.confirmValSelect01.length == 0) {
        this.$toast("请选择考试时间");
        return;
      } else if (this.number == "") {
        this.$toast("请输入准考证号");
        return;
      } else if (!regex.test(this.number)) {
        this.$toast("请输入9位准考证号");
        return;
      } else if (this.password == "") {
        this.$toast("请输入查询密码");
        return;
      } else {
        this.$router.push(
          "englishListenScore?number=" +
            this.number +
            "&password=" +
            this.password +
            "&testtime=" +
            this.confirmValSelect01
        );
      }
    },
    querys() {
      if (this.confirmValSelect01.length == 0) {
        this.$toast("请选择考试时间");
        return;
      }
      this.$router.push(
        "englishListenScore?cardid=" +
          window.sessionStorage.getItem("cardid") +
          "&testtime=" +
          this.confirmValSelect01
      );
    },
    open(picker) {
      this.$refs[picker].open();
      document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    selectConfirmFun01(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect01 = selectedVal[0].text;
      } else {
        this.confirmValSelect01 = selectedVal;
      }
    }
  }
};
</script>

<style lang='less' scoped>
  .littlestarbig{
    position: relative;
  }
  .littlestar{
    color: red;
    font-size:0.4rem;
    position: absolute;
    left:0.1rem;
    top: 0.36rem;
  }
</style>
