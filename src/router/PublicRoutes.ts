// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue';
// import SignInForm from '../views/public/SignIn/SignInForm.vue';
import SignIn from '../views/public/SignIn/SignIn.vue';
import PasswordReset from '../views/public/PasswordReset/PasswordReset.vue';
// import PendingTasksView from '../views/app/PendingTasks/PendingTasksView.vue';
// import AllReportsView from '../views/app/AllReports/AllReportsView.vue';
// import App from '../App.vue';

export const PublicRoutes = [
    {
        children: [
            {
                component: SignIn,
                name: "sign_in",
                path: "sign-in",
            },
            {
                component: PasswordReset,
                name: "password_reset",
                path: "reset-password",
            },
            
        ],
        name: "public",
        path: "",
        redirect: "/sign-in", // this is the default public view
    },
];
