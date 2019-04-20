<template>
  <div>
    <towtop :name="hadertow"/>

    <div @mouseleave="itemname">
      <Field
        desc-class="richText"
        type="text"
        label="项目名称"
        :value="item"
        v-model="item"
        placeholder="请输入项目名称"
        @blur="gotolist"
        required
      ></Field>
    </div>
    <Field desc-class="richText" type="text" label="建设性质" placeholder="请输入建设性质" required></Field>
    <Field desc-class="richText" type="text" label="建设区域" placeholder="请输入建设区域" required></Field>
    <Field desc-class="richText" type="text" label="建设地点" placeholder="请输入建设地点" required></Field>
    <Field
      readonly
      :error="errorSelectInfo"
      :propserror="errorSelect01"
      label="投资主体"
      disableclear
      type="text"
      placeholder="请选择投资主体"
      required
      :value="confirmValSelect01"
      v-model="confirmValSelect01"
      v-on:errorchange="errorChangeFun"
      @click.native="open('pickerselect01')"
    ></Field>
    <Huiselect
      ref="pickerselect01"
      position="bottom"
      :dataslots="selectData01"
      class="example-select_item"
      @confirms="selectConfirmFun01"
    ></Huiselect>
    <div>
      <Field
        readonly
        :error="errorSelectInfo"
        :propserror="errorSelect01"
        label="国标行业"
        disableclear
        type="text"
        placeholder="请选择国标行业"
        required
        :value="confirmValSelect02"
        v-on:errorchange="errorChangeFun"
        @click.native="open('pickerselect02')"
      >
        <span
          slot="append"
          class="example-select_arrowRight"
          @click.stop="open('更多','gbhy','0','confirmValSelectadd02')"
        >更多</span>
      </Field>
      <Huiselect
        ref="pickerselect02"
        position="bottom"
        :dataslots="selectData02"
        class="example-select_item"
        @confirms="selectConfirmFun02"
      ></Huiselect>
    </div>
    <div v-show="show021">
      <Field
        readonly
        :error="errorSelectInfo"
        :propserror="errorSelect01"
        label="国标行业"
        disableclear
        type="text"
        placeholder="请选择国标行业"
        required
        :value="confirmValSelect021"
        v-on:errorchange="errorChangeFun"
        @click.native="open('pickerselect021')"
      >
        <span
          slot="append"
          class="example-select_arrowRight"
          @click.stop="open('更多','gbhy',confirmValSelectadd021,'confirmValSelectadd021')"
        >更多</span>
      </Field>
      <Huiselect
        ref="pickerselect021"
        position="bottom"
        :dataslots="selectData021"
        class="example-select_item"
        @confirms="selectConfirmFun021"
      ></Huiselect>
    </div>
    <div v-show="show022">
      <Field
        readonly
        :error="errorSelectInfo"
        :propserror="errorSelect01"
        label="国标行业"
        disableclear
        type="text"
        placeholder="请选择国标行业"
        required
        :value="confirmValSelect022"
        v-on:errorchange="errorChangeFun"
        @click.native="open('pickerselect022')"
      >
        <span
          slot="append"
          class="example-select_arrowRight"
          @click.stop="open('更多','gbhy',confirmValSelectadd022,'confirmValSelectadd022')"
        >更多</span>
      </Field>
      <Huiselect
        ref="pickerselect022"
        position="bottom"
        :dataslots="selectData022"
        class="example-select_item"
        @confirms="selectConfirmFun022"
      ></Huiselect>
    </div>

    <div>
      <Field
        readonly
        :error="errorSelectInfo"
        :propserror="errorSelect01"
        label="所属行业"
        disableclear
        type="text"
        placeholder="请选择所属行业"
        required
        :value="confirmValSelect03"
        v-on:errorchange="errorChangeFun"
        @click.native="open('pickerselect03')"
      >
        <span
          slot="append"
          class="example-select_arrowRight"
          @click.stop="open('更多','sshy','0',confirmValSelectadd03,'confirmValSelectadd03')"
        >更多</span>
      </Field>
      <Huiselect
        ref="pickerselect03"
        position="bottom"
        :dataslots="selectData03"
        class="example-select_item"
        @confirms="selectConfirmFun03"
      ></Huiselect>
    </div>
    <div v-show="show031">
      <Field
        readonly
        :error="errorSelectInfo"
        :propserror="errorSelect01"
        label="所属行业"
        disableclear
        type="text"
        placeholder="请选择所属行业"
        required
        :value="confirmValSelect031"
        v-on:errorchange="errorChangeFun"
        @click.native="open('pickerselect031')"
      >
        <span
          slot="append"
          class="example-select_arrowRight"
          @click.stop="open('更多','sshy',confirmValSelectadd031,'confirmValSelectadd031')"
        >更多</span>
      </Field>
      <Huiselect
        ref="pickerselect031"
        position="bottom"
        :dataslots="selectData031"
        class="example-select_item"
        @confirms="selectConfirmFun031"
      ></Huiselect>
    </div>
    <Field desc-class="richText" type="text" label="拟开工时间" placeholder="请输入拟开工时间" required></Field>

    <Field desc-class="richText" type="text" label="拟竣工时间" placeholder="请输入拟竣工时间" required></Field>

    <Field desc-class="richText" type="text" label="建设规模及内容" placeholder="请输入建设规模及内容" required></Field>

    <Field desc-class="richText" type="text" label="总投资（万元）" placeholder="请输入总投资（万元）" required></Field>

    <!-- <Field
      desc-class="richText"
      type="text"
      label="政府投资（万元）"
      placeholder="请输入政府投资（万元）"
      required
    ></Field>

    <Field
      desc-class="richText"
      type="text"
      label="自筹投资（万元）"
      placeholder="请输入自筹投资（万元）"
      required
    ></Field>-->
    <Field desc-class="richText" type="text" label="项目属性" placeholder="固定资产投资项目" required></Field>

    <!-- <moduleThree></moduleThree> -->
    <Field
      readonly
      :error="errorSelectInfo"
      :propserror="errorSelect01"
      label="产业结构调整指导目录"
      disableclear
      type="text"
      placeholder="请选择产业结构调整指导目录"
      required
      :value="confirmValSelect04"
      v-on:errorchange="errorChangeFun"
      @click.native="open('pickerselect04')"
    >
      <span
        slot="append"
        class="example-select_arrowRight"
        @click.stop="open('更多','qytz','0','confirmValSelectadd04')"
      >更多</span>
    </Field>
    <Huiselect
      ref="pickerselect04"
      position="bottom"
      :dataslots="selectData04"
      class="example-select_item"
      @confirms="selectConfirmFun04"
    ></Huiselect>

    <div>
      <Field
        readonly
        :error="errorSelectInfo"
        :propserror="errorSelect01"
        label="产业政策"
        disableclear
        type="text"
        placeholder="请选择产业政策"
        required
        :value="confirmValSelect05"
        v-on:errorchange="errorChangeFun"
        @click.native="open('pickerselect05')"
      >
        <span
          slot="append"
          class="example-select_arrowRight"
          @click.stop="open('更多','cyzc','','confirmValSelectadd05')"
        >更多</span>
      </Field>
      <Huiselect
        ref="pickerselect05"
        position="bottom"
        :dataslots="selectData05"
        class="example-select_item"
        @confirms="selectConfirmFun05"
      ></Huiselect>
    </div>
    <div v-show="show051">
      <Field
        readonly
        :error="errorSelectInfo"
        :propserror="errorSelect01"
        label="产业政策"
        disableclear
        type="text"
        placeholder="请选择产业政策"
        required
        :value="confirmValSelect051"
        v-model="confirmValSelect051"
        v-on:errorchange="errorChangeFun"
        @click.native="open('pickerselect051')"
      >
        <span
          slot="append"
          class="example-select_arrowRight"
          @click.stop="open('更多','cyzc',confirmValSelectadd05,'confirmValSelectadd051')"
        >更多</span>
      </Field>
      <Huiselect
        ref="pickerselect051"
        position="bottom"
        :dataslots="selectData051"
        class="example-select_item"
        @confirms="selectConfirmFun051"
      ></Huiselect>
    </div>
    <Field desc-class="richText" type="text" label="符合产业政策声明" placeholder="请输入符合产业政策声明" requiredj></Field>

    <Field desc-class="richText" type="text" label="备案目录" placeholder="请输入备案目录" required></Field>
    <!-- <selectPage></selectPage> -->
    <!-- <Btn plain @click="popupVisible5" size="large" class="scl_but">下一步</Btn> -->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="popupVisible5"/>
    </div>
    <div class="list" v-if="addlist">
      <addlist :url="url" :cent="cent" :types="types" @endaddlist="endaddlist"></addlist>
    </div>

