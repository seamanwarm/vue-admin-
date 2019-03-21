import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'
import router from "./router/index.js"
import store from './store/index.js'
import mock from "./mock/index.js"
import { getToken } from "./utils/auth"
 
/* router.beforeEach((to, from, next) => {
    //to and from are Route Object,next() must be called to resolve the hook}
    //如果有token
    if(getToken()){
        //如果去登录则直接去面板
         if(to.path==="/login"){
            next({path:"/"})
         }else{
            
         }
    }
}) */
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
 
console.log(router)
