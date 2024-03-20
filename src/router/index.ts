import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue';
// import SignInForm from '../views/public/SignIn/SignInForm.vue';
import PendingReportsView from '../views/app/PendingReports/PendingReportsView.vue';
import AllReportsView from '../views/app/AllReports/AllReportsView.vue';
import App from '../App.vue';
import { PublicRoutes } from "../router/PublicRoutes";
import { AppRoutes } from "../router/AppRoutes";

const routes = [
    
  {
      children: [
          ...PublicRoutes,
          ...AppRoutes
      ],

      component: App,
      path: "/",
      name: "home",
      redirect: "/sign-in", // this is the default public view
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
