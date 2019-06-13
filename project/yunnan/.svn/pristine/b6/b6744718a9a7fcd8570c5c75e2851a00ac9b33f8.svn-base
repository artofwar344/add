<template>
    <div>
		<towtop :name="hadertow" />
        <div class="explainBox">
                <div class="explainBoxTit">
                   <span>制卡中或待启用</span>
                </div>
                <div class="explainBoxCen">
                    <p>金融社保卡制作中。如果您已领卡，请到发卡机构做领卡处理，激活人社功能。</p>
                </div>
        </div>
        <div class="explainBox">
                <div class="explainBoxTit">
                   <span>正常</span>
                </div>
                <div class="explainBoxCen">
                    <p>卡状态正常，可正常使用人社功能</p>
                </div>
        </div>
        <div class="explainBox">
                <div class="explainBoxTit">
                   <span>
                       临时挂失
                    </span>
                </div>
                <div class="explainBoxCen">
                    <p>金融社保卡已临时挂失，人社功能不可用。可到发卡银行就近网点办理正式挂失、补卡业务或到就近人社部门卡业务经办服务机构办理解挂。<span class="explainBoxCenred">注意：临时挂失20天后，如没办理正式挂失则自动解挂。</span></p>
                </div>
        </div>
        <div class="explainBox">
                <div class="explainBoxTit">
                   <span>
                       已注销
                    </span>
                </div>
                <div class="explainBoxCen">
                    <p>金融社保卡已注销，人社功能不可用。</p>
                </div>
        </div>
        <button @click.prevent='RecordSub()' class="scl_but">
			返回首页
		</button>
    </div>
</template>
<script>
import towtop from "../../../../components/HederTwo";
export default {
  data() {
    return {
      hadertow: "卡状态说明"
    };
  },
  components: { towtop },
  methods:{
    RecordSub(){
      this.$router.go(-1)
    }
  }
};
</script>

<style lang='less' scoped>
p{
  height: auto !important;
}
.explainBox {
  background: #fff;
  text-align: left;
  padding: 0.36rem;

  .explainBoxTit {
    font-size: 0.3rem;
    color: #333;
    padding: 0.2rem 0;
    padding-top: 0;

    span {
      border-left: 0.06rem solid #257bff;
      height: 0.24rem;
      line-height: 0.24rem;
      padding-left: 0.2rem;
    }
  }
  .explainBoxCen {
    line-height: 0.4rem;
    color: #999;
    font-size: .28rem;
    .explainBoxCenred {
      color: red;
    }
  }
}
.scl_but {
		display: block;
		width: 5.90rem;
		height: .9rem;
		line-height: .9rem;
		color: #fff;
		background: #2D7FFC;
		margin: 0 auto;
		border-radius: .5rem;
		margin-top: .3rem;
		margin-bottom: .3rem;
		font-size: .32rem;
	}
</style>
