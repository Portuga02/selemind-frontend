<template>
  <div class="container mt-5">
    <h1>Teste de Conexão</h1>
    <p>{{ status }}</p>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  data() {
    return {
      status: ''
    };
  },
  async mounted() {
    try {
      const resposta = await api.get('/ping');
      this.status = resposta.data.status;
    } catch (erro) {
      this.status = 'Erro ao conectar com Laravel';
    }
  }
};
</script>
