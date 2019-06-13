<template>
  <div class="name_reg">
    <div class="msg_box" v-show="content_info">
      <div class="content">
        <h2>填写说明</h2>
        <p>您可以选择是否包含名称字号。<br/> 1、包含名称字号的个体工商户名称由“行政区划"+"字号"+"行业表述"+"组织形式“构成。如:昆明市盘龙区天天小吃店，其中*昆明市盘龙区“是行政区划、“天天"是字号、“小吃”是行业表述、“店"是组织形式。
          <br/> 2、不包含名称字号的个体工商户名称系统将显示为“无字号名称”。
        </p>
        <div class="btnsBox" ><mt-button type="primary" @click="confirm_btn" class='okBtn'>确认</mt-button ></div>
      </div>
    </div>
    <towtop name="名称登记" />
    <div class="RadiosGongAn">
      <Radios @change="radiosHandle" title="是否包含名称字号" :value="isRadios"  v-model="WhetherAdult" :options="[
						{label: '是', value: '是', disabled: false},
						{label: '否', value: '否', disabled: false}
					]">
      </Radios>
      <span class="info_item" @click="name_info">
					<Icon type="advisory"  color="#fac306"></Icon>
				</span>
    </div>
    
    <div class='mint-cell'  v-show="show_hybs" @click="open('changeMsgSelect')">
          <div class='mint-cell-wrapper borderBottom'>
            <div class='mint-cell-title'><span class='required'>*</span>名称行政区划</div>
            <div class='mint-cell-value is-link'>
            	<input type="text" class='inputCell' v-model='changeSelectMsg' placeholder="请选择名称行政区划"  />
            </div>
            <i class='mint-cell-allow-right'></i>
          </div>
     </div>
    <!--<Field v-show="show_hybs" readonly :label="labelvalue" placeholder="请选择名称行政区划" 
    	disableclear type="text" v-model="changeSelectMsg" required :value="changeSelectMsg" class="selectTypeData" @click.native="open('changeMsgSelect')">
			<span slot="append">
          <Icon type="arrow-right" size="14" color="#757575"></Icon>
        </span>
    </Field>-->
    <Huiselect class='fontBlack' ref="changeMsgSelect" position="bottom" :dataslots="changeMsgData" :visible-item-count="5" @confirms="changeMsgConfirms"></Huiselect>
    <div class='mint-cell'  v-show="show_zzss" v-if="this.changeSelectMsg" @click="open('changeMsgSelect_sxq')">
          <div class='mint-cell-wrapper borderBottom'>
            <div class='mint-cell-title'><span class='required'>*</span>行政区划二级</div>
            <div class='mint-cell-value is-link'>
            	<input type="text" class='inputCell' v-model='changeSelectMsg_sxq' placeholder="行政区划第二级"  />
            </div>
            <i class='mint-cell-allow-right'></i>
          </div>
     </div>
