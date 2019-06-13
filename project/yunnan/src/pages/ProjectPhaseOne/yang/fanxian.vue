<template>
  <div>
    <headtwo :name="headerData"></headtwo>
    <div class="fanxianOne">
      <h1>云南省企业投资项目备案证</h1>
      <ul>
        <li>项目代号
          <em>xxx</em>
        </li>
        <li>项目名称
          <em>xxx</em>
        </li>
      </ul>
    </div>
    <div class="fanxianTwo">
      <span>项目基本信息</span>
      <ul>
        <li>项目名称
          <em>xxx</em>
        </li>
        <li>项目（法人）单位
          <em>xxx</em>
        </li>
        <li>项目法人证照类型
          <em>xxx</em>
        </li>
        <li>项目法人证照好吗
          <em>xxx</em>
        </li>
        <li>拟开工时间（年）
          <em>xxx</em>
        </li>
        <li>拟建成时间（年）
          <em>xxx</em>
        </li>
        <li>建设地点
          <em>xxx</em>
        </li>
        <li>所属行业
          <em>xxx</em>
        </li>
        <li>建设属性
          <em>xxx</em>
        </li>
        <li>总投资（万元）
          <em>xxx</em>
        </li>
        <li>建设规模及内容
          <em>xxx</em>
        </li>
        <li>项目符合产政策申明
          <em>xxx</em>
        </li>
        <li>项目信息真实性、合法性、完整性申明
          <em>xxx</em>
        </li>
      </ul>
      <div class="hintCenter">
        <p>本项目备案单位已认真核对申报信息，并对信息真实性、合法性、完整性负责。</p>
      </div>
    </div>
    <div class="fanxianThree">
      <span>联系人信息</span>
      <ul>
        <li>联系人姓名
          <em>xxx</em>
        </li>
        <li>联系电话
          <em>xxx</em>
        </li>
        <li>身份证类型
          <em>xxx</em>
        </li>
        <li>身份证号
          <em>xxx</em>
        </li>
      </ul>
    </div>
    <div class="fanxianFour">
      <ul>
        <li>备案机关
          <em></em>
        </li>
        <li>备案证生成时间
          <em></em>
        </li>
      </ul>
    </div>
    <!-- <div id="explain"></div> -->
    <!-- <div class="padTopAdd5 padBotAdd5" v-if="show">
      <mybutton :btnData="btnData" @click="goto"/>
    </div>-->
    <hint></hint>
  </div>
</template>

<script>
import mybutton from "@/components/MyButton";
import headtwo from "@/components/HederTwo";
import hint from "./Fanxian/hint";

export default {
  name: "explain",
  data() {
    return {
      headerData: "办理结果",
      arr: "",
      btnData: [
        {
          text: "打印",
          disabled: false,
          isSure: true
        }
      ],
      show: false
    };
  },
  components: {
    headtwo,
    mybutton,
    hint
  },
  mounted() {
    this.timeshow();
  },
  methods: {
    goto() {
      this.$router.push("/locationup");
    },
    timeshow() {
      let a = `<ul>
						<li><span>备案号</span> <em>12312131</em></li>
						<li><span>申办企业</span> <em>博古通(北京)科技</em></li>
						<li><span>企业类型</span><em>民办</em></li>
						<li><span>项目名称</span> <em>关于23号道路来正</em> </li>
						<li><span>项目建设地点</span> <em>马连道南2街</em></li>
						<li><span>项目建设性质</span> <em>公益</em> </li>
						<li><span>主要建设内容或生产能力</span> <em>建设工人203人</em></li>
						<li><span>项目总投资</span> <em>231万</em></li>
						<li><span>项目开工时间</span> <em>2018-12-31</em></li>
						<li><span>项目竣工时间</span> <em>2020-12-31</em></li>
						<li><span>备案项目编码</span> <em>云 1231231</em></li>
						<li><span>项目代码</span> <em>云 534381</em></li>
						<li><span>备案机构</span> <em>（云）发改委</em></li>
						
					</ul>`;

      $("#explain").html(a);
      this.show = true;
    }
  }
};
</script>
<!--Add "scoped" attribute to limit CSS to this component only-->
<style lang="less"  scoped>
.fanxianOne,
.fanxianTwo,
.fanxianThree,
.fanxianFour {
  text-align: left;

  background: #fff;
  h1{
	  display: block;
	  height:1rem;
	  line-height: 1rem;
	  font-size:.32rem;
	  color: #333;
	  text-align: center;
	  font-weight: bold;
  }
  span {
	display: block;
    height: .65rem;
    line-height: .65rem;
	font-size: 0.28rem;
	background: #f1f3f6;
	padding-left: .3rem;

	// margin-left:-.3rem;
	// width:100%;
  }
  ul {
	  padding-left: .3rem;
	  padding-right: .3rem;
	li {
    height: 1rem;
    line-height: 1rem;
    color: #999;
    em {
      float: right;
    }
  }
}
.hintCenter{
	margin-left: .3rem;
	margin-right: .3rem;
	border-radius:.04rem;
	margin-bottom:.3rem;
	padding: .3rem;
	background: #eee;
}
}
.fanxianFour {
  margin-top: 0.16rem;
}
#explain {
  padding: 0 0.3rem;
  li {
    height: 0.5rem;
    line-height: 0.5rem;
    padding: 0 0.1rem;
    text-align: left;
    font-size: 0.24rem;
    border-bottom: 1px solid #ccc;
  }
}

.scl_but {
  display: block;
  width: 5.9rem;
  height: 0.9rem;
  line-height: 0.9rem;
  color: #fff;
  background: #2d7ffc;
  margin: 0 auto;
  border-radius: 0.5rem;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  font-size: 0.32rem;
}
#explain ul li em {
  /*margin-right: 30px;*/
  float: right;
}
</style>