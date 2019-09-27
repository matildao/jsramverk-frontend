import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueMaterial from 'vue-material';
import fontawesomeIcons from './icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import 'vue-material/dist/vue-material.min.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vuelidate from 'vuelidate';
require('dotenv').config();
import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:8333',
  vuex: {
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
  // options: { path: "/my-app/" } // Optional options
}))

library.add(fontawesomeIcons);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(Vuelidate);
Vue.use(VueMaterial);
Vue.config.productionTip = false;

new Vue({
  router,
  linkActiveClass: 'active', // active class for non-exact links.
  linkExactActiveClass: 'active', // active class for *exact* links.
  render: h => h(App)
}).$mount('#app');
