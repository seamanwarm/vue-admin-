<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script>
import pathToRegexp from "path-to-regexp"
export default {
    /* 思路-----
    1.由于点击路由就会替换 应该是点击该路由 就会被记录 最终读取到的是name 
    2.获取到了路由,
    2.
    */
   data(){
       return {}
   },

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

