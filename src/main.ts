import 'vuetify/styles'
import '@/assets/main.css'
import '@mdi/font/css/materialdesignicons.css'

import vuetify from '@/plugins/vuetify'
import { VueQueryPlugin } from 'vue-query'
import { createApp } from 'vue'

import App from '@/App.vue'

const app = createApp(App)

app.use(vuetify)
app.use(VueQueryPlugin)

app.mount('#app')
