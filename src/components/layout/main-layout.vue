<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './nav-bar.vue'
import MainAside from './main-aside.vue'
export default defineComponent({
  components: { NavBar, MainAside },
  setup() {

  },
})
</script>

<template>
  <section class="layout-main-wrap">
    <nav-bar />
    <main class="layout-main-content">
      <main-aside />
      <div class="main-content-view">
        <router-view />
      </div>
    </main>
  </section>
</template>

<style lang="scss" scoped>
  .layout-main-wrap {
    width: 100%;
    height: 100%;
    // display: flex;
    .layout-main-content{
      width: 100%;
      height: calc(100% - 72px);
      background-color: #F9FAFD;
      display: flex;
      .main-content-view{
        height: 100%;
        flex: 1;
        width: 0;
      }
    }
  }
</style>
