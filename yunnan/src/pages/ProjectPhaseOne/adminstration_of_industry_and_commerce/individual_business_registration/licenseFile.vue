<template>
  <div class="licenseFile">
    <towtop :name='hadertow'/>
    <div v-if='this.isHasFile ==false'>
      <div class='licenseFileCont'>
        <img v-show="licenseList.length==0"
             src="@/assets/images/nolicense3x.png"
             class="listNoneImg">
        <ul class="licenseUl" v-show="licenseList.length>0">
          <li class="licenseitem hui-icon hui-icon_arrow-right" v-for="item in licenseList" @click="seeLicenseFn(item)">
            <h5>{{item.fileName2.title}}</h5>
            <p>许可文件编号:{{item.fileCode}}</p>
          </li>
        </ul>
      </div>
      <div class='submitBox'>
        <mt-button type="primary" :disabled="isDisable" class='submitBtn' @click='next'>下一步</mt-button>
        <mt-button type="primary" class='addBtn submitBtn' @click='addFiles'>添加</mt-button>
      </div>
    </div>

    <div v-else>
      <div class='mint-cell'>
        <div class='mint-cell-wrapper borderBottom'>
          <div class='mint-cell-title'><span class='required'>*</span>许可文件名称</div>
          <div class='mint-cell-value is-link' @click='showPopup("fileName",fileNameValues)'>{{fileName.title}}</div>
          <i class='mint-cell-allow-right'></i>
        </div>
      </div>
      <div class='mint-cell' v-show="fileName.title !== '请选择'">
        <div class='mint-cell-wrapper borderBottom'>
          <div class='mint-cell-title'><span class='required'>*</span></div>
          <div class='mint-cell-value is-link' @click='showPopup("fileName2",fileName2Values)'>{{fileName2.title}}</div>
          <i class='mint-cell-allow-right'></i>
        </div>
      </div>
      <div class='mint-cell'>
        <div class='mint-cell-wrapper borderBottom'>
          <div class='mint-cell-title'><span class='required'>*</span>许可经营范围</div>
          <div class='mint-cell-value is-link' @click='showPopup("scope",scopeValues)'>{{scope.title}}</div>
          <i class='mint-cell-allow-right'></i>
        </div>
      </div>
      <div class='mint-cell' v-show="scope.title !== '请选择'">
        <div class='mint-cell-wrapper borderBottom'>
          <div class='mint-cell-title'><span class='required'>*</span></div>
          <div class='mint-cell-value is-link' @click='showPopup("scope2",scope2Values)'>{{scope2.title}}</div>
          <i class='mint-cell-allow-right'></i>
        </div>
      </div>
      <div class='mint-cell'>
        <div class='mint-cell-wrapper borderBottom'>
          <div class='mint-cell-title'><span class='required'>*</span>许可文件编号</div>
          <div class='mint-cell-value'><input type="text" class='inputCell' v-model='fileCode' placeholder="请输入"/></div>
        </div>
      </div>
      <div class='mint-cell'>
        <div class='mint-cell-wrapper borderBottom'>
          <div class='mint-cell-title'><span class='required'>*</span>许可机关</div>
          <div class='mint-cell-value'><input type="text" class='inputCell' v-model='office' placeholder="请输入"/></div>
        </div>
      </div>
      <div class='mint-cell'>
        <div class='mint-cell-wrapper borderBottom'>
          <div class='mint-cell-title'><span class='required'>*</span>有效性</div>
          <div class='mint-cell-value is-link' @click='showPopup("validity",validityValues)'>{{validity.title}}</div>
          <i class='mint-cell-allow-right'></i>
        </div>
      </div>
      <div class='mint-cell'>
        <div class='mint-cell-wrapper borderBottom'>
          <div class='mint-cell-title'><span class='required'>*</span>有效期</div>
          <div class='mint-cell-value is-link' @click='getStartDate'>{{startDay}}</div>
          <i class='mint-cell-allow-right'></i>
        </div>
      </div>
      <div class='mint-cell'>
        <div class='mint-cell-wrapper clearPadding'>
          <div class='mint-cell-title'></div>
          <div class='mint-cell-value is-link' @click='getEndDate'>{{endDay}}</div>
          <i class='mint-cell-allow-right'></i>
        </div>
      </div>
      <div class='saveBox'>
        <mt-button type="primary" class='saveBtn' @click='saveFn'>保存</mt-button>
        <mt-button class='saveBtn backBtn' @click='backListFn'>返回</mt-button>
      </div>
    </div>
    <Huiselect
      ref="Picker"
      position="bottom"
      :dataslots="slots"
      class="example-select_item mypopup"
      @confirms="orderInsure"
    ></Huiselect>
    <Datetime
      class='datetime'
      ref="startPicker"
      type="date"
      position="bottom"
      v-model="startPicker"
      :end-date="endDay === '请选择'?new Date():new Date(endDay)"
      @confirm="startConfirm"
    ></Datetime>
    <Datetime
      class='datetime'
      ref="endPicker"
      type="date"
      position="bottom"
      :start-date="startDay === '请选择'?new Date():new Date(startDay)"
      :end-date="new Date('2090-01-01')"
      v-model="endPicker"
      @confirm="endConfirm"
    ></Datetime>
  </div>
