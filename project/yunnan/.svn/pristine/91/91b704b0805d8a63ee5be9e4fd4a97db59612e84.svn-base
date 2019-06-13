<template>
    <div class="unitBasicInfo">
        <towtop :name="titlename"/>
      <div class="middleone">
        <span class="middletwo">*</span>
        <Field type="text" label="单位名称" disabled  placeholder="请输入单位名称" v-model="company" ></Field>
      </div>
        <Field type="text" label="法定代表人/负责人"  placeholder="请输入法定代表人/负责人" v-model="principal" ></Field>
      <div class="middleone">
        <span class="middletwo">*</span>
        <Field type="text" label="地址"  placeholder="请输入地址" v-model="site" ></Field>
      </div>
        <!-- <Field type="text" label="单位类型"  placeholder="请输入单位类型" v-model="companytype" ></Field> -->
      <div class="middleone">
        <span class="middletwo">*</span>
        <Field readonly label="单位类型" desc="" disableclear type="text" placeholder="请选择单位类型" :value="companytype" @click.native="open('pickerselect05')">
        </Field>
      </div>
        <Selectpopup ref="pickerselect05" position="bottom" :dataslots="selectData05" :visible-item-count="5" class="example-select_item"  @confirms="select05">
        </Selectpopup>
      <div class="middleone">
        <span class="middletwo">*</span>
        <Field type="text"  label="统一社会信用代码"  placeholder="请输入统一社会信用代码" v-model="creditcode" ></Field>
      </div>
      <div class="middleone">
        <span class="middletwo">*</span>
        <Field type="text"  label="联系人"  placeholder="请输入联系人" v-model="linkmanname"  ></Field>
      </div>
      <div class="middleone">
        <span class="middletwo">*</span>
        <Field type="text"  label="联系手机"  placeholder="请输入联系手机" v-model="linkmanphone"  ></Field>
      </div>
      <div class="middleone">
        <span class="middletwo">*</span>
        <Field readonly label="所属税务机关(省/市)" desc="" disableclear type="text" placeholder="请选择"  :value="confirmValSelect01" @click.native="open('pickerselect01')">
        </Field>
      </div>
        <Selectpopup ref="pickerselect01" position="bottom" :dataslots="selectData01" :visible-item-count="5" class="example-select_item"  @confirms="select01">
        </Selectpopup>
      <div class="middleone">
        <span class="middletwo">*</span>
        <Field readonly label="所属税务机关" desc="" disableclear type="text" placeholder="请选择"  :value="citysw" @click.native="DsOpen('pickerselect02')">
        </Field>
      </div>
        <Selectpopup ref="pickerselect02" position="bottom" :dataslots="selectData02" :visible-item-count="5" class="example-select_item"  @confirms="select02">
        </Selectpopup>
      <div class="middleone">
        <span class="middletwo">*</span>
        <Field readonly label="报审残联(省/市)" desc="" disableclear type="text" placeholder="请选择"  :value="confirmValSelect03" @click.native="open('pickerselect03')">
        </Field>
      </div>
        <Selectpopup ref="pickerselect03" position="bottom" :dataslots="selectData03" :visible-item-count="5" class="example-select_item"  @confirms="select03">
        </Selectpopup>
        <div v-if="isshowbscl">
          <div class="middleone">
            <span class="middletwo">*</span>
          <Field readonly label="报审残联" desc="" disableclear type="text" placeholder="请选择"  :value="city" @click.native="yearOpen('pickerselect04')">
          </Field>
          </div>
          <Selectpopup ref="pickerselect04" position="bottom" :dataslots="selectData04" :visible-item-count="5" class="example-select_item"  @confirms="select04">
          </Selectpopup>
        </div>
        <Field v-else type="text"  label="报审残联" disabled  placeholder="请输入报审残联" v-model="city" ></Field>
        <div class="yyy">
            <div class="title1"><p>材料提交</p></div>
            <div class="example-upload" v-if="arr.length">
                <div v-for="(item,index) in arr" :key="index">
                    <!-- //上传图片循环.. -->
                    <div class="example-upload_formItem">
                      <span class="middleStar">*</span>
                        <label class="example-upload_formLabel">{{ item.file_name }}</label>
                        <div class="example-upload_formText">
                            <!--上传-->
                            <div class="example-upload">
                                <!--自定义上传图片-->
                                <ccbUpload :name='item.imgname' :upload-id=item.file_name @uploadRes='handleRes' app-id="GSP_APP_001" bucket-id="GSP_PRIVATE" pic-url-pre-fixed="/image-service/downloadImage?" :upload-index='index'>
                                    <span class="example-upload_btn">添加</span>
                                </ccbUpload>
                                <div v-if="flag" class="example-upload_list">
                                    <div class="example-upload_item" v-for="(subitem,subindex) in item.uploadId" :key="subindex">
                                        <img v-if="subitem.FuJian" :src="'data:image/png;base64,'+subitem.FuJian" />
                                        <img v-else :src="subitem.fileUrl"  @click="previewHandle(subitem.fileUrl)"/>
                                        <span class="example-upload_item-cover">
                                      <em class="example-upload_item-delete" @click="handleRemove(index,subindex,item.uploadId)">X</em>
                                      </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <Btn plain block @click="submitBtn()">下一步</Btn> -->
        <div class="padTopAdd5">
          <mybutton :btnData="btnData" @click="submitBtn" />
        </div>
        <img-preview :show="isShow" :data="currentImgUrl" @callback="setShow"/>
    </div>
