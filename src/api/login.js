import request from "../utils/request"
/*这里的每一个请求都会带着token */
/* 这里是处理过的请求*/
/*登录请求 */
export function loginByUsername(username,password){
    const data={
        username,
        password
    }
    return request({
        url:"/login/login",
        method:"post",
        data
    })
}