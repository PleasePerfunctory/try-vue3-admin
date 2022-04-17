import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'admin',
    component: () => import('@/components/layout/main-layout.vue'),
    redirect: '/permissions',
    children: [
      {
        path: 'permissions',
        name: 'permissions',
        component: () => import('@/views/permissions/index.vue'),
      },
    ],
  },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
