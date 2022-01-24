import { createRouter, createWebHistory } from 'vue-router'

import otusRoutes from '@/modules/otus/router'
import homeRoutes from '@/modules/home/router'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    ...homeRoutes,
    ...otusRoutes
  ]
})

export default router