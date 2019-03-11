import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'
import router from "./router/index.js"
import store from './store/index.js'
const Mock = require('mockjs')
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
 
