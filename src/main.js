import Vue from 'vue'
import App from './App.vue'
import VueProgressBar from 'vue-progressbar'
import './assets/styles/index.css'

const options = {
  color: '#ffff',
  failedColor: '#874b4b',
  thickness: '3px',
  height:'3px'
}

Vue.use(VueProgressBar, options)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
