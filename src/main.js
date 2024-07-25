import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'material-icons/iconfont/material-icons.css'

import.meta.env = {
  VITE_GOOGLE_MAPS_API_KEY: `${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`
}

document.addEventListener('DOMContentLoaded', () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  const script = document.createElement('script')
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&libraries=maps,marker&v=beta`
  script.async = true
  document.head.appendChild(script)
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
