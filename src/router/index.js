import { createRouter, createWebHistory } from 'vue-router';
import TesteView from '../views/TesteView.vue';
import PacienteView from '@/views/PacienteView.vue';

const routes = [
  { path: '/', component: PacienteView },
  { path: '/pacientes', component: PacienteView },
  { path: '/perfil', component: TesteView },
  { path: '/usuarios', component: TesteView },
  { path: '/sobrenos', component: TesteView },
  { path: '/administradores', component: TesteView },
  { path: '/ping', component: TesteView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
