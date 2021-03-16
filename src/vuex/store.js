import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${userData.token}`;
    },
    LOGOUT() {
      // 반대 로직
      // state.user = null
      // localStorage.removeItem('user')
      // axios.defaults.headers.common['Authorization'] = null

      // 더 좋은 코드
      localStorage.removeItem("user");
      location.reload();
    }
  },
  actions: {
    register({ commit }, credentials) {
      return axios
        .post("//localhost:8080/signup", credentials)
        .then(({ data }) => {
          console.log("user data is", data);
          commit("SET_USER_DATA", data);
        });
    },
    login({ commit }, credentials) {
      return axios
        .post("//localhost:8080/authenticate", credentials)
        .then(({ data }) => {
          console.log("user data is", data.token);
          commit("SET_USER_DATA", data.token);
        });
    },
    logout({ commit }) {
      commit("LOGOUT");
    }
  },
  getters: {
    loggedIn(state) {
      return !!state.user;
    }
  }
});
