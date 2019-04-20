<template>
  <div class="swsbg_four">
    <towtop style="margin: 0" :name="titlename"/>
    <div class="header2">申请人基本情况</div>
    <div class="content">
      <ul>
        <li>
          <h2>姓名</h2>
          <p>{{ this.c_fzrxm }}</p>
        </li>
        <li>
          <h2>执业证号</h2>
          <p>{{ this.textValue_zyzh }}</p>
        </li>
        <li>
          <h2>联系电话</h2>
          <p>{{ this.textValue_lxdh }}</p>
        </li>
        <li>
          <h2>是否负责人</h2>
          <p>是</p>
        </li>
      </ul>
    </div>
    <div class="header2">变更预申请联系人</div>
    <Field
      type="text"
      label="姓名"
      :value="textValue_name"
      placeholder="请输入姓名"
      required
      v-on:currentval="handleTextVal1"
    ></Field>
    <Field
      type="text"
      label="邮编"
      :value="textValue_yb"
      placeholder="请输入邮编"
      required
      v-on:currentval="handleTextVal2"
    ></Field>
    <Field
      type="text"
      label="电话"
      :value="textValue_dh"
      placeholder="请输入电话"
      required
      v-on:currentval="handleTextVal3"
    ></Field>
    <Field
      type="text"
      label="手机号"
      :value="textValue_sjh"
      placeholder="请输入手机号"
      required
      v-on:currentval="handleTextVal4"
    ></Field>
    <Field
      type="text"
      label="传真"
      :value="textValue_cz"
      placeholder="请输入传真"
      v-on:currentval="handleTextVal5"
    ></Field>
   
    <!-- 三级联动 -->
    <div @click="onshow(1)">
      <Field
        type="text"
        readonly required
        label="地区"
        :value="selectRegister"
        placeholder="请选择地区"
        v-model="selectRegister"
      ></Field>
    </div>
    <div class="popupWrap" v-if="popupVisible">
      <div class="popupContent">
        <div class="pop_btn_wrap">
          <div class="pop_btn" @click="popupVisible = false">取消</div>
          <div class="pop_btn" @click="getRegister">确定</div>
        </div>
        <div class="popContent">
          <Field
            readonly required
            label="省级"
            type="text"
            placeholder="请选择省级"
            :value="selectProvice"
            @click.native="open('provicePicker')"
          >
            <span slot="append" class="example-select_arrowRight"></span>
          </Field>
          <Selectpopup
            ref="provicePicker"
            position="bottom"
            @touchmove.prevent
            :dataslots="provicePicker"
            class="example-select_item"
            @confirms="selectedProvice"
          ></Selectpopup>

          <Field
            readonly required
            :label="textlabel"
            type="text"
            placeholder="请选择州/市"
            :value="selectCity"
            @click.native="open('cityPicker')"
            v-if="isDomestic"
          >
            <span slot="append" class="example-select_arrowRight"></span>
          </Field>
          <Selectpopup
            ref="cityPicker"
            position="bottom"
            @touchmove.prevent
            :dataslots="cityPicker"
            class="example-select_item"
            @confirms="selectedCity"
          ></Selectpopup>

          <Field
            readonly required
            label="区/县"
            type="text"
            placeholder="请选择区/县"
            :value="selectCounty"
            @click.native="open('countyPicker')"
            v-if="isDomestic"
          >
            <span slot="append" class="example-select_arrowRight"></span>
          </Field>
          <Selectpopup
            ref="countyPicker"
            position="bottom"
            @touchmove.prevent
            :dataslots="countyPicker"
            class="example-select_item"
            @confirms="selectedCounty"
          ></Selectpopup>
        </div>
      </div>
    </div>
     <Field
      type="text"
      label="详细地址"
      :value="textValue_xxdz"
      placeholder="请输入详细地址"
      required
      v-on:currentval="handleTextVal6"
    ></Field>
    <!-- 三级联动结束 -->
    <div class="header2">变更预申请拟立地</div>
    <Field
      type="text"
      label="律所所在地区"
      :value="textValue_lsszdq"
      placeholder="律所所在地区"
      required
      v-on:currentval="handleTextVal8"
    ></Field>
    <Field
      type="text"
      label="律所详细地址"
      :value="textValue_lsxxdz"
      placeholder="律所详细地址"
      v-on:currentval="handleTextVal9"
    ></Field>
    <Field
      type="text"
      label="备注"
      :value="textValue_bz"
      placeholder="备注"
      v-on:currentval="handleTextVal10"
    ></Field>
    <!-- <Btn plain block @click="next_btn">提交</Btn> -->
    <div class="padTopAdd5 padBotAdd5">
      <mybutton :btnData="btnData" @click="next_btn"/>
    </div>
  </div>
