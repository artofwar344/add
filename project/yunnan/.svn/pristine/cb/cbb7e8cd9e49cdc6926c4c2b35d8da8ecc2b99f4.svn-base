<template>
  <div class="leaveMsg">
    <towtop name="民生热点大家谈" custom-text=""/>
    <div class="contentBox">
      <textarea v-model="textMsg" placeholder="请输入..." class="leaveText"></textarea>
      <div class="tipBox">
        <p class="tipText">1.您最多可以输入400字。</p>
        <p class="tipText">2.留言将由APP审核后显示，对所有人可见。</p>
      </div>

      <p class="leaveMsg-btn" @click="message()">留言</p>
      <Pageprompt :visible="showSuccess"
                  message="留言成功"
                  icon-type="success">
      </Pageprompt>

      <!--<div class="confirm-tips" v-if="tips">-->
        <!--<p class="delmessage">是否删除该留言</p>-->
        <!--<div>-->
          <!--<span class="btn" v-on:click="cancle()">取 消</span>-->
          <!--<span class="btn" v-on:click="confirm()">确 定</span>-->
        <!--</div>-->
      <!--</div>-->

      <!--<div class="mymessage" v-if="show">-->
        <!--<p class="mymes">我的留言</p>-->
        <!--<div style="display:flex">-->
          <!--<p class="userimg">头像</p>-->
          <!--<div class="commentcontent">-->
            <!--<span class="barble">淘气泡</span><br>-->
            <!--<p class="user-comment">{{textMsg}}</p>-->
            <!--<p class="del" @click=del()>删除</p>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->


    </div>
  </div>


</template>
<script>
  import Towtop from '../../../components/HederTwo'

  export default {
    name: 'socialHotpoint',
    components: {
      Towtop,
    },
    data () {
      return {
        textMsg: '',
        flag: false,
        tips: false,
        content: '',
        show: false,
        topicId: '',
        showSuccess:false,

      }
    },

    mounted () {
      this.topicId = this.$route.params
    },
    methods: {
      message () {
        this.show = true
        this.flag = true
        if(this.textMsg.length >= 400){
          this.$toast('留言字数限制在400以内！');
          return
        }
        console.log(window.sessionStorage.getItem('userid') !== null)
        console.log(window.sessionStorage.getItem('userid'))
        let setdata = {
          txnCommCom: {},
          txnBodyCom: {
            matter_id: window.sessionStorage.getItem("matterid"),
            'hotspot_id': this.topicId.topicId,
            'flag': '00',
            'comment_user_id': window.sessionStorage.getItem('userid') !== 'null' ? window.sessionStorage.getItem('userid') : '0b5dba7536514882ac7140c5482b3799',
            'comment_user_name': window.sessionStorage.getItem('username') != 'null' ? window.sessionStorage.getItem('username') : 'hani123',
            // 'comment_user_id': window.sessionStorage.getItem('userid'),
            // 'comment_user_name': window.sessionStorage.getItem('username'),
            'comment_content': this.textMsg,
            'reply_id': ''
          }
        }
        this.$ajaxRequest('post', '/gsp/fsx06015', setdata)
          .then(res => {

          this.showSuccess = true;
          setTimeout(() =>{
            this.showSuccess = false;
          },3000)

          })
          .catch(error => {
            this.$toast('查询失败！')
            console.log(error)
          })
      },
      del () {
        this.flag = false
        this.tips = true
      },
      cancle () {
        this.tips = false
      },
      confirm () {
        this.show = false
        this.tips = false
      }
    }
  }

</script>
<style lang="less">
  .leaveMsg {
    background: #fff;
    .contentBox {
      padding: 0.2rem 0.36rem;
    }
    .tipBox {
      margin: 0.1rem 0 0.3rem;
    }
    .leaveText {
      display: block;
      padding: 0.1rem;
      width: 100%;
      resize: none;
      outline: none;
      border: 0.01rem solid #ccc;
      -webkit-appearance: none;
      font-size: 0.34rem;
      height: 2rem;
    }
    .leaveMsg-btn {
      height: .8rem;
      line-height: .8rem;
      background: #589afd;
      text-align: center;
      border-radius: .1rem;
      width: 100%;
      font-size: .34rem;
      color: #fff;
      letter-spacing: 2px;
      cursor: pointer;
    }
    .hui-pagePrompt_icon-success {
      height: 1rem;
      width: 1rem;
    }
    .tipText {
      text-align: left;
      color: #cccccc;
    }
    .blackover {
      height: 1.8rem;
      line-height: 1.8rem;
      text-align: center;
      background-color: gray;
      width: 5rem;
      display: block;
      position: relative;
      top: -1.4rem;
      color: white;
      font-size: 20px;
      margin: 0 auto;
    }
    .mymes {
      text-align: left;
      margin-bottom: 20px;
    }
    .userimg {
      display: in-block;
      border-radius: 50%;
      border: 1px solid gray;
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 40px;
    }
    .barble {
      color: gray;
      display: block;
      margin-left: -5rem;
    }
    .mymessage {
      position: fixed;
      top: 7rem;
    }
    .user-comment {
      margin-left: 10px;
      color: gray;
      text-align: left !important;
      margin-top: -0.1rem;
      overflow: hidden;
      word-break: break-all;
    }
    .del {
      color: blue;
      font-size: 14px;
      text-align: left;
      margin-left: 10px;
    }
    .confirm-tips {
      width: 3.96rem;
      margin: 0 auto;
      border: 1px solid gray;
      margin-top: -1.4rem;
      left: 2rem;
      color: gray;
      height: 2rem;
      background: #ffffff;
    }
    .delmessage {
      margin: 0 auto;
      height: 1.2rem;
      line-height: 1.2rem;
      border-bottom: 1px solid gray;
    }
    .btn {
      text-align: center;
      padding: 0.28rem 0.71rem;
      height: 0.8rem;
      line-height: 0.8rem;
      border-right: 1px solid gray;
    }
    .commentcontent {
      width: 6rem;
    }
  }
</style>
