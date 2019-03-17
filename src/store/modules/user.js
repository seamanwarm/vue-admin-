import{getToken,setToken,removeToken} from "../../utils/auth"
import { loginByUsername } from "../../api/login";
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
        }
    }
}
export default user
