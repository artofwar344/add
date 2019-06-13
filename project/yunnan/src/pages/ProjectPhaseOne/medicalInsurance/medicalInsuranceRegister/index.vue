<template>
  <div class="medicalInsuranceIndex">
    <towtop :name="titlename"/>
    <div class="erwema">
      <ul v-if="state == undefined">
        <li class="clearfix" @click="goto('one')">
          <div class="left">
            <img :src="placeDomicileIcon" alt="" width="90px" height="65px">
            <p>未成年人子女参保</p>
          </div>
        </li>
      </ul>
       <ul v-if="state == 2">
        <li class="clearfix" @click="goto('two')">
          <div class="left">
            <img :src="placeDomicileIcon" alt="" width="90px" height="65px">
            <p>以子女户籍地参保</p>
          </div>
        </li>
      </ul>
       <ul v-if="state == 3">
        <li class="clearfix" @click="goto('nonageChild')">
          <div class="left">
            <img :src="placeDomicileIcon" alt="" width="90px" height="65px">
            <p>父/母与子女同一户口簿上</p>
          </div>
        </li>
      </ul>
      <ul>
        <li class="reminder">
          <h4>温馨提示</h4>
          <p>目前APP端只开通未成年人户籍地基本医疗保险参保登记办理</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import towtop from '../../../../components/HederTwo'
import placeDomicileIcon from '@/assets/images/medicalInsurance/placeDomicileIcon.png'
import placeResidenceIcon from '@/assets/images/medicalInsurance/placeResidenceIcon.png'
export default {
  data () {
    return {
      titlename: '医疗保险参保登记',
      placeDomicileIcon,
      placeResidenceIcon,
    }
  },
  components: {
    towtop,
  },
  created () {
      
  },
  computed:{
    state: {
      get() {
        return this.$route.query.state
      },
      set(val){
        return val
      }
    }
  },
  watch: {},
  methods: {
    goto (address) {
      const _self = this;
      let params;
      let opt
      switch(address){
        case "one" :
          opt = {
            path: '/medicalInsuranceIndexTwo',
            name: '医疗参保登记二级导航',
            query: {
              state:"2"
            }
          }
        break;
        case "two" :
          opt = {
            path: '/medicalInsuranceIndexThree',
            name: '医疗参保登记三级导航',
            query: {
              state:"3"
            }
          }
        break;
        case "nonageChild" :
          opt = {
            path: '/MIPersonalInformation',
            name: '参保个人信息登记',
            params: {
              SlfSvcInsrdLndSelMode:"1",
              SlfSvcInsrd_DealW_Mod:"21",
            }
          }  
        break;
        default:
        break;
      } 
      _self.$router.push(opt)
    }
  }
}
</script>
<style scoped lang="less">
  body {
    background-color: #202121
  }
  .medicalInsuranceIndex {
    .header {
      position: relative;
      width: 100%;
      height: 0.8rem;
      background-color: #ccc;
      text-align: center;
      .title {
        height: 100%;
        line-height: 0.8rem;
        display: inline-block;
        font-size: 0.4rem;
        margin: 0 auto;
      }
      a {
        position: absolute;
        top: 0.2rem;
        left: 0.2rem;
        font-size: 0.4rem;
        color: #2c3e50;
      }
    }
    .erwema {
      width: 100%;
      ul {
        text-align: center;
        li {
          &:after{
            content: ".";
            display: block;
            height: 0;
            clear: both;
            visibility: hidden
          }
          border-radius: 10px;
          width: 80%;
          margin: 0.5rem auto;
          background-color: #fff;
          padding: .4rem .2rem;
          .left {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            width: 100%;
            float: left;
            text-align: center;
            img {
              margin: 0 .5rem 0 .5rem;
              width: .65rem;
              height: .65rem;
            }
            p {
              font-size: .35rem;
              font-weight: 700;
              line-height: .65rem;
            }
          }
        }
        .reminder {
          background: #E4E7EA;
          text-align: left;
          h4{font-size: .3rem;margin-bottom: .24rem;border-left: .06rem solid #257BFF;padding-left: .16rem;}
          p{font-size: .24rem;}
        }
      }
    }
  }
</style>
<style>
.medicalInsuranceIndex .erwema ul li .left img{
      margin: 0 0.2rem 0 0.5rem !important;
}
</style>
