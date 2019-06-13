//import convenientDetail from "@/pages/ProjectPhaseOne/goodlife/convenientDetail.vue"

const convenient = [
	{
      path: "/convenientDetail",
      name:"convenientDetail",
      component:resolve => require(['@/pages/ProjectPhaseOne/goodlife/convenientDetail.vue'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    }
  ]


export default convenient
