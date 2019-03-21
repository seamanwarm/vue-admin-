import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router) 
/* layout */
import Layout from "../views/layout/layout.vue"
 
/* 路由懒加载 */
/* 路由懒加载有三种方法 */
/* const routes =[
    {
        path:"/login",
        name:"Login",
        component:resolve=>require(["../views/login/index.vue"],resolve),
        
    },
    {
        path:"/dashboard",
        name:"dashboard",
        component:dashboard
    }
] */
/* 不需要权限的路由 */
 const constantRoutes=[
    {
        path:"/redirect",
        component: Layout,
        hidden:true,
        children:[
            {
                path:"/redirect/:path*",
                components:()=>import("../views/redirect/index.vue")
            }
        ]
        
    },
    {
        path:"/login",
        name:"Login",
        component:resolve=>require(["../views/login/index.vue"],resolve),
    },
    {
        path:"/",
        redirect: "/dashboard",
        component:()=>import("../views/dashboard/index.vue")

    }
]

 
 /* 配置路由权限表 */
export default new Router({
    routes: constantRoutes
    
 })