const index = () => import('@/pages/ProjectPhaseOne/adminstration_of_industry_and_commerce/individual_business_registration/index')

const haveApproved = () => import('@/pages/ProjectPhaseOne/adminstration_of_industry_and_commerce/individual_business_registration/have_approved')

const basicInfo = () => import('@/pages/ProjectPhaseOne/adminstration_of_industry_and_commerce/individual_business_registration/basic_info')
const operatorInfo = () => import('@/pages/ProjectPhaseOne/adminstration_of_industry_and_commerce/individual_business_registration/operatorInfo')
const partyBuider = () => import('@/pages/ProjectPhaseOne/adminstration_of_industry_and_commerce/individual_business_registration/partyBuider')

const noapproved = () => import('@/pages/ProjectPhaseOne/adminstration_of_industry_and_commerce/individual_business_registration/no_approved')

const namereg = () => import('@/pages/ProjectPhaseOne/adminstration_of_industry_and_commerce/individual_business_registration/name_reg')
const licenseFile = () => import('@/pages/ProjectPhaseOne/adminstration_of_industry_and_commerce/individual_business_registration/licenseFile')

// 经营场所
const siteBussiness = () => import('@/pages/ProjectPhaseOne/adminstration_of_industry_and_commerce/individual_business_registration/site_for_bussiness')

// 结果提示页面
const aicResultPage = () => import('@/pages/ProjectPhaseOne/adminstration_of_industry_and_commerce/aic_resultPage')

// 材料清单
const stuffIndex = () => import('@/pages/ProjectPhaseOne/adminstration_of_industry_and_commerce/individual_business_registration/stuff_list/index')

// 委托人代理证明
const consignorOrSiteInfo = () => import('@/pages/ProjectPhaseOne/adminstration_of_industry_and_commerce/individual_business_registration/stuff_list/consignor_or_site_info')
const signName = () => import('@/pages/ProjectPhaseOne/adminstration_of_industry_and_commerce/individual_business_registration/stuff_list/signName')

export default [
  {
    path: '/aicIndex',
    name: 'aicIndex',
    component: index,
    meta: {
      keepAlive: false // 需要被缓存
    }
  },
  {
    path: '/haveApproved',
    name: 'haveApproved',
    component: haveApproved,
    meta: {
      keepAlive: true // 需要被缓存
    }
  },
  {
    path: '/basicInfo',
    name: 'basicInfo',
    component: basicInfo,
    meta: {
      keepAlive: true // 需要被缓存
    }
  },

  {
    path: '/operatorInfo',
    name: 'operatorInfo',
    component: operatorInfo,
      props: false,
    meta: {
      keepAlive: true // 需要被缓存
    }
  },
  {
    path: '/partyBuider',
    name: 'partyBuider',
    component: partyBuider,
     props: false,
    meta: {
      keepAlive: true // 需要被缓存
    }
  },

  {
    path: '/noapproved',
    name: 'noapproved', // 未核准名称登记
    component: noapproved,
    meta: {
      keepAlive: true //  需要被缓存
    }
  },
  {
    path: '/namereg',
    name: 'namereg', // 未核准名称登记
    component: namereg,
    meta: {
      keepAlive: true //  需要被缓存
    }
  },
  {
    path: '/siteBussiness',
    name: 'siteBussiness', // 未核准名称登记
    component: siteBussiness,
    meta: {
      keepAlive: true // 需要被缓存
    }
  },
  {
    path: '/aicResultPage',
    name: 'aicResultPage',
    component: aicResultPage,
    meta: {
      keepAlive: false // 需要被缓存
    }
  },

  {
    path: "/licenseFile",
    name: 'licenseFile',//许可证明
    component: licenseFile,
      props: false,
    meta: {
      keepAlive: false // 需要被缓存
    }
  },

  {
    path: "/businessScope",
    name: 'businessScope',//经营场所
    component: () => import('@/pages/ProjectPhaseOne/adminstration_of_industry_and_commerce/individual_business_registration/businessScope'),
    meta: {
      keepAlive: true // 需要被缓存
    }
  },
  {
    path: "/bsSearch",
    name: 'bsSearch',//经营场所搜索
    component: () => import('@/pages/ProjectPhaseOne/adminstration_of_industry_and_commerce/individual_business_registration/bsSearch'),
    meta: {
      keepAlive: false // 需要被缓存
    }
  },

  {
    path: "/stuffIndex",
    name: 'stuffIndex',
    component: stuffIndex,
    meta: {
      keepAlive: false
    }
  },

  {
    path: "/consignorOrSiteInfo",
    name: 'consignorOrSiteInfo',
    component: consignorOrSiteInfo,
    props: true,
    meta: {
      keepAlive: true
    }
  },
    {
    path: "/signName",
    name: 'signName',
    component:signName,
    props: true,
    meta: {
      keepAlive: true
    }
  },
]