<!--  
  <Field readonly v-show="show_zzss" v-if="this.changeSelectMsg" placeholder="行政区划第二级" 
  	disableclear type="text" v-model="changeSelectMsg_sxq" 
  	required :value="changeSelectMsg_sxq" class="selectTypeData" @click.native="open('changeMsgSelect_sxq')">
			<span slot="append">
          <Icon type="arrow-right" size="14" color="#757575"></Icon>
        </span>
    </Field>-->
    <Huiselect 
    	class='fontBlack'
    	ref="changeMsgSelect_sxq" 
    	position="bottom" 
    	:dataslots="changeMsgData_sxq" 
    	:visible-item-count="5" 
    	@confirms="changeMsgConfirms_sxq"></Huiselect>

    <div class='mint-cell' v-show="show_zzss" v-if="this.changeSelectMsg_sxq" @click="open('changeMsgSelect_sxqbs')">
          <div class='mint-cell-wrapper borderBottom'>
            <div class='mint-cell-title'><span class='required'>*</span>行政区划表述</div>
            <div class='mint-cell-value is-link'>
            	<input type="text" class='inputCell' v-model='changeSelectMsg_sxqbs' placeholder="行政区划表述"  />
            </div>
            <i class='mint-cell-allow-right'></i>
          </div>
     </div>

    <!--<Field readonly v-show="show_zzss" v-if="this.changeSelectMsg_sxq" placeholder="行政区划第三级" 
    	disableclear type="text" v-model="changeSelectMsg_sxqbs" 
    	required :value="changeSelectMsg_sxqbs" class="selectTypeData" @click.native="open('changeMsgSelect_sxqbs')">
			<span slot="append">
          <Icon type="arrow-right" size="14" color="#757575"></Icon>
        </span>
    </Field>-->
    <Huiselect class='fontBlack' ref="changeMsgSelect_sxqbs" position="bottom" :dataslots="changeMsgData_sxqbs" :visible-item-count="5" @confirms="changeMsgConfirms_sxqbs"></Huiselect>
	
	    <div class='mint-cell'  v-show="show_hybs">
          <div class='mint-cell-wrapper borderBottom'>
            <div class='mint-cell-title'><span class='required'>*</span>字号</div>
            <div class='mint-cell-value is-link'>
            	<input type="text" class='inputCell' v-model='textValue_zh' placeholder="请输入字号，例如：天天"  />
            </div>
           
          </div>
     </div>
    <!--<Field v-show="show_hybs" type="text" label="字号" 
    	:value="textValue_zh" placeholder="请输入字号，例如：天天" 
    	required v-on:currentval="handleTextVal">
    </Field>-->
    	   <div class='mint-cell'  v-show="show_hybs" @click="open('changeMsgSelect1')">
          <div class='mint-cell-wrapper borderBottom'>
            <div class='mint-cell-title'><span class='required'>*</span>行业表述</div>
            <div class='mint-cell-value is-link'>
            	<input type="text" class='inputCell' v-model='changeSelectMsg1' placeholder="请选择行业表述"  />
            </div>
            <i class='mint-cell-allow-right'></i>
          </div>
     </div>
    <!--<Field v-show="show_hybs" readonly :label="labelvalue1"
    	 placeholder="请选择行业表述" disableclear type="text"
    	  v-model="changeSelectMsg1" required :value="changeSelectMsg1" class="selectTypeData" @click.native="open('changeMsgSelect1')">
			<span slot="append">
          <Icon type="arrow-right" size="14" color="#757575"></Icon>
        </span>
    </Field>-->
    <Huiselect class='fontBlack' ref="changeMsgSelect1" position="bottom" :dataslots="changeMsgData1" :visible-item-count="5" @confirms="changeMsgConfirms1"></Huiselect>
    
      <div class='mint-cell'  v-show="show_zzss"  v-if="this.changeSelectMsg1" @click="open('changeMsgSelect1_two')">
          <div class='mint-cell-wrapper borderBottom'>
            <div class='mint-cell-title'><span class='required'>*</span>行业表述第二级</div>
            <div class='mint-cell-value is-link'>
            	<input type="text" class='inputCell' v-model='changeSelectMsg1_two' placeholder="行业表述第二级"  />
            </div>
            <i class='mint-cell-allow-right'></i>
          </div>
     </div>
    <!--<Field v-show="show_zzss" readonly v-if="this.changeSelectMsg1" 
    	placeholder="行业表述第二级" disableclear type="text" v-model="changeSelectMsg1_two" required 
    	:value="changeSelectMsg1_two" class="selectTypeData" @click.native="open('changeMsgSelect1_two')">
			<span slot="append">
          <Icon type="arrow-right" size="14" color="#757575"></Icon>
        </span>
    </Field>-->
    <Huiselect class='fontBlack' ref="changeMsgSelect1_two" position="bottom" :dataslots="changeMsgData1_two" :visible-item-count="5" @confirms="changeMsgConfirms1_two"></Huiselect>

   <div class='mint-cell'   v-show="show_zzss"  v-if="this.changeSelectMsg1_two" @click="open('changeMsgSelect1_three')">
          <div class='mint-cell-wrapper borderBottom'>
            <div class='mint-cell-title'><span class='required'>*</span>行业表述第三级</div>
            <div class='mint-cell-value is-link'>
            	<input type="text" class='inputCell' v-model='changeSelectMsg1_three' placeholder="行业表述第三级"  />
            </div>
            <i class='mint-cell-allow-right'></i>
          </div>
     </div>
    <!--<Field v-show="show_zzss" readonly v-if="this.changeSelectMsg1_two" 
    	placeholder="行业表述第三级" disableclear type="text" v-model="changeSelectMsg1_three" required 
    	:value="changeSelectMsg1_three" class="selectTypeData" @click.native="open('changeMsgSelect1_three')">
			<span slot="append">
          <Icon type="arrow-right" size="14" color="#757575"></Icon>
        </span>
    </Field>-->
    <Huiselect class='fontBlack' ref="changeMsgSelect1_three" position="bottom" :dataslots="changeMsgData1_three" :visible-item-count="5" @confirms="changeMsgConfirms1_three"></Huiselect>
     <div class='mint-cell'   v-show="show_zzss"  @click="open('changeMsgSelect2')">
          <div class='mint-cell-wrapper borderBottom'>
            <div class='mint-cell-title'><span class='required'>*</span>组织形式</div>
            <div class='mint-cell-value is-link'>
            	<input type="text" class='inputCell' v-model='changeSelectMsg2' placeholder="请选择组织形式"  />
            </div>
            <i class='mint-cell-allow-right'></i>
          </div>
     </div>
    
    <!--<Field v-show="show_zzss" readonly :label="labelvalue2" 
    	placeholder="请选择组织形式" disableclear type="text"
    	 v-model="changeSelectMsg2" required :value="changeSelectMsg2" class="selectTypeData" @click.native="open('changeMsgSelect2')">
			<span slot="append">
          <Icon type="arrow-right" size="14" color="#757575"></Icon>
        </span>
    </Field>-->
    <Huiselect class='fontBlack' ref="changeMsgSelect2" position="bottom" :dataslots="changeMsgData2" :visible-item-count="5" @confirms="changeMsgConfirms2"></Huiselect>
      <div class='mint-cell'    >
          <div class='mint-cell-wrapper borderBottom'>
            <div class='mint-cell-title'><span class='required'>*</span>名称</div>
            <div class='mint-cell-value is-link'>
            	<input type="text" class='inputCell' disabled="disabled" v-model='textValue_mc' placeholder="自动返现"  />
            </div>
          
          </div>
     </div>
 
 		<!--<Field readonly type="text" label="名称" :value="textValue_mc" placeholder="自动返现" required v-on:currentval="handleTextVal_mc">
    </Field>-->
    
       <div class='mint-cell'  v-if='(this.isRadios=="是"&&this.changeSelectMsg_sxq=="市辖区") ||this.isRadios=="否"||(this.isRadios=="是"&&this.changeSelectMsg_sxqbs!="")'  @click="open('changeMsgSelect3')">
          <div class='mint-cell-wrapper borderBottom'>
            <div class='mint-cell-title'><span class='required'>*</span>受理机关</div>
            <div class='mint-cell-value is-link'>
            	<input type="text" class='inputCell' v-model='changeSelectMsg3' placeholder="请选择受理机关"  />
            </div>
            <i class='mint-cell-allow-right'></i>
          </div>
     </div>  
