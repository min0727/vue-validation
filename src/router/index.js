import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/components/HomeView.vue';

export const routes = [
  {
    path: '/',
    name: 'ホーム',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'アバウト',
    component: () => import('@/components/AboutView.vue'),
  },
  {
    path: '/inventory',
    name: '在庫管理',
    component: () => import('@/components/ParentInventory.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
