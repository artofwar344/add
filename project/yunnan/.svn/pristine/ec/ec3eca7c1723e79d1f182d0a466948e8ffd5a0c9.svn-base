<template>
  <div class="site-page">
    <towtop name="经营场所"/>
    <div class="container">
      <div class="form-box">
        <div class="form-item select">
          <p class="label">
            <span class="star">*</span>
            城市
          </p>
          <div class="content" @click="open('city')">
            <p class="text" :class="city ? '': 'default'" type="text">{{city ? city.text : '请选择城市'}}</p>
            <span class="arrow">></span>
          </div>
        </div>

        <div class="form-item select">
          <p class="label">
            <span class="star">*</span>
            区县
          </p>
          <div class="content" @click="open('county')">
            <p class="text" :class="county ? '': 'default'" type="text">{{county ? county.text : '请选择区县'}}</p>
            <span class="arrow">></span>
          </div>
        </div>

        <div class="form-item select">
          <p class="label">
            <span class="star">*</span>
            乡镇(街道办)
          </p>
          <div class="content" @click="open('jdbData')">
            <p class="text" :class="jdbData ? '': 'default'" type="text">{{jdbData ? jdbData.text : '请选择乡镇（街道办）'}}</p>
            <span class="arrow">></span>
          </div>
        </div>

        <div class="form-item select">
          <p class="label">
            <span class="star">*</span>
            居(村)委会
          </p>
          <div class="content" @click="open('committee')">
            <p class="text" :class="committee ? '': 'default'" type="text">{{committee ? committee.text :
              '请选择居（村）委会'}}</p>
            <span class="arrow">></span>
          </div>
        </div>

        <div class="form-item textarea">
          <p class="label">
            <span class="star">*</span>
            详细地址
          </p>
          <textarea @change="addressAutoFn" class="content-input" :row="2" v-model="address" placeholder="请输入详细地址"/>
        </div>
        <div class="form-item bsAddressTotal">
          <p class="label">
            <span class="star">*</span>
            经营场所
          </p>
          <p class="content-text">{{site}}</p>
        </div>
        <div class="form-item select">
          <p class="label">
            <span class="star">*</span>
            产权
          </p>
          <div class="content" @click="open('pickerselect05')">
            <p class="text" :class="equity ? '': 'default'" type="text">{{equity ? equity.text : '请选择'}}</p>
            <span class="arrow">></span>
          </div>
        </div>
      </div>
    </div>
    <p class="btn-next" @click="nextFn">下一步</p>

    <Huiselect
      ref="city"
      position="bottom"
      :dataslots="cityParam"
      class="example-select_item"
      @confirms="selectConfirm01"
    ></Huiselect>

    <Huiselect
      ref="county"
      position="bottom"
      :dataslots="countyParam"
      class="example-select_item"
      @confirms="selectConfirm02"
    ></Huiselect>

    <Huiselect
      ref="jdbData"
      position="bottom"
      :dataslots="jdbDataParam"
      class="example-select_item"
      @confirms="selectConfirm03"
    ></Huiselect>

    <Huiselect
      ref="committee"
      position="bottom"
      :dataslots="committeeParam"
      class="example-select_item"
      @confirms="selectConfirm04"
    ></Huiselect>

    <Huiselect
      ref="pickerselect05"
      position="bottom"
      :dataslots="dataParam"
      class="example-select_item"
      @confirms="selectConfirm05"
    ></Huiselect>

  </div>
</template>

