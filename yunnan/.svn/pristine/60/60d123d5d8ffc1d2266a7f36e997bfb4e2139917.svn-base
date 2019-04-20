<template>
	<div class="swsbg_two">
		<towtop :name="titlename"/>
		<div class="header">
			<div class="blue"></div>
			<div class="tishi">说明</div>
			<p>添加5-10条律所拟定名称，拟定名称将从前往后进行预审核</p>
			<p class="p2">（注：若是分所变更名称，则填写1-10条律所拟定名称）</p>
		</div>
		<div class="list" v-for="(item,index) in arr" :key="index" v-if="item != undefined">
			<ul>
				<li>
					<div class="title">
						<span class="span1" v-model="textValue_qc">
							NO.{{index+1}}{{ item.offc_fullnm }}
						</span>
						<span class="delate" @click="delate_btn(index)">删除</span>
					</div>
					<div class="name">
						<span>简称：</span>
						<span v-model="textValue_qc">{{ item.offc_shrtnm }}</span>
					</div>
					<div class="py">
						<span>拼音：</span>
						<span v-model="textValue_qc">{{ item.shrtnm_cpa }}</span>
					</div>
					<div class="en">
						<span>英文名称：</span>
						<span v-model="textValue_qc">{{ item.eng_nm }}</span>
					</div>
				</li>
			</ul>
		</div>
		<div class="add">
			<div class="addbtn" @click="add_btn">新增</div>
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

	export default	{
		data() {
			return {
        btnData:[
          {
            text:'下一步',
            disabled: false,
            isSure: true,
          }
        ],
  			titlename:'律师事务所（分所）名称变更预申请 ',
  			textValue_qc:'',
			  textValue_jc:'',
			  textValue_jcpy:'',
			  textValue_ywmc:'',
			  arr:[
					{
						'offc_fullnm':'岚志翔律师事务所(模板)',
						'offc_shrtnm':'岚志翔(模板)',
						'shrtnm_cpa':'lanzhixiang(模板)',
						'eng_nm':'LanZhi(模板)',
					},
			 ],
			 lawyerform:'',
       flag:true,
       flage:true,
			}
		},
		components: {
    mybutton,
    		towtop
    	},
    	created() {
        if (this.$route.params.arr) {
          this.arr = this.$route.params.arr || this.arr

        }else{
          let arr = JSON.parse(sessionStorage.getItem('SFT_bgmcxk'))
          arr.unshift(this.arr[0])
          this.arr = arr
        }
			

			this.lawyerform = this.$route.params.lawyerform
			console.log(this.lawyerform)
    	},
    	methods : {
    		add_btn() {
    			this.$router.push({
    				name:'swsbg_three',
    				params:{
    					arr:this.arr
    				},
    			})

    		},
    		delate_btn(index) {
    			 this.arr.splice(index, 1)
    		},
    		next_btn(){
          if (this.flage) {
              if (this.arr.length === 1) {
              this.$toast("请先添加拟定名称");
              return
            }
          }
          this.flage = false
    			if (this.lawyerform == 'fs'){
    				if (this.arr.length > 2 ) {
              if (this.flag) {
                this.arr.shift()  
              }
              this.flag = false
    					sessionStorage.setItem("SFT_bgmcxk",JSON.stringify(this.arr));
    					this.$router.push({
    						name:'swsbg_four'
    					});
    					return
    				}
    			}else{
            if (this.flag) {
    				  if (this.arr.length < 6 || this.arr.length > 10) {
    				  	this.$toast("最多可以添加5条以上及10以下条律所名称");
    				  	return false
    				  }
            }
				  }
          if (this.flag) {
            this.arr.shift()
          }
          this.flag = false
          if (this.arr.length < 5 || this.arr.length > 10) {
                this.$toast("最多可以添加5条以上及10以下条律所名称");
                return false
          }
    			sessionStorage.setItem("SFT_bgmcxk",JSON.stringify(this.arr));
    			this.$router.push({
    				name:'swsbg_four'
    			});


    		}
    	}
	}
</script>

<style scoped="swsbg_two.vue" lang="less">
	.swsbg_two {
    .header {
      width: 100%;
      padding: 0.2rem 0.25rem;
      background-color: #fff;
      margin: 0.1rem auto;
      text-align: left;
      box-sizing: border-box;
      .blue {
        width: 0.06rem;
        height: 0.24rem;
        background-color: #2D7FFC;
        margin-right: 0.2rem;
        display: inline-block;
      }
      .tishi {
        font-size: .3rem;
        display: inline-block;
      }
      p {
        font-size: 0.24rem;
        color: red;
      }
      .p2 {
        font-size: 0.2rem;
       /* color: #3F3F3F;*/
      }
    }
    .list {
      width: 90%;
      margin: .2rem auto;
      border-radius: .2rem;
      ul {
        width: 90%;
        margin: 0 auto;
        background-color: #fff;
        padding: .25rem;
        box-sizing: border-box;
        li {
          margin-bottom: .25rem;
          width: 100%;
          font-size: 0.28rem;
          div {
            &:after {content: '';display: block;clear: both;}
            span {
              &:last-child{
                width: 70%;
              }
              word-break:break-all;
              width: 30%;
              float: left;
              display: block;
            }
            /*height: 0.6rem;*/
            /*line-height: 0.6rem;*/
            padding: .2rem 0;
            color: #666;
            text-align: left;
          }
          .title {
            /*height:0.8rem;*/
            /*line-height: 0.8rem;*/
            border-bottom: .01rem solid #ccc;
            padding-bottom: .1rem;
            .span1 {
              font-weight: 700;
              width: 80%;
              text-align: left;
            }
            .delate {
              float: right;
              color: #999;
              width: 20%;
              text-align: right;
            }
          }
        }
      }
    }
    .add {
      width: 82%;
      margin: 0 auto;
      background-color: #fff;
      height: 0.9rem;
      line-height: 0.9rem;
      font-size: 0.28rem;
      color: #2D7FFC;
    }
  }
</style>
<style>
  .swsbg_two .hui-btn.is-block {
    font-weight: 700;
    display: inline-block;
    width: 5.9rem;
    height: 0.9rem;
    margin: 1rem 0.35rem;
    background-color: #2D7FFC;
    font-size: 0.32rem;
    color: #fff;
  }
</style>

