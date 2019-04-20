<template>
  <div class="gat_bgxm">
    <towtop :name="titlename"/>
    <div class="header1">常住户口登记地公安派出所</div>
    <area-picker @setValue="setHandle" @clear="clear"/>
    <div class="header2">可变更信息</div>
    <div class="middleone">
      <span class="middletwo">*</span>
    <div class="example-extendSelect">
        <span class="bgzl">变更种类</span>
      <Extendselect @getval="selectedItem" @touchmove.prevent :options="options" :selected="selectednumebr"></Extendselect>
    </div>
    </div>
    <!--<Checklist
      type = "radio"
      required
      title="是否已满18周岁"
      v-model="sendData.WhetherAdult"
      :max="2"
      :options="[
			{label: '已满', value: '已满', disabled: false},
			{label: '未满', value: '未满', disabled: false}
			]"
    ></Checklist>-->
    <div class="RadiosGongAn" v-if="isAdult">
      <div class="middleone">
        <span class="middletwo">*</span>
      <Radios
        @change="radiosHandle"
        title="是否已满18周岁"
        v-model="sendData.WhetherAdult"
        :options="[
			{label: '已满', value: '已满', disabled: false},
			{label: '未满', value: '未满', disabled: false}
			]"
      ></Radios>
      </div>
    </div>
    <ul>
      <li v-if="fromType==='1'">
        <div class="middleone">
          <span class="middletwo">*</span>
        <Field
          class="ipt2"
          type="text"
          :label="labelvalue"
          v-model="sendData.changeMsg"
          :value="sendData.changeMsg"
          :placeholder="placeholdervlaue"
        ></Field>
        </div>
      </li>
      <li v-if="fromType==='2'">
        <div class="middleone">
          <span class="middletwo">*</span>
        <Field
          readonly
          :label="labelvalue"
          disableclear
          type="text"
          v-model="sendData.changeSelectMsg.cmnCdNm"
          :value="sendData.changeSelectMsg.cmnCdNm"
          class="selectTypeData"
          @click.native="open('changeMsgSelect')"
        >
          <span slot="append">
            <Icon type="arrow-right" size="14" color="#757575"></Icon>
          </span>
        </Field>
        </div>
        <Selectpopup
          ref="changeMsgSelect"
          position="bottom"
          :dataslots="changeMsgData"
          :visible-item-count="5"
          @confirms="changeMsgConfirms"
        ></Selectpopup>
      </li>
      <li v-if="fromType==='3'">
        <nativePlaceModule @setData="backHandle" :params-data="sendData.changeType"></nativePlaceModule>
      </li>
    </ul>
    <div class="header2">变更人变更前信息</div>
    <ul class="beforChangeMsg">
      <li v-show="sendData.WhetherAdult == '已满'">
        <div class="bgr_person">
          <ul>
            <div class="middlefour">
              <i class="middlefive">*</i>
              <li>
                <span>姓名</span>
                <span class="spn2">{{sendData.xm}}</span>
              </li>
            </div>
            <div class="middlefour">
              <i class="middlefive">*</i>
              <li>
                <span>公民身份证</span>
                <span class="spn2">{{sendData.sfzh}}</span>
              </li>
            </div>
            <div class="middlefour">
              <i class="middlefive">*</i>
              <li>
                <span>与申请人关系</span>
                <span class="spn2">{{sendData.relation}}</span>
              </li>
            </div>
          </ul>
        </div>
      </li>
      <li v-show="sendData.WhetherAdult == '未满'">
        <div>
          <ul>
            <li>
              <div class="middleone">
                <span class="middletwo">*</span>
              <Field
                label="姓名"
                placeholder="请输入姓名"
                disableclear
                type="text"
                v-model="proName"
                :value="proName"
                class="selectTypeData"
                :disabled="isDisabled"
              ></Field>
              </div>
            </li>
            <li>
              <div class="middleone">
                <span class="middletwo">*</span>
              <Field
                label="公民身份证"
                placeholder="请输入公民身份证"
                disableclear
                type="text"
                v-model="proSfz"
                :value="proSfz"
                class="selectTypeData"
                :disabled="isDisabled"
              ></Field>
              </div>
            </li>
            <li>
              <div class="middleone">
                <span class="middletwo">*</span>
              <Field
                readonly
                label="与申请人关系"
                placeholder="请选择与申请人关系"
                disableclear
                type="text"
                v-model="sendData.relation"
                class="selectTypeData"
                @click.native="open('relationSelect')"
                :disabled="isDisabled"
              >
                <span slot="append">
                  <Icon type="arrow-right" size="14" color="#757575"></Icon>
                </span>
              </Field>
              </div>
              <Selectpopup
                ref="relationSelect"
                position="bottom"
                :dataslots="relationData"
                :visible-item-count="5"
                @confirms="relationConfirms"
               :disabled="isDisabled"
              ></Selectpopup>
            </li>
          </ul>
        </div>
      </li>
    </ul>

    <!-- 需要上传的材料部分 -->
    <div class="header2">上传材料</div>
    <div class="example-upload">
      <div class="example-upload_formItem" v-for="(item, index) in arr" :key="index">
        <div class="blue"></div>
        <label class="example-upload_formLabel">
          <span class="middlethree">*</span>
          <span>{{ item.file_name }}</span>
        </label>
        <div class="example-upload_formText">
          <!--上传-->
          <ccbUpload
            :upload-id="item.file_name"
            :nameKey="currentKey"
            @uploadRes="handleRes"
            app-id="GSP_APP_001"
            bucket-id="GSP_PRIVATE"
            :max-size="2048"
            :on-exceeded-size="handleMaxSize"
            pic-url-pre-fixed="/image-service/downloadImage?"
            :upload-index="index"
          >
            <span class="example-upload_btn" @click="setnamekey(index)">+</span>
          </ccbUpload>
          <div class="imgList">
            <div
              class="example-upload_item"
              v-for="(subitem, subindex) in item.uploadId"
              :key="subindex"
            >
              <img :src="subitem" @click="openImg(subitem)">
              <span class="example-upload_item-cover">
                <em
                  class="example-upload_item-delete"
                  @click="handleRemove(index, subindex, item.uploadId)"
                >X</em>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <Btn plain block @click.prevent="tempSave">临时保存</Btn>
    <Btn plain block class="bt2" @click.prevent="jumpFaceID">确认提交</Btn> -->

    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @func1="tempSave"  @func2="jumpFaceID"/>
    </div>

    <img-preview :show="isShow" :data="currentImgUrl" @callback="setShow"/>
  </div>
