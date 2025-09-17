<template>
    <div>
        <b-button v-b-toggle.sidebarMenu variant="primary">Abrir Menu</b-button>
        <b-offcanvas id="sidebarMenu" title="Menu">
            <b-nav vertical>
                <b-nav-item href="/pacientes">Pacientes</b-nav-item>
                <b-nav-item href="/profissionais">Profissionais</b-nav-item>
                <b-nav-item href="/agendamentos">Agendamentos</b-nav-item>
            </b-nav>
        </b-offcanvas>
    </div>
</template>

<script>
import { BOffcanvas, BNav, BNavItem, BButton } from 'bootstrap-vue-next';

export default {
    components: { BOffcanvas, BNav, BNavItem, BButton }
};
</script>
