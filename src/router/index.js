import { createWebHashHistory, createRouter } from "vue-router";

import HomePage from "@/components/HomePage.vue";
import ContactPage from "@/components/ContactPage.vue";
import GaleriPage from "@/components/GaleriPage.vue";
import TiketHomepage from "@/components/TiketHomepage.vue";
import TentangPage from "@/components/TentangPage.vue";
import AboutmePage from "@/components/AboutmePage.vue";

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
    {
        path: '/tiket',
        name: 'Tiket',
        component: TiketHomepage,
    },
    {

        path:'/tentang',
        name:'Tentang',
        component:TentangPage
    },
    {    path:'/aboutme',
        name:'AboutMe',
        component:AboutmePage
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;