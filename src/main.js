import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import FitLayout from './components/fit-layout/fit-layout.vue'
import './index.css'

const app = createApp(App);
app.use(router);
app.component('FitLayout', FitLayout);
app.mount('#app');
