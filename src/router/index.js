import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import DetailView from "../views/DetailView.vue";
import PricingView from "../views/PricingView.vue";
import SuccessView from "../views/SuccessView.vue";
import CategoriesView from "../views/CategoriesView.vue";
import CategoryItems from "../views/CategoryItems.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },

    {
      path: "/product/:id",
      name: "product",
      component: DetailView,
    },

    {
      path: "/categories/:id",
      name: "category-items",
      component: CategoryItems,
    },

    {
      path: "/categories",
      name: "categories",
      component: CategoriesView,
    },

    {
      path: "/pricing",
      name: "pricing",
      component: PricingView,
    },

    {
      path: "/success",
      name: "success",
      component: SuccessView,
    },

    {
      path: "/*",
      component: 404,
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
