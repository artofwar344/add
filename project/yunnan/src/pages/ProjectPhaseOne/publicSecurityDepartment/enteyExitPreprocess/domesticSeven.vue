<style lang="less" scoped>
.domesticSevenWrap{
    .content{
        p {
            font-size: 0.28rem;
            padding: 0rem 0.4rem 0.2rem;
            box-sizing: border-box;
            color: #999;
            text-align: left;
        }
    }
    .btnWrap{
        margin-top: 1rem;
        padding: 0 .8rem;
        font-size: .33rem;
        span{
            display: block;
            width: 100%;
            height: .9rem;
            border-radius: 40px;
            line-height: .9rem;
            text-align: center;
            background: #2D7FFC;
            color: white;
        }
    }
}
.domesticSevenWrap .hui-field {
  height: 1rem;
  padding: 0rem 0.2rem;
  box-sizing: border-box;
  border: none;
  line-height: 1rem;
}
</style>
<style>
.domesticSevenWrap .hui-field {
  height: 1rem;
  padding: 0rem 0.2rem;
  box-sizing: border-box;
  border: none;
}
.domesticSevenWrap .hui-field_main {
  height: 100%;
  border-bottom: 1px solid #e1e2e6;
}
.domesticSevenWrap .hui-field_title {
  width: 2.3rem;
  height: 100%;
}
</style>

<template>
    <div class="domesticSevenWrap">
        <towtop :name="titlename"/>
        <div class="content">
            <p>核对提交</p>
            <Field type="text" readonly v-for="item in infoData" :key="item.title" :label="item.title" :value="item.value"></Field>
        </div>
        <!-- <div class="padTopAdd5">
            <mybutton :btnData="btnData" @click="goto"/>
        </div> -->
        <!-- <div class="btnWrap">
            <span @click="netxbtn()">确认无误，提交申请</span>
        </div> -->
        <div class="padTopAdd5">
            <mybutton :btnData="btnData" @click="netxbtn"/>
        </div>
    </div>
</template>

