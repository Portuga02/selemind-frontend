<template>
    <div>
        <h1>Lista de Pacientes</h1>
        <ul>
            <li v-for="paciente in pacientes" :key="paciente.id">
                {{ paciente.nome }}
            </li>
        </ul>
    </div>
</template>

<script>
import api from '../services/api';

export default {
    data() {
        return {
            pacientes: []
        };
    },
    async mounted() {
        const resposta = await api.get('/pacientes');
        this.pacientes = resposta.data;
    }
};
</script>
