import Layout from '../views/layout/Layout'
import {
  componentGetV,
  componentGetC
} from '../utils/auth'

const homepage_ = () => import('@/views/contents/homepage/index')
//首页 和 vip首页
const management_ = () => import('@/views/contents/management/index')
// 首页内容 和 vip首页内容
const management_indexContent = () => import('@/views/contents/managementIndexContent/index')
// 首页内容添加 和 vip首页内容添加
const management_indexAddContent = () => import('@/views/contents/managementIndexAddContent/index')
// 首页内容编辑
const management_contentedit = () => import('@/views/contents/managementContentedit/index')
//广告
const management_advertising = () => import('@/views/contents/managementAdvertising/index')
//新增广告
const management_AddAdvertising = () => import('@/views/contents/managementAdvertising-add/index')
//专题 首页
const subject_index = () => import('@/views/contents/subject/index')
const subject_addmodel = () => import('@/views/contents/subjectAddmodel/index')
//专题 模块页
const subject_model = () => import('@/views/contents/subjectModel/index')
//专题 内容页
const subject_lump = () => import('@/views/contents/subjectLump/index')
//专题 添加内容页
const subject_lumpadd = () => import('@/views/contents/subjectLumpadd/index')

// 赠品管理
const gifts_ = () => import('@/views/contents/gifts/index')
const giftSubjects = () => import('@/views/contents/gifts/index')
const giftSubData = () => import('@/views/contents/gifts/data')
// App分销订单
const distribution_ = () => import('@/views/contents/distribution/index')


//const _ = () => import('@/views/contents//index')
//
//const _ = () => import('@/views/contents//index')

export default [{
  path: '/',
  component: Layout,
  redirect: '/home',
  name: 'Home',
  hidden: true,
  children: [{
    path: 'home', component: homepage_
  }]
},
  {
    path: '/administer',
    component: Layout,
    redirect: '/administer/management',
    name: 'Administer',
    meta: { title: 'App', icon: 'home_angle' },
    children: [

//首页
      {
        path: 'management', name: 'Management', component: management_, meta: { title: '首页管理', icon: 'list' }
      },
// {path:'management/upload' , hidden: true,name:'upload-',component: upload_,meta: {title:'图片',icon:'list'}
// },

      {
        path: 'management/indexContent',
        hidden: true,
        name: 'IndexContent',
        component: management_indexContent,
        meta: { title: '首页内容' },
        children: [
          {
            path: 'contentEdit', hidden: true, name: 'ContentEdit', component: management_contentedit,
            meta: { title: '内容编辑' }
          },
          {
            path: 'advertisingadd',
            hidden: true,
            name: 'advertisingadd-ContentEdit',
            component: management_AddAdvertising,
            meta: { title: '广告新建' }
          },
          {
            path: 'advertisingedit',
            hidden: true,
            name: 'advertisingadd-ContentEdit1',
            component: management_AddAdvertising,
            meta: { title: '广告编辑' }
          }
        ]
      },
      {
        path: 'management/indexAddContent',
        hidden: true,
        name: 'IndexAddContent',
        component: management_indexAddContent,
        meta: { title: '首页新建内容' }
      },
      {
        path: 'management/advertising',
        hidden: true,
        name: 'IndexAdvertising',
        component: management_advertising,
        meta: { title: '首页广告' },
        children: [
          {
            path: 'AddAdvertising', name: 'AddAdvertising', hidden: true, component: management_AddAdvertising,
            meta: { title: '新增广告' }
          },
          {
            path: 'EditAdvertising', name: 'EditAdvertising', hidden: true, component: management_AddAdvertising,
            meta: { title: '编辑广告' }
          }
        ]

      },
// VIP 页
      {
        path: 'vipmanagement', name: 'VipManagement', component: management_, meta: { title: 'VIP页管理', icon: 'list' }
      },
// 广告页管理
// {path:'advertising' ,name: 'advertising',component:management_advertising ,meta: {title:'广告页管理',icon:'list'}
// },

      {
        path: 'vipmanagement/indexContent',
        hidden: true,
        name: 'vIndexContent',
        component: management_indexContent,
        meta: { title: 'Vip首页内容' },
        children: [
          {
            path: 'contentEdit',
            hidden: true,
            name: 'vipContentEdit11',
            hidden: true,
            component: management_contentedit,
            meta: { title: '内容编辑' }
          },
          {
            path: 'advertisingadd',
            hidden: true,
            name: 'advertisingadd-ContentEdit11',
            component: management_AddAdvertising,
            meta: { title: '广告新建' }
          },
          {
            path: 'advertisingedit',
            hidden: true,
            name: 'advertisingadd-ContentEdit12',
            component: management_AddAdvertising,
            meta: { title: '广告编辑' }
          }
        ]
      },
      {
        path: 'vipmanagement/indexAddContent',
        hidden: true,
        name: 'vIndexAddContent',
        component: management_indexAddContent,
        meta: { title: 'Vip首页新建内容' }
      },
      {
        path: 'vipmanagement/advertising',
        hidden: true,
        name: 'vIndexAdvertising',
        component: management_advertising,
        meta: { title: 'Vip首页广告' },
        children: [
          {
            path: 'AddAdvertising', name: 'vipAddAdvertising', hidden: true, component: management_AddAdvertising,
            meta: { title: '新增广告' }
          },
          {
            path: 'EditAdvertising', name: 'vipEditAdvertising', hidden: true, component: management_AddAdvertising,
            meta: { title: '编辑广告' }
          }
        ]
      },

// 专题管理
      {
        path: 'subject/index', name: 'subject', component: subject_index, meta: { title: '专题管理 ', icon: 'list' },

        children: [
          {
            path: 'addmodel', name: '1subject', hidden: true, component: subject_addmodel, meta: { title: '新建专题' }
          },
          {
            path: 'editmodel', name: '2subject', hidden: true, component: subject_addmodel, meta: { title: '编辑专题' }
          }]
      },
// 专题模块
      {
        path: 'subject/model', hidden: true, name: 'subjectModel', component: subject_model, meta: { title: '专题模块' }

      },
// 专题内容
      {
        path: 'subject/lump', hidden: true, name: 'subjectLump', component: subject_lump, meta: { title: '专题内容' }

      },
      {
        path: 'subject/lumpadd',
        hidden: true,
        name: 'subjectLumpadd',
        component: subject_lumpadd,
        meta: { title: '添加专题内容' }

      }

    ]
  },
  // {
  //   path: '/gifts', component: Layout, redirect: '/gifts/subject', name: 'Gifts',
  //   meta: { title: '数据管理', icon: 'nested' },

  //   children: [
  //     {
  //       path: 'subject', name: 'giftSubject', component: gifts_,
  //       meta: { title: '数据导出', icon: 'nested' }
  //     }, 
  //     {
  //       path: 'subjects', name: 'giftSubData', component: giftSubData,
  //       meta: { title: '批量补赠', icon: 'nested' }
  //     }
  //   ]
  // },
  // {
  //   path: '/distribution', component: Layout, redirect: '/distribution/index', name: 'Distribution',
  //   meta: { title: 'App', icon: 'nested' },

  //   children: [
  //     {
  //       path: 'index', name: 'DistributionIndex', component: distribution_ ,
  //       meta: { title: 'App分销订单', icon: 'nested' }
  //     }, 
  //     // {
  //     //   path: 'subjects', name: 'giftSubData', component: giftSubData,
  //     //   meta: { title: '批量赠送', icon: 'nested' }
  //     // }
  //   ]
  // }
]
