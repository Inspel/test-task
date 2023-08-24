import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const root = document.createElement('div');
root.id = 'widget';

document.querySelector('body')!.appendChild(root);

createApp(App).mount('#widget')
