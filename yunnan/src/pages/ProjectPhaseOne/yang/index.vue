<template>

<div class="example-multiSelect">
  123456
    <Mutilselect
      :roots="roots"
      :visible = "visible"
      v-on:visiblechange="changevisble"
      @change-selection="changeValue"
      v-if="roots.length>0"
    >
    </Mutilselect>

</div>
</template>
<style scoped="index.vue">
.example-multiSelect_btn{color:blue;cursor:pointer}
.markdown .comps-multiSelect  ul li {
    list-style: none;
    padding: 0 15px;
    line-height: 44px;
    margin:0
}
.hui-multiSelect_text{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:normal;
}
.hui-multiSelect_item.hasSub .hui-multiSelect_text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space:nowrap;
}
.hui-multiSelect_subNumber {
  display: none;
}
</style>
<script>
export default{
  data() {
    return {
      visible:true,
      roots: []
    }
  },
  methods: {
    changevisble(val){
      this.visible=val
    },
    changeValue(ids) {
      console.log("点击回调的ids ",ids);
      // this.$router.push('/projectinfo')
    },
  },
  created: function () {
    var self =this;
    setTimeout(function(){
      self.roots = [
        {
          id: '1',
          name: '国标行业目录',
          select:false,
          sub_selections: []
        },
        {
          id: '2',
          name: '稻谷种植',
          select:false,
          sub_selections: [
            {
              id: '2_1',
              name: '中低产田综合治理与稳产高产基本农田建设',
              select:false,
              sub_selections: [
                {
                  id: '2_1_1',
                  name: '高性能、高质量及升级换代钢材产品技术开发与应用。包括600兆帕级及以上高强度汽车板、油气输送高性能管线钢、高强度船舶用宽厚板、海洋工程用钢、420兆帕级及以上建筑和桥梁等结构用中厚板、高速重载铁路用钢、低铁损高磁感硅钢、耐腐蚀耐磨损钢材、节约合金资源不锈钢（现代铁素体不锈钢、双相不锈钢、含氮不锈钢）、高性能基础件（高性能齿轮、12.9级及以上螺栓、高强度弹簧、长寿命轴承等）用特殊钢棒线材、高品质特钢锻轧材（工模具钢、不锈钢、机械用钢等）等 ',
                  select:false
                },
              ]
            },
          ]
        },
        {
          id: '2',
          name: '林业建筑',
          select:false,
          sub_selections: [
            {
              id: '2_1',
              name: '畜禽标准化规模养殖技术开发与应用',
              select:false,
              sub_selections: [
                {
                  id: '2_1_1',
                  name: '高性能、高质量及升级换代钢材产品技术开发与应用。包括600兆帕级及以上高强度汽车板、油气输送高性能管线钢、高强度船舶用宽厚板、海洋工程用钢、420兆帕级及以上建筑和桥梁等结构用中厚板、高速重载铁路用钢、低铁损高磁感硅钢、耐腐蚀耐磨损钢材、节约合金资源不锈钢（现代铁素体不锈钢、双相不锈钢、含氮不锈钢）、高性能基础件（高性能齿轮、12.9级及以上螺栓、高强度弹簧、长寿命轴承等）用特殊钢棒线材、高品质特钢锻轧材（工模具钢、不锈钢、机械用钢等）等 ',
                  select:false
                },
              ]
            },
          ]
        },
        {
          id: '2',
          name: '家禽饲养',
          select:false,
          sub_selections: [
            {
              id: '2_1',
              name: '优质、高产、高效标准化栽培技术开发与应用',
              select:false,
              sub_selections: [
                
              ]
            },
          ]
        },
      ];
    })

  }
}
</script>   
