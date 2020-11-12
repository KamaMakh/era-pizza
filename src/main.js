import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueMask from "v-mask";
import globalOptions from "@/mixins/globalMethods";

Vue.config.productionTip = false;
Vue.use(VueMask);

Vue.mixin({
  data() {
    return {
      ...globalOptions
    };
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
