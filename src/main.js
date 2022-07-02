import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router"

import './firebase'

// styles
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap
import "./css/styles.css"
import './registerServiceWorker'

// init app
createApp(App)
    .use( router )
    .mount('#app')
