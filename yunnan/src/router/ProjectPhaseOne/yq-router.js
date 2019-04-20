// 民生热点大家谈

// import focusOpinionFocusDetail from '@/pages/ProjectPhaseOne/focusOpinion/focusDetail.vue'
// import focusOpinionfocusSearch from '@/pages/ProjectPhaseOne/focusOpinion/focusSearch.vue'
// import focusOpinionLivehoodAnalyze from '@/pages/ProjectPhaseOne/focusOpinion/livehoodAnalyze.vue'
// import focusOpinionLetterDetail from '@/pages/ProjectPhaseOne/focusOpinion/letterDetail.vue'

const Opinion=[
    {
      path: "/focusOpinionLetterDetail",
      name:"focusOpinionLetterDetail",
      component: resolve => require(['@/pages/ProjectPhaseOne/focusOpinion/letterDetail.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/focusOpinionFocusDetail",
      name:"focusOpinionFocusDetail",
      component: resolve => require(['@/pages/ProjectPhaseOne/focusOpinion/focusDetail.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/focusOpinionfocusSearch",
      name:"focusOpinionfocusSearch",
      component: resolve => require(['@/pages/ProjectPhaseOne/focusOpinion/focusSearch.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/focusOpinionLivehoodAnalyze",
      name:"focusOpinionLivehoodAnalyze",
      component: resolve => require(['@/pages/ProjectPhaseOne/focusOpinion/livehoodAnalyze.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      },
      props:true
    }
]
export default Opinion
