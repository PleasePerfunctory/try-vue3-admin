<script lang="ts">
import { defineComponent, reactive } from 'vue'
interface MicroItem {
  // 微应用项
  name: string
  icon?: string
  key: string
  color: string
}
export default defineComponent({
  setup() {
    // 获取微应用菜单
    let microList: Array<MicroItem> = reactive([])
    microList = [
      {
        name: '管理页面',
        // icon: 'icon-admin',
        key: 'admin',
        color: '#2D55F6',
      },
      {
        name: '权限管理',
        icon: 'icon-quanxian',
        key: 'auth',
        color: '#FF4D4F',
      },
    ]

    return {
      microList,
    }
  },
})
</script>

<template>
  <section class="micro-menu-list">
    <div
      v-for="item in microList"
      :key="item.key"
      :style="item.color ? '--micro-color: ' + item.color : ''"
      class="micro-item"
    >
      <div class="micro-item-color" />
      <i class="icon-font" :class="item.icon || 'icon-m-moren'" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .micro-menu-list {
    display: flex;
    align-items: center;
    margin: 0 -5px;
    .micro-item {
      width: 48px;
      height: 48px;
      background: #ffffff;
      box-shadow: 4px 0px 50px 0px rgba(0, 0, 0, 0.18);
      border-radius: 8px;
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 5px;
      &:hover {
        .micro-item-color {
          transform: scale(1);
        }
        .icon-font {
          font-size: 30px;
        }
      }
      .micro-item-color {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: var(--micro-color, #13c2c2);
        border-radius: 8px;
        transform: scale(0.5);
        transition: all 0.3s ease-in-out;
      }
      .icon-font {
        color: #ffffff;
        transition: font-size 0.05s ease-out 0.3s;
        font-size: 16px;
        position: relative;
        z-index: 99;
      }
    }
  }
</style>
