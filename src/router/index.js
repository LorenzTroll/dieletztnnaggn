import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routerHistory = createWebHistory()

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/show/:id",
    name: "Show",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Show.vue"),
    props: true
  },
  {
    path: "/list",
    name: "List",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/List.vue")
  }
];

const router = createRouter({
  history: routerHistory,
  routes
});

export default router;
