<template>
  <div>
    <Field
      desc
      desc-class="richText"
      type="text"
      label="企业名称"
      v-model="textValue"
      :value="textValue"
      placeholder="请输入企业名称"
    ></Field>
    <Field
      desc
      desc-class="richText"
      type="text"
      label="统一社会信用代码"
      v-model="comeReason"
      :value="comeReason"
      placeholder="请输入信用代码"
    ></Field>
    <Field
      desc
      desc-class="richText"
      type="text"
      label="企业法定代表人"
      v-model="carMsg"
      :value="carMsg"
      placeholder="请输入企业法定代表人"
    ></Field>
    <Field
      readonly
      label="企业属地"
      desc
      disableclear
      type="text"
      placeholder="请选择"
      :required="false"
      :value="confirmValSelect02"
      @click.native="open('pickerselect02')"
    >
      <span class="example-select_arrowRight"></span>
    </Field>
    <Selectpopup
      ref="pickerselect02"
      position="bottom"
      
      :dataslots="selectData02"
      :visible-item-count="5"
      class="example-select_item"
      @selectval="selectChangeFun2"
      @confirms="selectConfirmFun02"
    ></Selectpopup>

    <!-- <div class='example-formgroup_btn-wrapper'>
				<Btn block @click='submitEvent()' class='scl_btn'>查询</Btn>
    </div>-->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="submitEvent"/>
    </div>
  </div>
</template>

