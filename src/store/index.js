import Vue from "vue";
import Vuex from "vuex";
import api from "@/utils/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    // eslint-disable-next-line no-unused-vars
    submitForm({ commit }, data) {
      return new Promise((resolve, reject) => {
        api
          .post(
            "https://stroy-assist-backend.ru:8443/api/public/sms/3pizza/send",
            data
          )
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  },
  modules: {}
});
