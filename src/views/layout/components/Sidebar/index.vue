<template>
  <div class="sidebar-container el-scrollbar">

    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      
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


