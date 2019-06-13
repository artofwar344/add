<template>
  <div class="zzls-two">
    <towtop :name="titlename"/>
    <div class="jiaceng" v-show="zj1">
      <div class="content">
        <h2>温馨提示</h2>
        <p>非直属州市司法局律所执业律师请选择相应区县司法局。</p>
        <div class="qr_btn" @click="qr1_btn">确认</div>
      </div>
    </div>
    <div class="jiaceng" v-show="zj2">
      <div class="content">
        <h2>温馨提示</h2>
        <p>填写现工作单位，非执业机构。</p>
        <div class="qr_btn" @click="qr2_btn">确认</div>
      </div>
    </div>
    <div class="jiaceng" v-show="zj3">
      <div class="content">
        <h2>温馨提示</h2>
        <p>提示：请输入律所简称或全称查询律所。其中分所输入格式为XX（地点），如某某（昆明）;总所输入格式为律所全称，如云南某某律师事务所。</p>
        <div class="qr_btn" @click="zj3_btn">确认</div>
      </div>
    </div>
    <div class="jiaceng" v-show="zj4">
      <div class="content">
        <h2>温馨提示</h2>
        <p>非直属州市司法局律所执业律师请选择相应区县司法局。</p>
        <div class="qr_btn" @click="qr4_btn">确认</div>
      </div>
    </div>

    <div v-if="this.choseType !== '专职律师' && this.choseType !== '兼职律师'">
      <div class="line1">
          <span class="littlestarjin">*</span>
          <span class="label">主管司法行政机关 </span>
          <span @click="zj4_btn" class="icon1">
            <Icon type="advisory" size="18" color="#FFA500"></Icon>
          </span>
        <div class="right">
          <input
            type="text"
            :value="topJud.c_name"
            placeholder="请选择一级主管司法行政机关"
            @click="open('pickerselect03')"
          >
          <Icon type="arrow-right" class="arrow-right" size="16" color="#999999"></Icon>
        </div>
      </div>
      <div class="line1">
        <!-- <span class="littlestarjin">*</span> -->
        <!-- <span class="label">主管司法行政机关</span> -->
        <div class="right">
          <input
            type="text"
            :value="pJud.c_name"
            placeholder="请选择二级主管司法行政机关"
            @click="open('pickerselect04')"
          >
          <Icon type="arrow-right" class="arrow-right" size="16" color="#999999"></Icon>
        </div>
      </div>

      <div class="line1">
        <div class="right">
          <input
            type="text"
            :value="subJud.c_name"
            placeholder="请选择三级主管司法行政机关"
            @click="open('pickerselect05')"
            style="margin-left: 0.2rem"
          >
          <Icon type="arrow-right" class="arrow-right" size="16" color="#999999"></Icon>
        </div>
      </div>
      <HuiselectNew
        ref="pickerselect03"
        position="bottom"
        :dataslots="topJudParams"
        class="example-select_item"
        @confirms="selectConfirm0"
        @reset="clearJud(['subJud', 'pJud', 'topJud'])"
      ></HuiselectNew>

      <HuiselectNew
        ref="pickerselect04"
        position="bottom"
        :dataslots="PjudParams"
        class="example-select_item"
        @confirms="selectConfirm1"
        @reset="clearJud(['subJud', 'pJud'])"
      ></HuiselectNew>

      <HuiselectNew
        ref="pickerselect05"
        position="bottom"
        :dataslots="subJudParams"
        class="example-select_item"
        @confirms="selectConfirm2"
        @reset="clearJud(['subJud'])"
      ></HuiselectNew>
    </div>

    <div class="line1 zhi" v-else>
      <span class="littlestarjin">*</span>
      <span>执业机构</span>
      <span @click="zj3_btn" class="icon">
        <Icon type="advisory" size="18" color="#FFA500"></Icon>
      </span>
      <input type="text" v-model="zyName" placeholder="手动输入，再点击查询图标核验">
      <img @click="searchHandle" :src="require('../../../assets/images/sfImgae/search.png')" alt>
    </div>

    <div class="line1" v-show="this.choseType !== '专职律师'">
      <span class="littlestarjin">*</span>
      <span>工作单位</span>
      <!-- 工作单位的注解 -->
      <span @click="zj2_btn" class="icon">
        <Icon type="advisory" size="18" color="#FFA500"></Icon>
      </span>
      <input type="text" placeholder="手动输入，不超过32个字" v-model="danwei">
    </div>

    <div class="experice">
      <span class="littlestarjinjin">*</span>
      <p class="labelstar">执业经历</p>
      <textarea class="textarea" v-model="exper" :rows="5" placeholder="手动输入，300字以内"></textarea>
    </div>

    <!-- <p class="btn" @click="tozzls_three">下一步</p> -->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="tozzls_three"/>
    </div>
  </div>
</template>
<script>
import towtop from "../../../components/HederTwo.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";
import * as api from "../../../api/api.js";
import mybutton from "../../../components/MyButton";

