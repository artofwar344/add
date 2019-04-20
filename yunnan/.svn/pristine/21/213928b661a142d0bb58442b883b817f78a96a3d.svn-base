<template>
	<div class="lsbgzyjg_two">
		<towtop style="margin: 0" :name="titlename"/>
		<div class="header2">基本信息</div>
		<div class="content">
			<ul>
				<li>
					<h2>申请人</h2>
					<p>{{ arr.c_xm }}</p>
				</li>
				<li>
					<h2>性别</h2>
					<p>{{ arr.c_xb }}</p>
				</li>
				<li>

					<h2>资格证类别</h2>
					<p>{{ arr.c_zgzlb }}</p>
				</li>
				<li>
					<h2>资格证号</h2>
					<p style="height: 100%;text-align: right;line-height: 0.5rem;width:4rem">
					{{ arr.c_zgzh }}
					</p>
				</li>
				<li>
					<h2>原执业机构名称</h2>
					<p style="height: 100%;text-align: right;line-height: 0.5rem" v-model="jigou_name">
						{{arr.c_zyjgmc}}
					</p>
				</li>
				<li>
					<h2>执业类别</h2>
					<p>{{ arr.c_zylbn }}</p>
				</li>
			</ul>
		</div>
		<div class="fy_gz_gs" v-if="this.c_zylbc == '03'|| this.c_zylbc =='09'||this.c_zylbc == '04'">
			<div class="header2">执业变更信息</div>
      <div class="littlestarbig">
        <span class="littlestar" >*</span>
			<Field  type="text" label="拟加入执业机构名称" :value="textValue" placeholder="请输入拟加入执业机构名称"  v-on:currentval="handleTextareaVal1">
				<!-- <span @click="get_zyjg()" class="spani">
					<Icon type="search" color="#999999"></Icon>
				</span> -->
			</Field>
      </div>
			<!-- 选择司法厅省级的下拉菜单 -->
      <div class="littlestarbig">
        <span class="littlestar" >*</span>
			<Field readonly label="主管司法机构（省级）" desc="" disableclear type="text"
			placeholder="请选择云南省司法厅（省级）"
			:required=false
			:value="confirmValSelect01"
			@click.native="open01('pickerselect01')">
			<span class="example-select_arrowRight"> > </span>
			</Field>
      </div>
			<Selectpopup ref="pickerselect01" position="bottom"   :dataslots="selectData01" :visible-item-count="5" class="example-select_item" @selectval="selectChangeFun1" @confirms="selectConfirmFun01">
			</Selectpopup>
			<!-- 选择司法厅市级的下拉菜单 -->
			<Field readonly label="主管司法机构(州市级)" desc="" disableclear type="text"
			placeholder="请选择云南省司法厅(州市级)"
			:required=false
			:value="confirmValSelect02"
			@click.native="open02('pickerselect02')">
			<span class="example-select_arrowRight"> > </span>
			</Field>
			<Selectpopup ref="pickerselect02" position="bottom"   :dataslots="selectData02" :visible-item-count="5" class="example-select_item" @selectval="selectChangeFun2" @confirms="selectConfirmFun02">
			</Selectpopup>
			<!-- 选择司法厅县级的下拉菜单 -->
			<Field readonly label="主管司法机构(县区级)" desc="" disableclear type="text"
			placeholder="请选择云南省司法厅(县区级)"
			:required=false
			:value="confirmValSelect03"
			@click.native="open03('pickerselect03')">
			<span class="example-select_arrowRight"> > </span>
			</Field>
			<Selectpopup ref="pickerselect03" position="bottom"   :dataslots="selectData03" :visible-item-count="5" class="example-select_item" @selectval="selectChangeFun3" @confirms="selectConfirmFun03">
			</Selectpopup>
      <div class="littlestarbig1">
        <span class="littlestar1">*</span>
			<div class="zyjl">执业经历</div>
      </div>
			<Field class="textarea" type="textarea" label="" :value="textareaValue"  required  rows="6" v-on:currentval="handleTextareaVal2" :placeholder="placeholdervalue">
			</Field>
		</div>
    	<div class="fy_gz_gs" v-if="this.c_zylbc == '111111111111111111111111'">
      		<div class="header2">执业变更信息</div>
        <div class="littlestarbig">
          <span class="littlestar">*</span>
      		<Field  type="text" label="拟加入执业机构名称" v-model="textValue" placeholder="请输入执业机构名称" >
				<span @click="get_zyjg()" class="spani">
					<Icon type="search" color="#999999"></Icon>
				</span>
      		</Field>
        </div>
      	<div class="areaSelectBox" v-if="lsTypeStatus === '00' || lsTypeStatus === '02'">
        <!-- 选择司法厅省级的下拉菜单 -->
          <div class="littlestarbig">
            <span class="littlestar" >*</span>
        <Field readonly label="主管司法机构（省级）" desc="" disableclear type="text"
               placeholder="请选择云南省司法厅（省级）"
               :value="confirmValSelect01"
               @click.native="open01('pickerselect01')">
          <span class="example-select_arrowRight"> > </span>
        </Field>
          </div>
        <Selectpopup ref="pickerselect01" position="bottom"   :dataslots="selectData01" :visible-item-count="5" class="example-select_item" @selectval="selectChangeFun1" @confirms="selectConfirmFun01">
        </Selectpopup>
        <!-- 选择司法厅市级的下拉菜单 -->
          <div class="littlestarbig">
            <span class="littlestar">*</span>
        <Field readonly label="主管司法机构(州市级)" desc="" disableclear type="text"
               placeholder="请选择云南省司法厅(州市级)"
               :required=false
               :value="confirmValSelect02"
               @click.native="open02('pickerselect02')">
          <span class="example-select_arrowRight"> > </span>
        </Field>
          </div>
        <Selectpopup ref="pickerselect02" position="bottom"   :dataslots="selectData02" :visible-item-count="5" class="example-select_item" @selectval="selectChangeFun2" @confirms="selectConfirmFun02">
        </Selectpopup>
        <!-- 选择司法厅县级的下拉菜单 -->
        <Field readonly label="主管司法机构(县区级)" desc="" disableclear type="text"
               placeholder="请选择云南省司法厅(县区级)"
               :required=false
               :value="confirmValSelect03"
               @click.native="open03('pickerselect03')">
          <span class="example-select_arrowRight"> > </span>
        </Field>
        <Selectpopup ref="pickerselect03" position="bottom"   :dataslots="selectData03" :visible-item-count="5" class="example-select_item" @selectval="selectChangeFun3" @confirms="selectConfirmFun03">
        </Selectpopup>
      </div>
        <div class="littlestarbig1">
          <span class="littlestar1">*</span>
      <div class="zyjl">执业经历</div>
        </div>
      <Field class="textarea" type="textarea" label="" :value="textareaValue"    rows="6" v-on:currentval="handleTextareaVal2" :placeholder="placeholdervalue">
      </Field>
    </div>
		<div class="zz" v-if="this.c_zylbc == '01'">
			<div class="header2">执业变更信息</div>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
			<Field  type="text" label="拟加入执业机构名称" :value="textValue" placeholder="请输入执业机构名称"  v-on:currentval="handleTextareaVal1" >
				<span @click="get_zyjg()" class="spani">
					<Icon type="search"   color="#999999"></Icon>
				</span>
			</Field>
      </div>
      <div class="littlestarbig1">
        <span class="littlestar1">*</span>
			<div class="zyjl">执业经历</div>
      </div>
			<Field class="textarea" type="textarea" label="" :value="textareaValue"    rows="6" v-on:currentval="handleTextareaVal2" :placeholder="placeholdervalue">
			</Field>
		</div>
		<div class="jz" v-if="this.c_zylbc == '02'">
			<div class="header2">执业变更信息</div>
      <div class="littlestarbig">
        <span class="littlestar">*</span>
			<Field  type="text" label="拟加入执业机构名称" :value="textValue" placeholder="请输入执业机构名称"  v-on:currentval="handleTextareaVal1">
				<span @click="get_zyjg()" class="spani">
					<Icon type="search"   color="#999999"></Icon>
				</span>
			</Field>
      </div>
		<!-- 	<Field  type="text" label="工作单位" :value="textValue_gzdw" placeholder="请输入工作单位" required v-on:currentval="handleTextareaVal4">
			</Field> -->
      <div class="littlestarbig1">
        <span class="littlestar1">*</span>
			<div class="zyjl">执业经历</div>
      </div>
			<Field class="textarea" type="textarea" label="" :value="textareaValue"    rows="6" v-on:currentval="handleTextareaVal2" :placeholder="placeholdervalue">
			</Field>
		</div>
		<!-- <Btn plain block @click="next_btn">下一步</Btn> -->
		<div class="padTopAdd5">
          <mybutton :btnData="btnData" @click="next_btn" />
        </div>
	</div>
