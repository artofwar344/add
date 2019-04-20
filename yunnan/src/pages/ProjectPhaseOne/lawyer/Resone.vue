<template>
  <div class="Toresults">
    <div class="navTitle">
      <div></div>
      <h1>变更执业机构申请表（省内变更）</h1>
    </div>
    <div class="note"></div>

    <!--<div class="Btnemail">
        	<button></button>
    </div>-->
    <div class="example-popup">
      <!-- <div class="example-popup_wrapper">
      <Btn plain @click.native="popupVisible5 = true" size="large">发送至邮箱</Btn>
      </div>-->
      <div class="padTopAdd5">
        <mybutton :btnData="btnData" @click.native="popupVisible5 = true"/>
      </div>

      <Popup
        @popup-open="openPopup"
        @popup-close="closePopup"
        modal-fade="false"
        v-model="popupVisible1"
        popup-transition="popup-fade"
        class="example-popup_1"
      >
        <h1>popup</h1>
        <p>弹出层</p>
      </Popup>
      <Popup
        @popup-open="openPopup"
        @popup-close="closePopup"
        v-model="popupVisible2"
        position="top"
        class="example-popup_2"
        :modal="false"
      >
        <p>更新成功</p>
      </Popup>
      <Popup
        @popup-open="openPopup"
        @popup-close="closePopup"
        v-model="popupVisible3"
        position="right"
        class="example-popup_3"
        :modal="false"
      >
        <Btn @click.native="popupVisible3 = false" size="large" type="primary">关闭 popup</Btn>
      </Popup>
      <Popup
        @popup-open="openPopup"
        @popup-close="closePopup"
        v-model="popupVisible4"
        position="bottom"
        class="example-popup_4"
      >
        <div>测试</div>
      </Popup>
      <Popupprompt
        v-model="popupVisible5"
        :title="content.title"
        :text="content.text"
        :confirm-btn="content.confirmBtn"
        :cancel-btn="content.cancelBtn"
        @click="clickbtn"
      >
        <div slot="othercontent"></div>
      </Popupprompt>
      <Popupprompt
        v-model="popupVisible6"
        :title="content2.title"
        :text="content2.text"
        :confirm-btn="{}"
        :cancel-btn="{}"
        :btn-list="content2.btnList"
        @click="clickbtn2"
      >
        <div
          slot="othercontent"
        >内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容测试slot内容</div>
      </Popupprompt>
    </div>
  </div>
</template>

 <script>
import mybutton from "@/components/MyButton";
export default {
  components: {
    mybutton
  },
  data() {
    return {
      btnData: [
        {
          text: "发送至邮箱",
          disabled: false,
          isSure: true
        }
      ],
      popupVisible5: false,
      content: {
        title: "确认邮箱",
        text: "段落文字段落文字",
        confirmBtn: {
          //水平按钮-确定
          id: "confirm",
          text: "确定按钮"
        },
        cancelBtn: {
          //水平按钮-取消
          id: "cancel",
          text: "取消按钮"
        }
      },
      content2: {
        title: "提示标题",
        text: "文字段落文字段落文字",
        btnList: [
          {
            id: "btn1",
            text: "垂直按钮1",
            primary: true
          },
          {
            id: "btn2",
            text: "垂直按钮2",
            primary: false
          },
          {
            id: "btn3",
            text: "垂直按钮3",
            primary: false
          }
        ]
      }
    };
  },
  methods: {
    openPopup(val) {
      console.log("打开" + val);
    },
    closePopup(val) {
      console.log("关闭" + val);
    },
    clickbtn(id) {
      console.log(1);
      console.log(id);
      if (id == "confirm") {
        this.$router.push("/Submitform");
      } else {
        this.popupVisible5 = false;
      }
    },
    clickbtn2(id) {
      console.log(2);
      console.log(id);
    }
  }
};
</script>

<style scoped>
.navTitle {
  width: 100%;
  height: 0.47rem;
  background: #ffffff;
  position: relative;
}
.navTitle div {
  width: 0.09rem;
  height: 0.24rem;
  background: #2d7ffc;
  display: flex;
  position: absolute;
  left: 0.18rem;
  top: 0.1rem;
}
.navTitle h1 {
  text-align: left;
  margin-left: 0.4rem;
  font-size: 0.3rem;
}
.note {
  width: 3.48rem;
  height: 4.74rem;
  background: #f1f3f6;
  margin: auto;
}
.example-popup {
  position: relative;
}
.example-popup button {
  width: 5.9rem;
  height: 0.9rem;
  background: #2d7ffc;
  box-shadow: 0 5px 15px 0 rgba(45, 127, 252, 0.5);
  border-radius: 25px;
  border: none;
  color: #ffffff;
  font-size: 0.3rem;
  margin-top: 0.5rem;
}
</style>
