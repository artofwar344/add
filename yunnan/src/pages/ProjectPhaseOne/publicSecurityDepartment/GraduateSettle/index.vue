<template>
  <div>
    <towtop :name="titlename"/>
    <ul class="settleTab big">
      <li @click="changeTab('parents')" :class="{activeTab: isActive == 'parents'}">
        <router-link to="/graduateSettle/parents">毕业落户（父母户口地）</router-link></li>
      <li @click="changeTab('company')" :class="{activeTab: isActive == 'company'}">
        <router-link to="/graduateSettle/company">毕业落户（单位集体户）</router-link></li>
      <li @click="changeTab('residence')" :class="{activeTab: isActive == 'residence'}">
        <router-link to="/graduateSettle/residence">毕业落户（实际居住地）</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
    
</template>

<script>
  import towtop from '../../../../components/HederTwo'
    export default {
      name: "index",
      data: function(){
        return {
          titlename:'毕业落户',
          isActive:'',
        }
      },
      components:{
        towtop
      },
      methods:{
        changeTab:function(tabName){
          this.isActive = tabName;
          console.log(this.$route.name);
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
      } 
    }
</script>

<style lang='less' scoped>
@import "../../../../assets/css/Settle.less";
</style>
