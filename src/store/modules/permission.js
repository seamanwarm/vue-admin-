import { constantRoutes,asynRouterMap} from "../../router/index.js"
import { promises } from "fs";
//如果后台获取到的role和mate中写的role是同一个的话说明当前角色下，当前页面要被渲染
function hasPermission(roles,route){
    //先在我想知道的是这个route.mate数组的是指当前的所有的路由记录
    //还是所有的route.mate是所有从最开始的根开始的路由记录
    if(route.mate&&route.mate.role){
        //indexOf和includes的区别
         return roles.some(role=>role.mate.role.includes(role)>=0)
    }else{
         return true
    }
}
//把相对应权限的路由循环判断再添加进来?
//
const permission={
    state: {
       state:{
           routers:constantRoutes,
           addRouters:[]
       } 
    },
    mutations: {
        //state 该子部分对应的sate实例 routers 传递进来的
       SET_ROUTERS:(state,routers)=>{

       } 
    },
    actions: {
        /* Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
        因此你可以调用 context.commit 提交一个 mutation，
        或者通过 context.state 和 context.getters 来获取 state 和 getters ,context.commit=commit.commit*/
        //commit 该子部分对应的sate实例 data 传递进来的
        GenerateRoutes({commit},data){
            return new promises(resolve=>{
                const {role}=data
                //即 role.role=data.role? 对象解构赋值是模式键名相同
                const accessedRouters = asynRouterMap.filter(item=>{

                })
            })
        }
    }
}
export default permission
