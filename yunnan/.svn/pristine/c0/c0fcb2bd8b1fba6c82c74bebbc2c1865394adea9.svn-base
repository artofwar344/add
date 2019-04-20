// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './vuex/store'
import { sync } from 'vuex-router-sync'
import Vuex from "vuex";
import App from './App'
import router from './router'
import './config/rem.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import HuiselectNew from './components/select/HuiselectNew'
Vue.component('HuiselectNew',HuiselectNew);
import Axios from 'axios'
import $ from 'jquery'
Vue.prototype.$axios = Axios;
import ajaxRequest from './utils/ajaxRequest'
Vue.prototype.$ajaxRequest = ajaxRequest 
import * as Callall from './utils/CallModule'
Vue.prototype.$CallModule = Callall.CallModule 
Vue.prototype.$CallSUBSTR = Callall.callsubstr
Vue.prototype.$NoNull = Callall.NoNull
Vue.prototype.$VerifyPhone = Callall.VerifyPhone
Vue.prototype.$VerifyEmail = Callall.VerifyEmail
Vue.prototype.$VerifyName = Callall.VerifyName
Vue.prototype.$VerifyCardId = Callall.VerifyCardId
import HUI from 'hui'
import 'hui/dist/css/hui.min.css'
import wuliu from './utils/wuliu'
import echarts from 'echarts' //引入echarts
Vue.prototype.$echarts = echarts //引入组件
Vue.prototype.$wlhttp = wuliu
Axios.defaults.basURL= process.env.API
Axios.create({headers:{
  "X-Requested-With":"XMLHttpRequest",
  "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"
}})

Vue.config.productionTip = false
//统计局
import '../static/css/statisticalOne.css'
import '../static/css/statisticalTwo.css'
//食药局监管局
import '../static/css/medicine/medicineOne.css'
Vue.use(MintUI)
Vue.use(HUI)
Vue.use(Vuex);
Vue.config.productionTip = false

sync(store, router) // 将vue-router的当前$ route同步为vuex商店状态的一部分
/* eslint-disable no-new */
export default new Vue({
  el: '#app',  
  router,
  store,  //vuex
  components: { App },
  template: '<App/>'
})
