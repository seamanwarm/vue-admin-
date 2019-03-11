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
        roles:["editor"],
        token:"editor"
    }
}
