<template>
	<div class="bgfzrxk_wrap">
		<towtop style="margin: 0" :name="titlename"/>
		<div class="header2">附件材料</div>
		<div class="example-upload" v-for="(item,index) in arr" :key="index">
			<div class="example-upload_formItem">
				<div class="blue"></div>
        <span class="littlestarking1"  v-if="index === 0">*</span>
				<label class="example-upload_formLabel" for="">

          <span>{{ item.file_name }}</span>
        </label>
				<div class="Notes">
					<Icon type="warnning" size="18"  color="#FFA500"></Icon>
					<span>{{ item.content }}</span>
				</div>
				<p class="Explain">请上传材料扫描件（pdf格式）或图片格式。</p>
				<div class="example-upload_formText">
          <div class="imgList">
						<div class="example-upload_item" v-for="(subitem,subindex) in item.uploadId" :key="subindex">
              <div class="item-pdf" v-if="subitem.type === 'pdf'"
              @click.self="previewHandle('pdf', subindex)">
                <img :src="require('@/assets/images/pdf.png')" alt="">
                <span class="label">{{subitem.origName}}</span>
                <div class="popup" v-if="popupVisible === subindex">{{subitem.origName}}
                  <div class="modal" @click.stop="closePopup('20000')"></div>
                </div>
              </div>

							<img v-else :src="subitem.url" @click="previewHandle(subitem.url)"/>
							<span class="example-upload_item-cover">
							<em class="example-upload_item-delete"
								@click="handleRemove(index,subindex,item.uploadId)">X</em>
							</span>
						</div>
					</div>

					<!--上传-->
					<ccbUpload :upload-id=item.file_name :name-key="item.namekey" @uploadRes='handleRes'
							app-id="GSP_APP_001" bucket-id="GSP_PRIVATE"
							pic-url-pre-fixed="/image-service/downloadImage?"
							:upload-index='index'>
					<span class="example-upload_btn">+</span>
					</ccbUpload>

				</div>
			</div>
		</div>
		<!-- <Btn plain block @click="submit_btn">提交</Btn> -->
		<div class="padTopAdd5">
          <mybutton :btnData="btnData" @click="submit_btn" />
        </div>
		<!-- <Popupprompt v-model="popupVisible5" :title="content.title" :text="content.text" :confirm-btn = "content.confirmBtn" :cancel-btn = "content.cancelBtn" :close-on-click-modal=false @click = "clickbtn">
        <div slot="othercontent">
			<p>请关注<span style="color: #FAC306;">“我的办理进度”</span>并及时处理系统消息</p>
		</div>
    </Popupprompt> -->

    <img-preview :show="isShow" :data="currentImgUrl" @callback="setShow" />

	</div>
