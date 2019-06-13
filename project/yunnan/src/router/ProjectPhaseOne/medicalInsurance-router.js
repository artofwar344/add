/**
 * Created by llb on 2018/12/21.
 */
const medicalInsuranceIndex = () => import('@/pages/ProjectPhaseOne/medicalInsurance/medicalInsuranceRegister')
const MIPersonalInformation = () => import('@/pages/ProjectPhaseOne/medicalInsurance/medicalInsuranceRegister/MIPersonalInformation')
const MIRrsultPage = () => import('@/pages/ProjectPhaseOne/medicalInsurance/medicalInsuranceRegister/MIResultPage')

const medicalInsurance = [
  {
    path: '/medicalInsuranceIndex',
    name: '医疗参保登记首页',
    component: medicalInsuranceIndex
  },
  {
    path: '/medicalInsuranceIndexTwo',
    name: '医疗参保登记二级导航',
    component: medicalInsuranceIndex
  },
  {
    path: '/medicalInsuranceIndexThree',
    name: '医疗参保登记三级导航',
    component: medicalInsuranceIndex
  },
  {
    path: '/MIPersonalInformation',
    name: '参保个人信息登记',
    component: MIPersonalInformation
  },
  {
    path: '/MIRrsultPage',
    name: '参保个人信息登记结果',
    component: MIRrsultPage
  }
]

export default medicalInsurance
