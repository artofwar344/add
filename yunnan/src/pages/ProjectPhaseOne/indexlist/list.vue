<template>
	<div>
		<towtop :name="hadertow"/>
		<div id="explain" >
      <div v-if="flag==1">
        <router-link to='/marriageRegistrationQuery' tag='button' class='scl_but'>婚姻登记机关查询</router-link>
        <router-link to='/administrativeDivisionQuery' tag='button' class='scl_but'>行政区划查询</router-link>
        <router-link to='/reliefManagementQuery' tag='button' class='scl_but'>救助管理站查询</router-link>
        <router-link to='/service' tag='button' class='scl_but'>预约结婚登记</router-link>
      </div>
      <div v-if="flag==2">
        <router-link to='/entryExitQuery' tag='button' class='scl_but'>查询出入境办理进度搜索</router-link>
        <router-link to='/ResidencePermitQuery' tag='button' class='scl_but'>居住证查询</router-link>
        <router-link to='/examine' tag='button' class='scl_but'>申报材料自检</router-link>
        <router-link to='/Jrename' tag='button' class='scl_but'>重名查询</router-link>
        <router-link to='/pagework/1' tag='button' class='scl_but'>我的驾驶证二维码</router-link>
        <router-link to='/pagework/2' tag='button' class='scl_but'>我的行驶证二维码</router-link>
        <router-link to='/birthSettle/legitimate' tag='button' class='scl_but'>出生落户（婚生）</router-link>
        <router-link to='/birthSettle/illegitimateFather' tag='button' class='scl_but'>出生落户（非婚生随父落户）</router-link>
        <router-link to='/birthSettle/illegitimateMother' tag='button' class='scl_but'>出生落户（非婚生随母落户）</router-link>
        <router-link to='/purchaseSettle' tag='button' class='scl_but'>购房落户</router-link>
        <router-link to='/takeoverSettle' tag='button' class='scl_but'>接迁落户</router-link>
        <router-link to='/moveAway' tag='button' class='scl_but'>迁出省外</router-link>
        <router-link to='/graduateSettle/parents' tag='button' class='scl_but big'>毕业落户（拟登记在父（母）现常住户口登记地）</router-link>
        <router-link to='/graduateSettle/company' tag='button' class='scl_but big'>毕业落户（登记在单位集体户或人才服务机构集体户）</router-link>
        <router-link to='/graduateSettle/residence' tag='button' class='scl_but big'>毕业落户（拟登记在实际居住地）</router-link>
        <router-link to='/jobSettle' tag='button' class='scl_but'>就业落户</router-link>
        <router-link to='/rentSettle' tag='button' class='scl_but'>租房落户</router-link>
        <router-link to='/domesticOne' tag='button' class='scl_but'>出入境证件预受理</router-link>
        <router-link to='/passportFive' tag='button' class='scl_but'>出国境证件预约</router-link>
      </div>
      <div v-if="flag==3">
        <button @click="tolink('http://www.yngs.gov.cn/taxSearch_db.jsp')" class='scl_but'>通用机打发票流向查询</button>
        <button @click="tolink('http://www.yngs.gov.cn/taxSearch_lx.jsp')" class='scl_but'>通用机打发票信息查询</button>
        <button @click="tolink('http://inv-veri.chinatax.gov.cn/')" class='scl_but'>增值税发票查验</button>
        <router-link to='/taxOne' tag='button' class='scl_but'>纳税信用A级纳税人查询</router-link>
        <router-link to='/yuyuebanshui_one' tag='button' class='scl_but'>预约办税</router-link>
      </div>
      <div v-if="flag==4">
        <router-link to='/law' tag='button' class='scl_but'>律所查询</router-link>
        <router-link to='/lawyerQuery' tag='button' class='scl_but'>律师查询</router-link>
        <router-link to='/fullLaw' tag='button' class='scl_but'>专职律师变更执业类别许可</router-link>
        <router-link to='/partLaw' tag='button' class='scl_but'>兼职律师变更执业类别许可</router-link>
        <router-link to='/publicLaw' tag='button' class='scl_but'>公职律师变更执业类别许可</router-link>
        <router-link to='/companyLaw' tag='button' class='scl_but'>公司律师变更执业类别许可</router-link>
        <router-link to='/aidLaw' tag='button' class='scl_but'>法援律师变更执业类别许可</router-link>
        <router-link to='/lsbgzyjg_one' tag='button' class='scl_but'>律师变更执业机构许可（省内变更）</router-link>
        <router-link to='/zyzszx_one' tag='button' class='scl_but'>律师执业证书注销许可</router-link>
        <router-link to='/swsbg_one' tag='button' class='scl_but'>律师事务所（分所）变更名称许可</router-link>
        <router-link to='/bgmcxk_three' tag='button' class='scl_but'>律师事务所（分所）变更名称许可2</router-link>
      </div>
      <div v-if="flag==5">
        <router-link to='/governmentOne' tag='button' class='scl_but'>工程建设招标公告查询</router-link>
        <router-link to='/landrepeat' tag='button' class='scl_but'>土地使用权出让成交结果查询</router-link>
        <router-link to='/miningOne' tag='button' class='scl_but'>矿业权出（转）让成交结果查询</router-link>
        <router-link to='/land' tag='button' class='scl_but'>土地使用权出让公告查询</router-link>
        <router-link to='/stateowned' tag='button' class='scl_but'>国有产权成交结果查询</router-link>
        <router-link to='/buildingOne' tag='button' class='scl_but'>政府采购采购公告查询</router-link>
        <router-link to='/candidateQuery' tag='button' class='scl_but'>工程建设中标候选人查询</router-link>
        <router-link to='/BidtowinthebidOne' tag='button' class='scl_but'>政府采购中标查询</router-link>
        <router-link to='/miningNoteOne' tag='button' class='scl_but'>矿业权出（转）让公告查询</router-link>
        <router-link to='/projectCheck' tag='button' class='scl_but'>工程建设中标结果查询</router-link>
        <router-link to='/stateTransOne' tag='button' class='scl_but'>国有产权出让公告</router-link>
        <router-link to='/buildingResultOne' tag='button' class='scl_but'>政府采购结果公告</router-link>
      </div>
      <div v-if="flag==6">
        <router-link to='/remember' tag='button' class='scl_but'>会计考试成绩查询</router-link>
      </div>
      <div v-if="flag==7">
       <router-link class="scl_but" :to="{ path: '/aroundMe'}">我身边的场馆</router-link>
     </div>
     <div v-if="flag==8">
      <button @click="education()" class='scl_but'>普通话水平测试成绩等级查询</button>
      <router-link to='/ExaminationScore' tag='button' class='scl_but'>普通高考成绩查询</router-link>
      <router-link to='/teacherScore' tag='button' class='scl_but'>高级教师资格证笔试成绩查询</router-link>
      <router-link to='/examAdmission' tag='button' class='scl_but'>普高录取查询</router-link>
      <router-link to='/englishListen' tag='button' class='scl_but'>高考英语听力成绩查询</router-link>
      <router-link to='/graduateExam' tag='button' class='scl_but'>硕士研究生初试成绩查询</router-link>
      <router-link to='/proHighAdmission' tag='button' class='scl_but'>中职、五年制高职招生录取查询</router-link>
      <router-link to='/selfExamScore' tag='button' class='scl_but'>自学考试成绩查询</router-link>
      <router-link to='/adultExamScore' tag='button' class='scl_but'>云南省成人高考成绩查询</router-link>
      <router-link to='/adultExamAdmit' tag='button' class='scl_but'>云南省成人高考录取结果查询</router-link>
    </div>
    <div v-if="flag==9">
      <router-link to='/statisticalOne?statisticsflag=1' tag='button' class='scl_but'>统计局地州社会消费品零售总额</router-link>
      <router-link to='/statisticalOne?statisticsflag=2' tag='button' class='scl_but'>云南省GDP年度数据查询</router-link>
      <router-link to='/statisticalOne?statisticsflag=3' tag='button' class='scl_but'>云南省年末总人口年度数据查询</router-link>
      <router-link to='/statisticalOne?statisticsflag=4' tag='button' class='scl_but'>云南省社会消费品零售总额年度数据查询</router-link>
      <router-link to='/statisticalOne?statisticsflag=5' tag='button' class='scl_but'>云南省全部职工平均工资年度数据查询</router-link>
      <router-link to='/statisticalOne?statisticsflag=6' tag='button' class='scl_but'>地州GDP年度数据查询</router-link>
      <router-link to='/statisticalOne?statisticsflag=7' tag='button' class='scl_but'>地州总人口年度数据查询</router-link>
    </div>
    <div v-if="flag==10">
      <router-link to='/medicineOne' tag='button' class='scl_but'>食品生产许可获证企业查询</router-link>
    </div>
    <div v-if="flag==11">
      <router-link to='/specialEquipmentQuery?typenumber=1' tag='button' class='scl_but'>特种设备安全管理人员证查询</router-link>
      <router-link to='/specialEquipmentQuery?typenumber=2' tag='button' class='scl_but'>特种设备作业人员证查询</router-link>
      <router-link to='/specialEquipment' tag='button' class='scl_but'>特种设备安全管理人员补证</router-link>
    </div>
    <div v-if="flag==12">
      <router-link to='/fundOne' tag='button' class='scl_but'>公积金明细查询</router-link>
      <router-link to='/gongjijin' tag='button' class='scl_but'>账户查询</router-link>
      <router-link to='/submit' tag='button' class='scl_but'>借贷查询</router-link>
    </div>
    <div v-if="flag==13">
      <router-link to='/unitBasicInfo' tag='button' class='scl_but'>用人单位比例安排残疾人就业年审</router-link>
    </div>
    <div v-if="flag==14">
      <router-link to='/cehuiju' tag='button' class='scl_but'>测绘局</router-link>
    </div>
    <div v-if="flag==15">
      <router-link to='/Cardquery' tag='button' class='scl_but'>持卡情况查询</router-link>
      <router-link to='/recruit' tag='button' class='scl_but'>人社厅-招聘</router-link>
      <router-link to='/sybxjfmx' tag='button' class='scl_but'>失业保险保险缴费明细</router-link>
      <router-link to='/rensheting' tag='button' class='scl_but'>职工养老保险缴费明细</router-link>
      <router-link to='/rensheting1' tag='button' class='scl_but'>云南省基本养老保险参保缴费证明</router-link>
    </div>
    <div v-if="flag==16">
      <router-link to='/build?name=10' tag='button' class='scl_but'>工程监理企业资质查询</router-link>
      <router-link to='/build?name=11' tag='button' class='scl_but'>建筑施工企业安全生产许可证查询界面</router-link>
      <router-link to='/build?name=12' tag='button' class='scl_but'>建筑施工企业资质查询界面</router-link>
      <router-link to='/build?name=13' tag='button' class='scl_but'>施工图审查机构查询界面</router-link>
    </div>
    <div v-if="flag==17">
      <router-link to='/sbreak' tag='button' class='scl_but'>严重违法失信企业名单查询</router-link>
    </div>
    <div v-if="flag==18">
      <router-link to='/investmentProjects' tag='button' class='scl_but'>投资项目办件进度查询</router-link>
    </div>
    <div v-if="flag==19">
      <router-link to='/search' tag='button' class='scl_but'>云南省公共体育场馆查询</router-link>
      <router-link to='/searchwelfare' tag='button' class='scl_but'>云南省公益性体育赛事查询</router-link>
    </div>
    <div v-if="flag==20">
      <router-link to='/essentialPublicHealthQuery' tag='button' class='scl_but'>国家基本公共卫生服务项目查询</router-link>
      <router-link to='/BasicPublicServicesAroundQuery' tag='button' class='scl_but'>身边的基本公共卫生服务中心查询</router-link>
      <router-link to='/listone' tag='button' class='scl_but'>壹孩生育服务登记</router-link>
      <router-link to='/Erlistone' tag='button' class='scl_but'>生育服务登记-贰孩生育服务登记</router-link>
    </div>
  </div>
