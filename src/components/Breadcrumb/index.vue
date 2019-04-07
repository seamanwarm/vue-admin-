<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
            <span v-if='item.redirect ==="noredirect" || index==levelList.length-1' class="no-redirect">{{item.meta.title}}</span>
            <a v-else @click.prevent="handleLink(item)">{{item.meta.title}}</a>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script>
import pathToRegexp from "path-to-regexp"
export default {
    /* 思路-----
    1.由于点击路由就会替换 应该是点击该路由 就会被记录 最终读取到的是name 
    2.获取到了路由,
    3.在挂载之后点击其他路由，路由并不会发生变化，所以需要监听
    */
   watch: {
       //这里不用使用this 
       $route(){
           this.getBreadcrumb()
       }
   },
   created () {
       this.getBreadcrumb()
   },
   data(){
        return {
            levelList: null 
        }
   },
   methods: {
       getBreadcrumb(){
           let matched = this.$route.matched.filter(item=>{
                return item.name
           })
           const first = matched[0]
           if(first && first.name.trim().toLocaleLowerCase()!=="dashboard".toLocaleLowerCase()){
               matched = [{path:"/dashboard",redirect:"/",meta:{title:"面板"}}].concat(matched)
           }
           this.levelList = matched.filter(item=>{
               //&& 遇到false即返回
               console.log(item,"item")
               return item.meta && item.meta.title
           }) 
           console.log(this.levelList,"levelList")
       },
       //解析路径 ----这里为什么不用渲染菜单用的合并父亲和儿子的这种方法
       //解决面包屑不能带参数的问题
       //compile() 作用：快速填充 url 字符串的参数值
       pathCompile(path){
           const {params} = this.$route
           var toPath = pathToRegexp.compile(path) 
           return toPath(params)
       },
       //点击页面跳转
       handleLink(item){
           console.log(875412845)
           const {redirect ,path } = item
           if(redirect){
               this.$router.push(redirect)
           }else{
               this.$router.push(this.handleLink(path))
           }
       }
   }

}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 8px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
  /*breadcrumb transition*/
    .breadcrumb-enter-active,
    .breadcrumb-leave-active {
    transition: all .5s;
    }

    .breadcrumb-enter,
    .breadcrumb-leave-active {
    opacity: 0;
    transform: translateX(20px);
    }

    .breadcrumb-move {
    transition: all .5s;
    }

    .breadcrumb-leave-active {
    position: absolute;
    }

</style>

