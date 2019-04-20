<template>
	<div class='officeMail'>
		<towtop :name='hadertow' />
		<div class='officeMailConetnt'>
			<mt-cell title="标题文字"></mt-cell>
			<mt-cell title="标题文字" value="说明文字"></mt-cell>
			<mt-cell :title="title" value="说明文字"></mt-cell>
			<mt-cell title="标题文字" value="说明文字"></mt-cell>
		</div>
		<div class='submit'>
		<mt-button type="primary" class='submitBtn' @click='goback'>确定</mt-button>
		<mt-button type="primary" class='submitBtn' @click='checkWuliuInfo'>查看物流信息</mt-button>
		</div>
	</div>
  
</template>

<script>
  import towtop from '../../../components/HederTwo'

  export default {
  	name:'viewLogisticsInformation',
    data() {
      return {
       hadertow: "局委邮递",
			title:'左侧的文字'
      }
    },
   components: {
				towtop,
			
			},
    methods: {
    	goback(){
    		this.$router.go(-1)
    	},
    	checkWuliuInfo(){
    		this.$router.push({path:'/QueryResult',query:{}})
    		
    	},
    	getState() { //获取状态,是否已经提交过物流信息
					this.$ajaxRequest('post', '/gsp/mng30059', {
							txnCommCom: {
								tStsTraceId: "110567890",
								txnIttChnlId: 'C0011234567890987654321',
								txnIttChnlCgyCode: 'AC02C001'
							},
							txnBodyCom: {
								'work_id': this.workId,
								'member_id': this.memberId,
								'matter_id': this.matterId,
								flag: '1'
							}
						})
						.then((res) => {
							//判断状态 type为1 或者23（预约，查看信息）
							//为1的时候confirmValSelect01=否
							console.log(res)
						})
						.catch((error) => {

						})
				},
    },
    created() {
    		this.workId = this.$store._modules.root.state.$expressdelivery.wuliuTodeliveryWorkId || '6F10F72B19'
				this.matterId = this.$store._modules.root.state.$expressdelivery.matterid || '6D6979FD227F06A0E0530ADDC480CBE6'
				this.memberId = this.$store._modules.root.state.$expressdelivery.userid || '5d0fb11775734b9e9a1ce71b9e4e6224'
				this.getState()
    },
    mounted(){}
  }
</script>

<style scoped>
  .officeMail{
  	text-align: left;
  }
  .submit{
  	margin-top: .4rem;
  	text-align: center;
  }
  .submit .submitBtn{
  	width: 70%;
  }
</style>
