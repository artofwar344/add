import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n
// import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

import '@/styles/index.scss' // global css

import App from './App'

import router from './router'
import store from './store'
//  import { axios } from '../static/js/axiosTool'

import '@/icons' // icon
import '@/permission' // permission control 
 
import uploadOne from '@/components/upload/uploadOne.vue' //src\components\\index.vue
import uploadTow from '@/components/upload/uploadTow.vue' //src\components\\index.vue
import uploadTree from '@/components/upload/uploadTree.vue' //src\components\\index.vue
//src\components\uploadFile\uploadFileone.vue

import uploadFileone from '@/components/uploadFile/uploadFileone.vue' //src\components\\index.vue
import uploadFiletow from '@/components/uploadFile/uploadFiletow.vue' //src\components\\index.vue
import uploadFilethree from '@/components/uploadFile/uploadFilethree.vue' //src\components\\index.vue
import manageContent from '@/components/upload/manageContent.vue' //src\components\\index.vue

import  { userInfoToggle } from '@/utils/userInfo' 

 Vue.component('UploadOne', uploadOne );  
 Vue.component('UploadTow',uploadTow );  
 Vue.component('UploadTree',uploadTree );  

 Vue.component('UploadFileone', uploadFileone );  
 Vue.component('UploadFiletow',uploadFiletow );  
 Vue.component('UploadFilethree',uploadFilethree );  
 Vue.component('ManageContent', manageContent );  
 

import Pagination from '@/components/pagination'
Vue.component(Pagination.name, Pagination);  

import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.use(ElementUI)
// Vue.locale('zh-cn', zhLocale) 
Vue.config.productionTip = false

Vue.prototype.UserInfoToggle = userInfoToggle

 new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
