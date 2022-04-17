import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index' // 定义css变量
import('./assets/scss/var.scss')

createApp(App)
  .use(router)
  .mount('#app')
