<template>
  <div class="basic-info-page">
    <towtop name="基本信息"/>
    <div class="container">
      <div class="content-item">
        <p class="title">申请人信息</p>
        <div class="form-box">
          <div class="form-item show">
            <p class="label">
              <span class="star">*</span>
              申请人
            </p>
            <p class="content-text">{{name}}</p>
          </div>
          <div class="form-item show">
            <p class="label">
              <span class="star">*</span>
              证件类型
            </p>
            <p class="content-text">中华人名共和国居民身份证</p>
          </div>
          <div class="form-item show">
            <p class="label">
              <span class="star">*</span>
              证件号码
            </p>
            <p class="content-text">{{idCard}}</p>
          </div>
          <div class="form-item show">
            <p class="label">
              <span class="star">*</span>
              联系电话
            </p>
            <p class="content-text">{{phone}}</p>
          </div>
          <div class="form-item show">
            <p class="label">
              <span class="star">*</span>
              营业执照领取方式
            </p>
            <p class="content-text">到登记机关窗口领取</p>
          </div>
        </div>
      </div>

      <div class="content-item">
        <p class="title">个体基本信息</p>
        <div class="form-box">
          <div class="form-item select">
            <p class="label">
              <span class="star">*</span>
              组成形式
            </p>
            <div class="content" @click="open('pickerselect01')">
              <p class="text" :class="orgType ? '': 'default'" type="text">{{orgType ? orgType.text : '请选择'}}</p>
              <span class="arrow">></span>
            </div>
          </div>

          <div class="form-item input">
            <p class="label">
              <span class="star">*</span>
              从业人数（人）
            </p>
            <input type="number" class="content-input" v-model="peopleNum" placeholder="请输入从业人数（单位:人）"/>
          </div>

          <div class="form-item input">
            <p class="label">
              <span class="star">*</span>
              资金数额（万元）
            </p>
            <input @blur="moneyBlur" type="number" class="content-input" v-model="money" placeholder="请输入资金数额（单位:万元）"/>
          </div>
          <div class="form-item">
            <p class="label">
              <span class="star">*</span>
              城乡标志
            </p>
            <div class="content" @click="open('pickerselect02')">
              <p class="text" :class="symbol ? '': 'default'" type="text">{{symbol ? symbol.text : '请选择'}}</p>
              <span class="arrow">></span>
            </div>
          </div>
          <div class="form-item show">
            <p class="label">
              <span class="star">*</span>
              联系电话
            </p>
            <p class="content-text">{{phone}}</p>
          </div>
          <div class="form-item input">
            <p class="label">
              <span class="star">*</span>
              邮编
            </p>
            <input class="content-input" v-model="postcode" placeholder="请输入邮编"/>
          </div>
        </div>
      </div>
    </div>
    <p class="btn-next" @click="nextFn">下一步</p>
    <Huiselect
      ref="pickerselect01"
      position="bottom"
      :dataslots="orgParam"
      class="example-select_item"
      @confirms="selectConfirm01"
    ></Huiselect>
    <Huiselect
      ref="pickerselect02"
      position="bottom"
      :dataslots="symParam"
      class="example-select_item"
      @confirms="selectConfirm02"
    ></Huiselect>
  </div>
</template>

