<template>
  <div>
    <towtop :name="titlename"></towtop>
    <div v-if="statisticsflag==1||statisticsflag==6||statisticsflag==7">
      <FormGroup title-position="left">
        <Field
          readonly
          label="地州"
          desc
          disableclear
          type="text"
          placeholder="请选择地州"
          :required="false"
          :value="city"
          @click.native="yearOpen('pickerselect02')"
        ></Field>
        <Selectpopup
          ref="pickerselect02"
          position="bottom"
          
          :dataslots="selectData02"
          :visible-item-count="5"
          class="example-select_item"
          @confirms="select03"
        ></Selectpopup>
        <div class="rstsosuo">
          <Field
            readonly
            label="起始时间"
            desc
            disableclear
            type="text"
            placeholder="请选择"
            :required="false"
            :value="examYear"
            @click.native="yearOpen('pickerselect01')"
          ></Field>
          <Selectpopup
            ref="pickerselect01"
            position="bottom"
            
            :dataslots="selectData01"
            :visible-item-count="5"
            class="example-select_item"
            @confirms="select01"
          ></Selectpopup>
          <Field
            readonly
            label="截止时间"
            desc
            disableclear
            type="text"
            placeholder="请选择"
            :required="false"
            :value="examYear2"
            @click.native="yearOpen('pickerselect03')"
          ></Field>
          <Selectpopup
            ref="pickerselect03"
            position="bottom"
            
            :dataslots="selectData01"
            :visible-item-count="5"
            class="example-select_item"
            @confirms="select02"
          ></Selectpopup>
        </div>
      </FormGroup>
    </div>
    <div v-if="statisticsflag==2||statisticsflag==3||statisticsflag==4||statisticsflag==5">
      <div class="rstsosuo">
        <Field
          readonly
          label="起始时间"
          desc
          disableclear
          type="text"
          placeholder="请选择"
          :required="false"
          :value="examYear"
          @click.native="yearOpen('pickerselect01')"
        ></Field>
        <Selectpopup
          ref="pickerselect01"
          position="bottom"
          
          :dataslots="selectData01"
          :visible-item-count="5"
          class="example-select_item"
          @confirms="select01"
        ></Selectpopup>
        <Field
          readonly
          label="截止时间"
          desc
          disableclear
          type="text"
          placeholder="请选择"
          :required="false"
          :value="examYear2"
          @click.native="yearOpen('pickerselect03')"
        ></Field>
        <Selectpopup
          ref="pickerselect03"
          position="bottom"
          
          :dataslots="selectData01"
          :visible-item-count="5"
          class="example-select_item"
          @confirms="select02"
        ></Selectpopup>
      </div>
    </div>
    <!-- <div class='example-formgroup_btn-wrapper'>
			<Btn block @click='submitEvent()' class='scl_btn'>查询</Btn>
    </div>-->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="submitEvent"/>
    </div>
  </div>
</template>

