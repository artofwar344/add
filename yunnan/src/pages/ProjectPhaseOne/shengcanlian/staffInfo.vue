<template>
  <div class="big">
    <div class="hei_se" v-show="hei_se"></div>
    <towtop style="margin: 0" :name="titlename"/>
    <div class="title3">
      <p>残疾职工信息</p>
    </div>
    <Field
      readonly
      label="残疾种类"
      desc
      disableclear
      type="text"
      placeholder="请选择残疾种类"
      :required="false"
      v-model="diszl"
      @click.native="open('pickerselect01')"
    ></Field>
    <Selectpopup
      ref="pickerselect01"
      position="bottom"
      :dataslots="selectData01"
      :visible-item-count="5"
      class="example-select_item"
      @confirms="select01"
    ></Selectpopup>
    <div class="middleone">
      <span class="middletwo">*</span>
    <Field type="text" label="身份证号" v-model="idcard" placeholder="请输入身份证号" ></Field>
    </div>
    <div class="cardnum cjzhclass" style="background-color: #fff;">
      <span class="starking">*</span>
      <p>残疾证号
      </p>
      <div class="icon" @click="icon_notes">
        <Icon type="advisory" color="#FF8C00"></Icon>
      </div>
       <Field type="text"  v-model="discode" placeholder="请输入残疾证号" ></Field>
      <!-- <input type="text" v-model="discode" placeholder="请输入残疾证号"> -->
    </div>
    <div class="notes" v-show="notes" :value="text">
      <div class="text_text">{{text}}</div>
      <div class="text_confim" @click="text_confim">确认</div>
    </div>
    <div class="middleone3">
      <span class="middletwo3">*</span>
    <Field type="text" label="姓名" v-model="name" placeholder="请输入姓名" ></Field>
    </div>
    <!-- <Field type="text" label="性别"  v-model="sex" placeholder="请输入性别" required></Field> -->
    <div class="middleone">
      <span class="middletwo">*</span>
    <Field
      readonly
      label="性别"
      desc
      disableclear
      type="text"
      placeholder="请选择性别"
      :value="sex"
      @click.native="open('pickerselect03')"
    ></Field>
    </div>
    <Selectpopup
      ref="pickerselect03"
      position="bottom"
      :dataslots="selectData03"
      :visible-item-count="5"
      class="example-select_item"

      @confirms="select03"
    ></Selectpopup>
    <div class="middleone">
      <span class="middletwo">*</span>
    <Field
      readonly
      label="出生日期"
      desc
      disableclear
      type="text"
      placeholder="请选择出生日期"
      :value="csrq"
      @click.native="open('picker2')"
    ></Field>
    </div>
    <Datetime
      ref="picker2"
      type="date"

      v-model="valueDate"
      position="middle"
      :start-date="startDate"
      :end-date="endDate"
      @confirm="handleChangeConfirmDate"
    ></Datetime>
    <div class="middleone">
      <span class="middletwo">*</span>
    <Field
      readonly
      label="残疾类别"
      desc
      disableclear
      type="text"
      placeholder="请选择残疾类别"
      :value="distype"
      @click.native="open('pickerselect02')"
    ></Field>
    </div>
    <Selectpopup
      ref="pickerselect02"
      position="bottom"
      :dataslots="selectData02"
      :visible-item-count="5"
      class="example-select_item"

      @confirms="select02"
    ></Selectpopup>
    <!-- <Field type="text" label="残疾等级" v-model="disgrade"  placeholder="请输入残疾等级" required></Field> -->
    <div class="middleone">
      <span class="middletwo">*</span>
    <Field
      readonly
      label="残疾等级"
      desc
      disableclear
      type="text"
      placeholder="请选择残疾等级"
      :value="disgrade"
      @click.native="open('pickerselect04')"
    ></Field>
    </div>
    <Selectpopup
      ref="pickerselect04"
      position="bottom"
      :dataslots="selectData04"
      :visible-item-count="5"
      class="example-select_item"

      @confirms="select04"
    ></Selectpopup>
    <!-- <Field type="text" label="权重系数" v-model="weightnumber"  placeholder="请输入权重系数" required></Field> -->
    <Field type="text" label="联系电话" v-model="phone" placeholder="请输入联系电话"></Field>
    <div class="middleone">
      <span class="middletwo">*</span>
    <Field type="text" label="住址" v-model="address" placeholder="请输入住址" ></Field>
    </div>
    <div class="middleone">
      <span class="middletwo">*</span>
    <Field
      readonly
      label="到岗时间"
      desc
      disableclear
      type="text"
      placeholder="请选择到岗时间"
      :value="startime"
      @click.native="open('picker1')"
    ></Field>
    </div>
    <Datetime
      ref="picker1"
      type="date"

      v-model="valueDate"
      position="middle"
      :start-date="startDate"
      :end-date="endDate"
      @confirm="handleChangeConfirmDate1"
    ></Datetime>
    <Field
      readonly
      label="离职时间"
      desc
      disableclear
      type="text"
      placeholder="请选择离职时间"
      :value="endtime"
      @click.native="open('picker3')"
    ></Field>
    <Datetime
      ref="picker3"
      type="date"

      v-model="valueDate"
      position="middle"
      :start-date="startDate"
      :end-date="endDate"
      @confirm="handleChangeConfirmDate3"
    ></Datetime>
    <Field type="textarea" label="备注" v-model="remark" placeholder="请输入不超过150字" rows="6"></Field>
    <div class="title1">
      <p>材料提交</p>
    </div>
    <div class="example-upload" v-if="arr.length">
      <div v-for="(item,index) in arr" :key="index">
        <!-- //上传图片循环.. -->
        <div class="example-upload_formItem">
          <!-- <div class="b1"></div> -->
          <label
            class="example-upload_formLabel"
          >1、用人单位在职残疾人职工的《中华人民共和国残疾人证》(二代证)、《中华人民共和国残疾军人证》(1—8级)
            <br>2、残疾人为单位职工证明文件（单位与残疾职工签订一年以上的《劳动合同》或服务协议、在编证明等）
            <br>3、残疾人职工参保证明（“城镇职工养老保险”、“城镇职工医疗保险”、“失业保险”、“工伤保险”、“生育保险”的证明文件）
            <br>4、上年度用人单位支付残疾职工起止各月份工资证明
            <br>5、智力残疾和精神残疾职工需提供《同意就业声明》
            <br>6、智力残疾和精神残疾职工需提供监护人关于该残疾人适合就业的《证明》
          </label>
          <div class="example-upload_formText">
            <!--上传-->
            <div class="example-upload">
              <!--自定义上传图片-->
              <ccbUpload
                :name="item.imgname"
                :upload-id="item.file_name"
                @uploadRes="handleRes"
                app-id="GSP_APP_001"
                bucket-id="GSP_PRIVATE"
                pic-url-pre-fixed="/image-service/downloadImage?"
                :upload-index="index"
              >
                <span class="example-upload_btn">添加</span>
              </ccbUpload>
              <div v-if="flag" class="example-upload_list">
                <div
                  class="example-upload_item"
                  v-for="(subitem,subindex) in item.uploadId"
                  :key="subindex"
                >
                  <img v-if="subitem.FuJian" :src="'data:image/png;base64,'+subitem.FuJian">
                  <img v-else :src="subitem.fileUrl" @click="previewHandle(subitem.fileUrl)">
                  <span class="example-upload_item-cover">
                    <em
                      class="example-upload_item-delete"
                      @click="handleRemove(index,subindex,item.uploadId)"
                    >X</em>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img-preview :show="isShow" :data="currentImgUrl" @callback="setShow"/>
    <!-- <Btn plain block  @click="submit()">保存</Btn> -->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="submit"/>
    </div>
  </div>
