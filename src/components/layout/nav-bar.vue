<template>
  <nav class="main-nav">
    <div class="logo-container"></div>
    <div class="micro-user-container">
      <MicroBar />
    </div>
  </nav>
</template>
<script lang="ts">
  import MicroBar from './micro-bar.vue';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: { MicroBar },
  });
</script>
<style lang="scss" scoped>
  .main-nav {
    height: 72px;
    background: #ffffff;
    box-shadow: 24px 0px 24px 0px rgba(205, 211, 220, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo-container {
      width: 96px;
      height: 100%;
      background-color: var(--color-theme-main);
    }
    .micro-user-container {
      padding: 0 24px;
      border-bottom: 1px solid #e9edf3;
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>
