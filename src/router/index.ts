import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import about from "@/views/aw-about.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/about",
    component: about,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
