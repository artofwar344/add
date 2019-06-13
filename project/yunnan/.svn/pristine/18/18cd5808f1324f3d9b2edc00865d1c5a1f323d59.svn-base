<template>
  <div class="bspj">
    <towtop :name="titlename"/>
    <div class="pjBox">
      <h5>满意度</h5>
      <mt-radio v-model="myd" align="left" :options="options"></mt-radio>
      <h5>评价内容</h5>
      <textarea v-model="areaValue" name="" id="" class="pjArea"></textarea>
      <!-- <mt-button class="sendBtn" type="primary" @click="send">提交</mt-button> -->
      <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="send" />
      </div>
    </div>
  </div>
</template>

<script>
  import towtop from "../../../components/HederTwo";
  import mybutton from "../../../components/MyButton";

  export default {
    data() {
      return {
        btnData:[
          {
            text:'提交',
            disabled: false,
            isSure: true,
          }
        ],
        titlename: "办事评价",
        workId: '',
        myd: '1',
        areaValue: '',
        userid: '',
        matterid: this.$route.query.matterid||sessionStorage.getItem('matterid'),
        options: [
          {value:'2',label:'很满意'},
          {value:'1',label:'较满意'},
          {value:'0',label:'不满意'},
        ]
      };
    },
    components: {
      towtop,
      mybutton
    },
    methods: {
      send() {
      	this.btnData[0].disabled = true
        console.log(this.myd,this.areaValue);
        let data = {
          txnCommCom: {
            tStsTraceId: "110567890"
          },
          txnBodyCom: {
            work_id: this.workId,
            matter_id: this.matterid,
            member_id: this.userid,
            eva_criteria: this.myd,
            eva_content: this.areaValue
          }
        };
        console.log(data);
        this.$ajaxRequest("post", "/gsp/mng60007", data)
          .then(res => {
        	
            this.$toast('提交完成,即将返回')
            setTimeout( ()=>{
              // this.$router.go(-1)
              this.btnData[0].disabled = false
              this.$router.push({
                path: '/wuliu_one',
                query: {
                  WorkId: this.workId,
                  userid: this.userid,
                  matterid: this.matterid,
                }
              })
            },1500)
          })
          .catch(error => {
          	this.btnData[0].disabled = false
            console.log(error);
          });
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
    	console.log(sessionStorage,this.$route.query)
      this.userid = this.$route.query.userid
      this.workId = this.$route.query.WorkId
      this.matterid = this.$route.query.matter_id||sessionStorage.getItem('matterid')
      // this.isPj = this.$route.query.isPj
    }
  };
</script>
<style scoped>
  .pjBox{
    text-align: left;
  }
  .pjBox h5{
    font-size: 16px;
    line-height: 3;
    color: #333;
    text-align: left;
    font-weight: 900;
    margin-left: 5%;
  }
  .pjArea{
    width: 90%;
    height: 150px;
    display: block;
    resize: none;
    margin: 0 auto;
    border: 1px solid #aaa;
    box-shadow: 2px 2px 6px 2px #ccc;
  }

  .sendBtn{
    width: 90%;
    display: block;
    margin: 16px auto;
  }
</style>
<style>
  .bspj .mint-radiolist .mint-cell{
    border-bottom: 1px solid #ccc;
  }
</style>