<script>
import mybutton from "../../../../components/MyButton";
import {
  dateFormat,
  validateEmail,
  validateTel,
  validateNum
} from "../../../../assets/jq/Utils.js";
var address = {
  云南省: [
    "全部",
    "省本级",
    "迪庆藏族自治州",
    "临沧市",
    "德宏傣族景颇族自治州",
    "昭通市",
    "丽江市",
    "保山市",
    "文山壮族苗族自治州",
    "楚雄彝族自治州",
    "滇中新区",
    "西双版纳傣族自治州",
    "怒江傈僳族自治州",
    "玉溪市",
    "曲靖市",
    "红河哈尼族彝族自治州",
    "普洱市",
    "大理白族自治州",
    "昆明市"
  ],
  迪庆藏族自治州: ["维西傈僳族自治县", "香格里拉县", "德钦县"],
  临沧市: [
    "临沧市辖区",
    "永德县",
    "临翔区",
    "镇康县",
    "沧源佤族自治县",
    "双江拉祜族佤族布朗族傣族自治县",
    "耿马傣族佤族自治县",
    "云县",
    "凤庆县"
  ],
  德宏傣族景颇族自治州: ["陇川县", "芒市", "梁河县", "盈江县", "瑞丽市"],
  昭通市: [
    "昭通市辖区",
    "绥江县",
    "永善县",
    "昭阳区",
    "水富县",
    "彝良县",
    "镇雄县",
    "盐津县",
    "威信县",
    "大关县",
    "巧家县",
    "鲁甸县"
  ],
  丽江市: [
    "丽江市辖区",
    "宁蒗彝族自治县",
    "玉龙纳西族自治县",
    "古城区",
    "华坪县",
    "永胜县"
  ],
  保山市: ["保山市辖区", "施甸县", "昌宁县", "腾冲县", "龙陵县", "隆阳区"],
  文山壮族苗族自治州: [
    "文山县",
    "富宁县",
    "丘北县",
    "马关县",
    "广南县",
    "砚山县",
    "西畴县",
    "麻栗坡县"
  ],
  楚雄彝族自治州: [
    "元谋县",
    "永仁县",
    "禄丰县",
    "牟定县",
    "武定县",
    "双柏县",
    "南华县",
    "姚安县",
    "大姚县",
    "楚雄市开发区",
    "楚雄市"
  ],
  滇中新区: ["滇中新区"],
  西双版纳傣族自治州: ["勐腊县", "景洪市", "勐海县"],
  怒江傈僳族自治州: [
    "贡山独龙族怒族自治县",
    "福贡县",
    "兰坪白族普米族自治县",
    "泸水县"
  ],
  玉溪市: [
    "玉溪市辖区",
    "华宁县",
    "澄江县",
    "元江哈尼族彝族傣族自治县",
    "易门县",
    "江川县",
    "新平彝族傣族自治县",
    "研和工业园区管委会",
    "红塔区",
    "玉溪市高新区",
    "通海县",
    "峨山彝族自治县"
  ],
  曲靖市: [
    "曲靖市辖区",
    "师宗县",
    "马龙县",
    "曲靖经开区",
    "会泽县",
    "沾益区",
    "陆良县",
    "宣威市",
    "富源县",
    "罗平县",
    "麒麟区"
  ],
  红河哈尼族彝族自治州: [
    "蒙自市",
    "元阳县",
    "弥勒县",
    "绿春县",
    "红河县",
    "河口瑶族自治县",
    "金平苗族瑶族傣族自治县",
    "个旧市",
    "泸西县",
    "屏边苗族自治县",
    "石屏县",
    "建水县",
    "开远市"
  ],
  普洱市: [
    "普洱市辖区",
    "宁洱哈尼族彝族自治县",
    "江城哈尼族彝族自治县",
    "澜沧拉祜族自治县",
    "景谷傣族彝族自治县",
    "镇沅彝族哈尼族拉祜族自治县",
    "景东彝族自治县",
    "西盟佤族自治县",
    "墨江哈尼族自治县",
    "孟连傣族拉祜族佤族自治县",
    "思茅区"
  ],
  大理白族自治州: [
    "祥云县",
    "大理市",
    "漾濞彝族自治县",
    "剑川县",
    "南涧彝族自治县",
    "巍山彝族回族自治县",
    "鹤庆县",
    "云龙县",
    "洱源县",
    "大理旅游度假区",
    "弥渡县",
    "大理创新工业园区",
    "永平县",
    "宾川县"
  ],
  昆明市: [
    "昆明市辖区",
    "五华区",
    "晋宁县",
    "宜良县",
    "寻甸回族彝族自治县",
    "石林彝族自治县",
    "嵩明县",
    "盘龙区",
    "高新区",
    "呈贡县",
    "西山区",
    "富民县",
    "空港经济区",
    "宜良县城市管理综合行政执法局",
    "东川区",
    "度假区",
    "经开区",
    "禄劝彝族苗族自治县",
    "倘甸区",
    "阳宗海",
    "安宁市",
    "官渡区"
  ]
};
// var conuty ={
// 	"530000":["533400","530900","533100","530600","530700","530500","532600","532300","533500","532800","533300","530400","530300","532500","530800","532900","530100"],
// 	"530100": ["530102","530101","530122","530125","530129","530126","530127","530103","530192","530121","530112","530124","533501","533502","530113","530182","530191","530128","530199","530195","530181","530111"],
// 	"530300": ["530323","530321","530391","530301","530326","530303","530322","530381","530325","530324",'530302'],
// 	"530400": ["530424","530422","530428","530425","530421","530427","530401","530430","530402","530403","530423","530426"],
// 	"530500": ["530521","530524","530501","530522","530523","530502"],
// 	"533500": ["533500"],
// 	"530600": ["530626","530625","530602","530630","530628","530627","530623","530629","530601","530624","530622","530621"],
// 	"530700": ["530724","530721","530702","530723","530722","530701"],
// 	"530800": ["530821","530826","530828","530824","530825","530823","530829","530801","530822","530827","530802"],
// 	"530900": ["530923","530902","530924","530927","530925","530926","530922","530901","530921"],
// 	"532300": ["532328","532327","532331","532323","532329","532322","532324","532325","532326","532311","532301"],
// 	"532500": ["532503","532528","532526","532531","532529","532532","532530","532501","532527","532523","532525","532524","532502"],
// 	"532600": ["532621","532628","532626","532625","532627","532622","532623","532624"],
// 	"532800": ["532823", "532801", "532822"],
// 	"532900": ["532923", "532901", "532922", "532931", "532926", "532927", "532932", "532929", "532930", "532933", "532925", "532903", "532928", "532924"],
// 	"533100": ["533124", "533103", "533122", "533123", "533102"],
// 	"533300": ["533324", "533323", "533325", "533321"],
// 	"533400": ["533423", "533421", "533422"]
// }
var cityname = [
  "全部",
  '省本级',
  "迪庆藏族自治州",
  "临沧市",
  "德宏傣族景颇族自治州",
  "昭通市",
  "丽江市",
  "保山市",
  "文山壮族苗族自治州",
  "楚雄彝族自治州",
  "滇中新区",
  "西双版纳傣族自治州",
  "怒江傈僳族自治州",
  "玉溪市",
  "曲靖市",
  "红河哈尼族彝族自治州",
  "普洱市",
  "大理白族自治州",
  "昆明市"
];
// var city= ["530000","533400","530900","533100","530600","530700","530500","532600","532300","533500","532800","533300","530400","530300","532500","530800","532900","530100"]