<script>
  import towtop from '@/components/HederTwo.vue'

  export default {
    data() {
      return {
        username: '',
        name: '',
        idCard: '',
        phone: '',
        work_id: '',
        symbol: '',
        orgType: '',
        peopleNum: '',
        money: '',
        postcode: '',
        uid: '',
        matterid: '',
        sendFlag: false,
        orgParam: [{
          flex: 1,
          values: [
            {
              text: '个人经营',
              value: 1
            }
          ],
          showText: 'text',
          className: 'slot1',
        }],
        symParam: [{
          flex: 1,
          values: [
            {
              text: '城镇',
              value: 1
            },
            {
              text: '乡村',
              value: 2
            }
          ],
          showText: 'text',
          className: 'slot1',
        }],
      }
    },
    components: {
      towtop
    },
    created() {
      this.username = window.sessionStorage.getItem('username')
      this.uid = window.sessionStorage.getItem('userid')
      this.matterid = window.sessionStorage.getItem('matterid')
      this.work_id = window.sessionStorage.getItem('WorkId')
      let data = {
        txnBodyCom: {
          'mobile_phone': sessionStorage.userphone,
          'name': this.username,
          'id_card': sessionStorage.cardid,
          /*'mobile_phone': '13900000016',
          'name': 'whx',
          'id_card': '4101090199002010005',*/
          'matter_id': this.matterid,
        }
      }
      this.$ajaxRequest('post', '/gsp/mng90049', data)
        .then(res => {
          console.log(res);
          if (res.name) {
            this.name = res.name
            window.sessionStorage.setItem('sqrname', res.name)
          }
          this.idCard = res.id_card ? res.id_card : ''
          this.phone = res.mobile_phone ? res.mobile_phone : ''
        })
        .catch(error => {
          console.log(error)
        })
    },
    methods: {
      selectConfirm01(value) {
        this.orgType = value[0]
      },
      selectConfirm02(value) {
        this.symbol = value[0]
      },
      open(picker) {
        this.$refs[picker].open();
        document.activeElement.blur();
        $('.hui-popup').on('touchmove', function (event) {
          event.preventDefault()
          event.stopPropagation()
        })
      },
      moneyBlur() {
        if(this.money>100){
          this.$messagebox('您输入的金额大于100万元,请确认')
        }
      },
      nextFn() {
        if (this.orgType === '') {
          this.$toast('请选择组成形式')
          return false
        } else if (!this.peopleNum) {
          this.$toast('请填写从业人数')
          return false
        } else if (!/^[0-9]*$/.test(this.peopleNum)) {
          this.$toast('从业人数请填写数字')
          return false
        } else if (!this.money) {
          this.$toast('请填写资金数额')
          return false
        } else if (!/^[0-9]*$/.test(this.peopleNum)) {
          this.$toast('资金数额请填写数字')
          return false
        } else if (!this.symbol) {
          this.$toast('请选择城乡标志')
          return false
        } else if (!this.postcode || !(/^[0-9]{6}$/.test(this.postcode))) {
          this.$toast('请填写正确的邮编')
          return false
        }
        if (this.sendFlag) {
          this.$toast('数据已提交,请稍后')
          return false
        }
        this.sendFlag = true
        let dataSave = {
          txnBodyCom: {
            page: '4',
            work_id: this.work_id,
//          work_id: 'afdbdcde58ae4327b29322278da06f88',
            message: {
              matter_id: this.matterid,
              member_id: this.uid,
//            matter_id: '532d1a418dea49ac9c52bc84fb7c445d',
//            member_id: '4cef06d330c8412fa4f96975b149fddb',
              json_content: {
                work_id: this.work_id,
//              work_id: 'afdbdcde58ae4327b29322278da06f88',
                title: '基本信息',
                sqr: {
                  title: '申请人',
                  value: this.name
                },
                zjlx: {
                  title: '证件类型',
                  value: '中华人名共和国居民身份证'
                },
                zjhm: {
                  title: '证件号码',
                  value: this.idCard,
                },
                lxdh: {
                  title: '联系电话',
                  value: this.phone,
                },
                yyzzlqfs: {
                  title: '营业执照领取方式',
                  value: '到登记机关窗口领取',
                },
                zzxs: {
                  title: '组成形式',
                  value: this.orgType.title,
                  code: this.orgType.value,
                },
                cyrs: {
                  title: '从业人数（人）',
                  value: this.peopleNum,
                },
                zjsg: {
                  title: '资金数额（万元）',
                  value: this.money,
                },
                cxbz: {
                  title: '城乡标志',
                  value: this.symbol.title,
                  code: this.symbol.value,
                },
                yb: {
                  title: '邮编',
                  value: this.postcode,
                }
              }
            }
          }
        }
        this.$ajaxRequest('post', '/APPS/db/insert', dataSave)
          .then(res => {
            console.log(res);
            this.sendFlag = false
            if (res['C-API-Status'] && res['C-API-Status'] === '01') return false
            this.$router.push({
              path: '/siteBussiness', query: {
                areaId: this.$route.query.areaId,
                qxNum: this.$route.query.qxNum,
                industryPhy: this.$route.query.industryPhy,
                industryCode: this.$route.query.industryCode,
              }
            })
          })
          .catch(error => {
            this.sendFlag = false
            console.log(error)
          })
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../../assets/css/aic_common.less";

  .basic-info-page {
    .container {
      margin-bottom: 1rem;
      .content-item {
        .title {
          font-family: PingFangSC-Regular;
          font-size: 13px;
          color: #9B9B9B;
          letter-spacing: 0;
          text-align: left;
          padding: 0.24rem 0.36rem;
        }
      }
    }
  }
</style>

