import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import store from './store/store.js'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArBql7q1XLlq99UmPGMFbVc3PESKgl5g0",
  authDomain: "view-photo-app.firebaseapp.com",
  projectId: "view-photo-app",
  storageBucket: "view-photo-app.appspot.com",
  messagingSenderId: "412328102528",
  appId: "1:412328102528:web:b32f6f9b6b916f51947465",
  measurementId: "G-YR2YTC0467"
};

// Initialize Firebase
initializeApp(firebaseConfig);

library.add(faGoogle)

const app = createApp(App).use(router).use(store).component('font-awesome-icon', FontAwesomeIcon)

app.config.globalProperties.axios=axios

app.mount('#app')