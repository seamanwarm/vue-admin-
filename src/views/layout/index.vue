<template>
    <div class='app-wrapper' :class="classObj"> 
        <sidebar></sidebar>
        <div class="main-container">
            <Navbar/>
        </div>
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
        Navbar,

    },
    computed: {
       sidebar(){
           return this.$store.state.app.sidebar
       },
       classObj(){
            return {
                hideSidebar:!this.sidebar.opened,
                openSidebar: this.sidebar.opened,
                withoutAnimation:this.sidebar.withoutAnimation
            }
       } 
    }
}
</script>

<style lang="scss" scoped>
    .app-wrapper{
        .sidebar-container  {
            -webkit-transition: width 0.28s;
            transition: width 0.28s;
            width: 220px !important;
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
            margin-left: 220px;
            position: relative;
        }
       
    }
    .hideSidebar {
        .sidebar-container{
             width: 65px !important;
             
        }
          
        .main-container{
            margin-left: 65px!important;
        }
    }
</style>