</template>
<script>
import towtop from "../../../components/HederTwo";
import ccbUpload from "../../../components/ccb-upload";
import imgPreview from "../../../components/imgPreview";
import mybutton from "@/components/MyButton";
const distype = [
  { text: "多重" },
  { text: "精神" },
  { text: "视力" },
  { text: "听力" },
  { text: "言语" },
  { text: "肢体" },
  { text: "智力" }
];
const distypejr = [{ text: "因病" }, { text: "因公" }, { text: "因战" }];
const cjjrdj=[{ text: "一级" },
            { text: "二级" },
            { text: "三级" },
            { text: "四级" },
            { text: "五级" },
            { text: "六级" },
            { text: "七级" },
            { text: "八级" }]
const cjrdj=[{ text: "一级" },
            { text: "二级" },
            { text: "三级" },
            { text: "四级" }]
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
export default {
  data() {
    return {
      btnData: [
        {
          text: "保存",
          disabled: false,
          isSure: true
        }
      ],
      titlename: "用人单位比例安排残疾人就业年审",
      defaultList: [],
      notes: false,
      hei_se: false,
      diszl: "",
      idcard: "",
      discode: "",
      name: "",
      sex: "",
      csrq: "",
      distype: "",
      disgrade: "",
      weightnumber: "",
      phone: "",
      address: "",
      startime: "",
      endtime: "",
      remark: "",
      Codenum: "",
      selectData01: [
        {
          flex: 1,
          values: [{ text: "残疾人" }, { text: "残疾军人" }],
          showText: "text",
          className: "slot1",
          textAlign: "center"
        }
      ],
      selectData02: [
        {
          flex: 1,
          values: [
            { text: "残疾人" },
            { text: "残疾军人" },
            { text: "残疾人" },
            { text: "残疾军人" },
            { text: "残疾人" },
            { text: "残疾军人" }
          ],
          showText: "text",
          className: "slot1",
          textAlign: "center"
        }
      ],
      selectData03: [
        {
          flex: 1,
          values: [{ text: "男" }, { text: "女" }],
          showText: "text",
          className: "slot1",
          textAlign: "center"
        }
      ],
      selectData04: [
        {
          flex: 1,
          values: [
            { text: "一级" },
            { text: "二级" },
            { text: "三级" },
            { text: "四级" }
          ],
          showText: "text",
          className: "slot1",
          textAlign: "center"
        }
      ],
      text:
        "残疾军人证编号为9位：前2位为汉字，其中一位为各省简称（其中兵团为“兵”），第二位为伤残人员类别，残疾军人为“军”，第三位为字母，此字母代表地市，后六位为纯数字。",
      datatext: "",
      arr: [
        {
          file_name:
            "1、用人单位在职残疾人职工的《中华人民共和国残疾人证》(二代证)、《中华人民共和国残疾军人证》(1—8级)2、残疾人为单位职工证明文件（单位与残疾职工签订一年以上的《劳动合同》或服务协议、在编证明等）3、残疾人职工参保证明（“城镇职工养老保险”、“城镇职工医疗保险”、“失业保险”、“工伤保险”、“生育保险”的证明文件）4、上年度用人单位支付残疾职工起止各月份工资证明5、智力残疾和精神残疾职工需提供《同意就业声明》6、智力残疾和精神残疾职工需提供监护人关于该残疾人适合就业的《证明》",
          uploadId: [],
          imgname: "ynprovdfrmtpctemptbl"
        }
        //{ file_name: "行政登记证书", uploadId: [], imgname: "admnrgsctf" }
      ],
      arrs: [],
      flag: false,
      isShow: false,
      currentImgUrl: "",
      //时间组件
      valueDate: "2018-03-05",
      confirmValDate: "",
      startDate: new Date(1930, 1, 1),
      endDate: new Date(2019, 10, 10)
    };
  },
  components: {
    mybutton,
    towtop,
    ccbUpload,
    imgPreview
  },
  created() {
    if (this.$route.query.cjrid != 0) {
      this.queryuser();
    }
  },
  mounted() {
    this.confirmValDate = this.valueDate; //日期
    let newdatatime = new Date();
    this.endDate = new Date(
      newdatatime.getFullYear(),
      newdatatime.getMonth(),
      newdatatime.getDate()
    );
  },
  methods: {
    FuJianDM() {
      var times = new Date();
      let Monthcode =
        times.getMonth() + 1 < 10
          ? "0" + (times.getMonth() + 1).toString()
          : (times.getMonth() + 1).toString();
      let Datecode =
        times.getDate() < 10
          ? "0" + times.getDate().toString()
          : times.getDate().toString();
      let Hourscode =
        times.getHours() < 10
          ? "0" + times.getHours().toString()
          : times.getHours().toString();
      let Minutescode =
        times.getMinutes() < 10
          ? "0" + times.getMinutes().toString()
          : times.getMinutes().toString();
      let Secondscode =
        times.getSeconds() < 10
          ? "0" + times.getSeconds().toString()
          : times.getSeconds().toString();
      let Millisecondscode =
        times.getMilliseconds() < 10
          ? "00" + times.getMilliseconds().toString()
          : times.getMilliseconds() < 100
          ? "0" + times.getMilliseconds().toString()
          : times.getMilliseconds().toString();
      var timescode =
        times.getFullYear().toString() +
        Monthcode +
        Datecode +
        Hourscode +
        Minutescode +
        Secondscode +
        Millisecondscode;
      let n = "";
      for (var i = 0; i < 13; i++) {
        n += Math.floor(Math.random() * 10).toString();
      }
      return timescode + "01" + n;
    },
    open(picker) {
      if (this.diszl == "" && picker == "pickerselect02") {
        this.$toast("请先选择残疾种类");
        return;
      }
      this.$refs[picker].open();
      document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    handleChangeConfirmDate(value) {
      //日期确定值
      this.csrq = dateFormat(value, "yyyy-MM-dd");
    },
    handleChangeConfirmDate1(value) {
      //日期确定值
      this.startime = dateFormat(value, "yyyy-MM-dd");
    },
    handleChangeConfirmDate3(value) {
      //日期确定值
      this.endtime = dateFormat(value, "yyyy-MM-dd");
    },
    select01(selectedVal) {
      if (this.selectFlag) {
        this.cityname = selectedVal[0].text;
        this.citytype = selectedVal[0].value;
        this.diszl = selectedVal[0].text;
        if (this.diszl == "残疾军人") {
          this.distype = "";
          this.selectData02[0].values = distypejr;
        } else {
          this.distype = "";
          this.selectData02[0].values = distype;
        }
      } else {
        this.diszl = selectedVal[0].text;
        if (this.diszl == "残疾军人") {
          this.distype = "";
          this.selectData02[0].values = distypejr;
          this.selectData04[0].values=cjjrdj
        } else {
          this.distype = "";
          this.selectData02[0].values = distype;
          this.selectData04[0].values=cjrdj
        }
      }
    },
    select02(selectedVal) {
      if (this.selectFlag) {
        this.cityname = selectedVal[0].text;
        this.citytype = selectedVal[0].value;
      } else {
        this.distype = selectedVal[0].text;
      }
    },
    select03(selectedVal) {
      if (this.selectFlag) {
        this.sex = selectedVal[0].text;
      } else {
        this.sex = selectedVal[0].text;
      }
    },
    select04(selectedVal) {
      if (this.selectFlag) {
        this.disgrade = selectedVal[0].text;
      } else {
        this.disgrade = selectedVal[0].text;
      }
    },
    icon_notes() {
      this.notes = !this.notes;
      this.hei_se = !this.hei_se;
    },
    touplodinfo() {
      this.$router.push("uplodinfo");
    },
    text_confim() {
      this.notes = !this.notes;
      this.hei_se = !this.hei_se;
    },
    getimg() {
      const setdata = {
        txnCommCom: {
          txnIttChnlId: 'C0011234567890987654321',
          txnIttChnlCgyCode: 'AC02C001',
          tRecInPage: "11",
          tPageJump: "1"
        },
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          chann_id: "123",
          FuJianDM: this.datatext.FuJianDM //"22d7f9a8-02ef-4691-9c2d-02acf2c6cb1f"
        }
      };
      this.$ajaxRequest("post", "/gsp/mng80104", setdata)
        .then(res => {
          console.log(res);
          // this.Codenum=res.rows[0].Code
          this.arr[0].uploadId =
            res.rows != undefined && res.rows != ""
              ? res.rows
              : this.arr[0].uploadId;
          console.log(this.arr[0]);
          this.flag = true;
        })
        .catch(response => {});
    },
    queryuser() {
      const setdata = {
        txnCommCom: {
          tStsTraceId: "2018112915",
          txnIttChnlId: 'C0011234567890987654321',
          txnIttChnlCgyCode: 'AC02C001'
        },
        txnBodyCom: {
          JiaoFeiRMC: window.sessionStorage.getItem("companyName"), //'南华县腾龙物流有限公司',
          SheHuiSYDM: window.sessionStorage.getItem("socialNumber"), //'91532324778596925L',
          ID: this.$route.query.cjrid, //this.$route.query.cjrid
          matter_id: window.sessionStorage.getItem("matterid"),
          chann_id: "1"
        }
      };
      this.$ajaxRequest("post", "/gsp/mng80028", setdata)
        .then(res => {
          console.log(res);
          this.datatext = res;
          //this.diszl = this.datatext.XingMing;
          this.idcard = this.datatext.ShenFenZH;
          this.discode = this.datatext.CanJiZH;
          this.name = this.datatext.XingMing;
          if (parseInt(this.idcard.substr(16,1)) % 2 == 1) {
            this.sex = "男";
          } else {
            this.sex = "女";
          }
          this.csrq = this.datatext.ChuShengRQ;
          this.distype = this.datatext.CanJiLB;
          this.disgrade = this.datatext.CanJiDJ;
          this.weightnumber = this.datatext.QuanZhongXS;
          this.phone = this.datatext.LianXiDH;
          this.address = this.datatext.ZhuZhi;
          this.startime = this.datatext.DaoGongSJ;
          this.endtime = this.datatext.LiGangSJ;
          //this.remark = this.datatext.XingMing;
          this.getimg();
        })
        .catch(response => {});
    },
    submitimg() {
      console.log(this.arr[0]);
      let listnumber = 0;
      for (var i = 0, len = this.arr[0].uploadId.length; i < len; i++) {
        const setdata = {
          txnCommCom: {
            txnIttChnlId: 'C0011234567890987654321',
            txnIttChnlCgyCode: 'AC02C001',
            tRecInPage: "11"
          },
          txnBodyCom: {
            FuJianLX: 0,
            FuJianDM: this.Codenum,
            FuJianMC: this.arr[0].uploadId[i].MingCheng
          },
          fileCom: {
            fileNum: "1",
            fileMode: "0",
            fileInfo: [
              {
                fileName: this.arr[0].uploadId[i].MingCheng,
                filePath: "GSP_PRIVATE"
              }
            ]
          }
        };
        this.$ajaxRequest("post", "/gsp/mng80030", setdata)
          .then(res => {
            console.log(res);
            listnumber += 1;
            if (listnumber == this.arr[0].uploadId.length) {
              this.$router.push("/employment");
            }
          })
          .catch(response => {});
      }
    },
    removeimg(index, subindex, uploadId) {
      //debugger
      let dataval = this.arr[index].uploadId[subindex];
      if (dataval.Code) {
        const setdata = {
          txnCommCom: {
            tStsTraceId: "2018112915",
            txnIttChnlId: 'C0011234567890987654321',
            txnIttChnlCgyCode: 'AC02C001'
          },
          txnBodyCom: {
            FuJianDM: dataval.Code, //dataval.Code,
            ID: dataval.ID
          }
        };
        this.$ajaxRequest("post", "/gsp/mng80031", setdata)
          .then(res => {
            console.log(res);
            this.arr[index].uploadId.splice(subindex, 1);
            this.flag = true;
          })
          .catch(response => {});
      } else {
        this.arr[index].uploadId.splice(subindex, 1);
        this.flag = true;
      }
    },
    submit() {
      if (!this.$VerifyCardId.test(this.idcard)) {
        this.$toast("请输入正确的身份证号码！");
        return;
      } else if (!this.discode) {
        this.$toast("请输入残疾证号");
        return;
      } else if (!this.sex) {
        this.$toast("请选择性别");
        return;
      } else if (
        !/(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)/.test(
          this.csrq
        )
      ) {
        this.$toast("请按展示格式输入出生日期");
        return;
      } else if (!this.distype) {
        this.$toast("请选择残疾类别");
        return;
      } else if (!this.disgrade) {
        this.$toast("请选择残疾等级");
        return;
      } else if (!this.$VerifyPhone.test(this.phone)) {
        this.$toast("请输入正确的联系电话号码！");
        return;
      } else if (!this.address) {
        this.$toast("请输入地址");
        return;
      } else if (
        !/(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)/.test(
          this.startime
        )
      ) {
        this.$toast("请选择岗时间");
        return;
      } else if (
        !/(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)/.test(
          this.endtime
        )
      ) {
        this.$toast("请选择离岗时间");
        return;
      }
      let isstartime =
        this.startime.substring(0, 4) +
        this.startime.substring(5, 7) +
        this.startime.substring(8, 10);
      let isendtime =
        this.endtime.substring(0, 4) +
        this.endtime.substring(5, 7) +
        this.endtime.substring(8, 10);
      if (isstartime > isendtime) {
        this.$toast("离职时间不能早于到岗时间！");
        return;
      }
      if (
        this.datatext.FuJianDM != "null" &&
        this.datatext.FuJianDM != undefined
      ) {
        this.Codenum = this.datatext.FuJianDM;
      } else {
        this.Codenum = this.FuJianDM();
      }
      const setdata = {
        txnCommCom: {
          tRecInPage: "11",
          txnlttChnlld: "99999",
          txnlttchnlcgycode: "999999",
          tststraceld: "11056"
        },
        txnBodyCom: {
          unit_nm: window.sessionStorage.getItem("companyName"), //'南华县腾龙物流有限公司'
          unn_soc_cr_cd: window.sessionStorage.getItem("socialNumber"), //"91532324778596925L"
          dfrmt_psnid: this.$route.query.cjrid != "0" ? this.datatext.ID : "0",
          dfrmt_crtf_no: this.discode,
          idv_nm: this.name,
          brth_dt: this.csrq,
          dfrmt_cgy: this.distype,
          dfrmt_grd: this.disgrade,
          crdt_no: this.idcard,
          mblph_no: this.phone,
          adr_inf: this.address,
          in_pos_tm: this.startime,
          lv_pos_tm: this.endtime,
          atch_cd: this.Codenum,
          verf_st: this.datatext.JiaoYanZT,
          wgt_ceft: this.datatext.QuanZhongXS,
          only1_ecd: window.sessionStorage.getItem("compancode")
        }
      };
      this.$ajaxRequest("post", "/gsp/mng60030", setdata)
        .then(res => {
          console.log(res);
          this.submitimg();
        })
        .catch(response => {});
    },
    handleRes(data) {
      //添加图片上传]
      console.log(data);
      console.log(this.flag);
      this.flag = true;
      console.log(this.arr[0].uploadId);
      console.log(this.arr[0].uploadId.length);
      const inum = this.arr[0].uploadId.length;
      if (this.arr[0].uploadId.length != 0) {
        this.arr[0].uploadId.push(data);
        for (var i = inum, len = this.arr[0].uploadId.length; i < len; i++) {
          this.arr[0].uploadId[i].LuJing = this.arr[0].uploadId[i].fileUrl;
          this.arr[0].uploadId[i].MingCheng = this.arr[0].uploadId[i].ObjNm;
          this.arr[0].uploadId[i].file_path = "GSP_PRIVATE";
        }
      } else {
        this.arr[0].uploadId.push(data);
        for (var i = 0, len = this.arr[0].uploadId.length; i < len; i++) {
          this.arr[0].uploadId[i].LuJing = this.arr[0].uploadId[i].fileUrl;
          this.arr[0].uploadId[i].MingCheng = this.arr[0].uploadId[i].ObjNm;
          this.arr[0].uploadId[i].file_path = "GSP_PRIVATE";
        }
      }
      console.log(this.arr);
      this.flag = true;
      var fileParam = {
        file_name: data.ObjNm,
        file_path: "GSP_PRIVATE"
      };
      console.log(this.arrs);
      this.arrs.push(fileParam);
      var self = this;

      setTimeout(function() {}, 300);
    },
    handleRemove(index, subindex, uploadId) {
      //删除图片上传
      //this.flag = false;
      console.log(this.arr[index].uploadId[subindex]);
      this.removeimg(index, subindex, uploadId);
    },
    setShow(data) {
      //查看大图1
      this.isShow = data;
    },
    previewHandle(data, index) {
      //查看大图2
      this.isShow = true;
      this.currentImgUrl = data;
    }
  }
};
</script>
<style  scoped>
.big {
  font-size: 0.28rem !important;
}
.hui-tabs_mini .hui-tabs_tab {
  font-size: 0.28rem;
}
.hui-tabs_tabpane {
  font-size: 0.28rem;
}
.hui-field_core {
  text-align: right;
}
.hui-field_star {
  display: none;
}
.hui-field {
  /*width: 90%;*/
  margin: 0 auto;
  height: 1rem;
  font-size: 0.28rem;
  line-height: 1rem;
  /*padding: 0 0.15rem !important;*/
}
.hui-field_title {
  width: 50%;
}
.hui-btn.is-block {
  width: 5.9rem;
  height: 0.9rem;
  margin: 1rem auto;
  background-color: #2d7ffc;
  font-size: 0.32rem;
  color: #fff;
}
.title3 {
  width: 100%;
}

