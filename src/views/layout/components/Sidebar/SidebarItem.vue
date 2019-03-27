<template>
  <div>
    <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
    </el-submenu> -->
    <template v-if="hasOneShowingChild(item.children,item)">

    </template>
    <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
    </el-menu-item>
    <div>{{basePath}}</div>
    <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
  </div>
</template>
<script>
import path from "path"
import { isExternal } from '@/utils/validate'
import {  Item } from "./Item"
import  { AppLink } from "./Link.vue"
export default {
  name: "SidebarItem",
  components: {
    Item,
    AppLink
  },
  props:{
    //route
    item:{
      type: Object,
      required:true
    },
    basePath:{
      type:String,
      default:""
    }
  },
  data(){
    this.onlyOnechild = null
    return{}
  },
  methods: {
    //只有一个节点的即不用进行组件递归的
    hasOneShowingChild(children=[],parent){
        const showingChidren = children.filter(item=>{
            this.onlyOnechild = item
            return true
        })
        //为什么这里有一个儿子还返回true
        if(showingChidren.length === 1){
            return true
        }

        if(showingChidren.length === 0){
           this.onlyOnechild = {...parent,path:"",noShowingChildren:true}
           return true
        }

        return  false
    }
  }
};
</script>
 


