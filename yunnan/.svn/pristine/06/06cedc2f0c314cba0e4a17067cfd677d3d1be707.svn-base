<template>
  <div class="reapply-confirm">
    <towtop :name="titlename"/>
    <div class="main">
      <Field type="text" label="姓名" :value="hiddenName(sendData.name)" readonly></Field>
      <Field type="text" label="公民身份证号" :value="hiddenIdCard(sendData.idcard)" readonly></Field>
      <Field type="text" label="申请人手机号" :value="hiddenPhone(sendData.phone)" readonly></Field>
      <Field type="text" label="申请类型" :value="formatType(sendData.type)" readonly></Field>
      <Field type="text" label="受理机关" :value="sendData.registerName" readonly></Field>
      <Field type="text" label="领取地址" readonly class="address">
        <div>
          <p class="title">{{sendData.addressName}}</p>
          <p :class="sendData.address == ''?'':'text'">{{sendData.address}}</p>
        </div>
      </Field>
    </div>
    <mybutton :btnData="btnData" @click="next"/>
  </div>
</template>

<script>
import towtop from "../../../../components/HederTwo";
import mybutton from "../../../../components/MyButton";
import { mapGetters} from 'vuex'
export default {
  data: function() {
    return {
      titlename: "申请补办身份证",
      btnData: [
        {
          text: "下一步",
          disabled: false,
          isSure: true
        }
      ],
      sendData: {},
      name: "",
      idcard: "",
      phone: "",
      type: "",
      label: "",
      text: ""
    };
  },
  components: {
    towtop,
    mybutton
  },
  created() {
    console.log(this.sendDataSave);
    this.sendData = this.sendDataSave;
  },
  mounted() {
    window.LiveFaceResult = this.LiveFaceResult;
  },
  computed: {
    ...mapGetters('reapplyStore', [
      'workId',
      'sendDataSave'
    ]),
  },
  methods: {
    formatType(type){
      if(type == "24"){
        return "损坏换领"
      }else{
        return "遗失补领"
      }
    },
    hiddenName(name) {
      var res = [];
      var arr = name.split("");
      for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
          res.push(arr[i]);
        } else {
          res.push("*");
        }
      }
      return res.join("");
    },
    hiddenIdCard(idcard) {
      return (
        idcard.substring(0, 3) +
        "***********" +
        idcard.substring(idcard.length - 4, idcard.length)
      );
    },
    hiddenPhone(phone) {
      return (
        phone.substring(0, 3) +
        "****" +
        phone.substring(phone.length - 4, phone.length)
      );
    },
    isAndroid_ios() {
      let sendata = {
        isIdcard: "0"
      };
      this.$CallModule("liveFace", sendata);
    },
    LiveFaceResult(senobject) {
      this.$CallModule("StoragesetItem", senobject);
      this.$router.push("/reapplySuccess");
    },
    next() {
      //跳人脸识别
      //this.isAndroid_ios();
      this.$router.push("/reapplySuccess");
    }
  }
};
</script>
<style lang="less">
.reapply-confirm {
  .hui-field {
    height: 1rem;
    display: flex;
    padding: 0 0.36rem;
    font-size: 0.28rem;

    .hui-field_title {
      color: #999999;
    }

    .hui-radios {
      padding: 0;

      .hui-radios_itemWrapper {
        padding-top: 0;
        display: flex;

        .hui-radios_item:first-child {
          margin-right: 0.9rem;
        }
      }
    }
  }
  .address {
    height: 1.6rem;
    text-align: right;
    .title {
      margin-bottom: 0.12rem;
    }
    .text {
      font-size: 0.24rem;
      color: #999;
      position: relative;
      padding-left: 0.28rem;
      display: inline-block;

      &::before {
        content: "";
        display: inline-block;
        width: 0.22rem;
        height: 0.28rem;
        background-image: url("../../../../assets/images/Address@2x.png");
        @media (-webkit-min-device-pixel-ratio: 3),
          (min-device-pixel-ratio: 3) {
          background-image: url("../../../../assets/images/Address@3x.png");
        }
        background-size: 0.22rem auto;
        background-repeat: no-repeat;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
}
</style>
<style lang='less' scoped>
.reapply-confirm {
  .main {
    background: #fff;
    margin-bottom: 1rem;
  }
}
</style>
