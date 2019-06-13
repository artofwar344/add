<template>
  <div id="app">
   <router-link to="/help" v-if="this.$route.path=='/'">help</router-link> 
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style  >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 12px;
}
.van-tabs__line { 
    background-color: rgb(194, 232, 250);
}
.van-ellipsis { 
    font-size: 22px; 
    text-overflow: ellipsis;
}
/* .van-tab__pane {
  margin-left: 1%;
} */
</style>
