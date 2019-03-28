import Vue from 'vue'
import Vuex from 'vuex'

import user from "./modules/user"
import permission from "./modules/permission"
import app from "./modules/app"
import getters from "./getters"

Vue.use(Vuex);


const  store= new Vuex.Store({
  modules:{
    user,
    app,
    permission
  },
  getters
})
console.log(permission) 
export default  store