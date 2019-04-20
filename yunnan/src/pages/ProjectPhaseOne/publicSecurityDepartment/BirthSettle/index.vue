<template>
  <div>
    <towtop :name="titlename"/>
    <ul class="settleTab">
      <li @click="changeTab('legitimate')" :class="{activeTab: isActive == 'legitimate'}"><router-link to="/birthSettle/legitimate">婚生</router-link></li>
      <li @click="changeTab('illegitimateFather')" :class="{activeTab: isActive == 'illegitimateFather'}"><router-link to="/birthSettle/illegitimateFather">非婚生随父落户</router-link></li>
      <li @click="changeTab('illegitimateMother')" :class="{activeTab: isActive == 'illegitimateMother'}"><router-link to="/birthSettle/illegitimateMother">非婚生随母落户</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
    
</template>

<script>
import towtop from '../../../../components/HederTwo'
import * as api from '../../../../api/api.js'
import { mapActions, mapMutations } from 'vuex'

    export default {
      name: "index",
      data: function(){
        return {
          titlename:'出生登记',
          isActive:'',
        }
      },
      components:{
        towtop
      },
      created () {
        this.initParam()
      },
      methods:{
        ...mapMutations([
          'setWorkId'
        ]),
        ...mapActions('publicSecurityStore', [
          'fetchCommonParams',
        ]),
        ...mapMutations('publicSecurityStore', [
          'setCurrentPage'
        ]),
        changeTab:function(tabName){
          this.isActive = tabName;
          console.log(this.$route.name);
        },
        initParam () {          
          this.fetchCommonParams('1011')  //性别
          this.fetchCommonParams('1012')  //民族
          this.fetchCommonParams('1014')  //血型
          this.fetchCommonParams('1019')  //家庭关系          
        }
      },
      watch: {
        '$route' (to, from) {
       console.log(this.$route.name);
        this.isActive = this.$route.name;
        }
      },
      mounted(){
         console.log(this.$route.name);
         this.isActive = this.$route.name;
         this.setCurrentPage(this.$route.name)

        this.setWorkId(this.$route.query.WorkId )
      } 
    }
</script>

<style lang='less' scoped>
@import "../../../../assets/css/Settle.less";
</style>