</template>
<script>
import towtop from "../../../components/HederTwo";
import ccbUpload from "@/components/ccb-upload";
import nativePlaceModule from "./components/nativePlaceModule";
import mybutton from "../../../components/MyButton";
// 提交 获取  异步提交
import { mapMutations, mapGetters, mapActions } from "vuex";
import areaPicker from "../publicSecurityDepartment/components/areaPciker";
import * as api from "@/api/api.js";
import imgPreview from "@/components/imgPreview";
//州市
const address = {};
// 区县
const address02 = {};
// 派出所
const address03 = {};
// 上传材料
const cailiao_arr = {
  姓名: [
    // {
    //   file_name: "项目变更人的居民身份证（原件）（不满16周岁的除外）",
    //   uploadId: [],
    //   namekey: "hz-10_00_abcd00002"
    // },
    {
      file_name:
        "项目变更相关证明（属在校学生的须提供就读学校学籍管理部门出具的接受其变更姓名的证明；属在国家机关、企事业单位、人民团体的在编干部、职工须提供本单位人事部门出具的接受其变更姓名的证明）",
      uploadId: [],
      namekey: "hz-10_01_abcd00062"
    },
    {
      file_name: "项目变更人的居民户口簿（原件）首页、户主页、本人页",
      uploadId: [],
      namekey: "hz-10_06_abcd00060"
    },
    {
      file_name: "项目变更申请书",
      uploadId: [],
      namekey: "hz-10_00_abcd00075"
    }
  ],
  性别: [
    // {
    //   file_name: "项目变更人的居民身份证（原件）（不满16周岁的除外）",
    //   uploadId: [],
    //   namekey: "hz-10_16_abcd00060"
    // },
    {
      file_name:
        "国内三级医院出具的性别鉴定证明和公安部门出具的公证书，或者司法鉴定部门出具的证明（原件）",
      uploadId: [],
      namekey: "hz-10_03_abcd00065"
    },
    {
      file_name: "项目变更人的居民户口簿（原件）首页、户主页、本人页",
      uploadId: [],
      namekey: "hz-10_00_abcd00066"
    },
    {
      file_name: "项目变更申请书",
      uploadId: [],
      namekey: "hz-10_00_abcd00075"
    }
  ],
  民族: [
    // {
    //   file_name: "项目变更人的居民身份证（原件）（不满16周岁的除外）",
    //   uploadId: [],
    //   namekey: "hz-10_16_abcd00060"
    // },
    {
      file_name: "项目变更人的居民户口簿（原件）首页、户主页、本人页",
      uploadId: [],
      namekey: "hz-10_00_abcd00066"
    },
    {
      file_name: "州（市）民族事务部门出具的准予变更民族成份的证明材料",
      uploadId: [],
      namekey: "hz-10_04_abcd00068"
    },
    //  {name: '变更人与依据人的亲属关系证明（居民户口簿能反映亲属关系的不用再次提供）依据生父（母）的民族成份申请变更的，需提供离婚证；依据继父（母）的民族成份申请变更的，许提供生父（母）与继父（母）的结婚证；依据养父（母）的民族申请变更的，需提供收养证', uploadId: [],namekey:'hz-10_04_abcd00069'},

    {
      file_name: "民族成份依据人的居民户口簿（原件）首页、户主页、本人页",
      uploadId: [],
      namekey: "hz-10_04_abcd00071"
    },
    {
      file_name: "民族成份依据人的居民身份证（原件）",
      uploadId: [],
      namekey: "hz-10_04_abcd00072"
    },
    {
      file_name: "项目变更申请书",
      uploadId: [],
      namekey: "hz-10_00_abcd00075"
    },
    {
      file_name: "变更人与依据人的亲属关系证明（居民户口簿能反映亲属关系的不用再次提供）依据生父（母）的民族成份申请变更的，需提供离婚证；依据继父（母）的民族成份申请变更的，许提供生父（母）与继父（母）的结婚证；依据养父（母）的民族申请变更的，需提供收养证",
      uploadId: [],
      namekey: "hz-10_04_abcd00069"
    }
  ],
  籍贯: [
    {
      file_name: "项目变更人的居民户口簿（原件）首页、户主页、本人页",
      uploadId: [],
      namekey: "hz-10_00_abcd00066"
    },
    {
      file_name: "项目变更申请书",
      uploadId: [],
      namekey: "hz-10_00_abcd00075"
    },
    {
      file_name:
        "祖父母的居民户口簿首页、户主页、本人页（死亡的可在项目变更申请书予以说明）",
      uploadId: [],
      namekey: "hz-10_06_abcd00076"
    },
    {
      file_name: "亲属关系证明（居民户口簿能反映亲属关系的不用再次提供）",
      uploadId: [],
      namekey: "hz-10_06_abcd00077"
    }
  ],
  出生地: [
    {
      file_name: "项目变更人的居民户口簿（原件）首页、户主页、本人页",
      uploadId: [],
      namekey: "hz-10_00_abcd00066"
    },
    {
      file_name: "项目变更申请书",
      uploadId: [],
      namekey: "hz-10_00_abcd00075"
    },
    {
      file_name: "出生医学证明",
      uploadId: [],
      namekey: "hz-10_07_abcd00078"
    }
  ],
  血型: [
    {
      file_name: "项目变更人的居民户口簿（原件）首页、户主页、本人页",
      uploadId: [],
      namekey: "hz-10_00_abcd00066"
    },
    {
      file_name: "项目变更申请书",
      uploadId: [],
      namekey: "hz-10_00_abcd00075"
    },
    {
      file_name: "医院体检（诊断）证明（报告、检验单）",
      uploadId: [],
      namekey: "hz-10_08_abcd00079"
    }
  ],
  服务处所: [
    {
      file_name: "项目变更人的居民户口簿（原件）首页、户主页、本人页",
      uploadId: [],
      namekey: "hz-10_00_abcd00066"
    },
    {
      file_name: "项目变更申请书",
      uploadId: [],
      namekey: "hz-10_00_abcd00075"
    },
    {
      file_name:
        "工商营业执照或劳动合同、用人单位出具的劳动关系证明或者其他能证明就业单位的证明（原件）",
      uploadId: [],
      namekey: "hz-10_09_abcd00080"
    }
  ],
  职业: [
    {
      file_name: "项目变更人的居民户口簿（原件）首页、户主页、本人页",
      uploadId: [],
      namekey: "hz-10_00_abcd00066"
    },
    {
      file_name: "项目变更申请书",
      uploadId: [],
      namekey: "hz-10_00_abcd00075"
    },
    {
      file_name:
        "工商营业执照或劳动合同、用人单位出具的劳动关系证明或者其他能证明就业单位的证明（原件）",
      uploadId: [],
      namekey: "hz-10_09_abcd00080"
    }
  ],
  身高: [
    {
      file_name: "项目变更人的居民户口簿（原件）首页、户主页、本人页",
      uploadId: [],
      namekey: "hz-10_00_abcd00066"
    },
    {
      file_name: "项目变更申请书",
      uploadId: [],
      namekey: "hz-10_00_abcd00075"
    },
    {
      file_name: "医院体检（诊断）证明（报告、检验单）",
      uploadId: [],
      namekey: "hz-10_08_abcd00079"
    }
  ],
  文化程度: [
    {
      file_name: "项目变更人的居民户口簿（原件）首页、户主页、本人页",
      uploadId: [],
      namekey: "hz-10_00_abcd00066"
    },
    {
      file_name: "项目变更申请书",
      uploadId: [],
      namekey: "hz-10_00_abcd00075"
    },
    {
      file_name: "学历证书或教育部门认证的学历证明材料",
      uploadId: [],
      namekey: "hz-10_13_abcd00082"
    }
  ],
  婚姻状况: [
    {
      file_name: "项目变更人的居民户口簿（原件）首页、户主页、本人页",
      uploadId: [],
      namekey: "hz-10_00_abcd00066"
    },
    {
      file_name: "项目变更申请书",
      uploadId: [],
      namekey: "hz-10_00_abcd00075"
    },
    {
      file_name:
        "婚姻状况证明材料（含结婚证、离婚证、人民法院宣告婚姻关系无效的判决书、配偶死亡的可在项目变更申请书中说明）",
      uploadId: [],
      namekey: "hz-10_14_abcd00083"
    }
  ],
  兵役状况: [
    {
      file_name: "项目变更人的居民户口簿（原件）首页、户主页、本人页",
      uploadId: [],
      namekey: "hz-10_00_abcd00066"
    },
    {
      file_name: "项目变更申请书",
      uploadId: [],
      namekey: "hz-10_00_abcd00075"
    },
    {
      file_name: "军人退出现役证件或服预备役证件",
      uploadId: [],
      namekey: "hz-10_15_abcd00084"
    }
  ],
  宗教信仰: [
    {
      file_name: "项目变更人的居民户口簿（原件）首页、户主页、本人页",
      uploadId: [],
      namekey: "hz-10_00_abcd00066"
    },
    {
      file_name: "项目变更申请书",
      uploadId: [],
      namekey: "hz-10_00_abcd00075"
    }
  ]
};
export default {
  data() {
    return {
      btnData: [
        {
          text: "临时保存",
          disabled: false,
          isSure: true,
          click:'func1'
        },
        {
          text: "确认提交",
          disabled: false,
          isSure: true,
          click:'func2'
        },
      ],
      haveNum: 0,
      titlename: "项目变更更正(姓名)",
      isMe: "",
      currentKey: "",
      defaultList: [],
      sqrInfo: "",
      relationcode: "",
      selectednumebr: parseInt(this.$route.query.id),
      labelvalue: "变更后姓名",
      placeholdervlaue: "请输入需要变更的姓名",
      mapleve: {
        leveone: "156",
        levetwo: "530000",
        levethree: "530100",
        levefour: ""
      },
      changeMsgData: [
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
      relationData: [
        {
          flex: 1,
          values: [
            { cmnCdNm: "父", value: "51" },
            { cmnCdNm: "母", value: "52" }
          ],
          showText: "cmnCdNm",
          className: "slot1",
          defaultIndex: 0
        }
      ],
      arr: [
        // {file_name: '项目变更人的居民身份证（原件）（不满16周岁的除外）', uploadId: [],namekey:'hz-10_16_abcd00060'},
        // {
        // file_name: '项目变更相关证明（属在校学生的须提供就读学校学籍管理部门出具的接受其变更姓名的证明；属在国家机关、企事业单位、人民团体的在编干部、职工须提供本单位人事部门出具的接受其变更姓名的证明）',
        // uploadId: [],namekey:'hz-10_01_abcd00062'
        // },
        // {file_name: '项目变更人的居民户口簿（原件）首页、户主页、本人页', uploadId: [],namekey:'hz-10_00_abcd00066'},
        // {file_name: '项目变更申请书', uploadId: [],namekey:'hz-10_00_abcd00075'}
      ],
      arrs: [],
      YNcode: "530000",
      // 州市的下拉
      selectData01: [
        {
          flex: 1,
          values: Object.keys(address),
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
          values: Object.values(address),
          showText: "text",
          className: "slot3",
          textAlign: "center"
        }
      ],
      //区县
      selectData02: [
        {
          flex: 1,
          values: Object.keys(address02),
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
          values: Object.values(address02),
          showText: "text",
          className: "slot3",
          textAlign: "center"
        }
      ],
      // 公安厅
      selectData03: [
        {
          flex: 1,
          values: Object.keys(address03),
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
          values: Object.values(address03),
          showText: "text",
          className: "slot3",
          textAlign: "center"
        }
      ],
      // 变更种类
      options: [
        "姓名",
        "性别",
        "民族",
        "籍贯",
        "出生地",
        "血型",
        "服务处所",
        "职业",
        "身高",
        "文化程度",
        "婚姻状况",
        "兵役状况",
        "宗教信仰"
      ],
      errorChecklist: false,
      fromType: "1",
      isAdult: true,
      sendData: {
        xm: "",
        sfzh: "",
        changeType: "姓名",
        changeMsg: "",
        WhetherAdult: "",
        relation: "",
        changeSelectMsg: ""
      },
      xm: "",
      sfz: "",
      country: {},
      province: {},
      city: {},
      county: {},
      address: "",
      formData: {},
      phone: sessionStorage.getItem("userphone"),
      cardid: sessionStorage.getItem("cardid"),
      name: sessionStorage.getItem("username"),
      matterId: sessionStorage.getItem("matterid"),
      memberId: sessionStorage.getItem("userid"),
      isShow: false,
      currentImgUrl: "",
      uploadFile: [],
      file_oriname: "",
      isDisabled:true,
      zt:false,
      bgzt: "",
      xxdz:"",
      pdxm:"",
      proName:"",
      proSfz:"",
      cmnCd:"",
      cityOne:{},
      cityCounty:{},
      cityPolicestation:{},
      // policestation:{}
      // idNumber:sessionStorage.getItem('cardid')
    };
  },
  created() {
    window.LiveFaceResult = this.LiveFaceResult;
    const _self = this;
    _self.setDefault();
    _self.gitSave();
    _self.getPublicQuery("1011");
  },
  computed: {
    ...mapGetters("publicSecurityStore", [
      "genderParams",
      "mzParams",
      "xueParams",
      "relParams",
      "academicParams",
      "marriedParams",
      "religionParams",
      "soldierParams"
    ]),
    ...mapGetters(["workId"]),

    WorkId () {
      if (this.$route.query.WorkId) {
        return this.$route.query.WorkId
      } else {
        return window.sessionStorage.getItem("WorkId")
      }
    }
  },
  components: {
    mybutton,
    towtop,
    ccbUpload,
    areaPicker,
    nativePlaceModule,
    imgPreview
  },
  mounted() {
    console.log('gat-bgxm')
    this.setCurrentPage(this.$route.name);
    this.selectedItem("", this.$route.query.name);
  },
  watch: {
    "sendData.WhetherAdult"(newQuestion, oldQuestion) {
      const _self = this;
      if (newQuestion == "已满") {
        _self.isDisabled = true;
        if(_self.isDisabled = true && this.zt == true){
            _self.sendData.xm = window.sessionStorage.getItem("username");
            _self.sendData.sfzh = window.sessionStorage.getItem("cardid");
        }
        _self.sendData.xm = window.sessionStorage.getItem("username");
        _self.sendData.sfzh = window.sessionStorage.getItem("cardid");
        _self.sendData.relation = "本人";
        // _self.setDefault();
      } else {
        _self.isDisabled = false;
        _self.sendData.relation = "";
        _self.sendData.xm = "";
        _self.sendData.sfzh = "";
        // this.commonParams("未满");
      }
    }, // 侦听是否成年
    "sendData.changeType"(newQuestion, oldQuestion) {
      const _self = this;
      const fromType1 =
        newQuestion === "姓名" ||
        newQuestion === "服务处所" ||
        newQuestion === "职业" ||
        newQuestion === "身高";
      const fromType2 =
        newQuestion === "性别" ||
        newQuestion === "民族" ||
        newQuestion === "血型" ||
        newQuestion === "文化程度" ||
        newQuestion === "婚姻状况" ||
        newQuestion === "兵役状况" ||
        newQuestion === "宗教信仰";
      const fromType3 = newQuestion === "出生地" || newQuestion === "籍贯";
      const isAdult =
        newQuestion === "服务处所" ||
        newQuestion === "职业" ||
        newQuestion === "婚姻状况" ||
        newQuestion === "兵役状况";
      if (fromType1) {
        _self.fromType = "1";
      } else if (fromType2) {
        _self.fromType = "2";
      } else if (fromType3) {
        _self.fromType = "3";
      }
      if (isAdult) {
        _self.isAdult = false;
      } else {
        _self.isAdult = true;
      }
    } // 侦听变更类型
  },
  methods: {
    ...mapMutations("publicSecurityStore", [
      "setFormData",
      "uploadFiles",
      "setCurrentPage"
    ]),
    ...mapGetters("publicSecurityStore", [
      "formData",
      "uploadFiles",
      "subFormData",
      "currentDoPage"
    ]),
    ...mapActions("publicSecurityStore", [
      "fetchCommonParams"
      ]),
    setShow() {
      this.isShow = false;
    },
    openImg(data) {
      console.log(data);
      this.isShow = true;
      this.currentImgUrl = data;
    },
    open(picker) {
      // if(picker=='relationSelect'){
      //   window.scrollTo(0,0)
      //   $('.hui-popup').css({'z-index':'9999'})
      // }
      this.$refs[picker].open();
      document.activeElement.blur();
      window.scrollTo(0,0)
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    changeMsgConfirms(selectedVal) {
      // console.log(selectedVal)
      const _self = this;
      if (typeof selectedVal[0] === "object") {
        _self.sendData.changeSelectMsg = selectedVal[0];
        _self.cmnCd = selectedVal[0].cmnCd;
      } else {
        _self.sendData.district = selectedVal;
      }
    },
    relationConfirms(selectedVal) {
      console.log(selectedVal);
      const _self = this;
      if (typeof selectedVal[0] === "object") {
        _self.sendData.relation = selectedVal[0].cmnCdNm;
        _self.relationcode = selectedVal[0].value;
        console.log(selectedVal[0].cmnCdNm);
        console.log(_self.sendData.relation);
      } else {
        _self.sendData.relation = selectedVal;
      }
    },
    selectedItem(index, item) {
      //获取被选择的选项
      // item = "姓名"
      this.sendData.changeType = item;
      this.titlename = "项目变更更正(" + item + ")";
      this.labelvalue = "变更后" + item;
      this.placeholdervlaue = "请输入需要变更的" + item;
      this.formatImgArr(item);
      this.commonParams(item);
    }, // 变更种类下拉
    setFrom(key) {
      const _self = this;
    },
    formatImgArr(key) {
      const _self = this;
      let fileNameArr = [];
      for (let i in cailiao_arr) {
        if (i === key) {
          fileNameArr = cailiao_arr[i];
        }
      }
      let imgArr = [];
      for (let i = 0; i < fileNameArr.length; i++) {
        let o = {
          uploadId: []
        };
        o.file_name = fileNameArr[i];
        imgArr.push(fileNameArr[i]);
        // console.log(imgArr)
      }
      this.arr = imgArr;
    }, // 设置提交图片目录
    setHandle(data) {
      if(data.city){
        this.cityOne = data.city;
      }
      if(data.county){
        this.cityCounty = data.county;
      }
      if(data.policestation){
        this.cityPolicestation = data.policestation;
      }
      if(!data.policestation){
          this.policestation = ""
      }
      // console.log(data)
      // this[Object.keys(data)] = data[Object.keys(data)];
      // console.log(this)
    },
    gitSave() {
      let sendData = {
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          form_id: this.matterId + this.memberId
        }
      };
      this.$ajaxRequest("post", "/APPS/matter/temporaryData/echo", sendData,false,false,false,'1')
        .then(res => {
          // console.log(res)
        })
        .catch(error => {
          // console.log(error)
        });
    },
    tempSave() {
      const _self = this;
      let form_id = this.matterId + this.memberId;
      // 为每个namekey加上workid
      // for(let i in cailiao_arr) {
      //   for(let j in cailiao_arr[i]) {
      //     cailiao_arr[i][j].namekey = sessionStorage.getItem('WorkId') +  '_' + cailiao_arr[i][j].namekey
      //   }
      // }
      // console.log(cailiao_arr)
      // let form_id = "GAT" + new Date().getTime();
      // /APPS/matter/temporaryData/insert保存手机数据的方法
      let sendData = {
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          form_id: form_id,
          message: {
            city: _self.city,
            county: _self.county,
            policestation: _self.policestation,
            xm: _self.sendData.xm,
            sfzh: _self.sendData.shzh,
            changeType: _self.sendData.changeType,
            changeMsg: "",
            WhetherAdult: [],
            relation: "",
            imgUrl: _self.arrs
          }
        }
      };

      this.$ajaxRequest("post","/APPS/matter/temporaryData/insert",sendData,false,false,false,'1').then(res => {
        // console.log(res)
        this.$toast(res.success);
      });
    },
    jumpFaceID() {
      let _this = this;
      if (!this.cityPolicestation.orgCode) {
        this.$toast("请选择派出所");
        return;
      }
      // if(this.$route.query.labelIndex == null || this.$route.query.labelIndex == "null" || this.$route.query.labelIndex == " "){
      //   this.$toast('请选择变更种类')
      //   return
      // }
      if(_this.fromType === "1"){
        if(!_this.sendData.changeMsg){
          _this.$toast('请选择变更后'+_this.bgzt)
          return
        }
        if(!yz()) return
      }
      if(_this.fromType === "2"){
        if(!_this.sendData.changeSelectMsg.cmnCdNm){
          _this.$toast('请选择变更后'+_this.bgzt)
          return
        }
        if(!yz()) return
      }
      if(_this.fromType === "3"){
        if(!_this.country.cmnCdNm){
            _this.$toast('请选择变更后'+_this.bgzt);
           return
        }else{
          if(_this.country.cmnCdNm == "中国"){
              if(!_this.province.regnNm){
                _this.$toast("请选择变更后省");
                return
              }
              if(!_this.city.regnNm){
                _this.$toast("请选择变更后市");
                return
              }
              if(!_this.county.regnNm){
                _this.$toast("请选择变更后县/区");
                return
              }
              if(_this.xxdz == ""){
                _this.$toast("请填写详细地址");
                return
              }
           }
        }
      }
      // 未满18岁输入验证
      function yz(){
        if(_this.sendData.WhetherAdult == "未满"){
          let cname = _this.proName;
          let names = /^[\u4E00-\u9FA5A-Za-z]+$/;
          if (!names.test(cname)) {
            _this.$toast("姓名只能输入中文和英文");
            return false;
          }
          // let cidNumber = (_this.idNumber!='null' &&_this.idNumber!=undefined && _this.idNumber!= '')?_this.idNumber: _this.sfz
          let cidNumber = _this.proSfz;
          let sidNumberes = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
          if(!sidNumberes.test(cidNumber)){
            _this.$toast("身份证输入不合法")
            return false
          }
        }
        return true
      }
      if (!_this.sendData.relation) {
        _this.$toast("请选择与申请人关系");
        return;
      }
      let arry = [];
      for (let item in _this.uploadData) {
        _this.uploadData[item].map(subItem => {
          arry.push(subItem);
        });
      }
      console.log(_this.arr);
      for (let ars in _this.arr) {
        if (_this.arr[ars].uploadId.length <= 0) {
          _this.$toast(_this.arr[ars].file_name + "材料不能空！");
          return false;
        }
      }
      let data = {
        city: _this.city,
        county: _this.county,
        policestation: _this.policestation,
        name:
          _this.name != "null" && _this.name != "" ? _this.name : _this.sendData.xm,
        idNumber:
          _this.idNumber != "null" && _this.idNumber != ""
            ? _this.idNumber
            : _this.sendData.sfzh,
        relative: _this.relative,
        fileInfo: arry
      };
      _this.setFormData(data);
      // this.LiveFaceResult('&username=测试&cardid=&userphone=13111328671')
      // _this.send()
      _this.isAndroid_ios();
    },
    isAndroid_ios() {
      let sendata = {
        isIdcard: "0"
      };
      this.$CallModule("liveFace", sendata);
      // this.LiveFaceResult('&username=石献雷&cardid=130433200708042715&userphone=13111328671')
    },
    setDefault() {
      const _self = this;
      let username = sessionStorage.getItem("username");
      let cardid = sessionStorage.getItem("cardid");
      // _self.sendData.xm = this.$NoNull(username)
      _self.sendData.xm = this.$NoNull(username);
      _self.sendData.sfzh = this.$NoNull(cardid);
      let nowYear = new Date().getFullYear();
      if (nowYear - parseInt(_self.sendData.sfzh.slice(6, 10)) > 18) {
        _self.zt = true;
        _self.sendData.relation = "本人";
        _self.relationcode = "01";
        _self.sendData.WhetherAdult = "已满";
        this.sqrInfo = {
          sqr_sfz: window.sessionStorage.getItem("cardid"),
          sqr_xm: window.sessionStorage.getItem("username")
        };
      } else {
        this.zt = false;
        // _self.sendData.WhetherAdult = "未满";
        _self.sendData.WhetherAdult = "已满";
        this.sqrInfo = {
          sqr_sfz: this.sendData.sfz,
          sqr_xm: this.sendData.xm
        };
      }
    }, // 设置页面默认值
    handleRes(data) {
      // this.file_oriname = data.oldName;

      // console.log(data)
      let type = data.oldName;
      type = type.slice(type.lastIndexOf("."));
      console.log(data);
      const _self = this;
      _self.flag = true;
      _self.arr[data.index].uploadId.push(data.fileUrl);
      _self.flag = true;
      //   const fileParam = {
      //     file_name: data.ObjNm.slice(0,18),
      //     file_path: 'GSP_PRIVATE'
      //  }
      let fileParam = {
        matter_file_id: "",
        file_path: "GSP_PRIVATE",
        file_type: "",
        file_size: "",
        file_oriname: _self.file_oriname + type,
        file_name: data.ObjNm,
        file_desc: data.uploadId,
        dzzz_file_id: "",
        dzzz_file_path: ""
      };
      _self.arrs.push(fileParam);

      console.log("---------------");
      // console.log(this.arr)
    },

    setnamekey(index) {
      // console.log(this.modelParams[index])
      // let haveNum = 0

      // if (this.arr[index] && this.arr[index].uploadId) {
      //   haveNum = this.arr[index].uploadId.length + 1
      // } else {
      //   haveNum = 1
      // }
      this.haveNum++;
      this.currentKey = `${this.WorkId}_${
        this.arr[index].namekey
      }_${this.haveNum}`;
      this.file_oriname = this.currentKey;
      console.log(this.currentKey);
    },

    // 添加图片上传
    handleRemove(index, subindex, uploadId) {
      // 删除图片上传
      // this.flag = false;
      const _self = this;
      _self.arr[index].uploadId.splice(subindex, 1);
    }, // 删除图片
    handleMaxSize(file) {
      alert("文件 " + file.name + " 太大，不能超过 2M。");
    },
    getPublicQuery(paretnId, dataKey) {
      const _self = this;
      /* 1011  性别 1012  民族 1013  国籍 1014  血型
       1015  学历 1016  婚姻状况 1017  兵役状况 1018  宗教信仰
       1019  家庭关系 1020  暂住原因 1021  申领原因 */
      let sendData = {
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          parentId: paretnId
        }
      };
      _self.$ajaxRequest("post", "/gsp/mng19019", sendData).then(res => {
        // console.log(res)
      });
    },

    commonParams(data) {
      // 提交验证提示语储存
      this.bgzt = data;
      // 切换种类清楚原有值
      this.country.cmnCdNm = "";
      this.province.cmnCdNm = "";
      this.city.cmnCdNm = "";
      this.county.regnNm = "";
      this.xxdz = "";
      this.proSfz = "";
      this.proName = "";
      if(this.sendData.changeSelectMsg.cmnCdNm){
        this.sendData.changeSelectMsg.cmnCdNm = "";
      }

      // ['姓名', '性别', '民族', '籍贯', '出生地', '血型', '服务处所', '职业', '身高', '文化程度', '婚姻状况', '兵役状况', '宗教信仰'],
      // 1011  性别
      // 1012  民族
      // 1013  国籍
      // 1014  血型
      // 1015  学历
      // 1016  婚姻状况
      // 1017  兵役状况
      // 1018  宗教信仰
      // 1019  家庭关系
      // 1020  暂住原因
      // 1021  申领原因
      switch (data) {
        case "性别":
          this.fetchCommonParams("1011");
          this.changeMsgData = this.genderParams;
          break;
        case "民族":
          this.fetchCommonParams("1012");
          this.changeMsgData = this.mzParams;
          break;
        case "血型":
          this.fetchCommonParams("1014");
          this.changeMsgData = this.xueParams;
          break;
        case "文化程度":
          this.fetchCommonParams("1015");
          this.changeMsgData = this.academicParams;
          break;
        case "婚姻状况":
          this.fetchCommonParams("1016");
          this.changeMsgData = this.marriedParams;
          break;
        case "兵役状况":
          this.fetchCommonParams("1017");
          this.changeMsgData = this.soldierParams;
          break;
        case "宗教信仰":
          this.fetchCommonParams("1018");
          this.changeMsgData = this.religionParams;
          break;
        case "籍贯":
          this.fetchCommonParams("1013");
          this.nationnalityParams = this.nationnalityParams;
          break;
        case "出生地":
          this.fetchCommonParams("1013");
          this.nationnalityParams = this.nationnalityParams;
          break;
        case "未满":
          this.fetchCommonParams("1019");
          //console.log(this.relParams)
          //this.relationData[0].values = this.relParams[0].values
          break;
        default:
          break;
      }
    },
    backHandle(data) {
      if(data.address){
        this.xxdz = data.address;
      }
      this[Object.keys(data)] = data[Object.keys(data)];
      if (data.country) {
        this.mapleve.leveone = data.country.cmnCd;
        this.mapleve.levetwo = "";
        this.mapleve.levethree = "";
      }
      if (data.province) {
        this.mapleve.levetwo = data.province.regnCode;
        this.mapleve.levethree = "";
      }
      if (data.city) {
        this.mapleve.levethree = data.city.regnCode;
      }
      if (data.county) {
        this.mapleve.levefour = data.county.regnCode;
      }
    },
    radiosHandle(data) {
      // if (data == "未满") {
      //   this.sqrInfo = {
      //     sqr_sfz:  this.proSfz,
      //     sqr_xm:this.proName
      //   };
      // } else {
      //   this.sqrInfo = {
      //     sqr_sfz: window.sessionStorage.getItem("cardid"),
      //     sqr_xm: window.sessionStorage.getItem("username")
      //   };
      // }
    },

    filterInfo() {
      // ['姓名', '性别', '民族', '籍贯', '出生地', '血型', '服务处所', '职业', '身高', '文化程度', '婚姻状况', '兵役状况', '宗教信仰'],
      // console.log(this.sendData.changeType)
      switch (this.sendData.changeType) {
        case "姓名":
          return (this.formData = {
            bglb: "0",
            Is_over: this.sendData.WhetherAdult,
            xm: this.sendData.changeMsg
          });
          break;
        case "性别":
          return (this.formData = {
            bglb: "1",
            Is_over: this.sendData.WhetherAdult,
            xbdm: this.sendData.changeSelectMsg.cmnCd
          });
          break;
        case "民族":
          return (this.formData = {
            bglb: "2",
            Is_over: this.sendData.WhetherAdult,
            xbdm: this.sendData.changeSelectMsg.cmnCd
          });
          break;
        case "籍贯":
          return (this.formData = {
            bglb: "4",
            jg_gjhdqdm: this.mapleve.leveone,
            jg_shendm: this.mapleve.levetwo,
            jg_shidm: this.mapleve.levethree,
            jg_qudm: this.mapleve.levefour,
            jg_qhnxxdz: this.address
          });

          break;
        case "出生地":
          return (this.formData = {
            bglb: "3",
            csd_gjhdqdm: this.mapleve.leveone,
            csd_shendm: this.mapleve.levetwo,
            csd_shidm: this.mapleve.levethree,
            csd_qudm: this.mapleve.levefour,
            csd_qhnxxdz: this.address
          });
          break;
        case "血型":
          return (this.formData = {
            bglb: "5",
            xxdm: this.sendData.changeSelectMsg.cmnCd
          });
          break;
        case "服务处所":
          return (this.formData = {
            bglb: "6",
            cyzk_dwmc: this.sendData.changeMsg
          });
          break;
        case "职业":
          return (this.formData = {
            bglb: "7",
            cyzk_zy: this.sendData.changeMsg
          });
          break;
        case "身高":
          return (this.formData = {
            bglb: "8",
            sg: this.sendData.changeMsg
          });
          break;
        case "文化程度":
          return (this.formData = {
            bglb: "9",
            xldm: this.sendData.cmnCd
          });
          break;
        case "婚姻状况":
          return (this.formData = {
            bglb: "10",
            hyzkdm: this.sendData.cmnCd
          });
          break;
        case "兵役状况":
          return (this.formData = {
            bglb: "11",
            byzkdm: this.sendData.cmnCd
          });
          break;
        case "宗教信仰":
          return (this.formData = {
            bglb: "12",
            zjxydm: this.sendData.cmnCd
          });
          break;
        default:
          break;
      }
    },
    LiveFaceResult(senobject) {
      let info = this.filterInfo();
      if(this.sendData.WhetherAdult == "未满"){
          info.Is_over = "N";
          this.sqrInfo = {
            sqr_sfz:this.proSfz,
            sqr_xm: this.proName
          };
      }else{
          info.Is_over = "Y";
          this.sqrInfo = {
            sqr_sfz: window.sessionStorage.getItem("cardid"),
            sqr_xm: window.sessionStorage.getItem("username")
          };
      }
      if (typeof senobject == "string") {
        this.$CallModule("StoragesetItem", senobject);
      } else {
        this.$CallModule("StoragesetItem", senobject);
      }
      //let tatus = JSON.stringify(info);
      let sclarr = [];
      sclarr.push(info);
      let subObj = {
        zsqh: this.cityOne.orgCode,
        hjdz_ssxqdm: this.cityCounty.orgCode,
        sqd_gajgdwdm: this.cityPolicestation.orgCode,
        sqr_phone: window.sessionStorage.getItem("userphone"),
        sqr_xm: window.sessionStorage.getItem("username"),
        sqr_sfz: window.sessionStorage.getItem("cardid"),
        blr_xm: this.sqrInfo.sqr_xm,
        blr_sfz: this.sqrInfo.sqr_sfz,
        ysqrgxdm: this.relationcode,
        bgxx: JSON.stringify(sclarr)
      };
      let obj = {
        applyType: "1",
        guid: "",
        isMailMertal: "N",
        netProjectType: "BST",
        tskSource: "HZ",
        deptId: subObj.sqd_gajgdwdm,
        accountId: this.phone,
        idNum: this.cardid,
        sqr: this.name,
        hzYwlx: "hz_mat_xmbg",
        mainTableName: "oi_hz_xmbg",
        matSubType: "",
        matNum: "hz-10",
        work_id: this.WorkId,
        formInfo: subObj,
        bglb: info.bglb,
        subTableNames: [],
        subFormInfo: []
      };

      let data = {
        txnCommCom: {},
        txnBodyCom: {
          txn_itt_chnl_id: "0",
          txn_itt_chnl_type: "1",
          tenant: "53000000000",
          matter_id: this.matterId,
          // "work_id": this.workId,
          work_id: this.WorkId,
          member_id: this.memberId,
          json_content: obj
        }
      };
      debugger
      let files = {
        matterId: this.matterId,
        workId: this.WorkId,
        // "workId": this.workId,
        memberId: this.memberId,
        files: this.arrs
      };
      api.projectChange(data);
      setTimeout(
        () => {
          api.sumbitUploadData(files);
        },
        500,
        this
      );
      setTimeout(
        () => {
          this.$router.push("/resultPage");
        },
        1000,
        this
      );
    },
    clear(data){
      if(data== "city"){
        this.city = "";
      }else if(data== "county"){
        this.county = "";
      }else{
        this.policestation = "";
      }
    }
  }
};
</script>
<style>
.gat_bgxm .example-upload_item {
  width: 1.6rem;
  height: 1.6rem;
  float: left;
  margin: 0.2rem 0.1rem 0;
  position: relative;
}
.gat_bgxm .example-upload_item img {
  width: 1.6rem;
  height: 1.6rem;
}
.gat_bgxm .example-upload_item span {
  position: absolute;
  top: 0;
  right: 0;
}
.gat_bgxm .imgList:after {
  content: "";
  display: block;
  clear: both;
}
.gat_bgxm .RadiosGongAn {
  height: 1rem;
  border-bottom: 0.01rem solid #ccc;
}
.gat_bgxm .RadiosGongAn .hui-radios {
  padding: 0 0.2rem;
}
.gat_bgxm .RadiosGongAn .hui-radios:after {
  content: "";
  display: block;
  clear: both;
}
.gat_bgxm .RadiosGongAn .hui-radios_titleBox {
  float: left;
  width: 3rem;
  text-align: left;
}
.gat_bgxm .RadiosGongAn .hui-radios_text {
  line-height: 1rem;
}
.gat_bgxm .RadiosGongAn .hui-radios_itemWrapper {
  padding: 0;
}
.gat_bgxm .RadiosGongAn .hui-radios_itemWrapper {
  float: right;
  line-height: 1rem;
}
.gat_bgxm .RadiosGongAn .hui-radios_itemWrapper:after {
  content: "";
  display: block;
  clear: both;
}
.gat_bgxm .RadiosGongAn .hui-radios_item {
  float: left;
  font-size: 0.28rem;
}
.gat_bgxm .hui-field_core {
  font-size: 0.28rem;
}
.gat_bgxm .hui-field_title {
  font-size: 0.28rem;
  width: 3rem;
}
.gat_bgxm .hui-radios_text {
  font-size: 0.28rem;
}
.gat_bgxm .hui-extendSelect {
  font-size: 0.28rem;
}
.gat_bgxm .hui-extendSelect_placeHolder,
.hui-extendSelect_value {
  float: none;
}
.gat_bgxm .hui-field {
  height: 1rem;
  line-height: 1rem;
  padding: 0 0.2rem;
}
.gat_bgxm .header1,
.header2 {
  width: 90%;
  margin: 0 auto;
  height: 0.6rem;
  font-size: 0.24rem;
  line-height: 0.4rem;
  text-align: left;
  color: #999;
}
.gat_bgxm .header2 {
  line-height: 0.6rem;
}
.gat_bgxm .hui-extendSelect_itemBox {
  border: none;
  line-height: 0.97rem;
}
.gat_bgxm .hui-extendSelect_item {
  line-height: 0.8rem;
  padding: 0;
}
.gat_bgxm .bgzl {
  display: inline-block;
  font-size: 0.28rem;
  float: left;
}
.gat_bgxm .hui-extendSelect {
  display: inline-block;
  float: right;
}
.gat_bgxm .example-extendSelect {
  height: 1rem;
  line-height: 1rem;
  border-bottom: 0.01rem solid #ccc;
  background-color: #fff;
  padding: 0 0.2rem 0 0.2rem;
}

