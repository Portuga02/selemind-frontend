<template>
   <b-container>
       <b-card title="Cadastrar Paciente">
           <b-form @submit.prevent="salvarPaciente">
               <b-form-group label="Nome:" label-for="nome">
                   <b-form-input id="nome" v-model="paciente.nome" required></b-form-input>
               </b-form-group>

               <b-form-group label="Idade:" label-for="idade">
                   <b-form-input id="idade" type="number" v-model="paciente.idade"></b-form-input>
               </b-form-group>

               <b-button type="submit" variant="primary">Salvar</b-button>
           </b-form>
       </b-card>
   </b-container>
</template>

<script>
export default {
   data() {
       return {
           paciente: { nome: '', idade: null }
       };
   },
   methods: {
       salvarPaciente() {
           console.log("Paciente salvo:", this.paciente);
       }
   }
};
</script>
