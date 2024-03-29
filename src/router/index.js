import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: () => import("@/views/landing")
  },
  {
    path: "/policy",
    name: "Policy",
    component: () => import("@/views/policy")
  }
];

const router = new VueRouter({
  routes
});

export default router;
