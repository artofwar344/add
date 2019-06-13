<template>
  <div class="bgzcxkFour">
    <towtop :name="titlename"/>
    <div class="jiaceng" v-show="popup">
      <div class="content">
        <div class="header">您已提交成功</div>
        <p>请关注
          <span style="color: #FAC306;">“我的办理进度”</span>并及时处理系统消息
        </p>
        <div class="qd_btn" @click="qd_btn">确定</div>
      </div>
    </div>
    <Field type="text" label="事务所名称" :value="textValue" placeholder="自动获取省司法厅系统律师事务所信息"></Field>
    <Field type="text" label="负责人" :value="textValue" placeholder="自动获取省司法厅系统律师事务所信息" ></Field>
    <Field type="text" label="组织形式" :value="textValue" placeholder="自动获取省司法厅系统律师事务所信息" ></Field>
    <Field type="text" label="电话" :value="textValue" placeholder="自动获取省司法厅系统律师事务所信息" ></Field>
    <Field type="text" label="律所地址" :value="textValue" placeholder="自动获取省司法厅系统律师事务所信息" ></Field>
    <div class="middleone">
      <span class="middletwo">*</span>
    <Field class="btm" type="text" label="申请变更理由" :value="arr.bgly" placeholder="必填项" ></Field>
    </div>
    <div class="middleone">
      <span class="middletwo">*</span>
    <Field
      class="btm"
      type="text"
      label="章程拟变更部分变更前内容(摘要)"
      :value="arr.bgqnr"
      placeholder="必填项"
    ></Field>
    </div>
    <div class="middleone">
      <span class="middletwo">*</span>
    <Field
      class="btm"
      type="text"
      label="章程拟变更部分变更后内容(摘要)"
      :value="arr.bghnr"
      placeholder="必填项"
    ></Field>
    </div>
    <!-- <Btn plain block @click="submit_btn">提交</Btn> -->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="submit_btn"/>
    </div>
  </div>
</template>
<script>
import towtop from "../../../../components/HederTwo";
import mybutton from "@/components/MyButton";
export default {
  components: {
    mybutton,
    towtop
  },
  data() {
    return {
      btnData: [
        {
          text: "提交",
          disabled: false,
          isSure: true
        }
      ],
      titlename: "律师事务所（分所）变更章程许可",
      textValue: "",
      popup: false,
      arr: {
        bgly: "",
        bgqnr: "",
        bghnr: ""
      }
    };
  },
  methods: {
    submit_btn() {
      this.popup = !this.popup;
    },
    qd_btn() {
      this.$router.push("/bgzcxk_five");
    }
  },
  created() {
    this.arr.bgly = this.$route.params.bgly;
    this.arr.bgqnr = this.$route.params.bgqnr;
    this.arr.bghnr = this.$route.params.bghnr;
    console.log(this.arr);
  }
};
</script>
<style>
.bgzcxkFour .hui-field_main {
  font-size: 0.28rem;
  line-height: 0.9rem;
  height: 0.9rem;
}
.hui-field_star {
  display: block;
}
.hui-btn.is-block {
  font-weight: 700;
  display: inline-block;
  width: 5.9rem;
  height: 0.9rem;
  margin: 0.6rem 0.35rem;
  background-color: #2d7ffc;
  font-size: 0.32rem;
  color: #fff;
}
.hui-field_title {
  width: 3rem;
}
.btm .hui-field_title {
  width: 6rem;
}
</style>
<style scoped>
.jiaceng {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 12;
}
.jiaceng .content {
  width: 75%;
  margin: 50% auto;
  background-color: #fff;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  border-radius: 0.3rem;
}
.content .header {
  font-size: 0.36rem;
  color: #2d7ffc;
  margin: 0.2rem auto;
}
.content p {
  font-size: 0.28rem;
  margin: 0.6rem auto;
  color: #666;
}
.content .qd_btn {
  font-size: 0.32rem;
  color: #999;
  border-top: 0.01rem solid #ccc;
  padding-top: 0.3rem;
}
.bgzcxkFour .middleone{
  position:relative;
}
.bgzcxkFour .middletwo{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: absolute;
  top: 0.4rem;
  left:0.05rem;
}
</style>
