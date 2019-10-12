import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { configure } from 'vee-validate'
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full'

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.component('ValidationProvider', ValidationProvider)
// Disable fast-exit behavior for all providers in the app
configure({ bails: false })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
