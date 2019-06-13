<template>
  <div class="basic-info-page">
    <towtop :name="titleName"/>
    <div class="container">
      <div class="search">
        医院关键字：<input v-model="selectKeyword"  @change="changeKeyword"/>
        <img src="@/assets/images/focusOpinion/search.png" @click="select"/>
      </div>
      <div class="search_list">

          <ul class="ul_list">
            <li v-for="ho in hospList">
              <h3 @click="selectHosp(ho.hospcode, ho.hospname)">{{ho.hospname}}</h3>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import towtop from "@/components/HederTwo";

  export default {
    name:"interprovincicalMedicalOne",
    data() {
      return {
        titleName:"跨省异地就医备案",
        zoneCode1: "",
        zoneCode2: "",
        selectKeyword:"",
        currentpage: 1,
        totalData: 0,
        totalPage: 0,
        loadmoreBottomPullText: "上拉加载",
        allLoaded: false,
        hospList:[],
        resList:[]
      }
    },
    components: {
      towtop
    },
    computed: {
    },
    methods: {
      selectHosp(hospcode, hospname) {
        window.sessionStorage.setItem("hospCode", hospcode);
        window.sessionStorage.setItem("hospName", hospname);
        this.$router.push({name:"interprovincialMedicalAttentionTwo"})
      },
      loadBottom() { },
      handleBottomChange (status) {
        console.log(status)
      },
      select() {
        console.log(this.selectKeyword);
        this.hospList = this.resList.filter(
          (h) =>  h.hospname.indexOf(this.selectKeyword) != -1
        )
      },
      changeKeyword() {
        this.select()
      },
      search() {
        let request = {
          "txnCommCom":{
            "txnIttChnlId":"1",
            "txnIttChnlCgyCode":"1",
            "tRecInPage":"530000",
            "tPageJump":"1"
          },
          "txnBodyCom":{
            "matter_id":"1",
            "chann_id":"1",
            "provcode":this.zoneCode1,
            "citycode":this.zoneCode2,
            "hospgrade":"",
            "keyword":this.keyword,
            allLoaded: false
          }
        }
        console.log(JSON.stringify(request))
        let page = { tRecInPage: "10000", tPageJump: "1" };
        this.$ajaxRequest("post", "/gsp/mng19033", request, page).then(
          (res) => {
            this.hospList = res.rowdatas;
            this.resList = res.rowdatas;
          }
        )
      }
    },
    mounted() {
      this.zoneCode1 = window.sessionStorage.getItem("zoneCode1");
      this.zoneCode2 = window.sessionStorage.getItem("zoneCode2");
      console.log(this.zoneCode1);
      console.log(this.zoneCode2);
      this.search();
    }
  }
</script>

<style lang="less" scoped>
  .ul_list {
    margin-top: .4rem;
    li {
      width: 100%;
      height: .8rem;
      border-bottom: 1px solid #ccc;
      padding: 0.32rem 0.36rem;
      text-align: left;
    }
  }
  .basic-info-page {
    display: flex;
    flex-direction: column;

    .container {
      background-color: #fff;
      flex: 1;
      overflow: auto;
      .search {
        padding: .2rem;
        input{
          border-bottom: 1px solid #888888;
          height: 16px;
        }
        img {

        }
      }
    }
  }

</style>

