<template>
     <div class="toggele" @click="toggleClick">
         <img :src="menuclose" alt="">  
     </div>
</template>
<script>
import menuopen from "../../assets/image/menu-open.png"
import menuclose from "../../assets/image/menu-close.png"
export default {
  props:{
      isactive:{
        type:Boolean,
        default:false
      },
      //prop 竟然能传函数惊讶
      toggleClick:{
        type:Function,
        default:null
      }
  },
   data(){
      return{
         menuopen,
         menuclose
      }
   },
   methods:{
      togglemenu(){
         
      }
   }
}
</script>
<style  rel="stylesheet/scss" lang="scss"   scoped>
 .toggele{
    width: 30px;
    height: 30px;
    margin: 0 15px;
 }
</style>
