<template>
  <div class="businessScope">
    <towtop style="margin: 0;" :name="titlename"/>
    <div class="optionsBox">
      <div class="option mint-cell" @click="checkFn('value1')">
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <i class="mustIcon">*</i>
            <span class="mint-cell-text">主营行业门类</span>
          </div>
          <div class="mint-cell-value">
            <input readonly type="text" v-model="optionsValue.value1.title" placeholder="请选择主营行业门类">
          </div>
          <i class="mint-cell-allow-right"></i>
        </div>
        <div class="mint-cell-right"></div>
      </div>
      <div v-show="optionsValue.value1.title != ''" class="option mint-cell" @click="checkFn('value2')">
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <i class="mustIcon">*</i>
            <span class="mint-cell-text">主营行业类别</span>
          </div>
          <div class="mint-cell-value">
            <input readonly type="text" v-model="optionsValue.value2.title" placeholder="请选择主营行业类别">
          </div>
          <i class="mint-cell-allow-right"></i>
        </div>
        <div class="mint-cell-right"></div>
      </div>
      <div v-show="optionsValue.value2.title != ''" class="option mint-cell" @click="checkFn('value3')">
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <i class="mustIcon">*</i>
            <span class="mint-cell-text"></span>
          </div>
          <div class="mint-cell-value">
            <input readonly type="text" v-model="optionsValue.value3.title" placeholder="请选择行业类别二级类别">
          </div>
          <i class="mint-cell-allow-right"></i>
        </div>
        <div class="mint-cell-right"></div>
      </div>
      <div v-show="optionsValue.value3.title != ''" class="option mint-cell" @click="checkFn('value4')">
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <i class="mustIcon">*</i>
            <span class="mint-cell-text"></span>
          </div>
          <div class="mint-cell-value">
            <input readonly type="text" v-model="optionsValue.value4.title" placeholder="请选择行业类别三级类别">
          </div>
          <i class="mint-cell-allow-right"></i>
        </div>
        <div class="mint-cell-right"></div>
      </div>
      <div v-show="optionsValue.value4.title != ''" class="bsStrC option mint-cell" @click="goTo('value5')">
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <i class="mustIcon">*</i>
            <span class="mint-cell-text">经营范围</span>
          </div>
          <div class="mint-cell-value">
            <p v-bind:class="{color51:bsString}">{{bsString?bsString:'请选择经营范围'}}</p>
            <!--<textarea readonly v-model="bsString" placeholder="请选择经营范围"></textarea>-->
          </div>
          <i class="mint-cell-allow-right"></i>
        </div>
        <div class="mint-cell-right"></div>
      </div>
    </div>
    <mt-button type="primary" class="nextBtn" @click="toNext">下一步</mt-button>



   <!-- <mt-popup
      v-model="popupShow"
      class="popupBox"
      position="bottom">
      <div>
        <span class="mint-datetime-action mint-datetime-cancel" @click="cancelFn">取消</span>
        <span class="mint-datetime-action mint-datetime-confirm" @click="checkValueFn">确定</span>
      </div>
      <mt-picker style="width: 100%;"
                 valueKey="title"
                 :slots="slots"
                 ref="popupPicker"></mt-picker>
    </mt-popup>-->


    <Huiselect
      ref="popupPicker"
      position="bottom"
      :dataslots="slots"
      class="example-select_item popupBox"
      @confirms="checkValueFn"
    ></Huiselect>



  </div>
