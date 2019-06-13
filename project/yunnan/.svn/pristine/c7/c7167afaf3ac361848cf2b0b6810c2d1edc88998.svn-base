<template>
<div class="select">
  <Field readonly :required="required" :label="label"  ref="selevtValueInput"
         disableclear type="text" :value="value" class="selectTypeData"
         @click.native="open(selectRef)">
            <span slot="append">
              <Icon type="arrow-right" size="14" color="#757575"></Icon>
            </span>
  </Field>
  <Selectpopup
    :ref="selectRef"
    position="bottom"
    
    :dataslots="dataslots"
    :visible-item-count="5"
    @confirms="selectConfirms"
  ></Selectpopup>
</div>
</template>
<script>
export default {
  name: 'mySelect',
  props: {
    label: [String],
    hasRequired: [String],
    selectRef: [String],
    dataslots: [Array],
    value: [String]
  },
  data () {
    return {
      selectPicker: ''
    }
  },
  created () {},
  mounted () {
  },
  computed: {
    required () {
      return !!this.hasRequired
    }
  },
  methods: {
    open (picker) {
      this.$refs[picker].open()
      this.selectPicker = picker
      document.activeElement.blur()
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    selectConfirms (selectedVal) {
      if (typeof selectedVal[0] === 'object') {
        this.$emit('selectObjRes', {
          picker: this.selectPicker,
          selectedVal: selectedVal[0]
        })
      } else {
        this.$emit('selectRes', {
          selectPicker: this.selectPicker,
          selectedVal: selectedVal[0]
        })
      }
    }
  }
}
</script>

<style>

</style>
