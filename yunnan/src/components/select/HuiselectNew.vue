
<template>
        <Huiselect
            ref="picker"
            :position="position"
            :dataslots="dataslots"
            class="example-select_item"
            @confirms="selectConfirmFun01"
            @selectval="selectChangeFun2"
        ></Huiselect>
</template>
<script>
// 封装HUI的HuiSelect组件，增加清除按钮
// 使用方法与原HuiSelect基本相同，只是增加@reset事件，需在使用该组件的页面中编写该函数，将HuiSelect已选择的值置为空。
// author：陈喆
export default {
  props: {
    dataslots: {},
    position: ""
  },
  mounted() {
    this.addResetButton();
  },
  methods: {
    open() {
      this.$refs["picker"].open();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    selectConfirmFun01(selectedVal) {
      this.$emit("confirms", selectedVal);
    },
    selectChangeFun2(picker, values) {
        this.$emit('selectval', picker, values);
      },
    //动态生成清除按钮
    addResetButton() {
      var el = this.$el;
      var self = this;
      var pickerToolBar = el.getElementsByClassName("picker-toolbar")[0];
      var resetButton = document.createElement("span");
      resetButton.setAttribute("class", "hui-select_action hui-select_reset");
      resetButton.innerText = "清除";
      resetButton.onclick = function() {
        self.$refs["picker"].close();
        self.$emit("reset");
      };
      pickerToolBar.insertBefore(resetButton, pickerToolBar.lastChild);
    }
  }
};
</script>

<style>
.example-select_item .hui-select_action {
  width: 33%;
}
</style>

