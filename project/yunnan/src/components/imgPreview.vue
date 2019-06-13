<template>
  <div class="img-preview" @click="close" v-if="showTo">
    <div class="inner">
      <img class="image" :src="data" alt="">
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  props: [
    'show',
    'data'
  ],
  computed: {
    showTo : {
      get () {
        return this.show
      },

      set (val) {
        return val
      }
    }
  },
  methods: {
    close () {
      this.showTo = false
      this.$emit('callback', false)
    }
  }
}
</script>

<style lang="less" scoped>
.img-preview {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  z-index: 1;

}

.inner {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  .image {
    width: 100%;
  }
}

.inner:after {
  content: '';
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: -1;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 2s; 
  display: fixed;
} 
.fade-enter, .fade-leave-to {
  opacity: 0; 
  display: none;
}
</style>
