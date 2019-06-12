<template>
  <div>
    <div v-text="inner" />
  </div>
</template>;
export default {
  data() {
    return {
      inner: 'in'
    };
  }
};
