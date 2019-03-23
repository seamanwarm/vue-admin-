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
//导航守卫
router.beforeEach((to, from, next) => {
    //to and from are Route Object,next() must be called to resolve the hook}
    //如果有token
    if(getToken()){
        //如果去登录则直接去面板
         if(to.path==="/login"){
            next({path:"/"})
         }else{
           //判断是否已经获取到用户信息
            if(store.getters.roles.length===0){
               store.dispatch('GetUserInfo').then(res=>{
                 const roles = res.data.roles;
                 store.dispatch('GenerateRoutes',{role}).then(()=>{
                   router.addRoutes(store.getters.addRoutes)
                   //确保addRoute已经完成
                   next({...to,replace:true})
                 }).catch(err=>{
                   console.log(err)
                 })
               })
            }
         }
    }
})
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
 
console.log(router)