</template>
<script>
import towtop from "../../../components/HederTwo";
import { cenurl } from "../../../components/toptow.js";
import ccbUpload from "../../../components/ccb-upload";
import { setTimeout } from "timers";
import imgPreview from '../../../components/imgPreview'
import mybutton from "../../../components/MyButton";

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
      titlename: "用人单位比例安排残疾人就业年审",
      defaultList: [],
      number: "",
      carMsg: "",
      datatext: "",
      company: "",
      principal: "",
      site: "",
      DwLxDm:'',
      companytype: "",
      creditcode: "",
      linkmanname: "",
      linkmanphone: "",
      isshowbscl:true,
      arr: [
        {
          file_name: "云南省残疾人按比例就业年审申报表/行政登记证书",
          uploadId: [],
          imgname: "ynprovdfrmtpctemptbl"
        }
        //{ file_name: "行政登记证书", uploadId: [], imgname: "admnrgsctf" }
      ],
      arrs: [],
      comeReason: "",
      textValue: "",
      cen: "12312",
      flag: false,
      isShow: false,
      currentImgUrl: '',
      confirmValSelect01: "",
      confirmValSelect03: "",
      selectData01: [
        {
          flex: 1,
          values: [],
          showText: "dataNm",
          className: "slot1",
          textAlign: "center"
        }
      ],
      selectData05: [
        {
          flex: 1,
          values: [
          ],
          showText: "cmnCdNm",
          className: "slot1",
          textAlign: "center"
        }
      ],
      selectData02: [
        {
          flex: 1,
          values: [],
          showText: "dataNm",
          className: "slot1",
          textAlign: "center"
        }
      ],
      selectData03: [
        {
          flex: 1,
          values: [],
          showText: "dataNm",
          className: "slot1",
          textAlign: "center"
        }
      ],
      selectData04: [
        {
          flex: 1,
          values: [],
          showText: "dataNm",
          className: "slot1",
          textAlign: "center"
        }
      ],
      city: "",
      citysw: "",
      cityswcode:'',
      bsclcode:'',
      Swdata: [],
      Swdatas: [],
      Codenum:''
    };
  },
  components: {
    towtop,
    ccbUpload,
    imgPreview,
    mybutton
  },
  created() {
      // window.sessionStorage.setItem("companyName",'南华县腾龙物流有限公司')
      // window.sessionStorage.setItem("socialNumber",'91532324778596925L')
    if(window.sessionStorage.getItem('socialNumber')  == 'null' || window.sessionStorage.getItem('socialNumber') == ''){
      this.$toast('办理该事项必须由法人授权的用户或已实名认证的法人用户')
      return false
    }
    const setdata = {
      txnCommCom: { tRecInPage: "11" },
      txnBodyCom: {
        matter_id:window.sessionStorage.getItem("matterid"),
        chann_id: "1",
        JiaoFeiRMC: window.sessionStorage.getItem("companyName"),
        SheHuiSYDM: window.sessionStorage.getItem("socialNumber")
        // JiaoFeiRMC:'测试企业1',
        // SheHuiSYDM: '123456789012345671'//'91532324778596925L'
      }
    };
    this.$ajaxRequest("post", "/gsp/mng80024", setdata).then(res => {
      this.datatext = res;
      this.Codenum=this.datatext.FuJianDM
      this.company = window.sessionStorage.getItem("companyName");
      this.principal = this.datatext.FaRenDB;
      this.site = this.datatext.JiaoFeiRDZ;
      this.companytype = this.datatext.JiaoFeiRLX;
      this.creditcode = window.sessionStorage.getItem("socialNumber");
      this.linkmanname = this.datatext.JingBanR;
      this.linkmanphone = this.datatext.LianXiDH;
      this.citysw = this.datatext.ZhuGuanSW;
      this.city = this.datatext.BaoShenCLJG;
      this.DwLxDm=this.datatext.JiaoFeiRLXDM
      window.sessionStorage.setItem('compancode',this.datatext.Code)
      this.getimg();
    });
  },
  mounted(){
    this.getSWjg("CLJG", "-1", "0");
    this.getSWjg("CLBS", "530000", "2");
    this.companytypejson()
  },
  methods: {
    // /***滑动限制***/
    // stop(){
    //   window.lastScrollTop  = document.body.scrollTop || document.documentElement.scrollTop;
    //    //var mo=function(e){e.preventDefault();};
    //    var wHeight = $(window).height();
    //    $('html').css({'height':wHeight,'overflow':'hidden'});
    //    $('body').css({'height':wHeight,'overflow':'hidden'});
    //   //document.addEventListener("touchmove",mo,false);//禁止页面滑动
    // },
    // /***取消滑动限制***/
    // move(){
    //   //var mo=function(e){e.preventDefault();};
    //   //document.body.style.overflow='';//出现滚动条
    //   $('html').css({'height':'100%','overflow':''});
    //   $('body').css({'height':'100%','overflow':''});
    //   $(window).scrollTop(window.lastScrollTop);
    //   //document.removeEventListener("touchmove",mo,false);
    // },
    open(picker) {
      window.scrollTo(0,0)
      this.$refs[picker].open();
      document.activeElement.blur();
      window.scrollTo(0,0);
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    // FuJianDM(){
    //   var times = new Date()
    //   let Monthcode=times.getMonth() + 1<10?'0'+(times.getMonth() + 1).toString():(times.getMonth() + 1).toString()
    //   let Datecode=times.getDate() <10?'0'+times.getDate().toString():times.getDate().toString()
    //   let Hourscode=times.getHours()<10?'0'+times.getHours().toString():times.getHours().toString()
    //   let Minutescode=times.getMinutes() <10?'0'+times.getMinutes().toString():times.getMinutes().toString()
    //   let Secondscode=times.getSeconds() <10?'0'+times.getSeconds().toString():times.getSeconds().toString()
    //   let Millisecondscode=times.getMilliseconds()<10?'00'+times.getMilliseconds().toString():times.getMilliseconds()<100?'0'+times.getMilliseconds().toString():times.getMilliseconds().toString()
    //   var timescode = times.getFullYear().toString()+Monthcode+Datecode+Hourscode+Minutescode+Secondscode+Millisecondscode
    //   let n=''
    //   for(var i = 0; i < 13; i++){
    //     n += Math.floor(Math.random() * 10).toString();
    //   }
    //   return timescode+'01'+n
    // },
    select01(selectedVal) {
      console.log(selectedVal);
      if (this.selectFlag) {
        this.cityname = selectedVal[0].text;
        this.citytype = selectedVal[0].value;
      } else {
        this.confirmValSelect01 = selectedVal[0].dataNm;
        this.getSWjg("CLJG", selectedVal[0].currentCode, "1");
        this.citysw = "";
      }
    },
    select05(selectedVal) {
      console.log(selectedVal);
      if (this.selectFlag) {
        this.cityname = selectedVal[0].text;
        this.citytype = selectedVal[0].value;
      } else {
        this.companytype = selectedVal[0].cmnCdNm;
        this.DwLxDm=selectedVal[0].cmnCd
      }
    },
    select03(selectedVal) {
      console.log(selectedVal);
      if (this.selectFlag) {
        this.cityname = selectedVal[0].text;
        this.citytype = selectedVal[0].value;
      } else {
        this.confirmValSelect03 = selectedVal[0].dataNm;
        if(this.confirmValSelect03=="云南省残疾人劳动就业服务中心"){
          this.city = this.confirmValSelect03;
          this.isshowbscl=!this.isshowbscl
          this.bsclcode=selectedVal[0].currentCode
          return false
        }else{
          this.isshowbscl=true
          this.getSWjg("CLBS", selectedVal[0].currentCode, "3");
          this.city = "";
        }
      }
    },
    DsOpen(picker) {
      if (this.confirmValSelect01 == "") {
        this.$toast("请先选择所属地税机关(省/市)");
        return;
      }
      this.selectFlag = false;
      this.selectData02[0].values = this.Swdata;
      this.$refs[picker].open();
      document.activeElement.blur();
      window.scrollTo(0,99999);
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    select02(selectedVal) {
      if (this.selectFlag) {
        this.cityname = selectedVal[0].text;
        this.citytype = selectedVal[0].value;
      } else {
        this.citysw = selectedVal[0].dataNm;
        this.cityswcode=selectedVal[0].currentCode
      }
    },
    yearOpen(picker) {
      if (this.confirmValSelect03 == "") {
        this.$toast("请先选择报审残联(省/市)");
        return;
      }
      this.selectFlag = false;
      this.selectData04[0].values = this.Swdatas;
      this.$refs[picker].open();
      document.activeElement.blur();
      window.scrollTo(0,99999);
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    select04(selectedVal) {
      if (this.selectFlag) {
        this.cityname = selectedVal[0].text;
        this.citytype = selectedVal[0].value;
      } else {
        this.city = selectedVal[0].dataNm;
        this.bsclcode=selectedVal[0].currentCode
      }
    },
    getSWjg(ctype, idcode, pdcode) {
      const setdata = {
        txnCommCom: { tRecInPage: "11" },
        txnBodyCom: {
          clType: ctype,
          parentCode: idcode,
          matter_id:window.sessionStorage.getItem("matterid")
        }
      };
      this.$ajaxRequest("post", "/gsp/mng19028", setdata)
        .then(res => {
          console.log(res);
          if (pdcode == 0) {
            this.selectData01[0].values = res;
          } else if (pdcode == 1) {
            this.Swdata = res;
          } else if (pdcode == 2) {
            this.selectData03[0].values = res;
          } else {
            this.Swdatas = res;
          }
        })
        .catch(response => {});
    },
    companytypejson() {
      const setdata = {
        txnCommCom: { tRecInPage: "11" },
        txnBodyCom: {
          parentId:"1025",
          matter_id:window.sessionStorage.getItem('matterid')
        }
      };
      this.$ajaxRequest("post", "/gsp/mng19019", setdata)
        .then(res => {
          console.log(res);
          this.selectData05[0].values=res
        })
        .catch(response => {});
    },
    getimg() {
      console.log(this.Codenum)
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
          FuJianDM: this.Codenum
        }
      };
      this.$ajaxRequest("post", "/gsp/mng80104", setdata)
        .then(res => {
          console.log(res);
          this.arr[0].uploadId=res.rows!=undefined&&res.rows!=''?res.rows:this.arr[0].uploadId;
          console.log(this.arr[0])
          this.flag = true;
        })
        .catch(response => {});

    },
    submitBtn() {
      if (this.confirmValSelect02 == "") {
        this.$toast("请选择所属地税机关");
        return;
      } else if (this.city == "") {
        this.$toast("请选择报审残联");
        return;
      }
      this.submit();
    },
    submitimg() {
      console.log(this.arr[0])
      let listnumber=0;
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
            fileInfo: [{ fileName: this.arr[0].uploadId[i].MingCheng, filePath: 'GSP_PRIVATE'}]
          }
        };
        this.$ajaxRequest("post", "/gsp/mng80030", setdata)
          .then(res => {
            console.log(res);
            listnumber+=1
            if(listnumber==this.arr[0].uploadId.length){
              this.$router.push("/employment");
            }
          })
          .catch(response => {});
      }

    },
    removeimg(index, subindex, uploadId) {
      //debugger
      let dataval=this.arr[index].uploadId[subindex]
      if(dataval.Code){
        const setdata = {
        txnCommCom: {
          tStsTraceId: "2018112915",
          txnIttChnlId: 'C0011234567890987654321',
          txnIttChnlCgyCode: 'AC02C001'
        },
        txnBodyCom: {
          FuJianDM:dataval.Code,//dataval.Code,
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
      }else{
        this.arr[index].uploadId.splice(subindex, 1);
        this.flag = true;
      }
    },
    submit() {
      if(window.sessionStorage.getItem('socialNumber')  == 'null' || window.sessionStorage.getItem('socialNumber') == ''){
        this.$toast('办理该事项必须由法人授权的用户或已实名认证的法人用户')
        return false
      }
      let yeartime=new Date()
      if(!this.company){
        this.$toast("请输入单位名称");
        return;
      }else if(!this.$VerifyName.test(this.principal)){
        this.$toast("请输入法定代表人/负责人");
        return;
      }else if(!this.site){
        this.$toast("请输入地址");
        return;
      }else if(!this.companytype){
        this.$toast("请选择单位类型");
        return;
      }else if(!/^[A-Za-z0-9]{18}$/.test(this.creditcode)){
        this.$toast("请输入正确的统一社会信用代码！");
        return;
      }else if(!this.$VerifyName.test(this.linkmanname)){
        this.$toast("请输入联系人");
        return;
      }else if(!this.$VerifyPhone.test(this.linkmanphone)){
        this.$toast("请输入正确的联系手机号码！");
        return;
      }else if(!this.citysw){
        this.$toast("请选择所属税务机关");
        return;
      }else if(!this.city){
        this.$toast("请选择报审残联");
        return;
      }else if(this.arr[0].uploadId.length<1){
        this.$toast("请上传附件");
        return;
      }
      const setdata = {
        txnCommCom: {
          txnlttChnlld: "99999",
          txnlttchnlcgycode: "999999",
          tststraceld: "11056"
        },
        txnBodyCom: {
          unit_id: this.datatext.ID!=-1?this.datatext.ID:0,
          idv_nm: this.company,
          unn_soc_cr_cd: this.creditcode,
          lg_rps: this.principal,
          pyf_psn_adr: this.site,
          pyf_psn_tp: this.companytype,
          pyf_psn_tpcd: this.DwLxDm,
          rspb_psn: this.linkmanname,
          mblph_no: this.linkmanphone,
          spvs_tax: this.citysw,
          spvs_tax_cd: this.cityswcode,
          rep_cdpf: this.city,
          rep_cdpf_cd: this.bsclcode,
          atch_cd: this.datatext.FuJianDM,
          rmrk: this.datatext.BeiZhu,
          lastyr_ar_dfrmt_snum: this.datatext.ShangNianAZCJZGRS,
          only1_ecd: this.datatext.Code,
          yr: yeartime.getFullYear()
        }
      };
      this.$ajaxRequest("post", "/gsp/mng90018", setdata)
        .then(res => {
          console.log(res);
          res = JSON.parse(res.result)
          if(res.Success==false){
            this.$toast(res.Message);
            return;
          }else{
            console.log(res)
            this.Codenum=res.FuJianDM
            this.submitimg();
          }
        })
        .catch(response => {});
    },
    handleRes(data) {
      //添加图片上传]
      console.log(data);
      console.log(this.flag);
      this.flag = true;
      console.log(this.arr[0].uploadId)
      console.log(this.arr[0].uploadId.length)
      const inum=this.arr[0].uploadId.length
      if(this.arr[0].uploadId.length!=0){
        this.arr[0].uploadId.push(data);
        for(var i=inum,len=this.arr[0].uploadId.length;i<len;i++){
          this.arr[0].uploadId[i].LuJing=this.arr[0].uploadId[i].fileUrl
          this.arr[0].uploadId[i].MingCheng=this.arr[0].uploadId[i].ObjNm
          this.arr[0].uploadId[i].file_path = "GSP_PRIVATE"
        }
      }else{
        this.arr[0].uploadId.push(data);
        for(var i=0,len=this.arr[0].uploadId.length;i<len;i++){
          this.arr[0].uploadId[i].LuJing=this.arr[0].uploadId[i].fileUrl
          this.arr[0].uploadId[i].MingCheng=this.arr[0].uploadId[i].ObjNm
          this.arr[0].uploadId[i].file_path = "GSP_PRIVATE"
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
      this.isShow = data
    },
    previewHandle(data, index) {
      this.isShow = true
      this.currentImgUrl = data
    }
  }
};
</script>

<style  >
.unitBasicInfo.hui-tabs_bar {
  background-color: #fff;
}

.unitBasicInfo.hui-tabs_mini .hui-tabs_tab {
  font-size: 0.28rem;
}
.unitBasicInfo.hui-tabs_tabpane {
  padding-top: 0.2rem;
  font-size: 0.28rem;
}
.unitBasicInfo.hui-field_core {
  text-align: right;
}
.unitBasicInfo.hui-field_star {
  display: none;
}
.unitBasicInfo.hui-field {
  width: 95%;
  margin: 0 auto;
  height: 1rem;
  font-size: 0.28rem;
  line-height: 1rem;
  padding: 0 .15rem !important;
}
.unitBasicInfo.hui-field_title {
  width: 3rem;
}
.unitBasicInfo.hui-field_value {
  width: 40%;
}
.unitBasicInfo.hui-btn.is-block {
  width: 5.9rem;
  height: 0.9rem;
  margin: 1rem auto;
  background-color: #2d7ffc;
  font-size: 0.32rem;
  color: #fff;
}
.unitBasicInfo .title1 {
  width: 100%;
  margin: 0 auto;
}
.unitBasicInfo p {
  width: 90%;
  height: 0.8rem;
  line-height: 0.8rem;
  margin: 0 auto;
  text-align: left;
  color: #999;
  font-size: 0.28rem;
}
.unitBasicInfo .example-upload_btn {
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
.unitBasicInfo .hui-btn.is-block {
  width: 5.9rem;
  height: 0.9rem;
  margin: 1rem auto;
  background-color: #2d7ffc;
  font-size: 0.32rem;
  color: #fff;
  /*z-index: 11;*/
}
.unitBasicInfo .example-upload_formItem {
  font-weight: 700;
  width: 100% !important;
  text-align: left;
  font-size: 0.28rem;
  background-color: #fff;
  padding: 0.2rem 0.2rem 0.25rem;
}
.unitBasicInfo .example-upload_formItem .ge_ceng {
  width: 90%;
  margin: 0 auto;
}
.unitBasicInfo .b1 {
  display: inline-block;
  width: 0.06rem;
  height: 0.24rem;
  background-color: #257bff;
  margin-right: 0.1rem;
}

.unitBasicInfo .middle {
  width: 90%;
  margin: 0.5rem auto;
  height: 0.01rem;
  background-color: #ccc;
  border-top: 0.01rem solid #ccc;
}
.unitBasicInfo .example-upload_list {
  padding-top: 0.5rem;
}
.unitBasicInfo .example-upload_item {
  display: inline-block;
  width: 2.1rem;
  height: 1.8rem;
  margin: 0.2rem 0.2rem 0.2rem 0;
}
.unitBasicInfo .example-upload_item img {
  display: inline-block;
  width: 1.8rem;
  height: 1.8rem;
}
.unitBasicInfo .middleone{
  position:relative;
}
.unitBasicInfo .middletwo{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: absolute;
  top: 38%;
  left:0.05rem;
}
.unitBasicInfo .middleStar{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: relative;
  top: 0.13rem;
}
</style>
