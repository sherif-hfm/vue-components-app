import Vue from 'vue'
import App from './App.vue'
import myHeader from './components/shared/header.vue'

Vue.config.productionTip = false
Vue.component('myHeader',myHeader); // global decleration
new Vue({
  render: h => h(App),
}).$mount('#app')
