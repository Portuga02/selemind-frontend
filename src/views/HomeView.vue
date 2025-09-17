<template>
    <div class="container mt-5">
        <h1>Bem-vindo ao SeleMind</h1>
        <b-button variant="primary" @click="mostrarMensagem">Clique aqui</b-button>
        <p v-if="mensagem">{{ mensagem }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mensagem: ''
        };
    },
    methods: {
        mostrarMensagem() {
            this.mensagem = 'Bootstrap Vue configurado com sucesso! 🚀';
        }
    }
};
</script>
