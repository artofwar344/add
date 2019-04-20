export default [
  {
    path: '/socialHotpoint',
    component: resolve => require(['@/pages/ProjectPhaseOne/SocialHotspot'], resolve),
      meta: {
        keepAlive: false // 需要被缓存
      },
    namr:'SocialHotpoint',
    // children: [
    //   {
    //     path: '/',
    //     component: resolve => require(['@/pages/ProjectPhaseOne/SocialHotspot/currentPoint'], resolve),
      // meta: {
      //   keepAlive: true // 需要被缓存
      // },
    //     name:'CurrentPoint',
    //   },
    //   {
    //     path: '/socialHotpoint/pastPoint',
    //     name: 'PastPoint',
    //     component: resolve => require(['@/pages/ProjectPhaseOne/SocialHotspot/pastPoint'], resolve),
      // meta: {
      //   keepAlive: true // 需要被缓存
      // },
    //     meta: {
    //       title: '个人中心',
    //     },
    //
    //   }
    // ]
  },
  {
    path: '/socialHotpoint/leaveMsg',
    component: resolve => require(['@/pages/ProjectPhaseOne/SocialHotspot/leaveMsg'], resolve),
      meta: {
        keepAlive: true // 需要被缓存
      },
    name:'LeaveMsg',
  },
  {
    path: '/socialHotpoint/myMsg',
    component: resolve => require(['@/pages/ProjectPhaseOne/SocialHotspot/myMsg'], resolve),
      meta: {
        keepAlive: false // 需要被缓存
      },
    name:'MyMsg',
  },
  {
    path: '/socialHotpoint/pastHotpointDetail',
    component: resolve => require(['@/pages/ProjectPhaseOne/SocialHotspot/pastHotpointDetail'], resolve),
      meta: {
        keepAlive: false // 需要被缓存
      },
    name:'PastHotpointDetail',
  },
  //分享测试
  {
    path: '/share',
    component: resolve => require(['@/pages/ProjectPhaseOne/SocialHotspot/share'], resolve),
      meta: {
        keepAlive: false // 需要被缓存
      },
    name:'shareModel',
  }
]