</template>
<script>
	import towtop from '../../../../components/HederTwo'
	import mybutton from "../../../../components/MyButton";
	const profession = {

	};
	export default {
		data() {
			return {
				btnData:[
			        {
			          text:'下一步',
			          disabled: false,
			          isSure: true,
			        }
      			],
				titlename:"律师变更执业机构许可(省内变更)",
				// 输入框内容
				textValue:'',
				// 文本域绑定内容
				placeholdervalue:'可最多输入300字',
				confirmValSelect01: '',

				// 选择司法厅省级的下拉菜单
				confirmValSelect01: '',
				selectval:'',
        		selectData01: [{
        		  flex: 1,
        		  values: [],
        		  showText: 'text',
        		  className: "slot1",
        		  textAlign: "center"
        		}],
        		// 选择司法厅市级的下拉菜单
        		confirmValSelect02: '',
						selectval2:'',
        		selectData02: [{
        		  flex: 1,
        		  values: [],
        		  showText: 'text',
        		  className: "slot1",
        		  textAlign: "center"
        		}],
				// 选择司法厅县级的下拉菜单
				confirmValSelect03: '',
				selectval3:'',
        		selectData03: [{
        		  flex: 1,
        		  values: [],
        		  showText: 'text',
        		  className: "slot1",
        		  textAlign: "center"
        		}],
        		pid: '',
        		// 文本域绑定内容
        		textareaValue: '',
        		arr: [],
        		c_zylbc: '',
        		//工作单位
        		textValue_gzdw: '',
        		c_userid: '',
        		c_bh: '',
        		workid: '',
        		lsTypeStatus: '',
        		gzdw: '',
        		c_pid:'',
        		c_sfjg:'',
        		jigou_name:'',
        		flage:true,
			}
		},
		components:{
			mybutton,
			towtop
		},
		created() {
			this.workid = sessionStorage.getItem("WorkId")
			this.c_zylbc = this.$route.params.c_zylbc
			// 01-专职律师
			// 02-兼职律师
			// 03-公职律师
			// 04-公司律师
			// 09-法援律师
			// this.c_zylbc = '02';
			let personid = sessionStorage.getItem("cardid");
			let data = {
				"txnCommCom": {
					"tenant":"530000000000",
					"txn_itt_chnl_id":"00",
					"txn_itt_chnl_type":"11"
				},
				// "txnBodyCom": {
				// 	"c_sfzh":"532231199309040927",
  		// 			"c_xm":"",
  		// 			"c_zyzh":"",
  		// 			"c_bh":"",
  		// 			"c_zyjg":""
				// 		}
        		"txnBodyCom": {
        		  matter_id: window.sessionStorage.getItem("matterid"),
        		  "c_sfzh": personid,
        		  "c_xm": "",
        		  "c_zyzh": "",
        		  "c_bh": "",
        		  "c_zyjg": ""
        		}
			}
			let pagejump = {
				"tRecInPage":"10",
				"tPageJump":"1",
			}
			console.log(data);
			this.$ajaxRequest('post','/gsp/mng90039',data,pagejump)
			.then(res=>{
        console.log(res)
        if (res.list[0] == '') {
        	this.$toast('未查询到您的律师信息，无法办理此事项！')
        }
        this.arr = {}
        this.c_userid = res.list[0].c_bh
        this.arr = res.list[0]
        // this.arr.c_zyjgmc = '云南格元律师事务所'
        this.jigou_name = this.arr.c_zyjgmc

        this.setStutas(this.arr.c_zylbn)
				for(let i in this.arr) {
					console.log(this.arr)
					if(this.arr[i] == 'null') {
						this.arr[i] = '未查询到相应数据'
					}
				}

				if(this.arr.c_xb == '01') {
						this.arr.c_xb = '男'
					}else{
						this.arr.c_xb = '女'
					}
        if (res.status == 200) {
          console.log(res.data)
          let cent = JSON.stringify(res.data);
          cent = cent.replace("C-Response-Body", "body");
          cent = JSON.parse(cent);
          cent = JSON.parse(cent.body);
          this.list = cent.result;
        } else {
          console.log(res);
        }
			})
			.catch(error=>{
				console.log(error)
				this.$toast('未查询到您的律师信息，无法办理此事项！')
			})

				this.get_zgsfjg()

		},
		methods: {
			 next_btn() {
			 		if (this.textareaValue.length > 300) {
			 			this.$toast('请填写执业经历，300个字以内！')
			 			return
			 		}
			 		if (this.c_zylbc == '01'||this.c_zylbc == '02') {
			 			// debugger
						if (this.flage) {
							this.get_zyjg()
						}else {
							this.form_data()
						}
						this.flage = !this.flage
						return
					}
					if(this.c_zylbc == '03'||this.c_zylbc == '04'||this.c_zylbc == '09'){
						this.form_data()
						return
					}
			},
			handleTextareaVal1(val) {
				this.textValue = val
			},
			handleTextareaVal2(val) {
				this.textareaValue = val
				if (this.textareaValue.length > 300) {
					this.$toast('请填写执业经历，300个字以内！')
					this.textareaValue.length = 300
					return
				}
			},
			handleTextareaVal4(val) {
				this.textValue_gzdw = val
				if (this.textValue_gzdw.length > 32) {
					this.$toast('请填写工作单位，32个字以内！')
					this.textValue_gzdw.length = 32
					return
				}
			},
			open01(picker) {
				this.$refs[picker].open();
				document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
			},
			selectChangeFun1(picker, val) {
				picker.setSlotValues(1, profession[val[0]]);
			},
			selectConfirmFun01(selectedVal) {
				this.c_pid = selectedVal[0].value
				this.c_sfjg = selectedVal[0].text
				this.confirmValSelect02 = ""
				this.confirmValSelect03 = ""
				if(typeof selectedVal[0] === 'object'){
					this.confirmValSelect01 = selectedVal[0].text;
				}else{
					this.confirmValSelect01 = selectedVal;
				}
				this.get_zgsfjg_shi()
			},
			open02(picker) {
				this.$refs[picker].open();
				document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
			},
			selectChangeFun2(picker, val) {
				picker.setSlotValues(1, profession[val[0]]);
			},
			selectConfirmFun02(selectedVal2) {
				this.c_pid = selectedVal2[0].value
				this.c_sfjg = selectedVal2[0].text
				this.confirmValSelect03 = ""
				if(typeof selectedVal2[0] === 'object'){
					this.confirmValSelect02 = selectedVal2[0].text;
				}else{
					this.confirmValSelect02 = selectedVal2;
				}
				this.pid = selectedVal2[0].value
				this.get_zgsfjg_xian();
			},
			open03(picker) {
				this.$refs[picker].open();
				document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
			},
			selectChangeFun3(picker, val) {
				picker.setSlotValues(1, profession[val[0]]);
			},
			selectConfirmFun03(selectedVal3) {
				this.c_pid = selectedVal3[0].value
				this.c_sfjg = selectedVal3[0].text
				if(typeof selectedVal3[0] === 'object'){
					this.confirmValSelect03 = selectedVal3[0].text;
				}else{
					this.confirmValSelect03= selectedVal3;
				}
			},
			get_zgsfjg() {
				let data = {
					 	"txnCommCom": {
					 	 "tenant":"530000000000",
					 	 "txn_itt_chnl_id":"00",
					 	 "txn_itt_chnl_type":"11"
					 	},
					 	"txnBodyCom": {
					 	 "n_level":"0",
					 	 "c_pid":""
					 	}
					}
				this.$ajaxRequest('post','/gsp/mng90040',data)
				.then(res=>{
					console.log(res)

					for(let i = 0; i < res.list.length; i++) {
						let list = {
										text:res.list[i].c_name,
										value:res.list[i].c_ld
									}

						this.selectData01[0].values.push(list)

					}
				})
				.catch(error=>{
					console.log(error)
				})
			},
			get_zgsfjg_shi() {
				let data = {
					 	"txnCommCom": {
					 	 "tenant":"530000000000",
					 	 "txn_itt_chnl_id":"00",
					 	 "txn_itt_chnl_type":"11"
					 	},
					 	"txnBodyCom": {
					 	 "n_level":"1",
					 	 "c_pid":""
					 	}
					}
				this.$ajaxRequest('post','/gsp/mng90040',data)
				.then(res=>{
					console.log(res)

					for(let i = 0; i < res.list.length; i++) {
						let list = {
										text:res.list[i].c_name,
										value:res.list[i].c_ld
									}
						this.selectData02[0].values.push(list)
					}
				})
				.catch(error=>{
					console.log(error)
				})
			},
			get_zgsfjg_xian() {
				let data = {
					 	"txnCommCom": {
					 	 "tenant":"530000000000",
					 	 "txn_itt_chnl_id":"00",
					 	 "txn_itt_chnl_type":"11"
					 	},
					 	"txnBodyCom": {
					 	 "n_level":"2",
					 	 "c_pid":this.pid
					 	}
					}
				this.$ajaxRequest('post','/gsp/mng90040',data)
				.then(res=>{
					console.log(res)
					for(let i = 0; i < res.list.length; i++) {
						let list = {
										text:res.list[i].c_name,
										value:res.list[i].c_ld
									}
						this.selectData03[0].values.push(list)
					}
				})
				.catch(error=>{
					console.log(error)
				})

			},
			get_zyjg() {
				let data = {
					"txnCommCom": {
						"tenant":"530000000000",
						"txn_itt_chnl_id":"00",
						"txn_itt_chnl_type":"11"
					},
					"txnBodyCom": {
						matter_id: window.sessionStorage.getItem("matterid"),
						"c_zwmc":this.textValue
					}
				}
				this.$ajaxRequest('post','/gsp/mng90038',data)
				.then(res=>{
					console.log(res)
					this.flage = false
					this.c_bh = res.obj.c_bh
					if (res.status == '00') {
						this.textValue = res.obj.c_zwmc
					}
					if(this.textValue==this.jigou_name){
					this.$toast('拟加入执业机构名称不能与原执业机构名称相同！')
					return false
					}
					if (res == '') {
						this.$toast('请输入更准确的执业机构内容！')
						this.flage = true
						return
					}

				})
				.catch(error=>{
					this.$toast('请输入更准确的执业机构内容！')
					this.flage = true
					return
				})
			},
      setStutas (type) {
        const _self = this
        switch (type) {
          case '法援律师':
            _self.setTypeDom(_self.c_zylbc, '00')
            break
          case '公职律师':
            _self.setTypeDom(_self.c_zylbc, '00')
            break
          case '公司律师':
            _self.setTypeDom(_self.c_zylbc, '00')
            break
          case '专职律师':
            _self.setTypeDom(_self.c_zylbc, '01')
            break
          case '兼职律师':
            _self.setTypeDom(_self.c_zylbc, '02')
            break
          default:
            _self.$toast('暂时无法判断此类型律师')
        }
      },
      setTypeDom (type, status) {
        const _self = this
        if (type !== '04') return
        _self.lsTypeStatus = status
      },
      testValue () {
        const _self = this
        const testType1 = () => {
          let o = false
          if (!_self.textValue) {
            o = true
            _self.$toast('请输入执业机构名称')
          } else if (!_self.confirmValSelect01) {
            o = true
            _self.$toast('请选择主管司法机构（省级）')
          }
          else if (!_self.textareaValue) {
            o = true
            _self.$toast('请输入执业经历')
          }
          return o
        }
        const testType2 = () => {
          let o = false
          if (!_self.textValue) {
            o = true
            _self.$toast('请输入执业机构名称')
          } else if (!_self.textareaValue) {
            o = true
            _self.$toast('请输入执业经历')
          }
          return o
        }
        const testType3 = () => {
          let o = false
          if (!_self.textValue) {
            o = true
            _self.$toast('请输入执业机构名称')
          } else if (!_self.confirmValSelect01) {
            o = true
            _self.$toast('请选择主管司法机构（省级）')
          }
          else if (!_self.gzdw) {
            o = true
            _self.$toast('请输入工作单位')
          } else if (!_self.textareaValue) {
            o = true
            _self.$toast('请输入执业经历')
          }
          return o
        }
        let status = false
        switch (_self.lsTypeStatus) {
          case '00':
            status = testType1()
            break
          case '01':
            status = testType2()
            break
          case '02':
            status = testType3()
            break
          default:
        }
        return status
      },
      form_data(){
			if (this.c_zylbc == '03'||this.c_zylbc == '04'||this.c_zylbc == '09'){
					if (!this.textValue) {
            this.$toast('请输入执业机构名称')
            return false
          }
          if (!this.confirmValSelect01) {
            this.$toast('请选择主管司法机构（省级）')
            return false
          }
          if (!this.textareaValue) {
            this.$toast('请输入执业经历')
            return false
          }
					let data = {
						'txnBodyCom':{
							'work_id':this.workid,
							'matter_id':window.sessionStorage.getItem("matterid"),
							'json_content':{
								'work_id':this.workid,
								//律师编号
								'lwr_id':this.c_userid,
								//变更后执业机构编号
								'afmd_prct_ins_id':this.c_bh,
								//执业经历
								'prct_exprnc':this.textareaValue,
								//变更后工作单位名称
								'afmd_wrk_unit_nm':this.textValue,
								'afmd_wbt_lgl_inst_nm':this.c_sfjg,
								'afmd_wbt_lgl_inst':this.c_pid,
							}
						}
					}
					// alert(this.workid)

					this.$ajaxRequest('post','/gsp/appForm00001',data)
					.then(res => {
						console.log(res)
					})
					.catch(err => {
						console.log(err)
					})
					// debugger
					this.$router.push({
						name:'lsbgzyjg_three',
					})

				}else if(this.c_zylbc == '01') {
					if (!this.textValue) {
            this.$toast('请输入执业机构名称')
            return false
          }
          if(!this.textareaValue) {
            this.$toast('请输入执业经历')
            return false
          }
					let data = {
						'txnBodyCom':{
							'work_id':this.workid,
							'matter_id':window.sessionStorage.getItem("matterid"),
							'json_content':{
								'work_id':this.workid,
								//律师编号
								'lwr_id':this.c_userid,
								//变更后执业机构编号
								'afmd_prct_ins_id':this.c_bh,
								//执业经历
								'prct_exprnc':this.textareaValue,
								//变更后工作单位名称
								'afmd_prct_ins_nm':this.textValue,
							}
						}
				}

				this.$ajaxRequest('post','/gsp/appForm00001',data)
				.then(res => {
					console.log(res)

				})
				.catch(err => {
					console.log(err)
				})

				this.$router.push({
					name:'lsbgzyjg_three',
				})

				}else if(this.c_zylbc == '02') {
					if (!this.textValue) {
            this.$toast('请输入执业机构名称')
            return false
          }
         	// if (!this.textValue_gzdw) {
          //   this.$toast('请输入工作单位')
          //   return false
          // }
          if (!this.textareaValue) {
            this.$toast('请输入执业经历')
            return false
          }
				let data = {
						'txnBodyCom':{
							'work_id':this.workid,
							'matter_id':window.sessionStorage.getItem("matterid"),
							'json_content':{
								'work_id':this.workid,
								//律师编号
								'lwr_id':this.c_userid,
								//变更后执业机构编号
								'afmd_prct_ins_id':this.c_bh,
								//执业经历
								'prct_exprnc':this.textareaValue,
								//变更后工作单位名称
								// 'afmd_wrk_unit_nm':this.textValue_gzdw,
								'afmd_prct_ins_nm':this.textValue,
								// '':,

							}
						}
				}

					this.$ajaxRequest('post','/gsp/appForm00001',data)
					.then(res => {
						console.log(res)
					})
					.catch(err => {
						console.log(err)
					})

					this.$router.push({
						name:'lsbgzyjg_three',
					})
				}
				}
		},
		mounted(){},
	};
