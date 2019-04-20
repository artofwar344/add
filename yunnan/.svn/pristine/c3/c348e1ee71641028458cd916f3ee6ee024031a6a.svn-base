<template>
	<div class="zzls-two">
		<towtop :name="titlename" />
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
				<p>{{this.choseType === '兼职律师' ? '填写现兼职单位，非执业机构。' : '填写现工作单位，非执业机构。'}}</p>
				<div class="qr_btn" @click="qr2_btn">确认</div>
			</div>
		</div>

    <div v-if="this.choseType !== '专职律师' && this.choseType !== '兼职律师'">
      <div class="line1" >
        <span class="label">主管司法行政机关<sup style="color: red;">*</sup></span>
        <div class="right">
          <input type="text"  :value="pJud.c_name" placeholder="请选择主管司法行政机关" @click="open('pickerselect04')"/>
          <Icon type="arrow-right" class="arrow-right" size="16" color="#999999"></Icon>
        </div>
      </div>

      <div class="line1">
        <div class="right">
          <input type="text"  :value="subJud.c_name" placeholder="请选择主管司法行政机关" @click="open('pickerselect05')" style="margin-left: 0.2rem"/>
          <Icon type="arrow-right" class="arrow-right" size="16" color="#999999"></Icon>
        </div>
      </div>
      <Huiselect
        ref="pickerselect04"
        position="bottom"
        :dataslots="PjudParams"
        class="example-select_item"
        @confirms="selectConfirm1"></Huiselect>

      <Huiselect
          ref="pickerselect05"
          position="bottom"
          :dataslots="subJudParams"
          class="example-select_item"
          @confirms="selectConfirm2"></Huiselect>
    </div>



    <div class="line1 zhi" v-else>
			<span >执业机构<sup style="color: red;">*</sup></span>
      <input type="text" v-model="zyOrg">
      <img @click="searchHandle" :src="require('../../../../assets/images/sfImgae/search.png')" alt="">
    </div>

		<div class="line1" v-show="this.choseType !== '专职律师'">
			<span>工作单位<sup style="color: red;">*</sup></span>
			<!-- 工作单位的注解 -->
			<span @click="zj2_btn" class="icon"><Icon type="advisory" size="18"  color="#FFA500"></Icon></span>
			<input type="text" placeholder="请输入" v-model="danwei">
		</div>

    <div class="experice">
      <p class="label">执业经历<sup style="color: red;">*</sup></p>
      <textarea class="textarea" :value="exper" :rows="5"></textarea>
    </div>


    	<!-- <p class="btn" @click="tozzls_three">下一步</p> -->
<div class="padTopAdd5">
          <mybutton :btnData="btnData" @click="tozzls_three" />
        </div>

	</div>
</template>
<script>
import towtop from "../../../../components/HederTwo.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";
import * as api from "../../../../api/api.js";
import mybutton from "../../../../components/MyButton";

