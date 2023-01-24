import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import store from './store'
import router from './router'

const app = createApp(App).use(router).use(store)

app.config.globalProperties.axios=axios

app.mount('#app')