</template>

<script>
  function dateFormat(time, format) {
    const t = new Date(time);
    const tf = function (i) {
      return (i < 10 ? '0' : '') + i;
    };
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, (a) => {
      switch (a) {
        case 'yyyy':
          return tf(t.getFullYear());
        case 'MM':
          return tf(t.getMonth() + 1);
        case 'mm':
          return tf(t.getMinutes());
        case 'dd':
          return tf(t.getDate());
        case 'HH':
          return tf(t.getHours());
        case 'ss':
          return tf(t.getSeconds());
        default:
          break;
      }
    });
  }

  import towtop from '@/components/HederTwo.vue'
  import {
    Popup,
    Picker,
    MessageBox
  } from 'mint-ui';

  export default {
    data() {
      return {
        hadertow: "许可文件",
        isHasFile: false,
        peoplePopup: false,
        slots: [{flex: 1, values: [], showText: 'title', className: 'slot1',}],
        fileName: {title: '请选择', value: ''},
        fileName2: {title: '请选择二级许可文件', value: ''},
        fileNameValues: [],
        fileName2Values: [],
        scope: {title: '请选择', value: ''},
        scope2: {title: '请选择二级经营范围', value: ''},
        scopeValues: [],
        scope2Values: [],
        validity: {title: '请选择', value: ''},
        validityValues: [],
        fileCode: '',
        office: '',
        appNo: '',
        isDisable: false,
        startDay: '请选择',
        startPicker: dateFormat(new Date, 'yyyy-MM-dd'),
        endDay: '请选择',
        endPicker: dateFormat(new Date, 'yyyy-MM-dd'),
        licenseList: [],
        licenseSaveTime: 0,
        // licenseStoreArr: null
      }
    },
    components: {
      towtop,
      Popup,
      Picker,
    },
    methods: {
      showPopup(e, value) { //点击出现弹出框
        if (e === 'fileName2') {
          this.getFilesCode("1027#" + this.fileName.value, this.fileName2Values)

        } else if (e === 'scope2') {
          this.getFilesCode("1026#" + this.scope.value, this.scope2Values)
        }

        this.$refs.Picker.open();
        document.activeElement.blur();
        $('.hui-popup').on('touchmove', function (event) {
          event.preventDefault()
          event.stopPropagation()
        })
        this.selected = e
        this.slots[0].values = value
      },
      orderInsure(value) { //弹出框确认
        let obj = value
        if (this[this.selected].value != obj[0].value) {
          this[this.selected] = obj[0]
          if (this.selected === 'fileName') {
            this.fileName2.title = '请选择二级许可文件'
            this.fileName2.value = ''
          } else if (this.selected === 'scope') {
            this.scope2.title = '请选择二级经营范围'
            this.scope2.value = ''
          }
        }
      },
      getStartDate() { //出生日期弹出框
        this.$refs.startPicker.open();
      },
      startConfirm(e) { //确定出生日期
        this.startDay = dateFormat(e, 'yyyy-MM-dd')
        this.$refs.startPicker.close();
      },
      getEndDate() { //出生日期弹出框
        this.$refs.endPicker.open();
      },
      endConfirm(e) { //确定出生日期
        this.endDay = dateFormat(e, 'yyyy-MM-dd')
        this.$refs.endPicker.close();
      },
      addFiles() {
        this.hadertow = '许可文件信息'
        this.isHasFile = true
      },
      seeLicenseFn(item) {
        this.hadertow = '许可文件信息'
        this.isHasFile = true
        this.licenseSaveTime = item.licenseSaveTime
        this.fileName = item.fileName
        this.fileName2 = item.fileName2
        this.scope = item.scope
        this.scope2 = item.scope2
        this.fileCode = item.fileCode
        this.office = item.office
        this.validity = item.validity
        this.startDay = item.startDay
        this.endDay = item.endDay
      },
      getFilesCode(code, arr) { //获取许可信息
        arr.splice(0)
        this.$ajaxRequest('post', '/gsp/mng19019', {
          "txnBodyCom": {
            "parentId": code,
            "matter_id": window.sessionStorage.getItem('matterid'),
          }
        }).then((res) => {
          res.forEach((item, index) => {
            arr.push({
              title: item.cmnCdNm,
              value: item.cmnCd
            })
          })
        })
      },
      checkInfo() {
        if (this.isHasFile == false) {
          return true
        }
        if (this.fileName.title == '请选择') {
          MessageBox.alert('请选择许可文件名称', '提示');
          return false
        }
        if (this.fileName2.title == '请选择二级许可文件') {
          MessageBox.alert('请选择二级许可文件', '提示');
          return false
        }
        if (this.scope.title == '请选择') {
          MessageBox.alert('请选择许可范围', '提示');
          return false
        }
        if (this.scope2.title == '请选择二级经营范围') {
          MessageBox.alert('请选择二级经营范围', '提示');
          return false
        }
        if (this.fileCode == '') {
          MessageBox.alert('请选择许可文件编号', '提示');
          return false
        }
        if (this.office == '') {
          MessageBox.alert('请选择许可机关', '提示');
          return false
        }
        if (this.validity.title == '请选择') {
          MessageBox.alert('请选择有效性', '提示');
          return false
        }
        if (this.startDay == '请选择') {
          MessageBox.alert('请选择起始日期', '提示');
          return false
        }
        if (this.endDay == '请选择') {
          MessageBox.alert('请选择结束日期', '提示');
          return false
        }
        return true
      },
      getSendObj(t, v, c) {          //格式化暂存数据
        if (c) {
          return {
            title: t,
            value: v,
            code: c
          }
        } else {
          return {
            title: t,
            value: v
          }
        }
      },
      saveFn() {
        if (!this.checkInfo()) {
          return false
        }
        //存贮许可文件
        this.hadertow = '许可文件'
        this.isHasFile = false
        if (this.licenseSaveTime === 0) {
          this.licenseSaveTime = new Date().getTime()
          this.licenseList.push({
            fileName: this.fileName,
            fileName2: this.fileName2,
            scope: this.scope,
            scope2: this.scope2,
            fileCode: this.fileCode,
            office: this.office,
            validity: this.validity,
            startDay: this.startDay,
            endDay: this.endDay,
            licenseSaveTime: this.licenseSaveTime
          })
        } else {
          this.licenseList.map((v) => {
            if (this.licenseSaveTime === v.licenseSaveTime) {
              v.licenseSaveTime = this.licenseSaveTime
              v.fileName = this.fileName
              v.fileName2 = this.fileName2
              v.scope = this.scope
              v.scope2 = this.scope2
              v.fileCode = this.fileCode
              v.office = this.office
              v.validity = this.validity
              v.startDay = this.startDay
              v.endDay = this.endDay
            }
            return false
          })
        }
        this.clearLicenseInf()
      },
      backListFn() {
        this.hadertow = '许可文件'
        this.isHasFile = false
        this.clearLicenseInf()
      },
      clearLicenseInf() {
        this.licenseSaveTime = 0
        this.fileName = {title: '请选择', value: ''}
        this.fileName2 = {title: '请选择二级许可文件', value: ''}
        this.scope = {title: '请选择', value: ''}
        this.scope2 = {title: '请选择二级经营范围', value: ''}
        this.fileCode = ''
        this.office = ''
        this.validity = {title: '请选择', value: ''}
        this.startDay = '请选择'
        this.endDay = '请选择'
      },
      next() {
        let sendInfo = {}
        if (this.licenseList.length === 0) {
          sendInfo = {
            work_id: sessionStorage.WorkId,
            title: '许可文件信息',
            isBuilderInfo: this.getSendObj('是否填写许可文件', '无')
          }
        } else {
          sendInfo = {
            work_id: sessionStorage.WorkId,
            title: '许可文件信息',
            isBuilderInfo: this.getSendObj('是否填写许可文件', '有'),
            licenseList: this.licenseList
            /*fileName: this.getSendObj('许可文件名称', this.fileName.title, this.fileName.value),
            fileName2: this.getSendObj('二级许可文件名称', this.fileName2.title, this.fileName.value),
            scope: this.getSendObj('许可经营范围', this.scope.title, this.fileName.value),
            scope2: this.getSendObj('二级许可经营范围', this.scope2.title, this.fileName.value),
            fileCode: this.getSendObj('许可文件编号', this.fileCode),
            office: this.getSendObj('许可机关', this.office),
            validity: this.getSendObj('有效性', this.validity.title, this.fileName.value),
            startDay: this.getSendObj('有效期（开始）', this.startDay),
            endDay: this.getSendObj('有效期（结束）', this.endDay),*/
          }
        }
        this.isDisable = true
        this.$ajaxRequest('post', '/APPS/db/insert', {
          txnBodyCom: {
            page: '9',
            // end: 'end',
            work_id: sessionStorage.WorkId,
            message: {
              matter_id: sessionStorage.matterid,
              member_id: sessionStorage.userid,
              json_content: sendInfo
            }
          }
        })
          .then((res) => {
            if (res.success == "添加成功" || res.success == '修改成功') {
              this.saveGsFn()
            }
          })
          .catch(error => {
            this.isDisable = false
            console.log(error)
          })
      },
      saveGsFn() {
        let date = new Date()
        let dateStr = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
        let saveData = {
          userId: sessionStorage.gsUserId,
          type: 'tempAndSet',
          acceptOrganId: '',
          appTypeId: '02',
          appNo: this.appNo,
          peInfo: [{
            fjEquities: '',
            areaId: '',
            building: '',
            cptlTotal: '',
            fjCountry: '',
            fjNeigbor: '',
            fjStreet: '',
            layer: '',
            numb: '',
            peMember: [],
            peOperator: [],
            peParty: [],
            pePmtInfo: '',
            peTrdInfo: [],
            pePmtInfo: [],
            peTypeId: '',
            room: '',
            totalPersn: '',
          }],
          peName: '',
          statusDate: dateStr,
          webStatusId: '',
          peAppagent: []
        }
        let ishave = window.sessionStorage.getItem('ishave')
        var dataList = null
        let num = 0
        if (ishave == '0') {
          dataList = [2, 4, 5, 6, 7, 8, 9]
        } else if (ishave == '1') {
          dataList = [3, 4, 5, 6, 7, 8, 9]
        } else {
          return false
        }
        for (let i = 0; i < dataList.length; i++) {
          let pageNum = dataList[i];
          this.$ajaxRequest('post', '/APPS/db/echo', {
            'txnBodyCom': {
              page: pageNum,
              work_id: sessionStorage.WorkId,
            }
          }).then((res) => {
            let inf = res.result.json_content
            if (pageNum == 2) {
              saveData.acceptOrganId = inf.changeSelectMsg3 ? inf.changeSelectMsg3.code : ''//受理机关
              saveData.regOrganId = inf.changeSelectMsg3 ? inf.changeSelectMsg3.code : ''//受理机关
              saveData.peInfo[0].regOrganId = inf.changeSelectMsg3 ? inf.changeSelectMsg3.code : ''//受理机关
              // saveData.nameIndDesc = inf.changeSelectMsg1_three.code ? inf.changeSelectMsg1_three.code : ''//行业表述
              saveData.nameOrgForm = inf.changeSelectMsg2 ? inf.changeSelectMsg2.value : ''//名称组织形式
              saveData.peName = inf.textValue_mc ? inf.textValue_mc.value : ''//个体名称
              saveData.peInfo[0].name = inf.textValue_mc ? inf.textValue_mc.value : ''//个体名称
              if (inf.isHasFont.value === '是') {
                let opinion = {
                  check_nameApp: inf.textValue_mc.value,//个体名称
                  check_nameRegOrgan: inf.textValue_zh.value,//字号
                  check_nameIndDesc: inf.changeSelectMsg1_three.value,//行业表述第三级的中文值
                  check_indPhy: inf.changeSelectMsg1.code,//行业表述第一级的值
                  check_industryCode: inf.changeSelectMsg1_two.code,//行业表述第2级的值
                  hybs1value: inf.changeSelectMsg1.code,//行业表述第一级的值
                  hybs2value: inf.changeSelectMsg1_two.code,//行业表述第2级的值
                  hybsFinalValue: inf.changeSelectMsg1_three.value,//行业表述第三级的中文值
                  xzqh1value: inf.changeSelectMsg.code,//行政区划用户所选第一级的id
                  xzqh2value: inf.changeSelectMsg_sxq.code,//行政区划用户所选第二级的id
                  xzqh: inf.changeSelectMsg_sxq.code,//行政区划用户所选第二级的id
                  acceptOrgn: inf.changeSelectMsg3.code,//用户选择的受理机关id
                  dataRange: inf.changeSelectMsg4 ? inf.changeSelectMsg4.code : null,//用户如果选择了经济区划
                  self_id: '',
                  hasName: '1',
                  isProvince: true,
                  check_nameRegOrgan: inf.changeSelectMsg_sxqbs.code,//用户如果选择了经济区划
                  check_nameApoOrgan: inf.changeSelectMsg_sxqbs.dec,//用户如果选择了经济区划
                  check_nameDistrict: inf.changeSelectMsg_sxq.value,//用户如果选择了经济区划
                  zzxxFinalValue: inf.changeSelectMsg1_three ? inf.changeSelectMsg1_three.value : null,//用户如果选择了经济区划
                  xzqhFinalValue: inf.changeSelectMsg_sxqbs.id,//用户如果选择了经济区划
                  showJJQH: inf.changeSelectMsg4 ? true : false,//用户如果选择了经济区划
                  needZZXX: inf.changeSelectMsg1_three.value ? true : false,//用户如果选择了经济区划
                  zzxsString: inf.changeSelectMsg1_three ? inf.changeSelectMsg1_three.id : null,//用户如果选择了经济区划
                }
                saveData.opinion = JSON.stringify(opinion)
              }
            } else if (pageNum == 3) {
              saveData.acceptOrganId = inf.acceptOrganId ? inf.acceptOrganId.code : ''//受理机关
              saveData.regOrganId = inf.acceptOrganId ? inf.acceptOrganId.code : ''//受理机关
              saveData.peInfo[0].regOrganId = inf.changeSelectMsg3 ? inf.changeSelectMsg3.code : ''//受理机关
              // saveData.nameIndDesc = inf.nameIndDesc.code ? inf.changeSelectMsg1_three.code : ''//行业表述
              saveData.nameOrgForm = inf.nameOrgForm ? inf.nameOrgForm.code : ''//名称组织形式
              saveData.peName = inf.peName ? inf.peName.value : ''//个体名称
              saveData.peInfo[0].name = inf.peName ? inf.peName.value : ''//个体名称
            } else if (pageNum == 4) {
              saveData.peInfo[0].cptlTotal = inf.zjsg.value//""资金数额（万元）""
              saveData.peInfo[0].peTypeId = inf.zzxs.code + ''//组成形式
              saveData.peInfo[0].totalPersn = inf.cyrs.value//从业人数
              saveData.peInfo[0].postcode = inf.yb.value//邮政编码
              saveData.peInfo[0].telephone = inf.lxdh.value//联系电话
              saveData.peAppagent.push({
                applicantName: inf.sqr.value,	//委托代理人姓名
                cetfType: '1',	//委托代理人证件类型
                cetfNo: inf.zjhm.value,	//委托代理人证件号码
                telephone: inf.lxdh.value,	//委托代理人联系电话
                licenAcceptType: '1',	//领取方式
                postcode: inf.yb.value,	//邮编
              })
            } else if (pageNum == 5) {
              saveData.peInfo[0].fjEquities = inf.cq.value.value//"城市"
              saveData.peInfo[0].areaId = inf.cs.value.value//"城市"
              saveData.peInfo[0].fjCountry = inf.xq.value.value//区县
              saveData.peInfo[0].fjNeigbor = inf.jwh.value.value//居委会
              saveData.peInfo[0].fjStreet = inf.xz.value.value//街道
              saveData.peInfo[0].building = ''//栋
              saveData.peInfo[0].layer = ''//层
              saveData.peInfo[0].numb = ''//号
              saveData.peInfo[0].address = inf.jycs.value//经营场所
            } else if (pageNum == 6) {
              saveData.peInfo[0].peTrdInfo.push({
                industryCode: inf.zyhylb3.code,//行业类别
                industryPhy: inf.zyhyml.code,//行业门类
                trdDesc: inf.jyfw.json,//经营范围
                trdScope: inf.jyfw.value,//经营范围中文
              })
              saveData.nameIndDesc = inf.zyhylb3.value//行业表述
            } else if (pageNum == 7) {//经营者信息
              saveData.peInfo[0].peOperator.push({
                address: inf.address.value,//住址
                backgroundId: inf.politics.code,//政治面貌
                birthday: inf.birthDay.value,//出生日期
                cetfNo: inf.cardNum.value,//证件号码
                educationId: inf.cultrue.code,//文化程度
                fjPersonType: inf.peopleType.code,//人员类型
                identityId: inf.profession.code,//申请前职业状况
                mail: inf.email ? inf.email.value : '',//电子邮箱
                mobile: inf.telNum.value,//移动电话
                nationId: inf.nation.code,//民族
                persnName: inf.userName.value,//经营者姓名
                postcode: inf.postelNum.value,//邮编
                sexId: inf.sex.code,//性别
                telephone: inf.tel ? inf.tel.value : ''//固定电话
              })
            } else if (pageNum == 8) {//党建信息
              if (inf.isBuilderInfo.code === '1') {
                saveData.peInfo[0].peParty.push({
                  annlSign: inf.yearBuilderInfo.code,//本年报年度　  组建党组织标志
                  estPartyFlag: inf.isBuilderInfo.code,//是否建立党建信息
                  estPartyTime: inf.birthDay.value,//党组织建立时间
                  insId: inf.organic.code,//党组织建制
                  orgId: inf.wayTo.code,//党组织组建方式
                  partyNum: inf.peopleNum.value + '',//党员人数
                  leaderSecretarySign: inf.secretaryInfo.code,//法定代表人　党组织书记标志
                  leaderSign: inf.partyMemberInfo.code,//法定代表人党员标志
                })
              }
            } else if (pageNum == 9) {
              if (inf.isBuilderInfo === '有') {
                inf.licenseList.map((v)=>{
                  saveData.peInfo[0].pePmtInfo.push({
                    permitFileName: v.fileName2.title,//许可文件名称
                    permitFileNo: v.fileCode,//许可文件编号
                    permitFileStatus: v.validity.code,//许可文件状态
                    permitFileTrd: v.scope2.code,//许可文件经营范围编号
                    permitFileType: v.scope.code,//许可文件类型(许可文件名称的字典id)
                    permitFileTrdName: v.fileName2.code,//许可文件经营范围内容（文字字典值）
                    permitOrgan: v.office,//许可机关（文字内容）
                    validDateStart: v.startDay,//开始有效时间（XXXX-XX-XX）
                    validDateEnd: v.endDay,//截止有效时间 (XXXX-XX-XX)
                  })
                })
              }
            }
            // console.log(pageNum, res);
            // console.log(saveData);
            num++
            sessionStorage.setItem("80205Send", JSON.stringify(saveData))
            if (num > 6) {
              this.$ajaxRequest('post', '/gsp/mng80205', {
                txnBodyCom: saveData
              })
                .then(res => {
                  console.log('save', res);
                  this.isDisable = false
                  if (res['C-API-Status'] === '01') {
                    // this.$toast(res['errorinfo'])
                    return false
                  }
                  sessionStorage.setItem("80205Res", JSON.stringify(res))
                  this.$router.push('/stuffIndex')
                })
                .catch(error => {
                  this.isDisable = false
                  console.log(error)
                })
            }
          })
        }
      },
    },
    created() {
      this.getFilesCode("1027", this.fileNameValues)
      this.getFilesCode("1026", this.scopeValues)
      this.getFilesCode("1028", this.validityValues)
      MessageBox.alert('请填写个体工商户开业设立涉及的许可文件，若无请略过', '许可文件')
      this.licenseList = this.$store._modules.root.state.AICstore.licenseArr
      // console.log(this.licenseList)
      let data = {
        txnBodyCom: {
          work_id: sessionStorage.WorkId,
          isdeal: '0'
        }
      }
      this.$ajaxRequest('post', '/gsp/appForm00002', data)
        .then(res => {
          if (res.Json_Content && res.Json_Content.length > 0) {
            let content = JSON.parse(res.Json_Content)
            this.appNo = content.appNo
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
  }
</script>

<style lang="less" scoped>
  .licenseFileCont {
    min-height: 5rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .licenseFileCont .datetime {
    color: #999;
    width: 100%;
    overflow: hidden;
  }

  .submitBox {
    text-align: center;
    .submitBtn {
      width: 2.2rem;
      border-radius: .4rem;
    }
    .addBtn {
      margin-left: .6rem;
      background: #08C173;
    }
  }

  .licenseFile {
    text-align: left;
  }

  .borderBottom {
    border-bottom: 1px solid #D6D8DC;
    padding: 0;
  }

  .mypopup {
    width: 100%;
  }

  .mint-cell {
    padding: 0 15px;
  }

  .pop-btn {
    line-height: .8rem;
    height: .8rem;
    color: #26a2ff;
    font-size: .32rem;
    .order_insure {
      text-align: center;
      display: inline-block;
      width: 49%;
    }
    .order_cancel {
      display: inline-block;
      text-align: center;
      width: 49%;
    }
  }

  .required {
    color: #EE6723;
    transform: translateY(.08rem);
    font-size: .28rem;
    margin-right: .1rem;
  }

  .inputCell {
    text-align: right;
  }

  .saveBox {
    margin: .5rem 0;
    text-align: center;
    .saveBtn {
      max-width: 4rem;
      border-radius: .4rem;
      width: 35%;
      margin-right: 10px;
    }
    .saveBtn.backBtn {
      border: 1px solid #ccc;
    }
  }

  .clearPadding {
    padding: 0;
  }

  .listNoneImg {
    width: 90%;
    margin-top: 1rem;
  }

  .licenseUl {
    text-align: left;
  }

  .licenseitem {
    width: 100%;
    padding: 10px 40px 10px 10px;
    position: relative;
    margin-bottom: 6px;
    background-color: #fff;
  }

  .licenseitem h5 {
    font-size: 14px;
    font-weight: 700;
    padding: 6px 0;
  }

  .licenseitem p {
    font-size: 12px;
    padding: 4px 0;
  }

  .licenseitem:before {
    position: absolute;
    width: 40px;
    top: 50%;
    right: 0;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    text-align: center;
  }
</style>
<style>
  .licenseFile .mint-cell-value {
    max-width: 60%;
  }
</style>
