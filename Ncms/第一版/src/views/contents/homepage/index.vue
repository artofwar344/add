<template>
  <div>
    {{meg}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      name : 'homepage',
      meg : 'helloworld'
    }
  },
  created () {
    this.createdgo()
  },
  methods  : {
    createdgo() {
      this.$router.push({path: '/administer/management'})
    }
  }
}
</script>

<style scoped>

</style>