</template>
<script>
  import towtop from '@/components/HederTwo'

  export default {
    data() {
      return {
        titlename: '经营范围',
        selected: '1',
        matterid: '',
        uid: '',
        work_id: '',
        optionOneCheck: false,
        popupShow: false,
        popupPicker: null,
        currentOption: null,
        industryCode: '',
        sendFlag: false,
        industryPhy: '',
        optionsValue: {
          value1: {title: '', value: ''},
          value2: {title: '', value: ''},
          value3: {title: '', value: ''},
          value4: {title: '', value: ''},
          // value5: {title: '请选择经营范围', value: ''},
        },
        slots: [{
          flex: 1,
          values: [],
          showText: 'title',
          className: 'slot1',
          textAlign: 'center'
        }]
      }
    },
    components: {
      towtop
    },
    created() {
      // 获取行类数据
      this.industryPhy = this.$route.query.industryPhy
      this.industryCode = this.$route.query.industryCode
      this.matterid = sessionStorage.matterid
      this.uid = sessionStorage.userid
      this.work_id = sessionStorage.WorkId
      if (this.industryPhy) {
        let data = {
          txnBodyCom: {
            oType: 'GSJ',
            parentId: '1036'
          }
        }
        this.$ajaxRequest('post', '/gsp/mng19019', data)
          .then(res => {
            res.map((v) => {//赋值假数据
              if (v.cmnCd === this.industryPhy) {
                this.optionsValue.value1.value = v.cmnCd
                this.optionsValue.value1.title = v.cmnCdNm
                return
              }
            })
            // console.log(res);
          })
          .catch(error => {
            console.log(error)
          })
        if (this.industryCode) {
          let data2 = {
            txnBodyCom: {
              oType: 'GSJ',
              parentId: '1036#' + this.industryPhy
            }
          }
          this.$ajaxRequest('post', '/gsp/mng19019', data2)
            .then(res => {
              res.map((v) => {//赋值假数据
                if (v.cmnCd === this.industryCode) {
                  this.optionsValue.value2.value = v.cmnCd
                  this.optionsValue.value2.title = v.cmnCdNm
                  return
                }
              })
              // console.log(res);
            })
            .catch(error => {
              console.log(error)
            })
        }
      }
      this.optionOneCheck = true
    },
    computed: {
      bsString() {
        let bsArr = this.$store._modules.root.state.AICstore.bsArr
        let bsStr = ''
        bsArr.map((v, i) => {
          if (i >= bsArr.length - 1) {
            bsStr += v.trdDesc
          } else {
            bsStr += v.trdDesc + ';'
          }
        })
        return bsStr
      }
    },
    methods: {
      checkFn(optionNa) {
        if (!this.optionOneCheck) {
          this.$toast('请完善信息')
          return false;
        }
        this.$refs['popupPicker'].open();
        document.activeElement.blur();
        $('.hui-popup').on('touchmove', function (event) {
          event.preventDefault()
          event.stopPropagation()
        })
        // console.log(optionNa);
        this.currentOption = optionNa
        // this.slots[0].values = this.monishuju[optionNa]
        let pid = '1036'

        if (optionNa === 'value2') {
          pid += '#' + this.optionsValue['value1'].value
        }
        else if (optionNa === 'value3') {
          pid += '#' + this.optionsValue['value1'].value + '#' + this.optionsValue['value2'].value
        }
        else if (optionNa === 'value4') {
          pid += '#' + this.optionsValue['value1'].value +
            '#' + this.optionsValue['value2'].value +
            '#' + this.optionsValue['value3'].value
        }
        let data = {
          "txnBodyCom": {
            parentId: pid,
            matter_id: window.sessionStorage.getItem("matterid"),
            id: ''
          }
        }
        this.$ajaxRequest('post', '/gsp/mng19019', data)
          .then(res => {
            console.log(res);
            res.map((v) => {//赋值假数据
              this.slots[0].values.push({value: v.cmnCd, title: v.cmnCdNm})
            })
          })
          .catch(error => {
            console.log(error)
          })
      },
      checkValueFn(value) {
        //相同值不请求
        let obj = value
        if (this.optionsValue[this.currentOption].value != obj[0].value) {
          this.optionsValue[this.currentOption].value = obj[0].value
          this.optionsValue[this.currentOption].title = obj[0].title
          if (this.currentOption === 'value1') {
            this.optionsValue.value2.title = ''
            this.optionsValue.value2.value = ''
            this.optionsValue.value3.title = ''
            this.optionsValue.value3.value = ''
            this.optionsValue.value4.title = ''
            this.optionsValue.value4.value = ''
            this.$store._modules.root.state.AICstore.bsArr.splice(0)
            // {title: '', value: ''},
          } else if (this.currentOption === 'value2') {
            this.optionsValue.value3.title = ''
            this.optionsValue.value3.value = ''
            this.optionsValue.value4.title = ''
            this.optionsValue.value4.value = ''
            this.$store._modules.root.state.AICstore.bsArr.splice(0)
          } else if (this.currentOption === 'value3') {
            this.optionsValue.value4.title = ''
            this.optionsValue.value4.value = ''
            this.$store._modules.root.state.AICstore.bsArr.splice(0)
          }
        }
        this.popupShow = false
        this.slots[0].values.splice(0)//清空数组
      },
      goTo() {
        this.$router.push({path: '/bsSearch', query: {trdidx: this.optionsValue['value4'].value}})
      },
      toNext() {
        if (this.bsString === '') {
          this.$toast('请完善经营范围')
          return false
        }
        let bsJson = []
        let bsArr = this.$store._modules.root.state.AICstore.bsArr
        bsArr.map((v, i) => {
          bsJson.push({trdDesc: v.trdDesc, trdInd: v.trdInd})
        })
        if (this.sendFlag) {
          this.$toast('数据已提交,请稍后')
          return false
        }
        this.sendFlag = true
        let dataSave = {
          txnBodyCom: {
            page: '6',
            work_id: this.work_id,
//          work_id: 'afdbdcde58ae4327b29322278da06f88',
            message: {
              matter_id: this.matterid,
              member_id: this.uid,
              json_content: {
                work_id: this.work_id,
//              work_id: 'afdbdcde58ae4327b29322278da06f88',
                title: '经营范围',
                zyhyml: {
                  title: '主营行业门类',
                  value: this.optionsValue.value1.title,
                  code: this.optionsValue.value1.value
                },
                zyhylb: {
                  title: '主营行业类别',
                  value: this.optionsValue.value2.title,
                  code: this.optionsValue.value2.value
                },
                zyhylb2: {
                  title: '主营行业类别二级',
                  value: this.optionsValue.value3.title,
                  code: this.optionsValue.value3.value
                },
                zyhylb3: {
                  title: '主营行业类别三级',
                  value: this.optionsValue.value4.title,
                  code: this.optionsValue.value4.value
                },
                jyfw: {
                  title: '经营范围',
                  value: this.bsString,
                  json: bsJson
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
            this.$router.push({path: '/operatorInfo', query: ''})
          })
          .catch(error => {
            this.sendFlag = false
            console.log(error)
          })

      }
    }
  }
</script>
<style scoped>
  div {
    text-align: left;
  }

  .optionsBox {
    margin: 16px 0 26px;
  }

  .nextBtn {
    border-radius: 16px;
    width: 80%;
    margin: 0 auto;
    display: block;
  }

  .businessScope .mint-cell {
    border-bottom: 1px solid #ccc;
  }

  .businessScope .mint-cell:last-child {
    border-bottom: none;
  }

  .popupBox {
    width: 100%;
  }

  .mint-cell-value {
    width: 65%;
    padding-right: 20px;
  }

  .mint-cell-value input, .mint-cell-value textarea {
    width: 100%;
    border: none !important;
  }

  /*.mint-cell-value textarea {*/
  /*padding-top: 10px;*/
  /*}*/
  .bsStrC .mint-cell-value p {
    color: #ccc;
  }

  .bsStrC .mint-cell-value p.color51 {
    color: rgb(51, 51, 51);
  }

  .mustIcon {
    color: red;
  }

  .bsStrC {
    padding: 10px 0;
  }
</style>
