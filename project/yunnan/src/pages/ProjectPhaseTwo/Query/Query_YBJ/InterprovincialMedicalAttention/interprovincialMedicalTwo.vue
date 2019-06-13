<template>
  <div class="basic-info-page">
    <towtop :name="titleName"/>
    <div class="container">
      <Field
        readonly
        label="备案类型:"
        disableclear
        type="text"
        :value="type == 0 ? '长期外地居住备案' : '异地突发急诊备案'"
      ></Field>
      <Field
        readonly
        label="备案地区化:"
        disableclear
        type="text"
        placeholder="--请选择--"
        :required="false"
        :value="confirmValSelect02"
        @click.native="locationOpen('pickerselect02')"
      ></Field>
      <HuiselectNew
        ref="pickerselect02"
        position="bottom"

        :dataslots="selectData02"
        :visible-item-count="5"
        class="example-select_item"
        @selectval="selectChangeFun2"
        @confirms="selectConfirmFun02"
        @reset="resetconfirmValSelect02"
      ></HuiselectNew>
      <Field
        v-if="type != 0"
        readonly
        label="备案医院:"
        disableclear
        type="text"
        placeholder="--请选择--"
        :value="hospName"
        :required="false"
        @click.native="toHospSelector"
      ></Field>
      <Huiselect
        ref="pickerselect01"
        position="bottom"
        :dataslots="hospSelectData"
        class="example-select_item"
        @confirms="selectConfirmFun01"
      ></Huiselect>
      <Field
        readonly
        label="开始时间:"
        disableclear
        type="text"
        :value="startDate"
        placeholder="--请选择--"
        :required="false"
        @click.native="open('pickerselect07')"
      ></Field>
      <Datetime
        ref="pickerselect07"
        type="date"
        v-model="startDateValue"
        :start-date="startStart"
        :end-date="startEnd"
        position="bottom"
        @confirm="handleChangeConfirmStartDate"
      ></Datetime>
      <Field
        readonly
        label="结束时间:"
        v-show="type==0 || UpdateOrSave=='update'"
        placeholder="--请选择--"
        disableclear
        type="text"
        :value="endValue"
        @click.native="open('pickerselect08')"
      ></Field>
      <Datetime
        ref="pickerselect08"
        type="date"
        :start-date="endStart"
        :end-date="new Date('2999-12-31')"
        position="bottom"
        @confirm="handleChangeConfirmStartDateEnd"
      ></Datetime>
    </div>
    <div style="margin-top: .8rem">
      <mybutton :btnData="btnData" @click="pushAjax"/>
      <Popupprompt
        v-model="popupVisible6"
        :text="content2.text"
        :confirm-btn = {}
        :btn-list= "content2.btnList"
        @click="clickbtn2"
      >

      </Popupprompt>
    </div>
  </div>
</template>

