<template>
  <div>
    <towtop style="margin: 0;" :name="titlename"/>
    <div style="padding-top: 16px;">
      <div class="itemBox" v-for="v in list" @click="goto(v)">
        <div class="itemInf">
          <div class="itemTitle">{{v.mattertitle || ' '}}</div>
          <div class="itemTime">{{v.submittime || ' '}}</div>
        </div>
        <div class="itemPass">审核中</div>
      </div>
    </div>
  </div>
</template>
<script>
  import towtop from '../../../components/HederTwo'

  export default {
    data() {
      return {
        titlename: '我的待办',
        datatext: '',
        activeTab: 1,
        selected: '1',
        list: []
      }
    },
    components: {
      towtop
    },
    created() {
      let data = {
        txnCommCom: {
          tStsTraceId: "11",
          txnIttChnlId: 'C0011234567890987654321',
          txnIttChnlCgyCode: 'AC02C001'
        },
        txnBodyCom: {
          // userid: '778C4A495343453EE0530ADDC480DBC2';;
          matter_id: window.sessionStorage.getItem("matterid"),
          userid:  window.sessionStorage.getItem("userid"),
        }
      }
      this.$ajaxRequest('post', '/gsp/fsx03008', data)
        .then(res => {
          res.list.map(function (v) {
            v.submittime = new Date(v.submittime).toLocaleString('zh-CN', {hour12: false})
          })
          this.list = res.list
        })
        .catch(error => {
          console.log(error)
        })
    },
    methods: {
      goto(obj) {
        this.$router.push({
          path: '/backlogDetails',
          query: {
            mt: obj.mattertitle,
            sd: obj.sydate,//剩餘時間---
            tm: obj.submittime,
            nm: obj.name,
            lm: obj.lianman,
            nm: obj.nickname
          }
        })
      },
    }
  }
</script>
<style scoped="backlog.vue">
  .hui-tabs_nav {
    width: 100%;
  }

  .mint-navbar {
    margin: 10px 0;
  }

  .tabBlock {
    width: 30%;
    margin: 0 auto;
    height: 4px;
    background-color: #fff;
  }

  .tabTitle {
    color: #333;
    font-size: 16px;
    line-height: 2;
  }

  .mint-navbar .mint-tab-item.is-selected {
    border-bottom: none;
    color: #333;
  }

  .mint-navbar .mint-tab-item {
    padding: 10px 0;
  }

  .mint-navbar .mint-tab-item.is-selected .tabBlock {
    background-color: #53dfff;
  }

  .itemBox {
    margin-bottom: 10px;
    background-color: #fff;
    padding: 8px 10px;
  }

  .itemInf, .itemPass {
    display: inline-block;
    vertical-align: middle;
  }

  .itemInf {
    text-align: left;
    width: 69%;
    line-height: 1.6;
  }

  .itemPass {
    width: 29%;
  }

  .itemInf * {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .moreBtn {
    font-size: 16px;
    width: 70%;
    color: #555;
    background-color: #fff;
  }
</style>
