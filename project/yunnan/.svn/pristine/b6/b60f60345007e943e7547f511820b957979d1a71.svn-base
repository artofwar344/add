<template>
  <div class="specialEquipmentDetails">
    <myheader :my-header="headerData"></myheader>
    <div class="SEDContent">
      <ul class="ALRDistrict">
        <li>
          <p>姓名</p><span>{{quertData.basic.name}}</span>
        </li>
        <li>
          <p>身份证号</p><span>{{quertData.basic.id_card}}</span>
        </li>
        <li>
          <p>证件编号</p><span>{{quertData.basic.acc_code}}</span>
        </li>
        <li>
          <p>档案编号</p><span>{{quertData.basic.files_code}}</span>
        </li>
        <li>
          <p>发证机关名称</p><span>{{quertData.basic.unit_name}}</span>
        </li>
      </ul>
      <ul v-for="list in quertData.exams">
        <li>
          <p>考试机构名称</p><span>{{list.exam_unit_name}}</span>
        </li>
        <li>
          <p>发证日期</p><span>{{list.acc_time}}</span>
        </li>
      </ul>
      <ul v-for="list in quertData.quals">
        <li class="fromTitle">
          <h3>考试合格项目</h3>
        </li>
        <li>
          <p>作业项目代号</p><span>{{list.task_project_code}}</span>
        </li>
        <li>
          <p>作业种类名称</p><span>{{list.task_type_name}}</span>
        </li>
        <li>
          <p>作业项目名称</p><span>{{list.task_project_name}}</span>
        </li>
        <li>
          <p>有效日期</p><span>{{list.eff_time}}</span>
        </li>
        <li>
          <p>打印日期</p><span>{{list.stamp_time}}</span>
        </li>
      </ul>
      <ul v-for="list in quertData.engages">
        <li class="fromTitle">
          <h3>聘用记录</h3>
        </li>
        <li>
          <p>聘用单位</p><span>{{list.engage_unit}}</span>
        </li>
        <li>
          <p>聘用项目</p><span>{{list.engage_project}}</span>
        </li>
        <li>
          <p>聘用周期</p><span>{{list.engage_period}}</span>
        </li>
        <li>
          <p>法定代表人</p><span>{{list.person}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/header'
export default {
  data () {
    return {
      headerData: {
        title: '特种设备安全管理人员详情',
        backUrl: '/specialEquipmentQuery'
      },
      quertData: {},
    }
  },
  components: {
    myheader: Header
  },
  mounted(){
    this.quertData=this.$route.query.queryParams;
    console.log(this.quertData);
    if (this.$route.query.typenumber == "1") {
      this.headerData.title = "特种设备安全管理人员证查询";
    } else if (this.$route.query.typenumber == "2") {
      this.headerData.title = "特种设备作业人员证查询";
    }
    
  }
}
</script>



<style scoped="specialEquipment" lang="less">
html,body{height:100%;}
  .hui-field_core {
    text-align: right
  }
  .specialEquipmentDetails{
    height:100%;background: #eee;
    ul{
      margin: .2rem 0;
      .fromTitle{min-height:.64rem;line-height: .64rem;font-size: .24rem;background: #eee;border: none}
      li{
        min-height: 1.1rem;
        background: #fff;
        padding: 0 .36rem;
        display:flex;
        justify-content: space-between;
        h3{text-align: left;font-size: .28rem;color:#999;}
        p{
          text-align: left;line-height:1rem;font-size: .28rem;
          flex: 0 0 auto;
        }
        span{
            line-height:1rem;
            text-align: right;
            }
        p:after{content: '';display: block;clear: both;}
      }
    }
  }
</style>
