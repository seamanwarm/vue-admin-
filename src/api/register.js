import request from "../utils/request"

export function registerByUser(username,password,name){
    const data={
        username,
        password,
        name
    }
    data =JSON.stringify(data.serializeJSON())
    console.log(data)
    return request({
        url:"/home/register",
        method:"post",
        params:data
    })
}