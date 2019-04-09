<template>
  <el-select v-model="value8" filterable placeholder>
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
      seach:"",
      options: [],
      searchPool:"",
      value8: "",
      show:false,
      fuse:undefined
    };
  },
  computed: {
    routes(){
      this.$store.getters.permssion_routers
    },
  }
};
</script>
<style lang="scss" scoped>
.header-search-select {
  width: 210px;
  margin-left: 10px;
}
</style>
