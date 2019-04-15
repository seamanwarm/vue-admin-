<template>
  <el-select v-model="Search"
   filterable 
    placeholder="Search"
   >
    <el-option
    
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      class="header-search-select"
    ></el-option>
  </el-select>
</template>

<script>
/* 思路：
1.明显这里是搜索点击进路由，
2.所以是整个路由集合中查找，
3.难点----如果是查找a  a为b的子内容怎么办
4.用轻量及的fuse.js完成搜索
*/
import Fuse from "fuse.js";
import path from "path";
export default {
  name: "HeaderSearch",
  data() {
    return {
      Search:"",
      options: [],
      searchPool:"",
      value8: "",
      show:false,
      fuse:undefined
    };
  },
  computed: {
    routes(){
      return this.$store.getters.permssion_routers
    },
  },
  watch: {
    routes(){
      this.searchPool = this.generateRoutes(this.routes)
    }
  },
  methods: {
    generateRoutes(routes,basePath = "/",prefixTitle = []){
      console.log(routes,"routes")
      let  res = []
      for (const router of routes){

        if(router.hidden){ continue }

        const  data = {
          path: path.resolve(basePath,router.path)
        }

        if(router.mate && router.meta.title){

          data.title = [...data.title]

          if(router.redirect !== "noredirect"){

            res.push(data)
          }

        }

        //如果路由嵌套-----即路由中又有子路由-----采用递归-----项目多次采用递归的手法，
        /* 可以一层一层得出想要的结果 */
        if(router.children){
          const tempRoutes = this.generateRoutes(router.children,data.path,data.title)
          if(tempRoutes.length >=1){
            res = [...res,...tempRoutes]
          }
          
        }
        return  res
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.header-search-select {
  width: 210px;
  margin-left: 10px;
}
</style>
