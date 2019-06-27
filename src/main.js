import Vue from 'vue'
import App from './App.vue'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueProgressBar from 'vue-progressbar'

const options = {
  color: '#0AFF',
  failedColor: '#874b4b',
  thickness: '3px',
  height:'3px'
}



Vue.use(VueProgressBar, options)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
