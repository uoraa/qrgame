import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { bucket } from "../cosmic";

// const initData = async () => {
//   const result = await bucket.getObjects({
//     type: "Team",
//     props: "slug,title,metadata",
//   });
//   return result;
// }

async function initData() {
    return await bucket.getObjects({
    type: "Team",
    props: "slug,title,metadata",
  }).then((result)=>{
    return result;

  });
}
initData();


export default new Vuex.Store({
  state: {
    data: null,
    initStore: null,
  },
  mutations: {
    UPDATE_COSMIC(state, payload) {
      state.data = payload;
    },
    UPDATE_INIT(state, payload) {
      state.data = payload;
    },
    INITALIZE_STORE(state, payload) {
      state.initStore = payload.objects[0].metadata.teamarray;
      state.data = payload.objects[0].metadata.teamarray;
    },
  },
  actions: {
    update_data(context, payload) {
      context.commit("UPDATE_COSMIC", payload);
    },
    update_initStore(context, payload) {
      context.commit("UPDATE_INIT", payload);
    },
    async intialize(context) {
      const result = await bucket
        .getObjects({
          type: "Team",
          props: "slug,title,metadata",
        })
        .then();
        context.commit("INITALIZE_STORE", result);
    },
  },
});
