<template>
    <div>   
		<towtop :name="hadertow" />
        <div class="lawCentBox">
            <div class="lawCentBoxTab">
                <ul>
                    <li><span class='title'>律所名称：</span><span class="center">{{info.c_zwmc}}</span></li>
                    <li><span class='title'>组织形式：</span><span class="center">{{(info.c_zzxsn == 'null')?'':info.c_zzxsn}}</span></li>
                    <li><span class='title'>统一社会信用代码：</span><span class="center">{{(info.c_tyshxydm == 'null' )?"":info.c_tyshxydm}}</span></li>
                    <li><span class='title'>住所地址：</span><span class="center">{{(info.c_xxdz == 'null' )?"":info.c_xxdz}}</span></li>
                    <li><span class='title'>设立时间：</span><span class="center">{{(info.d_pzslsj == 'null' )?"":info.d_pzslsj}}</span></li>
                    <li><span class='title'>负责人：</span><span class="center">{{(info.c_fzrxm == 'null' )?"":info.c_fzrxm}}</span></li>
                </ul>
            </div>
            <div class="lawListBox">
                <div class="lawListList">
                    <span class="LLLtitle">本律所执业律师名单</span>
                    <div class="LLLcen">
                        <p v-for="lawyer in lawyerList" @click="gotoLawyer(lawyer)">{{lawyer.c_xm}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import towtop from "../../../../components/HederTwo";
export default {
  data() {
    return {
      hadertow: "律所查询",
      lawyerList:[],
      info:""
    };
  },
  components: {
    towtop
  },
  created() {
    this.info = JSON.parse(this.$route.params.datalist)[0];
    console.log(this.info)
    this.getLawyer();
  },
  activated(){
    this.info = JSON.parse(this.$route.params.datalist)[0];
    console.log(this.info)
    this.getLawyer();
  },
  methods: {
    getLawyer() {
      var bh = this.info.c_bh;
      let sendData = {
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          c_sfzh: "",
          c_xm: "",
          c_zyzh: "",
          c_bh: "",
          c_zyjg: bh
        }
      };
      let page = {
          tRecInPage: "10000",
          tPageJump: "1"
      };
      this.$ajaxRequest("post","/gsp/mng90039",sendData,page)
      .then((res)=>{
        console.log(res);
        if(res!=null && res.list !=null)
        this.lawyerList = res.list;
      })
    },
    gotoLawyer(cent){
        let setdata = {
        "txnBodyCom": {
          matter_id: window.sessionStorage.getItem("matterid"),
          "c_sfzh":"",
          "c_xm":"",
          "c_zyzh":cent.c_zyzh,
          "c_bh":cent.c_bh,
          "c_zyjg":""
        }
      };
      let page = {
        tRecInPage: "10",
        tPageJump: "1",
      }
      this.$ajaxRequest("post", "/gsp/mng90039", setdata,page)
        .then(res => {
          this.$router.push({ path: "/personinfo", query: { id: res.list } });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style lang="less" scoped>
.lawListBox {
  background: #fff;
  text-align: left;
  .lawListList {
    color: #666;
    font-size: 0.28rem;
    border-bottom: 1px solid #f1f3f6;
    padding: 0.33rem 0.4rem;
    .LLLtitle {
      color: #333;
      display: block;
      border-left: 0.06rem solid #2d7ffc;
      padding-left: 0.1rem;
      margin-top: 0.32rem;
      margin-bottom: 0.22rem;
    }
    .LLLcen {
        line-height: 0.52rem;
        display: flex;
        flex-wrap: wrap;
        text-align: center;

        p{
            flex:0 0 25%;
        }
    }
  }
}
.lawCentBoxTab {
  width: 80%;
  margin: 0 auto;
  text-align: left;
  background: #fff;
  border-radius: 0.08rem;
  border-top: 0.08rem solid #2d7ffc;
  padding: 0.28rem 0.38rem 0.48rem;
  margin-bottom: 0.32rem;
  ul li {
    .title {
      color: #999;
      font-size: 0.28rem;
      line-height: 0.56rem;
      float: left;
      width: 45%;
    }
    .center {
      color: #333;
      line-height: 0.56rem;
      font-size: 0.28rem;
      float: right;
      width: 55%;
    }
    &:after {
      content: "0";
      font-size: 0;
      display: block;
      height: 0;
      width: 100%;
      clear: both;
    }
  }
  &:after {
    content: "0";
    font-size: 0;
    display: block;
    height: 0;
    width: 100%;
    clear: both;
  }
}
.lawCentList {
  background: #fff;
  text-align: left;
  padding: 0.32rem 0.4rem;
  margin-top: 1px;
  .title {
    font-size: 0.3rem;
    height: 0.24rem;
    padding-left: 0.2rem;
    border-left: 0.06rem solid #257bff;
  }
  .LCLcen {
    padding-left: 0.4rem;
    padding-top: 0.32rem;
  }
}
</style>
