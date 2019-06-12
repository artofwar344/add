import Vue from 'vue'
import Router from 'vue-router'

import { componentGetV } from '../utils/auth'
import viewPath from './viewPath'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router) 

export const constantRouterMap = [
  {
    path: '/login',
    name: 'Login',
    component: resolve => require(['@/views/login/index'], resolve),
    hidden: true
  },
  {
    path: '/404',
    component:  resolve => require(['@/views/404.vue'], resolve),
    hidden: true
  },  
  {
    path: '*',
    redirect: '/404',
    name: 'undefined',
    hidden: true
  }
]
// console.log(viewPath);

// constantRouterMap = constantRouterMap.concat(viewPath);
export default new Router({
  // mode: 'history', //后端支持可开 component: () => import('@/views/subject/index'),
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap.concat(viewPath)
})
