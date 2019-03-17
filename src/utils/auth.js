import Cookies from "js-cookie"
//将生成的token保存在cookie中,这个步骤前端可以做后端也可以做
 
const ToKenKey="Admin-Token"
//get
export function getToken(){
    return Cookies.get(ToKenKey)
}
//set
export function setToken(token){
    return Cookies.set(ToKenKey,token)
}
//removeTokens
export function removeToken(){
    return Cookies.remove(ToKenKey)
}
