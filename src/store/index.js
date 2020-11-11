import Vue from "vue";
import Vuex from "vuex";
import api from "@/utils/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    submitForm(data) {
      return new Promise((resolve, reject) => {
        api
          .post("//151.248.122.207:8080/api/public/sms/3pizza/send", data, {
            headers: { "Content-Type": "multipart/form-data" }
          })
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
