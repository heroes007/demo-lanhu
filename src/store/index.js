import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const chat = {
  state:{
    ask:[],
    anwser:[]
  },
  mutations:{
    ADD_ASK(state,new_ask){
      state.ask.push(new_ask)
    }
  },
  getters:{

  },
  actions:{

  }
}

const store = new Vuex.Store({
  modules:{
    chat
  }
})


export default store
