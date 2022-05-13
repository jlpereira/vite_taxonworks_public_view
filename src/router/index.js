import otusRoutes from '@/modules/otus/router'
import homeRoutes from '@/modules/home/router'
import aboutRoutes from '@/modules/about/router'

const { VITE_BASE_URL } = import.meta.env

export default ({
  base: VITE_BASE_URL,

  routes: [
    ...homeRoutes,
    ...otusRoutes,
    ...aboutRoutes
  ]
})
