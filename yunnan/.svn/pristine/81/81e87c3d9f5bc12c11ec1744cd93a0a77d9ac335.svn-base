<template>
  <div class="PersonalInformation">
    <myheader :my-header="headerData"></myheader>
    <div class="PersonalInformationContent">
      <ul class="from">
        <li class="TestTitleBox" v-if="isIntermediate">
          <Checklist title="报考科目" v-model="sendData.TestTitle" :options="TestTitleOption"></Checklist>
          <p v-if="sendData.isold">默认勾选科目为今年必考科目，未勾选科目为选考科目。</p>
        </li>
        <li>
          <div class="middleone">
            <span class="middletwo">*</span>
            <Field
              readonly
              label="地区"
              disableclear
              type="text"
              :value="pageData.districtText"
              class="selectTypeData"
              @click.native="open('districtSelect')"
            >
              <span slot="append">
                <Icon type="arrow-right" size="14" color="#757575"></Icon>
              </span>
            </Field>
          </div>
          <Selectpopup
            ref="districtSelect"
            position="bottom"

            :dataslots="districtData"
            :visible-item-count="5"
            @confirms="districtConfirms"
          ></Selectpopup>
        </li>
        <li>
          <div class="middleone">
            <span class="middletwo" >*</span>
            <Field
              readonly
              label="报名点"
              disableclear
              type="text"
              :value="pageData.registrationPointText"
              class="selectTypeData"
              @click.native="open('registrationPointSelect')"
            >
              <span slot="append">
                <Icon type="arrow-right" size="14" color="#757575"></Icon>
              </span>
            </Field>
          </div>
          <Selectpopup
            ref="registrationPointSelect"
            position="bottom"

            :dataslots="registrationPointData"
            :visible-item-count="5"
            @confirms="registrationPointConfirms"
          ></Selectpopup>
        </li>
        <li class="longerFrom" v-if="isSenior">
          <div class="middleone">
            <span class="middletwo" v-if="isSenior">*</span>
            <Field
              readonly
              label="是否符合本省破格报考条件"
              disableclear
              type="text"
              :value="pageData.pgtjText"
              class="selectTypeData"
              @click.native="open('pgtjSelect')"
            >
              <span slot="append">
                <Icon type="arrow-right" size="14" color="#757575"></Icon>
              </span>
            </Field>
          </div>
          <Selectpopup
            ref="pgtjSelect"
            position="bottom"

            :dataslots="pgtjData"
            :visible-item-count="5"
            @confirms="pgtjConfirms"
          ></Selectpopup>
        </li>
        <li v-if="isIntermediate || isSenior">
          <div class="middleone">
            <span class="middletwo" v-if="isIntermediate || isSenior">*</span>
            <Field
              readonly
              label="专业资格"
              disableclear
              type="text"
              :value="pageData.professionalQualificationText"
              class="selectTypeData"
              @click.native="open('professionalQualificationSelect')"
            >
              <span slot="append">
                <Icon type="arrow-right" size="14" color="#757575"></Icon>
              </span>
            </Field>
          </div>
          <Selectpopup
            ref="professionalQualificationSelect"
            position="bottom"

            :dataslots="professionalQualificationData"
            :visible-item-count="5"
            @confirms="professionalQualificationConfirms"
          ></Selectpopup>
        </li>
        <li class="fromDate" v-if="isSenior">
          <div class="middleone">
            <span class="middletwo" v-if="isSenior">*</span>
            <Field
              readonly
              label="获取专业资格时间"
              disableclear
              v-model="sendData.hqzyzgsj"
              type="text"
              placeholder="请选择"
              :value="sendData.hqzyzgsj"
              @click.native="open('hqzyzgsjDate')"
            >
              <span slot="append">
                <Icon type="calendar" size="12" color="#757575"></Icon>
              </span>
            </Field>
          </div>
          <Datetime
            ref="hqzyzgsjDate"
            type="date"
            position="bottom"
             v-model="hqzyzgDefaultDate"
            :start-date="zyzgStartDate"
            :end-date="endDate"
            @confirm="hqzyzgsjConfirmDate"
          ></Datetime>
        </li>
        <li>
          <div class="middleone">
            <span class="middletwo">*</span>
            <Field
              readonly
              label="学历"
              disableclear
              type="text"
              :value="pageData.educationBackgroundText"
              class="selectTypeData"
              @click.native="open('educationBackgroundSelect')"
            >
              <span slot="append">
                <Icon type="arrow-right" size="14" color="#757575"></Icon>
              </span>
            </Field>
          </div>
          <Selectpopup
            ref="educationBackgroundSelect"
            position="bottom"

            :dataslots="educationBackgroundData"
            :visible-item-count="5"
            @confirms="educationBackgroundConfirms"
          ></Selectpopup>
        </li>
        <li v-if="isIntermediate || isSenior">
          <div class="middleone">
            <span class="middletwo" v-if="isIntermediate || isSenior">*</span>
            <Field
              type="number"
              label="会计工作年限"
              placeholder="请输入工作年限"
              v-model="sendData.kjgznx"
            ></Field>
          </div>
        </li>
        <li class="fromDate" v-if="isIntermediate || isSenior">
          <div class="middleone">
            <span class="middletwo" v-if="isIntermediate || isSenior">*</span>
            <Field
              readonly
              label="何时从事会计工作"
              disableclear
              v-model="sendData.startWork"
              type="text"
              placeholder="请选择"
              :value="sendData.startWork"
              @click.native="open('startWorkDate')"
            >
              <span slot="append">
                <Icon type="calendar" size="12" color="#757575"></Icon>
              </span>
            </Field>
          </div>
          <Datetime
            ref="startWorkDate"
            type="date"
            v-model="hscsDefaultDate"
            position="bottom"
            :start-date="hscsStartDate"
            :end-date="endDate"
            @confirm="startWorkConfirmDate"
          ></Datetime>
        </li>
        <li class="fromDate" v-if="isIntermediate || isSenior">
          <div class="middleone">
            <span class="middletwo" v-if="isIntermediate || isSenior">*</span>
            <Field
              readonly
              label="毕业时间"
              disableclear
              v-model="sendData.GraduationDate"
              type="text"
              placeholder="请选择"
              :value="sendData.GraduationDate"
              @click.native="open('GraduationDateDate')"
            >
              <span slot="append">
                <Icon type="calendar" size="12" color="#757575"></Icon>
              </span>
            </Field>
          </div>
          <Datetime
            ref="GraduationDateDate"
            type="date"
            position="bottom"
            v-model="valueDate"
            :start-date="byStartDate"
            :end-date="endDate"
            @confirm="GraduationDateConfirmDate"
          ></Datetime>
        </li>
        <li v-if="isJunior || isIntermediate">
          <div class="middleone">
            <span class="middletwo" v-if="isJunior || isIntermediate">*</span>
            <Field type="text" label="毕业院校"  placeholder="请输入毕业院校" v-model="sendData.school"></Field>
          </div>
        </li>
        <li v-if="isIntermediate">
          <div class="middleone">
            <span class="middletwo" v-if="isIntermediate">*</span>
            <Field
              type="text"
              label="毕业证编号"
              placeholder="请输入毕业证编号"
              v-model="sendData.diplomaNUm"
            ></Field>
          </div>
        </li>
        <li v-if="isJunior || isSenior">
          <div class="middleone">
            <span class="middletwo" v-if="isJunior || isSenior">*</span>
            <Field type="text" label="工作单位"  placeholder="请输入工作单位" v-model="sendData.company"></Field>
          </div>
        </li>
        <li v-if="isJunior || isSenior">
          <div class="middleone">
            <span class="middletwo" v-if="isJunior || isSenior">*</span>
            <Field
              type="text"
              label="工作单位地址"
              placeholder="请输入工作单位地址"
              v-model="sendData.companyAddress"
            ></Field>
          </div>
        </li>
        <li v-if="isSenior">
          <div class="middleone">
            <span class="middletwo" v-if="isSenior">*</span>
            <Field
              readonly
              label="单位性质"
              disableclear
              type="text"
              :value="pageData.companyNatureText"
              class="selectTypeData"
              @click.native="open('companyNatureSelect')"
            >
              <span slot="append">
                <Icon type="arrow-right" size="14" color="#757575"></Icon>
              </span>
            </Field>
          </div>
          <Selectpopup
            ref="companyNatureSelect"
            position="bottom"

            :dataslots="companyNatureData"
            :visible-item-count="5"
            @confirms="companyNatureConfirms"
          ></Selectpopup>
        </li>
        <li>
          <div class="middleone">
            <span class="middletwo">*</span>
            <Field
              type="number"
              max-length="6"
              label="邮编"
              placeholder="请输入邮编"
              v-model="sendData.postalCode"
            ></Field>
          </div>
        </li>
        <li v-if="isJunior || isIntermediate">
          <div class="middleone">
            <span class="middletwo" v-if="isJunior || isIntermediate">*</span>
            <Field type="email" label="电子邮件"  placeholder="请输入邮箱地址" v-model="sendData.email"></Field>
          </div>
        </li>
        <li>
          <div class="middleone2">
            <span class="middletwo2">*</span>
            <Field
              type="test"
              label="通讯地址"
              placeholder="请输入通讯地址"
              v-model="sendData.postalAddress"
            ></Field>
          </div>
        </li>
        <li v-if="isJunior || isIntermediate">
          <div class="middleone">
            <span class="middletwo"  v-if="isJunior || isIntermediate">*</span>
            <Field
              readonly
              label="学历性质"
              disableclear
              type="text"
              :value="pageData.xlxzText"
              class="selectTypeData"
              @click.native="open('xlxzSelect')"
            >
              <span slot="append">
                <Icon type="arrow-right" size="14" color="#757575"></Icon>
              </span>
            </Field>
          </div>
          <Selectpopup
            ref="xlxzSelect"
            position="bottom"

            :dataslots="xlxzData"
            :visible-item-count="5"
            @confirms="xlxzConfirms"
          ></Selectpopup>
        </li>
        <li class="imgUpload">
          <div class="example-upload" v-if="arr.length">
            <div v-for="(item,index) in arr" :key="index">
              <!-- //上传图片循环.. -->
              <div class="example-upload_formItem">
                <label class="example-upload_formLabel">
                  <span class="starking">*</span>{{ item.file_name }}
                </label>
                <div class="example-upload_formText">
                  <!--上传-->
                  <div class="example-upload">
                    <div class="getCamera" @click="callCamera">
                      <Icon type="camera" size="22" color="#999999"></Icon>
                    </div>
                    <!--自定义上传图片-->
                    <ccbUpload
                      ref="ccbUpload"
                      :upload-id="item.file_name"
                      :is-befor-upload="true"
                      @beforUpload="beforUpload"
                      @uploadRes="verifyImg"
                      app-id="GSP_APP_001"
                      bucket-id="GSP_PRIVATE"
                      pic-url-pre-fixed="/image-service/downloadImage?"
                      :upload-index="index"
                    >
                      <!-- <span class="example-upload_btn">{{item.uploadId.length === 0 ? '上传' : '修改'}}</span> -->
                    </ccbUpload>
                    <div class="example-upload_list">
                      <div
                        class="example-upload_item"
                        v-for="(subitem,subindex) in item.uploadId"
                        :key="subindex"
                      >
                        <img :src="subitem">
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
        </li>
        <li class="friendlyReminder">
          <p>头部摆正、穿深色衣服，在白色背景下拍摄证件照</p>
        </li>
      </ul>
      <div class="btns">
        <!-- <Btn type="primary" @click="goto">下一步</Btn> -->
        <mybutton :btnData="btnData" @click="goto"/>
      </div>
    </div>
  </div>
