import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

import OtuIndex from '@/views/otus/index.vue'
import OtuOverview from '@/views/otus/Overview.vue'
import OtuDistribution from '@/views/otus/Distribution.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home 
    },
    { 
      path: '/about',
      name: 'About',
      component: About
    },
    { 
      name: 'otus-id',
      path: '/otus/:id',
      component: OtuIndex,
      children: [
        {
          path: '',
          component: OtuOverview
        },
        {
          path: 'overview',
          name: 'otus-id-overview',
          component: OtuOverview,
        },
        {
          path: 'distribution',
          name: 'otus-id-distribution',
          component: OtuDistribution
        }
      ]
    }
  ]
})

export default router