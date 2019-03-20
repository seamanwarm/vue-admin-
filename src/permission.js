//判断是否获取了token 有的话获取用户信息
import router from "./router"
import { getToken} from "./utils/auth"
 
router.beforeEach((to, from, next) => {
    //to and from are Route Object,next() must be called to resolve the hook}
    //如果有token
    if(getToken()){
        console.log(to,"to",from,"from",next,"next")
    }
})