import Cookies from "js-cookie"
//操作相关的一些数据
/* 
1.状态在cookie里面存下来，防止刷新刷掉
2.目的点开，关闭菜单响应
isCollapse: false
来控制开关
3.由于是兄弟组件所以采用vuex来共享数据
 */
const app={
    state:{
        sidebar:{
            //默认为打开状态
            opened:Cookies.get("sidebarStatus")? !!+Cookies.get("sidebarStatus") : true,
            withoutAnimation: false
        }
    },
    mutations: {
        TOGGLE_SIDEBAR:state=>{
            state.sidebar.opened = !state.sidebar.opened
            state.sidebar.withoutAnimation = false
            console.log(state.sidebar.opened)
            if(state.sidebar.opened){
                Cookies.set("sidebarStatus",1)
            }
            else{
                Cookies.set("sidebarStatus",0)
            }
        },
        CLOSE_SIDEBAR:(state,withoutAnimation)=>{
            //关闭状态opened
            Cookies.set("sidebarStatus",0)
            state.sidebar.opened = false
            state.sidebar.withoutAnimation = withoutAnimation
        }
    },
    action:{
        toggleSideBar({commit}){
            commit('TOGGLE_SIDEBAR')
        },
        closeSideBar({commit},{withoutAnimation}){
            commit("CLOSE_SIDEBAR",withoutAnimation)
        } 
    }
}

export default app