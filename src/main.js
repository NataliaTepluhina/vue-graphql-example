import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import {createProvider} from './vue-apollo'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
    provide: createProvider().provide(),
    render: h => h(App)
}).$mount('#app');
