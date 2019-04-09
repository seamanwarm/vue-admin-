<template>
<keep-alive :include="includedComponents">
    <component 
    :is="currentView" 
    @changestaus="currentViewStaus">
    </component>
  </keep-alive>
</template>

<script>
import login from "./login"
import register from "./register"
  export default{
        name:"login-regist",
        data(){
            return{
                currentView:"login",
                includedComponents:[login,register]
            }
        },
        components: {
            login,
            register
        },
        methods: {
            currentViewStaus(value){
                this.currentView = value
            },
        }
  }

</script>
<style></style>