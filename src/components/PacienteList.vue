<template>
   <b-container>
       <b-card title="Lista de Pacientes">
           <b-table striped hover :items="pacientes" :fields="campos"></b-table>
       </b-card>
   </b-container>
</template>

<script>
export default {
   data() {
       return {
           campos: ['id', 'nome', 'idade'],
           pacientes: [
               { id: 1, nome: 'Carlos Silva', idade: 40 },
               { id: 2, nome: 'Ana Souza', idade: 28 }
           ]
       };
   }
};
</script>
