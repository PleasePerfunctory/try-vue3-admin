<template>
  <section class="micro-menu-list">
    <div class="micro-item">
      <div class="micro-item-color"></div>
    </div>
  </section>
</template>
<script lang="ts">
</script>
<style lang="scss" scoped>
.micro-menu-list{
  display: flex;
  align-items: center;
  .micro-item{
    width: 48px;
    height: 48px;
    background: #FFFFFF;
    box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    position: relative;
    .micro-item-color{
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: #FF4D4F;
    }
  }
}
</style>