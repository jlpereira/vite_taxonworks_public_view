import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import routerOptions from '@/router/index.js'
import '@/assets/css/main.scss'

import Card from '@/components/Card/Card.vue'
import CardContent from '@/components/Card/CardContent.vue'
import CardHeader from '@/components/Card/CardHeader.vue'
import VSpinner from '@/components/VSpinner.vue';

export const createApp = ViteSSG(
  App,
  routerOptions,
  ({ app, router, routes, isClient, initialState }) => {
    app.component("Card", Card)
    app.component("CardContent", CardContent)
    app.component("CardHeader", CardHeader)
    app.component("VSpinner", VSpinner)
  },
)
