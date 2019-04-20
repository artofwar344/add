<template>
	<div>
		<towtop :name="titlename"/>
		<div class="three">
		<ul v-for="item in datatext.list" @click="lobbyworklist(item.fzDm)">
			<li class="lib">
				<h2>{{item.fzMc}}</h2>
			</li>
			<li>
				<p >等待人数：<span style="color: #2d7ffc; margin-right: 0.3rem">{{item.ddrs}}</span>人</p>
			</li>
		</ul>
		</div>
	</div>
</template>
<script>
import towtop from "../../../components/HederTwo";
export default {
  data() {
    return {
      titlename: "预约办税",
      datatext:''
    };
  },
  components: {
    towtop
  },
  mounted() {
    let setdata = {
      txnCommCom: {
        tRecInPage: "10",
        tPageJump: "2",
        tStsTraceId: "110567890"
      },
      txnBodyCom: {
        matter_id: window.sessionStorage.getItem("matterid"),
        chann_id:'1',
        dtDm: this.$route.query.listcode
      }
    };
    this.$ajaxRequest("post", "/gsp/mng80045", setdata)
      .then(res => {
        console.log(res);
        this.datatext=res
      })
      .catch(response => {});
  },
  methods: {
    lobbyworklist(lobbyworkcode) {
      this.$router.push("/yybs_four?lobbyworkcode="+lobbyworkcode+'&lobbycode='+this.$route.query.listcode);
    }
  }
};
</script>
<style scoped>
.three ul {
  background-color: #fff;
  margin-top: 0.2rem;
}

.three h2 {
  font-size: 0.28rem;
  font-weight: 700;
}
.three li {
  width: 90%;
  margin: 0 auto;
  text-align: left;
  height: 1rem;
  line-height: 1rem;
}
.three .lib {
  border-bottom: 0.01rem solid #ccc;
}
.three p {
  font-size: 0.28rem;
  display: inline-block;
  width: 90%;
  color: #999;
}
</style>
<style>
.three .hui-icon {
  vertical-align: middle;
  display: inline-block;
}
</style>