</template>
<script>
import towtop from '../../../../components/HederTwo'
import ccbUpload from '@/components/ccb-upload'
import imgPreview from '@/components/imgPreview'
import mybutton from "../../../../components/MyButton";

	export default {
		components:{
    mybutton,
			towtop,
      ccbUpload,
      imgPreview
		},
		data() {
			return {
				btnData:[
					{
					text:'提交',
					disabled: false,
					isSure: true,
					}
				],
				titlename:"律师事务所（分所）变更负责人",
				defaultList:[],
				arr:[
					{
						file_name:'律师事务所执业许可证（含正本和副本）',
						content:'上传扫描件（PDF格式）或图片。',
						uploadId: [],
						namekey:'zyxkz_zyxkz_lwroffcprctlcns_'
					},
					{
						file_name:'合伙人会议决议',
						content:'分所变更负责人的，还需提交本所关于选任拟任分所负责人的合伙人会议决议；合伙律师事务所变更负责人的，还需提交合伙人签名的并加盖律师事务所公章的决定变更律师事务所名称的合伙人会议决议。合伙人会议决议需按照省司法厅在云南司法行政网中 http://www.sft.yn.gov.cn/bszn/13795.jhtml页面中上传的《合伙人会议决议》模板提供，可上传扫描件（PDF格式）或图片。',
						uploadId: [],
						namekey:'hhrhyjy_hhrhyjy_ptnpsnmtgrsl_'
					},
					{
						file_name:'近三年内未受过停止执业处罚的证明',
						content:'分所变更负责人的，还需提交拟任分所负责人近三年内未受过停止执业处罚的证明，上传扫描件（PDF格式）或图片',
						uploadId: [],
						namekey:'wscfzm_wscfzm_thyrnostoppnshctfn_'
					}
				],
				arrs: [],
				popupVisible5:false,
				content: {
					title: "您已提交成功",
					text: "",
					confirmBtn: { //水平按钮-确定
					id: "confirm",
					text: "确定"
					},
					cancelBtn: {}
        },
        isShow: false,
        currentImgUrl: '',
        popupVisible: false,
			}

		},
		methods: {
			setUploadIndex (index) {
				const _self = this
				_self.uploadIndex = index
				console.log(index);
			},
			handleRes (data) {

				// 添加图片上传
				const _self = this
				_self.arr[data.index].uploadId.push({
          file_name: data.ObjNm,
					file_path: 'GSP_PRIVATE',
					file_desc: data.uploadId,
          url: data.fileUrl,
          type: data.ObjNm.slice(data.ObjNm.indexOf('.') + 1, data.ObjNm.length),
            origName: data.origFileName
        })

        this.filteData()
			},
			handleRemove (index, subindex, uploadId) {
				// 删除图片上传
				const _self = this
        _self.arr[index].uploadId.splice(subindex, 1)

        this.filteData()
      }, // 图片
      filteData () {
        let arrysource = JSON.parse(JSON.stringify(this.arr))
        console.log(arrysource)
        let arryturn = []
        for (let i in arrysource) {
          arrysource[i]['uploadId'].map(item => {
            // 删除多余数据
            delete item.url
            delete item.type
            delete item.origName
            arryturn.push(item)
          })
        }

        this.arrs = arryturn

      },
			submit_btn(){
				let _self = this;
				//是否未传图片
				if(!this.arr[0].uploadId.length){
					this.$toast("请律师事务所执业许可证（含正本和副本）")
          return
				}
				/* if(!this.arr[1].uploadId.length){
					this.$toast("合伙人会议决议")
				}
				if(!this.arr[2].uploadId.length){
					this.$toast("近三年内未受过停止执业处罚的证明")
				} */
				sessionStorage.setItem('SFTimgList',JSON.stringify(this.arr));
				console.log(this.arr)



				let setdata = {
					"txnCommCom": {
						"tenant": "530000000000",
						"txn_itt_chnl_id": "00",
						"txn_itt_chnl_type": "11",
						"C-Business-Id": "111111111"
					},
					"txnBodyCom": {
						// "work_id":sessionStorage.getItem("GATWorkId"),
						"work_id":sessionStorage.getItem("WorkId"),
						"matter_id":sessionStorage.getItem("matterid"),
						// "matter_id":'ea44d84cf8bb418080595c201fd9bdf4',
						"member_id":sessionStorage.getItem("userid"),
						// "member_id":'sdsfg',
						"files":this.arrs
					}
				};
				console.log(setdata)
				this.$ajaxRequest("post", "/gsp/mng30008", setdata)
				.then(res => {
					console.log(res);
					console.log(res.rs_code);
					if(res.rs_code == '00'){
						this.$router.push('/sfResultPage')
						return
					}else if(res.rs_code == '01'){
						_self.$toast(res.Error_Info.Message)
					}

				})
				.catch(error => {
					console.log(error);
				});
			},
			clickbtn(id) {
				console.log(id)
				// 调用原生关闭视窗
            	this.$CallModule('close','关闭')
			},
			clearData(){
				clear("SFTlawPlaceData");
				clear("SFTchangeCharge");
				clear("rsn");
				function clear(str){
					if(sessionStorage.getItem(str)){
						sessionStorage.removeItem(str);
					}
				}
      },

      setShow (data) {
        this.isShow = data
      },

      previewHandle (data, index) {
        console.log('kkk')

        if (data === 'pdf') {
          this.popupVisible = index
        } else {
          this.isShow = true
          this.currentImgUrl = data
        }
      },

      closePopup (data) {
        this.popupVisible = data
      },
		}

	};
</script>
<style>

</style>

<style lang='less' scoped>
 @import "../../../../assets/css/uploadSFT.less";
	.header2 {
		width: 90%;
		margin: 0 auto;
		height: 0.6rem;
		font-size: 0.24rem;
		line-height: 0.6rem;
		text-align: left;
		color: #999;
	}
	.bgfzrxk_wrap .example-upload {
		background-color: #fff;
	}
	.blue {
		display: inline-block;
		width: 0.1rem;
		height: 0.24rem;
		background-color: #2D7FFC;
		margin-right: 0.15rem;
	}

	.bgfzrxk_wrap .example-upload_formItem {
		font-size: 0.28rem;
		width: 90%;
		padding: 0.25rem 0 0.45rem 0;
		margin: 0 auto;
		text-align: left;
		border-bottom: 0.01rem solid #ccc;
    position: relative;
	}
	.bgfzrxk_wrap .example-upload_formLabel {
		font-size: 0.28rem;
		font-weight: 700;
    margin-left: 0.1rem;
	}
	.Notes {
		margin-top: 0.2rem;
		margin-bottom: 0.15rem;
	}
	.Notes span {
		color: #666;
		font-size: .24rem;
	}
	.Explain {
		color: #999;
		font-size: 0.24rem;
	}

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

	.bgfzrxk_wrap .hui-popupPrompt_btn-cancel{
		display: none;
	}
	.bgfzrxk_wrap .hui-popupPrompt_btn-confirm{
		width: 100%;
	}
 .bgfzrxk_wrap .littlestarking1{
   color: red;
   font-size:0.4rem;
   display: inline-block;
   position: absolute;
   left: 0.2rem;

 }
</style>
