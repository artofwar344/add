import ajaxRequest from '../utils/ajaxRequest'
// 云南省一级地区编码
const primaryArea = ["全省", "省本级", "昆明市", "曲靖市", "玉溪市", "保山市", "昭通市", "丽江市", "普洱市", "临沧市", "德宏州", "怒江州", "迪庆州", "大理州", "楚雄州", "普洱市", "红河州", "文山州", "西双版纳"];

const primaryCode = ['000', '001', '002', '003', '004', '005', '006', '007', '008', '009', '0010', '0011', '0012', '0013', '0014', '0015', '0016', '0017']

// const primaryArea = ["昆明市", "曲靖市", "玉溪市", "保山市", "昭通市", "丽江市", "普洱市", "临沧市", "德宏州", "怒江州", "迪庆州", "大理州", "楚雄州", "红河州", "文山州", "西双版纳"];

// const primaryCode = ['002', '003', '004', '005', '006', '007', '008', '009', '010', '011', '012', '013', '014', '015', '016', '017']


// 云南省一二级地区编码
const area = {
  "云南省": ["全部", "省本级"],
  "昆明市": ["五华区", "盘龙区", "官渡区", "西山区", "东川区", "呈贡区", "晋宁县", "富民县", "宜良县", "石林彝族自治县", "嵩明县", "禄劝县", "寻甸县", "安宁市"],
  "曲靖市": ["麒麟区", "马龙县", "陆良县", "师宗县", "罗平县", "富源县", "会泽县", "沾益区", "宣威市"],
  "玉溪市": ["红塔区", "江川区", "澄江县", "通海县", "华宁县", "易门县", "峨山县", "新平县", "元江县"],
  "保山市": ["隆阳区", "施甸县", "腾冲市", "龙陵县", "昌宁县"],
  "昭通市": ["昭阳区", "鲁甸县", "巧家县", "盐津县", "大关县", "永善县", "绥江县", "镇雄县", "彝良县", "威信县", "水富县"],
  "丽江市": ["古城区", "玉龙县", "永胜县", "华坪县", "宁蒗县"],
  "普洱市": ["思茅区", "宁洱县", "墨江县", "镇沅县", "江城县", "孟连县", "澜沧县", "西盟县", "景东彝族自治县", "景谷傣族彝族自治县"],
  "临沧市": ["临翔区", "凤庆县", "云县", "永德县", "镇康县", "双江县", "耿马县", "沧源县"],
  "德宏州": ["瑞丽市", "芒市", "梁河县", "盈江县", "陇川县"],
  "怒江州": ["泸水市", "福贡县", "贡山县", "兰坪县"],
  "迪庆州": ["香格里拉市", "德钦县", "维西傈僳族自治县"],
  "大理州": ["大理市", "漾濞县", "祥云县", "宾川县", "弥渡县", "南涧县", "巍山县", "永平县", "云龙县", "洱源县", "剑川县", "鹤庆县"],
  "楚雄州": ["楚雄市", "双柏县", "牟定县", "南华县", "姚安县", "大姚县", "永仁县", "元谋县", "武定县", "禄丰县"],
  "红河州": ["个旧市", "开远市", "蒙自市", "屏边县", "建水县", "石屏县", "弥勒市", "泸西县", "元阳县", "红河县", "金平县", "绿春县", "河口县"],
  "文山州": ["文山市", "砚山县", "西畴县", "麻栗坡县", "马关县", "丘北县", "广南县", "富宁县"],
  "西双版纳": ["景洪市", "勐海县", "勐腊县"]
}

const areaCode = {
  "001": ["000", "00A"],
  "002": ["001", "002", "003", "004", "005", "006", "007", "008", "009", "010", "011", "012", "013", "014"],
  "003": ["015", "016", "017", "018", "019", "020", "021", "022", "023"],
  "004": ["024", "025", "026", "027", "028", "029", "030", "031", "032"],
  "005": ["033", "034", "035", "036", "037"],
  "006": ["038", "039", "040", "041", "042", "043", "044", "045", "046", "047", "048"],
  "007": ["049", "050", "051", "052", "053"],
  "008": ["054", "055", "056", "057", "058", "059", "060", "061", "128", "129"],
  "009": ["062", "063", "064", "065", "066", "067", "068", "069"],
  "010": ["070", "071", "072", "073", "074"],
  "011": ["075", "076", "077", "078"],
  "012": ["079", "080", "081"],
  "013": ["082", "083", "084", "085", "086", "087", "088", "089", "090", "091", "092", "093"],
  "014": ["094", "095", "096", "097", "098", "099", "100", "101", "102", "103"],
  "015": ["104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116"],
  "016": ["117", "118", "119", "120", "121", "122", "123", "124"],
  "017": ["125", "126", "127"],
  "ALL": ["999"]
}

let ggj_region_name_code = {};
// let ggj_primary_area = [];
// let ggj_primary_code = [];
let currentCodes = {};
function getGGJZoneInfo(parentCode){
  let setdata = {
    "txnCommCom":{
      tRecInPage:15,
      tPageJump:3,
      tStsTraceId:"110567890",
      "txnIttChnlId":'C0011234567890987654321',
      matter_id:window.sessionStorage.getItem('matterid')
    },
    "txnBodyCom": {
      "oType": "GGJ",
      parentCode:parentCode,
      matter_id:window.sessionStorage.getItem('matterid')
    }
  }
  return ajaxRequest("post",'/gsp/mng19021', setdata);
}

function parseGGJRes(res, code) {
  let names = [];
  let index = 0;
  if(code == "-1") {
    names[index ++] = "云南省";
    currentCodes["全省"] = "000";
    currentCodes["省本级"] = "001";
    ggj_region_name_code["云南省"] = "";
  } else {
    names[index ++] = "全部";
  }
  for(var i = 0; i < res.length; i ++) {
    let region_name = res[i].regnNm;
    if(region_name == "全省" || region_name == "省本级") {
      continue;
    }
    names[index ++] = region_name;
    let region_code = res[i].regnCode;
    currentCodes[region_name] = region_code;
    if(code == "-1") {
      ggj_region_name_code[region_name] = region_code;
    }
  }
  console.log(currentCodes);
  return names;
}

function getGGJNameByCode(code) {
  return getGGJZoneInfo(code);
}

function getGGJInfoByName(name) {
  return getGGJZoneInfo(ggj_region_name_code[name]);
}

let Code = {
  primaryArea: function () {
    return primaryArea
  },
  primaryCode: function () {
    return primaryCode
  },
  area: function () {
    return area
  },
  areaCode: function () {
    return areaCode
  },
  findGGJNameByCode : function(code) {
    return getGGJNameByCode(code);
  },
  findGGJNameByName : function(name) {
    return getGGJInfoByName(name);
  },
  parseGGJResource : function(res, code) {
    return parseGGJRes(res, code);
  },
  getCurrentCodes : function() {
    return currentCodes;
  },
  get_GGJ_region_name_code : function() {
    return ggj_region_name_code;
  }
}


export {
    Code
}