</script>
<style scoped="lsbgzyjg_two.vue">
	.lsbgzyjg_two .header2 {
		width: 90%;
		margin: 0 auto;
		height: 0.6rem;
		font-size: 0.28rem;
		line-height: 0.6rem;
		text-align: left;
		color: #999;
	}
	.lsbgzyjg_two .content {
		background-color: #fff;
	}
	.lsbgzyjg_two .content .headimg {
		width: 1.48rem;
		height: 2.08rem;
		margin: 0 auto;
	}
	.lsbgzyjg_two .headimg img {
		display: block;
		width: 100%;
		height: 100%;
	}
	.lsbgzyjg_two .content ul {
		width: 100%;
		background-color: #fff;
	}
	.lsbgzyjg_two .content li {
		width: 90%;
		height: 1rem;
		line-height: 1rem;
		margin: 0 auto;
		border-bottom: 0.01rem solid #ccc;
		font-size: 0.28rem;
	}
	.lsbgzyjg_two .content li h2 {
		float: left;
		line-height: 1rem;
	}
	.lsbgzyjg_two .content li p {
		float: right;
		color: #999;
		width: 3rem;
    text-align: right;
	}
	.lsbgzyjg_two .hui-field_main .hui-field_star {
		display: none;
	}
	.lsbgzyjg_two .hui-field_main {
		height: 0.9rem;
		line-height: 0.9rem;
	}
	.lsbgzyjg_two .hui-field_textarea .hui-field_title {
		padding-top: 0.2rem;
		padding-left: 0.1rem;
	}
	.lsbgzyjg_two .hui-btn.is-block {
		font-weight: 700;
		display: inline-block;
		width: 5.9rem;
		height: 0.9rem;
		margin: 0.6rem 0.35rem;
		background-color: #2D7FFC;
		font-size: 0.32rem;
		color: #fff;
	}
	.lsbgzyjg_two .hui-field_title {
		width:3rem;
		font-size: 0.28rem;
	}
	.lsbgzyjg_two .textarea .hui-field_core {
		text-align: left;
	}
	.lsbgzyjg_two .textarea .hui-field_value {
		display: block;
		width: 100%
	}
	.lsbgzyjg_two .textarea .hui-field_title {
		width: 0rem;
	}
	.lsbgzyjg_two .zyjl {
		width: 90%;
		padding:0 0.35rem;
		font-size: 0.28rem;
		height: 0.6rem;
		line-height: 0.6rem;
		text-align: left;
		color: #999;
	}
	.lsbgzyjg_two .hui-field_append {
		margin-left: 0.15rem;
	}
	.lsbgzyjg_two .textarea .hui-field_main {
		height: 2.7rem;
	}


