import Vue from 'vue'
import Vuex from 'vuex'
  
Vue.use(Vuex)
  
export default new Vuex.Store({
    state: {
        data: null,
    },
    mutations: {
        UPDATE_COSMIC(state, payload) {
            state.data = payload
            console.log(state);
        }
        },
    actions: {
        update_data(context, payload) {
            context.commit('UPDATE_COSMIC', payload)
        }
    }
})