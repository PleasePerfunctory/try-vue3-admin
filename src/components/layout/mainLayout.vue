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

    const getData = (obj: Object) => {
      const res = {}
      const data = Object.entries(obj)
      const is = type => (data) => Object.prototype.toString.call(data) == `[object ${type}]`
      const isArray = is('Array')
      const isObject = is('Object')
      while (data.length) {
        const [k, v] = data.shift()
        switch (true) {
          case isArray(v):
            data.unshift(...v.map((item, i) => [`${k}[${i}]`, item]))
            break
          case isObject(v):
            data.unshift(...Object.entries(v).map(([kk, v]) => [`${k}.${kk}`, v]))
            break
          default:
            res[k] = v
            break
        }
      }
      return res
    }
    function clone(target: any, map = new Map()): object {
      if (typeof target === 'object') {
        let cloneTarget: any = Array.isArray(target) ? [] : {};
        if (map.get(target)) {
          return map.get(target);
        }
        map.set(target, cloneTarget);
        for (const key in target) {
          cloneTarget[key] = clone(target[key], map);
        }
        return cloneTarget;
      } else {
        return target;
      }
    };
    console.log(getData(data))
  }
})
</script>