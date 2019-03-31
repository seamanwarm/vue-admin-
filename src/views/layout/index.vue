<template>
    <div class='app-wrapper'> 
        <sidebar></sidebar>
        <div class="main-container">
            <Navbar/>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
//整个面板由 侧边 nav  nav里面的main  三大块组成
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
export default {
    name:"layouts",
    components: {
        Sidebar,
        Navbar
    }
}
</script>

<style lang="scss" scoped>
    .app-wrapper{
        .sidebar-container {
            -webkit-transition: width 0.28s;
            transition: width 0.28s;
            width: 210px !important;
            height: 100%;
            position: fixed;
            font-size: 0px;
            top: 0;
            bottom: 0;
            left: 0;
            z-index: 1001;
            overflow: hidden;
        }
        .main-container {
            min-height: 100%;
            -webkit-transition: margin-left .28s;
            transition: margin-left .28s;
            margin-left: 210px;
            position: relative;
            }
    }
</style>


