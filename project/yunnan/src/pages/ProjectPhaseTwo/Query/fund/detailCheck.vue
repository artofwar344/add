<template>
  <div class="fundOne">
    <towtop :name="title"></towtop>
    <div class="example-formgroup">
      <Field
        readonly
        label="起始日期"
        disableclear
        type="text"
        placeholder="请选择"
        :value="confirmValDate1"
        @click.native="open('picker1')"
      >
        <span slot="append" class="example-datetime_arrowRight"></span>
      </Field>
      <Datetime
        ref="picker1"
        type="date"
        v-model="valueDate1"
        position="bottom"
        :start-date="startDate1"
        :end-date="endDate1"
        @confirm="handleChangeConfirmDate1"
      ></Datetime>
      <Field
        readonly
        label="结束日期"
        disableclear
        type="text" 
        placeholder="请选择"
        :value="confirmValDate2"
        @click.native="open('picker2')"
      >
        <span slot="append" class="example-datetime_arrowRight"></span>
      </Field>
      <Datetime
        ref="picker2"
        type="date"
        v-model="valueDate2"
        position="bottom"
        :start-date="startDate2"
        :end-date="endDate2"
        @confirm="handleChangeConfirmDate2"
      ></Datetime>
      
    </div>
    <ul class="list">
                <li><p>交易日期<span>2018-01-08</span></p></li>
                <li><p>业务摘要<span>汇款</span></p></li>
                <li><p>收入金额<span>200000</span></p></li>
                <li><p>支出金额<span>0.00</span></p></li>
                <li><p>金额 <span>999999</span></p></li>
            </ul>
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
import towtop from "@/components/HederTwo";
import mybutton from "@/components/MyButton";
export default {
  components: {
    mybutton,
    towtop
  },
  data() {
    return {
      btnData: [
        {
          text: "查询",
          disabled: false,
          isSure: true
        }
      ],
      title: "公积金明细查询",
      valueDate1: "2018-03-05",
      confirmValDate1: "",
      startDate1: new Date(2016, 1, 1),
      endDate1: new Date(2019, 10, 10),
      valueDate2: "2018-03-05",
      confirmValDate2: "",
      startDate2: new Date(2016, 1, 1),
      endDate2: new Date(2019, 10, 10)
    };
  },
  methods: {
    open(picker) {
      document.activeElement.blur();
      this.$refs[picker].open();
      $(".hui-popup").on("touchmove", function(event) {
        event.preventDefault();
        event.stopPropagation();
      });
    },
    handleChangeConfirmDate1(value) {//日期确定值
        this.confirmValDate1 = dateFormat(value, 'yyyy-MM-dd');
      },
     handleChangeConfirmDate2(value) {//日期确定值
        this.confirmValDate2 = dateFormat(value, 'yyyy-MM-dd');
      }
  }
};
</script>
<style scoped lang="less">
	
  .fundOne{
    .list{background: #fff;padding: .2rem 0 ;margin-top: .16rem;}
  .list>li{padding: 0.1rem 0.36rem 0.1rem;height:0.7rem;line-height: 0.7rem;}
  .list p{text-align: left;zoom:1;font-size: 0.28rem; color: #333;}
  .list p:after{content: '';display: block;clear: both;}
  .list span{float: right;color: #999}
  .list img{height:2.12rem;float: right}
  }
</style>