.gat_bgxm .bgr_person ul {
  width: 100%;
  background-color: #fff;
}
.gat_bgxm .bgr_person ul li {
  padding: 0 0.2rem;
  font-size: 0.28rem;
  height: 1rem;
  line-height: 1rem;
  border-bottom: 0.01rem solid #ccc;
}
.gat_bgxm .bgr_person span {
  display: inline-block;
  width: 49%;
  text-align: left;
}
.gat_bgxm .bgr_person .spn2 {
  text-align: right;
}
.gat_bgxm .example-upload {
  background-color: #fff;
}
.gat_bgxm .example-upload_formItem {
  font-size: 0.28rem;
  width: 90%;
  padding: 0.25rem 0 0.45rem 0;
  margin: 0 auto;
  text-align: left;
  border-bottom: 0.01rem solid #ccc;
}
.gat_bgxm .upl3 .example-upload_formItem {
  border: none;
}
.gat_bgxm .example-upload_btn {
  display: block;
  margin-top: 0.2rem;
  width: 1.6rem;
  height: 1.6rem;
  background-color: #f5f5f5;
  font-size: 1rem;
  text-align: center;
  line-height: 1.6rem;
  color: #ccc;
}
.gat_bgxm .example-upload_formLabel {
  font-size: 0.28rem;
  font-weight: 700;
}
.gat_bgxm .blue {
  display: inline-block;
  width: 0.1rem;
  height: 0.24rem;
  background-color: #2d7ffc;
  margin-right: 0.15rem;
}