<script>
import towtop from "../../../../components/HederTwo";
import { cenurl } from "../../../../components/toptow.js";
import mybutton from "../../../../components/MyButton";
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
      titlename: "",
      statisticsflag: "",
      ajaxurl: "",
      date: "",
      datatext: [],
      citytype: "",
      cityname: "",
      city: "",
      type: "",
      examType: "",
      examName: "",
      examYear: "",
      examType2: "",
      examName2: "",
      examYear2: "",
      selectFlag: false, //false:year, true:type
      selectData01: [
        {
          flex: 1,
          values: [],
          showText: "text",
          className: "slot1",
          textAlign: "center"
        }
      ],
      selectData02: [
        {
          flex: 1,
          values: [
            "迪庆",
            "临沧",
            "德宏",
            "昭通",
            "丽江",
            "保山",
            "文山",
            "楚雄",
            "西双版纳",
            "怒江",
            "玉溪",
            "曲靖",
            "红河",
            "普洱",
            "大理",
            "昆明"
          ],
          showText: "text",
          className: "slot1",
          textAlign: "center"
        }
      ],
      confirmValSelect: ""
    };
  },
  mounted() {
    this.confirmValDate = this.valueDate; //日期
    this.confirmValDate2 = this.valueDate; //日期
    this.statisticsflag = this.$route.query.statisticsflag;
    if (this.statisticsflag == 1) {
      this.titlename = "州(市)社会消费品零售总额年度查询";
      this.type = "4";
    } else if (this.statisticsflag == 2) {
      this.titlename = "云南省GDP年度数据查询";
      this.type = "6";
    } else if (this.statisticsflag == 3) {
      this.titlename = "云南省年末总人口年度数据查询";
      this.type = "3";
    } else if (this.statisticsflag == 4) {
      this.titlename = "云南省社会消费品零售总额年度查询";
      this.type = "1";
    } else if (this.statisticsflag == 5) {
      this.titlename = "云南省全部职工平均工资年度查询";
      this.type = "5";
    } else if (this.statisticsflag == 6) {
      this.titlename = "州(市)GDP年度数据查询";
      this.type = "2";
    } else if (this.statisticsflag == 7) {
      this.titlename = "州(市)年末总人口数据查询";
      this.type = "7";
    }
    this.queryYear();
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
    typeOpen(picker) {
      this.selectData01[0].values = types;
      this.selectData02[0].values = types;
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
      // var today = new Date();
      // var year = today.getFullYear();
      // var years = [year - 1, year];
      this.selectData01[0].values = this.datatext;
      //this.selectData02[0].values;
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
    },
    select02(selectedVal) {
      if (this.selectFlag) {
        this.examName2 = selectedVal[0].text;
        this.examType2 = selectedVal[0].value;
      } else {
        this.examYear2 = selectedVal[0];
      }
      if (this.examYear2 < this.examYear) {
        this.$toast("请选择大于起始时间的年份");
        this.examYear2 = "";
      }
    },
    select03(selectedVal) {
      if (this.selectFlag) {
        this.cityname = selectedVal[0].text;
        this.citytype = selectedVal[0].value;
      } else {
        this.city = selectedVal[0];
      }
      this.queryYear();
    },
    submitEvent() {
      if (
        this.statisticsflag == 1 ||
        this.statisticsflag == 6 ||
        this.statisticsflag == 7
      ) {
        if (this.city.length == 0) {
          this.$toast("请选择地州");
          return;
        } else if (this.examYear == "") {
          this.$toast("请选择起始时间");
          return;
        } else if (this.examYear2 == "") {
          this.$toast("请选择截至时间");
          return;
        }
      } else if (this.examYear == 0) {
        this.$toast("请选择起始时间");
        return;
      } else if (this.examYear2 == 0) {
        this.$toast("请选择截至时间");
        return;
      }
      this.$router.push(
        "/statisticalTwo?startDate=" +
          this.examYear +
          "&endDate=" +
          this.examYear2 +
          "&citycode=" +
          this.city +
          "&statisticsflag=" +
          this.statisticsflag
      );
    },
    queryYear() {
      const _self = this;
      let setdata = {
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          type: _self.type
        }
      };
      _self.datatext = [];
      if (_self.type === "4" && this.city)
        setdata.txnBodyCom.area_name = this.city;
      _self
        .$ajaxRequest("post", "/gsp/mng80021", setdata)
        .then(res => {
          console.log(res);
          for (var i = 0, len = res.list.length; i < len; i++) {
            _self.datatext.push(res.list[i].year);
          }
        })
        .catch(response => {});
    }
  }
};
</script>

<style scoped>
.example-select_btn-wrapper {
  margin-top: 20px;
}
.example-datetime_arrowRight {
  display: block;
  width: 30px;
  height: 30px;
  /* background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAgVBMVEVMaXG/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v79dOzKSAAAAKnRSTlMAPGZVMy2ZzA9LEUQiDGnhw1TPn4EGy1cDerf+k/vbKzgeRa1jrlY/IxdruPDxAAAAxElEQVQ4y7WT2RZDMBRFU42gZlotSufp/v8H9tDI6kOJTvtBHPZyI7lhbCQ2EQVdCBBs9SrPLJDgWWhJQoSkuclyCBUNUEEgKoQQKVIkJBFCirEgagUHVx8fjLuqMYKP0XkSXjJaqK0eaikwNgM7z/M2nPOt67r7KTgaayVoSvxGsNXimUiTx168JSyMlnmvIDF7hRVvWX4+B62gLaGdpPY3v5/k37fbR8vd0HLXZi0u6DkHLXeWLVcOnawSwmlIOOiP/R2nSjk+EmQuQwAAAABJRU5ErkJggg==) 50% no-repeat; */
  background-size: 16px 16px;
}
.example-select_arrowRight {
  display: block;
  width: 16px;
  height: 16px;
  background-size: contain;
  margin-left: 10px;
}
.hui-btn.is-block {
  width: 5.9rem;
  margin: 0 auto;
}

.example-formgroup_btn-wrapper {
  margin-top: 20px;
}

.field-append_text,
.field-prepend_text {
  background: #f0f0f0;
  padding: 8px;
  color: #ccc;
}

.field-append_text .hui-icon {
  line-height: normal;
  vertical-align: middle;
}

.example-formgroup .hui-form_title-top .example-formgroup_btn-wrapper {
  padding: 0 15px;
}
.scl_btn {
  box-shadow: 0 0.05rem 0.15rem rgba(45, 127, 252, 0.5);
}
.hui-field_value {
  border: none !important;
}
.hui-field_borderLeft {
  border: none !important;
}
.hui-field_core {
  border: none !important;
}
.hui-field {
  height: 1rem !important;
  padding: 0 0.15rem;
  line-height: 1rem;
}
.rstsosuotow {
  display: flex;
  height: 0.93rem;
  line-height: 0.93rem;
  padding: 0 0.15rem;
  background: #fff;
  border-bottom: solid 0.01rem rgb(202, 202, 202);
}
.rstsosuotow label {
  display: block;
  width: 20%;
  font-size: 0.28rem;
  color: #333;
  text-align: left;
}
.rstsosuotow input {
  display: block;
  flex: 1;
  border: none;
  text-align: right;
  font-size: 0.28rem;
}
</style>
