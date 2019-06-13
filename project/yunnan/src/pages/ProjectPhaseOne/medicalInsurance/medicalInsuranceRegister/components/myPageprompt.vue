<template>
  <div class="myPageprompt">
    <div class="mark" @click.stop.prevent="closeMark" v-if="showMark"></div>
    <Pageprompt
      :visible="showWithBtn"
      :message="message"
      show-btn
      :icon-type="icontype"
      :btn-confirm="btnConfirm"
    >
    </Pageprompt>
  </div>
</template>

<script>
export default {
  name: 'myPageprompt',
  props: {
    message: [String],
    icontype: [String]
  },
  data () {
    return {
      showMark: false,
      showWithBtn: false,
      btnConfirm: {
        hasbtn: true,
        text: '确定'
      },
      zt:Boolean
    }
  },
  created () {},
  mounted () {},
  components: {},
  methods: {
    handleClickWidthBtn () {
      const _slef = this
      _slef.showSuccess = false
      _slef.showFailed = true
      _slef.showWithBtn = true
      _slef.setBtnEvent()
      _slef.showMark = !this.showMark
    }, // 弹框
    setBtnEvent () {
      const _self = this
      const oBtn = document.getElementsByClassName('hui-pagePrompt_operation')[0].getElementsByTagName('button')[0]
      oBtn.onclick = function () {
        _self.$emit('ackButton',_self.zt )
      }
    },
    closeMark () {
      const _self = this
      _self.showWithBtn = false
      _self.showMark = !_self.showMark
    }
  }
}
</script>
<style>
  .myPageprompt .hui-pagePrompt{z-index: 11;background: #fff;border-radius: 5px;}
</style>
<style scoped lang="less">
  .myPageprompt {
    .mark {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 10;
    }

  }
</style>
