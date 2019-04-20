<template>
	<div>
		<towtop :name="titlename" />
		<div class="example-formgroup">
			<FormGroup  title-position="left">
				<Field  desc-class="richText" type="text" label="发票代码"  placeholder="请输入发票代码">
				</Field>
				<Field desc-class="richText" type="text" label="发票号码" placeholder="请输入发票号码">
				</Field>
				<Field desc-class="richText" type="text" label="开票日期"  placeholder="请输入开票日期">
				</Field>
				<Field  class="ipt4" desc-class="richText" type="text" label="开具金额(不含税)"  placeholder="请输入开具金额(不含税)">
				</Field>
				<div class="verificationCodeRow">
					<Field type="text" label="验证码" placeholder="请输入验证码">
            			<div class="field-append_text" slot="append">
              				<img :src="verificationCodeUrl" alt="">
            			</div>
          			</Field>
     			 </div>
			</FormGroup>
		</div>
		<Btn block @click="cy_btn">查验</Btn>
		<div class="btm">
			<div class="header">
				<div class="blue"></div>
				<div class="title">温馨提示</div>
			</div>
			<p>1、首次查验前请点此<span>安装根证书</span>。</p>
			<p>2、当日开具发票最快可于次日进项查验。</p>
			<p>3、没分发票最多可查验5次。</p>
			<p>4、可查验最近一年内增值税发票管理新系统开具的发票。</p>
			<p>5、纳税咨询服务，可拨打12366。</p>
		</div>
	</div>
</template>
<script>
	import towtop from '../../../components/HederTwo'
	import verificationCode from '@/assets/verificationCode.jpg'

	export default {
		data() {
			return {
				titlename:'增值税发票查验',
     			 verificationCodeUrl: verificationCode


			};

		},
		components: {
			towtop
		},
		methods: {
			cy_btn() {
				this.$router.push('/yybs_fpmx')
			}



		},

	};
</script>
<style scoped="yybs_zzsjy">
	.ipt4 .hui-field_title {
		width: 135px;
	}
	.hui-btn.is-block {
		width: 5.9rem;
		height: 0.9rem;
		margin: 1rem auto;
		background-color: #2D7FFC;
		font-size: 0.32rem;
		color: #fff;
	}

	.verificationCodeRow input{text-align: left;}
	.field-append_text img{height:0.66rem;}
	.btm {
		width: 90%;
		margin: 3rem auto;
		background-color: #E4E7EA;
		padding: 0.2rem 0.2rem;
		box-sizing: border-box;
	}
	.btm .header {
		text-align: left;
		margin-bottom: 0.2rem;
	}
	.btm .blue {
		width: 0.06rem;
		height: 0.24rem;
		display: inline-block;
		background-color: #2d7ffc;
		margin-right: 0.25rem;
	}
	.btm .title {
		display: inline-block;
		font-size: 0.3rem;
		font-weight: 700;
	}
	.btm p {
		margin-top: 0.1rem;
		text-align: left;
		font-size: 0.24rem;
		color: #999;
	}
	.btm p span {
		color: #2D7FFC;
	}

</style>
