// src/stores/auth.js

import { defineStore } from 'pinia';
// ... (outros imports)

export const useAuthStore = defineStore('auth', {
  
  state: () => ({
    user: null, 
    // MUDANÇA CRÍTICA AQUI: Inicialize como NULL
    token: null, 
    isLoggedIn: false, 
  }),

  // ... (outros getters e actions)

  actions: {
    // ... (funções login e logout)
    
    // ATUALIZE esta ação para carregar o token do localStorage
    initializeStore() {
        const storedToken = localStorage.getItem('access_token');
        if (storedToken) {
            this.token = storedToken;
            this.isLoggedIn = true;
            // Opcional: Aqui você pode rodar uma ação para buscar os dados completos do usuário
        }
    }
  },
});