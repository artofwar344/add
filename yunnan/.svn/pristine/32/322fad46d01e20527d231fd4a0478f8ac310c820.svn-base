<style lang="less" scoped>
.abroadOneWrap {
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
      .wrap:first-child{
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
.abroadOneWrap .hui-field {
  height: 1rem;
  padding: 0rem 0.2rem;
  box-sizing: border-box;
  border: none;
}

.abroadOneWrap .hui-field_title {
  width: 2.3rem;
  height: 100%;
}
.abroadOneWrap .example-select_btn-wrapper {
  margin-top: 15px;
}
.abroadOneWrap .example-select_arrowRight {
  display: block;
  margin-left: 0.1rem;
  width: 0.16rem;
  height: 0.26rem;
  background: url(../../../../assets/images/arrow.png) 0px center no-repeat;
  background-size: 100%;
}
.abroadOneWrap .middleone{
  position:relative;
}
.abroadOneWrap .middletwo{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: absolute;
  top:35%;
  left:0;
}
</style>
<style>
.abroadOneWrap .hui-field_main {
  height: 100%;
  border-bottom: 1px solid #e1e2e6;
}
</style>


<template>
    <div class="abroadOneWrap">
        <towtop :name="titlename"/>
        <div class="content">
            <p>请选择预约办理单位</p>
          <div class="middleone">
            <span class="middletwo">*</span>
             <Field readonly label="州/市"  type="text" placeholder="请选择您的州/市" :value="selectCity" @click.native="open('cityPicker')">
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
            <Field readonly label="区/县" type="text"  placeholder="请选择您的区/县" :value="selectCounty" @click.native="open('countyPicker')">
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
          <div class="middleone">
            <span class="middletwo">*</span>
            <Field readonly label="办理网点"  type="text" placeholder="请选择您的办理网点" :value="selectPoint" @click.native="open('pointPicker')">
                    <span slot="append" class="example-select_arrowRight"></span>
            </Field>
          </div>
            <Selectpopup
                ref="pointPicker"
                position="bottom"
                :dataslots="pointPicker"
                class="example-select_item"
                @confirms="selectedPoint"
            ></Selectpopup>
            <div class="Ps" v-if="confirmPoint.length!=0">
                <div class="wrap" v-for="item in messageData" :key="item.p">
                    <img :src="item.img" alt=""><span>{{item.p}}</span>
                </div>
            </div>
        </div>
        <!-- <div class="btnWrap">
            <span @click="goto">下一步</span>
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
      titlename: "出国境证件业务预受理",
      cityPicker: [
        {
          flex: 1,
          values: [{"text":"云南省昆明市","value":"530100"}],
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
      detailPointDate:[],
      selectPoint: '',
      confirmPoint:[],
      messageData:[
          {img:locationUrl,p:''},
          {img:messagesUrl,p:''},
          {img:phoneUrl,p:''}
      ],
      point:{},
      isKunMing:true,
    };
  },
  components: {
    mybutton,
    towtop
  },
  mounted() {
    let _self = this;
    //  获取市级
    // let cityProp = {
    //     "txnBodyCom":{
    //       matter_id: window.sessionStorage.getItem("matterid"),
    //       "parentCode":'530000',
    //       "oType":'GAT'
    //     }
    // };
    // this.$ajaxRequest("post", "/gsp/mng19021", cityProp)
    // .then(res => {
    //   debugger
    //     if (res.length <= 0) {
    //           _self.$toast("搜索市级数据列表为空！");
    //         return false;
    //     } else {
    //         let cent = res
    //         // for(var i=0,len=cent.length;i<len;i++){
    //           let temOb = {text:cent[0].regnNm,value:cent[0].regnCode};
    //           _self.cityPicker[0].values.push(temOb);
    //         // }
    //     }
    // })
    // .catch(error => {
    //     console.log(error);
    //     _self.$toast("获取市级数据列表失败！");
    // });
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
      if (typeof selectedVal[0] === "object") {
        this.selectCity = selectedVal[0].text;
        this.confirmCity = selectedVal[0];
      } else {
        this.selectCity = selectedVal;
      }
      // 判断是否昆明在时间页面进行不同接口请求
      if(this.confirmCity.value == this.cityPicker[0].values[0].value){
        this.isKunMing = '1';
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
    },
    selectedCounty(selectedVal) {
      this.selectPoint = '';
      if (typeof selectedVal[0] === "object") {
        this.selectCounty = selectedVal[0].text;
        this.confirmCounty = selectedVal[0];
      } else {
        this.selectCounty = selectedVal;
      }
      this.getPointList();
    },
    selectedPoint(selectedVal) {
      if (typeof selectedVal[0] === "object") {
        this.selectPoint = selectedVal[0].text;
        this.confirmPoint = selectedVal[0];
      } else {
        this.selectPoint = selectedVal;
      }
      let pointArr = this.detailPointDate;
      for (let index = 0; index < pointArr.length; index++) {
        if(this.confirmPoint.value == pointArr[index].branch_code){
            this.messageData[0].p = pointArr[index].branch_parent_name;
            this.messageData[1].p = pointArr[index].branch_name;
            this.messageData[2].p = pointArr[index].branch_tel_num;
            this.point = pointArr[index];
        }
      }
    },
    getPointList(){
      let _self = this;
      //  获取办理网点
        let pointProp = {
          "txnBodyCom": {
            "city_name":this.confirmCity.value,
            "county_name":this.confirmCounty.value,
            "chann_id":"1",
            matter_id: window.sessionStorage.getItem("matterid"),
          }
        };
        let pageJump = {
          "tRecInPage": "1",
          "tPageJump": "1",
        }
        this.$ajaxRequest("post", "/gsp/mng80102", pointProp,pageJump)
        .then(res => {
          let cent = res
          _self.pointPicker[0].values.splice(0,this.pointPicker[0].values.length)
          for(var i=0,len=cent.matterSEntryExits.length;i<len;i++){
              let temOb = {text:cent.matterSEntryExits[i].branch_parent_name,value:cent.matterSEntryExits[i].branch_code};
              _self.pointPicker[0].values.push(temOb);
              _self.detailPointDate.push(cent.matterSEntryExits[i]);
          }
        })
        .catch(error => {
            console.log(error);
            _self.$toast("获取办理网点数据列表失败！");
        });

    },
    goto(){
      // if(this.selectedCity){
      //   this.$toast("请选择您的州/市")
      //   return
      // }
      // if(this.selectedCounty){
      //   this.$toast("请选择您的区/县")
      //   return
      // }
      // if(this.selectedPoint){
      //   this.$toast("请选择您的办理网点")
      //   return
      // }
      sessionStorage.setItem("GATcertPoint",JSON.stringify(this.point));
      this.$router.push({
          name:'abroadTwo',
          params:{
            cityCode:this.confirmCity.value,
            }
      })
    }
  }
};
</script>
