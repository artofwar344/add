<template>
  <div id="add">
    <headtwo :name="headerData"></headtwo>
    <StafftunoverCent table="0" @showName="showtime"></StafftunoverCent>
    <div class="padTopAdd5 padBotAdd5">
      <mybutton :btnData="btnData" @click.native="popupVisible6 = true" v-if="button"/>
      <mybutton :btnData="btnData" v-else/>
    </div>
    <hint></hint>
    <verify v-if="verify" table="0" :entName="entName" :telePhoneNo="telePhoneNo"  @submit="submits"></verify>
    <div class="example-popup">
      <Popupprompt
        lockScroll
        v-model="popupVisible6"
        :title="content2.title"
        :text="content2.text"
        :confirm-btn="{}"
        :cancel-btn="{}"
        :btn-list="content2.btnList"
        @click="clickbtn2"
      >
        <div slot="othercontent"></div>
      </Popupprompt>
    </div>
  </div>
</template>

<script>
import headtwo from "@/components/HederTwo";
import hint from "./hint";
import StafftunoverCent from "./StaffturnoverCont";
import mybutton from "@/components/MyButton";
import verify from "./verify";

export default {
  name: "stafftunover",
  data() {
    return {
      popupVisible6: false,
      button:false,
      verify: false,
      uniScid:'',
      telePhoneNo:'',
      entName:'',
      content2: {
        title: "温馨提示",
        text:
          "请编辑输入框中的联络员备案信息，调整为您想要变更的内容，然后点击“保存”按钮。",
        btnList: [
          {
            id: "btn1",
            text: "确定",
            primary: true
          }
        ]
      },
      btnData: [
        {
          text: "修改",
          disabled: false,
          isSure: true
        }
      ],
      headerData: "企业联络员信息"
    };
  },
  methods: {
    showtime(data) {
       
      console.log(data)
      if(data.status == '已备案'){
        this.button = true
        this.entName = data.liaisonPersnName
        this.telePhoneNo = data.liaisonTelephone
        this.uniScid = data.uniScid
      }
    },
    submits(val) {
      
      this.verify = false;
      },
    // next_btn() {
    //   alert(1);
    // },
    clickbtn2(id) {
      this.popupVisible6 = false;
      this.verify = true;
    }
  },
  components: {
    mybutton,
    headtwo,
    StafftunoverCent,
    verify,
    hint
  }
};
</script>

