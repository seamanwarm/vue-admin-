<template>
    <div class="navbar">
         <hamburger class="hamburger" :toggle-click="toggleSideBar" :is-active="sidebar.opend"></hamburger>
         <Breadcrumb class="Breadcrumb"></Breadcrumb>
    </div>
</template>
<script>
import {mapGetters} from "vuex"
import Breadcrumb from "../../../components/Breadcrumb"
import ErrorLog from "../../../components/ErrorLog"
import hamburger from "../../../components/hamburger"
import HeaderSearch from "../../../components/HeaderSearch"
import LangSelect from "../../../components/LangSelect"
import Screenfull from "../../../components/Screenfull"
import SizeSelect from "../../../components/SizeSelect"

export default {
    components: {
      Breadcrumb,
      ErrorLog,
      hamburger,
      HeaderSearch,
      LangSelect,
      Screenfull,
      SizeSelect,
    },
    data(){
        return{
           
        }
    },
    computed: {
        ...mapGetters([
            'sidebar'
        ])
    },
    methods: {
        toggleSideBar(){

           this.$store.commit('TOGGLE_SIDEBAR')

        }
    }
}
</script>
<style lang="scss">
    .navbar{
             height: 50px;
             overflow: hidden;
        .hamburger{
            float:left;
            line-height: 57px;
            height: 100%;
            float: left;
            cursor: pointer;
            -webkit-transition: background .3s;
            transition: background .3s;
        }
        .Breadcrumb{
            display: inline-block;
            font-size: 14px;
            line-height: 50px;
            margin-left: 8px;
        }
    }
</style>