</template>
<!--// 请输入您的身份证号码-->
<script>
import Header from "@/components/header/header";
import ccbUpload from "@/components/ccb-upload";
import { mapMutations, mapGetters, mapActions } from "vuex";
import mybutton from "@/components/MyButton";

export default {
  data() {
    return {
      btnData: [
        {
          text: "下一步",
          disabled: false,
          isSure: true,
          click: "func2"
        }
      ],
      params: this.$route.params,
      headerData: {
        title: "填写个人信息",
        backUrl: "/notesApplication"
      },
      TestTitleOption: [
        { label: "财务管理", value: "1", disabled: false },
        { label: "经济法", value: "2", disabled: false },
        { label: "中级会计实务", value: "3", disabled: false }
      ],
      districtData: [
        {
          flex: 1,
          values: [
            /* {text: '1区', value: '00'},
             {text: '2区', value: '01'} */
          ],
          showText: "text",
          className: "slot1",
          defaultIndex: 0
        }
      ],
      registrationPointData: [
        {
          flex: 1,
          values: [
            /* {text: '1点', value: '00'},
             {text: '2点', value: '01'} */
          ],
          showText: "text",
          className: "slot1",
          defaultIndex: 0
        }
      ],
      professionalQualificationData: [
        {
          flex: 1,
          values: [
            { text: "初级", value: "1" },
            { text: "中级", value: "2" },
            { text: "其他", value: "3" }
          ],
          showText: "text",
          className: "slot1",
          defaultIndex: 0
        }
      ],
      educationBackgroundData: [
        {
          flex: 1,
          values: [
            { text: "博士", value: "11" },
            { text: "硕士", value: "14" },
            { text: "双学士", value: "24" },
            { text: "本科", value: "21" },
            { text: "大专", value: "31" },
            { text: "普通高中", value: "61" },
            { text: "其他", value: "90" }
          ],
          showText: "text",
          className: "slot1",
          defaultIndex: 0
        }
      ],
      pgtjData: [
        {
          flex: 1,
          values: [{ text: "是", value: "是" }, { text: "否", value: "否" }],
          showText: "text",
          className: "slot1",
          defaultIndex: 0
        }
      ],
      xlxzData: [
        {
          flex: 1,
          values: [
            { text: "全日制毕业生", value: "1" },
            { text: "非全日制毕业生", value: "2" }
          ],
          showText: "text",
          className: "slot1",
          defaultIndex: 0
        }
      ],
      companyNatureData: [
        {
          flex: 1,
          values: [
            { text: "企业类", value: "1" },
            { text: "行政事业类", value: "2" },
            { text: "其他", value: "3" }
          ],
          showText: "text",
          className: "slot1",
          defaultIndex: 0
        }
      ],
      zyzgStartDate: new Date(1990, 1, 1),
      hscsDefaultDate: "",
      hqzyzgDefaultDate:"",
      hscsStartDate: new Date(1990, 1, 1),
      byStartDate: new Date(1980, 1, 1),
      endDate: new Date(),
      valueDate:  this.dateFormat(new Date(), "yyyy-MM-dd"),
      arr: [{ file_name: "照片", uploadId: [] }],
      arrs: [],
      isJunior: false,
      isIntermediate: false,
      pageData: {
        districtText: "",
        registrationPointText: "",
        pgtjText: "否",
        professionalQualificationText: "",
        educationBackgroundText: "",
        xlxzText: "",
        companyNatureText: ""
      },
      sendData: {
        TestTitle: [], // 报考科目
        district: "", // 地区
        registrationPoint: "", // 报考点
        professionalQualification: "", // 专业资格
        educationBackground: "", // 学历
        kjgznx: "", // 会计工作年限
        startWork: "", // 何时从事会计工作
        GraduationDate: "", // 毕业时间
        school: "", // 毕业院校
        diplomaNUm: "", // 毕业证编号
        postalCode: "", // 邮编
        xlxz: "", // 学历性质
        pgtj: "否", // 是否符合本省破格报考条件
        hqzyzgsj: "", // 获取专业资格时间
        company: "", // 工作单位
        companyAddress: "", // 工作单位地址
        companyNature: "", // 单位性质
        email: "", // 电子邮件
        postalAddress: "", // 通讯地址
        imgUrl: "", // base64图片
        dah: ""
      }
      //haveToTestThree:false
    };
  },
  created() {
    const _self = this;
    Object.assign(_self.sendData, _self.sendDataSave);
    Object.assign(_self.pageData, _self.pageDataSave);
    console.log(_self.sendData);
    /* if(_self.sendData.isold && _self.sendData.TestTitle.length == 3){
      _self.haveToTestThree = true;  //对上一年度无合格科目的考生，必须报考三科，如未选择三科，无法提交。
    } */
    if (_self.pageData.imgurl && _self.arr[0].uploadId.length < 1) {
      _self.arr[0].uploadId.push(_self.pageData.imgurl);
    } //
    window.getPhoto = _self.getPhoto;
    _self.getRegion();
    _self.initPage();
  },
  mounted() {},
  computed: {
    ...mapGetters("bureauFinanceStore", ["sendDataSave", "pageDataSave"])
  },
  components: {
    mybutton,
    ccbUpload,
    myheader: Header
  },
  methods: {
    ...mapMutations("bureauFinanceStore", ["setSendData", "setPageData"]),
    ...mapActions("bureauFinanceStore", ["fetchTempSaveData"]),
    initPage() {
      const _self = this;
      const professionalQualificationData2 = [
        { text: "初级", value: "1" },
        { text: "中级", value: "2" },
        { text: "其他", value: "3" }
      ];
      const professionalQualificationData3 = [
        { text: "会计师", value: "1" },
        { text: "其他", value: "2" },
        { text: "无", value: "3" }
      ];
      const getYear = () => {
        let defaultData = "";
        const year = new Date().getFullYear() - 5;
        /* const month = new Date().getMonth() < 10 ? `0${new Date().getMonth()}` : `${new Date().getMonth()}`
        const day = new Date().getDay() < 10 ? `0${new Date().getDay()}` : `${new Date().getDay()}`
        defaultData = `${year}-${month}-${day}` */
        defaultData = `${year}`;
        return defaultData;
      };
      _self.isJunior = _self.sendData.level === "初级";
      _self.isIntermediate = _self.sendData.level === "中级";
      _self.isSenior = _self.sendData.level === "高级";
      if (_self.isJunior) {
      } else if (_self.isIntermediate) {
        _self.professionalQualificationData[0].values = professionalQualificationData2;
        // _self.sendData.startWork = getYear();
        _self.hscsDefaultDate = `${getYear()}-01-01`;
      } else if (_self.isSenior) {
        _self.professionalQualificationData[0].values = professionalQualificationData3;
        _self.sendData.professionalQualification = "1";
        // _self.sendData.startWork = getYear();
        _self.hscsDefaultDate = `${getYear()}-01-01`;
        _self.hqzyzgDefaultDate = `${getYear()}-01-01`;
      }
    },
    open(picker) {
      this.$refs[picker].open();
      this.setDateGroup(picker);
      document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    setDateGroup(picker) {
      const _self = this;
      const selectBox = _self.$refs[picker].$el.firstChild.childNodes[2];
      const addDate = () => {
        const monBox = selectBox.getElementsByClassName("picker-slot")[1];
        const monContentBox = monBox.getElementsByClassName(
          "picker-slot-wrapper"
        )[0];
        let firstDom = monContentBox.childNodes[0];
        firstDom.innerHTML = "01";
        monContentBox.insertBefore(firstDom, monContentBox.childNodes[0]);
        console.log(monContentBox.childNodes[0]);
      }; // huiUi第一个年份没有一个分bug修改
      const haveYM = () => {
        const dayBox = selectBox.getElementsByClassName("picker-slot")[2];
        if (dayBox) {
          addDate();
          selectBox.removeChild(dayBox);
        }
      };
      const haveY = () => {
        const dayBox = selectBox.getElementsByClassName("picker-slot")[2];
        const MonBox = selectBox.getElementsByClassName("picker-slot")[1];
        if (dayBox) {
          selectBox.removeChild(dayBox);
          selectBox.removeChild(MonBox);
        }
      };
      switch (picker) {
        case "hqzyzgsjDate":
          haveYM();
          break;
        case "startWorkDate":
          haveY();
          break;
        case "GraduationDateDate":
          haveY();
          break;
        default:
      }
      // console.log(dayBox)
    }, // 设定日期选择器
    districtConfirms(selectedVal) {
      const _self = this;
      _self.pageData.registrationPointText = "";
      if (typeof selectedVal[0] === "object") {
        _self.pageData.districtText = selectedVal[0].text;
        _self.sendData.district = selectedVal[0].value;
        _self.getRegistrationSites(selectedVal[0].value);
      } else {
        _self.sendData.district = selectedVal;
      }
    },
    registrationPointConfirms(selectedVal) {
      const _self = this;
      if (typeof selectedVal[0] === "object") {
        _self.sendData.registrationPoint = selectedVal[0].value;
        _self.pageData.registrationPointText = selectedVal[0].text;
      } else {
        _self.sendData.registrationPoint = selectedVal;
      }
    },
    professionalQualificationConfirms(selectedVal) {
      const _self = this;
      if (typeof selectedVal[0] === "object") {
        _self.sendData.professionalQualification = selectedVal[0].value;
        _self.pageData.professionalQualificationText = selectedVal[0].text;
      } else {
        _self.sendData.professionalQualification = selectedVal;
      }
    },
    educationBackgroundConfirms(selectedVal) {
      const _self = this;
      if (typeof selectedVal[0] === "object") {
        _self.sendData.educationBackground = selectedVal[0].value;
        _self.pageData.educationBackgroundText = selectedVal[0].text;
      } else {
        _self.sendData.educationBackground = selectedVal;
      }
    },
    xlxzConfirms(selectedVal) {
      const _self = this;
      if (typeof selectedVal[0] === "object") {
        _self.sendData.xlxz = selectedVal[0].value;
        _self.pageData.xlxzText = selectedVal[0].text;
      } else {
        _self.sendData.xlxz = selectedVal;
      }
    },
    pgtjConfirms(selectedVal) {
      const _self = this;
      if (typeof selectedVal[0] === "object") {
        _self.sendData.pgtj = selectedVal[0].value;
        _self.pageData.pgtjText = selectedVal[0].text;
      } else {
        _self.sendData.pgtj = selectedVal;
      }
    },
    companyNatureConfirms(selectedVal) {
      const _self = this;
      if (typeof selectedVal[0] === "object") {
        _self.sendData.companyNature = selectedVal[0].value;
        _self.pageData.companyNatureText = selectedVal[0].text;
      } else {
        _self.sendData.companyNature = selectedVal;
      }
    },
    startWorkConfirmDate(value) {
      const _slef = this;
      _slef.sendData.startWork = _slef.dateFormat(value, "yyyy");
    },
    GraduationDateConfirmDate(value) {
      const _self = this;
      _self.sendData.GraduationDate = _self.dateFormat(value, "yyyy");
    },
    hqzyzgsjConfirmDate(value) {
      const _self = this;
      _self.sendData.hqzyzgsj = _self.dateFormat(value, "yyyy-MM");
    },
    getRegion() {
      let _self = this;
      let level = _self.formatLevel();
      let sendData = {
        txnCommCom: {
          tenant: "530000000000",
          txn_itt_chnl_id: "00",
          txn_itt_chnl_type: "11",
          "C-Business-Id": "111111111"
        },
        txnBodyCom: {
          oper_id: "1003",
          bkjb: level,
          chann_id: "1",
          matter_id: sessionStorage.getItem("matterid") || "12434765"
        }
      };
      _self.$ajaxRequest("post", "/gsp/mng80082", sendData).then(res => {
        let cityArr = [];
        for (let i = 0; i < res.city.length; i++) {
          let obj = {};
          obj.text = res.city[i].name;
          obj.value = res.city[i].code;
          cityArr.push(obj);
        }
        _self.districtData[0].values = cityArr;
        _self.getExamineeDetails();
        _self.getRegistrationSites(_self.districtData[0].values[0].value);
      });
    }, // 获取地区
    getRegistrationSites(code, callback) {
      let _self = this;
      let level = _self.formatLevel();
      let sendData = {
        txnCommCom: {
          tenant: "530000000000",
          txn_itt_chnl_id: "00",
          txn_itt_chnl_type: "11",
          "C-Business-Id": "111111111"
        },
        txnBodyCom: {
          oper_id: "1004",
          bkjb: level,
          code: code,
          chann_id: "1",
          matter_id: sessionStorage.getItem("matterid")
        }
      };
      _self.$ajaxRequest("post", "/gsp/mng80083", sendData).then(res => {
        let countyArr = [];
        for (let i = 0; i < res.county.length; i++) {
          let obj = {};
          obj.text = res.county[i].name;
          obj.value = res.county[i].code;
          countyArr.push(obj);
        }
        _self.registrationPointData[0].values = countyArr;
        callback && callback();
        console.log(countyArr);
      });
    }, // 获取报名点
    getExamineeDetails() {
      let _self = this;
      let level = _self.formatLevel();
      let sendData = {
        txnCommCom: {
          tenant: "530000000000",
          txn_itt_chnl_id: "00",
          txn_itt_chnl_type: "11",
          "C-Business-Id": "111111111"
        },
        txnBodyCom: {
          matter_id: sessionStorage.getItem("matterid"),
          bkjb: level,
          chann_id: "1",
          oper_id: "1009",
          xm: _self.sendData.xm,
          zjhm: _self.sendData.zjhm
        }
      };
      _self.$ajaxRequest("post", "/gsp/mng19023", sendData).then(res => {
        console.log(res);
        if (!res.error_msg) {
          /* if(res.dah && res.zjhgkm.length == 0) _self.haveToTestThree = true; */
          _self.sendData.dah = res.dah;
          _self.sendData.TestTitle = res.zjbkkm.split(""); // 报考科目
          _self.sendData.district = _self.formatUserDetails("kqdm", res.kqdm); // 地区
          _self.pageData.districtText = res.kqdm;
          _self.getRegistrationSites(
            _self.formatUserDetails("kqdm", res.kqdm),
            () => {
              _self.sendData.registrationPoint = _self.formatUserDetails(
                "bmddh",
                res.bmddh
              ); // 报考点
              _self.pageData.registrationPointText = res.bmddh;
            }
          );
          if (res.exceptional) {
            _self.sendData.pgtj = res.exceptional; // 是否符合本省
            _self.pageData.pgtjText = res.exceptional;
          }
          if (res.zyzg_year !== "" && res.zyzg_month !== "") {
            _self.sendData.hqzyzgsj = `${res.zyzg_year}-${res.zyzg_month}`;
            _self.hqzyzgDefaultDate = `${_self.sendData.hqzyzgsj}-01`;
          }
          _self.sendData.company = res.gzdw;
          _self.sendData.companyAddress = res.gzdwaddress;
          _self.pageData.companyNatureText = res.gzxz;
          _self.sendData.companyNature = _self.formatUserDetails(
            "gzxz",
            res.gzxz
          );
          _self.sendData.professionalQualification = _self.formatUserDetails(
            "zyzg",
            res.zyzg
          ); // 专业资格
          _self.pageData.professionalQualificationText = res.zyzg;
          _self.sendData.educationBackground = _self.formatUserDetails(
            "xl",
            res.xl
          ); // 学历
          _self.pageData.educationBackgroundText = res.xl;
          _self.sendData.kjgznx = res.kjnx; // 会计工作年限
          _self.sendData.startWork = res.rznx; // 何时从事会计工作
          _self.sendData.GraduationDate = res.bysj; // 毕业时间
          _self.sendData.school = res.byyx; // 毕业院校
          _self.sendData.diplomaNUm = res.byzbh; // 毕业证编号
          _self.sendData.postalCode = res.zip; // 邮编
          _self.sendData.email = res.email; // 电子邮件
          _self.sendData.postalAddress = res.address; // 通讯地址
          _self.sendData.xlxz = _self.formatUserDetails("xlxz", res.xlxz); // 学历性质
          _self.sendData.rgst_rgst_no = res.nbmxh;
          _self.pageData.xlxzText = res.xlxz;
          if (_self.arr[0].uploadId.length < 1)
            _self.arr[0].uploadId.push(res.imgurl);
          // _self.testAIFun()
        }
      });
    }, // 获取往年考生信息
    goto() {
      const _self = this;
      console.log(_self.pageData)
      console.log(_self.sendData)
      if (_self.testFrom()) return;
      _self.setPageData(_self.pageData);
      _self.setSendData(_self.sendData);
      _self.$router.push({
        path: "/confirmationInformation",
        name: "会计等级考试报名信息确认",
        params: {
          sendData: _self.sendData,
          pageData: _self.pageData
        }
      });
    },
    testFrom() {
      const _self = this;
      let o = false;
      /* TestTitle: [], // 报考科目
       district: '', // 地区
       registrationPoint: '', // 报考点
       professionalQualification: '', // 专业资格
       educationBackground: '', // 学历
       kjgznx: '', // 会计工作年限
       startWork: '', // 何时从事会计工作
       GraduationDate: '', // 毕业时间
       school: '', // 毕业院校
       diplomaNUm: '', // 毕业证编号
       postalCode: '', // 邮编
       xlxz: '', // 学历性质
       pgtj: '', // 是否符合本省破格报考条件
       hqzyzgsj: '', // 获取专业资格时间
       company: '', // 工作单位
       companyAddress: '', // 工作单位地址
       companyNature: '', // 单位性质
       postalAddress: '' // 通讯地址 */
      console.log(_self.verifyValue("email", _self.sendData.email));
      var regex = /^\d{6}$/;
      if (_self.isIntermediate && !_self.sendData.TestTitle.length) {
        o = true;
        _self.$toast("请选择报考科目");
      } else if (!_self.sendData.district) {
        o = true;
        _self.$toast("请选择地区");
      } else if (
        (_self.isJunior || _self.isIntermediate) &&
        !_self.sendData.registrationPoint
      ) {
        o = true;
        _self.$toast("请选择报考点");
      } else if (
        (_self.isIntermediate || _self.isSenior) &&
        !_self.sendData.professionalQualification
      ) {
        o = true;
        _self.$toast("请选择专业资格");
      } else if (
        (_self.isIntermediate || _self.isSenior) &&
        !_self.sendData.educationBackground
      ) {
        o = true;
        _self.$toast("请选择学历");
      } else if (
        (_self.isIntermediate || _self.isSenior) &&
        !_self.sendData.kjgznx
      ) {
        o = true;
        _self.$toast("请输入会计工作年限");
      } else if (
        (_self.isIntermediate || _self.isSenior) &&
        parseInt(_self.sendData.kjgznx) > _self.getAge()
      ) {
        o = true;
        _self.$toast("会计工作年限不大于年龄");
      } else if (
        (_self.isIntermediate || _self.isSenior) &&
        (_self.sendData.kjgznx < 0 || _self.sendData.kjgznx > 100)
      ) {
        o = true;
        _self.$toast("会计工作年限需大于0小于100");
      } else if (
        (_self.isIntermediate || _self.isSenior) &&
        !_self.sendData.startWork
      ) {
        o = true;
        _self.$toast("请选择何时从事会计工作");
      } else if (
        (_self.isIntermediate || _self.isSenior) &&
        !_self.sendData.GraduationDate
      ) {
        o = true;
        _self.$toast("请选择毕业时间");
      } else if (
        (_self.isJunior || _self.isIntermediate) &&
        !_self.sendData.school
      ) {
        o = true;
        _self.$toast("请输入毕业院校");
      } else if (_self.isIntermediate && !_self.sendData.diplomaNUm) {
        o = true;
        _self.$toast("请输入毕业证编号");
      } else if (!_self.sendData.postalCode) {
        o = true;
        _self.$toast("请输入邮编");
      } else if (_self.sendData.postalCode.length !== 6) {
        o = true;
        _self.$toast("邮编长度为六位数字");
      } else if (!regex.test(_self.sendData.postalCode)) {
        o = true;
        _self.$toast("邮编只能输入数字");
      } else if (
        (_self.isJunior || _self.isIntermediate) &&
        !_self.sendData.xlxz
      ) {
        o = true;
        _self.$toast("请选择学历性质");
      } else if (_self.isSenior && !_self.sendData.pgtj) {
        o = true;
        _self.$toast("请选择是否符合本省破格报考条件");
      } else if (_self.isSenior && !_self.sendData.hqzyzgsj) {
        o = true;
        _self.$toast("请选择获取专业资格时间");
      } else if (
        (_self.isJunior || _self.isSenior) &&
        !_self.sendData.company
      ) {
        o = true;
        _self.$toast("请输入工作单位");
      } else if (
        (_self.isJunior || _self.isSenior) &&
        !_self.sendData.companyAddress
      ) {
        o = true;
        _self.$toast("请输入工作单位地址");
      } else if (_self.isSenior && !_self.sendData.companyNature) {
        o = true;
        _self.$toast("请选择单位性质");
      } else if (
        (_self.isJunior || _self.isIntermediate) &&
        !_self.sendData.email
      ) {
        o = true;
        _self.$toast("请输入电子邮件");
      } else if (
        (_self.isJunior || _self.isIntermediate) &&
        !_self.verifyValue("email", _self.sendData.email)
      ) {
        o = true;
        _self.$toast("请输入正确的电子邮件格式");
      } else if (!_self.sendData.postalAddress) {
        o = true;
        _self.$toast("请输入通讯地址");
      } else if (!_self.arr[0].uploadId.length) {
        o = true;
        _self.$toast("请选择图片");
      }
      return o;
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
    beforUpload(opts) {
      const _self = this;
      if (_self.isJPG(opts.file.name))
        return _self.$toast("仅支持上传.jpg文件名的图片");
      _self.$refs.ccbUpload[0].nextUoload(opts.file, opts.cdnParams);
      const reader = new FileReader();
      reader.readAsDataURL(opts.file);
      reader.onload = function(e) {
        _self.sendData.imgUrl = reader.result; // 或者 e.target.result都是一样的，都是base64码
      };
    },
    isJPG(imgName) {
      // const _self = this
      let o = false;
      const imgLastName = imgName.slice(imgName.lastIndexOf("."));
      const isJpg =
        imgLastName.indexOf("jpg") === -1 && imgLastName.indexOf("JPG") === -1;
      const isJpeg =
        imgLastName.indexOf("jpeg") === -1 &&
        imgLastName.indexOf("JPEG") === -1;
      if (isJpg && isJpeg) {
        o = true;
      }
      return o;
    },
    verifyImg(data) {
      const _self = this;
      let bucketId = data.fileUrl
        .slice(data.fileUrl.indexOf("?"), data.fileUrl.indexOf("&"))
        .split("=");
      let sendData = {
        txnBodyCom: {
          ObjNm: data.ObjNm,
          bucketId: bucketId[1],
          colour: "white",
          "C-App-Id": "GSP_APP_001",
          point_percent_level: "20.0"
        }
      };
      _self.$ajaxRequest("post", "/gsp/pub10002", sendData).then(res => {
        if (res.status === "00") {
          _self.handleRes(data);
        } else {
          _self.$toast(
            "系统检测到照片未在白色背景下拍摄，请在白色背景下拍摄证件照！"
          );
        }
      });
    },
    handleRes(data) {
      const _self = this;
      // alert('对象存储回调' + JSON.stringify(data))
      let fileParam = {
        file_name: data.ObjNm,
        file_path: "GSP_PRIVATE"
      };
      // _self.sendData.imgUrl = data.fileUrl
      if (_self.arr[data.index].uploadId.length === 0) {
        _self.arrs.push(fileParam);
        _self.arr[data.index].uploadId.push(data.fileUrl);
      } else {
        _self.arrs[0] = fileParam;
        _self.arr[data.index].uploadId.push(data.fileUrl);
        _self.arr[data.index].uploadId.shift();
      }
    }, // 添加图片上传
    handleRemove(index, subindex, uploadId) {
      // 删除图片上传
      // this.flag = false;
      const _self = this;
      if (_self.sendData.isold || _self.sendData.dah) {
        _self.$toast("往年考生不能修改照片");
        return;
      }
      _self.arr[index].uploadId.splice(subindex, 1);
    },
    formatLevel() {
      const _self = this;
      let str = "";
      if (_self.sendData.level === "中级") {
        str = "1";
      } else if (_self.sendData.level === "初级") {
        str = "2";
      } else if (_self.sendData.level === "高级") {
        str = "3";
      }
      return str;
    },
    callCamera() {
      const _self = this;
      if (_self.sendData.isold || _self.sendData.dah) {
        _self.$toast("往年考生不能修改照片");
        return;
      }
      _self.$CallModule("AppRegulePhoto", "");
      // _self.testAIFun()
    },
    getPhoto(data) {
      // alert('回调成功' + JSON.stringify(data))
      console.log(data)
      const _self = this;
      const fileName = `${new Date().getTime()}.jpg`;
      let file = _self.base64ToImg(data, fileName);
      console.log(file)
      var urls = window.location;
      let fileUrlIpcode = "";
      if (urls.hostname === "web.yn.gov.cn") {
        fileUrlIpcode = "https://download.yn.gov.cn";
      } else {
        fileUrlIpcode = "http://128.196.221.86:8080";
      }
      let cdnParams = {
        uploadURL:
          fileUrlIpcode +
          "/image-service/uploadImage?bucketId=GSP_PRIVATE&C-App-Id=GSP_APP_001",
        ObjNm: fileName
      };
      // alert('发起对象存储' + JSON.stringify(cdnParams))
      _self.sendData.imgUrl = data;
      if (_self.testImgSize(file)) return _self.$toast("图片上传不能大于15KB");
      _self.$refs.ccbUpload[0].nextUoload(file, cdnParams);
    },
    base64ToImg(dataurl, filename) {
      // const _self = this
      // alert('base64' + dataurl)
      const arr = dataurl.split(",");
      const mime = arr[0].match(/:(.*?);/)[1];
      const bstr = atob(arr[1]);
      let n = bstr.length;
      let u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    }, // 将base64转换为文件
    testImgSize(file) {
      let status = false;
      if (file.size > 18432) {
        status = true;
      }
      console.log(file);
      return status;
    },
    formatUserDetails(key, value) {
      const _self = this;
      let o = null;
      if (!value) return "";
      const returnXl = value => {
        let str = "";
        switch (value) {
          case "博士":
            str = "11";
            break;
          case "硕士":
            str = "14";
            break;
          case "双学士":
            str = "24";
            break;
          case "本科":
            str = "21";
            break;
          case "大专":
            str = "31";
            break;
          case "高中及其他":
            str = "61";
            break;
          default:
            _self.$toast("学历字典无此数据");
        }
        return str;
      };
      const returnZyzgZ = value => {
        let str = "";
        switch (value) {
          case "中级":
            str = "1";
            break;
          case "初级":
            str = "2";
            break;
          case "其他":
            str = "3";
            break;
          default:
            _self.$toast("中级专业资格字典无此数据");
        }
        return str;
      };
      const returnZyzgG = value => {
        let str = "";
        switch (value) {
          case "会计师":
            str = "1";
            break;
          case "其他":
            str = "2";
            break;
          case "无":
            str = "3";
            break;
          default:
            _self.$toast("高级专业资格字典无此数据");
        }
        return str;
      };
      const returnXlxz = value => {
        let str = "";
        switch (value) {
          case "全日制毕业生":
            str = "1";
            break;
          case "非全日制毕业生":
            str = "2";
            break;
          default:
            _self.$toast("学历性质字典无此数据");
        }
        return str;
      };
      const returnKqdm = value => {
        let str = "";
        for (let i = 0; i < _self.districtData[0].values.length; i++) {
          if (value === _self.districtData[0].values[i].text) {
            str = _self.districtData[0].values[i].value;
          }
        }
        return str;
      };
      const returnBmddh = value => {
        let str = "";
        for (let i = 0; i < _self.registrationPointData[0].values.length; i++) {
          if (value === _self.registrationPointData[0].values[i].text) {
            str = _self.registrationPointData[0].values[i].value;
          }
        }
        return str;
      };
      const returnGzxz = value => {
        let str = "";
        for (let i = 0; i < _self.companyNatureData[0].values.length; i++) {
          if (value === _self.companyNatureData[0].values[i].text) {
            str = _self.companyNatureData[0].values[i].value;
          }
        }
        return str;
      };
      switch (key) {
        case "xl":
          o = returnXl(value);
          break;
        case "zyzg":
          if (_self.sendData.level === "中级") {
            o = returnZyzgZ(value);
          } else if (_self.sendData.level === "高级") {
            o = returnZyzgG(value);
          } else {
            o = "";
          }
          break;
        case "xlxz":
          o = returnXlxz(value);
          break;
        case "kqdm":
          o = returnKqdm(value);
          break;
        case "bmddh":
          o = returnBmddh(value);
          break;
        case "gzxz":
          o = returnGzxz(value);
          break;
        default:
          _self.$toast("无效key无法查询");
      }
      return o;
    },
    getAge() {
      const _self = this;
      const nowYear = new Date().getFullYear();
      const age = nowYear - parseInt(_self.sendData.zjhm.slice(6, 10));
      return age;
    },
    verifyValue(type, value) {
      let status = false;
      const verifyEmail = value => {
        const reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/gi;
        return reg.test(value);
      };
      switch (type) {
        case "email":
          status = verifyEmail(value);
          break;
        default:
          this.$toast("暂无法验证此类型数据");
      }
      return status;
    },
    testAIFun(){
      let str =
        "data:image/jpeg;base64,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";
      this.getPhoto(str);
    }
  }
};
</script>

<style>
html,
body {
  min-height: 100%;
}

.PersonalInformation .hui-field {
  height: 100%;
}

.PersonalInformation .hui-field_title {
  width: 2.4rem;
  text-align: left;
  font-size: 0.28rem;
  line-height: calc(1rem - 10px);
}

.PersonalInformation .hui-field_value {
  border: none !important;
}

/*.PersonalInformation .hui-field {*/
   /*padding-left: 0;*/
   /*padding-right: 0;*/
 /*}*/

.PersonalInformation .hui-field .hui-field_border .hui-field_borderLeft {
  border: none;
}

.PersonalInformation .field-append_text img {
  height: 0.66rem;
}

.PersonalInformation .hui-field_core {
  text-align: right;
  font-size: 0.28rem;
}

.PersonalInformation .hui-checklist {
  padding-right: 0;
  padding-left: 0;
}

.PersonalInformation .hui-checklist_titleBox {
  text-align: left;
}

.PersonalInformation .hui-checklist_text {
  font-size: 0.28rem;
}

.PersonalInformation .hui-checklist_itemWrapper {
  background: #f7f7f7;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 1.82rem;
}

.PersonalInformation .hui-checklist_itemWrapper:after {
  content: "";
  display: block;
  clear: both;
}

.PersonalInformation .hui-checklist_itemWrapper .hui-checklist_item {
  font-size: 0.28rem;
  padding: 0;
}

.PersonalInformation .longerFrom .hui-field_title {
  width: 3.6rem;
}

.PersonalInformation input[type="file"] {
  display: none;
}
</style>
<style lang="less" scoped>
.PersonalInformation {
  background: #f7f7f7;
  height: 100%;
  .PersonalInformationContent {
    .from {
      background: #fff;
      margin-bottom: 1rem;
      margin-top: 0.2rem;
      .TestTitleBox {
        height: auto;

        p {
          text-align: left;
        }
      }
      li {
        height: 1rem;
        padding: 0 0.36rem;
        form {
          height: 100%;
        }
        input {
          text-align: right;
          font-size: 0.28rem;
        }
      }
      .friendlyReminder {
        height: auto !important;
        padding: 0.1rem 0.36rem;

        p {
          color: red;
          font-size: 0.2rem;
          text-align: left;
        }
      }
      .imgUpload {
        height: 1.86rem;
        .example-upload {
          .getCamera {
            margin-right: 0.1rem;
          }
          div {
            .example-upload_formItem {
              &:after {
                content: "";
                display: none;
                clear: both;
              }
              .example-upload_formLabel {
                float: left;
                width: 2.4rem;
                text-align: left;
                font-size: 0.28rem;
                line-height: 1.86rem;
              }
              .example-upload_formText {
                &:after {
                  content: "";
                  display: block;
                  clear: both;
                }
                div {
                  float: right;
                }
                .example-upload_btn {
                  font-size: 0.22rem;
                  color: #2d7ffc;
                }
                float: right;
                width: 2.4rem;
                text-align: right;
                font-size: 0.28rem;
                line-height: 1.86rem;
              }
            }
          }
          .example-upload_list {
            float:right;
            margin-right: 0.2rem;
            .example-upload_item {
              position: relative;
              img {
                width: 1rem;
                height: 1.4rem;
                vertical-align: middle;
              }
              span {
                position: absolute;
                top: -0.6rem;
                right: 0;
              }
            }
          }
        }
      }
      .fromDate {
        span:not(.middletwo) {
          margin-left: 0.2rem;
        }
      }
    }
    .btns {
      button {
        width: 5.9rem;
        height: 0.9rem;
      }
      label {
        font-size: 0.32rem;
      }
    }
  }
}
.example-upload_formItem{
    display: flex !important;
    label{
      display: block !important;
      width: 20% !important;
    }
    .example-upload_formText{
      flex: 1 !important;
      .example-upload{
        width: 100% !important;
      }
    }
}

.middleone{
  position:relative;
}
.middletwo{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: absolute;
  top:37%;
  left:0;
}
.starking{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: relative;
  top: 0.1rem;
  margin-right:0.15rem;
}
.middleone2{
  position:relative;
}
.middletwo2{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: absolute;
  top:36%;
  left:0;
}
</style>