<script>
  import {
    Popup,
    Picker,
    MessageBox
  } from 'mint-ui';
  import towtop from "@/components/HederTwo";
  import mybutton from "@/components/MyButton";
  import { Code } from "@/components/areaCode.js";
  import area from "./area.json"
  export default {
    name:"interprovincicalMedicalOne",
    data() {
      return {
        startStart: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
        startEnd: new Date("2999-12-31"),
        hospName:"12312312321",
        endValue:"2020-12-31",
        endStart: new Date(new Date().getTime() + 24 * 1000 * 60 * 60 * 3),
        endDateValue: "2999-12-31",
        content2: {

          text:
            "异地突发急诊备案成功后请必须在48小时内办理急诊入院手续，若已在医院办理入院手续，则此备案记录不可再修改。",
          btnList: [
            {
              id: "btn1",
              text: "确定",
              primary: true
            }
          ]
        },
        popupVisible6:false,
        qg_area:{},
        hospSelectData: [{
          flex: 1,
          values: [{"text":"昆明市","value":"530100"},{"text":"曲靖市","value":"530300"},{"text":"玉溪市","value":"530400"},{"text":"云南省", value:"530000"}, {"text":"保山市","value":"530500"},{"text":"昭通市","value":"530600"},{"text":"丽江市","value":"530700"},{"text":"普洱市","value":"530800"},{"text":"临沧市","value":"530900"},{"text":"楚雄州","value":"532300"},{"text":"红河州","value":"532500"},{"text":"文山州","value":"532600"},{"text":"大理州","value":"532900"},{"text":"迪庆州","value":"533400"}
          ],
          className: 'slot1',
          showText:'text',
          defaultIndex:3
        }],
        titleName:"跨省异地就医备案",
        confirmValSelect02: "",
        zoneCode:"",
        btnData: [
          {
            text: "提交",
            disabled: false,
            isSure: true
          }
        ],
        params: this.$route.params,
        type: 0,
        startDate: "",
        startDateValue: new Date(),
        endDate: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
        selectData02: [
          {
            flex: 1,
            values: [],
            className: "slot1",
            textAlign: "center"
          },
          {
            divider: true,
            content: "-",
            className: "slot2"
          },
          {
            flex: 1,
            values: ["全部"],
            showText: "text",
            className: "slot3",
            textAlign: "center"
          }
        ],
        UpdateOrSave: "",
        dqbm: "",   // 地区编码
        grbm: "",    // 个人编码
        hospCode:"", // 医院编码
        Aply_FileNo: "", // 申请备案号
      }
    },
    components: {
      towtop,
      mybutton
    },
    mounted() {
      // MessageBox.alert('请正确输入身份证号码', '提示');
      // 预埋数据
      // window.sessionStorage.setItem("usertoken", "55f86d4e42214bc4af8ed930b40904ba");
      // window.sessionStorage.setItem("cardid", "532429197002050012")
      // window.sessionStorage.setItem("username", "李光红")
      // window.sessionStorage.setItem("userphone", "13908710001")
      // window.sessionStorage.setItem("areaYBJ", "5304");
      // window.sessionStorage.setItem("numYBJ", "402008886");
      // window.sessionStorage.setItem("matter_id", "123abc123");
      //
      // ///
      // window.sessionStorage.setItem("cardid", "530402201711283238",)
      // window.sessionStorage.setItem("username", "易家成")
      // window.sessionStorage.setItem("userphone", "13908710001")
      // window.sessionStorage.setItem("areaYBJ", "5304");
      // window.sessionStorage.setItem("numYBJ", "5045233704");
      // window.sessionStorage.setItem("matter_id", "123abc123");

      this.Aply_FileNo = window.sessionStorage.getItem("Aply_FileNo");
      this.dqbm = window.sessionStorage.getItem("areaYBJ")       // 地区编码
      this.grbm = window.sessionStorage.getItem("numYBJ");        // 个人编码

      // 设置缓存数据
      this.startDate = window.sessionStorage.getItem("startDate");
      this.endValue = window.sessionStorage.getItem("endValue");
      if(!this.endValue) {
        this.endValue = "2999-12-31"
      }
      this.confirmValSelect02 = window.sessionStorage.getItem("confirmValSelect02");
      this.zoneCode = window.sessionStorage.getItem("zoneCode");
      this.hospName = window.sessionStorage.getItem("hospName");
      this.hospCode = window.sessionStorage.getItem("hospCode");
      this.UpdateOrSave = window.sessionStorage.getItem("UpdateOrSave");

      // 清除缓存
      window.sessionStorage.setItem("zoneCode1", "");
      window.sessionStorage.setItem("zoneCode2", "");
      window.sessionStorage.setItem("startDate", "");
      window.sessionStorage.setItem("endValue", "");
      window.sessionStorage.setItem("confirmValSelect02", "");
      window.sessionStorage.setItem("zoneCode", "");
      // window.sessionStorage.setItem("UpdateOrSave", "");
      window.sessionStorage.setItem("hospName", "");
      window.sessionStorage.setItem("hospCode", "");

      if(this.UpdateOrSave == "update") {
        this.btnData[0].text = "修改"
      }

      // console.log(this.$route.params);
      this.type = window.sessionStorage.getItem("type");
      console.log(this.type);
      this.qg_area = area;
      if(this.zoneCode) {
        if(this.zoneCode.substring(2, 6) == "0000") {      // 选择省级
          for(var key in this.qg_area["全国"] ) {
            if(this.qg_area["全国"][key] == this.zoneCode) {
              this.confirmValSelect02 = key +",全部"
              break;
            }
          }
        } else {      // 选择市级
          let pcode = this.zoneCode.substring(0, 2) + "0000";
          for(var key in this.qg_area["全国"] ) {
            if(this.qg_area["全国"][key] == pcode) {
              this.confirmValSelect02 = key
              break;
            }
          }
          for(var i = 0; i < this.qg_area[this.confirmValSelect02].length; i ++) {
            if(this.qg_area[this.confirmValSelect02][i].value == this.zoneCode) {
              this.confirmValSelect02 += "," + this.qg_area[this.confirmValSelect02][i].text;
              break;
            }
          }
        }
      }
      var all = area['全国'];
      console.log(all);
      this.selectData02[0].values = []
      for(var name in all) {
        this.selectData02[0].values.push(name)
      }

      // this.fetchUserInsuranceArea().then(
      //   (res) => {
      //     this.dqbm = res.aaf017;
      //     this.fetchUserInsuranceNum(res.aaf017).then(
      //       (res) => {
      //         this.grbm = res.rowdatas[0].aac001;
      //       }
      //     )
      //   }
      // )
    },
    computed: {
    },
    methods: {
      toHospSelector() {      // 转到医院选择页面
        if(!this.confirmValSelect02) {
          this.$toast("请选择地区")
          return;
        }
        console.log(this.zoneCode)
        let zoneCode1 = "";
        let zoneCode2 = "";
        zoneCode1 = this.zoneCode.substring(0, 2) + "0000";
        if(this.zoneCode.substring(2, 6) != "0000") {
          zoneCode2 = this.zoneCode;
        }
        window.sessionStorage.setItem("zoneCode1", zoneCode1);
        window.sessionStorage.setItem("zoneCode2", zoneCode2);
        window.sessionStorage.setItem("startDate", this.startDate);
        window.sessionStorage.setItem("endValue", this.endValue);
        window.sessionStorage.setItem("confirmValSelect02", this.confirmValSelect02);
        window.sessionStorage.setItem("zoneCode", this.zoneCode);
        this.$router.push({name:"interprovincialMedicalAttentionThree"})
      },
      // 获取参保地区
      fetchUserInsuranceArea () {
        let params = {
          "txnCommCom": {
            "txnIttChnlId": "1",
            "txnIttChnlCgyCode": "1",
            "tRecInPage": "1",
            "tPageJump": "10"
          },
          "txnBodyCom": {
            "matter_id": window.sessionStorage.getItem("matterid"),
            "aac058": "1010",
            "aac002": window.sessionStorage.getItem("cardid"),
            "aac003": window.sessionStorage.getItem("username"),
            // "aac002": "530402201711283238",
            // "aac002": "532429197002050012",
            // "aac003": '李光红',

            // "aac002": "530402201711283238",
            // "aac003": '易家成',
          }
        }

        return this.$ajaxRequest("post", "/gsp/mng90056", params)
      },

      // 获取个人编号
      fetchUserInsuranceNum (area) {
        let params = {
          "txnCommCom":{
            "txnIttChnlId":"1",
            "txnIttChnlCgyCode":"1"
          },
          "txnBodyCom":{
            "matter_id":window.sessionStorage.getItem("matterid"),
            "aac058":"1010",
            "aaf017": area,
            "aac002": window.sessionStorage.getItem("cardid"),
            "aac005": window.sessionStorage.getItem("userphone"),
            "aac003": window.sessionStorage.getItem("username"),

            // "aac002": "532429197002050012",
            // "aac005": '13908710001',
            // "aac003": '李光红',

            // "aac002": "530402201711283238",
            // "aac005": '13908710001',
            // "aac003": '易家成',
          }
        }
        return this.$ajaxRequest("post", "/gsp/mng80110", params)
      },
      clickbtn2(p) {
        console.log(p);

      },
      validateChangeqiwaidijuzhu() {
        if(!this.zoneCode) {
          this.$toast("备案地区化不能为空!");
          return false;
        }
        if(!this.startDate) {
          this.$toast("开始时间不能为空!")
          return false;
        }
        if(!this.endValue) {
          this.$toast("结束时间不能为空!");
          return false;
        }
        return true;
      },
      postChangqiwaidijuzhu() {   // 长期外地居住
        if(!this.validateChangeqiwaidijuzhu()) {
          return;
        }
        let request = {
          "txnCommCom":{
            "txnIttChnlId":"1",
            "txnIttChnlCgyCode":"1"
          },
          "txnBodyCom":{
            "matter_id": window.sessionStorage.getItem("metterid"),
            "chann_id":"1",
            "Crdt_Tp": "1010",
            "crdt_no": window.sessionStorage.getItem("cardid"),
            "Idv_ID": this.grbm,     // 参保以后返回参保编号
            "mblph_no": window.sessionStorage.getItem("userphone"),
            "Insrd_City": this.dqbm,
            "Flg_Psn_Stff_Cgy": "3",
            "Flg_Sma_Tp": "04",
            "Aply_Rsn": "外地急诊",
            "Rstl_Lnd_ADiv": this.zoneCode,
            "StDt": this.startDate,
            "EdDt": this.endValue
          }
        };
        console.log(request);
        this.$ajaxRequest("post", "/gsp/mng80114", request).then(
          (res) => {
            this.$router.push({name:"interprovincialMedicalAttentionOne", params:{}})
          }
        )
      },
      validateYidijizhen() {
        if(!this.zoneCode) {
          this.$toast("备案地区化不能为空!");
          return false;
        }
        if(!this.this.hospCode) {
          this.$toast("请选择备案医院")
          return false;
        }
        if(!this.startDate) {
          this.$toast("开始时间不能为空!")
          return false;
        }
        if(!this.endValue) {
          this.$toast("结束时间不能为空!");
          return false;
        }
        return true;
      },
      postYidijizhen() {          // 异地急诊
        let request = {
          "txnCommCom": {
            "txnIttChnlId": "1",
            "txnIttChnlCgyCode": "1"
          },
          "txnBodyCom": {
            "matter_id": window.sessionStorage.getItem("metterid"),
            "chann_id": "1",
            "Crdt_Tp": "1010",
            "crdt_no": window.sessionStorage.getItem("cardid"),
            "Idv_ID": this.grbm,     // 参保以后返回参保编号
            "mblph_no": window.sessionStorage.getItem("userphone"),
            "Insrd_City": this.dqbm,
            "Flg_Psn_Stff_Cgy": "3",
            "Flg_Sma_Tp": "04",
            "Aply_Rsn": "外地突发急症",
            "Sma_Lnd_ADiv": this.zoneCode,
            "Mdcl_Svc_Inst_ECD": this.hospCode,
            "Flg_Mdcl_Cgy": "21",
            "StDt": this.startDate,
            "EdDt": "",
            "ctc_tel": "",
            "adr_inf": ""
          }
        }

        console.log(request);

        this.$ajaxRequest("post", "/gsp/mng80115", request).then(
          (res) => {
            this.$router.push({name:"interprovincialMedicalAttentionOne", params:{}})
          }
        )
      },
      updateChangqiwaidijuzhu() {
        if(!this.validateChangeqiwaidijuzhu()) {
          return;
        }
        let request = {
          "txnCommCom":{
            "txnIttChnlId":"1",
            "txnIttChnlCgyCode":"1"
          },
          "txnBodyCom":{
            "matter_id":window.sessionStorage.getItem("metterid"),
            "chann_id":"1",
            "Crdt_Tp": "1010",
            "crdt_no": window.sessionStorage.getItem("cardid"),
            "Idv_ID": this.grbm,
            "mblph_no": window.sessionStorage.getItem("userphone"),
            "Insrd_City": this.dqbm,
            "Aply_FileNo": this.Aply_FileNo,
            "Rstl_Lnd_ADiv_Cd": this.zoneCode,
            "Mdcl_Svc_Inst_ECD": this.hospCode,
            "Mdcl_Svc_Inst_Nm": this.hospName,
            "StDt": this.startDate,
            "EdDt": this.endValue
          }
        }
        this.$ajaxRequest("post", "/gsp/mng80116", request).then(
          (res) => {
            this.$router.push({name:"interprovincialMedicalAttentionOne", params:{}})
          }
        )
      },
      updateYidijizhen() {
        let request = {
          "txnCommCom":{
            "txnIttChnlId":"1",
            "txnIttChnlCgyCode":"1"
          },
          "txnBodyCom":{
            "matter_id":window.sessionStorage.getItem("metterid"),
            "chann_id":"1",
            "Crdt_Tp": "1010",
            "crdt_no": window.sessionStorage.getItem("cardid"),
            "Idv_ID": this.grbm,
            "mblph_no": window.sessionStorage.getItem("userphone"),
            "Insrd_City": this.dqbm,
            "Aply_FileNo": this.Aply_FileNo,
            "Sma_Lnd_ADiv_Cd": this.zoneCode,
            "Mdcl_Svc_Inst_ECD": this.hospCode,
            "Mdcl_Svc_Inst_Nm": this.hospName,
            "Flg_Mdcl_Cgy": "21",
            "StDt": this.startDate,
            "EdDt": this.endValue
          }
        };
        console.log(request);
        this.$ajaxRequest("post", "/gsp/mng80117", request).then(
          (res) => {
            this.$router.push({name: "interprovincialMedicalAttentionOne", params: {}})
          }
        )
      },
      pushAjax() {
        if(this.UpdateOrSave == "update") {      // 更新
          if(this.type == 0) {
            this.updateChangqiwaidijuzhu();
          } else {
            this.updateYidijizhen();
          }
        } else {                            // 保存
          if(this.type == 0) {
            this.postChangqiwaidijuzhu();
          } else {
            this.postYidijizhen();
          }
        }


      },
      selectConfirmFun01(val) {
        console.log(val);
      },
      selectConfirmFun02(selectedVal){
        console.log(selectedVal)
      },
      open(picker) {
        console.log(this.confirmValSelect02);
        if(picker == "pickerselect01") {
          if(this.confirmValSelect02) {
            let zone_code = this.confirmValSelect02[0];
            if(this.confirmValSelect02[1]) {
              zone_code = this.confirmValSelect02[1];
            }
            zone_code = this.qg_area["全国"][zone_code];
            let query = {
              "txnCommCom":{
                "txnIttChnlId":"1",
                "txnIttChnlCgyCode":"1"
              },
              "txnBodyCom":{
                "matter_id":"1",
                "chann_id":"1",
                "provcode":"530000",
                "citycode":"",
                "hospgrade":"",
                "keyword":""
              }
            };
            this.$ajaxRequest("post", "gsp/mng19033", query).then(
              (res) => {
                console.log(res);
              }
            )
            console.log(this.qg_area["全国"][zone_code]);
          } else {
            this.$toast("请选择地区");
            return;
          }
        }

        this.$refs[picker].open();
        document.activeElement.blur();
        $('.hui-popup').on('touchmove',function(event){
          event.preventDefault()
          event.stopPropagation()
        })
      },
      handleChangeConfirmStartDateEnd(value) {
        this.endValue = this.dateFormat(value, "yyyy-MM-dd");
      },
      handleChangeConfirmStartDate(value) {
        //日期确定值
        this.startDate = this.dateFormat(value, "yyyy-MM-dd");
      },
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
      selectChangeFun2(picker, val) {
        picker.setSlotValues(1, this.qg_area[val[0]]);
        console.log(this.qg_area[val[0]])
        console.log(this.confirmValSelect02);
        console.log(this.confirmValSelect02[0])
        console.log(this.confirmValSelect02[1])
        //只有是二级的时候才有这个方法
        // if (val[0] == "云南省") {
        //   picker.setSlotValues(1, ["全省", "省本级"]);
        //   return;
        // }
        // Code.findGGJNameByName(val[0]).then(res => {
        //   picker.setSlotValues(1, Code.parseGGJResource(res));
        //   console.log(res);
        // });
        // console.log(val);
      },
      selectConfirmFun02(selectedVal) {
        console.log(selectedVal);
        if (typeof selectedVal[1] === "object") {
          selectedVal[1] = selectedVal[1].text;
        }
        if(selectedVal[1] == "本级") {
          this.zoneCode = this.qg_area["全国"][selectedVal[0]]
        } else {
          let c = this.qg_area[selectedVal[0]];
          for(var i = 0; i < c.length; i ++) {
            if(c[i].text == selectedVal[1]) {
              this.zoneCode = c[i].value
              break;
            }
          }
        }
        console.log(this.zoneCode);
        this.confirmValSelect02 = selectedVal;
        this.hospName = "";
        this.hospCode = "";
        console.log(this.confirmValSelect02);
      },
      resetconfirmValSelect02(val) {
        console.log(val);
        this.confirmValSelect02 = "";
      },
      locationOpen(picker) {
        this.$refs[picker].open();
        document.activeElement.blur();
      }
    }
  }
</script>

<style lang="less" scoped>
  .basic-info-page {
    display: flex;
    flex-direction: column;

    .container {
      flex: 1;
      /*overflow: auto;*/
      background-color: #fff;
      width: 100%;
    }
  }

</style>

