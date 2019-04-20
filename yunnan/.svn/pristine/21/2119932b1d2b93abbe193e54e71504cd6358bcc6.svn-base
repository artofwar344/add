<template>
	<div class="fivefivefive">
			<!-- 选择司法厅省级的下拉菜单 -->
			<Field readonly label="主管司法机构" desc="" disableclear type="text" 
			placeholder="请选择云南省司法厅（省级）" 
			:required=false 
			:value="confirmValSelect01" 
			@click.native="open01('pickerselect01')">
			<span class="example-select_arrowRight"> > </span>
			</Field>
			<Selectpopup ref="pickerselect01" position="bottom"   :dataslots="selectData01" :visible-item-count="5" class="example-select_item" @selectval="selectChangeFun1" @confirms="selectConfirmFun01">
			</Selectpopup>
			<!-- 选择司法厅市级的下拉菜单 -->
			<Field readonly label="主管司法机构(市级)" desc="" disableclear type="text" 
			placeholder="请选择云南省司法厅(市级)" 
			:required=false 
			:value="confirmValSelect02" 
			@click.native="open02('pickerselect02')">
			<span class="example-select_arrowRight"> > </span>
			</Field>
			<Selectpopup ref="pickerselect02" position="bottom"   :dataslots="selectData02" :visible-item-count="5" class="example-select_item" @selectval="selectChangeFun2" @confirms="selectConfirmFun02">
			</Selectpopup>
			<!-- 选择司法厅县级的下拉菜单 -->
			<Field readonly label="主管司法机构(县级)" desc="" disableclear type="text" 
			placeholder="请选择云南省司法厅(县级)" 
			:required=false 
			:value="confirmValSelect03" 
			@click.native="open03('pickerselect03')">
			<span class="example-select_arrowRight"> > </span>
			</Field>
			<Selectpopup ref="pickerselect03" position="bottom"   :dataslots="selectData03" :visible-item-count="5" class="example-select_item" @selectval="selectChangeFun3" @confirms="selectConfirmFun03">
			</Selectpopup>


	</div>
</template>
<script>
	const profession = {

	};
	export default {
		
		data() {
			return {
				// 选择司法厅省级的下拉菜单
				confirmValSelect01: '',
				selectval:'',
				selectData01: 
				[
					{
						flex: 1,
						values: [],
						showText:'text',
						className: "slot1",
						textAlign: "center"
					},
				],
	    		// 选择司法厅市级的下拉菜单
	    		confirmValSelect02: '',
				selectval2:'',
				selectData02: 
				[
					{
						flex: 1,
						values: [],
						showText:'text',
						className: "slot1",
						textAlign: "center"
					},
				],
				// 选择司法厅县级的下拉菜单
				confirmValSelect03: '',
				selectval3:'',
				selectData03: 
				[
					{
						flex: 1,
						values: [],
						showText:'text',
						className: "slot1",
						textAlign: "center"
					},
				],
	    		pid:'',
	    		
			}
		},
		created() {
			this.get_zgsfjg()
		},
		methods: {
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
					for(var i = 0; i < res.list.length; i++) {
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

					for(var i = 0; i < res.list.length; i++) {
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
					for(var i = 0; i < res.list.length; i++) {
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

		}
	}
</script>
