import { createRouter, createWebHistory } from 'vue-router';
import TesteView from '../views/TesteView.vue';

const routes = [
  { path: '/teste', component: TesteView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
