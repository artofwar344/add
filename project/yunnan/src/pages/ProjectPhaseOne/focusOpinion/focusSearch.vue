<template>
  <div class="focus-page">
    <towtop :name="titlename" />
    <div class="container">
      <div class="item" v-for="(item, index) in res_data" :key="index" @click="toDetail(item.id)">
        <p class="content"><span class="label">咨询：</span>{{item.name}}</p>
          <p class="icon"><img :src="require('../../../assets/images/focusOpinion/hot@3x.png')" alt="">{{item.count}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import towtop from '../../../components/HederTwo'

export default {
  data() {
    return {
      titlename:'焦点搜索结果',
      dataList: [],
      input : "",
      res_data:[],
      type:0
    }
  },
  components:{
    towtop
  },
  computed: {

  },
  mounted() {
    this.input = sessionStorage.getItem("focusOpinion_input");
    this.type = sessionStorage.getItem("focusOpinion_type");
    console.log("搜索类型:" + this.type);
    console.log("搜索内容:" + this.input);
    this.$ajaxRequest("post","/dss/getEsResult",{key : this.input,
        txnBodyCom:{}},null,
      (res) => {
        console.log(res);
        res = JSON.stringify(res);
        res = res.replace("C-Response-Body", "response");
        res = JSON.parse(res);
        res = res.data.response;
        this.res_data = res;
        console.log(this.res_data);
      }
    ).then(
      (res)=> {
        console.log(res);
      }
    );
  },
  methods: {
    toDetail(id) {
      window.sessionStorage.setItem("focusOpinion_id",id);
      this.$router.push({name: 'focusOpinionFocusDetail', params:{id:id,type:this.type}});
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 0.16rem 0;
  .item {
    height: 2.04rem;
    font-size: 0.34rem;
    background: #fff;
    padding: 0.3rem;
    margin-bottom: 0.16rem;
    .content {
      text-align: left;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      margin-bottom: 0.5rem;
    }

    .icon {
      display: flex;
      justify-content: flex-end;
      align-content: center;
      color: rgb(194, 194, 194);
      >img {
        width: 0.4rem;
        height: 0.4rem;
        display: inline-block;
        margin-right: 0.05rem
      }
    }
  }

}

</style>