export default {
  data() {
    return {
      btnData: [
        {
          text: "查询",
          disabled: false,
          isSure: true
        }
      ],
      citycode: "",
      conutycode: "",
      EntPossessionName: "",
      name: "123",
      number: "",
      carMsg: "",
      comeReason: "",
      textValue: "",
      cen: "12312",
      selectData02: [
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
          values: cityname,
          showText: "text",
          className: "slot3",
          textAlign: "center"
        }
      ],
      confirmValSelect01: [], //['1987']
      confirmValSelect02: [] //[ "辽宁", "大连" ]
    };
  },
  components: {
    mybutton
  },
  created() {
    this.sclname();
  },
  methods: {
    sclname() {
      console.log(this.cen);
    },
    open(picker) {
      this.$refs[picker].open();
      this.setEvent();
      document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
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
    selectChangeFun2(picker, val) {
      //只有是二级的时候才有这个方法
      picker.setSlotValues(1, address[val[0]]);
    },
    selectConfirmFun02(selectedVal) {
      if (typeof selectedVal[1] === "object") {
        selectedVal[1] = selectedVal[1].text;
      }
      this.confirmValSelect02 = selectedVal;
    },
    submitBtn() {
      if (!this.confirmValSelect01[0]) {
        //必填校验，如果不是必填项不用写
        this.errorSelect01 = true;
        this.errorSelectInfo = "请选择用户名!";
      } else {
        this.errorSelect01 = false;
      }
    },
    submitEvent() {
      // console.log(this.confirmValSelect02.length);
      // if(this.confirmValSelect02.length==0){
      // 	this.confirmValSelect02[0]="";
      // 	this.confirmValSelect02[1]="";
      // }else if(this.confirmValSelect02[0]=="云南省"){
      // 	if(this.confirmValSelect02[1]!="全部"){
      // 		this.confirmValSelect02[0]=this.confirmValSelect02[1];
      // 		this.confirmValSelect02[1]="";
      // 	}else{
      // 		this.confirmValSelect02[0]="";
      // 		this.confirmValSelect02[1]="";
      // 	}
      // }

      if (this.confirmValSelect02[1] == "省本级") {
        this.confirmValSelect02[1] = "云南省";
      }
      if (this.confirmValSelect02[1] == "全部") {
        this.confirmValSelect02[1] = "云南省";
      }
      this.name = this.$route.query.name;
      let cent = {
        name: this.name,
        textValue: this.textValue,
        comeReason: this.comeReason,
        carMsg: this.carMsg,
        citycode: this.confirmValSelect02[0],
        conutycode: this.confirmValSelect02[1],
        conutycEntPossessionNameode: this.EntPossessionName
      };
      this.$router.push({
        name: "chalist",
        params: { datetext: JSON.stringify(cent) }
      });
      // this.$router.push('/chalist?name='+this.name+'&textValue='+this.textValue+'&comeReason='+this.comeReason+'&carMsg='+this.carMsg+'&citycode='+this.confirmValSelect02[0]+'&conutycode='+this.confirmValSelect02[1]+'&EntPossessionName='+this.EntPossessionName)
    },
    setEvent() {
      const _self = this;
      const cancelBtn = document.getElementsByClassName("hui-select_cancel")[1];
      cancelBtn.onclick = function() {
        _self.confirmValSelect02 = [];
      };
    }
  }
};
</script>

<style scoped>
.example-select_btn-wrapper {
  margin-top: 20px;
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
</style>