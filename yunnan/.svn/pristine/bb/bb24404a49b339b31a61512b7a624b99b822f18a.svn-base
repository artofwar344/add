import Vue from 'vue'
import Router from 'vue-router'
// import ining from '@/components/ining.vue' //页面正在开发中……
// import sss from '@/components/HelloWorld.vue' //页面正在开发中……
// import changefrom from '@/pages/ProjectPhaseOne/ChangeFrom/' //动态表单
// import changeimg from '@/pages/ProjectPhaseOne/ChangeFrom/images.vue' //动态图片上传

// //我身边的
// import AroundMe from '../pages/ProjectPhaseOne/AroundMe/index'
// //我身边的详情
// import AroundDetail from '../pages/ProjectPhaseOne/AroundMe/aroundDetail'
// //办事指南
// // scl-事项生命、材料自检
// import explain from '@/pages/ProjectPhaseOne/Explain'
// import examine from '@/pages/ProjectPhaseOne/Explain/examine.vue'
// import instruction from '@/pages/ProjectPhaseOne/engagement/instruction.vue'
// import reserveResult from '@/pages/ProjectPhaseOne/engagement/reserveResult.vue'

// //scl-筑建厅
// import build from '@/pages/ProjectPhaseOne/Build/'
// import chalist from '@/pages/ProjectPhaseOne/Build/list.vue'
// import chatabel from '@/pages/ProjectPhaseOne/Build/tabel.vue'
// import tableone from '@/pages/ProjectPhaseOne/Build/Tabcen/one.vue'
// import tabletow from '@/pages/ProjectPhaseOne/Build/Tabcen/tow.vue'
// import tablethree from '@/pages/ProjectPhaseOne/Build/Tabcen/three.vue'
// import tablefour from '@/pages/ProjectPhaseOne/Build/Tabcen/four.vue'

// //云南省博物馆查询
// import culture from '@/pages/ProjectPhaseOne/Culture/Museum'
// import culturecen from '@/pages/ProjectPhaseOne/Culture/Museum/cultruecen.vue'

// //司法厅
// //律师变更执业机构许可（省内变更）
// import SubmitTwo from '@/pages/ProjectPhaseOne/Judicial/lawyer/SubmitTwo.vue' //4
// import Resone from '@/pages/ProjectPhaseOne/Judicial/lawyer/Resone.vue' //3
// import Warmprompt from '@/pages/ProjectPhaseOne/Judicial/lawyer/Warmprompt.vue' //2
// import Twoform from '@/pages/ProjectPhaseOne/Judicial/lawyer/Twoform.vue' //1

// //司法厅-律师查询
// import lawyerQuery from '@/pages/ProjectPhaseOne/sifating/lawyerQuery' //1
// import lawyerList from '@/pages/ProjectPhaseOne/sifating/lawyerList' //2
// import personinfo from '@/pages/ProjectPhaseOne/sifating/personinfo' //3
// // 律所查询
// import law from '@/pages/ProjectPhaseOne/Judicial/law/'
// import lawlist from '@/pages/ProjectPhaseOne/Judicial/law/Lawlist'
// import lawcent from '@/pages/ProjectPhaseOne/Judicial/law/Lawcent'
// // 律师变更执业类别许可
// import zzls_one from '@/pages/ProjectPhaseOne/sifating/zzlsbgzylbxk/zzls_one' //1
// import zzls_two from '@/pages/ProjectPhaseOne/sifating/zzlsbgzylbxk/zzls_two' //2
// import zzls_three from '@/pages/ProjectPhaseOne/sifating/zzlsbgzylbxk/zzls_three' //3
// //律师执业证书注销许可
// import zyzszx_one from '@/pages/ProjectPhaseOne/sifating/lvzyzszxxk/zyzszx_one' //1
// import zyzszx_two from '@/pages/ProjectPhaseOne/sifating/lvzyzszxxk/zyzszx_two' //2
// import zyzszx_three from '@/pages/ProjectPhaseOne/sifating/lvzyzszxxk/zyzszx_three' //3
// import zyzszx_four from '@/pages/ProjectPhaseOne/sifating/lvzyzszxxk/zyzszx_four' //4
// import zyzszx_five from '@/pages/ProjectPhaseOne/sifating/lvzyzszxxk/zyzszx_five' //5
// // 律师变更执业机构许可
// import lsbgzyjg_one from '@/pages/ProjectPhaseOne/sifating/lsbgzyjgxk/lsbgzyjg_one' //1
// import lsbgzyjg_two from '@/pages/ProjectPhaseOne/sifating/lsbgzyjgxk/lsbgzyjg_two' //2
// import lsbgzyjg_three from '@/pages/ProjectPhaseOne/sifating/lsbgzyjgxk/lsbgzyjg_three' //3


// //？？？
// import Message from '@/pages/ProjectPhaseOne/Judicial/lawyer/Message.vue' //企业查看
// import Prove from '@/pages/ProjectPhaseOne/Judicial/lawyer/Prove.vue' //未加电子签章聘用关心\合作关系
// import ProveOne from '@/pages/ProjectPhaseOne/Judicial/lawyer/ProveOne.vue' //加盖电子签章
// import ProveOneResults from '@/pages/ProjectPhaseOne/Judicial/lawyer/ProveOneResults.vue' //未加电子签章专职律师\兼职律师

// // 律师事务所（分所）变更名称许可
// import swsbg_one from '@/pages/ProjectPhaseOne/sifating/lsswsbgmcxk/swsbg_one' //1
// import swsbg_two from '@/pages/ProjectPhaseOne/sifating/lsswsbgmcxk/swsbg_two' //2
// import swsbg_three from '@/pages/ProjectPhaseOne/sifating/lsswsbgmcxk/swsbg_three' //3
// import swsbg_four from '@/pages/ProjectPhaseOne/sifating/lsswsbgmcxk/swsbg_four' //4
// import swsbg_five from '@/pages/ProjectPhaseOne/sifating/lsswsbgmcxk/swsbg_five' //5

// //律师事务所（分所）变更名称许可里面的一个办理事项
// import bgmcxk_three from '@/pages/ProjectPhaseOne/sifating/lsswsbgmcxk/bgmcxk_child/bgmcxk_three' //1
// import bgmcxk_four from '@/pages/ProjectPhaseOne/sifating/lsswsbgmcxk/bgmcxk_child/bgmcxk_four' //2


// // 律师事务所（分所）变更章程许可

// import bgzcxk_one from '@/pages/ProjectPhaseOne/sifating/lsswsbgzcxk/bgzcxk_one' //1
// import bgzcxk_two from '@/pages/ProjectPhaseOne/sifating/lsswsbgzcxk/bgzcxk_two' //2
// import bgzcxk_three from '@/pages/ProjectPhaseOne/sifating/lsswsbgzcxk/bgzcxk_three' //3
// import bgzcxk_four from '@/pages/ProjectPhaseOne/sifating/lsswsbgzcxk/bgzcxk_four' //4
// import bgzcxk_five from '@/pages/ProjectPhaseOne/sifating/lsswsbgzcxk/bgzcxk_five' //5

// // 律师事务所变更合伙协议许可

// import bghhxyxk_one from '@/pages/ProjectPhaseOne/sifating/lsswsbghhxyxk/bghhxyxk_one' //1
// import bghhxyxk_two from '@/pages/ProjectPhaseOne/sifating/lsswsbghhxyxk/bghhxyxk_two' //2
// import bghhxyxk_three from '@/pages/ProjectPhaseOne/sifating/lsswsbghhxyxk/bghhxyxk_three' //3
// import bghhxyxk_four from '@/pages/ProjectPhaseOne/sifating/lsswsbghhxyxk/bghhxyxk_four' //4
// import bghhxyxk_five from '@/pages/ProjectPhaseOne/sifating/lsswsbghhxyxk/bghhxyxk_five' //5


// //律师事务所（分所）变更负责人许可
// import bgfzrxk_one from '@/pages/ProjectPhaseOne/sifating/lsswsbgfzrxk/bgfzrxk_one' //1
// import bgfzrxk_two from '@/pages/ProjectPhaseOne/sifating/lsswsbgfzrxk/bgfzrxk_two' //2
// import bgfzrxk_three from '@/pages/ProjectPhaseOne/sifating/lsswsbgfzrxk/bgfzrxk_three' //3
// import bgfzrxk_four from '@/pages/ProjectPhaseOne/sifating/lsswsbgfzrxk/bgfzrxk_four' //4
// import bgfzrxk_five from '@/pages/ProjectPhaseOne/sifating/lsswsbgfzrxk/bgfzrxk_five' //5


// //多余的页面——不要删除
// import Results from '@/pages/ProjectPhaseOne/Judicial/lawyer/Results.vue'
// import Submitform from '@/pages/ProjectPhaseOne/Judicial/lawyer/Submitform.vue'
// //物流材料递送1


