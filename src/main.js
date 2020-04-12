import Vue from 'vue'
import vuetify from './plugins/vuetify';
import App from './App.vue'
import router from './router'
import filters from './filters'




new Vue({
  el: '#app',
  vuetify,
  router,
  render: h => h(App)
})

