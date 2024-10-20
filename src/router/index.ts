import {createRouter, createWebHistory} from 'vue-router';

import { Account } from '@/components';
import { LoginView } from '@/views';


const routes = [
    {
        path: '/',
        name: 'Login',
        component: LoginView,
    },
    {
        path:'/account',
        name: 'Account',
        component: Account,
    },
];


export const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;