// import delivery from '@/pages/ProjectPhaseOne/logistics/delivery.vue'
// import deliveryOne from '@/pages/ProjectPhaseOne/logistics/deliveryOne.vue'

// //物流我的地址
// import Myaddress from '@/pages/ProjectPhaseOne/logistics/Myaddress.vue'
// //查看我的物流信息
// import viewLogisticsInformation from '@/pages/ProjectPhaseOne/logistics/viewLogisticsInformation.vue'
// // 公管局
// // yang_11.24
// import armyLogoutRegistration from '@/pages/ProjectPhaseOne/publicSecurityDepartment/cancelRegistration/armyLogoutRegistration.vue'
// import DeathCancelsRegistration from '@/pages/ProjectPhaseOne/publicSecurityDepartment/cancelRegistration/DeathCancelsRegistration.vue'
// // 国有产权出让公告   scl-2018/12/6
// import stateTransOne from '@/pages/ProjectPhaseOne/PublicAdministration/logistics/stateTransOne.vue' //查询表单页面
// import stateTransTwo from '@/pages/ProjectPhaseOne/PublicAdministration/logistics/stateTransTwo.vue' //查询列表页面
// import stateTransThree from '@/pages/ProjectPhaseOne/PublicAdministration/logistics/stateTransThree.vue' //查询列表页面
// //国有产权成交结果查询  scl-2018/12/6
// import stateowned from '@/pages/ProjectPhaseOne/PublicAdministration/logistics/stateowned.vue' //查询表单页面
// import stateownedOne from '@/pages/ProjectPhaseOne/PublicAdministration/logistics/stateownedOne.vue' //查询列表页面
// import stateownedTwo from '@/pages/ProjectPhaseOne/PublicAdministration/logistics/stateownedTwo.vue' //查询列表页面
// //工程建设中标结果查询    scl-2018/12/6
// import projectCheck from '@/pages/ProjectPhaseOne/public_Admin/check/index'
// import resultList from '@/pages/ProjectPhaseOne/public_Admin/check/resultList'
// import detailInfo from '@/pages/ProjectPhaseOne/public_Admin/check/detailInfo'

// //土地使用权出让公告查询    scl-2018/12/6
// import land from '@/pages/ProjectPhaseOne/PublicAdministration/logistics/land.vue' //查询表单页面
// import landOne from '@/pages/ProjectPhaseOne/PublicAdministration/logistics/landOne.vue' //查询列表页面
// import landdetails from '@/pages/ProjectPhaseOne/PublicAdministration/logistics/landdetails.vue' //查询内容页面

// //土地使用权出让成交结果查询    scl-2018/12/6
// import landrepeat from '@/pages/ProjectPhaseOne/PublicAdministration/logistics/landrepeat.vue' //查询表单页面
// import landOnerepeat from '@/pages/ProjectPhaseOne/PublicAdministration/logistics/landOnerepeat.vue' //查询列表页面
// import landdetailsrepeat from '@/pages/ProjectPhaseOne/PublicAdministration/logistics/landdetailsrepeat.vue' //查询内容页面

// //政府采购公告    scl-2018/12/6
// import buildingOne from '@/pages/ProjectPhaseOne/PublicAdministration/building/buildingOne.vue' //查询表单页面
// import buildingTwo from '@/pages/ProjectPhaseOne/PublicAdministration/building/buildingTwo.vue' //查询列表页面
// import buildingThree from '@/pages/ProjectPhaseOne/PublicAdministration/building/buildingThree.vue'
// //政府采购结果公告    scl-2018/12/6
// import buildingResultOne from '@/pages/ProjectPhaseOne/PublicAdministration/building/buildingResultOne.vue' //查询表单页面
// import buildingResultTwo from '@/pages/ProjectPhaseOne/PublicAdministration/building/buildingResultTwo.vue' //查询列表页面
// import buildingResultThree from '@/pages/ProjectPhaseOne/PublicAdministration/building/buildingResultThree.vue'

// // 矿业权出（转）让公告查询    scl-2018/12/6
// import miningNoteOne from '@/pages/ProjectPhaseOne/PublicAdministration/building/miningNote/miningNoteOne.vue' //查询表单页面
// import miningNoteTwo from '@/pages/ProjectPhaseOne/PublicAdministration/building/miningNote/miningNoteTwo.vue' //查询表单页面
// import miningNoteThree from '@/pages/ProjectPhaseOne/PublicAdministration/building/miningNote/miningNoteThree.vue' //查询表单页面
// //矿业权出（转）让成交结果查询    scl-2018/12/6
// import miningOne from '@/pages/ProjectPhaseOne/PublicAdministration/building/miningOne.vue' //查询表单页面
// import miningTwo from '@/pages/ProjectPhaseOne/PublicAdministration/building/miningTwo.vue' //查询列表页面
// import miningThree from '@/pages/ProjectPhaseOne/PublicAdministration/building/miningThree.vue'

// //工程建设中标候选人查询    scl-2018/12/6
// import candidateQuery from '@/pages/ProjectPhaseOne/PublicAdministration/candidate/candidateQuery'
// import candidateList from '@/pages/ProjectPhaseOne/PublicAdministration/candidate/candidateList'
// import candidateResult from '@/pages/ProjectPhaseOne/PublicAdministration/candidate/candidateResult'
// //工程建设招标公告查询    scl - 2018/12/6
// import governmentOne from '@/pages/ProjectPhaseOne/PublicAdministration/Engbiddingnotice/governmentOne.vue'
// import governmentTwo from '@/pages/ProjectPhaseOne/PublicAdministration/Engbiddingnotice/governmentTwo.vue'
// import governmentThree from '@/pages/ProjectPhaseOne/PublicAdministration/Engbiddingnotice/governmentThree.vue'
// //政府采购中标查询    scl - 2018/12/6
// import BidtowinthebidOne from '@/pages/ProjectPhaseOne/PublicAdministration/Bidtowinthebid/BidtowinthebidOne'
// import BidtowinthebidTwo from '@/pages/ProjectPhaseOne/PublicAdministration/Bidtowinthebid/BidtowinthebidTwo'
// import BidtowinthebidThree from '@/pages/ProjectPhaseOne/PublicAdministration/Bidtowinthebid/BidtowinthebidThree'


// //财政厅
// //会计考试查询
// import remember from '@/pages/ProjectPhaseOne/engagement/remember.vue'
// import queryresults from '@/pages/ProjectPhaseOne/engagement/queryresults.vue'

// // yang
// //四级联动跳转页面的-待定
// import projectinfo from '@/pages/ProjectPhaseOne/yang/projectinfo.vue' //首页
// import yang_index from '@/pages/ProjectPhaseOne/yang/index.vue'

// import formone from '@/pages/ProjectPhaseOne/yang/formone.vue' //企业信息
// import Contacts from '@/pages/ProjectPhaseOne/yang/Contacts.vue'//联系人信息
// import fanxian from '@/pages/ProjectPhaseOne/yang/fanxian.vue'
// import locationup from '@/pages/ProjectPhaseOne/yang/locationup.vue'

// //民政厅
// //预约婚姻登记
// import service from '@/pages/ProjectPhaseOne/engagement/service.vue'
// import registration from '@/pages/ProjectPhaseOne/engagement/registration.vue'
// //撤销预约
// import undo from '@/pages/ProjectPhaseOne/engagement/undo.vue'


// // 行政区划查询
// import administrativeDivisionQuery from '@/pages/ProjectPhaseOne/civilAffairs/administrativeDivisionQuery/administrativeDivisionQuery'
// // 婚姻登记机关查询
// import marriageRegistrationQuery from '@/pages/ProjectPhaseOne/civilAffairs/marriageRegistrationQuery/marriageRegistrationQuery'
// // 救助管理站查询
// import reliefManagementQuery from '@/pages/ProjectPhaseOne/civilAffairs/reliefManagementQuery/reliefManagementQuery'

// //测绘局
// import cehuiju from '@/pages/ProjectPhaseOne/cehuiju/cehuiju.vue'
// import companyname from '@/pages/ProjectPhaseOne/cehuiju/companyname.vue'
// import moreinfo from '@/pages/ProjectPhaseOne/cehuiju/moreinfo.vue'

// //人社厅
// import rensheting from '@/pages/ProjectPhaseOne/rensheting/'
// import rensheting1 from '@/pages/ProjectPhaseOne/rensheting/rensheting.vue'
// import Cardquery from '@/pages/ProjectPhaseOne/rensheting/Cardquery/Cardquery'
// //人社厅-scl-卡记录
// import record from '@/pages/ProjectPhaseOne/rensheting/Record/'
// //卡状态
// import renexplain from '@/pages/ProjectPhaseOne/rensheting/explain/'
// //制卡进度
// import schedule from '@/pages/ProjectPhaseOne/rensheting/Schedule/'
// import schedulecent from '@/pages/ProjectPhaseOne/rensheting/Schedule/center.vue' //卡介绍
// //人社厅-scl-招聘
// import recruit from '@/pages/ProjectPhaseOne/rensheting/Recruit/'
// import reccen from '@/pages/ProjectPhaseOne/rensheting/Recruit/center.vue'
// import sybxjfmx from '@/pages/ProjectPhaseOne/rensheting/sybxjfmx/'


