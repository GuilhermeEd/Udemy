import Vue from 'vue'
import App from './App.vue'

Vue.directive('myOn', {
  bind(el, binding){
    const eventType = binding.arg;
    const callbackFunction = binding.value;
    el.addEventListener(eventType, function(){ callbackFunction() });
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
