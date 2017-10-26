<template>
  <div
    class="list-group-item"
    @click="serverSelected(server)">
    Server #{{ server.id }}</div>
</template>
<script>
import { eventBus } from '../main';

export default {
  props: ['server'],
  methods: {
      serverSelected(server){
          console.log(server);
          eventBus.$emit('serverSelected', server);
      }
  }
}
</script>
<style scoped>
    div{
        cursor: pointer;
    }
</style>


