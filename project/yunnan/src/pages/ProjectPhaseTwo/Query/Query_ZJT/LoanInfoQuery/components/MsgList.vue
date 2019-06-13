<template>
  <div>
    <div class="content">
        <ul class="list">
            <li v-for="item in list">
              <p>{{item.title}}<span>{{item.msg}}</span></p>
            </li>
           <li v-if="list.length <= 0" class="noMsg">暂无数据</li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      state:false
    }
  },
  props: {
    list: {},
  },
  created(){
    const _this = this;
  },
  computed: {},
  methods: {},
}
</script>
<style scoped>
html,body{height:100%;}
  .infoCheck {
    background:#f1f3f6;
    height:100%;
  }
  .list{background: #fff;padding-top: .2rem;margin-top: .16rem;}
  .list>li{padding: 0.1rem 0.36rem 0.1rem;height:0.7rem;line-height: 0.7rem;}
  .list p{text-align: left;zoom:1;font-size: 0.28rem; color: #333;}
  .list p:after{content: '';display: block;clear: both;}
  .list span{float: right;color: #999}
  .list img{height:2.12rem;float: right}
  .noMsg{
    font-size:.28rem;
  }
</style>
