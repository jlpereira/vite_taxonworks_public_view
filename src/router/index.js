import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

import OtuIndex from '@/views/otus/index.vue'
import OtuOverview from '@/views/otus/Overview.vue'
import OtuDistribution from '@/views/otus/Distribution.vue'
import OtuTimeline from '@/views/otus/Timeline.vue'

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
          path: 'timeline',
          name: 'otus-id-timeline',
          component: OtuTimeline
        },
        {
          path: 'descendants',
          name: 'otus-id-descendants',
          component: OtuDistribution
        },
        {
          path: 'images',
          name: 'otus-id-images',
          component: OtuDistribution
        },
        {
          path: 'type_specimens',
          name: 'otus-id-type_specimens',
          component: OtuDistribution
        },
        {
          path: 'specimen_records',
          name: 'otus-id-specimen_records',
          component: OtuDistribution
        },
        {
          path: 'content',
          name: 'otus-id-content',
          component: OtuDistribution
        },
        {
          path: 'annotations',
          name: 'otus-id-annotations',
          component: OtuDistribution
        },
        {
          path: 'distribution',
          name: 'otus-id-distribution',
          component: OtuDistribution
        },
      ]
    }
  ]
})

export default router