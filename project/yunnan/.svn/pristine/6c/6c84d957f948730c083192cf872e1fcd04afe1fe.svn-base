<style scoped>
.loanInfoCheck .timeWrap{
    margin-top: 0.2rem;
    background: white;
    box-sizing:border-box;
}
.loanInfoCheck .timeWrap li {
    padding: 0rem 0.36rem;
    box-sizing: border-box;
    height: 1rem;
    line-height: 1rem;
    border-bottom:1px solid #999;
  }

.loanInfoCheck .chargeBtn button {
    width: 5.9rem;
    height: 0.9rem;
    background: #2D7FFC;
    box-shadow: 0 5px 15px 0 rgba(45, 127, 252, 0.50);
    border-radius: 25px;
    border: none;
    font-size: 16px;
    letter-spacing: 0.19px;
    text-align: center;
    margin-top: 1.02rem;
}
.loanInfoCheck .chargeBtn button a {
    color: #FFFFFF;
    }
.loanInfoCheck .hui-field{
    padding-left: 0rem;
    padding-right: 0rem;
    border-bottom:0.02rem solid #999;
}
.loanInfoCheck .timeWrap li:last-child .hui-field{
    border:none;
}
.loanInfoCheck .timeWrap li .hui-field .hui-field_border .hui-field_value,.loanInfoCheck .timeWrap li .hui-field .hui-field_border .hui-field_borderLeft{
    border:none;
}
.loanInfoCheck .hui-field{
  height: 100%;
  border: none;
}
</style>


<template>
    <div class="loanInfoCheck">
        <myheader :my-header="headerData"></myheader>
        <ul class="timeWrap">
            <li class="time">
                <Field readonly label="开始时间" disableclear
             type="text" placeholder="请选择" :value="confirmValDate2" @click.native="open('picker2')">   
                    <span slot="append" class="example-datetime_arrowRight"></span>
                </Field>
                <Datetime
                    ref="picker2"
                    type="date"
                    v-model="valueDate2"
                    position="bottom"
                    :start-date=startDate2
                    :end-date=endDate2
                    @confirm="handleChangeConfirmDate2">
                </Datetime>
                            </li>
                            <li class="time">
                                <Field readonly label="结束时间" disableclear
                            type="text" placeholder="请选择" :value="confirmValDate3" @click.native="open('picker3')">   
                    <span slot="append" class="example-datetime_arrowRight"></span>
                </Field>
                <Datetime
                    ref="picker3"
                    type="date"
                    v-model="valueDate3"
                    position="bottom"
                    :start-date=startDate3
                    :end-date=endDate3
                    @confirm="handleChangeConfirmDate3">
                </Datetime>
            </li>
        </ul>
        <div class="chargeBtn">
			<button><router-link to="/loanPlan_result">确定</router-link></button>
		</div>
    </div>
</template>

<script>
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
import Header from "@/components/header/header";
export default {
  components: {
    myheader: Header
  },
  data() {
    return {
      headerData: {
        title: "贷款还款计划查询",
        backUrl: "/gongjijin"
      },
      valueDate2: '2018-03-05',
        confirmValDate2:'',
        startDate2:new Date(2016, 1, 1),
        endDate2:new Date(2019, 10, 10),
        valueDate3: '2018-03-05',
        confirmValDate3:'',
        startDate3:new Date(2016, 1, 1),
        endDate3:new Date(2019, 10, 10),
        
    };
  },
  methods: {
      open(picker) {
        document.activeElement.blur();
        this.$refs[picker].open();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
      },
      handleChangeConfirmDate2(value) {
        this.confirmValDate2 = dateFormat(value, 'yyyy-MM-dd');
      },
      handleChangeConfirmDate3(value) {
        this.confirmValDate3 = dateFormat(value, 'yyyy-MM-dd');
      }
    },
    mounted(){
      this.confirmValDate2 = this.valueDate2;
      this.confirmValDate3 = this.valueDate3;
    }
};
</script>
