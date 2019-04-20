<template>
  <div class="wuliu_one">
    <towtop :name="titlename"/>
    <Steps>
      <Step
        v-for="item in list"
        :item="item"
        :key="item.id"
        item-class="example-step"
        title-class="example-step_title"
        info-class="example-step_info"
        desc-class="example-step_desc"
        date-class="example-step_date"
        :class="{huise_status:item.status=='nopass'}"
      >
        <div class="event" v-if="!item.oper_time==0">
          <div v-for="v in item.fun_contents">
            <div class="l_time">{{v.item_time?v.item_time: ' '}}
            </div>
            <div class="l_event">
              {{v.item_content}}
              <span class="ckxq" v-if="item.isbtn" @click="ckxq_btn(item,v)">{{item.btnText}}</span>
              <span class="ckxq" v-if="v.appUrl && item.appUrlBtn" @click="ctclBtn(item,v)">重填材料</span>
            </div>
          </div>
        </div>
      </Step>
    </Steps>
  </div>
</template>

<script>
  import towtop from "../../../components/HederTwo";

  export default {
    data() {
      return {
        titlename: "办事项详情",
        workId: '',
        matterid: window.sessionStorage.getItem("matterid"),
        userid: '',
        orgCode: '',
        token: '',
        list: []
      };
    },
    components: {
      towtop
    },
    methods: {
      ckxq_btn(item, v) {
        if (item.toHref === 'declareDetails') {
          sessionStorage.removeItem("declareurl")
          sessionStorage.removeItem("declareElNo")
          sessionStorage.removeItem("declareRemark")
          sessionStorage.removeItem("declareErrorMsg")
          if (item.fun_code === 'dispatch') {
            if (item.fun_status === 0) {

            } else if (item.fun_status === 2) {
              if (v.url) sessionStorage.setItem("declareurl", v.url)
              if (v.elNo) sessionStorage.setItem("declareElNo", v.elNo)
              if (v.remark1) sessionStorage.setItem("declareRemark", v.remark1)
            } else if (item.fun_status === 3 || item.fun_status === 4) {
              if (v.errorMsg) sessionStorage.setItem("declareErrorMsg", v.errorMsg)
              if (v.url) sessionStorage.setItem("declareurl", v.url)
            } else if (item.fun_status === 6) {
              if (v.errorMsg) sessionStorage.setItem("declareErrorMsg", v.errorMsg)
              if (v.url) sessionStorage.setItem("declareurl", v.url)
            }
          }
          this.$router.push({
            path: '/' + item.toHref,
            query: {
              WorkId: this.workId,
              token: this.token,
              selected: '1',
              date: item.date,
              matter_id: this.matterid
            }
          })
        } else if (item.toHref === 'delivery') {
          this.$store._modules.root.state.$expressdelivery.wuliuTodeliveryWorkId = this.workId
          this.$store._modules.root.state.$expressdelivery.userid = this.userid
          this.$store._modules.root.state.$expressdelivery.matterid = this.matterid
          this.$store._modules.root.state.$expressdelivery.orgCode = this.orgCode
          this.$store._modules.root.state.$expressdelivery.accept = {
            prov_code: v.org_province,
            postname: v.org_link_name,
            city_code: v.org_city,
            cnty_code: v.org_county,
            address: v.org_link_address,
            tel: v.org_link_tel
          }
          this.$router.push({
            path: '/' + item.toHref
          })
        } else if (item.toHref === 'viewLogisticsInformation') {
          this.$store._modules.root.state.$expressdelivery.wuliuTodeliveryWorkId = this.workId
          this.$store._modules.root.state.$expressdelivery.userid = this.userid
          this.$store._modules.root.state.$expressdelivery.matterid = this.matterid
          this.$router.push({
            path: '/' + item.toHref
          })
        } else if (item.toHref = 'bspj') {
          this.$router.push({
            path: '/' + item.toHref,
            query: {
              WorkId: this.workId,
              selected: '1',
              date: item.date,
              matter_id: this.matterid,
              userid: this.userid
            }
          })
        }
      },
      ctclBtn(item, v) {
        sessionStorage.setItem("matterid", this.matterid)
        this.$router.push({
          path: v.appUrl,
          query: {
            WorkId: this.workId
          }
        })
      },
      resSort(key) {
        return function (a, b) {
          let v1 = a[key]
          let v2 = b[key]
          return v1 - v2
        }
      }
    },
    created() {
      this.workId = this.$route.query.WorkId
      this.userid = this.$route.query.userid
      this.token = this.$route.query.token
      this.matterid = this.$route.query.matter_id
      let data = {
        txnCommCom: {
          tStsTraceId: "110567890"
        },
        txnBodyCom: {
          member_id: this.userid,
          matter_id: this.matterid,
          work_id: this.workId
          // matter_id: 'd653a1f8321d4c35aacffbee5fa104cf',
          // work_id: '09c7d4d81c3d47f9b1e285a444f7e0eb'
        }
      };
      this.$ajaxRequest("post", "/gsp/mng90034", data)
        .then(res => {
          console.log(res);
          console.log(res.orgCode);
          this.orgCode = res.orgCode
          let steps = res.work_funs
          steps.sort(this.resSort('sort_code'))
          steps.map(function (v, i) {
            v.title = v.fun_name
            if (v.oper_flag === 0) {
              v.date = "未开始"
            } else if (v.oper_flag === 1) {
              if (v.fun_code === 'preaudit') {
                v.isbtn = true
                v.toHref = 'declareDetails'
                v.btnText = '查看详情'
                if (v.fun_status === 0) {
                  v.date = "暂存"
                  v.appUrlBtn = true
                } else if (v.fun_status === 1) {
                  v.date = "已提交"
                } else if (v.fun_status === 2) {
                  v.date = "已受理"
                } else if (v.fun_status === 3) {
                  v.date = "审核不通过"
                  v.appUrlBtn = true
                }
              } else if (v.fun_code === 'post') {
                v.isbtn = true
                v.toHref = 'delivery'
                v.btnText = '查看详情'
                if (v.fun_status === 0) {
                  v.date = "未开始"
                } else if (v.fun_status === 1) {
                  v.date = "已邮寄"
                }
              } else if (v.fun_code === 'windowaccept') {
                if (v.fun_status === 0) {
                  v.date = "未受理"
                }
              } else if (v.fun_code === 'onlineaudit') {
                if (v.fun_status === 0) {
                  v.date = "未审批"
                }
              } else if (v.fun_code === 'dispatch') {
                v.isbtn = true
                v.toHref = 'declareDetails'
                v.btnText = '查看详情'
                if (v.fun_status === 0) {
                  v.date = "未开始"
                  v.appUrlBtn = true
                } else if (v.fun_status === 1) {
                  v.date = "受理中"
                } else if (v.fun_status === 4) {
                  v.date = "退回待补齐"
                  v.appUrlBtn = true
                } else if (v.fun_status === 5) {
                  v.date = "申请暂停"
                } else if (v.fun_status === 6) {
                  v.date = "审批失败"
                  v.appUrlBtn = true
                }
              } else if (v.fun_code === 'prefina') {
                if (v.fun_status === 0) {
                  v.date = "未缴费"
                } else if (v.fun_status === 2) {
                  v.date = "未成功缴费"
                }
              } else if (v.fun_code === 'post2') {
                v.isbtn = true
                v.toHref = 'viewLogisticsInformation'
                v.btnText = '查看详情'
                if (v.fun_status === 0) {
                  v.date = "未邮寄"
                } else if (v.fun_status === 1) {
                  v.date = "已邮寄"
                }
              } else if (v.fun_code === 'score') {
                if (v.fun_status === 0) {
                  v.isbtn = true
                  v.date = "未评价"
                  v.btnText = '去评价'
                  v.toHref = "bspj";
                }
              }
            } else if (v.oper_flag === 2) {
              v.status = "finished"
              if (v.fun_code === 'preaudit') {
                v.isbtn = true
                v.toHref = 'declareDetails'
                v.btnText = '查看详情'
                if (v.fun_status === 0) {
                  v.date = "暂存"
                } else if (v.fun_status === 1) {
                  v.date = "已提交"
                } else if (v.fun_status === 2) {
                  v.date = "已受理"
                } else if (v.fun_status === 3) {
                  v.date = "审核不通过"
                } else if (v.fun_status === 4) {
                  v.date = "审核通过"
                }
              } else if (v.fun_code === 'post') {
                v.isbtn = true
                v.toHref = 'delivery'
                v.btnText = '查看详情'
                if (v.fun_status === 0) {
                  v.date = "未开始"
                } else if (v.fun_status === 1) {
                  v.date = "已邮寄"
                } else if (v.fun_status === 2) {
                  v.date = "已收货"
                }
              } else if (v.fun_code === 'windowaccept') {
                if (v.fun_status === 0) {
                  v.date = "未受理"
                } else if (v.fun_status === 1) {
                  v.date = "已结束"
                }
              } else if (v.fun_code === 'onlineaudit') {
                if (v.fun_status === 0) {
                  v.date = "未审批"
                } else if (v.fun_status === 1) {
                  v.date = "审批不通过"
                } else if (v.fun_status === 2) {
                  v.date = "审批通过"
                }
              } else if (v.fun_code === 'dispatch') {
                v.isbtn = true
                v.toHref = 'declareDetails'
                v.btnText = '查看详情'
                if (v.fun_status === 0) {
                  v.date = "未开始"
                  // v.appUrlBtn = true
                } else if (v.fun_status === 1) {
                  v.date = "受理中"
                } else if (v.fun_status === 2) {
                  v.date = "审批通过"
                } else if (v.fun_status === 3) {
                  v.date = "审批不通过"
                } else if (v.fun_status === 4) {
                  v.date = "退回待补齐"
                } else if (v.fun_status === 5) {
                  v.date = "申请暂停"
                } else if (v.fun_status === 6) {
                  v.date = "审批失败"
                  v.appUrlBtn = true
                }
              } else if (v.fun_code === 'prefina') {
                if (v.fun_status === 0) {
                  v.date = "未缴费"
                } else if (v.fun_status === 2) {
                  v.date = "未成功缴费"
                } else if (v.fun_status === 1) {
                  v.date = "已缴费"
                }
              } else if (v.fun_code === 'post2') {
                v.isbtn = true
                v.toHref = 'viewLogisticsInformation'
                v.btnText = '查看详情'
                if (v.fun_status === 0) {
                  v.date = "未邮寄"
                } else if (v.fun_status === 1) {
                  v.date = "已邮寄"
                } else if (v.fun_status === 2) {
                  v.date = "已发货"
                }
              } else if (v.fun_code === 'score') {
                if (v.fun_status === 0) {
                  v.isbtn = true
                  v.date = "未评价"
                  v.toHref = "bspj";
                  v.btnText = '去评价'
                } else if (v.fun_status === 1) {
                  v.date = "已评价"
                }
              }
            }
          })
          console.log(steps);
          this.list = steps
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
</script>
<style>
  .wuliu_one .hui-step-finished {
    color: #333;
  }

  .wuliu_one .hui-step_title {
    padding-left: 0.2rem;
    text-align: left;
  }

  .wuliu_one .hui-step_date {
    font-size: 0.28rem;
    color: #2d7ffc;
  }

  .wuliu_one .hui-step {
    margin: 0.4rem;
  }

  .wuliu_one .hui-step_info {
    color: #999;
    margin-top: 0.5rem;
    text-align: left;
    padding-left: 0.2rem;
    font-size: 0.2rem;
  }

  .wuliu_one .hui-step-finished .hui-step_line {
    background-color: #2d7ffc;
    width: 0.08rem;
    left: -17px;
    height: 112%;
  }

  .wuliu_one .l_time, .l_event {
    margin-bottom: 0.1rem;
    text-align: left;
    padding-left: 0.2rem;
  }

  .wuliu_one .l_time {
    color: #999;
    font-size: 0.2rem;
  }

  .wuliu_one .l_event {
    font-size: 0.24rem;
  }

  .wuliu_one .ckxq {
    color: #2d7ffc;
    margin-left: 0.2rem;
  }

  .wuliu_one .event {
    margin-top: 0.3rem;
    border-radius: 0.2rem;
    background-color: #eee;
    padding: 0.2rem 0 0.2rem 0;
  }

  .wuliu_one .huise_status .example-step_date {
    color: #666;
  }
</style>