<script>
  import towtop from '@/components/HederTwo.vue'

  export default {
    data() {
      return {
        city: '',
        county: '',
        jdbData: '',
        committee: '',
        address: '',
        site: '',
        equity: '',
        areaId: '',
        qxNum: '',
        uid: '',
        matterid: '',
        sendFlag: false,
        cityParam: [{
          flex: 1,
          values: [],
          showText: 'text',
          className: 'slot1',
        }],
        countyParam: [{
          flex: 1,
          values: [],
          showText: 'text',
          className: 'slot1',
        }],
        jdbDataParam: [{
          flex: 1,
          values: [],
          showText: 'text',
          className: 'slot1',
        }],
        committeeParam: [{
          flex: 1,
          values: [],
          showText: 'text',
          className: 'slot1',
        }],
        dataParam: [{
          flex: 1,//自有、租赁、无偿使用、其他
          values: [],
          showText: 'text',
          className: 'slot1',
        }],
      }
    },
    components: {
      towtop
    },
    created() {
      this.uid = window.sessionStorage.getItem('userid')
      this.matterid = window.sessionStorage.getItem('matterid')
      this.areaId = this.$route.query.areaId
      this.qxNum = this.$route.query.qxNum

      //获取市
      let data = {
        txnCommCom: {
          tStsTraceId: "110567890",
          txnIttChnlId: 'C0011234567890987654321',
          txnIttChnlCgyCode: 'AC02C001'
        },
        txnBodyCom: {
          oType: 'GSJ',
          parentCode: '530000'
        }
      }
      this.$ajaxRequest('post', '/gsp/mng19021', data)
        .then(res => {
          console.log(res);
          res.map((v) => {
            if (this.areaId !== '' && this.areaId === v.regnCode) {
              this.city = {
                text: v.regnNm,
                value: v.regnCode
              }
              if (this.qxNum) {
                let data2 = {
                  txnBodyCom: {
                    oType: 'GSJ',
                    areaCode: this.qxNum
                  }
                }
                this.$ajaxRequest('post', '/gsp/mng19021', data2)
                  .then(resqx => {
                    console.log(resqx);
                    this.county = {
                      text: resqx[0].regnNm,
                      value: resqx[0].regnCode
                    }
                  })
                  .catch(errorqx => {
                    console.log(errorqx)
                  })
              }
            }
            this.cityParam[0].values.push({
              text: v.regnNm,
              value: v.regnCode
            })
          })
        })
        .catch(error => {
          console.log(error)
        })
      //获取产权
      let data3 = {
        txnBodyCom: {
          oType: 'GSJ',
          parentId: '1035'
        }
      }
      this.$ajaxRequest('post', '/gsp/mng19019', data3)
        .then(res => {
          console.log('cq', res);
          res.map((v) => {//赋值假数据
            this.dataParam[0].values.push({value: v.cmnCd, text: v.cmnCdNm})
          })
        })
        .catch(errorqx => {
          console.log(errorqx)
        })
    },
    methods: {
      selectConfirm01(value) {
        if (this.city.value === value[0].value) {
          return false
        } else {
          this.county = ''
          this.jdbData = ''
          this.committee = ''
          this.address = ''
        }
        this.city = value[0]
        this.addressAutoFn()
      },
      selectConfirm02(value) {
        if (this.county.value === value[0].value) {
          return false
        } else {
          this.jdbData = ''
          this.committee = ''
          this.address = ''
        }
        this.county = value[0]
        this.addressAutoFn()
      },
      selectConfirm03(value) {
        if (this.jdbData.value === value[0].value) {
          return false
        }
        else {
          this.committee = ''
          this.address = ''
        }
        this.jdbData = value[0]
        this.addressAutoFn()
      },
      selectConfirm04(value) {
        if (this.jdbData.value === value[0].value) {
          return false
        }
        else {
          this.address = ''
        }
        this.committee = value[0]
        this.addressAutoFn()
      },
      selectConfirm05(value) {
        this.equity = value[0]
      },
      open(picker) {
        if (picker === 'county') {
          if (!this.city.value) return false
          let data = {
            txnBodyCom: {
              oType: 'GSJ',
              parentCode: this.city.value
            }
          }
          this.$ajaxRequest('post', '/gsp/mng19021', data)
            .then(res => {
              this.countyParam[0].values.splice(0)
              res.map((v) => {
                this.countyParam[0].values.push({
                  text: v.regnNm,
                  value: v.regnCode
                })
              })
            })
            .catch(error => {
              console.log(error)
            })
        } else if (picker === 'jdbData') {
          if (!this.county.value) return false
          let data = {
            txnBodyCom: {
              oType: 'GSJ',
              parentCode: this.county.value
            }
          }
          this.$ajaxRequest('post', '/gsp/mng19021', data)
            .then(res => {
              console.log(res);
              this.jdbDataParam[0].values.splice(0)
              res.map((v) => {
                this.jdbDataParam[0].values.push({
                  text: v.regnNm,
                  value: v.regnCode
                })
              })
            })
            .catch(error => {
              console.log(error)
            })
        } else if (picker === 'committee') {
          if (!this.jdbData.value) return false
          let data = {
            txnBodyCom: {
              oType: 'GSJ',
              parentCode: this.jdbData.value
            }
          }
          this.$ajaxRequest('post', '/gsp/mng19021', data)
            .then(res => {
              console.log(res);
              this.committeeParam[0].values.splice(0)
              res.map((v) => {
                this.committeeParam[0].values.push({
                  text: v.regnNm,
                  value: v.regnCode
                })
              })
            })
            .catch(error => {
              console.log(error)
            })
        }
        this.$refs[picker].open();
        document.activeElement.blur();
        $('.hui-popup').on('touchmove', function (event) {
          event.preventDefault()
          event.stopPropagation()
        })
      },
      addressAutoFn() {
        this.site = (this.city.text ? this.city.text : '')
          + (this.county.text ? this.county.text : '')
          + (this.jdbData.text ? this.jdbData.text : '')
          + (this.committee.text ? this.committee.text : '')
          + this.address
      },
      nextFn() {
        if (this.city === '') {
          this.$toast('请选择城市')
          return false
        } else if (!this.county) {
          this.$toast('请选择区县')
          return false
        } else if (!this.jdbData) {
          this.$toast('请选择乡镇（街道办）')
          return false
        } else if (!this.committee) {
          this.$toast('请选择居（村）委会')
          return false
        } else if (!this.address) {
          this.$toast('请填写详细地址')
          return false
        } else if (!this.equity) {
          this.$toast('请选择产权')
          return false
        }
        if (this.sendFlag) {
          this.$toast('数据已提交,请稍后')
          return false
        }
        this.sendFlag = true
        let dataSave = {
          txnBodyCom: {
            page: '5',
            // work_id: this.workid,
            work_id: sessionStorage.WorkId,
            message: {
              matter_id: this.matterid,
              member_id: this.uid,
//            matter_id: '532d1a418dea49ac9c52bc84fb7c445d',
//            member_id: '4cef06d330c8412fa4f96975b149fddb',
              json_content: {
                work_id: sessionStorage.WorkId,
//              work_id: 'afdbdcde58ae4327b29322278da06f88',
                title: '经营场所',
                cs: {
                  title: '城市',
                  value: this.city
                },
                xq: {
                  title: '区县',
                  value: this.county
                },
                xz: {
                  title: '乡镇（街道办）',
                  value: this.jdbData,
                },
                jwh: {
                  title: '居（村）委会',
                  value: this.committee,
                },
                xxdz: {
                  title: '详细地址',
                  value: this.address,
                },
                jycs: {
                  title: '经营场所',
                  value: this.site,
                },
                cq: {
                  title: '产权',
                  value: this.equity,
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
              path: '/businessScope', query: {
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
  .btn-next {
    margin-top: 20px;
  }

  .content-text {
    width: 70%;
    line-height: 1.2 !important;
    text-align: right;
  }

  .form-box .form-item.textarea .content-input {
    line-height: 16px;
  }

  .form-box .form-item .content .text {
    line-height: 16px;
    height: auto;
  }

  textarea {
    border: none !important;
  }

  .form-item.bsAddressTotal {
    height: auto;
    min-height: 1rem;
    padding: 10px 0;
  }
</style>

