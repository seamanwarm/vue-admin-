//axios 拦截器
import axios from "axios";
import { Message} from "element-ui"
//创建一个 axios实例
const serviece = axios.create({
    //api的base_url
    //这个process.env.BASE_URL在config/dev.evn.js、prod.evn.js里面进行配置
    baseURL:process.env.BASE_URL,
    timeout:5000//请求超时时间
})