export default {
  data() {
    return {
      btnData: [
        {
          text: "下一步",
          disabled: false,
          isSure: true
        }
      ],
      titlename: this.$store.state.zzlsStore.currentpage + "变更执业类别许可",
      confirmValSelect01: ["请选择"],
      zyName: "",
      topJud: "",
      pJud: "",
      subJud: "",
      jigou: "",
      exper: "",
      danwei: "",
      zj1: false,
      zj2: false,
      zj3: false,
      zj4: false,
      zyOrg: "",
      defaultValue: [
        {
          name: "专职律师",
          code: "01"
        },
        {
          name: "兼职律师",
          code: "02"
        },
        {
          name: "法援律师",
          code: "09"
        },
        {
          name: "公司律师",
          code: "04"
        },
        {
          name: "公职律师",
          code: "03"
        }
      ]
    };
  },
  created() {
    this.exper = this.userInfo.c_zygl !== 'null' ? this.userInfo.c_zygl : "";
    this.fetchJudicialParams({ level: "0", pid: "" });
  },
  destroyed() {
    this.setJudParams({ code: "0", data: [] });
    this.setJudParams({ code: "1", data: [] });
    this.setJudParams({ code: "2", data: [] });
  },
  components: {
    mybutton,
    towtop
  },
  computed: {
    ...mapGetters("zzlsStore", [
      "choseType",
      "currentpage",
      "userInfo",
      "topJudParams",
      "PjudParams",
      "subJudParams",
      "userInfo"
    ]),
    ...mapGetters(["workId"])
  },
  methods: {
    ...mapMutations("zzlsStore", ["setFormData", "setJudParams"]),
    ...mapActions("zzlsStore", ["fetchJudicialParams"]),
    open(picker) {
      this.$refs[picker].open();
      document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    selectConfirm0(selectedVal) {
      this.topJud = selectedVal[0];

      let id = this.topJud.c_ld.replace(/(^\s*)|(\s*$)/g, "");
      this.fetchJudicialParams({ level: "1", pid: id });
    },
    selectConfirm1(selectedVal) {
      this.pJud = selectedVal[0];

      let id = this.pJud.c_ld.replace(/(^\s*)|(\s*$)/g, "");
      this.fetchJudicialParams({ level: "2", pid: id });

      // 清除之前选过的
      if (this.subJud) {
        this.clearJud("subJud");
      }
    },
    selectConfirm2(selectedVal) {
      this.subJud = selectedVal[0];
    },
    //文本域
    handleTextareaVal(val) {
      this.exper = val;
    },
    // 注释一按钮打开
    zj1_btn() {
      this.zj1 = !this.zj1;
    },
    // 注释一打开之后关闭
    qr1_btn() {
      this.zj1 = !this.zj1;
    },
    // 注释二按钮打开
    zj2_btn() {
      this.zj2 = !this.zj2;
    },
    zj3_btn() {
      this.zj3 = !this.zj3;
    },
    // 注释2打开之后关闭
    qr2_btn() {
      this.zj2 = !this.zj2;
    },
    zj4_btn() {
      this.zj4 = !this.zj4
    },
    qr4_btn(){
      this.zj4 = !this.zj4
    },
    async tozzls_three() {
      let data = {};
      let obj = {};

      if (["法援律师", "公职律师", "公司律师"].includes(this.choseType)) {
        // this.jigou = this.subJud.c_ld ? this.subJud.c_ld : this.pJud.c_ld
        if (this.subJud.c_ld) {
          this.jigou = this.subJud.c_ld;
        } else if (this.pJud.c_ld) {
          this.jigou = this.pJud.c_ld;
        } else {
          this.jigou = this.topJud.c_ld;
        }

        if (!this.jigou) {
          this.$toast("请选择主管司法行政机关");
          return;
        }

        if (!this.danwei.match(/^.{1,32}$/g)) {
          this.$toast("请填写工作单位，32个字以内！") ;
          return;
        }

        if (!(this.exper.length>0&&this.exper.length<=300)) {
          this.$toast("请填写执业经历，300个字以内！");
          return;
        }

        data = {
          spvs_lgl_admn_ahr: this.jigou,
          wrk_unit_nm: this.danwei,
          prct_exprnc: this.exper
        };
      }

      if (["专职律师", "兼职律师"].includes(this.choseType)) {
        // 32个汉字内
        await api
          .zyjgVerify(this.zyName)
          .then(data => {
            this.zyOrg = data.obj.c_bh;
            this.zyName = data.obj.c_zwmc;
            console.log(data);
          })
          .catch(e => {
            this.zyOrg = ''
            this.$toast("请输入更准确的执业机构内容！");
            return
          });

        if (!this.zyOrg) {
          this.$toast("请输入更准确的执业机构内容！");
          return;
        }

        if (!(this.exper.length>0&&this.exper.length<=300)) {
          this.$toast('请填写执业经历，300个字以内！')
          return
        }
        data = {
          prct_inst: this.zyOrg,
          prct_inst_nm: this.zyName,
          prct_exprnc: this.exper,
        };
      }

      if (this.choseType === "兼职律师") {
        if (!this.danwei.match(/^.{1,32}$/g)) {
          this.$toast("请填写工作单位，32个字以内！");
          return;
        }
        data = Object.assign({}, { prtm_unit_nm: this.danwei }, data);
      }

      let code = "";
      let vm = this;

      this.defaultValue.map(item => {
        if (item.name === vm.choseType) {
          code = item.code;
        }
      });

      obj = Object.assign(
        {},
        {
          work_id: this.workId,
          afmd_prct_cgy: code,
          lwr_id: this.userInfo.c_bh,
          mdf_bfr_prct_cgy: this.userInfo.c_zylbc
        },
        data
      );
      console.log(typeof obj)
      this.setFormData(obj);
      window.sessionStorage.setItem('zzlsobj',JSON.stringify(obj))
      this.$router.push({ name: "zzlsThree" });
    },

    searchHandle() {
      api
        .zyjgVerify(this.zyName)
        .then(data => {
          this.zyOrg = data.obj.c_bh;
          this.zyName = data.obj.c_zwmc;
          // console.log(data)
        })
        .catch(e => {
          this.$toast("请输入更准确的内容！");
        });
    },

    clearJud(data) {
      data.map(item => {

        this[item] = {
          c_ld: "",
          c_name: ""
        };
      })
    }
  }
};
</script>

<style>
  .hui-btn.is-block {
    font-weight: 700;
    display: inline-block;
    width: 5.9rem;
    height: 0.9rem;
    margin: 1rem 0.35rem;
    background-color: #2d7ffc;
    font-size: 0.32rem;
    color: #fff;
  }
  .hui-field_main .hui-field_star {
    display: none;
  }
  .hui-field_textarea .hui-field_title {
    padding-top: 0.4rem;
  }
  .jiaceng {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 12;
  }
  .jiaceng .content {
    width: 75%;
    margin: 50% auto;
    background-color: #fff;
    padding-top: 0.4rem;
    padding-bottom: 0.3rem;
    border-radius: 0.2rem;
  }
  .jiaceng h2 {
    margin: 0.2rem auto;
    font-size: 0.36rem;
    font-weight: 700;
  }
  .jiaceng p {
    width: 70%;
    text-align: left;
    margin: 0.6rem auto;
    font-size: 0.28rem;
    color: #a3a3a3;
  }
  .jiaceng .qr_btn {
    padding-top: 0.3rem;
    border-top: 0.01rem solid #ccc;
    color: #2d7ffc;
    font-size: 0.32rem;
  }
</style>


<style lang="less">
  .zzls-two {
    .hui-field {
      height: 4rem;
      padding: 0 5%;
    }
    .hui-field_value {
      padding-top: 20px;
    }

    .zhi {
      display: flex;
      justify-content: space-between;
      align-items: center;

      > img {
        height: 0.36rem;
      }

      > input {
        flex: 1;
        padding: 0 0.2rem;
      }
    }

    // .line1 {
    //   display: flex;
    //   justify-content: flex-end;
    //   .right {
    //     flex: 1;
    //     text-align: right;

    //     input {width: 87%}
    //   }
    // }
    // .line2 input {
    //   width: 67%;
    // }

    .line1 {
      width: 100%;
      display: flex;
      margin: 0 auto;
      padding: 0 5% 0 5%;
      height: 1rem;
      line-height: 1rem;
      font-size: 0.28rem;
      text-align: left;
      border-bottom: 0.01rem solid #ccc;
      box-sizing: border-box;
      background-color: #fff;
      position: relative;

      .right {
        display: flex;
        flex: 1;
      }

      .arrow-right {
        line-height: 1rem;
      }

      .icon {
        display: inline-block;
        position: relative;
        top: 2px;
        left: 2px;
        margin: 0 10px 0 2px;
      }
    }
    .line1 input {
      border: none;
      flex: 1;
      text-align: right;
    }

    .experice {
      padding: 0.36rem;
      text-align: left;
      background: #fff;
      position: relative;
      .label {
        margin-bottom: 0.16rem;
      }
      .labelstar{
        margin-bottom: 0.16rem;
        margin-left: 0.02rem;
      }
      .textarea {
        border: none;
        width: 100%;
        padding: 0.1rem;
      }
    }

    .btn {
      border-radius: 50px;
      font-weight: 700;
      display: inline-block;
      width: 5.9rem;
      height: 0.9rem;
      line-height: 0.9rem;
      margin: 0 auto;
      margin-top: 1rem;
      background-color: #2d7ffc;
      font-size: 0.32rem;
      color: #fff;
    }
  }
  .zzls-two .littlestarjin{
    display: inline-block;
    font-size: 0.4rem;
    color: red;
    position: absolute;
    top: 9%;
    left: 0.1rem;
  }
  .zzls-two .littlestarjinjin{
    display: inline-block;
    font-size: 0.4rem;
    color: red;
    position: absolute;
    top: 12%;
    left: 0.1rem;
  }
</style>
<style>
 .zzls-two .icon1 {
    display: inline-block;
    position: relative;
    top: 2px;
    left: 2px;
    margin: 0 10px 0 2px;
 } 
</style>
