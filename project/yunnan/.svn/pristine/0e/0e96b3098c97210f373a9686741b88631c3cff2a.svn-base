<template>
    <div>
		<towtop :name="hadertow" />
<div class="lawBox">
  <span class="middlestarking">*</span>
            <h3>
                请输入律所名称
            </h3>
            <input type="text" placeholder="请输入律所名称" v-model="lawName">
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
          <div slot="othercontent">
            <div>
                <img src="../../../../assets/images/law/ico_nox.png" alt="">
            </div>
            未查询到律所信息，请确认律所名称是否正确！
          </div>
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
      hadertow: "律所查询",
      popupVisible6: false,
      lawName: "",
      content2: {
        // title: "温馨提示",
        // text: "未查询到律所信息，请确认律所名称是否正确！",
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
    },
    RecordSub() {
      if(this.lawName == "" || this.lawName == null){
        this.$toast("请输入律所名称");
        return;
      }
      let setdata = {
      "txnBodyCom":
          {
            matter_id: window.sessionStorage.getItem("matterid"),
          "c_zwmc":this.lawName,
          }
      };
      let page =  {
          "tRecInPage":"10","tPageJump":"1"
          };
      this.$ajaxRequest("post", "/gsp/mng80090", setdata,page)
        .then(res => {
          console.log(res.status);
          let cent = res;
          if (cent.list == null||cent.list == undefined) {
            this.popupVisible6 = true;
            return;
          } else {
            this.$router.push({
              name: "lawlist",
              params: { datalist: JSON.stringify(cent.list) }
            });
          }
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
.lawBox {
  padding: 0.8rem 0.36rem 1rem;
  background: #fff;
  text-align: left;
  position: relative;

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
.example-popup {
  img {
    max-width: 100%;
    width: 2rem;
  }
}
  .middlestarking{
    color: red;
    font-size: 0.4rem;
    display: inline-block;
    position: absolute;
    left: 0.1rem;
    top: 1.63rem;
  }
</style>
