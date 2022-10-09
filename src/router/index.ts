import { createRouter, createWebHistory } from 'vue-router';
import { RouteNamesEnum } from './router.types';
import { AppLayoutsEnum } from '@/layouts/layouts.types';
import { loadLayoutMiddleware } from './middleware/loadLayout.middleware';
import { loadRolesMiddleware } from './middleware/loadRoles.middleware';


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
    {
      path: '/news',
      name: RouteNamesEnum.news,
      component: () => import("@/views/News.vue"),
      meta: {
        layout: AppLayoutsEnum.news,
      },
    }
  ]
})

router.beforeEach(loadLayoutMiddleware);
router.beforeEach(loadRolesMiddleware);

export default router;