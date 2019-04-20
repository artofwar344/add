<template>
  <div class="livehood-page">
    <towtop :name="titlename" />
    <div class="container">
      <div class="box social">
        <div class="header">
          <div class="left">
            <span class="v-line"></span>
              <p>信件内容
              </p>
          </div>
          <div class="right"><span>

            </span></div>
        </div>
        <div class="content clearfix">
          <p class="letterTitle">
            {{title}}
          </p>
          <p class="letterContent">
            {{content}}
          </p>
          <p class="letterFooter" style="margin-top: 21px;">
            <span class="right">{{letterDate}}
            <br/>{{from}}</span>
          </p>
          <p class="letterFooter">
            <span class="left">写信日期:<br/>写信人:</span>
          </p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import towtop from '../../../components/HederTwo'
  import { liveUrl } from "../../../components/toptow.js";

  export default {
    data () {
      return {
        urls: '/kylin',
        date: "20171001",
        titlename: '信件详情',
        id:"",
        type:"",
        face:"",
        provid: "530000000000",
        title:"",
        content:"",
        from:"",
        letterDate:""
      }
    },
    components:{
      towtop
    },
    created () {

    },
    mounted () {
      // 早上6点前算作是前天的数据取昨天的日期,
      // 6点到第二天的6点传昨天的日期
      let today = new Date();
      if(today.getHours() < 6) {
        today = new Date(today.getTime() - (2 * 1000 * 60 * 60 * 24))
      } else {
        today = new Date(today.getTime() - (1000 * 60 * 60 * 24))
      }
      this.date = today.getFullYear() + "";
      if(today.getMonth() < 9) {
        this.date = this.date.concat("0" + (today.getMonth() + 1));
      } else {
        this.date = this.date.concat((today.getMonth() + 1) + "");
      }
      if(today.getDate() < 10) {
        this.date = this.date.concat("0" + today.getDate());
      } else {
        this.date = this.date.concat(today.getDate());
      }
      console.log("取值日期:" + this.date);
      // ---------------------------------------------
      this.id = this.$route.params.id;          // 信件id
      this.type = this.$route.params.type;      // 事件0 或 人物1
      this.face = this.$route.params.face;      // 表情图标
      console.log("id:",this.id);
      let request = {};
      if(this.type == 0) {                           // 事件request
        request = {"query": [{
            "id": "focuseventleletterdetail",
            "sqlMap": {
              "HDFS_DATA_DT":this.date,
              "PROV_ID": this.provid,
              "ID": this.id
            }
          }],
          txnBodyCom:{}};
      } else {                                  // 人物request
        request = {"query": [{
            "id": "focuspeopleleletterdetail",
            "sqlMap": {
              "HDFS_DATA_DT":this.date,
              "PROV_ID": this.provid,
              "ID": this.id
            }
          }],
          txnBodyCom:{}};
      }
      console.log(JSON.stringify(request))
      this.$ajaxRequest("post", "/dss/kylin", request).then((res)=> {
        if(this.type == 0) {
          res = res.focuseventleletterdetail;
        } else {
          res = res.focuspeopleleletterdetail;
        }
        this.title = res[0][1];
        this.content = res[0][2];
        this.letterDate = res[0][3];
        this.from = res[0][4];
      });
    },

    computed: {},
    methods: {
    }
  }
</script>

<style lang="less" scoped>
  .clearfix {
    overflow: auto;
  }
  .livehood-page .container {
    padding: 0.16rem 0;
    font-family: PingFangSC-Regular;

    .box {
      background: #fff;
      /*margin-bottom: 0.36rem;*/
      .header{
        height: 0.98rem;
        line-height: 0.98rem;
        padding: 0 0.36rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.28rem;
        border-bottom: 1px solid #F1F3F6;

        .left {
          .c_b_tit_right {
            font-family: "Microsoft-Yahei";
            font-size: .10rem;
            float: right;
            color: #999999;
            text-align: right;
          }
          .v-line {
            background: #2D7FFC;
            width: 0.06rem;
            height: 0.24rem;
            display: inline-block;
            margin-right: 0.1rem;
          }
          >p {
            display: inline-block;
            font-size: 15px;
            color: #333333;
            letter-spacing: 0.18px;
          }
        }
        .right {
          color: #999;
          img {
            height: 0.3rem;
            position: relative;
            top: 2px;
            display: inline-block;
            margin-right: 2px;
          }
        }
      }
    }


    .social {
      .header {
        .right {
          ont-family: PingFangSC-Regular;
          font-size: .1px;
          color: #999999;
          letter-spacing: .0012px;
          text-align: right;
        }
      }
      .content {
        margin: .2rem;
        padding-top: 0.35rem;
        .letterTitle {
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #333333;
          letter-spacing: 0.16px;
          font-weight: bold;
          line-height: 21px;
        }
        .letterContent {
          font-family: PingFangSC-Regular;
          margin-top: .3rem;
          text-indent: .2rem;
          text-align: left;
          font-size: 12px;
        }
        .letterFooter {
          font-family: PingFangSC-Regular;
          text-align: right;
          .left {
            float: right;
          }
          .right {
            float: right;
            text-align: left;
          }
        }
      }
    }

  }

</style>
