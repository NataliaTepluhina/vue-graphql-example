import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import { createProvider } from './vue-apollo';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  apolloProvider: createProvider(),
  render: h => h(App),
}).$mount('#app');
