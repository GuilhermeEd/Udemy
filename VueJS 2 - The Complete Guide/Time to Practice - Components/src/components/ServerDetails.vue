<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a server</p>
        <p v-if="server">Server {{ server.id }} status: {{ server.status }}</p>
        <hr>
        <button v-if="server" class="btn btn-default" @click="changeToNormal(server)">Change status to Normal</button>
    </div>
</template>
<script>
import { eventBus } from '../main';

export default {
    data() {
        return{
            server: null
        }
    },
    methods: {
        changeToNormal(server){
            server.status = 'Normal';
        }
    },
    created() {
      eventBus.$on('serverSelected', server => {
          this.server = server;
      })
  }
}
</script>
