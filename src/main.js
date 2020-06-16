import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.prototype.axios = axios
axios.defaults.baseURL = "/api"



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
  axios
}).$mount('#app')
