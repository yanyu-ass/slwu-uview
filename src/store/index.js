import Vue from "vue";
import Vuex from "vuex";
import system from "./modules/system";
import persistence from "vuex-uniapp-persistence";
Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    safeTop:uni.getSystemInfoSync().safeArea.top,
    token:""
  },
  mutations:{
    setToken(state,token){
      state.token = token;
    }
  },
  getters:{},
  modules:{system},
  // 使用模块
  plugins: [persistence()],
});
export default store