// //工商局
// //工商局-scl-严重违法失信企业名单查询   需求改变 需要从新弄接口
// import sbreak from '@/pages/ProjectPhaseOne/Icbc/Break/'
// import sbreaklist from '@/pages/ProjectPhaseOne/Icbc/Break/BreakList.vue'
// import sbreakcen from '@/pages/ProjectPhaseOne/Icbc/Break/center.vue'


// // 公积金
// import submit from '@/pages/ProjectPhaseOne/fund/submit.vue'
// //公积金借贷查询
// import gongjijin from '@/pages/ProjectPhaseOne/fund/gongjijin.vue'
// //公积金明细查询
// import fundOne from '@/pages/ProjectPhaseOne/fund/fundOne.vue'
// import fundTwo from '@/pages/ProjectPhaseOne/fund/fundTwo.vue'
// import infoCheck from '@/pages/ProjectPhaseOne/fund/infoCheck'
// import detailCheck from '@/pages/ProjectPhaseOne/fund/detailCheck'
// import loanInfo from '@/pages/ProjectPhaseOne/fund/loanInfo'
// import Reimbursement from '@/pages/ProjectPhaseOne/fund/Reimbursement'
// import Reimbursement_result from '@/pages/ProjectPhaseOne/fund/Reimbursement_result'
// import loanProcess from '@/pages/ProjectPhaseOne/fund/loanProcess'
// import loanPlan from '@/pages/ProjectPhaseOne/fund/loanPlan'
// import ReimbursementTrialQuery from '@/pages/ProjectPhaseOne/fund/ReimbursementTrialQuery/ReimbursementTrialQuery'
// import ReimbursementTrialResult from '@/pages/ProjectPhaseOne/fund/ReimbursementTrialQuery/result'
// import ReimbursementTrialCompare from '@/pages/ProjectPhaseOne/fund/ReimbursementTrialQuery/compare'


// //事项列表
// import indexlist from '@/pages/ProjectPhaseOne/indexlist/indexlist'
// import list from '@/pages/ProjectPhaseOne/indexlist/list'

// //statisticalOne    统计局
// //统计局地州社会消费品零售查询
// //云南省GDP年度数据查询
// //云南省年末总人口年度数据查询
// //云南省社会消费品零售总额年度数据查询
// //云南省全部职工平均工资年度数据查询
// //地州GDP年度数据查询
// //地州总人口年度数据查询
// import statisticalOne from '@/pages/ProjectPhaseOne/Statistics/retail/statisticalOne.vue'
// import statisticalTwo from '@/pages/ProjectPhaseOne/Statistics/retail/statisticalTwo.vue'

// //medicine 食药局监管局
// import medicineOne from '@/pages/ProjectPhaseOne/medicine/medicineOne.vue'
// import medicineTwo from '@/pages/ProjectPhaseOne/medicine/medicineTwo.vue'
// import medicineThree from '@/pages/ProjectPhaseOne/medicine/medicineThree.vue'

// //质监局  zhijianju
// // 特种设备安全管理人员补证
// // 特种设备安全管理人员补证
// import specialEquipment from '@/pages/ProjectPhaseOne/QualityTechnologySupervisionBureau/SpecialEquipmentReplacement/specialEquipment'
// import specialEquipmentManage from '@/pages/ProjectPhaseOne/QualityTechnologySupervisionBureau/SpecialEquipmentReplacement/specialEquipmentManage'
// import supplement from '@/pages/ProjectPhaseOne/QualityTechnologySupervisionBureau/SpecialEquipmentReplacement/supplement'
// import adreess from '@/pages/ProjectPhaseOne/QualityTechnologySupervisionBureau/SpecialEquipmentReplacement/adreess'
// import mypaper from '@/pages/ProjectPhaseOne/QualityTechnologySupervisionBureau/SpecialEquipmentReplacement/mypaper'
// // 特种设备安全管理人员查询
// import specialEquipmentQuery from '@/pages/ProjectPhaseOne/QualityTechnologySupervisionBureau/SpecialEquipmentQuery/specialEquipmentQuery'
// import specialEquipmentManageQuery from '@/pages/ProjectPhaseOne/QualityTechnologySupervisionBureau/SpecialEquipmentQuery/specialEquipmentManageQuery'
// import specialEquipmentDetails from '@/pages/ProjectPhaseOne/QualityTechnologySupervisionBureau/SpecialEquipmentQuery/SpecialEquipmentDetails'
// // 投资项目办件进度查询  投资审批中心
// import investmentProjects from '@/pages/ProjectPhaseOne/touzishenpizhongxin/investmentProjects'
// import details from '@/pages/ProjectPhaseOne/touzishenpizhongxin/details'

// // 用人单位比例安排残疾人就业年审  省残联
// import unitBasicInfo from '@/pages/ProjectPhaseOne/shengcanlian/unitBasicInfo'//第一页
// import employment from '@/pages/ProjectPhaseOne/shengcanlian/employment'//第二页
// import staffInfo from '@/pages/ProjectPhaseOne/shengcanlian/staffInfo'//第三页
// import materialrefer from '@/pages/ProjectPhaseOne/shengcanlian/materialrefer'
// import dealResult from '@/pages/ProjectPhaseOne/shengcanlian/dealResult'//第四页

// // 公安厅
// //重名查询
// import Jrename from '@/pages/ProjectPhaseOne/Police/Juna/rename.vue'
// import Jsearch from '@/pages/ProjectPhaseOne/Police/Juna/search.vue'
// // 居住证查询
// import ResidencePermitQuery from '@/pages/ProjectPhaseOne/publicSecurityDepartment/ResidencePermitQuery/ResidencePermitQuery'
// // 在线查询出入境业务办理进度
// import entryExitQuery from '@/pages/ProjectPhaseOne/publicSecurityDepartment/entryExitQuery/entryExitQuery'
// import entryExitDetails from '@/pages/ProjectPhaseOne/publicSecurityDepartment/entryExitQuery/entryExitDetails'
// // 出入境证件预受理
// import domesticOne from '@/pages/ProjectPhaseOne/publicSecurityDepartment/enteyExitPreprocess/domesticOne'
// import domesticTwo from '@/pages/ProjectPhaseOne/publicSecurityDepartment/enteyExitPreprocess/domesticTwo'
// import domesticThree from '@/pages/ProjectPhaseOne/publicSecurityDepartment/enteyExitPreprocess/domesticThree'
// import domesticFour from '@/pages/ProjectPhaseOne/publicSecurityDepartment/enteyExitPreprocess/domestic/domesticFour'
// import domesticFive from '@/pages/ProjectPhaseOne/publicSecurityDepartment/enteyExitPreprocess/domesticFive'
// import domesticSix from '@/pages/ProjectPhaseOne/publicSecurityDepartment/enteyExitPreprocess/domesticSix'
// import domesticSeven from '@/pages/ProjectPhaseOne/publicSecurityDepartment/enteyExitPreprocess/domesticSeven'
// import gangAoFour from '@/pages/ProjectPhaseOne/publicSecurityDepartment/enteyExitPreprocess/gangAo/gangAoFour'
// import taiFour from '@/pages/ProjectPhaseOne/publicSecurityDepartment/enteyExitPreprocess/tai/taiFour'
// import abroadOne from '@/pages/ProjectPhaseOne/publicSecurityDepartment/abroad/abroadOne'
// import abroadTwo from '@/pages/ProjectPhaseOne/publicSecurityDepartment/abroad/abroadTwo'
// import abroadThree from '@/pages/ProjectPhaseOne/publicSecurityDepartment/abroad/abroadThree'
// import entryExitSuccess from '@/pages/ProjectPhaseOne/publicSecurityDepartment/enteyExitPreprocess/entryExitSuccess'
// // 出国境证件预约
// import passportFive from '@/pages/ProjectPhaseOne/publicSecurityDepartment/passport/domesticFive'
// import passportSix from '@/pages/ProjectPhaseOne/publicSecurityDepartment/passport/domesticSix'
// import passportSeven from '@/pages/ProjectPhaseOne/publicSecurityDepartment/passport/domesticSeven'
// import passportFour from '@/pages/ProjectPhaseOne/publicSecurityDepartment/passport/gangAo/gangAoFour'
// import passporttaiFour from '@/pages/ProjectPhaseOne/publicSecurityDepartment/passport/tai/taiFour'
// import passportExitSuccess from '@/pages/ProjectPhaseOne/publicSecurityDepartment/passport/entryExitSuccess'
// //证件信息化
// import pagework from '@/pages/ProjectPhaseOne/Police/informatization/pagework.vue'
// import erweimainfo from '@/pages/ProjectPhaseOne/Police/informatization/erweimainfo.vue'
// import wating from '@/pages/ProjectPhaseOne/Police/informatization/wating.vue'
// import successerweima from '@/pages/ProjectPhaseOne/Police/informatization/successerweima.vue'
// import travel from '@/pages/ProjectPhaseOne/Police/informatization/travel.vue'

