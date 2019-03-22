<template>
  <div>
    <el-row style="padding:20px;">
      <el-col :span="24">
        <el-card :body-style="{ padding: '0px' }">
          <!--<img src="http://h.hiphotos.baidu.com/image/pic/item/f7246b600c338744acb2ecf35c0fd9f9d62aa0ce.jpg" class="image">-->
          <div  style="padding: 20px 10px 10px 14px;display: flex;flex-direction: row">
            <div style="width: 100%;">
              <div style="margin-right: 10px;">
                <span style="font-size: 18px;">{{userMoney}}</span>
                <el-button type="success" round class="button" @click="userMoneyBtn">模板下载</el-button>
              </div>
              <div style="width: 100%;display: flex;flex-direction: row;margin-top: 25px;">
                <div class="bottom clearfix" style="display: flex;color: #999;font-size: 17px;width: 80%;padding-left: 4%;">
                  <span style="width: 150px;">  批量赠送流程 ：</span>
                  <div style="display: flex;flex-direction: row;width: 90%;">
                    <p style="flex: 1;margin-left: 20px;">  1.请先下载Excel赠送模板，按照模板填写 <i class="el-icon-arrow-right"></i></p>
                    <p style="flex: 1;">  2.点击"批量赠送"按钮，导入填写的 Excel ,上传完成赠送 <i class="el-icon-arrow-right"></i></p>
                  </div>
                </div>
                <div style="width: 20%;">
                  <uploadFileone  ></uploadFileone>
                </div>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="24" style="margin: 10px 0;">
        <el-card :body-style="{ padding: '0px' }">
          <div  style="padding: 20px 14px;">
            <div>
              <span style="font-size: 18px;">{{userBoook}}</span>
              <el-button type="success" round class="button" @click="userMoneyBtnTwo">模板下载</el-button>
            </div>
            <div class="bottom clearfix" style="display: flex;justify-content: space-evenly;color: #999;font-size: 16px;">
              <span>  批量赠送流程 ：</span>
              <span>  1.请先下载Excel赠送模板，按照模板填写 <i class="el-icon-arrow-right"></i></span>
              <span>  2.点击"批量赠送"按钮，导入填写的 Excel ,上传完成赠送 <i class="el-icon-arrow-right"></i></span>
            </div>
             <div style="width: 20%;float:right;">
                  <UploadFiletow  ></UploadFiletow>
                </div>
             
            <!-- <el-button type="success" style="margin: 10px 0;" round class="button" @click="userMoneyBtnThree">赠送资格</el-button> -->
          </div>
        </el-card>
      </el-col>
      <el-col :span="24">
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 20px 14px;">
            <div>
              <span style="font-size: 18px;">{{userQualification}}</span>
              <el-button type="success" round class="button" @click="userMoneyBtnThree">模板下载</el-button>
            </div>
            <div class="bottom clearfix" style="display: flex;justify-content: space-evenly;color: #999;font-size: 16px;">
              <span>  批量赠送流程 ：</span>
              <span>  1.请先下载Excel赠送模板，按照模板填写 <i class="el-icon-arrow-right"></i></span>
              <span>  2.点击"批量赠送"按钮，导入填写的 Excel ,上传完成赠送 <i class="el-icon-arrow-right"></i></span>
            </div>
            <div style="width: 20%;float:right;">
                  <UploadFilethree  ></UploadFilethree>
                </div>
            <!-- <el-button type="success" style="margin: 10px 0;" round class="button" @click="userMoneyBtnThree">赠送资格</el-button> -->
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
      }
    },
    created(){
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
      userMoneyBtnTwo() {
        this.$http.post('api/portal/batchGive/batchGiveUserBook?templateName=' + this.userBoook, { params: this.$data.search }, { responseType: 'arraybuffer' }).then((res) => {
          this.download1(res.data)
        })
      },
      userMoneyBtnThree() {
        this.$http.post('api/portal/batchGive/batchGiveUserQualification?templateName=' + this.userQualification, { params: this.$data.search }, { responseType: 'arraybuffer' }).then((res) => {
          this.download2(res.data)
        })
      },
      // 下载文件
      download(data) {
        console.log(data, 'data code')
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
        console.log(data, 'data code')
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
    margin-top: 13px;
    line-height: 12px;
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
</style>
