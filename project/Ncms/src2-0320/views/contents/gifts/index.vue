<template>
  <div>
    <el-row style="padding:20px;">
      <el-col :span="24">
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 20px 14px;">
            <div>
              <span style="font-size: 18px;">礼品卡</span>
            </div>
            <div class="bottom clearfix" style="display: flex;justify-content: space-evenly;color: #999;font-size: 16px;">
              <span>  批量赠送流程 ：</span>
              <span>  1.请先下载Excel赠送模板，按照模板填写 <i class="el-icon-arrow-right"></i></span>
              <span>  2.点击"批量赠送"按钮，导入填写的 Excel ,上传完成赠送 <i class="el-icon-arrow-right"></i></span>
            </div>
            <div>
              <span>礼品卡名称：</span>
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </div>
            <el-button type="success" style="margin: 10px 0;" round class="button" @click="userCard">赠送资格</el-button>
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
        input: ''
      }
    },
    created(){
    },
    methods: {
      emitChange4(Value) {
        this.EditData.imageUrl = Value;
      },
      userCard(){
        this.$http.post('api/portal/export/exportGiftCard?cardName='+this.input, { params: this.$data.search }, { responseType: 'arraybuffer' }).then((res) => {
          console.log(res);
          this.download(res.data)
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
        link.setAttribute('download', '礼品卡下载.xlsx')
        document.body.appendChild(link)
        link.click()
      }
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