// //申请办结页
// import complete from '@/pages/ProjectPhaseOne/publicSecurityDepartment/Complete'
// // 入伍注销
// import armylogoutRegistration from '@/pages/ProjectPhaseOne/publicSecurityDepartment/cancelRegistration/armylogoutRegistration'
// // 死亡注销
// import deathcancelsRegistration from '@/pages/ProjectPhaseOne/publicSecurityDepartment/cancelRegistration/deathcancelsRegistration'
// // 项目变更更正
// import gat_bgxm from '@/pages/ProjectPhaseOne/gonganting/gat_bgxm'
// // 居住证申领
// import residencePermitApply from '@/pages/ProjectPhaseOne/publicSecurityDepartment/ResidencePermitTransact/ResidencePermitApply'
// // 申报暂住登记
// import TemporaryResidentialPermitTransact from '@/pages/ProjectPhaseOne/publicSecurityDepartment/TemporaryResidentialPermitTransact/TemporaryResidentialPermitTransact'
// // 补办暂住登记
// import TemporaryResidentialPermitReapply from '@/pages/ProjectPhaseOne/publicSecurityDepartment/TemporaryResidentialPermitTransact/TemporaryResidentialPermitReapply'

// // 省卫计委
// //国家基本公共卫生服务项目查询
// import essentialPublicHealthQuery from '@/pages/ProjectPhaseOne/healthFamilyPlanningCommission/essentialPublicHealthQuery/essentialPublicHealthQuery'
// import essentialPublicHealthDetalis from '@/pages/ProjectPhaseOne/healthFamilyPlanningCommission/essentialPublicHealthQuery/essentialPublicHealthDetalis'
// import essentialPublicHealthMap from '@/pages/ProjectPhaseOne/healthFamilyPlanningCommission/essentialPublicHealthQuery/essentialPublicHealthMap'
// //身边的基本公共卫生服务中心查询
// import BasicPublicServicesAroundQuery from '@/pages/ProjectPhaseOne/healthFamilyPlanningCommission/BasicPublicServicesAroundQuery/BasicPublicServicesAroundQuery'
// import BasicPublicServicesAroundDetalis from '@/pages/ProjectPhaseOne/healthFamilyPlanningCommission/BasicPublicServicesAroundQuery/BasicPublicServicesAroundDetalis'
// import BasicPublicServicesAroundMap from '@/pages/ProjectPhaseOne/healthFamilyPlanningCommission/BasicPublicServicesAroundQuery/BasicPublicServicesAroundMap'

// // 税务局
// // 发票认证
// import invoiceCertificationQuery from '@/pages/ProjectPhaseOne/taxBureau/invoiceCertificationQuery/invoiceCertificationQuery'
// import invoiceCertificationDedails from '@/pages/ProjectPhaseOne/taxBureau/invoiceCertificationQuery/invoiceCertificationDedails'

// //体育局
// import sportsBSearch from '@/pages/ProjectPhaseOne/sports/search.vue'
// import sportsBSearchResult from '@/pages/ProjectPhaseOne/sports/searchresult.vue'
// import sportsBSearchResultDetail from '@/pages/ProjectPhaseOne/sports/searchresultdetail.vue'
// import sportsBSearchWelfare from '@/pages/ProjectPhaseOne/sports/searchWelfare.vue'
// import sportsBSearchWelfareResult from '@/pages/ProjectPhaseOne/sports/welfareResult.vue'
// import welfareResultDetail from '@/pages/ProjectPhaseOne/sports/welfareResultdetail.vue'
// // 我的办事
// import wuliu_one from '@/pages/ProjectPhaseOne/wuliu/wuliu_one.vue'
// import wuliu_two from '@/pages/ProjectPhaseOne/wuliu/wuliu_two.vue'

// //我的待办
// import backlog from '@/pages/ProjectPhaseOne/backlog/backlog'
// //我的待办详情
// import backlogDetails from '@/pages/ProjectPhaseOne/backlogDetails/backlogDetails'
// //我的待办详情
// import declareDetails from '@/pages/ProjectPhaseOne/declareDetails/declareDetails'
// //办事评价
// import bspj from '@/pages/ProjectPhaseOne/bspj/bspj'
//民生热点路由
import socialHotpoint from './ProjectPhaseOne/socialHotpoint'
//卫计委
import wjw from './ProjectPhaseOne/wjw-router'
//税务局
import swj from './ProjectPhaseOne/swj-router'
//教育厅
import jyt from './ProjectPhaseOne/jyt-router'
//司法厅 专职律师变更执业类别许可
import zzlsRouter from './ProjectPhaseOne/zzls-router'
//物流
import wuliu from './ProjectPhaseOne/wuliu'
// 财政厅
import CZT from './ProjectPhaseOne/czt-router'
//舆情分析
import Opinion from './ProjectPhaseOne/yq-router'
// 公安厅 落户相关
import settleRouter from './ProjectPhaseOne/settle-router';
//政务大屏
import affairsMonitor from './ProjectPhaseOne/affairsMonitor';
//随手拍
import convenient from './ProjectPhaseOne/convenient';
// 补办身份证
import reapply from './ProjectPhaseOne/reapply-router';

// 医保局
import ybjRouter from './ProjectPhasesTwo/Query_YBJ/ybj-router'
import medicalInsurance from './ProjectPhaseOne/medicalInsurance-router'
// 工商局
import AICrotuer from './ProjectPhaseOne/AIC_router'
import SCJDGLJ from './ProjectPhasesTwo/Transaction_SCJDGLJ/scjdglj_router'
//住建厅
import zjtRouter from './ProjectPhasesTwo/Query_ZJT/zjt-router'

Vue.use(Router)

