<template>
  <div class="sidebar-container el-scrollbar">

    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#409eff"
      
    >
      <sidebar-item 
      v-for="route in permission_routes"
      :key="route.path"
      :item="route"
      :base-path="route.path"

      >
      </sidebar-item>
    </el-menu>
  </div>
</template>
<style scoped >
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .sidebar-container {
    height: 100%;
  }
</style>

<script>
import { mapGetters } from "vuex"
import SidebarItem from "../Sidebar/SidebarItem.vue"
  export default {
     
    computed: {
      ...mapGetters([
        "permission_routes",
        "sidebar"
      ]),
      isCollapse() {
      return !this.sidebar.opened
      }
    },
    components: {
      SidebarItem
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(1);
      },
      handleClose(key, keyPath) {
        console.log(2);
      }
    }
  }
</script>
<style lang="scss" scoped>
        .el-menu{
            height: 100%;
            .el-submenu__title{
               &span{
                 display: none;
               }
            }
        }
        .el-menu-vertical-demo[data-v-276800be]:not(.el-menu--collapse) {
            width: 220px;
            min-height: 400px;
        }

</style>



