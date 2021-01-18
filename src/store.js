import Vue from 'vue';
import Vuex from 'vuex';
import cats from '@/assets/cats.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theCat: null,
    cats
  },
  mutations: {
    setCat(state, name) {
      state.theCat = cats.find(cat => cat.name === name);
    }
  },
  actions: {}
});