const profession = {
  昆明市司法局: [
    "盘龙区司法局",
    "五华区司法局",
    "官渡区司法局",
    "西山区司法局",
    "东川区司法局",
    "安宁市司法局",
    "呈贡区司法局",
    "晋宁县司法局",
    "富民县司法局",
    "宜良县司法局",
    "崇明县司法局",
    "石林彝族自治县司法局",
    "禄劝彝族苗族自治县司法局",
    "寻甸回族彝族自治县司法局"
  ],

  丽江市司法局: [
    "古城区司法局",
    "永胜县司法局",
    "华坪县司法局",
    "玉龙纳西族自治县司法局",
    "宁蒗彝族自治县司法局"
  ],

  迪庆藏族自治州司法局: [
    "香格里拉县司法局",
    "德钦县司法局",
    "维西傈僳族自治县司法局"
  ],

  昭通市司法局: [
    "昭阳区司法局",
    "鲁甸县司法局",
    "巧家县司法局",
    "盐津县司法局",
    "大关县司法局",
    "永善县司法局",
    "绥江县司法局",
    "镇雄县司法局",
    "彝良县司法局",
    "威信县司法局",
    "水富县司法局"
  ],

  曲靖市司法局: [
    "麒麟区司法局",
    "宣威市司法局",
    "马龙县司法局",
    "沾益县司法局",
    "富源县司法局",
    "罗平县司法局",
    "师宗县司法局",
    "陆良县司法局",
    "会泽县司法局"
  ],

  楚雄彝族自治州司法局: [
    "楚雄市司法局",
    "双柏县司法局",
    "牟定县司法局",
    "南华县司法局",
    "姚安县司法局",
    "大姚县司法局",
    "永仁县司法局",
    "元谋县司法局",
    "武定县司法局",
    "禄丰县司法局"
  ],

  玉溪市司法局: [
    "红塔区司法局",
    "江川县司法局",
    "澄江县司法局",
    "通海县司法局",
    "华宁县司法局",
    "易门县司法局",
    "峨山彝族自治县司法局",
    "新平彝族傣族自治县司法局",
    "元江哈尼彝族傣族自治县司法局"
  ],

  保山市司法局: [
    "隆阳区司法局",
    "施甸县司法局",
    "腾冲县司法局",
    "龙陵县司法局",
    "昌宁县司法局"
  ],

  红河哈尼族彝族自治州司法局: [
    "蒙自市司法局",
    "个旧市司法局",
    "开远市司法局",
    "绿春县司法局",
    "建水县司法局",
    "石屏县司法局",
    "弥勒市司法局",
    "元阳县司法局",
    "红河县司法局",
    "金平苗族瑶族傣族自治县司法局",
    "河口瑶族自治县司法局",
    "屏边苗族自治县司法局",
    "泸西县司法局"
  ],

  普洱市司法局: [
    "思茅区司法局",
    "宁洱哈尼族彝族自治县司法局",
    "墨江哈尼族自治县司法局",
    "景东彝族自治县司法局",
    "景谷傣族彝族自治县司法局",
    "镇沅彝族哈尼族拉祜族自治县司法局",
    "江城哈尼族彝族自治县司法局",
    "孟连傣族拉祜族佤族自治县司法局",
    "澜沧拉祜族自治县司法局",
    "西盟佤族自治县司法局"
  ],

  大理白族自治州司法局: [
    "大理市司法局",
    "祥云县司法局",
    "宾川县司法局",
    "弥渡县司法局",
    "永平县司法局",
    "云龙县司法局",
    "洱源县司法局",
    "剑川县司法局",
    "鹤庆县司法局",
    "漾濞彝族自治县司法局",
    "南涧彝族自治县司法局",
    "巍山彝族回族自治县司法局"
  ],
  文山壮族苗族自治州司法局: [
    "文山市司法局",
    "砚山县司法局",
    "西畴县司法局",
    "麻栗坡县司法局",
    "马关县司法局",
    "丘北县司法局",
    "广南县司法局",
    "富宁县司法局"
  ],

  德宏傣族景颇族自治州司法局: [
    "芒市司法局",
    "瑞丽司法局",
    "梁河县司法局",
    "盈江县司法局",
    "陇川县司法局"
  ],

  怒江傈僳族自治州司法局: [
    "泸水县司法局",
    "福贡县司法局",
    "贡山独龙族怒族自治县司法局",
    "兰坪白族普米族自治县司法局"
  ],

  西双版纳傣族自治州司法局: ["景洪市司法局", "勐海县司法局", "勐腊县司法局"],

  临沧市司法局: [
    "临翔区司法局",
    "凤庆县司法局",
    "元县司法局",
    "永德县司法局",
    "镇康县司法局",
    "双江拉祜族佤族布依族傣族自治县司法局",
    "耿马傣族佤族自治县司法局",
    "沧源佤族自治县司法局"
  ]
};
export default {
  data() {
    return {
      btnData:[
        {
          text:'下一步',
          disabled: false,
          isSure: true,
        }
      ],
      titlename: this.$store.state.zzlsStore.currentpage + "变更执业类别许可",
      confirmValSelect01: ["请选择"],
      pJud: '',
      subJud: '',
      jigou: "",
      exper: "",
      danwei: "",
      zj1: false,
      zj2: false,
      zyOrg: "",
      selectData01: [
        {
          flex: 1,
          values: Object.keys(profession),
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
          values: Object.values(profession),
          showText: "text",
          className: "slot3",
          textAlign: "center"
        }
      ]
    };
  },
  created() {
    this.exper = this.userInfo.c_zygl ? this.userInfo.c_zygl : "";
  },
  components: {
    mybutton,
    towtop
  },
  computed: {
    ...mapGetters("zzlsStore", [
      "choseType",
      'currentpage',
       "userInfo",
      'PjudParams',
      'subJudParams',
      'userInfo'
    ])
  },
  methods: {
    ...mapMutations("zzlsStore", ["setFormData"]),
    ...mapActions('zzlsStore', [
      'fetchJudicialParams'
    ]),
    open(picker) {
      this.$refs[picker].open();
      document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    selectConfirm1 (selectedVal){
      this.pJud = selectedVal[0]

      console.log(selectedVal[0])
      let id = this.pJud.c_ld.replace(/(^\s*)|(\s*$)/g, "")
      this.fetchJudicialParams({level: '2', pid: id})
    },
    selectConfirm2 (selectedVal){
      this.subJud = selectedVal[0]
      this.jigou = selectedVal[0].c_ld
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
    // 注释2打开之后关闭
    qr2_btn() {
      this.zj2 = !this.zj2;
    },
    tozzls_three() {
      let data = {};
      let obj = {}

      if (["法援律师", "公职律师", "公司律师"].includes(this.choseType)) {
        if (!this.jigou) {
          this.$toast('请将信息填完整')
          return;
        }

        if (!this.danwei) {
          this.$toast('请将信息填完整')
          return;
        }

        if (!this.exper) {
          this.$toast('请将信息填完整')
          return;
        }

        data = {
          spvs_lgl_admn_ahr: this.jigou,
          wrk_unit_nm: this.danwei,
          prct_exprnc: this.exper
        }
      }

      if (["专职律师", "兼职律师"].includes(this.choseType)) {
        if (!this.zyOrg) {
          this.$toast('请将信息填完整')
          return;
        }

        if (!this.exper) {
          this.$toast('请将信息填完整')
          return;
        }
        console.log('k-----------')
        data = {
          prct_inst: this.zyOrg,
          prct_exprnc: this.exper
        };
      }

      if (this.choseType === "兼职律师") {
        if (!this.danwei) {
          this.$toast('请将信息填完整')
          return;
        }
        data = Object.assign({}, { prtm_unit_nm: this.danwei }, data);
      }

      obj = Object.assign({}, {
        lwr_id: this.userInfo.c_userid,
        mdf_bfr_prct_cgy: this.userInfo.c_zylbc,
      }, data)

      this.setFormData(obj);

      this.$router.push({ name: "zzlsThree" });
    },

    searchHandle() {
      // api.zyjgVerify(this.zyOrg)
      let data = {
        "txnCommCom": {
        "tenant":"530000000000",
        "txn_itt_chnl_id":"00",
        "txn_itt_chnl_type":"11"
        },
        "txnBodyCom": {
          matter_id: window.sessionStorage.getItem("matterid"),
        "c_zwmc": this.zyOrg
        }
      }
      this.$ajaxRequest("post", '/gsp/mng90038', data, (res) => {
         console.log(res)
         let status = JSON.stringify(res.data)
        status = status.replace("C-API-Status", 'status')
        status = JSON.parse(status)
        if (status.status == "00") {
          let cent = JSON.stringify(res.data)
          cent = cent.replace("C-Response-Body", 'content')
          cent = JSON.parse(cent)
          if (cent.content !== '{"status":01,"msg":"需要选择执业机构"}') {
            this.zyOrg = JSON.parse(cent.content).obj.c_zwmc
          } else {
            this.$toast('请输入更详细的内容')
          }
          console.log(cent.content)
        } else {
          this.$toast('查询失败！');
        }
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
      margin: 0 10px 0 2px
    }
  }
  .line1 input{
    border: none;
    flex: 1;
    text-align: right;
  }

  .experice {
    padding: 0.36rem;
    text-align: left;
    background: #fff;

    .label {
      margin-bottom: 0.16rem;
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
    background-color: #2D7FFC;
    font-size: 0.32rem;
    color: #fff;
    }
}
</style>
