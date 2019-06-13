<template>
  <div class="entryExitDetails">
    <myheader :my-header="headerData"></myheader>
    <div class="entryExitDetailsContent" id="entryExitDetailsContent">
      <ul>
        <li><p>受理编号：<span>{{detalisData.ywbh}}</span></p></li>
        <li><p>姓名：<span>{{detalisData.xm}}</span></p></li>
        <li><p>受理日期：<span>{{detalisData.slrq}}</span></p></li>
        <li><p>受理状态<span>{{detalisData.bzjd_text}}</span></p></li>
      </ul>
    </div>

    <!-- <Popupprompt
          v-model="popupVisible"
          :confirm-btn = {}
          :cancel-btn = {}
          :btn-list= "content.btnList"
          @click="clickbtn">
      <div slot="othercontent">
        <div>
            <img :src="require('@/assets/images/law/ico_nox.png')" alt="">
        </div>
        未查询到结果
      </div>
    </Popupprompt> -->
  </div>
</template>

<script>
import Header from "@/components/header/header";
import { cenurl } from "@/components/toptow.js";
var instance
export default {
  data() {
    return {
      params: this.$route.params,
      headerData: {
        title: " 出入境业务办理进度查询",
        backUrl: "/entryExitQuery"
      },
      detalisData: {
      },
      ywbh: "",
      sfzh: "",
      queryUrl: "/gsp/mng90020",
      content: {
        btnList: [
          {
            id: "btn1",
            text: "确定",
            primary: true
          }
        ]
      },
      // popupVisible: false
    };
  },
  created() {
    let _self = this;
    if (_self.params) {
      _self.ywbh = _self.params.queryParams.ywbh;
      _self.sfzh = _self.params.queryParams.sfzh;
    }
    _self.getData();
  },
  watch: {
    detalisData (val, oldVal) {
      for (let i in val) {
        if (!val[i]) {
          // this.popupVisible = true
        }
      }
    }
  },
  computed: {
    /* activeColor: function () {
     return
     } */
  },
  components: {
    myheader: Header
  },
  methods: {
     openManualToast(){
      instance = this.$toast({
        message: '加载中...',
        iconType: 'loading',
        manualClose: true
      });
      
   },
    getData() {
      this.openManualToast()
      let _self = this;
      let setdata = {
        txnCommCom: {
          tRecInPage: "1",
          tPageJump: "1",
          tStsTraceId: "1",
        },
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          chann_id: "1",
          ywbh: _self.ywbh,
          sfzh: _self.sfzh,
        }
      };
      this.$ajaxRequest("post", this.queryUrl, setdata)
        .then(res => {
          console.log(res);
          instance.close();
          if(res.data == undefined||res.data == 'undefined') {
            this.$toast('查询无结果')
            return
          }
          _self.setDom(res);
        })
        .catch(err => {  
          instance.close();
          this.$toast('查询无结果')
        });
    },
    setDom(data) {
      let _self = this;
     _self.detalisData = data.data.list[0];
    },
    // clickbtn(id) {
    //   this.popupVisible = false;
    // },
  }
};
</script>

<style  scoped>
html,
body {
  height: 100%;
}
.entryExitDetails {
  background: #ccc;
  height: 100%;
}
.entryExitDetailsContent {
  margin-top: 0.16rem;
}
.entryExitDetailsContent > ul {
  background: #fff;
  padding: 0.34rem 0.36rem 0.44rem;
}
.entryExitDetailsContent > ul > li {
  text-align: left;
  color: #333;
  font-size: 0.28rem;
  height: 0.8rem;
  line-height: 0.8rem;
}
.entryExitDetailsContent > ul > li:after {
  content: "";
  display: block;
  clear: both;
}
.entryExitDetailsContent > ul > li span {
  float: right;
  color: #999;
}
</style>
