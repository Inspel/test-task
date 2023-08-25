import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import App from '@/App.vue'

import 'vuetify/styles'
import vuetify from './plugins/vuetify'
import { VueQueryPlugin } from 'vue-query'

const app = createApp(App)

app.use(vuetify)
app.use(VueQueryPlugin as any)

app.mount('#app')