<div>
<Popupprompt
          v-model="popupVisible6"
          :title="content2.title"
          :text="content2.text"
          :confirm-btn = {}
          :cancel-btn = {}
          :btn-list= "content2.btnList"
          @click="clickbtn2"
    >
       <div slot="othercontent">
         您输入的项目名称与以下项目相似，请核实此项目是否已做过备案：
         <p v-for=" list in itemnameadd">
           
           {{list._source}}
         </p>
       </div>
    </Popupprompt>
</div>

  </div>
</template>

<script>
import towtop from "@/components/HederTwo";
import mybutton from "@/components/MyButton";
import selectPage from "./index";
import ModuleOne from "./projectinfo/ModuleOne";
import ModuleTwo from "./projectinfo/ModuleTwo";
import ModuleThree from "./projectinfo/ModuleThree";
// import policy from "./projectinfo/policy";
import addlist from "./addlist";
import { type } from "./type.js";
import { ClientRequest } from "http";
const address = type.four();
export default {
  data() {
    return {
      popupVisible6: false,
      content2: {
          title: "提示",
          text: "",
          btnList: [
            {
             id: "btn1",
             text: "关闭",
                 primary: true
             }
          ]
        },


      url: "",
      cent: "",
      types: "",
      confirmValSelect02: "",
      confirmValSelect021: "",
      confirmValSelect022: "",
      confirmValSelect03: "",
      confirmValSelect031: "",
      confirmValSelect04: "",
      confirmValSelect05: "",
      confirmValSelect051: "",

      confirmValSelectadd02: "",
      confirmValSelectadd021: "",
      confirmValSelectadd022: "",
      confirmValSelectadd03: "",
      confirmValSelectadd031: "",
      confirmValSelectadd04: "",
      confirmValSelectadd05: "",
      confirmValSelectadd051: "",
      itemnameadd:[],
      show021: false,
      show022: false,
      show031: false,
      show051: false,

      addlist: false,
      errorSelect01: false,
      errorSelectInfo: "",
      selectData01: [
        {
          flex: 1,
          values: [{ text: "企业投资", value: "a" }],
          className: "slot1",
          showText: "text",
          defaultIndex: 3
        }
      ],
      confirmValSelect01: ["企业投资"], //['1987']

      selectData02: [
        {
          flex: 1,
          values: [
            { text: "2", value: "a" },
            { text: "1985", value: "b" },
            { text: "1986", value: "c" },
            { text: "1987", value: "d" },
            { text: "1988", value: "f" },
            { text: "1989", value: "g" },
            { text: "1990", value: "h" }
          ],
          className: "slot1",
          showText: "text",
          defaultIndex: 3
        }
      ],

      selectData021: [
        {
          flex: 1,
          values: [
            { text: "2", value: "a" },
            { text: "1985", value: "b" },
            { text: "1986", value: "c" },
            { text: "1987", value: "d" },
            { text: "1988", value: "f" },
            { text: "1989", value: "g" },
            { text: "1990", value: "h" }
          ],
          className: "slot1",
          showText: "text",
          defaultIndex: 3
        }
      ],

      selectData022: [
        {
          flex: 1,
          values: [
            { text: "2", value: "a" },
            { text: "1985", value: "b" },
            { text: "1986", value: "c" },
            { text: "1987", value: "d" },
            { text: "1988", value: "f" },
            { text: "1989", value: "g" },
            { text: "1990", value: "h" }
          ],
          className: "slot1",
          showText: "text",
          defaultIndex: 3
        }
      ],

      selectData03: [
        {
          flex: 1,
          values: [
            { text: "3", value: "a" },
            { text: "1985", value: "b" },
            { text: "1986", value: "c" },
            { text: "1987", value: "d" },
            { text: "1988", value: "f" },
            { text: "1989", value: "g" },
            { text: "1990", value: "h" }
          ],
          className: "slot1",
          showText: "text",
          defaultIndex: 3
        }
      ],

      selectData031: [
        {
          flex: 1,
          values: [
            { text: "3", value: "a" },
            { text: "1985", value: "b" },
            { text: "1986", value: "c" },
            { text: "1987", value: "d" },
            { text: "1988", value: "f" },
            { text: "1989", value: "g" },
            { text: "1990", value: "h" }
          ],
          className: "slot1",
          showText: "text",
          defaultIndex: 3
        }
      ],

      selectData04: [
        {
          flex: 1,
          values: [
            { text: "4", value: "a" },
            { text: "1985", value: "b" },
            { text: "1986", value: "c" },
            { text: "1987", value: "d" },
            { text: "1988", value: "f" },
            { text: "1989", value: "g" },
            { text: "1990", value: "h" }
          ],
          className: "slot1",
          showText: "text",
          defaultIndex: 3
        }
      ],
      selectData05: [
        {
          flex: 1,
          values: [
            { text: "5", value: "a" },
            { text: "1985", value: "b" },
            { text: "1986", value: "c" },
            { text: "1987", value: "d" },
            { text: "1988", value: "f" },
            { text: "1989", value: "g" },
            { text: "1990", value: "h" }
          ],
          className: "slot1",
          showText: "text",
          defaultIndex: 3
        }
      ],

      selectData051: [
        {
          flex: 1,
          values: [
            { text: "5", value: "a" },
            { text: "1985", value: "b" },
            { text: "1986", value: "c" },
            { text: "1987", value: "d" },
            { text: "1988", value: "f" },
            { text: "1989", value: "g" },
            { text: "1990", value: "h" }
          ],
          className: "slot1",
          showText: "text",
          defaultIndex: 3
        }
      ],
      item: "",
      btnData: [
        {
          text: "下一步",
          disabled: false,
          isSure: true
        }
      ],
      errorSelect01: false,

      hadertow: "项目信息"
    };
  },
  components: {
    mybutton,
    selectPage,
    ModuleOne,
    ModuleTwo,
    ModuleThree,
    addlist,
    towtop
  },

  created() {},

  methods: {
    clickbtn2(id) {
        this.popupVisible6 = false
        console.log(id)
      },
    itemname() {
      let data = {
        txnBodyCom: {
          matchdegree: "90%",
          size: "5",
          matter_id: "1",
          chann_id: "1",
          keywords: this.item
        }
      };
      let pages = {
        txnIttChnlId: "1",
        txnIttChnlCgyCode: "1",
        tRecInPage: "10",
        tPageJump: "1"
      };
      this.$ajaxRequest("post", "/gsp/mng50006", data, pages)
        .then(res => {
          console.log(res);
          this.itemnameadd = res.data.hits.hits
          this.popupVisible6 = true
        })  
        .catch(error => {
          console.log(error);
        });
    },
    endaddlist(val) {
      console.log(val);
      if (val.type == "confirmValSelectadd02") {
        this.confirmValSelectadd02 = val.cent;
        this.confirmValSelect02 = val.name;
        if (val.name == undefined || val.name == "undefined") {
          this.confirmValSelectadd021 = "";
          this.confirmValSelect021 = "";
          this.show021 = false;
        } else {
          this.show021 = true;
        }
      }
      if (val.type == "confirmValSelectadd021") {
        this.confirmValSelectadd021 = val.cent;
        this.confirmValSelect021 = val.name;
        if (val.name == undefined || val.name == "undefined") {
          this.confirmValSelectadd022 = "";
          this.confirmValSelect022 = "";
          this.show022 = false;
        } else {
          this.show022 = true;
        }
      }
      if (val.type == "confirmValSelectadd022") {
        this.confirmValSelectadd022 = val.cent;
        this.confirmValSelect022 = val.name;
      }
      if (val.type == "confirmValSelectadd03") {
        this.confirmValSelectadd03 = val.cent;
        this.confirmValSelect03 = val.name;
        if (val.name == undefined || val.name == "undefined") {
          this.confirmValSelectadd031 = "";
          this.confirmValSelect031 = "";
          this.show031 = false;
        } else {
          this.show031 = true;
        }
      }
      if (val.type == "confirmValSelectadd031") {
        this.confirmValSelectadd031 = val.cent;
        this.confirmValSelect031 = val.name;
      }
      if (val.type == "confirmValSelectadd04") {
        this.confirmValSelectadd04 = val.cent;
        this.confirmValSelect04 = val.name;
      }
      if (val.type == "confirmValSelectadd05") {
        this.confirmValSelectadd05 = val.cent;
        this.confirmValSelect05 = val.name;
        if (val.name == undefined || val.name == "undefined") {
          this.show051 = false;
          this.confirmValSelectadd051 = "";
          this.confirmValSelect051 = "";
        } else {
          this.show051 = true;
        }
      }
      if (val.type == "confirmValSelectadd051") {
        this.confirmValSelectadd051 = val.cent;
        this.confirmValSelect051 = val.name;
      }

      this.addlist = false;
    },
    open(picker, val, cent, types) {
      console.log(types);
      if (picker === "更多") {
        this.addlist = true;
        if (val == "gbhy") {
          this.url = "/gsp/mng50007";
          this.cent = cent;
          this.types = types;
          // this.$router.push({path: '/addlist', query: {url: '/gsp/mng50007',cent:''}})
          return;
        }
        if (val == "sshy") {
          this.url = "/gsp/mng70060";
          this.cent = cent;
          this.types = types;
          // this.$router.push({path: '/addlist', query: {url: '/gsp/mng70060',cent:''}})
          return;
        }
        if (val == "qytz") {
          this.url = "/gsp/mng70060";
          this.cent = cent;
          this.types = types;
          // this.$router.push({path: '/addlist', query: {url: '/gsp/mng70060',cent:''}})
          return;
        }
        if (val == "cyzc") {
          this.url = "/gsp/mng90060";
          this.cent = cent;
          this.types = types;
          // this.$router.push({path: '/addlist', query: {url: '/gsp/mng90060',cent:''}})
          return;
        }

        return false;
      } else {
        this.$refs[picker].open();
        document.activeElement.blur();
      }
    },
    errorChangeFun(val) {
      this.errorSelect01 = val;
    },
    selectConfirmFun01(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect01 = selectedVal[0].text;
      } else {
        this.confirmValSelect01 = selectedVal;
      }
    },
    selectConfirmFun02(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect02 = selectedVal[0].text;
        this.confirmValSelectadd02 = selectedVal[0].value;
        this.show021 = true;
      } else {
        this.confirmValSelect02 = selectedVal;
      }
    },
    selectConfirmFun021(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect021 = selectedVal[0].text;
        this.confirmValSelectadd021 = selectedVal[0].value;
        this.show022 = true;
      } else {
        this.confirmValSelect021 = selectedVal;
      }
    },
    selectConfirmFun022(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect022 = selectedVal[0].text;
        this.confirmValSelectadd022 = selectedVal[0].value;
      } else {
        this.confirmValSelect022 = selectedVal;
      }
    },
    selectConfirmFun03(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect03 = selectedVal[0].text;
        this.confirmValSelectadd03 = selectedVal[0].value;
        this.show031 = true;
      } else {
        this.confirmValSelect03 = selectedVal;
      }
    },
    selectConfirmFun031(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect031 = selectedVal[0].text;
        this.confirmValSelectadd031 = selectedVal[0].value;
      } else {
        this.confirmValSelect031 = selectedVal;
      }
    },
    selectConfirmFun04(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect04 = selectedVal[0].text;
      } else {
        this.confirmValSelect04 = selectedVal;
      }
    },
    selectConfirmFun05(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect05 = selectedVal[0].text;
        this.confirmValSelectadd05 = selectedVal[0].value;
        this.show051 = true;
      } else {
        this.confirmValSelect05 = selectedVal;
      }
    },
    selectConfirmFun051(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect051 = selectedVal[0].text;
        this.confirmValSelectadd051 = selectedVal[0].value;
      } else {
        this.confirmValSelect051 = selectedVal;
      }
    },
    // gotolist() {
    //   this.$router.push("/addlist");
    // },
    popupVisible5() {
      this.submit();
    },

    submit() {
      let data = {
        txnBodyCom: {
          matter_id: "1",
          chann_id: "1",
          Pro_code: "2018-530421-54-01-011329",
          BUILD_AREA: "建设区域",
          PHONE: "135824897411",
          BUILD_ADDRESS: "建设地点",
          THE_INDUSTRY: "A0000101",
          ID_TYPE: "SYNDA-CT-JMSFZ",
          INDUSTRY_POLICY_ID: "07D1F320CB4E4E3CA9868103CF6670F4",
          TOTAL_INVESTMENT: "880658",
          INDUSTRY_STRUCTURE_ID: "1452",
          INVESTOR: "SYNDA-INV-QT",
          COMPLETION_DATE: "2018-12-08",
          PROJ_NAME: "测试项目名称",
          REPRESENTATIVE: "张三",
          LINKMAN: "项目联系人",
          REP_CRED_TYPE: "SYNDA-CT-JMSFZ",
          PROJECT_ATTRIBUTES: "A00003",
          BUILD_CONTENT: "建设规模和内容",
          START_DATE: "2018-11-08",
          APPLICATE_AREA: "530000",
          BUILD_NATURE: "SYNDA-BN-OTHER",
          INDUSTRY_ID: "530D18C5-574E-F4EE-A82F-126B54427FDA",
          REP_CRED_ID: "A05100",
          INDUSTRY_POLICY_DESC: "符合产业政策申明",
          PROJ_APP: "项目单位",
          SIGNATURE_PHONE: "13587942187",
          F_APPDIRID: "9A002667-00E2-935D-0A39-4D7D31314BD7",
          ID_CARD: "530381199511250548"
        }
      };
      let pages = {
        txnIttChnlId: "1",
        txnIttChnlCgyCode: "1",
        tRecInPage: "10",
        tPageJump: "1"
      };
      this.$ajaxRequest("post", "/gsp/mng19018", data, pages)
        .then(res => {
          this.$router.push("/formone");
          console.log(res);
        })
        .catch(error => {
          console.log(res);
        });
    }
  }
};
</script>
<style>
.hui-field_title {
  width: auto;
}
</style>

<style scoped="projectinfo.vue">
.list {
  position: fixed;
  z-index: 9;
  background: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.example-select_btn-wrapper {
  margin-top: 15px;
}
.example-select_arrowRight {
  display: block;
  width: 30px;

  background-size: 16px 16px;
}
</style>