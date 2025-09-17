import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

import * as BootstrapVueNext from 'bootstrap-vue-next'; // Importação correta

const app = createApp(App);
app.use(router);
app.use(BootstrapVueNext); // Corrigindo importação
app.mount('#app');
