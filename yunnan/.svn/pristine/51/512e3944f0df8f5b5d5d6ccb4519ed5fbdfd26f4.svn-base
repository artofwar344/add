<template>
  <div class="ResidencePermitApply">
    <myheader :my-header="headerData"></myheader>
    <div class="ResidencePermitApplyContent">
      <Tabs box=".ResidencePermitApplyContent" :fixed = "true" :value="tabData.activeTab" :animated="false" @on-click="tab">
        <Pane
          :label="menu.label"
          :disabled="menu.disabled"
          v-for="(menu,index) in tabData.menus"
          :key="index">
          <getJobPage v-if="index===0" :page-data="tabData.contents[index]"></getJobPage>
          <dwellPage v-if="index===1" :page-data="tabData.contents[index]"></dwellPage>
          <attendPage v-if="index===2" :page-data="tabData.contents[index]"></attendPage>
        </Pane>
      </Tabs>
    </div>
    
  </div>
</template>
<script>
import myheader from '@/components/header/header'
import getJobPage from './page/getJob'
import dwellPage from './page/dwell'
import attendPage from './page/attend'
export default {
  data: function () {
    return {
      headerData: {
        title: '申领居住证',
        backUrl: '/'
      },
      tabData: {
        activeTab: 0,
        menus: [
          {
            label: '就业',
            name: 'obtainEmployment ',
            disabled: false
          }, {
            label: '居住',
            name: 'dwell',
            disabled: false
          }, {
            label: '就读',
            name: 'dwell',
            disabled: false
          }
        ],
        contents: [
          {
            title: '以合法稳定就业为由申领：工商营业执照（原件或复印件）或劳动合同、用人单位出具的劳动关系证明或者其他其他能够证明有合法稳定就业的材料证明的材料原件'
          }, {
            title: '以合法稳定住所为由申领：房屋租赁合同、房屋产权证明文件、购房合同或者房屋出租人、用人单位、就读学校出具的住宿证明等材料原件或者复印件'
                    // 以合法稳定住所为由申领：房屋租赁合同、房屋产权证明文件、购房合同或者房屋出租人、用人单位、就读学校出具的住宿证明等材料原件或者复印件
          }, {
            title: '以连续就读为由申领：学生证、就读学校出具的其他能证明连续就读的材料原件或复印件'
          }
        ]
      },
      pageData: '',

    }
  },
  mounted () {
    // this.tab(Number(this.$route.query.index));
  },
  computed: {},
  created() {
    const matterid = window.sessionStorage.getItem("matterid")
    this.tabData.activeTab = parseInt(this.$route.query.index)
  },
  components: {
    myheader,
    getJobPage,
    dwellPage,
    attendPage,
  },
  methods: {
    tab (index) {
      const _self = this
      _self.tabData.activeTab = index
    },
    setShow(){
       this.isShow = false;
    },
    openImg(data){
      console.log(data)
      this.isShow = true;
      this.currentImgUrl  = data;
    },
  }
}
</script>

<style>
  html,body,#app{min-height: 100%}
  .ResidencePermitApplyContent .hui-tabs_bar {
    background-color: #fff;
  }
  .ResidencePermitApplyContent .hui-tabs_navWrap{
  background: #fff !important ;
}
</style>

<style lang='less' scoped>
  .ResidencePermitApply{
    background: #eee;
  }

.hui-tabs_inkbar{
  width: 33.3% !important;
}
.hui-tabs_nav{
  width: 100% !important;
  display: flex !important;
}
.hui-tabs_tab{
  flex: 1;
}
</style>
