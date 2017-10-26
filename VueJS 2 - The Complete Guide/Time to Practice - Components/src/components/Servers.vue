<template>
  <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li v-for="server in servers"
                :key="server.id">
                <app-server :server="server"/>
            </li>
        </ul>
    </div>
</template>
<script>
import { servers } from '../data/servers';
import { eventBus } from '../main';
import Server from './Server.vue';

export default {
    data(){
     return {
        servers
     }   
    },
    methods: {
      serverSelected(server){
          eventBus.$emit('serverSelected', server)
      }
    },
    created(){
        console.log(servers);
    },
    components: {
        appServer: Server
    }
}
</script>
<style scoped>
    li {
        list-style-type: none;
    }
</style>
