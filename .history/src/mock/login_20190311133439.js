//如果不写index.js 则默认是先读取index.js
import { param2Obj} from "../utils/index.js"
//限定两种角色
const userMap={
    //管理员
    admin:{
        roles:["admin"],
        token:"admin",
        introdution:"超级管理员",
        //默认头像
        avator:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
        name:'Super Admin'
    },
    editor:{
        roles:["user"],
        token:"user",
        introdution:"普通用户",
        avator:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
        name:"Normal User"
    }
}
//登录即为信息已存在的用户，
//因此我的想法是 先验证用户名和密码是否一致，
//一致则转调页面显示登录成功
/* 但此处用的是token,前端发送token */
export default {
    loginByUsername:config=>{
        const {username}=JSON.parse(config.body)
    }
}
