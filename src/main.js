import { createApp } from 'vue'
import App from './App.vue'
import "normalize.css";
import './asset/css/index.css'
import router from './router'
import { createPinia } from 'pinia';

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
