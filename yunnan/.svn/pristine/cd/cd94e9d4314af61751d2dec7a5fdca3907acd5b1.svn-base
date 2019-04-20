<template>
  <div class="infringingCompanyQuery_index">
    <towtop name="严重违法失信企业名单查询" />
    <div class="icbcBox">
      <span class="icon" style=" font-size:0.4rem;color:red;position:absolute;top: 1.9rem;left:0.4rem">*</span>
      <input type="text" placeholder="请输入企业名称/统一社会信用代码/注册号" v-model="text_zuchehao">
    </div>
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="RecordSub"/>

    </div>
    <div class="example-popup">
      <Popupprompt
      v-model="popupVisible6"
      :title="content2.title"
      :text="content2.text"
      :confirm-btn = {}
      :cancel-btn = {}
      :btn-list= "content2.btnList"
      @click="clickbtn2"
      >

    </Popupprompt>
  </div>
</div>
</template>

<script>
  import towtop from "@/components/HederTwo";
  import { cenurl } from "@/components/toptow.js";
  import mybutton from "@/components/MyButton";

  export default {
    data() {
      return {
        btnData:[
        {
          text:'确定',
          disabled: false,
          isSure: true,
        }
        ],
        popupVisible6: false,
        text_zuchehao: "",
        content2: {
          title: "温馨提示",
          text: '',
          btnList: [
          {
            id: "btn1",
            text: "确定",
            primary: true
          }
          ]
        },
        arr:[],
        uuid:'',
        arrlist:[],
      };
    },
    components: {
      towtop,
      mybutton,
    },
    methods: {
      openPopup(val) {
        console.log("打开" + val);
      },
      clickbtn2(id) {
        this.popupVisible6 = false;
      },

      RecordSub() {
        let _self = this
        if (_self.text_zuchehao == '') {
          this.$toast('请输入企业名称/统一社会信用代码/注册号')
          return
        }
        let setdata={
          txnCommCom: {
            tRecInPage: "10",
            tPageJump: "2",
            tStsTraceId: "110567890",
            txnIttChnlId:'00',
          },
          txnBodyCom: {
            matter_id: window.sessionStorage.getItem("matterid"),
            // 'matter_id': '7CD477921740288DE05314ECC4803956',
            'chann_id':'1',
            'Q':this.text_zuchehao,
          }   
        }
        _self.$ajaxRequest("post","/gsp/mng90036", setdata)
        .then(res => {
          console.log(res);
          if (res == '') {
           _self.popupVisible6 = true;
           _self.content2.text = this.text_zuchehao + "不属于严重违法失信企业"
           return
         }
         if (!res.result) {
          _self.$toast('未查询到企业信息')
          return
        }else{
         _self.arr = res.result[0]
         if(res.result[0].uuid) {
          _self.uuid = res.result[0].uuid
          _self.RecordSub_two()
        }
      }
    })
        .catch(error => {
          console.log(error);
        });
      },
      RecordSub_two() {
        let _self = this
        let setdata = {
          "txnCommCom":{
            tRecInPage: "10",
            tPageJump: "2",
            tStsTraceId: "110567890",
            txnIttChnlId:'00',
          },
          "txnBodyCom": {
            matter_id: window.sessionStorage.getItem("matterid"),
              // "matter_id": "7CD477921740288DE05314ECC4803956",
              "chann_id": "1",
              "UUID": _self.uuid 
            }
          }
          _self.$ajaxRequest("post","/gsp/mng90059", setdata)
          .then(response =>{
            console.log(response)
            if (response) {
              _self.arrlist = response.result[0]
              sessionStorage.setItem("infolist",JSON.stringify(_self.arrlist));
              _self.$router.push({
                name:'sbreaklist',
                params:{
                  arr: _self.arr,
                }
            })
          }else{
            _self.$toast('未查询到企业信息')
          }
            
          })
          .catch(err=>{
            console.log(err)
          })
        }
      },

    };
  </script>
  <style lang="less" scoped>
  @import url("../../../../../assets/css/style.less");
  .icbcBox {



    padding: 0.8rem 0.36rem 1rem;
    background: #fff;
    text-align: left;

    h3 {
      font-size: 0.3rem;
      color: #333;
      margin: 0.8rem 0;
    }
    input {
      display: block;
      width: 90%;
      height: 0.8rem;
      border: 0;
      border: 1px solid #c6b7b7;
      line-height: 0.8rem;
      margin: 0 auto;
      font-size: 0.3rem;
      border-bottom: 1px solid #c6b7b7;
      padding-left: 0.2rem;
    }
  }
</style>

