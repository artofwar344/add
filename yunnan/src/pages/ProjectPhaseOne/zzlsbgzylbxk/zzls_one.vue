<template>
	<div class="zzlsone">
		<towtop :name="titlename" />
    <div class="littlestarbig">
      <span class="littlestar">*</span>
      <Field readonly label="申请执业证类别" desc="" disableclear type="text"
        placeholder="请选择类别"
        :value="selectValue"
        @click.native="open01('pickerselect01')">
        <span class="example-select_arrowRight"> > </span>
      </Field>
      <Selectpopup ref="pickerselect01" position="bottom"  :dataslots="selectData01" :visible-item-count="5" class="example-select_item" @selectval="selectChangeFun1" @confirms="selectConfirmFun01">
      </Selectpopup>
    </div>
		<!-- <div class="zhushi">
			<div class="header">
				<div class="blue"></div>
				<div class="tishi">温馨提示</div>
			</div>
			<p>1.请在办理专职律师变更执业机构许可前，仔细阅读<span style="color: #2D7FFC;">《律师执业、变更、注销许可办事指南》</span>，严格按照办事指南中的要求提交材料；</p>
			<p>2.系统中星号键为必填项；</p>
			<p>3.待省司法厅审核许可后线下将电子凭证和所有材料源文件交到拟执业机构所属州市司法局核验领取结果；</p>
			<p>4.在流程结束前，请关注“我的办理进度”，并及时处理系统消息。</p>
		</div> -->
		<!-- <p class="btn" @click="tozzls_two">下一步</p> -->
    <div class="padTopAdd5">
          <mybutton :btnData="btnData" @click="tozzls_two" />
        </div>
	</div>

</template>
<script>
import towtop from '../../../components/HederTwo.vue'
import * as api from '../../../api/api.js'
import mybutton from "../../../components/MyButton";
import { mapMutations, mapActions, mapGetters } from 'vuex'

const profession = {

    };
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
    			titlename:'变更执业类别许可 ',
          selectValue: '',
          currentPage: '',
          isQualified: false,
          currentPageCode: '',
    			selectData01: [
	    			{
	    				flex: 1,
	    				values: [],
	    				className: "slot1",
	    				textAlign: "center"
	    			},

          ],
          defaultValue: [
            {
              name: '专职律师',
              code: '01'
            },
            {
              name: '兼职律师',
              code: '02'
            },
            {
              name: '法援律师',
              code: '09'
            },
            {
              name: '公司律师',
              code: '04'
            },
            {
              name: '公职律师',
              code: '03'
            }
          ]

			}
    },
    created () {
      let cardId = window.sessionStorage.getItem("cardid") !== 'null' ? window.sessionStorage.getItem("cardid") : '532901199012181649'

      this.settingParam()

      api.fetchUserInfo(cardId).then(data => {
        this.setUserInfo(data.list[0])
        if (this.currentPageCode === data.list[0].c_zylbc) {
          this.isQualified = true
        } else {
          this.isQualified = false
          this.$toast('您现有执业类别不符合该变更事项，请确认')
        }

      })

      let workId = this.$route.query.WorkId ? this.$route.query.WorkId : window.sessionStorage.getItem("WorkId")
      this.setWorkId(workId)
    },
    activated () {
      // 获取司法行政机构
      this.fetchJudicialParams({level: '1', pid:'46315EFC804B8D30E050920A03010B71'})
    },
		components: {
    mybutton,
    		towtop
      },
      computed: {
        ...mapGetters([
          'workId'
        ])
      },
    methods : {
      ...mapMutations('zzlsStore', [
        'setchoseType',
        'setUserInfo',
        'setFormData'
      ]),
      ...mapMutations([
        'setWorkId'
      ]),
      ...mapActions('zzlsStore', [
        'fetchJudicialParams'
      ]),
      settingParam () {

        switch (this.$route.name) {
          case 'fullLaw':
            this.titlename = '专职律师变更执业类别许可'
            this.currentPage = '专职律师'
            this.currentPageCode = '01'
            this.selectData01[0].values = ['兼职律师','公职律师', '公司律师']
            break;
          case 'publicLaw':
            this.titlename = '公职律师变更执业类别许可'
            this.currentPage = '公职律师'
            this.currentPageCode = '03'
            this.selectData01[0].values = ['专职律师','兼职律师','法援律师', '公司律师']
            break;
          case 'partLaw':
            this.titlename = '兼职律师变更执业类别许可'
            this.currentPage = '兼职律师'
            this.currentPageCode = '02'
            this.selectData01[0].values = ['专职律师', '公职律师', '公司律师']
            break;
          case 'aidLaw':
            this.titlename = '法援律师变更执业类别许可'
            this.currentPage = '法援律师'
            this.currentPageCode = '09'
            this.selectData01[0].values = ['专职律师','兼职律师','公职律师', '公司律师']
            break;
          case 'companyLaw':
            this.titlename = '公司律师变更执业类别许可'
            this.currentPage = '公司律师'
            this.currentPageCode = '04'
            this.selectData01[0].values = ['专职律师','兼职律师','法援律师','公职律师']
            break;
          default: break;
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
        this.selectValue = selectedVal[0]
      },
      tozzls_two() {

        this.setchoseType({
          type: this.selectValue,
          current: this.currentPage
        })


        //鉴别是否符合变更条件
        if (!this.isQualified) {
          this.$toast('您现有执业类别不符合该变更事项，请确认')
          return
        }



        if (this.selectValue) {
          this.$router.push({ name:'zzlsTwo' })
        } else {
          this.$toast('请选择变更类别')
        }

      },
    }
	}
</script>
<style>
	.zzlsone .hui-field {
		height: 1rem;
		line-height: 1rem;
		padding: 0 0.15rem;
	}
	.zzlsone .hui-field_title {
		width: 3rem;
    margin-left: 0.2rem;
	}
  .zzlsone .hui-field_star {
    display: block;
  }
	.zhushi {
		margin-top: 0.2rem;
		padding: 0.2rem 0 0.2rem 0;
		box-sizing: border-box;
		background-color: #fff;
	}
	.zhushi .header {
		width: 90%;
		margin: 0.1rem auto;
		text-align: left;
	}
	.zhushi .blue {
		width: 0.06rem;
		height: 0.24rem;
		background-color: #2D7FFC;
		margin-right: 0.2rem;
		display: inline-block;
	}
	.zhushi .tishi {
		font-size: .3rem;
		font-weight: 700;
		display: inline-block;
	}
	.zhushi p {
		width: 90%;
		margin: 0 auto;
		font-size: 0.24rem;
		text-align: left;
		margin-top: 0.15rem;
		color: #666;
	}
	 .btn {
    border-radius: 50px;
	 	font-weight: 700;
	 	display: inline-block;
    width: 5.9rem;
    height: 0.9rem;
    line-height: 0.9rem;
    margin: 0 auto;
    margin-top: 1rem;
    background-color: #2D7FFC;
    font-size: 0.32rem;
    color: #fff;
    }
  .zzlsone .littlestarbig{
    position: relative;
  }
  .zzlsone .littlestar{
    display: inline-block;
    color: red;
    font-size:0.4rem;
    position: absolute;
    left:0.1rem;
    top: 0.37rem;
  }
</style>
