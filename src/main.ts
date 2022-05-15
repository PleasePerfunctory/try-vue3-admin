import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index' // 定义css变量
/**
 * ! 各种东西的练习，如装饰器、面向对象、class和一些手写等
 * 希望这些东西能用来巩固自己的基础。加油！！！
 */
import('@/notes/decorator')
import('@/notes/object')
import('./assets/scss/var.scss')

createApp(App)
  .use(router)
  .mount('#app')
