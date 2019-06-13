<template>
  <div class="myButton">
    <div v-if="btnData.length == 1" class="myButton">
      <Btn class="oneButton" v-on="inputListeners" :disabled="btnData[0].disabled" type="custom" block
           :bg-color="btnData[0].disabled? '' : btnData[0].isSure ? '#2D7FFC' :  '#D8494C'"
           color="#fff" @click="btnclick()">{{ btnData[0].text }} 
      </Btn>
    </div>
    <div v-if="btnData.length == 2" class="towButton">
      <Btn v-if="btnData[0].isSure && btnData[1].isSure" :class="'myBtn-'+index" v class="oneButton"
           v-for="(item,index) in btnData"
          
           v-on="inputListeners" :disabled="item.disabled"
           :bg-color="item.disabled ? '' : twoSure[index]"
           type="custom"
           @click="handleClick(item.click)"
           color="#fff">{{ item.text }}
      </Btn>
      <Btn v-else :class="'myBtn-'+index" v-for="(item,index) in btnData"
           v-on="inputListeners" :disabled="item.disabled"
           :bg-color="item.disabled ? '' : item.isSure ? '#2D7FFC' :  '#D8494C'"
           type="custom"
           @click="handleClick(item.click)"
           color="#fff">{{ item.text }}
      </Btn>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Mybutton',
    props: {
      shadow:false,
      btnData: {},
    },
    data () {
      return {
        bgcolor: '#2D7FFC',
        disabled: false,
        twoSure: ['#2D7FFC', '#08C173']
      }
    },
    computed: {
      inputListeners: function () {
        // `Object.assign` 将所有的对象合并为一个新对象
        return Object.assign({},
          // 我们从父级添加所有的监听器
          this.$listeners,
        )
      }
    },
    mounted () {
      let buttonList = $('.myButton button')
      buttonList.each((index, item) => {
       $(item).css('boxShadow', ' 0 .05rem .15rem ' + $(item).css('background-color'));
      })

      buttonList.on("touchstart", function() {
        $(this).css({opacity:0.8});
      }).on("touchend", function() {
        $(this).css({opacity: 1});
      });
    },
    methods: {
      btnclick(){
        window.sessionStorage.setItem('btnclick','1')
      },
      handleClick (func) {
        // console.log(func)
        //func()
        window.sessionStorage.setItem('btnclick','1')
        this.$emit(func)
      }
    },

  }
</script>
<style lang="less" scoped>
  .myButton {
    .hui-btn.is-block{
      width:90% !important;
      margin:0 auto !important;

    }
    button{
      -webkit-user-select: none;
      -webkit-tap-highlight-color: transparent;
    }
    .oneButton, .myBtn-0, .myBtn-1 {
      height: 0.9rem;
      width: 5.9rem;
      text-align: center;
      margin: 0 auto;
      border-radius: 0.5rem;
      font-size: 0.32rem;
    }
    .towButton {
      overflow: hidden;
      width: 90%;
      margin: 0 auto;
      padding: 0.2rem;
      .myBtn-0, .myBtn-1 {
        width: 46%;
        display: inline-block;
      }
      .myBtn-0 {
        float: left;
      }
      .myBtn-1 {
        float: right;
      }

    }
    .hui-btn_custom .hui-btn_text {
      line-height:0;
    }
  }

</style>
