import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", redirect: "/login" },
    {
      path: "/",
      name: "index",
      component: () => import("@/view/Index.vue"),
    },
    {
      path: "/",
      name: "Home",
      component: () => import("@/view/Login.vue"),
    },
    {
      path: "/login",
      name: "login",
      meta: { layout: "empty" },
      component: () => import("@/view/Login.vue"),
    },
    {
      path: "/signup",
      name: "SignUp",
      component: () => import("@/components/common/SignUp.vue"),
    },
    // {
    //   path: "/manage",
    //   name: "Management",
    //   component: () => import("@/components/Management.vue"),
    // },
  ],
});
