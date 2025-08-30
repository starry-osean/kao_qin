import { createApp } from 'vue'
import './style.css'
import './style/reset.scss'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import nav from './components/nav.vue'
createApp(App)
  .use(createPinia())
  .use(router)
  .component('Nav',nav)
  .mount('#app')
