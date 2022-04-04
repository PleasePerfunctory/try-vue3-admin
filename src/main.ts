import { createApp } from 'vue';
import router from '@/router/index';
import('./assets/scss/var.scss'); // 定义css变量
import App from './App.vue';

// eslint-disable-next-line prettier/prettier
createApp(App)
  .use(router)
  .mount('#app');
