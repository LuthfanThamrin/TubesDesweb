import { createWebHashHistory, createRouter } from "vue-router";

import HomePage from "@/components/HomePage.vue";
import ContactPage from "@/components/ContactPage.vue";
import GaleriPage from "@/components/GaleriPage.vue";

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
    {

        path: '/galeri',
        name: 'Galeri',
        component: GaleriPage,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;