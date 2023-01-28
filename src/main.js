import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import store from './store/store.js'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

library.add(faGoogle)

const app = createApp(App).use(router).use(store).component('font-awesome-icon', FontAwesomeIcon)

app.config.globalProperties.axios=axios

app.mount('#app')