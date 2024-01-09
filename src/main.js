import { createApp } from 'vue'
import "./assets/vendor/aos/aos.css"
import "./assets/vendor/bootstrap/css/bootstrap.min.css"
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "./assets/vendor/boxicons/css/boxicons.min.css"
import "./assets/vendor/glightbox/css/glightbox.min.css"
import "./assets/vendor/remixicon/remixicon.css"
import "./assets/vendor/swiper/swiper-bundle.min.css"
import "./assets/css/style.css"
import "./assets/css/fleet.css"
import router from "./routes.js"
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
