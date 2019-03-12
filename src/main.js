import Vue from 'vue'
import "./registerServiceWorker";
import './plugins/vuetify'
import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'
import './global.css'

import App from './App.vue'
import router from './middlewares/router'

Vue.config.productionTip = false
Vue.use(Vuetify);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
