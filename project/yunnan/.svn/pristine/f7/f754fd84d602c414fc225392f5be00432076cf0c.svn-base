<template>
    
    <div>
		<towtop :name="hadertow" />
        <div class="icbcBox">
            <h3>
                企业名称/统一社会信用代码/注册号
            </h3>
            <input type="text" placeholder="请输入" v-model="text_zuchehao">
        </div>
         <button @click.prevent='RecordSub()' size="large" class=" button blueButton textWhat">
			查询
		</button>
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
import towtop from "../../../../components/HederTwo";
import { cenurl } from "../../../../components/toptow.js";
export default {
  data() {
    return {
      hadertow: "严重违法失信企业名单查询",
      popupVisible6: false,
      text_zuchehao: "",
      content2: {
        title: "温馨提示",
        text: "云南领领物业管理有限公司不属于严重违法失信企业",
        btnList: [
          {
            id: "btn1",
            text: "确定",
            primary: true
          }
        ]
      }
    };
  },
  components: {
    towtop
  },
  methods: {
    openPopup(val) {
      console.log("打开" + val);
    },
    clickbtn2(id) {
      this.popupVisible6 = false;
      // this.$router.push('/sbreaklist')
    },

    RecordSub() {
      this.popupVisible6 = false;
      this.$router.push("/sbreakcen?text_zuchehao=" + this.text_zuchehao);
      let setdata={
        txnCommCom: {
            tRecInPage: "1",
            tPageJump: "1",
            tStsTraceId: "1"
          },
          txnBodyCom: {
            matter_id: window.sessionStorage.getItem("matterid"),
            entName: "",
            uniscid: "",
            regno: ""
          }
      }
      this.$ajaxRequest("post","/gsp/mng90036", setdata).then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../../../assets/css/style.less");
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
    width: 80%;
    height: 0.8rem;
    border: 0;
    border-bottom: 1px solid #ececec;
    line-height: 0.8rem;
    margin: 0 auto;
    font-size: 0.3rem;
    border-bottom: 1px solid #ececec;
  }
}
</style>
