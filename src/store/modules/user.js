import { getToken,setToken } from "../../utils/auth"
import { loginByUsername,getUserInfo} from "../../api/login";
import request from "../../utils/request"

export function registerByUser(username,password,name){
    let data={
        username,
        password,
        name
    }
    data =JSON.stringify(data)

    return request({
        url:"/home/register",
        method:"post",
        data
    })
}
 
 
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
        },
        SET_NAME:(state,name)=>{
            state.name=name
        },
        SET_AVATAR:(state,avatar)=>{
            state.avatar=avatar
        },
        SET_INTRODUCTION:(state,introduction)=>{
            state.introduction=introduction
        }
    },
    actions:{
        LoginByUsername({commit},userInfo){
            const username=userInfo.username.trim()
            return new Promise((resolve,reject)=>{
                //调用请求api
                loginByUsername(username,userInfo.password).then(res=>{
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
            return new Promise((resolve,reject)=>{
                getUserInfo(state.token).then(res=>{
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
                    resolve(res)
                }).catch(err=>{
                    reject(err)
                })  
            })
        },
        RegisterByUser({commit},registerInfo){
            
            const username = registerInfo.username.trim()
            const name = registerInfo.name.trim()
            const password = registerInfo.password
            console.log(registerInfo,"registerInfo")
            debugger
             return new Promise((resolve,reject)=>{
                registerByUser(username,password,name).then(res=>{
                    console.log(res,"成功")
                    resolve()
                }).catch(err=>{
                    reject(err)
                })
             })
        }
    }
}
export default user
