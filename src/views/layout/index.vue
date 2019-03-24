<template>
    <div class=''> 
        <sidebar></sidebar>
        <router-view></router-view>
    </div>
</template>
<script>
//整个面板由 侧边 nav  nav里面的main  三大块组成
import sidebar from "./components/Sidebar"
export default {
    name:"layouts",
    components: {
        sidebar
    }
}
</script>

<style lang="less" scoped>

</style>


