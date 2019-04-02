<template>
    <div class="navbar">
         <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opend"></hamburger>
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
<style>
    
</style>


