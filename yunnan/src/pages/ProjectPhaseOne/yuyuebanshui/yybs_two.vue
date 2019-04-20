<template>
	<div>
		<towtop :name="titlename"/>
		<div class="list">
			<ul>
				<li @click="appointmentlist(list.dm,list.dtmc)" v-for="list in datatext.list">
					<p>{{list.dtmc}}</p>
					<Icon type="arrow-right" size="22"  color="#999999"></Icon>
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
        chann_id:'1'
      }
    };
    this.$ajaxRequest("post","/gsp/mng80044",setdata)
      .then(res => {
        console.log(res);
        this.datatext=res
      })
      .catch(response => {});
  },
  methods: {
    appointmentlist(listcode,lobbyname) {
      window.sessionStorage.setItem('lobbyname',lobbyname)
      this.$router.push("/yybs_three?listcode="+listcode);
    }
  }
};
</script>
<style scoped>
.list ul {
  background-color: #fff;
}
.list li {
  width: 90%;
  margin: 0 auto;
  text-align: left;
  height: 1rem;
  line-height: 1rem;
  border-bottom: 0.01rem solid #ccc;
}
.list p {
  font-size: 0.28rem;
  display: inline-block;
  width: 90%;
}
</style>
<style>
.hui-icon {
  vertical-align: middle;
  display: inline-block;
}
</style>
