import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    globalCounter: 0
  },
  mutations: {
    globalAdd(state) {
      return { ...state, globalCounter: state.globalCounter++ }
    }
  },
  actions: {
    // may be async
  },
});
