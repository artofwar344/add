<template>
  <div class="bgzcxk_three">
    <towtop style="margin: 0" :name="titlename"/>
    <div class="header2">附件材料</div>
    <div class="example-upload" v-for="(item,index) in arr" :key="index">
      <div class="example-upload_formItem">
        <div class="blue"></div>
        <span class="middleStar" v-if="index===0">*</span>
        <label class="example-upload_formLabel" for>
          <span>{{ item.title }}</span>
        </label>
        <div class="Notes">
          <Icon type="warnning" size="18" color="#FFA500"></Icon>
          <span>{{ item.detail }}</span>
        </div>
        <p class="Explain">请上传材料扫描件（pdf格式）或图片格式。</p>
        <div class="example-upload_formText">
          <!--上传-->
          <Upload action="//jsonplaceholder.typicode.com/posts/" :default-file-list="defaultList">
            <span class="example-upload_btn">+</span>
          </Upload>
        </div>
      </div>
    </div>
    <!-- <Btn plain block @click="submit_btn">预览</Btn> -->
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
	  titlename: "律师事务所（分所）变更章程许可",
	  btnData: [
        {
          text: "名称变更",
          disabled: false,
          isSure: true
        }
      ],
      defaultList: [],
      arr: [
        {
          title: "变更后章程（必填项）",
          detail:
            "修订后的律师事务所变更章程。章程必须按照《律师事务所管理办法》第十六条制定，且须将加强律师事务所党的建设写入章程，可上传扫描件（PDF格式）或图片。"
        },
        {
          title: "合伙人会议决议",
          detail:
            "合伙律师事务所变更章程的，还需提交全体合伙人签名并加盖律师事务所公章的决定变更律师" +
            "事务所章程合伙协议的合伙人会议决议及经全体合伙人签名并加盖律师事务所公章的新的律师事务所合伙协议，合伙人会议决议需按照省司法厅在云南司法行政网中http://www.sft.yn.gov.cn/bszn/13795.jhtml页面中上传的《合伙人会议决议》模板提供，" +
            "可上传扫描件（PDF格式）或图片。"
        },
        {
          title: "律师事务所合伙协议",
          detail:
            "合伙律师事务所变更章程的，还需提交全体合伙人签名并加盖律师" +
            "事务所公章的决定变更律师事务所章程合伙协议的合伙人会议决议及经全体合伙人签名并加盖律师事" +
            "务所公章的新的律师事务所合伙协议，可上传扫描件（PDF格式）或图片。"
        }
      ]
    };
  },
  methods: {
    submit_btn() {
      this.$router.push("/bgzcxk_four");
    }
  },
  mounted() {}
};
</script>
<style>
.header2 {
  width: 90%;
  margin: 0 auto;
  height: 0.6rem;
  font-size: 0.24rem;
  line-height: 0.6rem;
  text-align: left;
  color: #999;
}
.bgzcxk_three .example-upload {
  background-color: #fff;
}
.blue {
  display: inline-block;
  width: 0.1rem;
  height: 0.24rem;
  background-color: #2d7ffc;
  margin-right: 0.15rem;
}
.bgzcxk_three .example-upload_btn {
  display: block;
  margin-top: 0.45rem;
  width: 1.6rem;
  height: 1.6rem;
  background-color: #f5f5f5;
  font-size: 1rem;
  text-align: center;
  line-height: 1.6rem;
  color: #ccc;
}
.bgzcxk_three .example-upload_formItem {
  font-size: 0.28rem;
  width: 90%;
  padding: 0.25rem 0 0.45rem 0;
  margin: 0 auto;
  text-align: left;
  border-bottom: 0.01rem solid #ccc;
}
.bgzcxk_three .example-upload_formLabel {
  font-size: 0.28rem;
  font-weight: 700;
}
.bgzcxk_three .middleStar {
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: relative;
  top: 0.1rem;
}
.Notes {
  margin-top: 0.2rem;
  margin-bottom: 0.15rem;
}
.Notes span {
  color: #666;
  font-size: 0.24rem;
}
.Explain {
  color: #999;
  font-size: 0.24rem;
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
</style>