<!--    
    <Field readonly v-if='(this.isRadios=="是"&&this.changeSelectMsg_sxq =="市辖区") ||this.isRadios=="否"' 
    	:label="labelvalue3" placeholder="请选择受理机关" disableclear type="text" v-model="changeSelectMsg3" required 
    	:value="changeSelectMsg3" class="selectTypeData" @click.native="open('changeMsgSelect3')">
			<span slot="append">
          <Icon type="arrow-right" size="14" color="#757575"></Icon>
        </span>
    </Field>-->
    <Huiselect class='fontBlack' ref="changeMsgSelect3" position="bottom" :dataslots="changeMsgData3" :visible-item-count="5" @confirms="changeMsgConfirms3"></Huiselect>
    <!--受理机关二级-->
           <div class='mint-cell'  v-if='this.isRadios=="否"&&this.changeSelectMsg3!=""'   @click="open('changeSelectMsg3_two')">
          <div class='mint-cell-wrapper borderBottom'>
            <div class='mint-cell-title'><span class='required'>*</span>受理机关二级</div>
            <div class='mint-cell-value is-link'>
            	<input type="text" class='inputCell' v-model='changeSelectMsg3_two' placeholder="受理机关第二级"  />
            </div>
            <i class='mint-cell-allow-right'></i>
          </div>
     </div>  
    <!--<Field readonly v-if='this.isRadios=="否"&&this.changeSelectMsg3!=""' 
    	placeholder="受理机关第二级" disableclear type="text"
    	 v-model="changeSelectMsg3_two" required :value="changeSelectMsg3_two" class="selectTypeData" @click.native="open('changeSelectMsg3_two')">
			<span slot="append">
          <Icon type="arrow-right" size="14" color="#757575"></Icon>
        </span>
    </Field>-->
    <Huiselect class='fontBlack' ref="changeSelectMsg3_two" position="bottom" :dataslots="changeMsgData3_two" :visible-item-count="5" @confirms="changeMsgConfirms3_two"></Huiselect>
    <!--受理机关三级-->
             <div class='mint-cell'   v-if='this.isRadios=="否"&&this.changeSelectMsg3_two!=""'   @click="open('changeSelectMsg3_three')">
          <div class='mint-cell-wrapper borderBottom'>
            <div class='mint-cell-title'><span class='required'>*</span>受理机关三级</div>
            <div class='mint-cell-value is-link'>
            	<input type="text" class='inputCell' v-model='changeSelectMsg3_three' placeholder="受理机关第三级"  />
            </div>
            <i class='mint-cell-allow-right'></i>
          </div>
     </div>  
    <!--<Field readonly v-if='this.isRadios=="否"&&this.changeSelectMsg3_two!=""'
    	placeholder="受理机关第三级" disableclear type="text" v-model="changeSelectMsg3_three" 
    	required :value="changeSelectMsg3_three" class="selectTypeData" @click.native="open('changeSelectMsg3_three')">
			<span slot="append">
          <Icon type="arrow-right" size="14" color="#757575"></Icon>
        </span>
    </Field>-->
    <Huiselect class='fontBlack' ref="changeSelectMsg3_three" position="bottom" :dataslots="changeMsgData3_three" :visible-item-count="5" @confirms="changeMsgConfirms3_three"></Huiselect>
    <!--受理机关二级-->
     <div class='mint-cell'  v-if='(this.isRadios=="是"&&this.changeSelectMsg_sxq =="市辖区")'    @click="open('changeMsgSelect4')">
          <div class='mint-cell-wrapper borderBottom'>
            <div class='mint-cell-title'><span class='required'>*</span>经济区划机关</div>
            <div class='mint-cell-value is-link'>
            	<input type="text" class='inputCell' v-model='changeSelectMsg4' placeholder="请选择经济区划机关"  />
            </div>
            <i class='mint-cell-allow-right'></i>
          </div>
     </div>  
    <!--<Field v-if='(this.isRadios=="是"&&this.changeSelectMsg_sxq =="市辖区")' 
    	readonly :label="labelvalue4" placeholder="请选择经济区划机关" disableclear type="text" v-model="changeSelectMsg4" 
    	required :value="changeSelectMsg4" class="selectTypeData" @click.native="open('changeMsgSelect4')">
			<span slot="append">
          <Icon type="arrow-right" size="14" color="#757575"></Icon>
        </span>
    </Field>-->
    <Huiselect class='fontBlack' ref="changeMsgSelect4" position="bottom" :dataslots="changeMsgData4" :visible-item-count="5" @confirms="changeMsgConfirms4"></Huiselect>
    <div class="promptMSG" v-show="promptMSG">
      <p class="success" v-show="promptMSG_success">
        <i class="dui">√</i>名称审查通过，请继续下一步
      </p>
      <p class="fail" v-show="promptMSG_fail">
        同一登记或冠名机关，名称行政区划、组织形式不同，但字号相同、行业表述相同
      </p>
    </div>
    <div class="padTopAdd5" v-show="show_hybs">
    	 <mt-button type="primary" :disabled='this.btnData[0].disabled' class='submitBtn' @click='query_btn'>名称查重</mt-button>
 <!--     <mybutton :btnData="btnData" @click="query_btn" />-->
    </div>
    <div class="padTopAdd">
    	 <mt-button type="primary" :disabled='this.btnData1[0].disabled' class='submitBtn' @click='next_btn'>下一步</mt-button>
  <!--    <mybutton :btnData="btnData1" @click="next_btn" />-->
    </div>

  </div>
