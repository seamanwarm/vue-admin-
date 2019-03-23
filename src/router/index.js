import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router) 
/* layout */
import Layout from "../views/layout/index.vue"
import dashboard from "../views/dashboard/index.vue"
 
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
        path:"/login",
        name:"Login",
        component:resolve=>require(["../views/login/index.vue"],resolve),
    },
    {
        path:"/",
        redirect: "/dashboard",
        component:Layout,
        children:[
            {path:"dashboard",component:dashboard}
        ],
         

    },

]
/* 导航守卫 */
/* mate 是路由元信息
   作用: 携带信息,所有的路由都会有路由记录最终形成$route中的 $route.matched数组，可以通过循环的方式 
   找找到，结合导航守卫可以决定渲染的页面是什么，或者下面进行何等操作
   $route.matched.some(record=>record.meta.requiresAuth) 
   some 
   1. 找到则为 ture 
   2. 不会对空数组进行循环
   3. 找到一个则不会再继续往下找，如果找不到则为false
    
 */
const asynRouterMap=[
    {path:"/permission",
     component:Layout,
     name:"权限测试" ,
     mate:{role:["admin","super_editor"]}, //即页面需要的权限要求
     children:[
        {path:"index",}
     ]

    }
]

 
 /* 配置路由权限表 */
export default new Router({
    routes: constantRoutes
    
 })