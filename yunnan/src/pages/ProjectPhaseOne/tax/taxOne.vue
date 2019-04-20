<template>
	<div class="medicineOne">
		<towtop :name="title"></towtop>
		<div class="example-formgroup">
      <Field :propserror="errorText" desc-class="richText" type="text" label="纳税人识别号" :value="nsrsbh"
             v-model="nsrsbh"
             placeholder="请输入纳税人识别号" v-on:errorchange="handleErrorChangesText">
      </Field>
      <Field :propserror="errorText" desc-class="richText" type="text" label="纳税人名称" :value="nsrmc"
             v-model="nsrmc"
             placeholder="请输入纳税人名称" v-on:errorchange="handleErrorChangesText">
      </Field>
		</div>

		<div class="statisticalBtn">
      <button @click="goto" class="scl_but">
        查询
      </button>
		</div>
	</div>
</template>


<script>
	import towtop from '../../../components/HederTwo'
  import {cenurl} from '@/components/toptow.js'
	export default {
		components: {
			towtop
		},
		data() {
			return {
				title:'纳税信用A级纳税人查询',
        nsrmc: '',
        nsrsbh: '',
				textValue: '',
				errorText: false,
				errorTextInfo: ''
			};

		},
    created () {},
		methods: {
			handleErrorChangesText(val) { //用户名错误状态接收
				this.errorText = val;
			},
      goto () {
        const _self = this
        if (_self.testValue()) return _self.$toast('请填写纳税人识别号和纳税人名称')
        _self.$router.push({
          path: '/taxTwo',
          name: 'taxTwo',
          params: {
            nsrsbh: _self.nsrsbh,
            nsrmc: _self.nsrmc
          }
        })
      },
      testValue () {
        const _self = this
        let status = false
        if (!_self.nsrsbh || !_self.nsrmc){
          status = true
        }
        return status
      }
		},
	};
</script>
<style  scoped>
	.hui-field_title{
		width: 100px;
	}
	.scl_but {
		display: block;
		width: 5.90rem;
		height: .9rem;
		line-height: .9rem;
		color: #fff;
		background: #2D7FFC;
		margin: 0 auto;
		border-radius: .5rem;
		margin-top: .3rem;
		margin-bottom: .3rem;
		font-size: .32rem;
	}
</style>
