<template>
  <div class="pastPoint">
    <!--查询取消-->
    <!--<div class="pastPoint-search">-->
      <!--<form action="http://www.baidu.com/baidu" target="_blank">-->
      <!--<input class="pastPoint-input" type="search" placeholder="请您输入关键字" id="kw"  baiduSug="1" size="30" name="word">-->
      <!--</form>-->
    <!--</div>-->
    <div class="example-loadmore_wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px','overflow-y':'scroll' }">
    <div class="pastPoint-content">
      <Loadmore   :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
        <div @click="routeToDetail(item)" v-for="(item,index)  in itemList" :key="index" class="itemBox">
          <img class="pastPoint-itemPic" :src="item.topicImg" alt=""/>
          <div class="pastPoint-content_title">
            <div class="titleLeft">{{ item.topicTitle }}</div>
            <div >
              <span class="bluemessage">留言{{ (item.countComment) }}</span>
              <!--<span class="blackmessage" disabled>留言+</span>-->
            </div>
          </div>
          <p class="postPoint-text">
            {{ item.topicContent }}
          </p>
        </div>
      </Loadmore>


    </div>
    </div>
  </div>
</template>

<!--<script charset="gbk" src="http://www.baidu.com/js/opensug.js"></script>-->


<script>

  export default {
    name:'PastPoint',
    data(){
      return{
        itemList:[],
        countComment:"",
        topicTitle:"",
        topicImg:"",
        topicContent:"",
        commentUser:"",
        commentContent:"",
        menulist:[],
        topicId:"",
        showNum:10,
        pageNum:1,
        allLoaded: false,
        bottomStatus: '加载中...',
        wrapperHeight: 0,
        topStatus: '',
        allPage:'',

      }
  },
    methods:{
      routeToDetail(item){
        this.$router.push({name:'PastHotpointDetail',params:{key:item}})
      },
      getTopicData(){
        let _self=this;
        let pagejump={
          tRecInPage: this.showNum,
          tPageJump: this.pageNum,
        }
        let setdata = {
          txnCommCom: {
            tRecInPage: this.showNum,
            tPageJump: this.pageNum,
          },
          txnBodyCom: {
            matter_id: window.sessionStorage.getItem("matterid"),
            "topic_type":"01",
            "filtro":"00"
          }
        };
        this.$ajaxRequest("post", "/gsp/fsx06014", setdata,pagejump)
          .then(res=>{
            this.allPage = res.txnCommCom.totalPage
            this.pageNum += 1
            function timestampToTime(timestamp) {
              var date = new Date(timestamp );//时间戳为10位需*1000，时间戳为13位的话不需乘1000
              var Y = date.getFullYear() + '-';
              var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
              var D = date.getDate() + ' ';

              return Y+M+D;
            }
            for(var i=0;i<res.hotSpotList.length;i++){


              let tempOb1 = {
                topicTitle: res.hotSpotList[i].topic_title,
                topicImg: res.hotSpotList[i].url,
                countComment:res.hotSpotList[i].countComment,
                img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542868007623&di=32a6bb3a3b6399dffb7d87571cd4fd11&imgtype=0&src=http%3A%2F%2Fimg8.iqilu.com%2Fvmsimgs%2F2018%2F10%2F15%2F807170256_BC760681490042ce87A29F5492C4E78D.jpg" ,
                topicContent:res.hotSpotList[i].topic_content,
                menulist:res.hotSpotList[i].commentList,
                topicId:res.hotSpotList[i].id,

              };
              _self.itemList.push(tempOb1);
            }
          })
          .catch(error => {
            this.$toast("查询失败！");
          });
      },
      handleBottomChange(status) {
        this.bottomStatus = status;
      },
      loadBottom() {
        const self = this;
        // 模拟加载中


        setTimeout(() => {
          if (self.pageNum <= this.allPage) {
            self.getTopicData()
          } else {
            self.allLoaded = true; // 若数据已全部获取完毕
          }


          self.$nextTick(function () {
            self.$refs.loadmore.onBottomLoaded();
          });
        }, 1500);


      },
    },
    mounted(){
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
      this.getTopicData();
    }

  }
</script>
<style lang="less">
  .pastPoint{

    .example-loadmore_wrapper {
      overflow: scroll
    }

    background: #fff;

    .pastPoint-search{
      padding-top: 0.2rem;
      background: #FFF;
      .pastPoint-input{
        display: block;
        width: 90%;
        height: 0.64rem;
        box-sizing: border-box;
        border: none;
        border-radius: 1rem;
        margin: 0 auto;
        padding: 0 .3rem;
        color: #999;
        font-size: 0.32rem;
        background:url("../../../../static/image/searchIcon.png") #f5f5f5 0.4rem center no-repeat  !important;
        background-size: .36rem !important;
        text-indent: .6rem;
      }
    }
    .pastPoint-content{
      padding: .2rem .36rem;
      background: #fff !important;
    }
    .itemBox{
      display: block;
      width: 100%;
      margin-bottom: 0.3rem;
      border-bottom: 0.01rem solid lightgrey;

    }
    .pastPoint-itemPic{
      height: 1.7rem;
      width: 100%;
    }
    .pastPoint-content_title{
      overflow: hidden;
      padding: 0.2rem 0;
      .titleLeft{
        width:5rem;
        float: left;
        font-size: .3rem;
        padding: .06rem 0;
        white-space: nowrap;
        text-overflow:ellipsis;
        overflow:hidden;
        text-align: left;
      }
      .blackmessage{
          float: right;
        width: 1.2rem;
        padding: .04rem 0;
        font-size: .26rem;
        border: 0.03rem solid gray;
        border-radius: 0.1rem;
        color: gray;
        box-sizing: border-box;
        margin-right:0.5rem;
      }
      .bluemessage{
        float: right;
        width: 1.2rem;
        padding: .04rem 0;
        font-size: .26rem;
        border: 0.03rem solid #257BFF;
        border-radius: 0.1rem;
        color: #257BFF;
        box-sizing: border-box;
      }
    }
    .postPoint-text{
      text-align: left;
      color: #999;
      font-size: 0.3rem;
      line-height: 0.5rem;
      overflow: hidden;
      padding-bottom: 0.1rem;
      overflow:hidden; text-overflow:ellipsis; display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;
      max-height:1.5rem;
      margin-bottom: 0.1rem;
    }













  }

</style>
