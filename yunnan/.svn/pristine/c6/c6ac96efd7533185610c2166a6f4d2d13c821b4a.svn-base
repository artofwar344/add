<template>
  <div>
    <towtop style="margin: 0;" :name="titlename"/>

    <mt-navbar v-model="selected">
      <mt-tab-item id="1">
        <div class="tabTitle">全部</div>
        <div class="tabBlock"></div>
      </mt-tab-item>
      <mt-tab-item id="2">
        <div class="tabTitle">办理中</div>
        <div class="tabBlock"></div>
      </mt-tab-item>
      <mt-tab-item id="3">
        <div class="tabTitle">已完结</div>
        <div class="tabBlock"></div>
      </mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="nr" v-for="item in datatext.list" @click="goto(item)">
          <div class="header">
            <h2>{{ item.matter_name }}</h2>
            <div v-if="item.is_end==2" class="zt_btn">未提交</div>
            <div v-else-if="item.is_end==1" class="zt_btn wj_btn">已完结</div>
            <div v-else-if="item.is_end==0" class="zt_btn">办理中</div>
            <div v-else-if="item.is_end==3" class="zt_btn">提交失败</div>
          </div>
          <div class="list">
            <ul>
              <li>
                <span>所属部门：</span><span>{{item.deal_org}}</span>
              </li>
            </ul>
          </div>
          <div class="time">
            <div class="sqtime">
              <span>申请时间：</span><span>{{item.receive_date}}</span>
            </div>
          </div>
        </div>
        <mt-button v-show="getMoreBtnShow" class="getMoreBtn" :class="{clickPrevent:isClickPrevent}" @click="getMoreFn">加载更多</mt-button>
        <p v-show="getMoreNoneShow" class="getMoreBtn">没有更多数据</p>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="nr" v-for="item in datatext.list" @click="goto(item)"
             v-if="item.is_end !== '1'">
          <div>
            <div class="header">
              <h2>{{ item.matter_name }}</h2>
              <div v-if="item.is_end==3" class="zt_btn">提交失败</div>
              <div v-else-if="item.is_end==2" class="zt_btn">未提交</div>
              <div v-else-if="item.is_end==0" class="zt_btn">办理中</div>
            </div>
            <div class="list">
              <ul>
                <li>
                  <span>所属部门：</span><span>{{item.deal_org}}</span>
                </li>
              </ul>
            </div>
            <div class="time">
              <div class="sqtime">
                <span>申请时间：</span><span>{{item.receive_date}}</span>
              </div>
            </div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div class="nr" v-for="item in datatext.list" @click="goto(item)" v-if="item.is_end== '1'">
          <div>
            <div class="header">
              <h2>{{ item.matter_name }}</h2>
              <div class="zt_btn wj_btn">已完结</div>
              <!--<div v-if="item.is_end!=1" class="zt_btn" :class="{wj_btn:item.is_end=='1'}">办理中</div>-->
            </div>
            <div class="list">
              <ul>
                <li>
                  <span>所属部门：</span><span>{{item.deal_org}}</span>
                </li>
              </ul>
            </div>
            <div class="time">
              <div class="sqtime">
                <span>申请时间：</span><span>{{item.receive_date}}</span>
              </div>
            </div>
          </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
  import towtop from '../../../components/HederTwo'

  export default {
    data() {
      return {
        titlename: '我的办事',
        datatext: {list:[]},
        activeTab: 1,
        selected: '1',
        pageNum: 1,
        token: '',
        getMoreBtnShow: false,
        getMoreNoneShow: false,
        isClickPrevent: false,
        memberid: ''
      }
    },
    components: {
      towtop
    },
    created() {
      // this.memberid = 'c87a75d122bf43b085ac9f962415bc64'
      this.token =  this.$route.query.token;
      this.memberid = sessionStorage.getItem('userid')
      this.getDataFn(()=>{
        this.getMoreBtnShow = true;
      })
    },
    methods: {
      goto(item) {
        window.sessionStorage.setItem("WorkId", item.work_id);
        window.sessionStorage.setItem("userid", this.memberid);//手机App注册Id
        window.sessionStorage.setItem("usertoken", this.token);//手机用户登录状态
        window.sessionStorage.setItem("matterid", item.matter_id);//查询或办事项Id
        
        this.$router.push({
          path: '/wuliu_one',
          query: {
            WorkId: item.work_id,
            userid: this.memberid,
            token: this.token,
            matter_id: item.matter_id,
          }
        })
      },
      getMoreFn(){
        console.log('more');
        this.getDataFn()
      },
      getDataFn(cb){
        this.isClickPrevent = true
        let pagejump = {
          "tRecInPage": "10",
          "tPageJump": this.pageNum,
        }
        let data = {
          "txnBodyCom": {
            member_id: this.memberid
          }
        }
        this.$ajaxRequest('post', '/gsp/mng30011', data, pagejump)
          .then(res => {
          	console.log(res,'获取workid')
            if(res&&res.list&&res.list.length>0){
              res.list.map((v)=>{
                this.datatext.list.push(v)
              })
              this.pageNum++
              if(cb) cb()
            } else{
              this.getMoreBtnShow = false
              this.getMoreNoneShow = true
            }
            this.isClickPrevent = false
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
</script>
<style scoped>
  .mint-navbar {
    margin-bottom: 10px;
  }

  .mint-tab-item .tabTitle {
    color: #555;
  }

  .nr {
    width: 100%;
    background-color: #fff;
    padding-bottom: 0.2rem;
    margin-bottom: 0.2rem;
  }

  .nr .header {
    width: 90%;
    margin: 0 auto;
    text-align: left;
  }

  .nr .header h2 {
    padding-top: 0.25rem;
    width: 60%;
    font-size: .28rem;
    font-weight: 700;
    display: inline-block;
    margin-bottom: 0.2rem;
  }

  .nr .zt_btn {
    width: 20%;
    background-color: #FAC306;
    height: 0.6rem;
    line-height: 0.6rem;
    border-radius: 0.4rem;
    text-align: center;
    color: #fff;
    display: inline-block;
    float: right;
    margin-top: 0.2rem;
  }

  .nr .list li {
    margin-top: 0.15rem;
    display: inline-block;
    width: 94%;
    text-align: right;
    font-size: 0.24rem;
    color: #666;
  }

  .time {
    width: 90%;
    height: .6rem;
    line-height: .6rem;
    margin: 0.3rem auto 0.2rem auto;
    font-size: .24rem;
    color: #999;
    background-color: #eee;
    border-radius: 0.3rem;

  }

  .time .sqtime {
    display: inline-block;
    margin-right: 0.1rem;
  }

  .time .xq_btn {
    display: inline-block;
  }

  .nr .wj_btn {
    background-color: #2D7FFC;
  }

  .getMoreBtn {
    width: 80%;
    margin-bottom: 20px;
  }
  p.getMoreBtn {
    width: 100%;
    font-size: 16px;
    color: #888;
    text-align: center;
  }
  .clickPrevent{
    pointer-events: none;
    opacity: 0.8;
  }

</style>
