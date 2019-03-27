 <script>
  //这里拆得十分散
 export default {
    name:"MenuItem",
    //functional:true 表示该组件是纯函数组件,会进行检查,只能用 props 而不能使用组
    functional:true, 
    props:{
        icon:{
            type:String,
            default:""
        },
        title:{
            type:String,
            default:""
        }
    }
 }
 </script>
 
 