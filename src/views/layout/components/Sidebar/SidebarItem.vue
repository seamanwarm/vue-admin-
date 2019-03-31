<template>
  <div class="menu-wrapper">
    <template 
    v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)">
    <!-- true&&true || true 即没有儿子的情况渲染这里, 图标是最大的爸爸才有的-->
        <app-link :to="resolvePath(onlyOneChild.path)">
            <el-menu-item :index="resolvePath(onlyOneChild.path)" > 
                <item v-if="item.meta" :title="item.meta.title" :icon="onlyOneChild.meta.icon||item.meta.icon"></item>
            </el-menu-item>
        </app-link>
    </template>
    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)">
        <template slot="title"> 
            <item v-if="item.meta" 
            :title="item.meta.title"
            :icon="item.meta && item.meta.icon"></item>
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
import { isExternal } from '../../../../utils/validate.js'
import {generateTitle} from "../../../../utils/generateTitle.js"
import   Item  from "./Item"
import   AppLink  from "./Link.vue"
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
        
        const showingChidren = children.filter(item=>{
            this.onlyOneChild = item
            console.log(this.onlyOneChild.meta.icon,"icon")
            return true
        })
        
        //如果这里只有一个儿子则不会出现下拉菜单
         if(showingChidren.length === 1){
            console.log(showingChidren,"showingChidren.length")
            return true
        }  

        if(showingChidren.length === 0){
          
           this.onlyOneChild = {...parent, path:'',noShowingChildren:true}
            
           return true
        }

        return  false
    },
    resolvePath(routePath) {
       
      if (isExternal(routePath)) {
       
        return routePath
      }
      
      return path.resolve(this.basePath, routePath)
    },
    generateTitle
  }
};
</script>
 


