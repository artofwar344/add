<style lang="less" scoped>
.domesticFiveWrap {
  p {
    font-size: 0.28rem;
    padding: 0rem 0.4rem 0.2rem;
    box-sizing: border-box;
    color: #999;
    text-align: left;
  }
  .Ps{
      margin-top: .3rem;
      padding: 0rem .2rem;
      box-sizing: border-box;
      .wrap{
          text-align: left;
          margin-bottom: .3rem;
          padding: .1rem .1rem;
          background: #fff;
          border: solid 0.02rem #ccc;
          img{
              width: .22rem;
              vertical-align: middle;
              margin-right: .15rem;
          }
          span{
              font-size: .3rem;
                color: #3F3F3F;
          }
      }
      .wrap{
          span{
              color:#000;
              font-size: .32rem;
              font-weight: bold;
          }
      }
  }
  .btnWrap {
    margin-top: 1rem;
    padding: 0 0.8rem;
    font-size: 0.33rem;
    span {
      display: block;
      width: 100%;
      height: 0.9rem;
      border-radius: 40px;
      line-height: 0.9rem;
      text-align: center;
      background: #2d7ffc;
      color: white;
    }
  }
}
</style>
<style>
.domesticFiveWrap .hui-field {
  height: 1rem;
  padding: 0rem 0.2rem;
  box-sizing: border-box;
  border: none;
}
.domesticFiveWrap .hui-field_main {
  height: 100%;
  border-bottom: 1px solid #e1e2e6;
}
.domesticFiveWrap .hui-field_title {
  width: 2.3rem;
  /* height: 100%; */
}
.domesticFiveWrap .example-select_btn-wrapper {
  margin-top: 15px;
}
.domesticFiveWrap .example-select_arrowRight {
  display: block;
  margin-left: 0.1rem;
  width: 0.16rem;
  height: 0.26rem;
  background: url(../../../../assets/images/arrow.png) 0px center no-repeat;
  background-size: 100%;
}
.domesticFiveWrap .example-popup_wrapper {
    padding: 0 .4rem;
}
.domesticFiveWrap .hui-popupPrompt_title{
    font-size: .36rem;
    color: #333;
}
.domesticFiveWrap .hui-popupPrompt_title{
    margin: .36rem 0rem;
}
.domesticFiveWrap .hui-popupPrompt_btn-cancel{
  display: none;
}
.domesticFiveWrap .hui-popupPrompt_btn-confirm{
  width: 100%;
}
.domesticFiveWrap .middleone{
  position:relative;
}
.domesticFiveWrap .middletwo{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: absolute;
  top:36%;
  left:0;
}
.domesticFiveWrap .middleone1{
  position:relative;
}
.domesticFiveWrap .middletwo1{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: absolute;
  top:34%;
  left:0;
}
</style>


<template>
    <div class="domesticFiveWrap">
        <towtop :name="titlename"/>
        <div class="content">
            <p>请选择预约办理单位</p>
          <div class="middleone1">
            <span class="middletwo1">*</span>
             <Field  readonly label="州/市" type="text" placeholder="请选择您的州/市" :value="selectCity" @click.native="open('cityPicker')">
                    <span slot="append" class="example-select_arrowRight"></span>
            </Field>
          </div>
            <Selectpopup
                ref="cityPicker"
                position="bottom"
                :dataslots="cityPicker"
                class="example-select_item"
                @confirms="selectedCity"
            ></Selectpopup>
          <div class="middleone">
            <span class="middletwo">*</span>
            <Field  readonly label="区/县" type="text" placeholder="请选择您的区/县" :value="selectCounty" @click.native="open('countyPicker')">
                    <span slot="append" class="example-select_arrowRight"></span>
            </Field>
          </div>
            <Selectpopup
                ref="countyPicker"
                position="bottom"
                :dataslots="countyPicker"
                class="example-select_item"
                @confirms="selectedCounty"
            ></Selectpopup>

            <!-- <Field required readonly label="办理网点" type="text" placeholder="请选择您的办理网点" :value="selectPoint" @click.native="open('pointPicker')">
                    <span slot="append" class="example-select_arrowRight"></span>
            </Field>
            <Selectpopup
                ref="pointPicker"
                position="bottom"
                :dataslots="pointPicker"
                class="example-select_item"
                @confirms="selectedPoint"
            ></Selectpopup> -->
            <div class="Ps" v-if="messageData.length!=0">
              <p>请点击下方选项卡选择办理网点</p>
                <div class="wrap" v-for="(item,index) in messageData" :key="index" @click="clicktime(datamatter[index],index)">
                    <img :src="item.img" alt=""><span>{{item.p}}</span></br>
                    <img :src="item.img1" alt=""><span>{{item.p1}}</span></br>
                    <img :src="item.img2" alt=""><span>{{item.p2}}</span></br>
                </div>
            </div>
        </div>

        <div class="example-popup">
            <Popupprompt
                v-model="popupVisible5"
                close-on-click-modal
                :title="content.title"
                :text="content.text"
                :confirm-btn = "content.confirmBtn"
                :cancel-btn = "content.cancelBtn"
                @click = "clickbtn">
                <div slot="othercontent">
                </div>
            </Popupprompt>
        </div>

        <!-- <div class="btnWrap">
            <span @click="goto" >下一步</span>
        </div> -->
        <div class="padTopAdd5">
          <mybutton :btnData="btnData" @click="goto" />
        </div>
    </div>
