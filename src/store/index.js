import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = () => new Vuex.Store({
  state: {
    data: null,
  },
  mutations: {
    UPDATE_DATA(state, newData) {
      state.data = newData; // eslint-disable-line
    },
  },
  actions: {
    loadData({ commit }) {
      commit('UPDATE_DATA', { name: 'fvandenbulcke' });
    },
  },
  getters: {
    data(state) {
      return state.data;
    },
  },
});

export default store;
