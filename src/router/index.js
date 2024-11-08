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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
