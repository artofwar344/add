<template>
  <div class="myMsg">
    <towtop name="我的留言" custom-text=""/>

    <div class="example-loadmore_wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <Loadmore    :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
        <div class="contentBox">
          <div  :id="item.id" v-for="(item,index) in msgList" class="item commentItem">
            <!--<p class="title">#{{ item.title }}#</p>-->
            <p class="title">#{{ item.topic_title }}#</p>
            <p class="text">
              {{ item.comment_content }}<br/>

            </p>
            <div class="bottom">
              <div class="bottom-left">
                {{ timestampToTime(item.comment_time) }}
              </div>
              <div @click="deleteMsg(item)" class="bottom-right">
                删除
              </div>
            </div>
          </div>
        </div>
      </Loadmore>
    </div>
<!--删除弹窗-->
    <Popupprompt
      v-model="deleteProp"
      title="删除留言"
      text="确认删除该留言？"
      :confirm-btn = '{id: true,text: "确定"}'
      :cancel-btn = '{id: false,text: "取消"}'
      @click = "clickbtn"
    >
    </Popupprompt>


  </div>
</template>

<script>
  import Towtop from '../../../components/HederTwo'
  export default {
    name:'myMsg',
    components:{
      Towtop
    },
    data(){
      return{
        msgList:[],
        show:true,
        list: [],
        allLoaded: false,
        bottomStatus: '',
        wrapperHeight: 0,
        topStatus: '',
        deleteProp:false,
        itemData:null,
        showNum:10,
        pageNum:1,
        allPage:1,

      }
  },

    methods:{
      deleteMsg(item){
        this.itemData = item;
        this.deleteProp = true;
      },
      handleBottomChange(status) {
        this.bottomStatus = status;
      },
      loadBottom() {
        const self = this;
        // 模拟加载中
        setTimeout(() => {
          if (self.pageNum <= this.allPage) {
            self.getMsgList()
          } else {
            self.allLoaded = true; // 若数据已全部获取完毕
          }
          self.$nextTick(function () {
            self.$refs.loadmore.onBottomLoaded();
          });
        }, 1500);
      },


      clickbtn(flag){
        if(flag){
          //确认删除
          this.deleteProp = false;
          //发送删除请求
          let pagejump={
            tRecInPage: this.showNum,
            tPageJump: this.pageNum,
          }
          let setdata = {
            txnCommCom: {
            },
            txnBodyCom: {
              matter_id: window.sessionStorage.getItem("matterid"),
              comment_id:this.itemData.id
            }
          };
          this.$ajaxRequest("post", "/gsp/fsx06019",setdata,pagejump)
            .then(res => {
              let deletEle = document.getElementById(this.itemData.id)

              deletEle.style.padding = '0px';
              deletEle.style.margin = '0px';
              deletEle.style.height = '0px';
            })
            .catch(error => {
              this.$toast("查询失败！");
            });
        }else{
          //取消删除
          this.deleteProp = false;
        }

      },
      //获取留言列表
      getMsgList(){
        let pagejump = {
          tRecInPage: this.showNum,
          tPageJump: this.pageNum,
        }

        let setdata = {
            txnBodyCom: {
              matter_id: window.sessionStorage.getItem("matterid"),
            "user_id":window.sessionStorage.getItem("userid")// !='null' ? window.sessionStorage.getItem("userid") : '0b5dba7536514882ac7140c5482b3799',
            // "user_id":window.sessionStorage.getItem("userid"),
          },
          txnCommCom: {
            tRecInPage: this.showNum,
            tPageJump: this.pageNum,
          },
        };
        this.$ajaxRequest("post", "/gsp/fsx06018", setdata,pagejump)
          .then(res => {
           this.msgList.push(...res.commentList);
           this.allPage = res.txnCommCom.totalPage
            this.pageNum += 1

          })
          .catch(error => {
            this.$toast("查询失败！");
          });
      },
      timestampToTime(timestamp) {
        var date = new Date(timestamp );//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = date.getDate() + ' ';
        var H = date.getHours() + ':';
        var m = date.getMinutes() +':';
        var S = date.getSeconds() + ' ';

        return Y+M+D+H+m+S;
      }

    },
    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    }

  }
</script>
<style scoped lang="less">
  .myMsg{

    background: #f5f5f5;
    .contentBox{
      text-align: left;
    }

    .item{
      padding: 0.2rem 0.36rem;
      .title{
        font-size: 0.3rem;

      }
      margin-bottom: 0.2rem;
      background: #fff;
    }
    .text{
      margin:0.2rem 0;
    }
    .bottom{
      font-size: 0.24rem;
      overflow: hidden;
      .bottom-left{
        float: left;
        color: #ccc;
      }
      .bottom-right{
        float: right;
      }

    }
    .commentItem{
      transition: all .6s;
      overflow: hidden;
    }
    .example-loadmore_wrapper {
      overflow: scroll
    }

  }

</style>
