const Mock = require('mockjs')
import loginAPI from "./login" 
//修复在使用MockJS情况，设置withCredentidals=true,且未被拦截的跨域请求丢失cookies的问题
Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
Mock.XHR.prototype.send = function() {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false
  }
  this.proxy_send(...arguments)
}
//接口
//登录
//登录-发送请求
Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUsername)
//登录--返回用户信息
/* Mock.mock("/user/info")
 使用这种方式写接口没问题，但是会出现 带参数的不能直接配上 */
Mock.mock(/\user\/info\.*/, "get", loginAPI.getUserInfo) 

export default Mock