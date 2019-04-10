//axios 拦截器
import qs from 'qs'
import axios from "axios";
import { Message} from "element-ui"
import store from "../store"
import {getToken} from "../utils/auth.js"
//创建一个 axios实例
const service = axios.create({
    //api的base_url
    //这个process.env.BASE_URL在config/dev.evn.js、prod.evn.js里面进行配置
    baseURL:"http://192.168.2.118:8080/mylover/api/",
    timeout:5000//请求超时时间
})
//request 拦截器====>对请求参数做处理
//这里要让每个请求都带token token被存在cookie中了
service.interceptors.request.use(
    config=>{
    // do something before request is sent 
    config.method ==="post"? config.data:config.params = {...config.params}
    config.headers['Content-Type'] = 'application/json' 
    if(store.getters.Token){
        //让每个请求携带token---["x-Token"]为自定义key
        config.headers["X-Token"]=getToken()
    }
    console.log(config,"config")
    return config
},
error=>{
    //Do something with request error
    console.log(error)
    Promise.reject(error)
}
)
//响应拦截器
service.interceptors.response.use(
    response=>response,
    error=>{
        console.log("err"+error)
        Message({
            message:error.message,
            type:'error',
            duration:5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service