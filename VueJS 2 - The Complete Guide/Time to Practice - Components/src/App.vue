<template>
    <div class="container">
        <app-header/>
        <hr>
        <div class="row">
            <app-servers/>
            <app-server-details/>
        </div>
        <hr>
        <app-footer/>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import ServerDetails from './components/ServerDetails.vue';
import Servers from './components/Servers.vue';

export default {
    components: {
        appHeader: Header,
        appFooter: Footer,
        appServerDetails: ServerDetails,
        appServers: Servers
        }
}
</script>

<style>

</style>
