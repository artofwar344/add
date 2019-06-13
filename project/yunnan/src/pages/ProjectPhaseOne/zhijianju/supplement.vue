<template>
  <div class="supplement">
    <div class="jiaceng" v-show="showjiaceng"></div>
    <towtop :name="titlename"/>

    <div class="example-field">
      <form @submit.prevent="submitEvent4">
        <Field type="text" label="发证机关" placeholder="机关名称" required></Field>
      </form>
    </div>
    <div class="example-upload">
      <div class="example-upload_formItem">
        <label class="example-upload_formLabel" for>申请材料</label>
        <p>本人近期2寸正面免冠照片</p>
        <div class="example-upload_formText">
          <!--上传-->
          <Upload action="//jsonplaceholder.typicode.com/posts/" :default-file-list="defaultList">
            <span class="example-upload_btn">+</span>
          </Upload>
        </div>
      </div>
    </div>
    <div class="example-field bt">
      <form @submit.prevent="submitEvent4">
        <Field type="text" label="领取方式" placeholder="物流邮寄" required></Field>
      </form>
    </div>
    <form @submit.prevent="submitEvent4" @click="toadreess">
      <Field type="text" label="邮寄地址" placeholder="请输入邮寄地址" required></Field>
    </form>
    <div class="example-pageprompt">
      <!-- <Btn plain block @click="handleClickWidthBtn">完成</Btn> -->
      <div class="padTopAdd5">
        <mybutton :btnData="btnData" @click="handleClickWidthBtn"/>
      </div>
      <Pageprompt
        :visible="showWithBtn"
        message="您好！您的申请已提交成功，预计6个工作日内办结，办理进度请在“我的办理进度”中查询，办理结果请随时关注消息提醒。"
        icon-type="success"
        show-btn
        :btn-confirm="btnConfirm"
        @click="tomypaper"
      ></Pageprompt>
    </div>
  </div>
</template>
<script>
import towtop from "../../../components/HederTwo";
import mybutton from "@/components/MyButton";
export default {
  data() {
    return {
      btnData: [
        {
          text: "完成",
          disabled: false,
          isSure: true
        }
      ],
      titlename: "特种设备安全管理人员补证",
      showjiaceng: false,
      defaultList: [],
      showWithBtn: false, // 失败
      btnConfirm: {
        hasbtn: true,
        text: "确定"
      }
    };
  },
  components: {
    mybutton,
    towtop
  },
  methods: {
    toadreess() {
      this.$router.push("adreess");
    },
    handleClickWidthBtn() {
      //获取被选择的选项
      this.showSuccess = false;
      this.showFailed = false;
      this.showWithBtn = true;
      this.showjiaceng = !this.showjiaceng;
    },
    tomypaper() {
      this.$router.push("mypaper");
    }
  }
};
</script>
<style  scoped>
.supplement .example-upload {
  background-color: #fff;
}
.hui-field_core {
  text-align: right;
}
.supplement .hui-field_main {
  font-size: 0.32rem;
  height: 1rem;
}
.hui-field_star {
  display: none;
}
.supplement .example-upload_formItem {
  font-size: 0.28rem;
  width: 90%;
  padding: 0.25rem 0 0.25rem 0;
  margin: 0 auto;
  text-align: left;
}
p {
  color: #999;
  margin-top: 0.2rem;
}
.example-upload_btn {
  display: block;
  margin-top: 0.2rem;
  width: 1.6rem;
  height: 1.6rem;
  background-color: #f5f5f5;
  font-size: 1rem;
  text-align: center;
  line-height: 1.6rem;
  color: #ccc;
}
.bt .hui-field {
  border-top: 0.01rem solid #e1e2e6;
}
.example-pageprompt .hui-btn.is-block {
  width: 5.9rem;
  height: 0.9rem;
  margin: 1rem auto;
  background-color: #2d7ffc;
  font-size: 0.32rem;
  color: #fff;
}
.hui-pagePrompt {
  background-color: #fff;
  z-index: 100;
  top: 30%;
}
.hui-pagePrompt_operation .hui-btn:first-child {
  background-color: #fff;
  color: #2d7ffc;
  margin: 0;
  border-radius: 0;
}
.jiaceng {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}
</style>
