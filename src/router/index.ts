import {createRouter, createWebHistory} from 'vue-router';

import { AccountView, LoginView } from '@/views';


const routes = [
    {
        path: '/',
        name: 'Login',
        component: LoginView,
    },
    {
        path:'/account',
        name: 'Account',
        component: AccountView,
    },
];


export const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;
