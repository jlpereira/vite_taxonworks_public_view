import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import '@/assets/css/main.scss'

import Card from '@/components/Card/Card.vue'
import CardContent from '@/components/Card/CardContent.vue'
import CardHeader from '@/components/Card/CardHeader.vue'


const app = createApp(App)

app.use(router)
app.component("Card", Card)
app.component("CardContent", CardContent)
app.component("CardHeader", CardHeader)
app.mount('#app')
