import { createRouter, createWebHistory } from 'vue-router';
// Importa o Store de Autenticação para checar o estado do login
import { useAuthStore } from '@/stores/auth'; 

// Importa os componentes de View
import TesteView from '../views/TesteView.vue';
import PacienteView from '@/views/PacienteView.vue';
import LoginView from '@/views/LoginView.vue';


const routes = [
  // 1. Rota de Login: Acessível apenas para convidados
  { 
    path: '/login', 
    name: 'Login', 
    component: LoginView, 
    meta: { 
      requiresAuth: false, // Não requer login
      guest: true         // Acessível apenas se não estiver logado
    } 
  },
  
  // 2. Dashboard Principal do Paciente: Rota protegida (requer login)
  { 
    path: '/', 
    name: 'PatientDashboard', 
    component: PacienteView, 
    meta: { 
      requiresAuth: true, 
      roles: ['patient', 'psychologist'] // Define quem tem permissão básica
    } 
  },
  
  // 3. Rota de Administradores: Protegida e com Perfil Específico
  { 
    path: '/administradores', 
    name: 'AdminPanel', 
    component: TesteView, 
    meta: { 
      requiresAuth: true, 
      roles: ['admin', 'psychologist']
    } 
  },
  
  // 4. Rota de Teste (Sem Proteção, manter apenas em DEV)
  { 
    path: '/ping', 
    component: TesteView 
  } 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// **************************************************************
// 5. NAVIGATION GUARD (O Guarda de Segurança)
// **************************************************************

router.beforeEach((to, from, next) => {
  // 1. Inicializa o Store do Pinia para usar os dados de autenticação
  const authStore = useAuthStore();
  const isAuthenticated = authStore.isAuthenticated; // Checa se o token existe

  // A. Checagem de Rota Protegida (requiresAuth: true)
  if (to.meta.requiresAuth && !isAuthenticated) {
    // Se precisa de login e não está logado, redireciona para o login
    return next({ name: 'Login' });
  }

  // B. Checagem de Rota de Convidado (guest: true)
  if (to.meta.guest && isAuthenticated) {
    // Se está logado, mas tentando acessar o Login/Registro, redireciona para o dashboard
    return next({ name: 'PatientDashboard' });
  }

  // C. Checagem de Perfil/Role (Para rotas como /administradores)
  if (to.meta.roles && isAuthenticated) {
      // EX: Se você tiver a role do usuário no store (authStore.user.role)
      // const userRole = authStore.user?.role;
      
      // if (!to.meta.roles.includes(userRole)) {
      //     // Se o usuário não tiver a role necessária, redireciona para uma página de erro
      //     // return next({ name: 'AccessDenied' }); 
      // }
  }
  
  next();
});

export default router;