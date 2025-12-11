<template>
  <b-container fluid class="login-page d-flex align-items-center justify-content-center">
    <b-card 
      title="Acesso Selemind" 
      class="text-center shadow-lg" 
      style="max-width: 450px; width: 100%;"
    >
      <div class="mb-4">
        <h2 class="text-primary">Selemind</h2>
      </div>

      <b-form @submit.prevent="handleLogin">
        
        <b-form-group label-for="input-email" class="mb-3">
          <b-form-input
            id="input-email"
            v-model="form.email"
            type="email"
            placeholder="Email ou CPF"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group label-for="input-password" class="mb-4">
          <b-form-input
            id="input-password"
            v-model="form.password"
            type="password"
            placeholder="Senha"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary" block class="my-3">
          Entrar
        </b-button>
      </b-form>

      <div class="mt-4">
        <b-link to="/forgot-password" class="d-block text-muted small">Esqueceu a senha?</b-link>
        <b-link to="/register" class="d-block mt-2 text-primary">Novo por aqui? Crie sua conta</b-link>
      </div>
    </b-card>
  </b-container>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
// Importe o seu store Pinia ou Vuex de autenticação aqui
// import { useAuthStore } from '@/stores/auth'; 

const form = ref({
  email: '',
  password: ''
});

// const authStore = useAuthStore();

const handleLogin = async () => {
  console.log("Tentando login com:", form.value);
  
  // 1. CHAME O ENDPOINT LARAVEL SANCTUM AQUI
  try {
    const response = await axios.post('/api/login', form.value);
    
    // 2. SALVE O ESTADO DE AUTENTICAÇÃO (Token/Usuário) no seu store
    // authStore.setAuth(response.data.user); 
    
    // 3. REDIRECIONE para o Dashboard
    // router.push('/dashboard'); 

  } catch (error) {
    // 4. TRATE ERROS (ex: Credenciais Inválidas)
    console.error("Erro de login:", error.response.data.message);
    // Mostrar um alerta usando B-Alert ou B-Toast
  }
};
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background-color: #f8f9fa; /* Fundo suave, use a cor do seu tema Selemind */
}
</style>