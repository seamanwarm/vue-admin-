import Mock from 'mockjs'
import loginAPI from "./login" 
//接口
//登录
//登录-发送请求
Mock.mock("/login/login","post",loginAPI.loginByUsername)
//登录--返回用户信息
/* Mock.mock("/user/info")
 使用这种方式写接口没问题，但是会出现 带参数的不能直接配上 */
Mock.mock(/\user\/info\.*/, get, loginAPI.getUserInfo) 