</div>
</template>

<script>
import towtop from "../../../components/HederTwo";

export default {
  name: "explain",
  data() {
    return {
      flag: "",
      arr: "",
      show: false,
      hadertow: "事项指南"
    };
  },
  components: {
    towtop
  },
  watch: {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return {
          x: 0,
          y: 0
        };
      }
    }
  },
  mounted() {
    this.flag = this.$route.query.flag;
  },
  methods: {
    education() {
      this.$router.push({
        name: "Education",
        params: {
          titlename: "普通话水平测试成绩等级查询",
          name: "姓名",
          number: "身份证号/准考证号",
          placeholdername: "请输入姓名",
          placeholdernumber: "请输入证件号码"
        }
      });
    },
    tolink(e) {
      window.location.href = e;
    }
  }
};
</script>
<!--Add "scoped" attribute to limit CSS to this component only-->
<style lang="less" scoped>
#explain {
  padding: 0 0.3rem;
  li {
    height: 0.5rem;
    line-height: 0.5rem;
    padding: 0 0.1rem;
    text-align: left;
    font-size: 0.24rem;
    border-bottom: 1px solid #ccc;
  }
}
.scl_but {
  display: block;
  width: 5.9rem;
  height: 0.9rem;
  line-height: 0.9rem;
  color: #fff;
  background: #2d7ffc;
  margin: 0 auto;
  border-radius: 0.5rem;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  font-size: 0.32rem;
}
.scl_but.big {
  height: 1.8rem;
}
</style>


