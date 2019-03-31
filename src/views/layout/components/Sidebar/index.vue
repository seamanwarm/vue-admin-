<template>
  <div class="sidebar-container el-scrollbar">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
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
    data() {
      return {
        isCollapse: true
      };
    },
    computed: {
      ...mapGetters([
        "permission_routes",
        "sidebar"
      ])
    },
    components: {
      SidebarItem
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>


