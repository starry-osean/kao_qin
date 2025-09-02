import { createApp } from 'vue'
import './style.css'
import './style/reset.scss'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import nav from './components/nav.vue'
const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.component('Nav',nav);
app.mount('#app');
