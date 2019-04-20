<template>
	<div class="lawyerList">
		<towtop :name="titlename"/>
     <div class="example-loadmore_wrapper" ref="wrapper" >
        <Loadmore :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
            <!-- <ul class="example-loadmore_list">
                <li v-for="item in list" class="example-loadmore_listitem" v-text="item"></li>
            </ul> -->
            <ul>
              <li class="clearfix" @click="topersoninfo(list)" v-for="list in arr">
              <div class="headerimg">
                <!-- <img src="../../../assets/images/lawyerman22.png" alt=""> -->
                <img :src="list.c_zjzp" alt="">
              </div>
              <div class="lawyer_info">
                <div class="name">
                  <p style="font-size: 0.36rem;font-weight: 700">{{list.c_xm}}</p>
                  <img src="../../../assets/images/lawyer_man.png" alt="" class="sex" v-if="list.c_xbn=='男'">
                  <img src="../../../assets/images/lawyer_women.png" alt="" class="sex" v-if="list.c_xbn=='女'">
                </div>
                <p class="loc" style="margin-bottom: 0.08rem;">执业机构：{{list.c_zyjgmc}}</p>
                <p class="num">执业证号：{{list.c_zyzh}}</p>
              </div>
            </li>
          </ul>
        </Loadmore>
    </div>
	</div>
</template>	
<script>
import towtop from "../../../components/HederTwo";

import { cenurl } from "../../../components/toptow.js";
export default {
  data() {
    return {
      titlename: "律师查询",
      arr: '',
      list: [],
      allLoaded: false,
      bottomStatus: '',
      wrapperHeight: 0,
      topStatus: '',
      pagename:'',
      res:''
    };
  },
  components: {
    towtop
  },
  created() {
    this.arr = window.sessionStorage.getItem('lawyerarr')!=undefined?JSON.parse(window.sessionStorage.getItem('lawyerarr')): this.$route.params.datalist.list;
    window.sessionStorage.setItem('querydata',JSON.stringify(this.$route.params.querydata))
    window.sessionStorage.setItem('lawyerarr',JSON.stringify(this.arr))
    this.pagename=this.$route.params.datalist.txnCommCom.tCurrTotalPage
  },
  methods: {
    topersoninfo(cent) {
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
    },
     handleBottomChange(status) {
      this.bottomStatus = status;
    },
    loadBottom() {
      const self = this;
      // 模拟加载中
      let querydata=this.$route.params.querydata!=undefined?this.$route.params.querydata:JSON.parse(window.sessionStorage.getItem('querydata'))
      let setdata = {
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          c_sfzh: querydata.c_sfzh,
          c_xm: querydata.c_xm,
          c_zyzh: querydata.c_zyzh
        }
      };
      let page = { tRecInPage: "10", tPageJump: this.pagename+1};
      this.$ajaxRequest("post", "/gsp/mng90039", setdata, page)
        .then(res => {
          console.log(res)
          this.res=res
          this.pagename=res.txnCommCom.tCurrTotalPage
        })
        .catch(error => {
          console.log(error);
        });
        setTimeout(() => {
        let lastValue = this.res.list.length;
        if (lastValue > 0) {
          for (let i = 0; i < 10; i++) {
            if(this.res.list[i]!=undefined){
              this.arr.push(this.res.list[i]);
            }else{
              this.allLoaded = true;
            }
          }
          console.log(this.arr)
          window.sessionStorage.setItem('lawyerarr',JSON.stringify(this.arr))
        } else {
          this.allLoaded = true; // 若数据已全部获取完毕
        }
        this.$nextTick(function () {
          this.$refs.loadmore.onBottomLoaded();
        });
      }, 1500);
    },
    handleTopChange(status) {
      this.topStatus = status;
    },
    loadTop() {
      const self = this;
      setTimeout(() => {
        let firstValue = this.list[0];

        if (firstValue > -19) {
          for (let i = 1; i <= 10; i++) {
            self.list.unshift(firstValue - i);
          }
        }
        self.$refs.loadmore.onTopLoaded();
      }, 1500);
    }
  },
  mounted() {
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
  }
};
</script>
<style scoped="lawyerList.vue">
.clearfix {
  overflow: auto;
}
.lawyerList ul li {
  width: 90%;
  margin: 0.3rem auto;
  border-bottom: 0.01rem solid #ccc;
}
.headerimg {
  float: left;
  width: 1.28rem;
  height: 1.28rem;
}
.headerimg img {
  display: inline-block;
  width: 100%;
  width: 100%;
}
.lawyer_info {
  width: 70%;
  float: right;
  font-size: 0.28rem;
  text-align: left;
  margin-bottom: 0.4rem;
}
.name p {
  display: inline-block;
  margin: 0 0.2rem 0.25rem 0;
}
.name .sex {
  display: inline-block;
  width: 0.24rem;
  height: 0.24rem;
}
.loc,
.num {
  color: #666;
}
.example-loadmore_top{
  height:50px;
  background:green;
  color:#fff;
}
.example-loadmore_wrapper {
    overflow: scroll
}
.example-loadmore_listitem {
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-bottom:1px solid #e1e2e6
}
</style>
