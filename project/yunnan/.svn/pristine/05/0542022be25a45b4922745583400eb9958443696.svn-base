<template>
  <div class="have-approved-page">
    <towtop name="已核名称查询"/>
    <div class="container">
      <div class="form-box">
        <div class="form-item">
          <p class="label">
            <span class="star">*</span>
            查询方式
          </p>
          <div class="content">
            <!--<div class="content" @click="open('pickerselect01')">-->
            <p class="text" :class="value1 ? '': 'default'" type="text">{{value1 ? value1.text : '请选择'}}</p>
            <!--<span class="arrow">></span>-->
          </div>
        </div>
        <div class="form-item">
          <p class="label">
            <span class="star">*</span>
            已核准名称
          </p>
          <div class="content">
            <input class="text" v-model="value2" type="text" placeholder="请输入已核准名称"/>
          </div>
        </div>
        <div class="form-item" v-show="value1.value===0">
          <p class="label">
            <span class="star">*</span>
            经营者姓名
          </p>
          <div class="content">
            <input readonly class="text" v-model="value3" type="text"/>
            <!--<input class="text" v-model="value3" type="text" placeholder="请输入经营者姓名"/>-->
          </div>
        </div>
        <div class="form-item" v-show="value1.value===1">
          <p class="label">
            <span class="star">*</span>
            名称核准文号
          </p>
          <div class="content">
            <input class="text" v-model="value4" type="text" placeholder="请输入名称核准文号"/>
          </div>
        </div>
      </div>
      <p @click="nextFn" class="btn">下一步</p>
    </div>
    <Huiselect
      ref="pickerselect01"
      position="bottom"
      :dataslots="dataParam"
      class="example-select_item"
      @confirms="selectConfirm01"
    ></Huiselect>
  </div>
</template>

<script>
  import towtop from '@/components/HederTwo.vue'

  export default {
    data() {
      return {
        dataParam: [{
          flex: 1,
          values: [
            {
              text: '经营者查询',
              value: 0
            },
            {
              text: '批准文号查询',
              value: 1
            }
          ],
          showText: 'text',
          className: 'slot1',
        }],
        value1:
          {
            text: '经营者查询',
            value: 0
          },
        value2: '',
        value3: '',
        value4: '',
        uid: '',
        gsuid: '',
        matterid: '',
        workid: '',
        sendFlag: false,
      }
    },
    components: {
      towtop
    },
    created() {
      this.uid = window.sessionStorage.getItem('userid')
      this.gsuid = window.sessionStorage.getItem('gsUserId')
      this.matterid = window.sessionStorage.getItem('matterid')
      this.workid = window.sessionStorage.getItem('WorkId')
      let um = window.sessionStorage.getItem('username')
      if (um !== 'null') {
        this.value3 = um
      } else {
        this.$toast('获取用户名失败')
      }
    },
    methods: {
      open(picker) {
        this.$refs[picker].open();
        document.activeElement.blur();
        $('.hui-popup').on('touchmove', function (event) {
          event.preventDefault()
          event.stopPropagation()
        })
      },
      selectConfirm01(value) {
        this.value1 = value[0]
      },
      nextFn() {
        if (this.value1 === '' || this.value2 === '' || (this.value3 === '' && this.value4 === '')) {
          this.$toast('请完善信息')
          return false
        }
        var data = null
        var dataSave = null
        if (this.sendFlag) {
          this.$toast('数据已提交,请稍后')
          return false
        }
        this.sendFlag = true
        if (this.value1.value === 0) {
          data = {
            "txnBodyCom": {
              matter_id: this.matterid,
              chann_id: "1",
              userId: this.gsuid,
              peName: this.value2,
              operateName: this.value3,
            }
          }
        } else {
          data = {
            "txnBodyCom": {
              matter_id: this.matterid,
              chann_id: "1",
              userId: this.gsuid,
              peName: this.value2,
              approveNo: this.value4
              /*matter_id: this.matterid,
              chann_id: "1",
              userId: this.uid,
              peName: '施甸县杨芳朝',
              approveNo: '12'*/
            }
          }
        }
        this.$ajaxRequest('post', '/gsp/mng60039', data)
          .then(res => {
            console.log(res);
            this.sendFlag = false
            if (res['C-API-Status'] && res['C-API-Status'] === '01') return false
            var areaNum = res.peInfo[0].areaId
            var qxNum = res.peInfo[0].fjCountry
            var industryPhy = res.peInfo[0].peTrdInfo[0].industryPhy
            var industryCode = res.peInfo[0].peTrdInfo[0].industryCode
            dataSave = {
              txnBodyCom: {
                page: '3',
                work_id: this.workid,
//              work_id: 'afdbdcde58ae4327b29322278da06f88',
                message: {
                  matter_id: this.matterid,
                  member_id: this.uid,
//                matter_id: '532d1a418dea49ac9c52bc84fb7c445d',
//                member_id: '4cef06d330c8412fa4f96975b149fddb',
                  json_content: {
                    work_id: this.workid,
//                  work_id:  'afdbdcde58ae4327b29322278da06f88',
                    title: '已核准名称',
                    cxfs: {
                      title: '查询方式',
                      value: this.value1.text
                    },
                    yhzmc: {
                      title: '已核准名称',
                      value: this.value2
                    },
                    mchzwh: {
                      title: '名称核准文号',
                      value: this.value4,
                    },
                    acceptOrganId: {
                      title: '受理机关',
                      code: res.acceptOrganId
                    },
                    nameIndDesc: {
                      title: '行业表述',
                      code: res.acceptOrganId
                    },
                    nameOrgForm: {
                      title: '名称组织形式',
                      code: res.acceptOrganId
                    },
                    peName: {
                      title: '个体名称',
                      code: res.peName
                    }
                  }
                }
              }
            }
            this.$ajaxRequest('post', '/APPS/db/insert', dataSave)
              .then(res => {
                console.log(res);
                if (res['C-API-Status'] && res['C-API-Status'] === '01') return false
                this.$router.push({
                  path: '/basicInfo', query: {
                    areaId: areaNum,
                    qxNum: qxNum,
                    industryPhy: industryPhy,
                    industryCode: industryCode
                  }
                })
              })
              .catch(error => {
                console.log(error)
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
  .have-approved-page {
    height: 100%;
    display: flex;
    flex-direction: column;

    .container {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .form-box {
        background: #fff;
        padding: 0 0.36rem 1rem;

        .form-item {
          height: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #ECECEC;

          .label {
            height: 1rem;
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #151515;
            letter-spacing: 0.17px;

            .star {
              display: inline-block;
              height: 1rem;
              line-height: 1rem;
              color: red;
              font-weight: bold;
              font-size: 18px;
              position: relative;
              top: 5px;
            }
          }

          .content {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 15px;

            .text {
              flex: 1;
              text-align: right;
              margin-right: 10px;
              height: 1rem;
              line-height: 1rem;
              font-family: PingFangSC-Regular;
              font-size: 14px;
              color: #333333;
              letter-spacing: 0.17px;
            }

            .arrow {
              font-size: 18px;
              font-weight: bold;
              color: #999;
            }
          }
        }
      }
    }

    .btn {
      margin: auto;
      margin-bottom: 0.8rem;
      height: 0.9rem;
      line-height: 0.9rem;
      text-align: center;
      color: #fff;
      background: #2D7FFC;
      border-radius: 25px;
      width: 80%

    }

  }
</style>

