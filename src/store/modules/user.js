import{getToken,setToken,removeToken} from "../../utils/auth"
import { loginByUsername,getUserInfo} from "../../api/login";
const user ={
    state:{
        user:"",
        status:"",
        code:"",
        token:getToken(), 
        name:"",
        avatar:"",
        introduction:"",
        roles:[],
        settings:{
            articlePlatform:[]
        }
    },
    mutations: {
        SET_TOKEN:(state,token)=>{
            state.token=token
        },
        SET_ROLES:(state,roles)=>{
            state.roles=roles
        }
    },
    actions:{
        LoginByUsername({commit},userInfo){
            const username=userInfo.username.trim()
            return new Promise((resolve,reject)=>{
                //调用请求api
                loginByUsername(username,userInfo.password).then(res=>{
                    console.log(res,"res")
                    const data=res.data
                    commit("SET_TOKEN",data.token)
                    setToken(res.data.token)
                    resolve()
                }).catch(err=>{
                    reject(err)
                })
            })
        },
        GetUserInfo({commit,state}){
            return new Promise((resole,reject)=>{
                getUserInfo(state.token).then(res=>{
                    console.log(res)
                    if(!res.data){
                        reject("token,验证失败请重新登录")
                    }
                    const data =res.data
                    if(data.roles && data.roles.length>0){
                        commit("SET_ROLES",data.roles)    
                    }else{
                        reject("getInfo:role must be a non-null array!")
                    }
                    commit("SET_NAME",data.name)
                    commit("SET_AVATAR",data.avatar)
                    commit("SET_INTRODUCTION",data.introduction)
                    resolve()
                }).catch(err=>{
                    reject(err)
                })  
            })
        }
    }
}
export default user