<script>
import towtop from '@/components/HederTwo'
import mybutton from "@/components/MyButton";
import { mapMutations } from 'vuex'
import { cenurl } from "../../../../components/toptow.js"
export default {
    data(){
        return{
            titlename:'出入境证件预受理',
            btnData: [
        {
          text: "确认无误，提交申请",
          disabled: false,
          isSure: true
        }
      ],
            infoData:[],
            message:{},
            gatpoint:'',
            qzzlClass:{
                "团体旅游":'12',
                "个人旅游":'1B'
            },
            taicjsyClass:{
                "团体旅游":'9',
                "个人旅游":'8'
            },
            taiqzzlClass:{
                "团体旅游":'25',
                "个人旅游":'2B'
            },
            orderid:"",
            GATentryExitUrl:'',
            ywbhcode:'',
            ywbhtaicode:'',
            ywbhaocode:'',

        }
    },
    components:{
    mybutton,
        towtop
    },
    mounted() {
        let name = sessionStorage.getItem("GATname");
        let orderid = JSON.parse(sessionStorage.getItem("GATsecondlocal"));
         this.orderid = orderid.value;
        let location = JSON.parse(sessionStorage.getItem("GATpoint")).branch_parent_name;
        let time = sessionStorage.GATDate + " " + sessionStorage.GATTime;
        this.message = JSON.parse(sessionStorage.getItem("GATEEPinpuList"));
       
        this.infoData = [
            {title:'办理事项',value:'出入境办理'},
            {title:'办理人',value: name},
            {title:'预约单位',value:location},
            {title:'预约时间',value:time}
        ];

        this.setCurrentPage(this.$route.name)
    },
    methods:{
      ...mapMutations('publicSecurityStore', [
          'setFormData',
          'setCurrentPage'
        ]),
        // ajax(transferData){
        //     let _self = this;
        //     //  表单提交
        //     this.$ajaxRequest("post", "/gsp/appForm00001", transferData)
        //     .then(res => {
        //         console.log(res);
        //         _self.$router.push({
        //             name:'entryExitSuccess'
        //         })
        //     })
        //     .catch(error => {
        //         console.log(error);
        //         _self.$toast("表单提交失败！");
        //     });
        // },
        clearSessionStorage(){
            function clear(str){
                if(sessionStorage.getItem(str) != null){
                    sessionStorage.removeItem(str);
                }
            }
            clear("GATDate");
            clear("GATEEPinpuList");
            clear("GATTime");
            clear("GATapplyType");
            clear("GATentryExitUrl");
            clear("GATform_id");
            clear("GATgangAoApply");
            clear("GATname");
            clear("GATnormalApply");
            clear("GATpoint");
            clear("GATtaiApply");
            clear("GATyyswxw");
            clear("GATfirstlocal");
            clear("GATsecondlocal");
        },
        netxbtn(){
            $('.btnWrap span').css({'disabled':'disabled'})
            this.gatpoint=JSON.parse(sessionStorage.getItem("GATpoint"))
            this.GATentryExitUrl=window.sessionStorage.getItem('GATentryExitUrl')
            let branch_code =  this.gatpoint.branch_code;
            if(branch_code.length >= 6){
                branch_code = branch_code.slice(0,6);
                branch_code = branch_code + '000000';
            }
            let secdata={
                "txnCommCom": {
                    "tRecInPage": "1",
                    "tPageJump": "1",
                    "tStsTraceId": "1"
                },
                "txnBodyCom": {
                    "matter_id": window.sessionStorage.getItem('matterid'),
                    "chann_id": "1",
                    "dept_id":branch_code//"530100000000"
                    // "dept_id":this.gatpoint.branch_code//"530100000000"
                }
            }
            this.$ajaxRequest("post", "/gsp/mng90042", secdata)
            .then(res => {
                console.log(res);
                if(this.GATentryExitUrl=='domesticFour'){
                    this.ywbhcode=res.data[0].crjnumber
                    this.goto()
                }else if(this.GATentryExitUrl=='gangAoFour'){
                    this.ywbhaocode=res.data[1].crjnumber
                    this.goto()
                }else if(this.GATentryExitUrl=='taiFour'){
                    this.ywbhtaicode=res.data[2].crjnumber
                    this.goto()
                }else if(this.GATentryExitUrl=='domesticFour,gangAoFour,taiFour'){
                    this.ywbhcode=res.data[0].crjnumber
                    this.ywbhaocode=res.data[1].crjnumber
                    this.ywbhtaicode=res.data[2].crjnumber
                    this.goto()
                }
            })
            .catch(error => {
                console.log(error);
            });   
        },
        goto(){
            // console.log(this.message)
            let applyType = JSON.parse(sessionStorage.getItem("GATapplyType"));
            let matNum = [];
            let crjTypeNames = [];
            // console.log(applyType)
            for (let index = 0; index < applyType.length; index++) {
                let temp = "CRJ-"+applyType[index].value
                matNum.push(temp);
                crjTypeNames.push(applyType[index].value)
            }
            let id = this.message.idNum;
            let ywx = this.message.autoSurName;
            let ywm = this.message.autoFirstName;
            let zwx = this.message.surname;
            let zwm = this.message.firstname;
            let xb = this.message.Sexcode;
            let csrq = this.message.selectDate.split("-").join("");
            let csd = this.message.selectBirth;
            let mz = this.message.selectNation;
            let lxdh = this.message.selfTele;
            let sjr = this.message.recipients;
            let yzbm = this.message.postalcode;
            let emsdz = this.message.deliveryLocation +this.message.detailLocation;
            let sjhm = this.message.recipientsTele;
            let hkszd = this.message.selectRegister;

            let xczjhm = '';
            if(sessionStorage.getItem("GATnormalApply")){
                xczjhm = JSON.parse(sessionStorage.getItem("GATnormalApply")).normaloldId
            }
            let slr = sessionStorage.getItem("username");

            let normalsfxxz = '';
            if(sessionStorage.getItem("GATnormalApply")){
                normalsfxxz = JSON.parse(sessionStorage.getItem("GATnormalApply")).normaloldId == '11' ? "1":"0"
            }
            let jjqklxr = this.message.emergencyContact;
            let jjqklxrdh = this.message.emergencyTele;

            let gangsfxxz = '';
            if(sessionStorage.getItem("GATgangAoApply")){
                gangsfxxz = JSON.parse(sessionStorage.getItem("GATgangAoApply")).gangvalue[0];
            }
            let gangAozjhm = '';
            if(sessionStorage.getItem("GATgangAoApply")){
                gangAozjhm = JSON.parse(sessionStorage.getItem("GATgangAoApply")).nowId
            }
            let gangqzzl='';
            let tempgangqzzl = '';
            if(sessionStorage.getItem("GATgangAoApply")){
                tempgangqzzl = JSON.parse(sessionStorage.getItem("GATgangAoApply")).confirmGangType.text;
                for (const key in this.qzzlClass) {
                    if (this.qzzlClass.hasOwnProperty(key)) {
                        if(key == tempgangqzzl){
                            gangqzzl = this.qzzlClass[key];
                        }
                    }
                }
            }

            let gangqzyxcs = '';
            if(sessionStorage.getItem("GATgangAoApply")){
                gangqzyxcs = JSON.parse(sessionStorage.getItem("GATgangAoApply")).confirmGangNum.value;
            }
            let aoqzzl='';
            let tempaoqzzl = '';
            if(sessionStorage.getItem("GATgangAoApply")){
                tempaoqzzl = JSON.parse(sessionStorage.getItem("GATgangAoApply")).confirmAoType.text;
                for (const key in this.qzzlClass) {
                    if (this.qzzlClass.hasOwnProperty(key)) {
                        if(key == tempaoqzzl){
                            aoqzzl = this.qzzlClass[key];
                        }
                    }
                }
            }

            let aoqzyxcs = '';
            if(sessionStorage.getItem("GATgangAoApply")){
                aoqzyxcs = JSON.parse(sessionStorage.getItem("GATgangAoApply")).confirmAoNum.value;
            }
            let taicjsy='';
            let temptaicjsy = '';
            if(sessionStorage.getItem("GATtaiApply")){
                temptaicjsy = JSON.parse(sessionStorage.getItem("GATtaiApply")).confirmTaiType.text;
                for (const key in this.taicjsyClass) {
                    if (this.taicjsyClass.hasOwnProperty(key)) {
                        if(key == temptaicjsy){
                            taicjsy = this.taicjsyClass[key];
                        }
                    }
                }
            }

            let taizjhm = '';
            if(sessionStorage.getItem("GATtaiApply")){
                taizjhm = JSON.parse(sessionStorage.getItem("GATtaiApply")).nowId
            }

            let taisfxxz = '';
            if(sessionStorage.getItem("GATtaiApply")){
                taisfxxz = JSON.parse(sessionStorage.getItem("GATtaiApply")).taivalue[0];
            }

            let taiqzzl='';
            let temptaiqzzl = '';
            if(sessionStorage.getItem("GATtaiApply")){
                temptaiqzzl = JSON.parse(sessionStorage.getItem("GATtaiApply")).confirmTaiType.text;
                for (const key in this.taiqzzlClass) {
                    if (this.taiqzzlClass.hasOwnProperty(key)) {
                        if(key == temptaiqzzl){
                            taiqzzl = this.taiqzzlClass[key];
                        }
                    }
                }
            }
            // sqh 截取后15位
            let workId = sessionStorage.getItem("WorkId");
                workId = workId.slice(workId.length-15,workId.length);
            let nomalApply = {
                            "sqlb": "101",
                            "info": {
                                "cjsqxx": {
                                    "ywbh": this.ywbhcode,
                                    "ywx": ywx,
                                    "ywm": ywm,
                                    "ywxm": ywx + " " +ywm,
                                    "zwx": zwx,
                                    "zwm": zwm,
                                    "zwxm": zwx + zwm,
                                    "zwxmgb2312": zwx + zwm,
                                    "zwxmft": zwx + zwm,
                                    "xb": xb,
                                    "csrq": csrq,
                                    "sfzh": id,
                                    "gjdq": "CHN",
                                    "rydylb": "R",
                                    "csd": csd,
                                    "xxid": "",
                                    "sqlb": "101",
                                    "bzlb": "11",
                                    "bm": "",
                                    "mz": mz,
                                    "hyzk": "",
                                    "zzmm": "",
                                    "whcd": "",
                                    "gzdw": "",
                                    "zy": "",
                                    "zwzc": "",
                                    "lxdh": lxdh,
                                    "sfxtkzd": "0",
                                    "sjr": sjr,
                                    "yzbm": yzbm,
                                    "emsdz": emsdz,
                                    "sfxsjfsspzk": "0",
                                    "sjhm": sjhm,
                                    "swbadwbh": "",
                                    "swbadwmc": "",
                                    "dbdw": "",
                                    "hkszd": hkszd,
                                    "sspcs": [hkszd],
                                    "jtzz": "",
                                    "brjl": "",
                                    "qwd": "",
                                    "cjsy": "",
                                    "xczjzl": "",
                                    "xczjhm": xczjhm,
                                    "xczjqfrq": "",
                                    "xczjyxqz": "",
                                    "slrq": "",
                                    "slr": zwx + zwm,
                                    "xxrs": "",
                                    "bz": "",
                                    "sfxxz": normalsfxxz,
                                    "sfxqz": "",
                                    "sfxjz": "",
                                    "tbdwbh": "",
                                    "xxly": "",
                                    "djsy": "",
                                    "gaqsywxm": "",
                                    "gaqszwxm": "",
                                    "gaqsxb": "",
                                    "gaqscsrq": "",
                                    "ysqrgx": "",
                                    "gaqssfzhm": "",
                                    "gaqssclqsfzsj": "",
                                    "xgsfzfhbzdm": "",
                                    "gajmlwndtxhm": "",
                                    "hshdhyfga": "",
                                    "jhsj": "",
                                    "fjsj": "",
                                    "jcsx": "",
                                    "sfhs": "",
                                    "hszk": "",
                                    "pzwh": "",
                                    "jjqklxr": jjqklxr,
                                    "jjqklxrdh": jjqklxrdh,
                                    "sqh": workId

                                }
                            }
                        };
                        
            let gangAoApply = {
                            "sqlb": "102",
                            "info": {
                                "cjsqxx": {
                                    "ywbh": this.ywbhaocode,
                                    "ywx": ywx,
                                    "ywm": ywm,
                                    "ywxm": ywx + " " +ywm,
                                    "zwx": zwx,
                                    "zwm": zwm,
                                    "zwxm": zwx + zwm,
                                    "zwxmgb2312": zwx + zwm,
                                    "zwxmft": zwx + zwm,
                                    "xb": xb,
                                    "csrq": csrq,
                                    "sfzh": id,
                                    "gjdq": "CHN",
                                    "rydylb": "R",
                                    "csd": csd,
                                    "xxid": "",
                                    "sqlb": "102",
                                    "bzlb": "11",
                                    "bm": "",
                                    "mz": mz,
                                    "hyzk": "",
                                    "zzmm": "",
                                    "whcd": "",
                                    "gzdw": "",
                                    "zy": "",
                                    "zwzc": "",
                                    "lxdh": lxdh,
                                    "sfxtkzd": "0",
                                    "sjr": sjr,
                                    "yzbm": yzbm,
                                    "emsdz": emsdz,
                                    "sfxsjfsspzk": "0",
                                    "sjhm": sjhm,
                                    "swbadwbh": "",
                                    "swbadwmc": "",
                                    "dbdw": "",
                                    "hkszd": hkszd,
                                    "sspcs": [hkszd],
                                    "jtzz": "",
                                    "brjl": "",
                                    "qwd": "",
                                    "cjsy": "",
                                    "xczjzl": "",
                                    "xczjhm": xczjhm,
                                    "xczjqfrq": "",
                                    "xczjyxqz": "",
                                    "slrq": "",
                                    "slr": zwx + zwm,
                                    "xxrs": "",
                                    "bz": "",
                                    "sfxxz": gangsfxxz,
                                    "sfxqz": "1",
                                    "sfxjz": "",
                                    "tbdwbh": "",
                                    "xxly": "",
                                    "djsy": "",
                                    "gaqsywxm": "",
                                    "gaqszwxm": "",
                                    "gaqsxb": "",
                                    "gaqscsrq": "",
                                    "ysqrgx": "",
                                    "gaqssfzhm": "",
                                    "gaqssclqsfzsj": "",
                                    "xgsfzfhbzdm": "",
                                    "gajmlwndtxhm": "",
                                    "hshdhyfga": "香港:团队旅游 三个月一次澳门:团队旅游 一年一次",
                                    "jhsj": "",
                                    "fjsj": "",
                                    "jcsx": "",
                                    "sfhs": "",
                                    "hszk": "",
                                    "pzwh": "",
                                    "jjqklxr": jjqklxr,
                                    "jjqklxrdh": jjqklxrdh,
                                    "sqh": workId
                                },
                                "qzblxx": [
                                    {
                                        "ywbh": this.ywbhaocode,
                                        "xh": "",
                                        "qwd": "HKG",
                                        "zjzl": "",
                                        "zjhm": gangAozjhm,
                                        "qzzl": gangqzzl,
                                        "qzhm": "",
                                        "qzyxq": "",
                                        "qzyxqdw": "",
                                        "qzyxcs": gangqzyxcs,
                                        "qzqsrq": "",
                                        "qzzzrq": "",
                                        "qztlqx": "",
                                        "qzqfjg": "",
                                        "qzqfrq": "",
                                        "gtbpwh": "",
                                        "rjxklb": "",
                                        "rjxkhm": "",
                                        "rjxkqsrq": "",
                                        "rjxkzzrq": "",
                                        "rjxkyxq": "",
                                        "rjxkyxqdw": "",
                                        "sfqrbz": "",
                                        "bz": "",
                                        "rjxkzl": "",
                                        "tbdwbh": ""
                                    },
                                    {
                                        "ywbh": this.ywbhaocode,
                                        "xh": "",
                                        "qwd": "MAC",
                                        "zjzl": "",
                                        "zjhm": gangAozjhm,
                                        "qzzl": aoqzzl,
                                        "qzhm": "",
                                        "qzyxq": "",
                                        "qzyxqdw": "",
                                        "qzyxcs": aoqzyxcs,
                                        "qzqsrq": "",
                                        "qzzzrq": "",
                                        "qztlqx": "",
                                        "qzqfjg": "",
                                        "qzqfrq": "",
                                        "gtbpwh": "",
                                        "rjxklb": "",
                                        "rjxkhm": "",
                                        "rjxkqsrq": "",
                                        "rjxkzzrq": "",
                                        "rjxkyxq": "",
                                        "rjxkyxqdw": "",
                                        "sfqrbz": "",
                                        "bz": "",
                                        "rjxkzl": "",
                                        "tbdwbh": ""
                                    }
                                ]
                            }
                        };
            let taiApply = {
                "sqlb": "104",
                "info": {
                    "cjsqxx": {
                        "ywbh": this.ywbhtaicode,
                        "ywx": ywx,
                        "ywm": ywm,
                        "ywxm": ywx + " " +ywm,
                        "zwx": zwx,
                        "zwm": zwm,
                        "zwxm": zwx + zwm,
                        "zwxmgb2312": zwx + zwm,
                        "zwxmft": zwx + zwm,
                        "xb": xb,
                        "csrq": csrq,
                        "sfzh": id,
                        "gjdq": "TWN",
                        "rydylb": "R",
                        "csd": csd,
                        "xxid": "",
                        "sqlb": "104",
                        "bzlb": "11",
                        "bm": "",
                        "mz": mz,
                        "hyzk": "",
                        "zzmm": "",
                        "whcd": "",
                        "gzdw": "",
                        "zy": "",
                        "zwzc": "",
                        "lxdh": lxdh,
                        "sfxtkzd": "0",
                        "sjr": sjr,
                        "yzbm": yzbm,
                        "emsdz": emsdz,
                        "sfxsjfsspzk": "0",
                        "sjhm": sjhm,
                        "swbadwbh": "",
                        "swbadwmc": "",
                        "dbdw": "",
                        "hkszd": hkszd,
                        "sspcs": [hkszd],
                        "jtzz": "",
                        "brjl": "",
                        "qwd": "TWN",
                        "cjsy": taicjsy,
                        "xczjzl": "",
                        "xczjhm": xczjhm,
                        "xczjqfrq": "",
                        "xczjyxqz": "",
                        "slrq": "",
                        "slr": zwx + zwm,
                        "xxrs": "",
                        "bz": "",
                        "sfxxz": taisfxxz,
                        "sfxqz": "1",
                        "sfxjz": "",
                        "tbdwbh": "",
                        "xxly": "",
                        "djsy": "",
                        "gaqsywxm": "",
                        "gaqszwxm": "",
                        "gaqsxb": "",
                        "gaqscsrq": "",
                        "ysqrgx": "",
                        "gaqssfzhm": "",
                        "gaqssclqsfzsj": "",
                        "xgsfzfhbzdm": "",
                        "gajmlwndtxhm": "",
                        "hshdhyfga": "台湾:团队旅游 六个月一次",
                        "jhsj": "",
                        "fjsj": "",
                        "jcsx": "",
                        "sfhs": "",
                        "hszk": "",
                        "pzwh": "",
                        "jjqklxr": jjqklxr,
                        "jjqklxrdh": jjqklxrdh,
                        "sqh": workId
                    },
                    "qzblxx": [
                        {
                            "ywbh": this.ywbhtaicode,
                            "xh": "",
                            "qwd": "TWN",
                            "zjzl": "",
                            "zjhm": taizjhm,
                            "qzzl": taiqzzl,
                            "qzhm": "",
                            "qzyxq": "",
                            "qzyxqdw": "",
                            "qzyxcs": "1",
                            "qzqsrq": "",
                            "qzzzrq": "",
                            "qztlqx": "",
                            "qzqfjg": "",
                            "qzqfrq": "",
                            "gtbpwh": "",
                            "rjxklb": "",
                            "rjxkhm": "",
                            "rjxkqsrq": "",
                            "rjxkzzrq": "",
                            "rjxkyxq": "",
                            "rjxkyxqdw": "",
                            "sfqrbz": "",
                            "bz": "",
                            "rjxkzl": "",
                            "tbdwbh": ""
                        }
                    ]
                }
            };

            // 判断需要传普通港澳台哪些数据
            let crjTypeInfo = [];
            for (let index = 0; index < applyType.length; index++) {
                switch (applyType[index].value) {
                    case 101:
                        crjTypeInfo.push(nomalApply);
                        break;
                    case 102:
                        crjTypeInfo.push(gangAoApply);
                        break;
                    case 104:
                        crjTypeInfo.push(taiApply);
                        break;
                    default:
                        break;
                }
            }
            
            
            let transferData = {
                "txnCommCom": {
                    "tenant": "530000000000",
                    "txn_itt_chnl_id": "00",
                    "txn_itt_chnl_type": "11",
                    "C-Business-Id": "111111111"
                },
                "txnBodyCom": {
                    // e26442ef4b0a4450acb6817f2b65c2fb
                    // "work_id":"7be515db18bb4d9c8a6700e05e89962a",   
                    // "matter_id":"873be12f28ff4b67a78ce3729e09725c",                  
                    // "member_id":"123456",             
                    "work_id":sessionStorage.getItem("WorkId"), 
                    "matter_id":sessionStorage.getItem("matterid"),
                    "member_id":sessionStorage.getItem("userid"),                
                    "json_content":{
                        "work_id":sessionStorage.getItem("WorkId"),
                        "guid": "",
                        "yydate": sessionStorage.getItem("GATDate"),
                        "yytime": sessionStorage.getItem("GATTime"),
                        "yyswxw": "0",
                        "deptId": JSON.parse(sessionStorage.getItem("GATpoint")).branch_code,
                        "orderid": this.orderid,
                        "matNum": matNum,
                        // "accountId": sessionStorage.getItem("userphone"),
                        "accountId": lxdh,
                        "netProjectType": "BST",
                        "tskSource": "CRJ",
                        "souceId": "办事通出入境预约",
                        "hzYwlx": "crj_mat_stablejob",
                        "isMailMertal": "N",
                        "sqr": zwx + zwm,
                        "idNum": id,
                        "applyType": "1",
                        "matSubType": "01",
                        "crjTypeNames": crjTypeNames,
                        "crjTypeInfo": crjTypeInfo
                    }
                    
                }
            }
            console.log(transferData)
            // console.log(JSON.stringify(transferData))
            sessionStorage.setItem("successState",0)
            this.setFormData({formData: transferData})
            this.$router.push({name: 'resultPage'})

            // this.ajax(transferData);
        }
    }
}
</script>
