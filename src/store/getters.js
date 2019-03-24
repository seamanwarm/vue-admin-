//这里的数据都是只读的，是原本的数据处理过后的数据，并且原始数据没有发生变化
const getters={
   token:state=>state.user.token,
   roles:state=>state.user.roles,
   addRoutes:state=>state.permission.addRouters
}
 
export default getters