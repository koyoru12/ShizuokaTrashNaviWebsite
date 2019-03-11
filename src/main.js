import Vue from 'vue'
import "./registerServiceWorker";
import './plugins/vuetify'
import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

import App from './App.vue'
import router from './middlewares/router'

console.log(process.env.BASE_URL)

Vue.config.productionTip = false
Vue.use(Vuetify, {
  theme: {
    primary: colors.blue.darken1
  },
  iconfont: 'mdi',
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
