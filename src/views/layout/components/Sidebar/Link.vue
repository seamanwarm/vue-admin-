<template>
    <component v-bind="linkProps(to)">
        <solt/>
    </component>
</template>
<script>
import {isExternal} from "../../../../utils/validate.js"
export default {
    /* 父级传递to */
    props: {
        to:{
            type:String,
            required:true
        }
    },
    methods: {
        linkProps(url){
            if(isExternal(url)){
                 return {
                    is:"a",
                    href:url,
                    target:"_blank",
                    rel:"noopener"
                }
            }
            return{
                is:"router-link",
                to:url
            }
           
        }
    }
}
</script>

