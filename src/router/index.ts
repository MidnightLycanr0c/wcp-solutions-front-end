import {createRouter, createWebHistory} from 'vue-router';

import {
    AccountView,
    DashboardView,
    LoginView,
    NotFoundView,
} from '@/views';


const routes = [
    {
        path:     '/',
        name:     'Login',
        component: LoginView,
        meta: { title: 'WCP Solutions | Sign In' }
    },
    {
        path:     '/dashboard',
        name:     'Dashboard',
        component: DashboardView,
        meta: { title: 'Dashboard' }
    },
    {
        path:     '/account',
        name:     'Account',
        component: AccountView,
        meta: { title: 'Account Information' }
    },
    {
        path:     '/:pathMatch(.*)*',
        name:     'Not Found',
        component: NotFoundView
    }
];


export const router = createRouter({
    history: createWebHistory(),
    routes,
});


router.beforeEach((to) => {
    document.title = (to.meta.title as string) || 'WCP Solutions | Online Lookup Tool';
});


export default router;
