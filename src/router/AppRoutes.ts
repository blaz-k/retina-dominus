// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue';
// import SignInForm from '../views/public/SignIn/SignInForm.vue';
import PendingReportsView from '@/views/app/PendingReports/PendingReportsView.vue';
import StatusReportsView from '@/views/app/StatusReports/StatusReportsView.vue';
import AllReportsView from '@/views/app/AllReports/AllReportsView.vue';
// import Dashboard from '../views/Dashboard/Dashboard.vue'
import Dashboard from '@/views/app/Dashboard/Dashboard.vue';
// import App from '../App.vue';
import AppHome from '@/views/app/AppHome.vue';
import TaskDetailsView from '@/views/app/TaskDetails/TaskDetailsView.vue';

export const AppRoutes = [
  {
      children: [
        {
          component: Dashboard,
          name: "dashboard_dashboard",
          path: "dashboard"
        },
        {
          component: AllReportsView,
          path: 'all-reports',
          name: 'allReports',
        },
        {
          component: PendingReportsView,
          path: 'pending-reports/:id',
          name: 'pendingReports',
          props: true
        },
        {
          component: StatusReportsView,
          path: 'status-reports/:id',
          name: 'statusReports',
          props: true
        },
        {
          component: TaskDetailsView,
          path: 'task-details/:id',
          name: 'taskDetails',
          props: true
        },
      ],
      component: AppHome,
      name: "app_home",
      path: "",
      redirect:  { name: "dashboard_dashboard" }, // this is the default home view
  },
];