</template>
<script>
import towtop from "@/components/HederTwo";
import locationUrl from "@/assets/images/entryExit/location.png";
import messagesUrl from "@/assets/images/entryExit/message.png";
import phoneUrl from "@/assets/images/entryExit/phone.png";
import { cenurl } from "../../../../components/toptow.js"
import mybutton from "../../../../components/MyButton";
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
      titlename: "出入境证件预受理",
      cityPicker: [
        {
          flex: 1,
          values: [],
          className: "slot1",
          showText: "text",
          defaultIndex: 0
        }
      ],
      selectCity: '',
      confirmCity:[],
      countyPicker: [
        {
          flex: 1,
          values: [],
          className: "slot1",
          showText: "text",
          defaultIndex: 0
        }
      ],
      selectCounty: '',
      confirmCounty:[],
      pointPicker: [
        {
          flex: 1,
          values: [],
          className: "slot1",
          showText: "text",
          defaultIndex: 0
        }
      ],
      confirmPoint:[],
      selectPoint: '',
      detailPointDate:[],
      messageData:[],
      datamatter:[],
      point:{},
      popupVisible5: false,
      content: {
          title: "温馨提示",
          text: "昆明卡式个人旅游签注申请可前往大厅自助机办理",
          confirmBtn: { //水平按钮-确定
            id: "confirm",
            text: "确定"
          },
          cancelBtn: { //水平按钮-取消
            id: "cancel",
            text: "取消"
          }
      },
    };
  },
  components: {
    mybutton,
    towtop
  },
  mounted(){
    let _self = this;
    //   获取市级
    let cityProp = {
        "txnBodyCom":{
          matter_id: window.sessionStorage.getItem("matterid"),
          "parentCode":'530000',
          "oType":'GAT'
        }
    };
    this.$ajaxRequest("post", "/gsp/mng19021", cityProp)
    .then(res => {
        if (res.length <= 0) {
              _self.$toast("搜索市级数据列表为空！");
            return false;
        } else {
            let cent = res
            for(var i=0,len=cent.length;i<len;i++){
              let temOb = {text:cent[i].regnNm,value:cent[i].regnCode};
              _self.cityPicker[0].values.push(temOb);
            }
        }
    })
    .catch(error => {
        console.log(error);
        _self.$toast("获取市级数据列表失败！");
    });


      if(sessionStorage.getItem("GATfirstlocal")){
        this.confirmCity = JSON.parse(sessionStorage.getItem("GATfirstlocal"))
        this.selectCity = this.confirmCity.text;
      }
      if(sessionStorage.getItem("GATsecondlocal")){
        this.confirmCounty = JSON.parse(sessionStorage.getItem("GATsecondlocal"))
        this.selectCounty = this.confirmCounty.text;
      }
      if(sessionStorage.getItem("GATpoint")){
        this.confirmPoint = JSON.parse(sessionStorage.getItem("GATpoint"))
        this.point = {};
        this.messageData=[]
        this.selectPoint = this.confirmPoint.branch_parent_name;
          this.messageData[0].push(
            {
              img:locationUrl,
              p:this.confirmPoint.branch_parent_name,
              img1:messagesUrl,
              p1:this.confirmPoint.branch_name,
              img2:phoneUrl,
              p2:this.confirmPoint.branch_tel_num
            }
          )


        // this.messageData[0].p = this.confirmPoint.branch_parent_name;
        // this.messageData[1].p = this.confirmPoint.branch_name;
        // this.messageData[2].p = this.confirmPoint.branch_tel_num;
      }
  },
  methods: {
    open(picker) {
      this.$refs[picker].open();
      document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    selectedCity(selectedVal) {
      this.selectCounty = '';
      this.selectPoint = '';
      this.confirmPoint = []
      if (typeof selectedVal[0] === "object") {
        this.selectCity = selectedVal[0].text;
        this.confirmCity = selectedVal[0];
      } else {
        this.selectCity = selectedVal;
      }
      // 判断是否昆明在时间页面进行不同接口请求
      if(this.confirmCity.value == this.cityPicker[0].values[0].value){
        this.isKunMing = '1';
        // 判断昆明市是否有港澳台的申请，有则弹框
        if(sessionStorage.GATgangAoApply || sessionStorage.GATgangAoApply){
          this.popupVisible5 = true;
        }
      }else{
        this.isKunMing = '0';
      }

      this.countyPicker[0].values.splice(0,this.countyPicker[0].values.length);
      let _self = this;
      //   获取区、县
      let countyProp = {
        "txnBodyCom":{
          matter_id: window.sessionStorage.getItem("matterid"),
            "parentCode":this.confirmCity.value,
            "oType":'GAT'
        }
      };
      this.$ajaxRequest("post", "/gsp/mng19021", countyProp)
      .then(res => {
          if (res.length <= 0) {
                _self.$toast("搜索区/县数据列表为空！");
              return false;
          } else {
              let cent = res
              for(var i=0,len=cent.length;i<len;i++){
                let temOb = {text:cent[i].regnNm,value:cent[i].regnCode};
              _self.countyPicker[0].values.push(temOb);
              }
          }
      })
      .catch(error => {
          console.log(error);
          _self.$toast("获取区/县数据列表失败！");
      });
      this.messageData=[]
      this.point=''
      this.confirmCounty.value=''
      this.getPointList(1)
    },
    clickbtn(id) {
        if(id =='confirm'){
          this.popupVisible5 = false;
        }
    },
    selectedCounty(selectedVal) {
      this.selectPoint = '';
      this.confirmPoint = []

      if (typeof selectedVal[0] === "object") {
        this.selectCounty = selectedVal[0].text;
        this.confirmCounty = selectedVal[0];
      } else {
        this.selectCounty = selectedVal;
      }
      this.messageData=[]
       this.point=''
      this.getPointList(2);
    },
    selectedPoint(selectedVal) {
      this.confirmPoint = []
      if (typeof selectedVal[0] === "object") {
        this.selectPoint = selectedVal[0].text;
        this.confirmPoint = selectedVal[0];
      } else {
        this.selectPoint = selectedVal;
      }
      // let pointArr = this.detailPointDate;
      // for (let index = 0; index < pointArr.length; index++) {
      //   if(this.confirmPoint.value == pointArr[index].branch_code){
      //       this.messageData[0].p = pointArr[index].branch_parent_name;
      //       this.messageData[1].p = pointArr[index].branch_name;
      //       this.messageData[2].p = pointArr[index].branch_tel_num;
      //       this.point = pointArr[index];
      //   }
      // }
    },
    getPointList(keycode){
      let _self = this;
      //  this.pointPicker[0].values.splice(0,this.pointPicker[0].values.length);
      //  获取办理网点
        let pointProp = {
          "txnBodyCom": {
            "city_name":this.confirmCity.value,
            "county_name":this.confirmCounty.value,
            "chann_id":"1",
            "matter_id":window.sessionStorage.getItem("matterid")
          }
        };
        let addData = {
            "tRecInPage": "999",
            "tPageJump": "1",
            "tStsTraceId": "110567890"
        };
        this.$ajaxRequest("post", "/gsp/mng80102", pointProp,addData)
        .then(res => {
            this.messageData=[]
            if (res.length <= 0) {
                  _self.$toast("搜索办理网点数据列表为空！");
                return false;
            } else {
                let cent = res
                this.datamatter=[]
                for(var i=0,len=cent.matterSEntryExits.length;i<len;i++){
                  if(cent.matterSEntryExits[i].branch_code.substring(4, 12)=='00000000'&&keycode==1){
                   this.datamatter.push(cent.matterSEntryExits[i])
                   this.messageData.push(
                      {
                        img:locationUrl,
                        p:cent.matterSEntryExits[i].branch_parent_name,
                        img1:messagesUrl,
                        p1:cent.matterSEntryExits[i].branch_name,
                        img2:phoneUrl,
                        p2:cent.matterSEntryExits[i].branch_tel_num
                      }
                    )
                  }else if(keycode==2){
                    this.datamatter.push(cent.matterSEntryExits[i])
                    this.messageData.push(
                      {
                        img:locationUrl,
                        p:cent.matterSEntryExits[i].branch_parent_name,
                        img1:messagesUrl,
                        p1:cent.matterSEntryExits[i].branch_name,
                        img2:phoneUrl,
                        p2:cent.matterSEntryExits[i].branch_tel_num
                      }
                    )
                  }
                }
            }
        })
        .catch(error => {
            console.log(error);
            _self.$toast("获取办理网点数据列表失败！");
        });
    },
    clicktime(datatext,index){
      $('.Ps .wrap').css({border: 'solid 0.02rem #ccc'})
      $('.Ps .wrap').eq(index).css({
        border: 'solid 0.02rem blue'
      })
      this.point=''
      console.log(datatext)
      this.point=datatext
    },
    goto(){
      if(!this.selectCity){
        this.$toast("请选择您的州/市")
        return
      }
      console.log(this.point)
      if(this.point==''){
        this.$toast("请选择您的办理网点")
        return
      }
      sessionStorage.setItem("GATfirstlocal",JSON.stringify(this.confirmCity));
      sessionStorage.setItem("GATsecondlocal",JSON.stringify(this.confirmCounty));
      sessionStorage.setItem("GATpoint",JSON.stringify(this.point));
      this.$router.push({
          name:'domesticSix',
          params:{
            cityCode:this.confirmCity.value,
            }
      })
    }
  }
};
</script>
