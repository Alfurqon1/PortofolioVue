import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("@/views/HomeView.vue"),
        },
        {
          path: "contact",
          name: "contact",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("@/views/ContactView.vue"),
        },
        {
          path: "details/:id",
          name: "details",
          component: () => import("@/views/DetailsView.vue"),
        },
      ],
    },
  ],
});

export default router;
