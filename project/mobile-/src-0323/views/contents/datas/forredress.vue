<template> 
  <div v-show="this.userToggle">
    <el-row style="padding:20px;">
      <el-col :span="24">
        <el-card :body-style="{ padding: '0px' }">
          <!--<img src="http://h.hiphotos.baidu.com/image/pic/item/f7246b600c338744acb2ecf35c0fd9f9d62aa0ce.jpg" class="image">-->
          <div style="padding: 6px 12px; ">
            <div style="width: 100%;">
              <div style="margin-right: 10px;">
                <span style="font-size: 18px;">{{userMoney}}</span>
                <el-button type="success" round class="button" @click="userMoneyBtn">模板下载</el-button>
              </div> 
                <div class="bottom clearfix" style="display: flex;justify-content: space-evenly;color: #999;font-size: 16px;"> 
              <span>  批量赠送流程 ：</span>
              <span>  1.请先下载Excel赠送模板，按照模板填写 <i class="el-icon-arrow-right"></i></span>
              <span>  2.点击"加号"按钮，导入填写的 Excel ,上传完成赠送 <i class="el-icon-arrow-right"></i></span>
                </div>
                <div style="width: 20%;float:right;">
                  <uploadFileone  ></uploadFileone>
                </div> 
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="24" style="margin: 3px 0;">
        <el-card :body-style="{ padding: '0px' }">
          <div  style="padding: 6px 12px;">
            <div>
              <span style="font-size: 18px;">{{userBoook}}</span>
              <el-button type="success" round class="button" @click="userMoneyBtnTwo">模板下载</el-button>
            </div>
            <div class="bottom clearfix" style="display: flex;justify-content: space-evenly;color: #999;font-size: 16px;">
              <span>  批量赠送流程 ：</span>
              <span>  1.请先下载Excel赠送模板，按照模板填写 <i class="el-icon-arrow-right"></i></span>
              <span>  2.点击"加号"按钮，导入填写的 Excel ,上传完成赠送 <i class="el-icon-arrow-right"></i></span>
            </div>
             <div style="width: 20%;float:right;margin-bottom:2px;">
                  <UploadFiletow  ></UploadFiletow>
              </div> 
          </div>
        </el-card>
      </el-col>
      <el-col :span="24">
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 6px 12px;">
            <div>
              <span style="font-size: 18px;">{{userQualification}}</span>
              <el-button type="success" round class="button" @click="userMoneyBtnThree">模板下载</el-button>
            </div>
            <div class="bottom clearfix" style="display: flex;justify-content: space-evenly;color: #999;font-size: 16px;">
              <span>  批量赠送流程 ：</span>
              <span>  1.请先下载Excel赠送模板，按照模板填写 <i class="el-icon-arrow-right"></i></span>
              <span>  2.点击"加号"按钮，导入填写的 Excel ,上传完成赠送 <i class="el-icon-arrow-right"></i></span>
            </div>
            <div style="width: 20%;float:right;margin-bottom:2px;">
                  <UploadFilethree  ></UploadFilethree>
                </div>
            <!-- <el-button type="success" style="margin: 10px 0;" round class="button" @click="userMoneyBtnThree">赠送资格</el-button> -->
          </div>
        </el-card>
      </el-col>
      <el-col :span="24">
        <el-card :body-style="{ padding: '0px' }" style="margin: 3px 0px;" v-show="true">
          <div style="padding:3px 12px;">
            <div>
              <div style="font-size: 18px;">添加优酷权限</div>
              <div style="width:100%;">
                <div class="youkuStyle"> 
                  <el-select v-model="youkuUser" placeholder="请选择用户" style="width:112px;">
                    <el-option value="chinaUser" label='国内用户'></el-option>
                    <el-option value="othersUser" label='国外用户'></el-option>
                  </el-select>
                </div>
                <div  class="mobilStyle"> 
                 {{youkuUser =='chinaUser'?' 手机号 :':'优酷用户id :'}}
                </div>
                <div class="mobilStyle">
                  <el-input placeholder="请输入国内用户手机号" class="mobilW" v-model="mobile" type="number"  v-show="youkuUser =='chinaUser'? true: false" ><!--type="number"--></el-input> 
                  <el-input placeholder="请输入优酷用户id"  class="mobilW" v-model="youKuKey" v-show="youkuUser =='othersUser'? true: false" ><!--type="number"--></el-input> 
                </div>
                <div class="mobilStyle" style="float:right;" > 
                  <el-button type="success" round @click="userMoneyBtnFour" >添加</el-button>
                </div>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        name: 'homepage',
        userMoney: '用户补钱模板',
        userBoook: '赠送专栏模板',
        userQualification: '赠送资格模板',
        EditData: {
          title: "",
          description: "",
          imageUrl: ""
        },
        youkuUser:'chinaUser', 
        mobile:'',
        youKuKey:'',
        userToggle:false
      }
    },
    watch:{
      youkuUser(val) {        
        if(val =='chinaUser') { 
          this.youKuKey =''
        }else if(val =='othersUser') {
          this.mobile =''
        }
      }
    },
    created(){
    // console.log(  this.UserInfoToggle(true) ,"ddd" );
    if (this.UserInfoToggle() === 3) {
        this.userToggle = true
    } else {
        this.$confirm('Sorry，此权限未开通','请联系管理员',  {
            confirmButtonText: '确定',
            type: 'warning',
            center: true
        })
    }

    },
    methods: {
      emitChange4(Value) {
        this.EditData.imageUrl = Value;
      },
      userMoneyBtn() {
        this.$http.post('api/portal/batchGive/downloadTemplate?templateName=' + this.userMoney, { params: this.$data.search }, { responseType: 'arraybuffer' }).then((res) => {
          this.download(res.data)
        })
      },
      userMoneyBtnTwo() { //api/portal/batchGive/batchGiveUserBook
       
          this.$http.post('api/portal/batchGive/downloadTemplate?templateName=' + this.userBoook, { params: this.$data.search }, { responseType: 'arraybuffer' }).then((res) => {
          this.download1(res.data)
        })
      },
      userMoneyBtnThree() {
         console.log( 'userQualification');
          this.$http.post('api/portal/batchGive/downloadTemplate?templateName=' + this.userQualification , { params: this.$data.search }, { responseType: 'arraybuffer' }).then((res) => {
          this.download2(res.data)
        }) 
      },
      userMoneyBtnFour() {
        var teg = /^\d{11}$/
        teg.test(this.mobile)?this.mobile: this.mobile=''
          if(!this.youKuKey&&!this.mobile) {
            this.$alert(this.youkuUser =='chinaUser'?'请输入正确的国内用户手机号':'请输入正确的优酷用户id', '必填项', {
            confirmButtonText: '确定'
          });
        }else {  
          this.$http.post('api/portal/batchGive/powerToYouku',{mobile:this.mobile,youKuKey:this.youKuKey}, {emulateJSON: true}).then(res =>{
            console.log(res.data.youku_public_response.error ,'res返回值'); 
            if(res.data.youku_public_response.error ) {
              var responseNumber =  Number(res.data.youku_public_response.error)
               switch(responseNumber) {
                 case 1:  this.$alert('已经成功添加优酷权限', '提示', {confirmButtonText: '确定',type: 'success'});break;
                 case 0: this.$alert('添加优酷权限失败！！！！！！', '提示', {confirmButtonText: '确定',type: 'info'});break;
                 default:  this.$alert('添加优酷权限失败，请联系后台人员进行操作', '提示', {confirmButtonText: '确定',type: 'error'});break;
               }
            }
            
          }) 
        } 
      },
      // 下载文件
      download(data) { 
        if (!data) {
          return
        }
        let url = window.URL.createObjectURL(new Blob([data]))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', this.userMoney + '.xlsx')
        document.body.appendChild(link)
        link.click()
      },
      download1(data) {
        if (!data) {
          return
        }
        let url = window.URL.createObjectURL(new Blob([data]))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', this.userBoook + '.xlsx')
        document.body.appendChild(link)
        link.click()
      },
      download2(data) {
        console.log(data, 'data code')
        if (!data) {
          return
        }
        let url = window.URL.createObjectURL(new Blob([data]))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', this.userQualification + '.xlsx')
        document.body.appendChild(link)
        link.click()
      },
    }
  }
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top:4px;
    line-height: 12px;
    margin-bottom:2px;
  }

  .button {
    padding: 8px;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  .youkuStyle {
    display: inline-block; padding-left:100px;margin: 2px auto;
  } 
  .mobilStyle {
    display: inline-block; padding:0 60px;}
  .mobilW {
    width: 180px;  padding :6px 0;
  }
</style>
