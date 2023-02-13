import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/news",
    name: "News",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/News.vue"),
  },
  {
    path: "/inform",
    name: "Information",
    component: () => import("../views/Inform.vue"),
  },
  {
    path: "/health",
    name: "Health",
    component: () => import("../views/Health.vue"),
  },
  {
    path: "/d-learning",
    name: "DLearning",
    component: () => import("../views/DLearning.vue"),
  },
  {
    path: "/one-news",
    name: "oneNews",
    component: () => import("../views/oneNews.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