</template>
<script>
import towtop from "../../../../components/HederTwo";
import mybutton from "@/components/MyButton";
export default {


  data() {
    return {
      btnData: [
        {
          text: "提交",
          disabled: false,
          isSure: true
        }
      ],
      titlename: "律所名称变更申请-变更信息",
      //获取数据
      textValue_xm: "",
      textValue_zyzh: "",
      textValue_lxdh: "",
      textValue_fzr: "",
      //表单提交数据
      textValue_name: "",
      textValue_yb: "",
      textValue_dh: "",
      textValue_sjh: "",
      textValue_cz: "",
      textValue_xxdz: "",
      //地区下拉
      textValue_dq: "",
      //获取数据
      textValue_lsszdq: "",
      textValue_lsxxdz: "",
      //表单提交数据
      textValue_bz: "",
      personid: "",
      // 地区三级联动下拉
      confirmNation: [],
      provinceList: [],
      birthPicker: [
        {
          flex: 1,
          values: [],
          className: "slot1",
          showText: "text",
          defaultIndex: 0
        }
      ],
      selectBirth: "",
      confirmBirth: [],
      registerPicker: [
        {
          flex: 1,
          values: [],
          className: "slot1",
          showText: "text",
          defaultIndex: 0
        },
        {
          flex: 1,
          values: [],
          className: "slot1",
          showText: "text",
          defaultIndex: 0
        },
        {
          flex: 1,
          values: [],
          className: "slot1",
          showText: "text",
          defaultIndex: 0
        }
      ],
      selectRegister: "",
      confirmRegister: [],
      selfTele: "",
      emergencyContact: "",
      emergencyTele: "",
      recipients: "",
      postalcode: "",
      recipientsTele: "",
      deliveryLocation: "",
      detailLocation: "",
      popupVisible: false,
      provicePicker: [
        {
          flex: 1,
          values: [],
          className: "slot1",
          showText: "text",
          defaultIndex: 0
        }
      ],
      selectProvice: "云南省",
      confirmProvice: [],
      cityPicker: [
        {
          flex: 1,
          values: [],
          className: "slot1",
          showText: "text",
          defaultIndex: 0
        }
      ],
      selectCity: "",
      confirmCity: [],
      countyPicker: [
        {
          flex: 1,
          values: [],
          className: "slot1",
          showText: "text",
          defaultIndex: 0
        }
      ],
      selectCounty: "",
      confirmCounty: [],
      threeLocationVal: "",
      isDomestic: true, //判国内外,初始值为国外，选择国内为true
      saveBol: true,
      countryList: [],
      firstLevelList: [],
      textlabel: "州/市",
      // 提交表单部分
      arrs: [],
      c_bh: "",
      c_fzr: "",
      c_fzrxm: "",
      workid: "",
      lsb_c_bh:'',
    };
  },
  components: {
    mybutton,
    towtop
  },
  created() {
    this.get_lawerinfo();
    // this.get_zgsfjg()
    this.arrs = JSON.parse(sessionStorage.getItem("SFT_bgmcxk"));

    // console.log('这是ses中的arrs',arr)
    console.log("这是ses中的arrs", this.arrs);
    // console.log(this.arrs.qc)
    this.workid = sessionStorage.getItem("WorkId");
    // alert(workid)
    console.log(this.workid);
    let data = {
      txnCommCom: {
        tRecInPage: "10",
        tPageJump: "2",
        tStsTraceId: "110567890"
      },
      txnBodyCom: {
        matter_id: window.sessionStorage.getItem("matterid"),
        //律师事务所查询参数,
        c_zwmc: "",
        //登陆的时候返回   现在使用1234567890,
        c_tyshxydm: window.sessionStorage.getItem("socialNumber")!='null'?window.sessionStorage.getItem("socialNumber"):'-----------'
        // "c_tyshxydm":'1234567890',
      }
    };
    this.$ajaxRequest("post", "/gsp/mng80090", data)
      .then(res => {
        console.log('这是律所信息',res);
        // 此表单数据
        this.textValue_lsszdq = res.list[0].c_mc;
        this.textValue_lsxxdz = res.list[0].c_xxdz;

        // 请求回来的数据 需要传给appform00001接口的数据
        this.c_fzr = res.list[0].c_fzr;
        this.c_fzrxm = res.list[0].c_fzrxm;
        this.c_bh = res.list[0].c_bh;
      })
      .catch(response => {});
  },
  activated() {
    let _self = this;
    let locationProp = {
      txnBodyCom: {
        matter_id: window.sessionStorage.getItem("matterid"),
        oType: "GAT",
        areaCode: "",
        parentCode: "156",
        regnName: "",
        regnLevel: "1"
      }
    };
    this.$ajaxRequest("post", "/gsp/mng19021", locationProp)
      .then(res => {
        if (res.length <= 0) {
          _self.$toast("搜索地域数据列表为空！");
          return false;
        } else {
          let cent = res;
          for (var i = 0, len = cent.length; i < len; i++) {
            let temOb = { text: cent[i].regnNm, value: cent[i].regnCode };
            _self.firstLevelList.push(temOb);
          }
          _self.birthPicker[0].values = _self.birthPicker[0].values.concat(
            _self.firstLevelList
          );
          _self.provinceList = _self.provinceList.concat(_self.firstLevelList);
        }
      })
      .catch(error => {
        console.log(error);
        _self.$toast("获取地域列表失败！");
      });
  },
  methods: {
    next_btn() {
      let _self = this;
      if (!_self.textValue_name.match(/^[\u4e00-\u9fa5]+$/g)) {
        this.$toast("请输入符合格式的姓名！");
        return false;
      }
      if (!_self.textValue_yb.match(/^[0-9]{6}$/)) {
        this.$toast("请输入正确格式的邮编！");
        return false;
      }
      if (!_self.textValue_dh.match(/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/)) {
        this.$toast("请输入正确格式的电话号！");
        return false;
      }
      if (!_self.textValue_sjh.match(/^1[34578]\d{9}$/)) {
        this.$toast("请输入正确格式的手机号！");
        return false;
      }
      // if (!_self.textValue_cz.match(/[\u4E00-\u9FA5]/g)) {
      //   this.$toast("请输入正确格式的传真！");
      //   return false;
      // }

      this.arrs.splice(0, 1);
      let data = {
        txnBodyCom: {
          work_id: this.workid,
          matter_id: window.sessionStorage.getItem("matterid"),
          json_content: {
            work_id: this.workid,
            // 律所编号
            lwr_id: this.c_bh,
            // 理由/原因
            rsn: "",
            // 变更后负责人编号
            afmd_pnp_id: this.c_fzr,
            //变更后负责人姓名
            afmd_pnp_nm: this.c_fzrxm,
            // 仅需要一个
            lxr: {
              idv_nm: this.textValue_name,
              zip: this.textValue_yb,
              ctc_tel: this.textValue_dh,
              mblph_no: this.textValue_sjh,
              fax_no: this.textValue_cz,
              adr_inf: this.textValue_xxdz,
              rgon_cd: this.confirmCounty[0].value
            },
            ndmc: this.arrs,

            // 添加名字  一个数组

            // 备注
            rmrk: this.textValue_bz
            // 文件域
            // 'fileNum':'',
            // 'fileName':'',
            // 'filePath':'',
          }
        }
      };
      // alert(this.workid)
      this.$ajaxRequest("post", "/gsp/appForm00001", data)
        .then(res => {
          console.log(res);
          this.$router.push({ name: "sfResultPage" });
        })
        .catch(err => {
          console.log(err);
        });
      // this.$router.push('/swsbg_five')
      window.sessionStorage.removeItem("SFT_bgmcxk");
    },
    handleTextVal1(val) {
      this.textValue_name = val;
    },
    handleTextVal2(val) {
      this.textValue_yb = val;
    },
    handleTextVal3(val) {
      this.textValue_dh = val;
    },
    handleTextVal4(val) {
      this.textValue_sjh = val;
    },
    handleTextVal5(val) {
      this.textValue_cz = val;
    },
    handleTextVal6(val) {
      this.textValue_xxdz = val;
    },
    handleTextVal8(val) {
      this.textValue_lsszdq = val;
    },
    handleTextVal9(val) {
      this.textValue_lsxxdz = val;
    },
    handleTextVal10(val) {
      this.textValue_bz =
        this.textValue_bz.length > 500 ? val.slice(0, 500) : val;
    },

    open(picker) {
      this.$refs[picker].open();
      document.activeElement.blur();
    },
    selectChangeFun1(picker, val) {
      picker.setSlotValues(1, profession[val[0]]);
    },
    selectConfirmFun01(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect01 = selectedVal[0].text;
      } else {
        this.confirmValSelect01 = selectedVal;
      }
    },
    // 地区三级联动下拉
    onshow(val) {
      document.activeElement.blur();
      // console.log(11111111111)
      this.threeLocationVal = val;
      this.popupVisible = true;
      this.selectProvice = "";
      this.selectCity = "";
      this.selectCounty = "";
      // this.confirmProvice = '云南省'
      // 速递地址一级下拉没有国家列表
      if (val == 1) {
        this.provicePicker[0].values.splice(
          0,
          this.provicePicker[0].values.length
        );
        this.provicePicker[0].values = this.provicePicker[0].values
          .concat(this.firstLevelList)
          .concat(this.countryList);
      } else if (val == 2) {
        this.provicePicker[0].values.splice(
          0,
          this.provicePicker[0].values.length
        );
        this.provicePicker[0].values = this.provicePicker[0].values.concat(
          this.firstLevelList
        );
      }
    },
    selectedProvice(selectedVal) {
      let _self = this;
      // 选择省级后清空州/市数据列表
      _self.cityPicker[0].values.splice(0, _self.cityPicker[0].values.length);
      this.confirmProvice = selectedVal[0];
      if (typeof selectedVal[0] === "object") {
        this.selectProvice = selectedVal[0].text;
      } else {
        this.selectProvice = selectedVal;
      }
      // 清空可能已填市区县的数据
      this.selectCity = "";
      this.selectCounty = "";
      // 判断国内外
      let tempBol = false;
      for (let index = 0; index < this.provinceList.length; index++) {
        if (this.confirmProvice.text == this.provinceList[index].text) {
          tempBol = true;
        }
      }
      if (!tempBol) {
        this.isDomestic = false;
        this.textlabel = "国籍";
        return;
      } else {
        this.isDomestic = true;
        this.textlabel = "州/市";
      }
      //   获取州/市
      console.log(this.confirmProvice.value);

      let cityProp = {
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          parentCode: this.confirmProvice.value,
          oType: "GAT"
        }
      };
      this.$ajaxRequest("post", "/gsp/mng19021", cityProp)
        .then(res => {
          if (res.length <= 0) {
            _self.$toast("搜索州/市数据列表为空！");
            return false;
          } else {
            let cent = res;
            for (var i = 0, len = cent.length; i < len; i++) {
              let temOb = { text: cent[i].regnNm, value: cent[i].regnCode };
              _self.cityPicker[0].values.push(temOb);
            }
          }
        })
        .catch(error => {
          console.log(error);
          _self.$toast("获取州/市列表失败！");
        });
    },
    selectedCity(selectedVal) {
      let _self = this;
      _self.countyPicker[0].values.splice(
        0,
        _self.countyPicker[0].values.length
      );
      this.confirmCity = selectedVal[0];
      if (typeof selectedVal[0] === "object") {
        this.selectCity = selectedVal[0].text;
      } else {
        this.selectCity = selectedVal;
      }
      this.selectCounty = "";
      //   获取区县
      let countyProp = {
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          parentCode: this.confirmCity.value,
          oType: "GAT"
        }
      };
      this.$ajaxRequest("post", "/gsp/mng19021", countyProp)
        .then(res => {
          if (res.length <= 0) {
            _self.$toast("搜索区县数据列表为空！");
            return false;
          } else {
            let cent = res;
            for (var i = 0, len = cent.length; i < len; i++) {
              let temOb = { text: cent[i].regnNm, value: cent[i].regnCode };
              _self.countyPicker[0].values.push(temOb);
            }
          }
        })
        .catch(error => {
          console.log(error);
          _self.$toast("获取区县列表失败！");
        });
    },
    selectedCounty(selectedVal) {
      this.confirmCounty = selectedVal;
      if (typeof selectedVal[0] === "object") {
        this.selectCounty = selectedVal[0].text;
      } else {
        this.selectCounty = selectedVal;
      }
    },
    getRegister() {
      let _self = this;
      console.log("isDomestic", this.isDomestic);
      if (this.threeLocationVal == 1) {
        //户口所在地
        if (this.isDomestic && !this.selectCounty) {
          this.$toast("请选择省、市、区/县三级地址");
          return;
        }
        if (this.isDomestic) {
          this.selectRegister = this.selectCounty;
          this.confirmRegister = this.confirmCounty[0];
        } else {
          this.selectRegister = this.selectProvice;
          this.confirmRegister = this.confirmProvice;
        }
        console.log(this.confirmRegister);
      } else {
        //速递地址
        if (this.isDomestic) {
          this.deliveryLocation = this.selectCounty;
        } else {
          this.deliveryLocation = this.selectProvice;
        }
        console.log(this.deliveryLocation);
      }
      this.popupVisible = false;
    },
    get_lawerinfo() {
      let personid = sessionStorage.getItem("cardid");
      console.log("这是perid", personid);
      let data = {
        txnCommCom: {
          tenant: "530000000000",
          txn_itt_chnl_id: "00",
          txn_itt_chnl_type: "11"
        },
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          c_sfzh: '',
          c_sfzh: "",
          c_xm: "",
          c_zyzh: "",
          c_bh:this.c_fzr,
        }
      };
      let pagejump = {
        tRecInPage: "10",
        tPageJump: "1"
      };
      this.$ajaxRequest("post", "/gsp/mng90039", data, pagejump)
        .then(res => {
          console.log("这是547", res);

          console.log(this.c_bh);
          this.textValue_xm = res.list[0].c_xm;
          this.textValue_zyzh = res.list[0].c_zyzh;
          this.lsb_c_bh = res.list[0].c_bh;

          if (res.list[0].c_sjhm == "null") {
            this.textValue_lxdh = '';
          } else {
            this.textValue_lxdh = res.list[0].c_sjhm;
          }

          // this.textValue_fzr = res.list[0].c_sffzr
          if (res.list[0].c_sffzr == "0") {
            this.textValue_fzr = "否";
          } else if (res.list[0].c_sffzr) {
            this.textValue_fzr = "是";
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style >
.swsbg_four .header2 {
  width: 90%;
  margin: 0 auto;
  height: 0.6rem;
  font-size: 0.24rem;
  line-height: 0.6rem;
  text-align: left;
  color: #999;
}
.swsbg_four .hui-field_title {
  width: 3rem;
}
.swsbg_four .hui-field_main {
  font-size: 0.28rem;
  line-height: 0.9rem;
  height: 0.9rem;
}
.swsbg_four .hui-field_star {
  display: block;
}
.swsbg_four .hui-btn.is-block {
  font-weight: 700;
  display: inline-block;
  width: 5.9rem;
  height: 0.9rem;
  margin: 0.6rem 0.35rem;
  background-color: #2d7ffc;
  font-size: 0.32rem;
  color: #fff;
  z-index: 0;
}
.swsbg_four .content ul {
  width: 100%;
  background-color: #fff;
}
.swsbg_four .content li {
  width: 90%;
  height: 1rem;
  line-height: 1rem;
  margin: 0 auto;
  border-bottom: 0.01rem solid #ccc;
  font-size: 0.28rem;
}
.swsbg_four .content li h2 {
  float: left;
}
.swsbg_four .content li p {
  text-align: right;
  float: right;
  color: #999;
}
.swsbg_four .hui-field_main {
  padding: 0 0.2rem 0 0.2rem;
}
</style>
<style>
.swsbg_four .hui-field {
  height: 1rem;
  line-height: 1rem;
  padding: 0 0.5rem 0 0.2rem;
  font-size: 0.28rem;
}
.swsbg_four .hui-field_star {
  display: block;
}
.swsbg_four .popupWrap {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  z-index: 10;
}
.swsbg_four .popupWrap .popupContent {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: white;
}
.swsbg_four .popupWrap .pop_btn_wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.swsbg_four .popupWrap .pop_btn_wrap .pop_btn {
  width: 50%;
  font-size: 0.33rem;
  line-height: 0.9rem;
  text-align: center;
  color: #2d7ffc;
  border-bottom: 1px solid #ececec;
}
.swsbg_four .popupWrap .pop_btn_wrap .pop_btn:first-child {
  border-right: 1px solid #ececec;
}
</style>
