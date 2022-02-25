import { createRouter, createWebHistory } from 'vue-router'

import otusRoutes from '@/modules/otus/router'
import homeRoutes from '@/modules/home/router'

const { VITE_BASE_URL } = import.meta.env
const router = createRouter({
  history: createWebHistory(VITE_BASE_URL),

  routes: [
    ...homeRoutes,
    ...otusRoutes
  ]
})

export default router