.title3 p {
  width: 90%;
  height: 0.8rem;
  line-height: 0.8rem;
  margin: 0 auto;
  text-align: left;
  color: #999;
  font-size: 0.28rem;
}
.hui-icon .hui-icon_advisory {
  display: inline-block;
  font-size: 0.26rem;
  margin-right: 1rem;
}
.cardnum {
  /*width: 86%;*/
  height: 0.98rem;
  line-height: 1rem;
  margin: 0 auto;
  font-size: 0.28rem;
  text-align: left;
  /*padding-left: 0.3rem;*/
  border-bottom: 0.01rem solid #ccc;
}
.cardnum p {
  display: inline-block;
}
.cardnum input {
  height: 80%;
  width: 72%;
  border: none;
  text-align: right;
}
.icon {
  display: inline-block;
}
.notes {
  position: absolute;
  top: 40%;
  left: 10%;
  font-size: 0.28rem;
  width: 80%;
  margin: 0 auto;
  background-color: #fff;
  color: #999;
  padding: 0.6rem;
  border-radius: 0.2rem;
  z-index: 13;
  box-sizing: border-box;
}
.notes .text_confim {
  padding-top: 0.15rem;
  margin-top: 0.25rem;
  border-top: 0.01rem solid #ccc;
  font-size: 0.36rem;
  color: #257bff;
}
.cjzhclass{
  display: flex;
}
.title1 p {
  width: 90%;
  height: 0.8rem;
  line-height: 0.8rem;
  margin: 0 auto;
  text-align: left;
  color: #999;
  font-size: 0.28rem;
}
.example-upload_btn {
  display: block;
  margin-top: 0.45rem;
  width: 1.6rem;
  height: 1.6rem;
  background-color: #f5f5f5;
  font-size: 0.28rem !important;
  text-align: center;
  line-height: 1.6rem;
  color: #ccc;
}
.hui-btn.is-block {
  width: 5.9rem;
  height: 0.9rem;
  margin: 1rem auto;
  background-color: #2d7ffc;
  font-size: 0.32rem;
  color: #fff;
  z-index: 11;
}
.example-upload_formItem {
  font-weight: 700;
  width: 100% !important;
  text-align: left;
  font-size: 0.28rem;
  background-color: #fff;
  padding: 0.2rem 0.2rem 0.25rem;
}
.example-upload_formItem .ge_ceng {
  width: 90%;
  margin: 0 auto;
}
.b1 {
  display: inline-block;
  width: 0.06rem;
  height: 0.24rem;
  background-color: #257bff;
  margin-right: 0.1rem;
}

