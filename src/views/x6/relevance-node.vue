<script lang="ts" setup>
const props = defineProps({
  nodeInfo: {
    type: Object,
    default: () => {},
  },
})

const iconMap: Record<number | string, string> = {
  0: new URL('../../img/system-icon.png', import.meta.url).href,
  1: new URL('../../img/tableData-icon.png', import.meta.url).href,
  4: new URL('../../img/interface-icon.png', import.meta.url).href,
  5: new URL('../../img/app-icon.png', import.meta.url).href,
}
</script>

<template>
  <div :active="nodeInfo.isActive" class="table-node">
    <header class="node-header">
      <img class="node-icon" :src="iconMap[nodeInfo.nodeType || '0']">
      <span class="node-name text-ellipsis">{{ nodeInfo.name || '--' }}</span>
    </header>
    <div class="database-info">
      <span class="database-name">{{ nodeInfo.database || '--' }}</span>
      <div class="database-type">
        {{ nodeInfo.databaseType || '--' }}
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

</style>
