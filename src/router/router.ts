import {createRouter, createWebHistory} from 'vue-router';

import { Account, Login } from '@/components';


const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
    },
    {
        path:'/account',
        name: 'Account',
        component: Account,
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;
