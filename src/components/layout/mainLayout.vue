<template>
  <section class="layout-main-wrap">
    <nav-bar />
  </section>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import NavBar from './nav-bar.vue';
  export default defineComponent({
    components: { NavBar },
    setup() {
      console.log('sdfdsf');
    },
  });
</script>
<style lang="scss" scoped>
  .layout-main-wrap {
    width: 100%;
    height: 100%;
    // display: flex;
  }
</style>
