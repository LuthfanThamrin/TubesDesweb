import { createWebHashHistory, createRouter } from "vue-router";

import HomePage from "@/components/HomePage.vue";
import ContactPage from "@/components/ContactPage.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactPage,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;