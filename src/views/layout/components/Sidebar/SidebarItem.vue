<template>
  <div>
    <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)">
        <app-link :to="resolvePath(onlyOneChild.path)">
            <el-menu-item :index="resolvePath(onlyOneChild.path)" >
                <i class="el-icon-setting"></i>
                <span slot="title">
                     <item v-if="onlyOneChild.meta" :title="generateTitle(item.meta.title)"></item>
                </span>
            </el-menu-item>
        </app-link>
    </template>
    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)">
        <template slot="title"> 
            <item :title="generateTitle(item.meta.title)"></item>
        </template>
        <sidebar-item
          v-for="child in item.children"
          :key="child.path"
          :item="child"
          :base-path="resolvePath(child.path)"
          class="nest-menu"
      />
    </el-submenu>
  </div>
</template>
<script>
import path from "path"
import { isExternal } from '../../../../utils/auth.js'
import {generateTitle} from "../../../../utils/generateTitle.js"
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
    this.onlyOneChild = null 
    return{
         
    }
  },
  methods: {
    //只有一个节点的即不用进行组件递归的
    hasOneShowingChild(children=[],parent){
        console.log(children,"children")
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
    },
    resolvePath(routePath){
       if(isExternal(routePath)){
          return routePath
       }
       return path.resolve(this.basePath,routePath)
    },
    generateTitle
  }
};
</script>
 


