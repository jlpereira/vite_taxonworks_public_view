import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import '@/assets/css/main.scss'

import Card from '@/components/Card.vue'


const app = createApp(App)

app.use(router)
app.component("Card", Card)
app.mount('#app')
