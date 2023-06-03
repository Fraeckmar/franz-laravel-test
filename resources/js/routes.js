import { createRouter, createWebHistory } from 'vue-router'

import SessionStorage from './utils/SessionStorage';
import NotFound from './components/NotFound.vue'
import HomePage from './components/HomePage.vue';
import User from './components/user';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import Unsubscribe from './components/auth/Unsubscribe.vue';
import SesstionStorage from './utils/SessionStorage'

 
export const routes = [
    {
        path: "/:catchAll(.*)",
        name: "not-found",
        component: NotFound,
    },
    {
        name: 'home',
        path: '/',
        component: HomePage,
        meta: {
            label: 'Home'
        }
    },
    {
        name: 'login',
        path: '/login',
        component: Login,
        meta: {
            label: 'Login'
        }
    },
    {
        name: 'register',
        path: '/register',
        component: Register,
        meta: {
            label: 'Register'
        }
    },
    {
        name: 'logout',
        path: '/logout',
        beforeEnter: (to, from, next) => {
            SessionStorage.set("accessToken", null);
            SessionStorage.set("user", null);
            window.location = "/";
        },
    },
    {
        name: 'unsubscribe',
        path: '/unsubscribe',
        component: Unsubscribe,
        meta: {
            label: 'Unsubscribe'
        }
    },
    {
        name: 'users',
        path: '/users',
        component: User,
        meta: {
            label: 'Users'
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    base: process.env.BASE_URL || "",
    routes
})

router.beforeEach(async (to, from, next) => {
    const hasToken = SesstionStorage.get('accessToken');
    const exemptedRoutes = [
        "login",
        "register",
        "not-found",
        "logout",
        "home"
    ];

    if (!hasToken && !exemptedRoutes.includes(to.name)) {
        next({ name: "login" });
        return;
    }

    next();
});

export default router