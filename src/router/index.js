import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import login from "../views/login/index.vue"  

const routes =[
    {path:"/login", component:login},
]
const router= new Router({
    routes 
 })
 
export default router