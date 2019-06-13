<template>
  <div>
    <towtop :name="hadertow"/>
    <div id="explain">
      <!--头部部分-->
      <div id="main">
        <div class="header">
          <div class="blueline"></div>
          {{datatext.matter_name}}
        </div>
      </div>

      <!--办事详情-->
      <div class="details littleBottom">
        <ul class="font28">
          <li>
            <span class="name">事项类型</span>
            <span class="info">{{formatMatterType(datatext.matter_type)}}</span>
          </li>
          <!-- 行政审批 -->
          <div v-if="datatext.matter_type != '1'">
            <li>
              <span class="name">实施机构</span>
              <span class="info">{{datatext.deal_org}}</span>
            </li>
            <li>
              <span class="name">通办范围</span>
              <span class="info">{{datatext.tb_range}}</span>
            </li>
            <li>
              <span class="name">法定办结时限(工作日)</span>
              <span class="info">{{datatext.bj_time_limit}}</span>
            </li>
            <li>
              <span class="name">承诺办结时限(工作日)</span>
              <span class="info">{{datatext.promise_day}}</span>
            </li>
          </div>
          <!-- 公共服务 -->
          <div v-if="datatext.matter_type == '1'">
            <li>
              <span class="name">办件类型</span>
              <span class="info">{{formatDoPromise(datatext.do_promise)}}</span>
            </li>
          </div>
          <li v-if="datatext.approve_condition" class="specialLi">
            <span class="name">受理条件</span>
            <span class="info">{{datatext.approve_condition}}</span>
          </li>
        </ul>
      </div>
      <!--相关材料-->
      <div class="details littleBottom" v-if="isshow">
        <ul class="xgcl font28" v-for="item in datatext.files">
          <li>
            <span class="name">申请材料名称</span>
            <span class="info">{{item.matter_file_name}}</span>
          </li>
          <li>
            <span class="name">材料来源</span>
            <span class="info">{{item.matter_file_source}}</span>
          </li>
          <li>
            <span class="name">材料类型</span>
            <span class="info">{{formatMatterFileType(item.matter_file_type)}}</span>
          </li>
        </ul>
      </div>
      <div class="details littleBottom">
        <!-- <div class="header">
        <div class="blueline"></div>办事详情</div>-->
        <ul class="font28">
          <li class="specialLi">
            <span class="name">审查标准</span>
            <span class="info">{{datatext.checkup}}</span>
          </li>
          <div v-if="datatext.matter_type == '1'">
            <li>
              <span class="name">是否有初审</span>
              <span class="info">{{formatYesOrNo(datatext.has_preaudit)}}</span>
            </li>
            <li v-if="datatext.has_preaudit == '1'">
              <span class="name">通知市民方式</span>
              <span class="info">{{formatBsResultalarm(datatext.bs_resultalarm)}}</span>
            </li>
          </div>
          <li>
            <span class="name">是否有结果文书</span>
            <span class="info">{{formatYesOrNo(datatext.has_doc)}}</span>
          </li>
          <div v-if="datatext.has_doc == '1'">
            <li>
              <span class="name">结果文书名称</span>
              <span class="info">{{datatext.doc_name}}</span>
            </li>
            <div v-if="datatext.matter_type == '1'">
              <li>
                <span class="name">结果文书类型</span>
                <span class="info">{{datatext.doc_type}}</span>
              </li>
              <li>
                <span class="name">结果文书说明</span>
                <span class="info">{{datatext.doc_remark}}</span>
              </li>
            </div>
            <li>
              <span class="name">结果文书样本</span>
              <span class="info">{{datatext.result_sample}}</span>
            </li>
          </div>

          <li>
            <span class="name">是否收费</span>
            <span class="info">{{formatYesOrNo(datatext.is_charge)}}</span>
          </li>
          <div v-if="datatext.is_charge == '1'">
            <li v-if="datatext.matter_type == '1'">
              <span class="name">收费名称</span>
              <span class="info">{{datatext.charge_name}}</span>
            </li>
            <li>
              <span class="name">收费标准</span>
              <span class="info">{{datatext.charge_mode}}</span>
            </li>
            <li class="specialLi">
              <span class="name">收费依据</span>
              <span class="info">{{datatext.fina}}</span>
            </li>
          </div>

          <div v-if="datatext.matter_type != '1'">
            <li>
              <span class="name">预约办理</span>
              <span class="info">{{formatYesOrNo(datatext.is_appoint)}}</span>
            </li>
            <li>
              <span class="name">网上支付</span>
              <span class="info">{{formatYesOrNo(datatext.is_online_payment)}}</span>
            </li>
            <li>
              <span class="name">物流快递</span>
              <span class="info">{{formatYesOrNo(datatext.is_express)}}</span>
            </li>
          </div>
          <li class="specialLi">
            <span class="name">常见问题</span>
            <span class="info" v-html="datatext.question"></span>
          </li>
        </ul>
      </div>
      <Btn block  disabled='disabled' @click.prevent.once="query" class='btn scl_btn'>办理</Btn>
      <!-- <div class="padTopAdd5">
        <mybutton :btnData="btnData" @click="query" class="scl_btn"/>
      </div> -->
    </div>
  </div>
