<style lang="less" scoped>
.domesticOneWrap {
  .contentWrap {
    margin-top: 0.6rem;
    h1 {
      font-size: 0.34rem;
      font-weight: bold;
      margin-bottom: 0.3rem;
    }
    p {
      text-align: left;
      font-size: 0.28rem;
      padding: 0 0.31rem;
      margin-bottom: 0.3rem;
      line-height: 0.43rem;
    }
    p:last-child {
      margin: 0rem;
    }
  }
  .btnWrap {
    margin-top: 1rem;
    padding: 0 0.8rem;
    font-size: 0.33rem;
    a {
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

<template>
  <div class="domesticOneWrap">
    <towtop :name="titlename"/>
    <div class="contentWrap">
      <h1>证件申请须知</h1>
      <p>1、申请人须如实、完整填写申请表内容。</p>
      <p>2、申请人填写完申请表后，还需携带相关申请材料到公安机关出入境接待大厅正式提出申请。</p>
      <p>3、选择网上预约办证服务的，请按预约时间到达预约地点办理业务，未按预约时间到达预约地点的申请人，须按照接待大厅相关要求重新排队。如需更改预约时间或地点，请取消原预约并重新填表、预约。</p>
      <p>4、未满 16 周岁的用户预约成功后，需监护人陪同前往窗口一同办理业务。</p>
      <p>5、往来港澳台签注申请，昆明卡式个人旅游签注申请可前往大厅自助机办理。</p>
      <p>6、迪庆州及其所辖县无法办理出入境相关业务的预约。</p>
    </div>
    <!-- <div class="btnWrap">
            <router-link to="/ ">阅读并同意</router-link>
    </div>-->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="goto"/>
    </div>
  </div>
</template>

<script>
import towtop from "@/components/HederTwo";
import mybutton from "@/components/MyButton";
export default {
  data() {
    return {
      btnData: [
        {
          text: "阅读并同意",
          disabled: false,
          isSure: true
        }
      ],
      titlename: "出入境证件预受理"
    };
  },
  components: {
    mybutton,
    towtop
  },
  mounted() {
    this.clearSessionStorage();
    //   获取wordId并保存
    //获取地址栏参数，name:参数名
    let WorkId = this.$route.query.WorkId;
    sessionStorage.setItem("WorkId", WorkId);
    console.log(sessionStorage.getItem("WorkId"));
  },
  methods: {
    goto(){
      this.$router.push('/domesticTwo')
    },
    clearSessionStorage() {
      function clear(str) {
        if (sessionStorage.getItem(str) != null) {
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
    }
  }
};
</script>