.middle {
  width: 90%;
  margin: 0.5rem auto;
  height: 0.01rem;
  background-color: #ccc;
  border-top: 0.01rem solid #ccc;
}
.big {
  width: 100%;
  height: 100%;
}
.hei_se {
  position: absolute;
  width: 100%;
  height: 100rem;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 12;
}
.example-upload_list {
  padding-top: 0.5rem;
}
.example-upload_item {
  display: inline-block;
  width: 2.1rem;
  height: 1.8rem;
  margin: 0.2rem 0.2rem 0.2rem 0;
}
.example-upload_item img {
  display: inline-block;
  width: 1.8rem;
  height: 1.8rem;
}
.big .hui-field_textarea {
  height: auto !important;
}
.big .middleone{
  position:relative;
}
.big .middletwo{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: absolute;
  top: 46%;
  left:0.04rem;
}
.big .starking{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: relative;
  top: 0.11rem;
  left:0.03rem;
  padding: 0 2px 0 1px;
}
.big .middleone3{
  position:relative;
}
.big .middletwo3{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: absolute;
  top: 45.5%;
  left:0.04rem;
}
</style>
<style>
.big .hui-field_core{
  background:none !important;
}
.big .hui-field{
    padding: 0px 15px !important;
}
.cjzhclass .hui-field{
   background:none !important;
}
</style>

