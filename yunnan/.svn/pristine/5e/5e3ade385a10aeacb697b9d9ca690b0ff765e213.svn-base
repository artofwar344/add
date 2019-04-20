<template>
  <div class="ResidencePermitQuery">
    <towtop :name="headerData" />
    <div class="residcontent">
      <div v-if="codetype === false">
        <!--<button class="scl_but" @click="isAndroidios()">扫描二维码</button>-->
      </div>
      <div class="list" v-if="codetype === true">
        <ul>
          <li>
            <p>照片<img :src="data.zp" alt=""></p>
          </li>
          <li><p>姓名<span>{{data.name}}</span></p></li>
          <li><p>申领条件<span>{{data.jzzsltjdm}}</span></p></li>
          <li><p>居住年限计算起始日期<span>{{data.jznxjs_qsrq}}</span></p></li>
          <li><p>有效日期<span>{{data.sx_rq}}</span></p></li>
          <li><p>居住地详细地址 <span class="xxdz">{{data.jzdzz_qhnxxdz}}</span></p></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import towtop from "@/components/HederTwo";
import imgUrl from "@/assets/peopleImg.jpg";
import { cenurl } from "@/components/toptow.js";
// data:image/jpeg;base64,

export default {
  data() {
    return {
      codetype: false,
      queryUrl: "/gsp/mng90022",
      headerData: "居住证查询",
      data: {
        url: imgUrl,
        tiaojian: "",
        name: "",
        nianxian: "",
        date: "",
        adress: ""
      },
      reside: ''
          //"j2GYhHhydXWFFBTfdopC5hDTr7zmFSQAWL5wiXCF+jZIi7bF/v+CEbfjFbZF3Z4TD+P+ETDye4bC VFwslpxdIPe5pVjXZ1WQEUDfTi0vZsayMzIldxcVyp7kfePRox9vuTCkLGFnFRgfYvvciQTOmsTd /1YQNOCHWwJaJeRWeGE="
          //"gbWy9PmVMQg\/bO70M+ZV5wZRyzR1WZrrTYUBCLSG+5RdjJTn4KR7hJNQDQL0Pp+k8Y7RLrINJ5c27io\/PgqyW8JQvPcoSlJdT0bIVa2kbyKUJdSB708\/hr\/62KS0VDL5TI5ipA+lvn6cBNmwK1BcX5rgxokn7quB5O5PTCvoZEY="
          //"j2GYhHhydXWFFBTfdopC5hDTr7zmFSQAWL5wiXCF+jZIi7bF\/v+CEbfjFbZF3Z4TD+P+ETDye4bCVFwslpxdIPe5pVjXZ1WQEUDfTi0vZsayMzIldxcVyp7kfePRox9vuTCkLGFnFRgfYvvciQTOmsTd\/1YQNOCHWwJaJeRWeGE="
          //"j2GYhHhydXWFFBTfdopC5hDTr7zmFSQAWL5wiXCF+jZIi7bF/v+CEbfjFbZF3Z4TD+P+ETDye4bC VFwslpxdIPe5pVjXZ1WQEUDfTi0vZsayMzIldxcVyp7kfePRox9vuTCkLGFnFRgfYvvciQTOmsTd /1YQNOCHWwJaJeRWeGE="
   };
  },
  created () {
    window.ResideCode = this.ResideCode;
    // this.$CallModule("scan", "二维码扫描")
    //this.getData()
     this.isAndroidios()
    // this.ResideCode('gbWy9PmVMQg/bO70M+ZV5wZRyzR1WZrrTYUBCLSG+5RdjJTn4KR7hJNQDQL0Pp+k8Y7RLrINJ5c2&nbsp;7io/PgqyW8JQvPcoSlJdT0bIVa2kbyKUJdSB708/hr/62KS0VDL5TI5ipA+lvn6cBNmwK1BcX5rg&nbsp;xokn7quB5O5PTCvoZEY=') 
  },
  components: {
    towtop
  },
  methods: {
    init(data) {
      let _self = this;
      _self.data = data;
    },
    getData() {
      let _self = this;
      let setdata = {
        txnCommCom: {
          tRecInPage: "1",
          tPageJump: "1",
          tStsTraceId: "1"
        },
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          chann_id: "1",
          code: this.reside
        }
      };
      this.$ajaxRequest("post", this.queryUrl, setdata).then(res => {
        // console.log(res);
        if (res.code !== 200) {
          _self.$toast(res.msg)
        } else {
          _self.setDom(res);
          _self.codetype = true;
        }
      }).catch(response => {
      });
    },
    setDom(data) {
      let _self = this
      console.log(data)
      data.data.zp = "data:image/jpeg;base64," + data.data.zp
      data.data.jznxjs_qsrq = _self.formatDate(data.data.jznxjs_qsrq)
      data.data.sx_rq = _self.formatDate(data.data.sx_rq)
      _self.init(data.data)
    },
    ResideCode(str) {
      let _self = this
      this.reside=str.replace(/&nbsp;/g," ")
      console.log(this.reside)
      _self.getData()
    },
    formatDate (dateStr) {
      const str = new Date(parseInt(dateStr))
      const num = str.toLocaleDateString().replace(/\//g, "-")
      console.log(typeof(num.toString()))
      return num.toString()
    },
    isAndroidios() {
      this.$CallModule("scan", "二维码扫描")
    }
  }
};
</script>

<style  scoped>
html,
body {
  height: 100%;
}
.ResidencePermitQuery {
  background: #ccc;
  height: 100%;
}
.list > ul {
  background: #fff;
}
.list > ul > li:first-child {
  height: 2.12rem;
  line-height: 2.12rem;
}
.list > ul > li {
  margin-top: 0.16rem;
  padding: 0.1rem 0.36rem 0.1rem;
  min-height: 0.7rem;
  line-height: 0.7rem;
}
.list p {
  text-align: left;
  zoom: 1;
  font-size: 0.28rem;
}
.list p:after {
  content: "";
  display: block;
  clear: both;
}
.list span {
  float: right;
  max-width: 60%;
}
.list img {
  height: 2.12rem;
  float: right;
}
.xxdz {
  /*text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;*/
  font-size: .28rem;
  text-align: right;
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
</style>
