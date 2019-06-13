<template>
  <div class="index-page">
    <towtop name="办事类型选择"/>
    <div class="container">
      <div class="item" v-for="(item, index) in itemData" :key="index"
           @click="jumpNext(item.jumpRoute)">
        <img class="icon" :src="item.img" alt="">
        <span class="label">{{item.text}}</span>
      </div>
    </div>

  </div>
</template>

<script>
  import towtop from '@/components/HederTwo.vue'
  import $ajaxRequest from '@/utils/ajaxRequest'
  import {
         Toast
  } from 'mint-ui';
  export default {
    data() {
      return {
        itemData: [
          {
            img: require('@/assets/images/AIC/ico_wei@2x.png'),
            text: '未核准名称登记',
            jumpRoute: 'namereg'
          },
          {
            img: require('@/assets/images/AIC/ico_yi@2x.png'),
            text: '已核准名称登记',
            jumpRoute: 'haveApproved'
          },
        ]

      }
    },
    components: {
      towtop
    },
    methods: {
      jumpNext(data) {
        console.log(data);
        if (data == 'namereg') {
          sessionStorage.ishave = 0
        } else {
          sessionStorage.ishave = 1
        }

        this.$router.push({name: data})
      }
    },
    beforeRouteEnter(to, from, next) {
//    sessionStorage.userphone = '177375108'
//      sessionStorage.username = '王亚磊'
//      sessionStorage.cardid ='410182199402160339'
//      sessionStorage.matterid ='265bc3ee8157495ea839df4b6cb7cb72'
//      sessionStorage.WorkId = '0968c132b8bfebf8530ee4ce929bfe0'
//      sessionStorage.userid='c87a75d122bf43b085ac9f962415bc64'
//  	if(!sessionStorage.gsUserId){
//  		sessionStorage.gsUserId =sessionStorage.userid
//  	}
//    next(vm => {
      console.log(to, sessionStorage)
      $ajaxRequest('post', '/gsp/mng90049', {
        'txnBodyCom': {
          'chann_id': '1',
          'mobile_phone': sessionStorage.userphone,
          'name': sessionStorage.username,
          'id_card': sessionStorage.cardid
        }
      },null,(res)=>{
      	console.log(res)
      	if(res.data['C-API-Status']=='00'){
      		let islogin =JSON.parse(res.data['C-Response-Body']) 
      			sessionStorage.gsUserId =islogin.user_id
      		     if (islogin ['is_registered'] == '1') {
      		   
            next()
          } else {
            next('/noapproved')
          }
      	}else{
      		      Toast({
              message: res.data['C-Response-Desc'],
              duration: 2000
            });
      	}
      })
        .then((res) => {
          console.log(res,'进来了')
          sessionStorage.gsUserId = res.user_id
          if (res['is_registered'] == '1') {
            next()
          } else {
            next('/noapproved')
          }
          //next('/stuffIndex')
        })
//      }
//    )
    }
  }
</script>

<style lang="less" scoped>
  .index-page {
    display: flex;
    flex-direction: column;

    .container {
      flex: 1;
      padding: 0.36rem;

      .item {
        padding: 0 0.58rem;
        height: 1.6rem;
        width: 100%;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 0.4rem;
        border-radius: 5px;

        .icon {
          height: 0.64rem;
          width: 0.64rem;
        }

        .label {
          display: inline-block;
          margin-left: 0.26rem;
          font-family: PingFangSC-Medium;
          font-size: 15px;
          color: #000000;
          letter-spacing: -0.36px;
        }
      }

    }
  }

</style>

