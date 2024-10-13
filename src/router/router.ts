import {createRouter, createWebHistory} from 'vue-router';
import Login from'../components/Login.vue';
import Account from '../components/Account.vue';

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

