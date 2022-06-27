import { createRouter, createWebHistory } from "vue-router";
import { RouterView } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/masjid",
      name: "masjid",
      component: () => import("../views/MasjidView.vue"),
    },

    //admin
    {
      path: "/admin",
      component: RouterView,
      children: [
        {
          path: "",
          name: "admin.dashboard",
          component: () => import("../views/admin/DashboardView.vue"),
        },
        {
          path: "login",
          name: "admin.login",
          component: () => import("../views/admin/LoginView.vue"),
        },
        {
          path: "masjid",
          name: "admin.masjid",
          component: () => import("../views/admin/MasjidView.vue"),
        },
        {
          path: "donasi",
          name: "admin.donasi",
          component: () => import("../views/admin/DonasiView.vue"),
        },
      ],
    },

    {
      path: "/:pathMatch(.*)*",
      component: () => import("../views/ErrorView.vue"),
    },
  ],
});

export default router;
