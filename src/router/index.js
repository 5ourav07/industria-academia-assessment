import NotFoundView from "@/views/NotFoundView.vue";
import Task1View from "@/views/Task1View.vue";
import Task2View from "@/views/Task2View.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "task-1",
      component: Task1View,
    },
    {
      path: "/task-2",
      name: "task-2",
      component: Task2View,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

export default router;
