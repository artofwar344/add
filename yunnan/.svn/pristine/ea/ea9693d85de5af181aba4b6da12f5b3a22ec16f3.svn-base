<template>
	<div class="bgzcxkTwo">
		<towtop style="margin: 0" :name="titlename"/>
		<div class="header2">变更材料</div>
		<Field  type="text" label="事务所名称" :value="textValue" placeholder="自动获取省司法厅系统律师事务所信息"  >
    	</Field>
    	<Field  type="text" label="负责人" :value="textValue" placeholder="自动获取省司法厅系统律师事务所信息" >
    	</Field>
    	<Field  type="text" label="组织形式" :value="textValue" placeholder="自动获取省司法厅系统律师事务所信息" >
    	</Field>
    	<Field  type="text" label="电话" :value="textValue" placeholder="自动获取省司法厅系统律师事务所信息" >
    	</Field>
    	<Field  type="text" label="律所地址" :value="textValue" placeholder="自动获取省司法厅系统律师事务所信息" >
    	</Field>
    <div class="middleone">
      <span class="middletwo">*</span>
    	<Field class="btm"  type="text" label="申请变更理由" :value="textValue_bgly" placeholder="必填项"  v-on:currentval="handleTextVal1">
    	</Field>
    </div>
    <div class="middleone">
      <i class="middletwo">*</i>
      <Field class="btm" type="text" label="章程拟变更部分变更前内容(摘要)" :value="textValue_bgqnr" placeholder="必填项"  v-on:currentval="handleTextVal2">
      </Field>
    </div>
    <div class="middleone">
      <i class="middletwo">*</i>
    	<Field  class="btm" type="text" label="章程拟变更部分变更后内容(摘要)" :value="textValue_bghnr" placeholder="必填项"  v-on:currentval="handleTextVal3">
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
	export default {
		components:{
    mybutton,
			towtop
		},
		data() {
			return {
				btnData:[
					{
					text:'下一步',
					disabled: false,
					isSure: true,
					}
				],
				titlename:"律师事务所（分所）变更章程许可",
				textValue:'',
				textValue_bgly:'',
				textValue_bgqnr:'',
				textValue_bghnr:'',
			}

		},
		methods: {
			next_btn() {
    			this.$router.push({
    				name:'bgzcxk_four',
    				params:{
    					bgly:this.textValue_bgly,
    					bgqnr:this.textValue_bgqnr,
    					bghnr:this.textValue_bghnr,
    				}


    			})
    		},
    		handleTextVal1(val) {
                this.textValue_bgly = val
            },
            handleTextVal2(val) {
                this.textValue_bgqnr = val
            },
            handleTextVal3(val) {
               this.textValue_bghnr = val
            },
		},
		mounted(){

		}

	};
</script>
<style>
	.header2 {
		width: 90%;
		margin: 0 auto;
		height: 0.6rem;
		font-size: 0.24rem;
		line-height: 0.6rem;
		text-align: left;
		color: #999;
	}
	.bgzcxkTwo .hui-field_main {
        font-size: 0.28rem;
        line-height: 0.9rem;
        height: 0.9rem;
    }
    /*.hui-field_star {*/
        /*display: none;*/
    /*}*/
     .hui-btn.is-block {
        font-weight: 700;
        display: inline-block;
        width: 5.9rem;
        height: 0.9rem;
        margin: 0.6rem 0.35rem;
        background-color: #2D7FFC;
        font-size: 0.32rem;
        color: #fff;
    }
    .hui-field_title {
        width:3rem;
    }
    .btm .hui-field_title {
    	width: 6rem
    }
 .bgzcxkTwo .middleone{
    position:relative;
  }
 .bgzcxkTwo .middletwo{
    font-size: 0.4rem;
    color: red;
    display: inline-block;
    position: absolute;
    top: 0.4rem;
    left:0.05rem;
  }
</style>
