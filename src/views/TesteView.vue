<template>
     <div class="container mt-5">
        <h1>Testando API Laravel</h1>
        <p>{{ mensagem }}</p>
    </div>
</template>

<script>
import api from '../services/api';

export default {
    data() {
        return {
            mensagem: ''
        };
    },
    async mounted() {
        const resposta = await api.get('/teste');
        this.mensagem = resposta.data.mensagem;
    }
};
</script>
