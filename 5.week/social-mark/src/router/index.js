import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store";
const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("@/views/Home"),
  },
  {
    name: "Login",
    path: "/login",
    component: () => import("@/views/Login"),
  },
  {
    name: "Register",
    path: "/register",
    component: () => import("@/views/Register"),
  },
  {
    name: "NewBookmark",
    path: "/new",
    component: () => import("@/views/NewBookmark"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
  const authRequiredRoutes = ["Home"];
  const authNoRequiredRoutes = ["Login", "Register"];
  const _isAuthenticated = store.getters._isAuthenticated;

  if (authNoRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated)
    next(false);
  if (authRequiredRoutes.indexOf(to.name) > -1) {
    if (_isAuthenticated) {
      next();
    } else {
      next({ name: "Login" });
    }
  } else next();
});

export default router;