</template>

<script>
import towtop from "../../../components/HederTwo";
import { cenurl } from "../../../components/toptow.js";
import mybutton from "@/components/MyButton";

export default {
  name: "explain",

  data() {
    return {
      btnData: [
        {
          text: "办理",
          disabled: false,
          isSure: true
        }
      ],
      arr: "",
      show: false,
      hadertow: "办事指南",
      datatext: "",
      userid: "",
      matterid: "",
      WorkId: "",
      isshow:false
    };
  },
  components: {
    mybutton,
    towtop
  },
  created() {
    /* window.sessionStorage.setItem("userid", "123 ");
    window.sessionStorage.setItem(
      "matterid",
      "66a3c529f1ee4e7b968e8c9b5ff0af7f"
    ); */
  },
  mounted() {
    this.credeAjax();
  },
  methods: {
    credeAjax() {
      $('.scl_btn').attr({disabled:'disabled'})
      $('.scl_btn').css({'background':'#ccc',"box-shadow":'none'})
      this.userid = window.sessionStorage.getItem("userid");
      this.matterid = window.sessionStorage.getItem("matterid");
      let setdata = {
        txnCommCom: {
          tenant: "610900000000",
          txn_itt_chnl_id: "1",
          txn_itt_chnl_type: "1"
        },
        txnBodyCom: {
          matter_id: this.matterid,
          matter_version: "1"
        }
      };
      this.$ajaxRequest("post", "/gsp/mng80003", setdata)
        .then(res => {
          console.log(res);
          $('.scl_btn').attr({disabled:false})
          $('.scl_btn').css({'background':'rgb(45, 127, 252)',"box-shadow":'rgb(45, 127, 252) 0px 0.05rem 0.15rem'})
          console.log(res.appUrl);
          this.datatext = res;
          for (var list in res.work_funs) {
            if (res.work_funs[list].funcode == "condition") {
              let onearr = [
                {
                  condition: "condition",
                  funname: res.work_funs[list].funname
                }
              ];
              window.sessionStorage.setItem(
                "condition",
                JSON.stringify(onearr)
              );
            } 
             if (res.work_funs[list].funcode == "table") {
              let twoarr = [
                {
                  table: "table",
                  funname: res.work_funs[list].funname
                }
              ];
              window.sessionStorage.setItem("table", JSON.stringify(twoarr));
            } 
             if (res.work_funs[list].funcode == "file") {
              let threearr = [
                {
                  file: "file",
                  funname: res.work_funs[list].funname
                }
              ];
              console.log(threearr);
              window.sessionStorage.setItem("file", JSON.stringify(threearr));
            }
          }
          if (res.appUrl != "" && res.appUrl != undefined) {
            window.sessionStorage.setItem("url", res.appUrl);
            console.log(res.appUrl);
          }
          if(this.datatext.files!=undefined&&this.datatext.files.length!=0){
            this.isshow=true
          }else{
            this.isshow=false
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    query() {
      $('.scl_btn').attr({disabled:'disabled'})
      $('.scl_btn').css({'background':'#ccc',"box-shadow":'none'})
      var condition = JSON.parse(window.sessionStorage.getItem("condition"));
      var table = JSON.parse(window.sessionStorage.getItem("table"));
      var file = JSON.parse(window.sessionStorage.getItem("file"));
      var url = window.sessionStorage.getItem("url");
      let setdata = {
        txnCommCom: {
          tRecInPage: "15",
          tPageJump: "13",
          tStsTraceId: "110567890",
          tenant: "530000000000",
          txn_itt_chnl_id: "0",
          txn_itt_chnl_type: "1"
        },
        txnBodyCom: {
          // memberId: '9621837961d5407c853559a39879bbd2',
          memberId: this.userid,
          matterId: this.matterid,
          // matterId: '14d58a21154f4b788429c1390b11fd60',
          // matterId: 'ea44d84cf8bb418080595c201fd9bdf4',
          // matterId: "79ABB23685267CC8E0530ADDC480B63A",
          // matter_id:'873be12f28ff4b67a78ce3729e09725c',
          //matter_id:'',
          tenant: "530000000000",
          txn_itt_chnl_id: "0",
          txn_itt_chnl_type: "1"
        }
      };
      if ("condition" == condition[0].condition) {
        this.$router.push("/examine?&title=" + condition[0].funname);
      } else {
        this.$ajaxRequest("post", "/gsp/mng30002", setdata)
          .then(res => {
            this.WorkId = res.Work_Id;
            var x = url.indexOf("*");
            if (x != 0 && x != null) {
              url = url.replace("*", "");
              this.$router.push(url + "?WrokId=" + this.WorkId);
            } else if ("table" == table[0].condition) {
              this.$router.push(
                "/changefrom?WorkId=" +
                  this.WorkId +
                  "&title=" +
                  condition[0].funname
              );
            } else if ("file" == file[0].file) {
              this.$router.push(
                "/imgup?WorkId=" +
                  this.WorkId +
                  "&title=" +
                  condition[0].funname
              );
            } else if (x == 0 && x != null) {
              url = url.replace("*", "");
              this.isAndroid_ios(url);
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    isAndroid_ios(url) {
      let sendata = {
        isIdcard: "0",
        WorkId: this.WorkId
      };
      this.$CallModule("liveFace", sendata);
    },
    formatMatterType(type) {
      var matterType = {
        "0": "行政审批",
        "1": "公共服务",
        "2": "内部审批",
        "3": "行政许可",
        "4": "行政处罚",
        "5": "行政其他权利",
        "6": "行政征收",
        "7": "行政给付",
        "8": "行政确认",
        "9": "行政强制",
        "10": "行政裁决",
        "11": "行政奖励"
      };
      return matterType[type];
    },
    formatDoPromise(promise) {
      var doPromise = {
        0: "承诺件",
        1: "即办"
      };
      return doPromise[promise];
    },
    formatMatterFileType(type) {
      var matterFileType = {
        "0": "证书证明",
        "1": "申报表格",
        "2": "其他"
      };
      return matterFileType[type];
    },
    formatYesOrNo(type) {
      var result = {
        "1": "是",
        "0": "否"
      };
      return result[type];
    },
    formatBsResultalarm(str) {
      var alarm = {
        "0": "手机短信通知",
        "1": "网页消息通知",
        "2": "手机APP通知",
        "3": "微信通知"
      };
      var arr = str.split(",");
      var result = [];
      for (var i = 0; i < arr.length; i++) {
        result.push(alarm[arr[i]]);
      }
      return result.join(",");
    }
  }
};
</script>
<style lang='less' scoped>
@import "../../../assets/css/Explain.less";
.header {
  background: none;
  text-align: left;
}
.scl_btn {
  position: fixed;
  bottom: 0;
  left: 50%;
  margin-left: -3.375rem!important;
  box-shadow: 0 0.05rem 0.15rem rgba(45, 127, 252, 0.5);
}
#explain li {
  min-height: 1rem;
  line-height: 1rem;
  display: flex;
}
.details .xgcl li {
  display: block !important;
  height: auto !important;
  span {
    text-align: left !important;
  }
  .info {
    height: auto !important;
    padding-left: 0.5rem !important;
  }
}
.specialLi {
  display: block !important;
  .name {
    width: 100% !important;
  }
  .info {
    width: 100% !important;
    text-align: left !important;
    padding-left: 0.5rem !important;
  }
}
</style>
