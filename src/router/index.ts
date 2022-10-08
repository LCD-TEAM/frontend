import { createRouter, createWebHistory } from 'vue-router';
import { RouteNamesEnum } from './router.types';
import { AppLayoutsEnum } from '@/layouts/layouts.types';
import { loadLayoutMiddleware } from './middleware/loadLayout.middleware';


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteNamesEnum.home,
      component: () => import("@/views/Home.vue"),
      meta: {
        layout: AppLayoutsEnum.onBoard,
      }
    },
  ]
})

router.beforeEach(loadLayoutMiddleware);

export default router;