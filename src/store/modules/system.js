export default{
  namespaced: true,
  state:{
    userName:"黑马"
  },
  mutations:{
    setUserName(state, userName){
      state.userName = userName
    }
  },
  actions:{},
  getters:{},
}