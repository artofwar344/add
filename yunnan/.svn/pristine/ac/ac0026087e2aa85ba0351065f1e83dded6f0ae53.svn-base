<template>
  <div class="bsSearch">
    <div class="searchBox">
      <div class="backBtn" @click="backFn">
        <Icon type="arrow-left" size="16" color="#999999"></Icon>
      </div>
      <div class="searchIpt">
        <i class="hui-icon hui-icon_search"></i>
        <input @focus="focusFn" @input="filterFn" type="text" v-model="searchValue" class='search' placeholder='请输入关键字'>
      </div>
      <button class="searchBtn" @click="searchValue=''">取消</button>
    </div>
    <div class="searchList" v-show="searchListShow">
      <img v-show="searchList.length == 0" class="bgNone" :src="imgs.bgNone">
      <div class="searchListBox" v-show="searchList.length != 0">
        <h5 class="searchListTitle">搜索结果：</h5>
        <ul class="searchUl">
          <li v-for="item in searchList" v-show="item.show" @click="checkSearchItem(item)" class="searchLi">
            {{item.trdDesc}}
          </li>
        </ul>
      </div>
    </div>
    <div class="bsList" v-show="!searchListShow">
      <h5 class="searchListTitle">搜索添加多个经营范围</h5>
      <ul class="bsListUl">
        <li v-for="(item,index) in bsList" class="bsListLi">
          <div class="option mint-cell">
            <div class="mint-cell-wrapper">
              <div class="mint-cell-title">
                <span class="mint-cell-text">{{item.trdDesc}}</span>
                <span v-show="item.idMian" class="mainBs">主营</span>
              </div>
              <mt-button class="delBsBtn" @click="delBsItem(item,index)">删除</mt-button>
            </div>
          </div>
        </li>
      </ul>
      <mt-button v-show="saveBtnShow" type="primary" class="saveBsBtn" @click="saveBsFn">保存</mt-button>
    </div>
  </div>
</template>

<script>
  var bgNone = require('@/assets/images/bsNone.png')
  export default {
    data() {
      return {
        searchValue: '',
        trdidx: '',
        saveBtnShow: false,
        searchListShow: false,
        searchFlag: null,
        imgs: {bgNone},
        searchList: [],
        bsList: [],
        allList: [],
        mainList: []
      }
    },
    created() {
      this.trdidx = this.$route.query.trdidx
      let arr = this.$store._modules.root.state.AICstore.bsArr
      arr.map((v) => {
        this.bsList.push(v)
      })
      console.log(arr);
      if (arr.length > 0 && arr[0].main) {
        this.saveBtnShow = true
      }
      this.searchFn(this.mainList, this.trdidx)
      this.searchFn(this.allList)
    },
    methods: {
      backFn() {
        this.$router.go(-1)
      },
      searchFn(arr, trdidx) {
        // console.log(this.searchValue);
        let data = {
          txnBodyCom: {
            matter_id: window.sessionStorage.getItem('matterid'),
            trd_ind: trdidx ? trdidx : '',
            keyword: this.searchValue
          }
        }
        this.$ajaxRequest('post', 'gsp/mng19048', data)
          .then(res => {
            // console.log(res);
            if (res.length > 0) {
              res.map((v) => {
                if (trdidx) v.main = true
                v.show = true
                arr.push(v)
              })
            }
          })
          .catch(error => {
            console.log(error)
          })
      },
      checkSearchItem(item) {
        let flag = false
        for (var i = 0; i < this.bsList.length; i++) {
          var v = this.bsList[i];
          if (v.trdDesc === item.trdDesc) {
            flag = true
            this.$toast('该经营范围已选择')
            break
          }
        }
        if (!flag) {
          if (this.hasMain()) {
            this.bsList.unshift(item)
            this.mainChangeFn()
          } else {
            this.bsList.push(item)
          }
        }
        this.searchListShow = false
        this.searchValue = ''
      },
      delBsItem(item, index) {
        this.bsList.splice(index, 1)
        if (index === 0) this.saveBtnShow = false
      },
      hasMain() {
        if ((this.bsList.length === 0) || (this.bsList.length > 0 && !this.bsList[0].main)) {
          this.saveBtnShow = true
          return true
        } else {
          return false
        }
      },
      saveBsFn() {
        this.$store._modules.root.state.AICstore.bsArr.splice(0)
        this.bsList.map((v) => {
          this.$store._modules.root.state.AICstore.bsArr.push(v)
        })
        this.$router.go(-1)
      },
      mainChangeFn() {
        if (this.bsList.length > 0) {
          this.bsList[0].idMian = true
        }
      },
      focusFn() {
        this.searchList.splice(0)
        this.searchListShow = true
        if (this.bsList.length > 0 && this.bsList[0].idMian) {
          //有主营 放入全部
          this.allList.map((v) => {
            this.searchList.push(v)
          })
        } else {
          //没有主营  放入限制的范围
          this.mainList.map((v) => {
            this.searchList.push(v)
          })
        }
        this.searchList.map((v) => {
          v.show = true
        })
      },
      filterFn() {
        clearTimeout(this.searchFlag)
        this.searchFlag = setTimeout(() => {
          console.log('filterFn');
          this.searchFlag = true
          this.searchList.map((v) => {
            if (v.trdDesc.indexOf(this.searchValue) > -1) {
              v.show = true
            } else {
              v.show = false
            }
          })
        }, 300)
      }
    }
  }
</script>

<style scoped>
  .bsSearch {
    text-align: left;
  }

  .searchBox {
    background-color: #fff;
    display: flex;
    border-bottom: 1px solid #ccc;
  }

  .searchBox > div {
    display: inline-block;
  }

  .backBtn {
    width: 10%;
    text-align: center;
    padding-left: 0.06rem;
    padding-top: 0.01rem;
    line-height: 0.9rem;
  }

  .searchIpt {
    position: relative;
    width: 74%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .searchIpt .hui-icon_search {
    position: absolute;
    left: 10px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .searchIpt .search {
    width: 100%;
    height: 34px;
    border-radius: 17px;
    border: 1px solid #ccc;
    /*background-color: #f5f5f5!important;*/
    position: absolute;
    padding: 10px 50px 10px 30px;
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .searchBtn {
    width: 14%;
    font-size: 14px;
    color: #4A90E2;
    letter-spacing: 0;
    text-align: center;
    background-color: #fff;
  }

  .searchList {
    min-height: 50vh;
    position: relative;
  }

  .bgNone {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -20%);
    -moz-transform: translate(-50%, -20%);
    -ms-transform: translate(-50%, -20%);
    -o-transform: translate(-50%, -20%);
    transform: translate(-50%, -20%);
    width: 70%;
  }

  .yuyinIcon {
    width: 12px;
    position: absolute;
    right: 10px;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    top: 50%;
    padding: 0 10px;
  }

  .searchLi {
    padding: 12px 10px;
    text-align: left;
    font-size: 14px;
    background-color: #fff;
  }

  .searchListTitle {
    padding: 10px;
  }

  .delBsBtn {
    border: none;
    background-color: #fff;
    font-size: 14px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }

  .mainBs {
    background: #328AF6;
    border-radius: 11.5px;
    color: #fff;
    padding: 2px 8px;
    font-size: 12px;
  }

  .bsListUl {
    min-height: 20px;
  }

  .bsListNone {
    text-align: center;
    font-size: 16px;
    color: #666;
    line-height: 4;
    background-color: #fff;
  }

  .saveBsBtn {
    border-radius: 16px;
    width: 80%;
    margin: 20px auto;
    display: block;
  }
</style>
