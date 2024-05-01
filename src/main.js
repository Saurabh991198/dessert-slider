import { createApp } from 'vue'
import './css/style.css'
import router from './router'
import App from './App.vue'
import './css/app.scss'; // Import your app.scss file
const app = createApp(App)
app.use(router)
app.mount('#app')
