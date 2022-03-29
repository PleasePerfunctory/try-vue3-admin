<template>
  <section>
    Vue3 + TypeScript + pinia + ElementPlus
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const data = {
        a: {
            c: 123,
            d: {
              name: '冯建军',
              data: {
                v: 'node'
              }
            }
        },
        b: ['begonia', '哈哈哈'],
        d: {
            c: [1, 2, 3]
        },
        e: [{
            name: "begonia",
            age: 18
        }, {
            name: "windy",
            age: 18
        }],
        f: [[123], [[345, 678]]]
    }
  }
})
</script>