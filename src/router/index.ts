import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'admin',
    component: () => import('@/components/layout/mainLayout.vue'),
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})