export default new Router({

  routes: [
    {path:'/',redirect:'/explain'},
    {
      path: '/explain',
      name: '办事指南',
      component:resolve => require(['@/pages/ProjectPhaseOne/Explain'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    //我身边的场馆
    {
      path: '/aroundMe',
      name: 'aroundMe',
      component:resolve => require(['@/pages/ProjectPhaseOne/AroundMe/index'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    //我身边的基层医疗卫生机构
    {
      path: '/aroundMedical',
      name: 'aroundMedical',
      component: resolve => require(['@/pages/ProjectPhaseOne/AroundMe/index'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }

    },

    {
      path: '/sss',
      name: 'sss',
      component: resolve => require(['@/components/HelloWorld.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/reliefManagementQuery',
      name: 'reliefManagementQuery',
      component: resolve => require(['@/pages/ProjectPhaseOne/civilAffairs/reliefManagementQuery/reliefManagementQuery'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/marriageRegistrationQuery',
      name: '婚姻登记机关查询',
      component: resolve => require(['@/pages/ProjectPhaseOne/civilAffairs/marriageRegistrationQuery/marriageRegistrationQuery'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/administrativeDivisionQuery',
      name: '行政区划查询',
      component: resolve => require(['@/pages/ProjectPhaseOne/civilAffairs/administrativeDivisionQuery/administrativeDivisionQuery'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/entryExitDetails',
      name: '查询出入境办理进度结果',
      component: resolve => require(['@/pages/ProjectPhaseOne/publicSecurityDepartment/entryExitQuery/entryExitDetails'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/entryExitQuery',
      name: '查询出入境办理进度搜索',
      component: resolve => require(['@/pages/ProjectPhaseOne/publicSecurityDepartment/entryExitQuery/entryExitQuery'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/domesticOne',
      name: 'domesticOne',
      component: resolve => require(['@/pages/ProjectPhaseOne/publicSecurityDepartment/enteyExitPreprocess/domesticOne'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/domesticTwo',
      name: 'domesticTwo',
      component: resolve => require(['@/pages/ProjectPhaseOne/publicSecurityDepartment/enteyExitPreprocess/domesticTwo'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/domesticThree',
      name: 'domesticThree',
      component: resolve => require(['@/pages/ProjectPhaseOne/publicSecurityDepartment/enteyExitPreprocess/domesticThree'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/domesticFour',
      name: 'domesticFour',
      component:resolve => require(['@/pages/ProjectPhaseOne/publicSecurityDepartment/enteyExitPreprocess/domestic/domesticFour'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/domesticFive',
      name: 'domesticFive',
      component:resolve => require(['@/pages/ProjectPhaseOne/publicSecurityDepartment/enteyExitPreprocess/domesticFive'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/domesticSix',
      name: 'domesticSix',
      component: resolve => require(['@/pages/ProjectPhaseOne/publicSecurityDepartment/enteyExitPreprocess/domesticSix'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/domesticSeven',
      name: 'domesticSeven',
      component: resolve => require(['@/pages/ProjectPhaseOne/publicSecurityDepartment/enteyExitPreprocess/domesticSeven'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },


    {
      path: '/gangAoFour',
      name: 'gangAoFour',
      component: resolve => require(['@/pages/ProjectPhaseOne/publicSecurityDepartment/enteyExitPreprocess/gangAo/gangAoFour'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/taiFour',
      name: 'taiFour',
      component: resolve => require(['@/pages/ProjectPhaseOne/publicSecurityDepartment/enteyExitPreprocess/tai/taiFour'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/abroadOne',
      name: 'abroadOne',
      component: resolve => require(['@/pages/ProjectPhaseOne/publicSecurityDepartment/abroad/abroadOne'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/abroadTwo',
      name: 'abroadTwo',
      component: resolve => require(['@/pages/ProjectPhaseOne/publicSecurityDepartment/abroad/abroadTwo'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/abroadThree',
      name: 'abroadThree',
      component: resolve => require(['@/pages/ProjectPhaseOne/publicSecurityDepartment/abroad/abroadThree'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/BasicPublicServicesAroundQuery',
      name: 'aroundMe',
      component: resolve => require(['@/pages/ProjectPhaseOne/AroundMe/index'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }

    },
    {
      path: '/aroundDetail',
      name: 'aroundDetail',
      component: resolve => require(['@/pages/ProjectPhaseOne/AroundMe/aroundDetail'],resolve),
      meta: {
        keepAlive: false // 不需要被缓存
      }
    },
    {
      path: '/entryExitSuccess',
      name: 'entryExitSuccess',
      component: resolve => require(['@/pages/ProjectPhaseOne/publicSecurityDepartment/enteyExitPreprocess/entryExitSuccess'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/textinfo',//出国境预约预约须知
      name: 'textinfo',
      component: resolve => require(['@/pages/ProjectPhaseOne/publicSecurityDepartment/passport/textinfo'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/passportFive',//出国境预约1
      name: 'passportFive',
      component: resolve => require(['@/pages/ProjectPhaseOne/publicSecurityDepartment/passport/domesticFive'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/passportSix',//出国境预约2
      name: 'passportSix',
      component: resolve => require(['@/pages/ProjectPhaseOne/publicSecurityDepartment/passport/domesticSix'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/passportSeven',//出国境预约3
      name: 'passportSeven',
      component: resolve => require(['@/pages/ProjectPhaseOne/publicSecurityDepartment/passport/domesticSeven'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/passportFour',//出国境预约4
      name: 'passportFour',
      component: resolve => require(['@/pages/ProjectPhaseOne/publicSecurityDepartment/passport/gangAo/gangAoFour'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/passporttaiFour',//出国境预约5
      name: 'passporttaiFour',
      component: resolve => require(['@/pages/ProjectPhaseOne/publicSecurityDepartment/passport/tai/taiFour'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/passportExitSuccess',//出国境预约6
      name: 'passportExitSuccess',
      component: resolve => require(['@/pages/ProjectPhaseOne/publicSecurityDepartment/passport/entryExitSuccess'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/ResidencePermitQuery',
      name: '居住证查询',
      component: resolve => require(['@/pages/ProjectPhaseOne/publicSecurityDepartment/ResidencePermitQuery/ResidencePermitQuery'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/invoiceCertificationDedails',
      name: '增值税发票查验详情',
      component: resolve => require(['@/pages/ProjectPhaseOne/taxBureau/invoiceCertificationQuery/invoiceCertificationDedails'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/invoiceCertificationQuery',
      name: '增值税发票查验',
      component: resolve => require(['@/pages/ProjectPhaseOne/taxBureau/invoiceCertificationQuery/invoiceCertificationQuery'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/examine',
      name: '申报材料自检',
      component: resolve => require(['@/pages/ProjectPhaseOne/Explain/examine.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/Jrename',
      name: '重名查询',
      component: resolve => require(['@/pages/ProjectPhaseOne/Police/Juna/rename.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/Jsearch',
      name: '重名查询',
      component: resolve => require(['@/pages/ProjectPhaseOne/Police/Juna/search.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/search", //云南公共体育
      name: 'sports', //云南公共体育1
      component: resolve => require(['@/pages/ProjectPhaseOne/sports/search.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/searchresult/:datalist",
      name: 'sportsResult', //云南公共体育2
      component: resolve => require(['@/pages/ProjectPhaseOne/sports/searchresult.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/searchresultdetail/:sports_id",
      name: 'sportsResultDetail', //云南公共体育3
      component: resolve => require(['@/pages/ProjectPhaseOne/sports/searchresultdetail.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/searchwelfare",
      name: 'searchwelfare', //云南省公益性体育赛事查询1
      component: resolve => require(['@/pages/ProjectPhaseOne/sports/searchWelfare.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/welfareResult",
      name: 'welfareResult', //云南省公益性体育赛事查询2
      component: resolve => require(['@/pages/ProjectPhaseOne/sports/welfareResult.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/welfareResultDetail/:spg_Id",
      name: 'welfareResultDetail', //云南省公益性体育赛事查询3
      component: resolve => require(['@/pages/ProjectPhaseOne/sports/welfareResultdetail.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/formone',
      name: 'aaaa',
      component: resolve => require(['@/pages/ProjectPhaseOne/yang/formone.vue'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }

    },
    {
      path: '/fanxian',
      name: '办理结果',
      component: resolve => require(['@/pages/ProjectPhaseOne/yang/fanxian.vue'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }

    },
    {
      path: '/Contacts',
      name: 'aaaa',
      component: resolve => require(['@/pages/ProjectPhaseOne/yang/Contacts.vue'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }

    },
    {
      path: '/locationup',
      name: 'aaaa',
      component: resolve => require(['@/pages/ProjectPhaseOne/yang/locationup.vue'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }

    },
    {
      path: '/projectinfo',
      name: 'aaaa',
      component: resolve => require(['@/pages/ProjectPhaseOne/yang/projectinfo.vue'], resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }

    },
    {
      path: '/addlist',
      name: 'aaaa',
      component: resolve => require(['@/pages/ProjectPhaseOne/yang/addlist.vue'], resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }

    },
    {
      path: '/yang_index',
      name: 'aaaa',
      component:resolve => require(['@/pages/ProjectPhaseOne/yang/index.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },

    {
      path: '/Twoform',
      name: '律师变更执业机构',
      component: resolve => require(['@/pages/ProjectPhaseOne/Judicial/lawyer/Twoform.vue'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/Warmprompt',
      name: '律师变更执业机构',
      component: resolve => require(['@/pages/ProjectPhaseOne/Judicial/lawyer/Warmprompt.vue'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/Results',
      name: '律师变更执业机构',
      component: resolve => require(['@/pages/ProjectPhaseOne/Judicial/lawyer/Results.vue'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/Resone',
      name: '律师变更执业机构',
      component: resolve => require(['@/pages/ProjectPhaseOne/Judicial/lawyer/Resone.vue'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/Submitform',
      name: '律师变更执业机构',
      component: resolve => require(['@/pages/ProjectPhaseOne/Judicial/lawyer/Submitform.vue'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/SubmitTwo',
      name: '律师变更执业机构',
      component: resolve => require(['@/pages/ProjectPhaseOne/Judicial/lawyer/SubmitTwo.vue'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },

    {
      path: '/Message',
      name: '律师变更执业机构',
      component: resolve => require(['@/pages/ProjectPhaseOne/Judicial/lawyer/Message.vue'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/Prove',
      name: '律师变更执业机构',
      component: resolve => require(['@/pages/ProjectPhaseOne/Judicial/lawyer/Prove.vue'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/ProveOne',
      name: '律师变更执业机构',
      component: resolve => require(['@/pages/ProjectPhaseOne/Judicial/lawyer/ProveOne.vue'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/ProveOneResults',
      name: '律师变更执业机构',
      component: resolve => require(['@/pages/ProjectPhaseOne/Judicial/lawyer/ProveOneResults.vue'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/law',
      name: 'law', //律所查询
      component: resolve => require(['@/pages/ProjectPhaseOne/Judicial/law/'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/lawlist/:datalist',
      name: 'lawlist', //律所查询列表
      component: resolve => require(['@/pages/ProjectPhaseOne/Judicial/law/Lawlist'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/lawcent/:datalist',
      name: 'lawcent', //律所查询列表
      component: resolve => require(['@/pages/ProjectPhaseOne/Judicial/law/Lawcent'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },

    {
      path: '/lawyerQuery',
      name: 'lawyerQuery', //律师查询1
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lawyerQuery'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/lawyerList',
      name: 'lawyerList', //律师查询2
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lawyerList'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/personinfo',
      name: 'personinfo', //律师查询3
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/personinfo'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/build',
      name: '工程监理企业资质查询',
      component: resolve => require(['@/pages/ProjectPhaseOne/Build/'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/chalist:datetext',
      name: 'chalist',
      component: resolve => require(['@/pages/ProjectPhaseOne/Build/list.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/chatabel',
      name: '工程监理企业资质查询',
      component: resolve => require(['@/pages/ProjectPhaseOne/Build/tabel.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      },
      redirect: '/chatabel/tableone',
      children: [{
        path: '/chatabel/tableone',
        name: '工程监理企业资质查询',
        component: resolve => require(['@/pages/ProjectPhaseOne/Build/Tabcen/one.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
      },
        {
          path: '/chatabel/tabletow',
          name: '工程监理企业资质查询',
          component: resolve => require(['@/pages/ProjectPhaseOne/Build/Tabcen/tow.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
        },
        {
          path: '/chatabel/tablethree',
          name: '工程监理企业资质查询',
          component: resolve => require(['@/pages/ProjectPhaseOne/Build/Tabcen/three.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
        },
        {
          path: '/chatabel/tablefour',
          name: '工程监理企业资质查询',
          component: resolve => require(['@/pages/ProjectPhaseOne/Build/Tabcen/four.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
        },
      ]
    },
    {
      path: '/landrepeat',
      name: 'landrepeat',
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/logistics/landrepeat.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/landOnerepeat/:datatext',
      name: 'landOnerepeat',
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/logistics/landOnerepeat.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/landdetailsrepeat',
      name: 'landdetailsrepeat',
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/logistics/landdetailsrepeat.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/buildingOne',
      name: 'buildingOne',
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/building/buildingOne.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/buildingTwo/:datatext',
      name: 'buildingTwo',
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/building/buildingTwo.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/buildingThree',
      name: 'buildingThree',
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/building/buildingThree.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/buildingResultOne',
      name: 'buildingResultOne',
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/building/buildingResultOne.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/buildingResultTwo/:datatext',
      name: 'buildingResultTwo',
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/building/buildingResultTwo.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/buildingResultThree',
      name: 'buildingResultThree',
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/building/buildingResultThree.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/miningOne',
      name: 'miningOne',
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/building/miningOne.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/miningTwo/:datatext',
      name: 'miningTwo',
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/building/miningTwo.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/miningThree',
      name: 'miningThree',
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/building/miningThree.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/miningNoteOne',
      name: 'miningNoteOne',
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/building/miningNote/miningNoteOne.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/miningNoteTwo/:datatext',
      name: 'miningNoteTwo',
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/building/miningNote/miningNoteTwo.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/miningNoteThree',
      name: 'miningNoteThree',
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/building/miningNote/miningNoteThree.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/governmentOne',
      name: 'governmentOne', //建筑工程招标公告查询
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/Engbiddingnotice/governmentOne.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/governmentTwo/:datatext',
      name: 'governmentTwo',
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/Engbiddingnotice/governmentTwo.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/governmentThree',
      name: 'governmentThree',
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/Engbiddingnotice/governmentThree.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    }, {
      path: '/BidtowinthebidOne',
      name: 'BidtowinthebidOne', //政府采购中标查询
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/Bidtowinthebid/BidtowinthebidOne'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    }, {
      path: '/BidtowinthebidTwo/:datatext',
      name: 'BidtowinthebidTwo',
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/Bidtowinthebid/BidtowinthebidTwo'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    }, {
      path: '/BidtowinthebidThree',
      name: 'BidtowinthebidThree',
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/Bidtowinthebid/BidtowinthebidThree'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },

    {
      path: '/undo',
      name: 'undo', //撤销预约
      component: resolve => require(['@/pages/ProjectPhaseOne/engagement/undo.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/instruction',
      name: 'instruction',
      component: resolve => require(['@/pages/ProjectPhaseOne/engagement/instruction.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/reserveResult',
      name: 'reserveResult',
      component: resolve => require(['@/pages/ProjectPhaseOne/engagement/reserveResult.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/registration',
      name: 'registration', //预约婚姻登记
      component: resolve => require(['@/pages/ProjectPhaseOne/engagement/registration.vue'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/service',
      name: 'service', //便民服务
      component: resolve => require(['@/pages/ProjectPhaseOne/engagement/service.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/remember',
      name: 'remember', //会计考试成绩查询1
      component: resolve => require(['@/pages/ProjectPhaseOne/engagement/remember.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/queryresults',
      name: 'queryresults', //会计考试成绩查询2
      component: resolve => require(['@/pages/ProjectPhaseOne/engagement/queryresults.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },

    {
      path: '/culture',
      name: 'culture', //云南省博物馆查询1
      component: resolve => require(['@/pages/ProjectPhaseOne/Culture/Museum'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/culturecen',
      name: 'culturecen', //云南省博物馆查询2
      component: resolve => require(['@/pages/ProjectPhaseOne/Culture/Museum/cultruecen.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/delivery',
      name: 'delivery', //物流材料递送1
      component: resolve => require(['@/pages/ProjectPhaseOne/logistics/delivery.vue'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/deliveryOne',
      name: 'deliveryOne', //物流材料递送2
      component: resolve => require(['@/pages/ProjectPhaseOne/logistics/deliveryOne.vue'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/viewLogisticsInformation',
      name: 'viewLogisticsInformation', //物流我的地址
      component: resolve => require(['@/pages/ProjectPhaseOne/logistics/viewLogisticsInformation.vue'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/stateowned',
      name: 'stateowned', //国有产权成交结果查询1
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/logistics/stateowned.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/stateownedOne/:datatext',
      name: 'stateownedOne', //国有产权成交结果查询2
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/logistics/stateownedOne.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/stateownedTwo',
      name: 'stateownedTwo', //国有产权成交结果查询3
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/logistics/stateownedTwo.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/stateTransOne',
      name: 'stateTransOne', //国有产权出让公告查询
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/logistics/stateTransOne.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/stateTransTwo/:datatext',
      name: 'stateTransTwo', //国有产权出让公告查询
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/logistics/stateTransTwo.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/stateTransThree',
      name: 'stateTransThree', //国有产权出让公告查询
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/logistics/stateTransThree.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/land',
      name: 'land', //土地使用权出让公告查询
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/logistics/land.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/landOne/:datatext',
      name: 'landOne', //土地使用权出让公告查询
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/logistics/landOne.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/landdetails',
      name: 'landdetails', //土地使用权出让公告查询
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/logistics/landdetails.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/statisticalOne',
      name: 'statisticalOne', //统计局地州社会消费品零售总额
      component: resolve => require(['@/pages/ProjectPhaseOne/Statistics/retail/statisticalOne.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/statisticalTwo',
      name: 'statisticalTwo', //统计局地州社会消费品零售总额
      component: resolve => require(['@/pages/ProjectPhaseOne/Statistics/retail/statisticalTwo.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/medicineOne',
      name: 'medicineOne', //食品生产许可获证企业查询1
      component: resolve => require(['@/pages/ProjectPhaseOne/medicine/medicineOne.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/medicineTwo',
      name: 'medicineTwo', //食品生产许可获证企业查询2
      component: resolve => require(['@/pages/ProjectPhaseOne/medicine/medicineTwo.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/medicineThree',
      name: 'medicineThree', //食品生产许可获证企业（SC)------食品生产许可获证企业查询3
      component: resolve => require(['@/pages/ProjectPhaseOne/medicine/medicineThree.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/fundOne',
      name: 'fundOne', //公积金明细查询
      component: resolve => require(['@/pages/ProjectPhaseOne/fund/fundOne.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/fundTwo',
      name: 'fundTwo', //公积金明细查询
      component: resolve => require(['@/pages/ProjectPhaseOne/fund/fundTwo.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/pagework/:page',
      component: resolve => require(['@/pages/ProjectPhaseOne/Police/informatization/pagework.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/erweimainfo',
      component: resolve => require(['@/pages/ProjectPhaseOne/Police/informatization/erweimainfo.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/wating',
      component: resolve => require(['@/pages/ProjectPhaseOne/Police/informatization/wating.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/successerweima',
      component: resolve => require(['@/pages/ProjectPhaseOne/Police/informatization/successerweima.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    }, {
      path: '/travel',
      component: resolve => require(['@/pages/ProjectPhaseOne/Police/informatization/travel.vue'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/cehuiju',
      component: resolve => require(['@/pages/ProjectPhaseOne/cehuiju/cehuiju.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/companyname/:datalist',
      name: 'companyname',
      component: resolve => require(['@/pages/ProjectPhaseOne/cehuiju/companyname.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/moreinfo',
      name: 'moreinfo',
      component: resolve => require(['@/pages/ProjectPhaseOne/cehuiju/moreinfo.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/rensheting',
      name: 'rensheting', //职工养老保险缴费明细
      component: resolve => require(['@/pages/ProjectPhaseOne/rensheting/'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/rensheting1',
      name: 'rensheting1', //云南省基本养老保险参保缴费证明
      component: resolve => require(['@/pages/ProjectPhaseOne/rensheting/rensheting.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/Cardquery',
      name: 'Cardquery',
      component: resolve => require(['@/pages/ProjectPhaseOne/rensheting/Cardquery/Cardquery'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/record',
      name: 'record', //人社厅-卡信息
      component: resolve => require(['@/pages/ProjectPhaseOne/rensheting/Record/'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/explain',
      name: 'renexplain', //人社厅-卡状态
      component: resolve => require(['@/pages/ProjectPhaseOne/rensheting/explain/'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/schedule',
      name: 'schedule', //人社厅-制卡进度
      component: resolve => require(['@/pages/ProjectPhaseOne/rensheting/Schedule/'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/schedulecent',
      name: 'schedulecent', //人社厅-卡介绍
      component: resolve => require(['@/pages/ProjectPhaseOne/rensheting/Schedule/center'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/recruit',
      name: 'recruit', //人社厅-招聘
      component: resolve => require(['@/pages/ProjectPhaseOne/rensheting/Recruit/'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/sybxjfmx',
      name: 'sybxjfmx', //人社厅-失业保险
      component: resolve => require(['@/pages/ProjectPhaseOne/rensheting/sybxjfmx/'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/reccen',
      name: 'reccen', //人社厅-招聘
      component: resolve => require(['@/pages/ProjectPhaseOne/rensheting/Recruit/center.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/sbreak',//查询
      name: 'sbreak', //工商局-严重违法失信企业名单查询
      component: resolve => require(['@/pages/ProjectPhaseTwo/Query/Query_GSJ/infringingCompanyQuery/'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/sbreaklist',//详情页
      name: 'sbreaklist', //工商局-严重违法失信企业名单查询
      component: resolve => require(['@/pages/ProjectPhaseTwo/Query/Query_GSJ/infringingCompanyQuery/BreakList.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/sbreakcen',//返回列表页
      name: 'sbreakcen', //工商局-严重违法失信企业名单查询
      component: resolve => require(['@/pages/ProjectPhaseTwo/Query/Query_GSJ/infringingCompanyQuery/center.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
   /*  {
      path: '/gongjijin',
      component: resolve => require(['@/pages/ProjectPhaseTwo/Query/Query_ZJT/gongjijin.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    }, */
    {
      path: '/submit',
      component: resolve => require(['@/pages/ProjectPhaseOne/fund/submit.vue'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/indexlist',
      name: 'indexlist',
      component: resolve => require(['@/pages/ProjectPhaseOne/indexlist/indexlist'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/list',
      name: 'list',
      component: resolve => require(['@/pages/ProjectPhaseOne/indexlist/list'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/supplement',
      name: '特种设备安全管理人员补证申请',
      component: resolve => require(['@/pages/ProjectPhaseOne/QualityTechnologySupervisionBureau/SpecialEquipmentReplacement/supplement'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/specialEquipmentManage',
      name: '特种设备安全管理人员补证',
      component: resolve => require(['@/pages/ProjectPhaseOne/QualityTechnologySupervisionBureau/SpecialEquipmentReplacement/specialEquipmentManage'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/specialEquipment',
      name: '特种设备作业人员补证',
      component: resolve => require(['@/pages/ProjectPhaseOne/QualityTechnologySupervisionBureau/SpecialEquipmentReplacement/specialEquipment'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/specialEquipmentQuery',
      name: '特种设备作业人员查询',
      component: resolve => require(['@/pages/ProjectPhaseOne/QualityTechnologySupervisionBureau/SpecialEquipmentQuery/specialEquipmentQuery'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/specialEquipmentManageQuery',
      name: '特种设备安全管理人员查询',
      component: resolve => require(['@/pages/ProjectPhaseOne/QualityTechnologySupervisionBureau/SpecialEquipmentQuery/specialEquipmentManageQuery'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/specialEquipmentDetails',
      name: '特种设备安全管理人员详情',
      component: resolve => require(['@/pages/ProjectPhaseOne/QualityTechnologySupervisionBureau/SpecialEquipmentQuery/SpecialEquipmentDetails'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/adreess',
      name: '物流快寄',
      component: resolve => require(['@/pages/ProjectPhaseOne/QualityTechnologySupervisionBureau/SpecialEquipmentReplacement/adreess'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/mypaper',
      name: '办理结果',
      component: resolve => require(['@/pages/ProjectPhaseOne/QualityTechnologySupervisionBureau/SpecialEquipmentReplacement/mypaper'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/investmentProjects",
      name: 'investmentProjects', //投资项目办件进度查询1
      component: resolve => require(['@/pages/ProjectPhaseOne/touzishenpizhongxin/investmentProjects'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/details",
      name: 'details', //投资项目办件进度查询详情2
      component: resolve => require(['@/pages/ProjectPhaseOne/touzishenpizhongxin/details'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/unitBasicInfo",
      name: 'unitBasicInfo', //用人单位比例安排残疾人就业年审
      component: resolve => require(['@/pages/ProjectPhaseOne/shengcanlian/unitBasicInfo'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/employment",
      name: 'employment', //用人单位比例安排残疾人就业年审
      component: resolve => require(['@/pages/ProjectPhaseOne/shengcanlian/employment'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/staffInfo",
      name: 'staffInfo', //用人单位比例安排残疾人就业年审
      component: resolve => require(['@/pages/ProjectPhaseOne/shengcanlian/staffInfo'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/materialrefer",
      name: 'materialrefer', //用人单位比例安排残疾人就业年审
      component: resolve => require(['@/pages/ProjectPhaseOne/shengcanlian/materialrefer'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/dealResult",
      name: 'dealResult', //用人单位比例安排残疾人就业年审
      component: resolve => require(['@/pages/ProjectPhaseOne/shengcanlian/dealResult'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/candidateQuery",
      name: 'candidateQuery', //工程建设中标候选人查询
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/candidate/candidateQuery'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/candidateList/:datatext",
      name: 'candidateList', //工程建设中标候选人查询
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/candidate/candidateList'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/candidateResult",
      name: 'candidateResult', //工程建设中标候选人查询
      component: resolve => require(['@/pages/ProjectPhaseOne/PublicAdministration/candidate/candidateResult'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/projectCheck",
      name: 'projectCheck', //工程建设中标候选人查询
      component: resolve => require(['@/pages/ProjectPhaseOne/public_Admin/check/index'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    }, {
      path: "/resultList/:datatext",
      name: 'resultList', //工程建设中标候选人查询
      component: resolve => require(['@/pages/ProjectPhaseOne/public_Admin/check/resultList'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    }, {
      path: "/detailInfo",
      name: 'detailInfo', //工程建设中标候选人查询
      component: resolve => require(['@/pages/ProjectPhaseOne/public_Admin/check/detailInfo'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    }, {
      path: "/infoCheck",
      name: 'infoCheck', //公积金信息查询
      component: resolve => require(['@/pages/ProjectPhaseOne/fund/infoCheck'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    }, {
      path: "/detailCheck",
      name: 'detailCheck', //公积金信息查询
      component: resolve => require(['@/pages/ProjectPhaseOne/fund/detailCheck'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/loanInfo",
      name: 'loanInfo', //公积金信息查询
      component: resolve => require(['@/pages/ProjectPhaseTwo/Query/Query_ZJT/loanInfo'],resolve),
    },{
      path: "/loanInfo",
      name: 'loanInfo', //公积金信息查询
      component: resolve => require(['@/pages/ProjectPhaseOne/fund/loanInfo'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    }, 
    {
      path: "/ReimbursementResult",
      name: 'ReimbursementResult', //还款明细详情
      component: resolve => require(['@/pages/ProjectPhaseTwo/Query/Query_ZJT/ReimbursementResult'],resolve),
    },
    {
      path: "/loanProcess",
      name: 'loanProcess', //公积金信息查询
      component: resolve => require(['@/pages/ProjectPhaseOne/fund/loanProcess'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/loanPlan",
      name: 'loanPlan', //公积金信息查询
      component: resolve => require(['@/pages/ProjectPhaseOne/fund/loanPlan'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/changefrom',
      name: 'changefrom',
      component: resolve => require(['@/pages/ProjectPhaseOne/ChangeFrom/'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/changeimg',
      name: 'changeimg',
      component: resolve => require(['@/pages/ProjectPhaseOne/ChangeFrom/images.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/essentialPublicHealthQuery',
      name: 'essentialPublicHealthQuery',
      component: resolve => require(['@/pages/ProjectPhaseOne/healthFamilyPlanningCommission/essentialPublicHealthQuery/essentialPublicHealthQuery'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/essentialPublicHealthDetalis',
      name: 'essentialPublicHealthDetalis',
      component: resolve => require(['@/pages/ProjectPhaseOne/healthFamilyPlanningCommission/essentialPublicHealthQuery/essentialPublicHealthDetalis'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/essentialPublicHealthMap',
      name: 'essentialPublicHealthMap',
      component: resolve => require(['@/pages/ProjectPhaseOne/healthFamilyPlanningCommission/essentialPublicHealthQuery/essentialPublicHealthMap'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/BasicPublicServicesAroundQuery',
      name: 'BasicPublicServicesAroundQuery',
      component: resolve => require(['@/pages/ProjectPhaseOne/healthFamilyPlanningCommission/BasicPublicServicesAroundQuery/BasicPublicServicesAroundQuery'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/BasicPublicServicesAroundDetalis',
      name: 'BasicPublicServicesAroundDetalis',
      component: resolve => require(['@/pages/ProjectPhaseOne/healthFamilyPlanningCommission/BasicPublicServicesAroundQuery/BasicPublicServicesAroundDetalis'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: '/BasicPublicServicesAroundMap',
      name: 'BasicPublicServicesAroundMap',
      component: resolve => require(['@/pages/ProjectPhaseOne/healthFamilyPlanningCommission/BasicPublicServicesAroundQuery/BasicPublicServicesAroundMap'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/ining",
      name: 'ining', //404页面正在建设
      component: resolve => require(['@/components/ining.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "*",
      redirect: "/ining",
    },
    {
      path: "/complete",
      name: 'complete',
      component: resolve => require(['@/pages/ProjectPhaseOne/publicSecurityDepartment/Complete'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/armylogoutRegistration",
      name: 'armylogoutRegistration',
      component: resolve => require(['@/pages/ProjectPhaseOne/publicSecurityDepartment/cancelRegistration/armyLogoutRegistration.vue'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/deathcancelsRegistration",
      name: 'deathcancelsRegistration',
      component: resolve => require(['@/pages/ProjectPhaseOne/publicSecurityDepartment/cancelRegistration/DeathCancelsRegistration.vue'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/wuliu_one",
      name: 'wuliu_one',
      component: resolve => require(['@/pages/ProjectPhaseOne/wuliu/wuliu_one.vue'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/wuliu_two",
      name: 'wuliu_two',
      component: resolve => require(['@/pages/ProjectPhaseOne/wuliu/wuliu_two.vue'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/backlog",
      name: 'backlog',
      component: resolve => require(['@/pages/ProjectPhaseOne/backlog/backlog'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/backlogDetails",
      name: 'backlogDetails',
      component: resolve => require(['@/pages/ProjectPhaseOne/backlogDetails/backlogDetails'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/declareDetails",
      name: 'declareDetails',
      component: resolve => require(['@/pages/ProjectPhaseOne/declareDetails/declareDetails'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/bspj",
      name: 'bspj',
      component: resolve => require(['@/pages/ProjectPhaseOne/bspj/bspj'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/swsbg_one",
      name: 'swsbg_one',
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lsswsbgmcxk/swsbg_one'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/swsbg_two",
      name: 'swsbg_two',//律师事务所（分所）变更名称许可
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lsswsbgmcxk/swsbg_two'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/swsbg_three",
      name: 'swsbg_three',//律师事务所（分所）变更名称许可
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lsswsbgmcxk/swsbg_three'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/swsbg_four",
      name: 'swsbg_four',//律师事务所（分所）变更名称许可
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lsswsbgmcxk/swsbg_four'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/swsbg_five",
      name: 'swsbg_five',//律师事务所（分所）变更名称许可
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lsswsbgmcxk/swsbg_five'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/bgzcxk_one",
      name: '律师事务所（分所）变更章程许可',
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lsswsbgzcxk/bgzcxk_one'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/bgzcxk_two",
      name: 'bgzcxk_two',//律师事务所（分所）变更章程许可
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lsswsbgzcxk/bgzcxk_two'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/bgzcxk_three",
      name: 'bgzcxk_three',//律师事务所（分所）变更章程许可
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lsswsbgzcxk/bgzcxk_three'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/bgzcxk_four",
      name: 'bgzcxk_four',//律师事务所（分所）变更章程许可
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lsswsbgzcxk/bgzcxk_four'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/bgzcxk_five",
      name: 'bgzcxk_four',//律师事务所（分所）变更章程许可
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lsswsbgzcxk/bgzcxk_five'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/bghhxyxk_one",
      name: '律师事务所变更合伙协议许可',
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lsswsbghhxyxk/bghhxyxk_one'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/bghhxyxk_two",
      name: 'bghhxyxk_two',//律师事务所变更合伙协议许可
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lsswsbghhxyxk/bghhxyxk_two'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/bghhxyxk_three",
      name: 'bghhxyxk_three',//律师事务所变更合伙协议许可
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lsswsbghhxyxk/bghhxyxk_three'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/bghhxyxk_four",
      name: 'bghhxyxk_four',//律师事务所变更合伙协议许可
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lsswsbghhxyxk/bghhxyxk_four'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/bghhxyxk_five",
      name: '律师事务所变更合伙协议许可',
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lsswsbghhxyxk/bghhxyxk_five'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/bgfzrxk_one",
      name: '律师事务所（分所）变更负责人许可',
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lsswsbgfzrxk/bgfzrxk_one'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/bgfzrxk_two",
      name: 'bgfzrxk_two',//律师事务所（分所）变更负责人许可
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lsswsbgfzrxk/bgfzrxk_two'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/bgfzrxk_three",
      name: 'bgfzrxk_three',//律师事务所（分所）变更负责人许可
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lsswsbgfzrxk/bgfzrxk_three'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/bgfzrxk_four",
      name: 'bgfzrxk_four',//律师事务所（分所）变更负责人许可
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lsswsbgfzrxk/bgfzrxk_four'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/bgfzrxk_five",
      name: '律师事务所（分所）变更负责人许可',
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lsswsbgfzrxk/bgfzrxk_five'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/zzls_one",
      name: '专职律师变更执业类别许可 ',
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/zzlsbgzylbxk/zzls_one'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/zzls_two",
      name: '专职律师变更执业类别许可 ',
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/zzlsbgzylbxk/zzls_two'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/zzls_three",
      name: 'zzls_three',//专职律师变更执业类别许可
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/zzlsbgzylbxk/zzls_three'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/zyzszx_one",
      name: '律师执业证书注销许可',
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lvzyzszxxk/zyzszx_one'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/zyzszx_two",
      name: '律师执业证书注销许可',
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lvzyzszxxk/zyzszx_two'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/zyzszx_three",
      name: '律师执业证书注销许可',
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lvzyzszxxk/zyzszx_three'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/zyzszx_four",
      name: '律师执业证书注销许可',
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lvzyzszxxk/zyzszx_four'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/zyzszx_five",
      name: '律师执业证书注销许可',
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lvzyzszxxk/zyzszx_five'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/lsbgzyjg_one",
      name: 'lsbgzyjg_one',//律师变更执业机构许可
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lsbgzyjgxk/lsbgzyjg_one'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/lsbgzyjg_two",
      name: 'lsbgzyjg_two',
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lsbgzyjgxk/lsbgzyjg_two'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/lsbgzyjg_three",
      name: 'lsbgzyjg_three',//律师变更执业机构许可
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lsbgzyjgxk/lsbgzyjg_three'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/gat_bgxm",
      name: 'gatBgxm',
      component: resolve => require(['@/pages/ProjectPhaseOne/gonganting/gat_bgxm'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/residencePermitApply",
      name: 'residencePermitApply',
      component: resolve => require(['@/pages/ProjectPhaseOne/publicSecurityDepartment/ResidencePermitTransact/ResidencePermitApply'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/TemporaryResidentialPermitTransact",
      name: 'TemporaryResidentialPermitTransact',
      component: resolve => require(['@/pages/ProjectPhaseOne/publicSecurityDepartment/TemporaryResidentialPermitTransact/TemporaryResidentialPermitTransact'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/TemporaryResidentialPermitReapply",
      name: 'TemporaryResidentialPermitReapply',
      component: resolve => require(['@/pages/ProjectPhaseOne/publicSecurityDepartment/TemporaryResidentialPermitTransact/TemporaryResidentialPermitReapply'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/bgmcxk_three",
      name: 'bgmcxk_three',
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lsswsbgmcxk/bgmcxk_child/bgmcxk_three'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/bgmcxk_four",
      name: 'bgmcxk_four',
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/lsswsbgmcxk/bgmcxk_child/bgmcxk_four'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/sfResultPage",
      name: 'sfResultPage',
      component: resolve => require(['@/pages/ProjectPhaseOne/sifating/sfResultPage'],resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/privacyPolicy",
      name: 'privacyPolicy',//技术支持
      component: resolve => require(['@/pages/ProjectPhaseOne/Technicalsupport/privacyPolicy'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    {
      path: "/Technicalsupport_two",
      name: 'Technicalsupport_two',//技术支持
      component: resolve => require(['@/pages/ProjectPhaseOne/Technicalsupport/Technicalsupport_two'],resolve),
      meta: {
        keepAlive: false // 需要被缓存
      }
    },
    ...wjw,
    ...zzlsRouter,
    ...socialHotpoint,
    ...wuliu,
    ...swj,
    ...jyt,
    ...CZT,
    ...Opinion,
    ...settleRouter,
    ...affairsMonitor,
    ...convenient,
    ...reapply,
    ...medicalInsurance,
    ...AICrotuer,
    ...ybjRouter,
    ...SCJDGLJ,
    ...zjtRouter
  ]
})
