<template>
  <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                class="list-group-item"
                v-for="server in servers"
                :key="server.id"
                style="cursor: pointer;"
                @click="serverSelected(server)">
                Server #{{ server.id }}
            </li>
        </ul>
    </div>
</template>
<script>
import { servers } from '../data/servers';
import { eventBus } from '../main';

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
    }
}
</script>