</style>
<style>
	.lsbgzyjg_two .hui-field_textarea{
		height: 100% !important;
	}
	.lsbgzyjg_two .hui-field_textarea .hui-field_main{
		height: auto !important;
	}
	.lsbgzyjg_two .hui-field_textarea .hui-field_core {
		text-align: left;
	}
	.lsbgzyjg_two .hui-field_core {
		text-align: left;
	}
	.lsbgzyjg_two	.hui-field_main {
		font-size: 0.28rem;

	}
	.lsbgzyjg_two .hui-field_title {
		width: 49%;
	}
	.lsbgzyjg_two .spani .hui-icon_search {
		font-size: 0.32rem
	}
	.lsbgzyjg_two .hui-field_clear {
		margin-right: 0.2rem;
	}
  .lsbgzyjg_two .littlestarbig{
    position: relative;
  }
  .lsbgzyjg_two .littlestar{
    display: inline-block;
    color: red;
    font-size:0.4rem;
    position: absolute;
    left:0.1rem;
    top: 0.45rem;
  }
  .lsbgzyjg_two .littlestarbig1{
    position: relative;
  }
  .lsbgzyjg_two .littlestar1{
    display: inline-block;
    color: red;
    font-size:0.4rem;
    position: absolute;
    left:0.1rem;
    top: 0.14rem;
  }
</style>
