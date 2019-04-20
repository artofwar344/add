// import resultPage from '@/pages/ProjectPhaseOne/publicSecurityDepartment/BirthSettle/resultPage'
// //出生落户
// import birthSettle from '@/pages/ProjectPhaseOne/publicSecurityDepartment/BirthSettle'
// import legitimate from '@/pages/ProjectPhaseOne/publicSecurityDepartment/BirthSettle/legitimate'
// import illegitimateFather from '@/pages/ProjectPhaseOne/publicSecurityDepartment/BirthSettle/illegitimateFather'
// import illegitimateMother from '@/pages/ProjectPhaseOne/publicSecurityDepartment/BirthSettle/illegitimateMother'
// //购房落户
// import purchaseSettle from '@/pages/ProjectPhaseOne/publicSecurityDepartment/PurchaseSettle'
// //接迁落户
// import takeoverSettle from '@/pages/ProjectPhaseOne/publicSecurityDepartment/TakeoverSettle'
// //迁出省外
// import moveAway from '@/pages/ProjectPhaseOne/publicSecurityDepartment/MoveAway'
// //毕业落户
// import graduateSettle from '@/pages/ProjectPhaseOne/publicSecurityDepartment/GraduateSettle'
// import parents from '@/pages/ProjectPhaseOne/publicSecurityDepartment/GraduateSettle/parents'
// import company from '@/pages/ProjectPhaseOne/publicSecurityDepartment/GraduateSettle/company'
// import residence from '@/pages/ProjectPhaseOne/publicSecurityDepartment/GraduateSettle/residence'
// //就业落户
// import jobSettle from '@/pages/ProjectPhaseOne/publicSecurityDepartment/jobSettle'
// //租房落户
// import rentSettle from '@/pages/ProjectPhaseOne/publicSecurityDepartment/rentSettle'

//提交成功页
// import submission from '@/pages/ProjectPhaseOne/publicSecurityDepartment/Submission'


const  purchaseOrJobOrRentSettle = () => import('@/pages/ProjectPhaseOne/publicSecurityDepartment/PurchaseSettle')

const takeoverOrMoveSettle = () => import ('@/pages/ProjectPhaseOne/publicSecurityDepartment/TakeoverSettle')

const companyOrParentsOrResidence = () => import('@/pages/ProjectPhaseOne/publicSecurityDepartment/GraduateSettle/company')

const illegitimateFather = () => import('@/pages/ProjectPhaseOne/publicSecurityDepartment/BirthSettle/illegitimateFather')

const illegitimateMother = () => import('@/pages/ProjectPhaseOne/publicSecurityDepartment/BirthSettle/illegitimateMother')

const legitimate = () => import('@/pages/ProjectPhaseOne/publicSecurityDepartment/BirthSettle/legitimate')

const submission = () => import('@/pages/ProjectPhaseOne/publicSecurityDepartment/Submission')

const resultPage = () => import('@/pages/ProjectPhaseOne/publicSecurityDepartment/resultPage')

const birthSettle = () => import('@/pages/ProjectPhaseOne/publicSecurityDepartment/BirthSettle')

const graduateSettle = () => import('@/pages/ProjectPhaseOne/publicSecurityDepartment/GraduateSettle')

export default [

  { path: '/birthSettle',
    component: birthSettle,
    meta: {
      keepAlive: true // 需要被缓存
    },
    children: [
      {
        path: 'legitimate',
        name: 'legitimate',
        component: legitimate,
        meta: {
          keepAlive: true // 需要被缓存
        }
      },
      {
        path: 'illegitimateFather',
        name: 'illegitimateFather',
        component: illegitimateFather,
        meta: {
          keepAlive: true // 需要被缓存
        }
      },
      {
        path: 'illegitimateMother',
        name: 'illegitimateMother',
        component: illegitimateMother,
        meta: {
          keepAlive: true // 需要被缓存
        }
      }
    ],
  },
  {
    path: "/takeoverSettle",
    name: 'takeoverSettle',
    component: takeoverOrMoveSettle,
    meta: {
      keepAlive: true // 需要被缓存
    }
  },
  {
    path: "/moveAway",
    name: 'moveAway',
    component: takeoverOrMoveSettle,
    meta: {
      keepAlive: true // 需要被缓存
    }
  },
  { path: '/graduateSettle',
    component: graduateSettle,
    meta: {
      keepAlive: true // 需要被缓存
    },
    children: [
      {
        path: 'parents',
        name: 'parents',
        component: companyOrParentsOrResidence,
        meta: {
          keepAlive: true // 需要被缓存
        }
      },
      {
        path: 'company',
        name: 'company',
        component: companyOrParentsOrResidence,
        meta: {
          keepAlive: true // 需要被缓存
        }
      },
      {
        path: 'residence',
        name: 'residence',
        component: companyOrParentsOrResidence,
        meta: {
          keepAlive: true // 需要被缓存
        }
      }
    ],
  },
  {
    path: "/purchaseSettle",
    name: 'purchaseSettle',
    component: purchaseOrJobOrRentSettle,
    meta: {
      keepAlive: true // 需要被缓存
    }
  },
  {
    path: "/jobSettle",
    name: 'jobSettle',
    component: purchaseOrJobOrRentSettle,
    meta: {
      keepAlive: true // 需要被缓存
    }
  },
  {
    path: "/rentSettle",
    name: 'rentSettle',
    component: purchaseOrJobOrRentSettle,
    meta: {
      keepAlive: true // 需要被缓存
    }
  },
  {
    path: "/submission",
    name: 'submission',
    component: submission,
    meta: {
      keepAlive: true // 需要被缓存
    }
  },
  {
    path: "/resultPage",
    name: 'resultPage',
    component: resultPage,
    meta: {
      keepAlive: false // 需要被缓存
    }
  },

]