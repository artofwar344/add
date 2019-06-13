/**
 * Created by llb on 2018/11/25.
 */
// 财政厅
// 报名入口
//import JoinFleaMarket from '@/pages/ProjectPhaseOne/bureauFinance/RegistrationAccountingExamination/JoinFleaMarket'
// 报名须知
//import notesApplication from '@/pages/ProjectPhaseOne/bureauFinance/RegistrationAccountingExamination/notesApplication'
// 报名信息填写
//import PersonalInformation from '@/pages/ProjectPhaseOne/bureauFinance/RegistrationAccountingExamination/PersonalInformation'
// 报名信息确认
//import confirmationInformation from '@/pages/ProjectPhaseOne/bureauFinance/RegistrationAccountingExamination/confirmationInformation'
// 报名成功页面
//import RAERegistrationSuccess from '@/pages/ProjectPhaseOne/bureauFinance/RegistrationAccountingExamination/RAERegistrationSuccess'
// 报名等待页面
//import RAERegistrationWait from '@/pages/ProjectPhaseOne/bureauFinance/RegistrationAccountingExamination/RAERegistrationWait'

const CZT = [
  {
    path: '/RAERegistrationWait',
    name: '会计等级考试报名等待',
    component:resolve => require(['@/pages/ProjectPhaseOne/bureauFinance/RegistrationAccountingExamination/RAERegistrationWait'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
  },
  {
    path: '/RAERegistrationSuccess',
    name: 'RAERegistrationSuccess',
    component:resolve => require(['@/pages/ProjectPhaseOne/bureauFinance/RegistrationAccountingExamination/RAERegistrationSuccess'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
  },
  {
    path: '/confirmationInformation',
    name: '会计等级考试报名信息确认',
    component:resolve => require(['@/pages/ProjectPhaseOne/bureauFinance/RegistrationAccountingExamination/confirmationInformation'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
  },
  {
    path: '/PersonalInformation',
    name: '会计等级考试填写报名信息',
    component:resolve => require(['@/pages/ProjectPhaseOne/bureauFinance/RegistrationAccountingExamination/PersonalInformation'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
  },
  {
    path: '/notesApplication',
    name: '会计等级考试报名须知',
    component:resolve => require(['@/pages/ProjectPhaseOne/bureauFinance/RegistrationAccountingExamination/notesApplication'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
  },
  {
    path: '/JoinFleaMarket',
    name: '会计等级考试选择报名入口',
    component:resolve => require(['@/pages/ProjectPhaseOne/bureauFinance/RegistrationAccountingExamination/JoinFleaMarket'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
  }
]


export default CZT