</template>
<script>
  import towtop from '@/components/HederTwo.vue'
  import mybutton from "@/components/MyButton";
  import {
    Toast,
    MessageBox
  } from "mint-ui";
  export default {
    data() {
      return {
        isRadios: '是',
        btnData: [{
          text: '名称查重',
          disabled: false,
          isSure: true,
        }],
        btnData1: [{
          text: '下一步',
          disabled: true,
          isSure: true,
        }],
        WhetherAdult: '是',
        labelvalue: '名称行政区划',
        changeSelectMsg: '',
        changeSelectMsgCode: '',
        changeMsgData: [{
          flex: 1,
          values: [

          ],
          showText: "text",
          className: "slot1",
          defaultIndex: 0
        }],

        changeSelectMsg_sxq: '',
        changeSelectMsg_sxqCode: '',

        changeMsgData_sxq: [{
          flex: 1,
          values: [

          ],
          showText: "text",
          className: "slot1",
          defaultIndex: 0
        }],
        changeSelectMsg_sxqbs: '',
        changeSelectMsg_sxqbsCode: '',
         changeSelectMsg_sxqbsId: '',
          changeSelectMsg_sxqbsApp: '',
        changeMsgData_sxqbs: [{
          flex: 1,
          values: [{
            text: '市辖区表述1',
            value: '00'
          }, {
            text: '市辖区表述2',
            value: '01'
          }],
          showText: "text",
          className: "slot1",
          defaultIndex: 0
        }],

        textValue_zh: '',

        labelvalue1: '行业表述',
        changeSelectMsg1: '',
        changeSelectMsg1Code: '',
        changeMsgData1: [{
          flex: 1,
          values: [

          ],
          showText: "text",
          className: "slot1",
          defaultIndex: 0
        }],
        changeSelectMsg1_two: '',
        changeSelectMsg1Code_two: '',
        changeMsgData1_two: [{
          flex: 1,
          values: [

          ],
          showText: "text",
          className: "slot1",
          defaultIndex: 0
        }],
        changeSelectMsg1_three: '',
        changeSelectMsg1Code_three: '',
        changeSelectMsg1CodeId_three:'',
        changeMsgData1_three: [{
          flex: 1,
          values: [

          ],
          showText: "text",
          className: "slot1",
          defaultIndex: 0
        }],
        labelvalue2: '组织形式',
        changeSelectMsg2: '',
        changeMsgData2: [{
          flex: 1,
          values: [{
            text: '店',
            value: '00'
          }, {
            text: '铺',
            value: '01'
          }, {
            text: '馆',
            value: '02'
          }, {
            text: '坊',
            value: '03'
          }, {
            text: '场',
            value: '04'
          }, {
            text: '部',
            value: '05'
          }, {
            text: '堂',
            value: '06'
          }, {
            text: '站',
            value: '07'
          }, {
            text: '园',
            value: '08'
          }, {
            text: '城',
            value: '09'
          }, {
            text: '门市',
            value: '10'
          }, {
            text: '经营部',
            value: '11'
          }, {
            text: '大药房',
            value: '12'
          }, {
            text: '药房',
            value: '13'
          }, {
            text: '药店',
            value: '14'
          }, {
            text: '厅',
            value: '15'
          }, {
            text: '行',
            value: '16'
          }, {
            text: '房',
            value: '17'
          }, {
            text: '社',
            value: '18'
          }, {
            text: '亭',
            value: '19'
          }, {
            text: '网咖',
            value: '20'
          }, {
            text: '网吧',
            value: '21'
          }, {
            text: '处',
            value: '22'
          }, {
            text: '厂',
            value: '23'
          }, {
            text: '咖啡厅',
            value: '24'
          }, {
            text: '咖啡店',
            value: '25'
          }, {
            text: '饭店',
            value: '26'
          }, {
            text: '中心',
            value: '27'
          }, {
            text: '吧',
            value: '28'
          }, {
            text: '商行',
            value: '29'
          }, {
            text: '浴池',
            value: '30'
          }, {
            text: '诊所',
            value: '31'
          }, {
            text: '门诊部',
            value: '32'
          }, {
            text: '俱乐部',
            value: '33'
          }, {
            text: '酒吧',
            value: '34'
          }, {
            text: '旅店',
            value: '35'
          }, {
            text: '农家院',
            value: '36'
          }, {
            text: '农家乐',
            value: '37'
          }, {
            text: '便利店',
            value: '38'
          }, {
            text: '影楼',
            value: '39'
          },

            {
              text: '工作室',
              value: '40'
            }, {
              text: '对',
              value: '41'
            }, {
              text: '超市',
              value: '42'
            }, {
              text: '冷库',
              value: '43'
            }, {
              text: '餐厅',
              value: '44'
            }, {
              text: '苗圃',
              value: '45'
            }, {
              text: '屋',
              value: '46'
            }, {
              text: '广场',
              value: '47'
            },

          ],
          showText: "text",
          className: "slot1",
          defaultIndex: 0
        }],

        labelvalue3: '受理机关',
        changeSelectMsg3: '',
        changeSelectMsg3Code: '',
        changeMsgData3: [{
          flex: 1,
          values: [
            {'text':'昆明市工商行政管理局',value:'530100'}
          ],
          showText: "text",
          className: "slot1",
          defaultIndex: 0
        }],
        changeSelectMsg3_two: '',
        changeSelectMsg3Code_two: '',
        changeMsgData3_two: [{
          flex: 1,
          values: [

          ],
          showText: "text",
          className: "slot1",
          defaultIndex: 0
        }],
        changeSelectMsg3_three: '',
        changeSelectMsg3Code_three: '',
        changeMsgData3_three: [{
          flex: 1,
          values: [

          ],
          showText: "text",
          className: "slot1",
          defaultIndex: 0
        }],
        labelvalue4: '经济区划机关',
        changeSelectMsg4: '',
        changeSelectMsg4Code: '',
        changeMsgData4: [{
          flex: 1,
          values: [

          ],
          showText: "text",
          className: "slot1",
          defaultIndex: 0
        }],
        content_info: false,
        promptMSG: false,
        promptMSG_success: false,
        promptMSG_fail: false,
        show_hybs: true,
        show_zzss: true,
        areaId: null,
        industryValue: null,
      }
    },
    components: {
      towtop,
      mybutton,
      Toast
    },

    methods: {
      autoShowName() {

      },
      radiosHandle(data) {
        this.isRadios = data
        this.autoShowName()
        console.log(data, 1)
        if(data == '是') {
          this.show_hybs = true
          this.show_zzss = true
			this.btnData1[0].disabled = true
        }
        if(data == '否') {
          console.log(8888,data)
          this.show_hybs = false
          this.show_zzss = false
          this.btnData1[0].disabled = false

        }

      },
      open(picker) { //打开弹出框

        this.$refs[picker].open();
        document.activeElement.blur();
        $('.hui-popup').on('touchmove', function(event) {
          event.preventDefault()
          event.stopPropagation()
        })
      },
      changeMsgConfirms(selectedVal) { //选中区域一级
        console.log(selectedVal, 2)
        this.changeMsgData_sxq[0].values = []
        this.changeMsgData_sxqbs[0].values = []
        this.changeSelectMsg_sxq = ''
        this.changeSelectMsg_sxqbs = ''
        this.areaId = null
        const _self = this;
        if(typeof selectedVal[0] === "object") {
          _self.changeSelectMsg = selectedVal[0].text;
          _self.changeSelectMsgCode = selectedVal[0].value
          selectedVal[0].child.forEach((item, index) => {
            let obj2 = {
              text: item.districtName,
              value: item.districtId,
              child: item.districtDescList
            }
            this.changeMsgData_sxq[0].values.push(obj2)
          })

        }
        this.autoShowName()
      },
      changeMsgConfirms_sxq(selectedVal) { //选中区域二级
        console.log(selectedVal, 3)
        this.changeMsgData_sxqbs[0].values = []
        this.changeSelectMsg_sxqbs = ''
        this.areaId = null
        const _self = this;
        if(typeof selectedVal[0] === "object") {
          _self.changeSelectMsg_sxq = selectedVal[0].text;
          _self.changeSelectMsg_sxqCode = selectedVal[0].value
          selectedVal[0].child.forEach((item, index) => {
            let obj3 = {
              text: item.districtDesc || '区',
              value: item.regOrgan,
              id: item.id,
              apoOrgan:item.apoOrgan
            }
            this.changeMsgData_sxqbs[0].values.push(obj3)
          })
         if(this.changeSelectMsg_sxq=='市辖区'){
          this.changeMsgData3[0].values = [{'text':'昆明市工商行政管理局',value:'530100'}]
          this.changeSelectMsg3 =''
          }
        }
        this.autoShowName()
      },
      changeMsgConfirms_sxqbs(selectedVal) { //选中区域三级
        console.log(selectedVal, 4)
        const _self = this;
        this.areaId = selectedVal.id
        if(typeof selectedVal[0] === "object") {
          _self.changeSelectMsg_sxqbs = selectedVal[0].text;
          _self.changeSelectMsg_sxqbsCode = selectedVal[0].value;
           _self.changeSelectMsg_sxqbsId=selectedVal[0].id
           _self.changeSelectMsg_sxqbsApp=selectedVal[0].apoOrgan
          if(this.isRadios=='是'&&this.changeSelectMsg_sxq!='市辖区'){
          	this.changeMsgData3[0].values = []
          	  this.getOffice(selectedVal[0].value, this.changeMsgData3[0].values)
          	   this.changeSelectMsg3 =''
          }
        }
        this.autoShowName()
      },
      handleTextVal(val) { //输入字号
        let nameReg = /^[\u4e00-\u9fa5]{2,16}$/
        console.log(val)
        //				if(nameReg.test(val)){
        this.textValue_zh = val
        this.autoShowName()
        //				}else{
        //					Toast({
        //							message: "请输入2-16位中文字符",
        //							duration: 1000
        //						});
        //				}

      },
      changeMsgConfirms1(selectedVal) { //选中行业表述一级
        console.log(selectedVal, 5)
        this.changeMsgData1_two[0].values = []
        this.changeSelectMsg1_two = ''
        this.changeSelectMsg1_three = ''
        const _self = this;
        if(typeof selectedVal[0] === "object") {
          _self.changeSelectMsg1 = selectedVal[0].text;
          _self.changeSelectMsg1Code = selectedVal[0].value;
          this.industryValue = selectedVal[0].value
          this.getIndustryTwo(selectedVal[0].value)
        }
      },
      changeMsgConfirms1_two(selectedVal) { //选中行业表述二级
        this.changeMsgData1_three[0].values = []
        this.changeSelectMsg1_three = ''
        console.log(selectedVal, 6)
        const _self = this;
        if(typeof selectedVal[0] === "object") {
          _self.changeSelectMsg1_two = selectedVal[0].text;
          _self.changeSelectMsg1Code_two = selectedVal[0].value;
          this.getIndustryThr(this.industryValue, selectedVal[0].value)
        }
        this.autoShowName()
      },
      changeMsgConfirms1_three(selectedVal) { //选中行业表述三级
        console.log(selectedVal, 7)
        const _self = this;
        if(typeof selectedVal[0] === "object") {
          this.changeSelectMsg1_three = selectedVal[0].text;
          this.changeSelectMsg1Code_three = selectedVal[0].value;
          this.changeSelectMsg1CodeId_three =selectedVal[0].code
        }
        this.autoShowName()
      },
      changeMsgConfirms2(selectedVal) { //选中组织形式
        console.log(selectedVal, 8)
        const _self = this;
        if(typeof selectedVal[0] === "object") {
          _self.changeSelectMsg2 = selectedVal[0].text;
        }
        this.autoShowName()

      },
      handleTextVal_mc(val) {
        this.textValue_mc = val
      },
      changeMsgConfirms3(selectedVal) { //选中受理机关一级
        console.log(selectedVal, 9)
        const _self = this;
        this.changeMsgData3_two[0].values = []
        this.changeSelectMsg3_two = ''
        this.changeMsgData4[0].values = []
        this.changeSelectMsg3_three = ''
        this.changeSelectMsg4 = ''
        if(typeof selectedVal[0] === "object") {
          _self.changeSelectMsg3 = selectedVal[0].text;
          this.changeSelectMsg3Code = selectedVal[0].value
          //
          this.getPublicInfo(selectedVal[0].value, this.changeMsgData4[0].values)
          if(this.isRadios == '否'){
            this.getOffice(selectedVal[0].value, this.changeMsgData3_two[0].values)
          }
        }
        this.autoShowName()
      },
      changeMsgConfirms3_two(selectedVal) { //选中受理机关二级
        this.changeMsgData3_three[0].values = []
        this.changeSelectMsg3_three = ''

        const _self = this;
        if(typeof selectedVal[0] === "object") {
          _self.changeSelectMsg3_two = selectedVal[0].text;
          _self.changeSelectMsg3Code_two = selectedVal[0].value;
          this.getOffice(selectedVal[0].value, this.changeMsgData3_three[0].values)
        }
        this.autoShowName()
      },
      changeMsgConfirms3_three(selectedVal) { //选中受理机关三级
        console.log(selectedVal, 7)
        const _self = this;
        if(typeof selectedVal[0] === "object") {
          this.changeSelectMsg3_three = selectedVal[0].text;
          this.changeSelectMsg3Code_three = selectedVal[0].value;
        }
        this.autoShowName()
      },
      changeMsgConfirms4(selectedVal) {
        console.log(selectedVal, 0)
        const _self = this;
        if(typeof selectedVal[0] === "object") {
          _self.changeSelectMsg4 = selectedVal[0].text;
          _self.changeSelectMsg4Code = selectedVal[0].value;
        }
        this.autoShowName()
      },
      //			query_btn() {
      //				console.log('这是查询按钮')
      //			},
      checkInfo() { //验证是否填写完整
        let nameReg = /^[\u4e00-\u9fa5]{2,16}$/
        if(this.isRadios == '是') {
          if(this.changeSelectMsg_sxqbs == '') {
            Toast({
              message: "请选择行政区划",
              duration: 1000
            });
            return false
          }
          if(!nameReg.test(this.textValue_zh)) {
            Toast({
              message: "请输入2-16位中文字号",
              duration: 1000
            });
            return false
          }
          if(this.changeSelectMsg1_three == '') {
            Toast({
              message: "请选择行业表述",
              duration: 1000
            });
            return false
          }
          if(this.changeSelectMsg2 == '') {
            Toast({
              message: "请选择组织形式",
              duration: 1000
            });
            return false
          }
          if(this.changeSelectMsg_sxq=='市辖区'&&this.changeSelectMsg3 == '') {
            Toast({
              message: "请选择受理机关",
              duration: 1000
            });
            return false
          }
          if(this.changeSelectMsg_sxq=='市辖区'&&this.changeSelectMsg4 == '') {
            Toast({
              message: "请选择经济区划机关",
              duration: 1000
            });
            return false
          }

        } else {
          if(this.changeSelectMsg3_three == '') {
            Toast({
              message: "请选择受理机关",
              duration: 1000
            });
            return false
          }
        }
        return true
      },
      getSendObj(t, v, c,d,f) { //格式化暂存数据
      	if(f) {
          return {
            title: t,
            value: v,
            code: c,
            id:d,
            dec:f
          }
        }
      	if(d) {
          return {
            title: t,
            value: v,
            code: c,
            id:d
          }
        }
        if(c) {
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
      next_btn() { //下一步按钮 提交暂存到apps
        if(!this.checkInfo()) {
          return false
        }
        let sendInfo = {}
        if(this.isRadios == '否') {
          sendInfo = {
            'work_id': sessionStorage.WorkId ,
            title: '名称登记',
            isHasFont: this.getSendObj('是否包含名称字号', '否'),
            textValue_mc: this.getSendObj('名称', this.textValue_mc),
            changeSelectMsg3: this.getSendObj('受理机关', this.changeSelectMsg3, this.changeSelectMsg3Code),

          }
        } else {
          sendInfo = {
            'work_id': sessionStorage.WorkId,
            title: '名称登记',
            isHasFont: this.getSendObj('是否包含名称字号', '是'),
            changeSelectMsg: this.getSendObj('行政区划一级', this.changeSelectMsg, this.changeSelectMsgCode),
            changeSelectMsg_sxq: this.getSendObj('行政区划二级', this.changeSelectMsg_sxq, this.changeSelectMsg_sxqCode, ),
            changeSelectMsg_sxqbs: this.getSendObj('行政区划', this.changeSelectMsg_sxqbs, this.changeSelectMsg_sxqbsCode, this.changeSelectMsg_sxqbsId, this.changeSelectMsg_sxqbsApp ),
            textValue_zh: this.getSendObj('字号', this.textValue_zh),
            changeSelectMsg1: this.getSendObj('行业表述一级', this.changeSelectMsg1, this.changeSelectMsg1Code),
            changeSelectMsg1_two: this.getSendObj('行业表述二级', this.changeSelectMsg1_two, this.changeSelectMsg1Code_two),
            changeSelectMsg1_three: this.getSendObj('行业表述', this.changeSelectMsg1_three, this.changeSelectMsg1Code_three, this.changeSelectMsg1CodeId_three),
            changeSelectMsg2: this.getSendObj('组织形式', this.changeSelectMsg2),
            textValue_mc: this.getSendObj('名称', this.textValue_mc),
            changeSelectMsg3: this.getSendObj('受理机关', this.changeSelectMsg3_three ==''?this.changeSelectMsg3:this.changeSelectMsg3_three,this.changeSelectMsg3Code_three==''?this.changeSelectMsg3Code:this.changeSelectMsg3Code_three),
            changeSelectMsg4: this.getSendObj('经济区划机关', this.changeSelectMsg4, this.changeSelectMsg4Code),
          }
        }
        console.log(sendInfo, '暂存数据')
        this.$ajaxRequest('post', '/APPS/db/insert', {
          'txnBodyCom': {
            'page': 2,

            'work_id': sessionStorage.WorkId ,

            'message': {
              'matter_id': sessionStorage.matterid ,
              'member_id': sessionStorage.userid ,
              json_content: sendInfo
            }

          }
        })
          .then((res) => {
            if(res.success == "添加成功" || res.success == '修改成功') {
              if(this.isRadios == '否') {
                this.$router.push('/basicInfo')
              } else {
                this.$router.push({
                  path: '/basicInfo',
                  query: {
                    areaId: this.changeSelectMsgCode, //省id
                    qxNum: this.changeSelectMsg_sxqCode, //市id
                    industryPhy: this.changeSelectMsg1Code, //行业表述1级id
                    industryCode: this.changeSelectMsg1Code_two //行业表述2级id
                  }
                })
              }

            }
            console.log(res)
          })

      },
      name_info() {
        this.content_info = true;
      },
      confirm_btn() {
        this.content_info = false;
      },
      getProv() { //获取区域
        this.$ajaxRequest('post', '/gsp/mng60044', {
          "txnBodyCom": {
            "phyId": "000000",
            "industryId": '0000000',
            "keyWord": "123",
            pageSize: ''
          },
          "txnCommCom": {

          }

        })
          .then((res) => {
						console.log(res,'区域')
            res.districtList.forEach((item, index) => {
              let obj = {
                text: item.districtName || '暂无',
                value: item.districtId,
                child: item.child
              }
              this.changeMsgData[0].values.push(obj)
            })

          })
          .catch((error) => {
            Toast({
              message: "请稍后尝试再次链接",
              duration: 1000
            });
          })
      },
      getIndustry() { //获取行业表述1
        this.$ajaxRequest('post', '/gsp/mng60045', {
          "txnBodyCom": {
            "phyId": "",
            "industryId": '',
            "keyWord": "",
            pageSize: ''
          },
          "txnCommCom": {

          }

        })
          .then((res) => {
            console.log(res, '行业表述')
            res.industryList.forEach((item, index) => {
              this.changeMsgData1[0].values.push({
                text: item.industryName,
                value: item.industryId
              })
            })

          })
          .catch((error) => {
            Toast({
              message: error,
              duration: 1000
            });
          })
      },
      getIndustryTwo(e) { //获取行业表述1
        this.$ajaxRequest('post', '/gsp/mng60045', {
          "txnBodyCom": {
            "phyId": e,
            "industryId": '',
            "keyWord": "",
            pageSize: ''
          },
          "txnCommCom": {

          }

        })
          .then((res) => {
            console.log(res, '获取谷物1')
            res.industryList.forEach((item, index) => {
              this.changeMsgData1_two[0].values.push({
                text: item.industryName,
                value: item.industryId
              })
            })

          })
      },
      getIndustryThr(e, v) { //获取行业表述1
        this.$ajaxRequest('post', '/gsp/mng60045', {
          "txnBodyCom": {
            "phyId": e,
            "industryId": v,
            "keyWord": "",
            pageSize: ''
          },
          "txnCommCom": {

          }

        })
          .then((res) => {
            console.log(res, '获取谷物')
            res.industryList.forEach((item, index) => {
              this.changeMsgData1_three[0].values.push({
                text: item.industryDesc,
                value: item.industryCode,
                code:item.orgForm?item.orgForm:false
              })
            })

          })
      },
      getOffice(e, i) { //获取受理机关

        this.$ajaxRequest('post', '/gsp/mng19049', {
          "txnBodyCom": {
            'regOrganId': e,
            'nullName': '1',
            'matter_id': '1'
          },
          "txnCommCom": {

          }

        })
          .then((res) => {
            console.log(res, '受理机关')

            res.result.forEach((item, index) => {

              i.push({
                text: item.v,
                value: item.k
              })
            })

          })
          .catch((error) => {
            Toast({
              message: error,
              duration: 1000
            });
          })
      },

      query_btn() { //查重
        if(!this.checkInfo()) {
          return false
        }
 
        this.$ajaxRequest('post', '/gsp/mng60041', {
          "txnBodyCom": {
            chan_id: '1',
            'check_nameApp': this.changeSelectMsg_sxqbs + this.textValue_zh + this.changeSelectMsg1_three,
            'check_nameRegOrgan': this.changeSelectMsg3Value,
            'check_nameApoOrgan': this.changeSelectMsg3Value,
            'check_nameDistrict': this.changeSelectMsg_sxqbs,
            'check_tradPiny': '',
            'check_nameTrad': this.textValue_zh,
            'check_nameIndDesc': this.changeSelectMsg1_three,
            'check_indPhy': this.changeSelectMsg1Code,
            check_industryCode: this.changeSelectMsg1Code_two
          },
          "txnCommCom": {

          }

        })
          .then((res) => {
            if(res.allow == true) {
              Toast({
                message: '验证通过',
                duration: 1000
              });
              this.btnData1[0].disabled = false
            } else if(res.result && res.result[0] && res.result[0].checkStatus == '1') {
              Toast({
                message: res.result[0].rule.checkDesc,
                duration: 1000
              });
            }

          })
      },
      getPublicInfo(e, arr) { //获取民族信息
        this.$ajaxRequest('post', '/gsp/mng19050', {
          "txnBodyCom": {
            "id": "",
            "parentId": e,
            "matter_id": null
          },
          "txnCommCom": {

          }

        }).then((res) => {
          console.log(res)
          res.result.forEach((item, index) => {
            let obj = {
              text: item.v,
              value: item.k
            }
            arr.push(obj)

          })
        })
      }

    },
    created() {
      console.log(sessionStorage)
      this.getProv()
      this.getIndustry()


    },
    computed: {
      textValue_mc(n, o) {
        if(this.isRadios == '是') {
          this.btnData1[0].disabled = true
          console.log('计算属性')
          return this.changeSelectMsg_sxqbs + this.textValue_zh + this.changeSelectMsg1_three + this.changeSelectMsg2
        } else {
        	
          return '无字号'
        }

      }
    },
    watch:{
      isRadios(n,o){
        console.log(n)
        this.changeSelectMsg3 =''
        this.changeMsgData3[0].values = []
        if(n =='否'){
          this.getOffice(' ', this.changeMsgData3[0].values)
        }else{
        	if(this.changeSelectMsg_sxqbsCode!=''){
        		  this.getOffice(this.changeSelectMsg_sxqbsCode, this.changeMsgData3[0].values)
        	}else{
        		 this.changeMsgData3[0].values =[{'text':'昆明市工商行政管理局',value:'530100'}]
        	}
         
        }
      }
    }

  }
</script>
<style >

  .name_reg .mint-cell-wrapper {
    padding: 0;
  }
  .name_reg .RadiosGongAn {
    height: 1rem;
    border-bottom: 0.01rem solid #ccc;
  }

  .name_reg .hui-radios {
    border-bottom: 0.01rem solid #e1e2e6;
  }

  .name_reg .RadiosGongAn .hui-radios {
    padding: 0 0.2rem;
  }

  .name_reg .RadiosGongAn .hui-radios:after {
    content: "";
    display: block;
    clear: both;
  }

  .name_reg .RadiosGongAn .hui-radios_titleBox {
    float: left;
    width: 3rem;
    text-align: left;
  }

  .name_reg .RadiosGongAn .hui-radios_text {
    line-height: 1rem;
  }

  .name_reg .RadiosGongAn .hui-radios_itemWrapper {
    padding: 0;
  }

  .name_reg .RadiosGongAn .hui-radios_itemWrapper {
    float: right;
    line-height: 1rem;
  }

  .name_reg .RadiosGongAn .hui-radios_itemWrapper:after {
    content: "";
    display: block;
    clear: both;
  }

  .name_reg .RadiosGongAn .hui-radios_item {
    float: left;
    font-size: 0.28rem;
  }
  .name_reg .RadiosGongAn {
    position: relative;
  }
  .name_reg .fontBlack>div{
  	width: 100%;
  }
  .name_reg .fontBlack .picker{
  	width: 100%;
  }
   .name_reg .fontBlack .picker .picker-items{
   	overflow: hidden;
   	width: 100%;
   }
   .name_reg .fontBlack .picker .picker-items  .picker-slot{
   	overflow: hidden;
   	width: 100%;
   }
   .inputCell:-ms-input-placeholder{
   	font-size: .2rem;
   }
   .inputCell::-webkit-input-placeholder{
   		font-size: .2rem;
   }
  </style>
   <style scoped>
   .name_reg{
	text-align: left !important;
}
  .name_reg .padTopAdd5 {
    background-color: #fff;
    padding-bottom: .5rem;
    padding-left: 50%;
    text-align: center;
  }
  .name_reg .padTopAdd5 .submitBtn{
  	width: 2rem;
  	border-radius: .5rem;
  }
  .name_reg .padTopAdd {
    margin-top: 0.5rem;
    text-align: center;
  }
  .name_reg .padTopAdd  .submitBtn{
	width: 60%;
	border-radius: .5rem;
}


  .name_reg .info_item {
    display: inline-block;
    width: 0.4rem;
    position: absolute;
    top: 50%;
    left: 2.7rem;
    margin-top: -0.15rem;
  }

  .name_reg .msg_box {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10000000000;
    background-color: rgba(0, 0, 0, 0.5);
    text-align: center;
    box-sizing: content-box;
  }

  .name_reg .msg_box .content {
    width: 90%;
    margin: 50% auto;
    background-color: #fff;
    border-radius: 0.5rem;
    overflow: hidden;
  }

  .name_reg .content h2 {
    font-size: .36rem;
    font-weight: 700;
    padding: 0.4rem;
  }

  .name_reg .content p {
    font-size: .28rem;
    color: #A3A3A3;
    padding: 0 0.3rem 0.3rem 0.3rem;
    border-bottom: 0.01rem solid #ccc;
    line-height: 0.5rem;
    text-align: left;
  }

  .name_reg .content .btnsBox {
    padding: 0.3rem 0.3rem;
    font-size: 0.32rem;
    color: #2D7FFC;
    text-align: center;
  }
  .name_reg .content .btnsBox .okBtn{
  	width: 80%;
  	border-radius: .5rem;
  }
  .name_reg .promptMSG {
    width: 100%;
    background-color: #fff;
    padding: 0.4rem 0 0 0;
  }

  .name_reg .promptMSG .success {
    width: 90%;
    height: .68rem;
    border-radius: .57rem;
    margin: 0 auto;
    background-color: #E2EDFF;
    font-size: .24rem;
    line-height: 0.68rem;
    text-align: left;
    padding-left: 0.35rem;
    color: #2D7FFC;
  }

  .name_reg .promptMSG .fail {
    width: 90%;
    height: 1rem;
    border-radius: .57rem;
    margin: 0 auto;
    background-color: rgba(250, 99, 102, 0.10);
    font-size: .24rem;
    line-height: 0.5rem;
    text-align: left;
    padding: 0 0.35rem;
    color: #FA6366;
  }

  .name_reg .dui {
    display: inline-block;
    margin-right: 0.09rem;
  }
  
  
  
    .borderBottom {
    border-bottom: 0.01rem solid #D6D8DC;
    padding: 0;
  }

  .mint-cell {
    padding: 0 15px;
  }
   .mint-cell .mint-cell-title{
/*   	max-width: 40%;*/
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
  .name_reg .fontBlack{
  	color:#999 ;
  	overflow: hidden;
  	width: 100%;
  }
</style>