.gat_bgxm .bt2 {
  background-color: #08c173 !important;
  border: 0.01rem solid #08c173 !important;
}

.gat_bgxm .hui-btn.is-block {
  font-weight: 700;
  display: inline-block;
  width: 2.6rem;
  height: 0.9rem;
  margin: 0.6rem 0.35rem;
  background-color: #2d7ffc;
  font-size: 0.32rem;
  color: #fff;
}
.gat_bgxm .hui-checklist_star,
.gat_bgxm .hui-field_star {
  display: block;
}
.gat_bgxm .hui-field_main{
  height: 1rem;
  line-height: 1rem;
}
.gat_bgxm .hui-field_main{
  height: 1rem;
  line-height: 1rem;
}
.gat_bgxm .hui-field_value{
 height: 1rem;
  line-height: 1rem;
}
.gat_bgxm .hui-popup{z-index: 9999 !important;}
</style>
<style  scoped lang="less">
.gat_bgxm {
  .ipt2 {
    .hui-field_title {
      width: 3rem;
    }
  }
}
.hui-checklist_item,
.hui-checklist_titleBox,
.hui-checklist_itemWrapper {
  display: inline-block;
}
.hui-checklist {
  height: 1rem;
  line-height: 0.5rem;
  font-size: 0.28rem;
  border-bottom: 0.01rem solid #ccc;
  padding: 0.15rem 0.15rem;
}
.hui-checklist_desc {
  display: none;
}
.hui-checklist_titleBox {
  width: 40%;
  float: left;
}
.hui-checklist_itemWrapper {
  float: right;
}
.hui-checklist_item {
  margin: 0;
}
.hui-checklist_title {
  line-height: 0.5rem;
}
.ipt3 .hui-field_title {
  width: 3rem;
  padding: 0 0.2rem;
}
.ipt3 .hui-field_value {
  padding-right: 0.15rem;
}
.gat_bgxm .hui-extendSelect{
  width: 110px !important;
}
.middleone{
  position:relative;
}
.middletwo{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: absolute;
  top:35%;
  left:0;
}
.middlethree{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: relative;
  top: 5px;
}
.middlefour{
  position:relative;
}
.middlefive{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: absolute;
  top:38%;
  left:0;
}
.middlethree{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: relative;
  top: 5px;
  left:0;
}
</style>

