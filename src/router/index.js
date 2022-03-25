import { 
  createRouter, 
  createWebHistory,
  createWebHashHistory
} from 'vue-router'

import otusRoutes from '@/modules/otus/router'
import homeRoutes from '@/modules/home/router'

const { VITE_BASE_URL, VITE_ROUTER_HASH_MODE } = import.meta.env

const router = createRouter({
  history: VITE_ROUTER_HASH_MODE
    ? createWebHashHistory(VITE_BASE_URL)
    : createWebHistory(VITE_BASE_URL),

  routes: [
    ...homeRoutes,
    ...otusRoutes
  ]
})

export default router