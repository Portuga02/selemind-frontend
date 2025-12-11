import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; 
import { createPinia } from 'pinia';
import { useAuthStore } from './stores/auth'; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

const app = createApp(App);
const pinia = createPinia(); 

app.use(pinia); 

const authStore = useAuthStore();
authStore.initializeStore(); 

app.use(router);

app.mount('#app');